---
slug: /speicherverwaltung/memory-management-modelle
title: 13.1. Memory Management Modelle
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 13.1. Memory Management Modelle

Modelle zur Speicherverwaltung.

## 13.1.1. Manual Memory Management

Der Programmierer verwaltet Speicher explizit durch manuelle Allokation und Freigabe.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'd', 'fortran', 'nim', 'objective-c', 'object-pascal', 'odin', 'rust', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
// Benötigt: #include <stdlib.h>
int* numbers = malloc(5 * sizeof(int));
if (numbers == NULL) {
    // Fehlerbehandlung
    return;
}

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Speicher explizit freigeben
free(numbers);
numbers = NULL;
```

**Besonderheiten:**
- Verwendet `malloc`/`calloc` für Allokation und `free` für Freigabe
- `malloc` gibt `NULL` zurück bei Fehlern, daher immer prüfen
- Nach `free` sollte Pointer auf `NULL` gesetzt werden, um Dangling-Pointer zu vermeiden

**Weiterführende Links:**
- [C Standard Library - Memory Management](https://en.cppreference.com/w/c/memory)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// C-Stil: malloc/free
// Benötigt: #include <cstdlib>
int* numbers = static_cast<int*>(malloc(5 * sizeof(int)));
if (numbers == nullptr) {
    // Fehlerbehandlung
    return;
}

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

free(numbers);
numbers = nullptr;

// C++-Stil: new/delete
int* numbers2 = new int[5];
numbers2[0] = 10;
numbers2[1] = 20;
numbers2[2] = 30;
numbers2[3] = 40;
numbers2[4] = 50;

delete[] numbers2;
numbers2 = nullptr;
```

**Besonderheiten:**
- Unterstützt sowohl C-Stil (`malloc`/`free`) als auch C++-Stil (`new`/`delete`)
- `new[]` erfordert `delete[]`, `new` erfordert `delete` (Mismatch führt zu undefined behavior)
- Moderne C++-Praxis bevorzugt Smart Pointers statt manueller Speicherverwaltung

**Weiterführende Links:**
- [cppreference.com - Dynamic memory management](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Manuelle Speicherverwaltung mit alloc/free
# Benötigt: import system/alloc
var numbers = cast[ptr UncheckedArray[int]](alloc(5 * sizeof(int)))
if numbers == nil:
    # Fehlerbehandlung
    return

numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50

dealloc(numbers)
numbers = nil
```

**Besonderheiten:**
- Unterstützt manuelle Speicherverwaltung über `alloc`/`dealloc`
- Standardmäßig verwendet Nim Garbage Collection, manuelle Verwaltung ist optional
- `UncheckedArray` wird für manuell allokierte Arrays verwendet

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `mem.alloc` für Allokation und `mem.free` für Freigabe
- `defer` kann verwendet werden, um Freigabe am Ende des Scopes sicherzustellen
- Unterstützt verschiedene Allokatoren (Default, Context, Temp)

**Weiterführende Links:**
- [Odin Documentation - Memory Management](https://odin-lang.org/docs/overview/#memory-management)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Manuelle Speicherverwaltung nur in unsafe-Blöcken
use std::alloc::{alloc, dealloc, Layout};

unsafe {
    let layout = Layout::new::<[i32; 5]>();
    let numbers = alloc(layout) as *mut i32;
    
    if numbers.is_null() {
        // Fehlerbehandlung
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

**Besonderheiten:**
- Manuelle Speicherverwaltung nur in `unsafe`-Blöcken möglich
- Standardmäßig verwendet Rust Ownership-System und RAII
- `Layout` muss korrekt angegeben werden für `alloc`/`dealloc`

**Weiterführende Links:**
- [The Rust Book - Unsafe Rust](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Manuelle Speicherverwaltung
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

**Besonderheiten:**
- V verwendet standardmäßig GC (autofree)
- Manuelle Verwaltung mit `malloc()` und `free()` in `unsafe`-Blöcken
- C-Interop: `C.malloc()` und `C.free()` ebenfalls verfügbar
- `-autofree` Compiler-Flag für automatische Speicherverwaltung ohne GC

**Weiterführende Links:**
- [V Documentation - Memory Management](https://github.com/vlang/v/blob/master/doc/docs.md#memory-management)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

// Manuelle Speicherverwaltung mit Allocator
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

**Besonderheiten:**
- Verwendet explizite Allokatoren für Speicherverwaltung
- `defer` wird verwendet, um Freigabe am Ende des Scopes sicherzustellen
- Verschiedene Allokatoren verfügbar (GeneralPurposeAllocator, ArenaAllocator, etc.)

**Weiterführende Links:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="d" label="D">

```d
// Manual Memory Management
// Benötigt: import core.memory;
// Benötigt: import core.stdc.stdlib;

// C-kompatibles malloc/free
int* ptr = cast(int*) malloc(int.sizeof * 10);
if (ptr !is null) {
    ptr[0] = 42;
    free(ptr);
}

// GC deaktivieren für kritische Abschnitte
GC.disable();
// ... Performance-kritischer Code ...
GC.enable();

// @nogc Funktionen verbieten GC-Allokationen
@nogc int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- `core.stdc.stdlib` bietet `malloc`, `free`, `realloc`
- `@nogc` Attribut verbietet GC-Allokationen in einer Funktion
- `GC.disable()` / `GC.enable()` zur GC-Steuerung
- Hybridansatz: GC als Standard, manuelle Verwaltung bei Bedarf

**Weiterführende Links:**
- [D Language Specification - Memory Management](https://dlang.org/spec/garbage.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Manuelle Speicherverwaltung mit ALLOCATE/DEALLOCATE
integer, allocatable :: arr(:)
integer :: ierr

allocate(arr(100), stat=ierr)
if (ierr /= 0) stop "Allocation fehlgeschlagen"

arr = 0
! ... Nutzung ...

deallocate(arr)
```

**Besonderheiten:**
- `ALLOCATE` für dynamische Speicherallokation
- `DEALLOCATE` für Freigabe
- `STAT=` für Fehlerbehandlung
- Allocatable Variablen werden automatisch freigegeben, wenn sie den Scope verlassen (seit Fortran 2003)

**Weiterführende Links:**
- [Fortran Wiki - ALLOCATE](https://fortranwiki.org/fortran/show/ALLOCATE)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  person: TPerson;
  buffer: Pointer;
begin
  // Objekte: Create / Free
  person := TPerson.Create('Alice');
  try
    person.Greet;
  finally
    person.Free;
  end;

  // Low-Level: GetMem / FreeMem
  GetMem(buffer, 1024);
  try
    // buffer verwenden
  finally
    FreeMem(buffer);
  end;
end;
```

**Besonderheiten:**
- Objekte müssen manuell mit `Free` freigegeben werden
- `try`/`finally` für sichere Freigabe empfohlen
- `GetMem`/`FreeMem` für rohen Speicher
- `New`/`Dispose` für typisierte Pointer

**Weiterführende Links:**
- [Delphi Documentation - Memory Management](https://docwiki.embarcadero.com/RADStudio/en/Memory_Management)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Manual Reference Counting (MRC) - vor ARC
NSObject *obj = [[NSObject alloc] init]; // Referenzzähler: 1
[obj retain];                             // Referenzzähler: 2
[obj release];                            // Referenzzähler: 1
[obj release];                            // Referenzzähler: 0 → Freigabe

// Autorelease Pool
NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
NSString *str = [[[NSString alloc] initWithString:@"Hallo"] autorelease];
[pool drain]; // Gibt alle autoreleased Objekte frei
```

**Besonderheiten:**
- Manual Reference Counting (MRC) war der Standard vor ARC
- `alloc`/`retain` erhöht, `release` verringert den Referenzzähler
- `autorelease` verzögert `release` bis zum Pool-Drain
- MRC ist optional auch mit ARC-Compilern nutzbar (per-File-Flag)

**Weiterführende Links:**
- [Apple Documentation - Memory Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html)

</TabItem>
</Tabs>


## 13.1.2. Garbage Collection

Automatische Speicherverwaltung durch einen Garbage Collector, der nicht mehr referenzierte Objekte automatisch freigibt.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'mercury', 'nim', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'ruby', 'scala', 'scheme', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['mojo']} orangeTabs={['swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Objekte werden automatisch vom Garbage Collector verwaltet
List<int> numbers = new List<int> { 10, 20, 30, 40, 50 };

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = null;

// Explizite Garbage Collection (normalerweise nicht nötig)
GC.Collect();
GC.WaitForPendingFinalizers();
```

**Besonderheiten:**
- Verwendet einen mark-and-sweep Garbage Collector
- Generational GC mit verschiedenen Generationen (0, 1, 2)
- `GC.Collect()` kann manuell aufgerufen werden, ist aber normalerweise nicht nötig

**Weiterführende Links:**
- [Microsoft .NET Documentation - Garbage Collection](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/)

</TabItem>
<TabItem value="java" label="Java">

```java
// Objekte werden automatisch vom Garbage Collector verwaltet
List<Integer> numbers = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50));

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = null;

// Explizite Garbage Collection (normalerweise nicht nötig)
System.gc();
```

**Besonderheiten:**
- Verschiedene GC-Algorithmen verfügbar (G1, ZGC, Parallel GC, etc.)
- Generational GC mit Young Generation und Old Generation
- `System.gc()` ist nur ein Hinweis, keine Garantie

**Weiterführende Links:**
- [Oracle Java Documentation - Garbage Collection](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Objekte werden automatisch vom Garbage Collector verwaltet
numbers = [10, 20, 30, 40, 50]

# Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = None

# Explizite Garbage Collection (normalerweise nicht nötig)
import gc
gc.collect()
```

**Besonderheiten:**
- Verwendet Reference Counting als primären Mechanismus
- Zusätzlich zyklischer Garbage Collector für zirkuläre Referenzen
- `gc.collect()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [Python Documentation - gc](https://docs.python.org/3/library/gc.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Objekte werden automatisch vom Garbage Collector verwaltet
let numbers = [10, 20, 30, 40, 50];

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = null;

// Keine explizite GC-API verfügbar (browser/engine-spezifisch)
```

**Besonderheiten:**
- GC-Implementierung ist engine-spezifisch (V8, SpiderMonkey, etc.)
- Moderne Engines verwenden mark-and-sweep mit verschiedenen Optimierungen
- Keine standardisierte API für manuelle GC

**Weiterführende Links:**
- [MDN Web Docs - Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Objekte werden automatisch vom Garbage Collector verwaltet
let numbers: number[] = [10, 20, 30, 40, 50];

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = null;

// Keine explizite GC-API verfügbar (browser/engine-spezifisch)
```

**Besonderheiten:**
- Verwendet die GC des zugrundeliegenden JavaScript-Engines
- Gleiche GC-Charakteristiken wie JavaScript
- Keine standardisierte API für manuelle GC

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Objekte werden automatisch vom Garbage Collector verwaltet
numbers := []int{10, 20, 30, 40, 50}

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = nil

// Explizite Garbage Collection (normalerweise nicht nötig)
import "runtime"
runtime.GC()
```

**Besonderheiten:**
- Concurrent Garbage Collector mit niedriger Latenz
- Stop-the-world Phasen sind minimal
- `runtime.GC()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [Go Documentation - Garbage Collector](https://go.dev/doc/gc-guide)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Objekte werden automatisch vom Garbage Collector verwaltet
numbers = [10, 20, 30, 40, 50]

# Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = nil

# Explizite Garbage Collection (normalerweise nicht nötig)
GC.start
```

**Besonderheiten:**
- Verwendet einen mark-and-sweep Garbage Collector
- Generational GC seit Ruby 2.1
- `GC.start` kann manuell aufgerufen werden

**Weiterführende Links:**
- [Ruby Documentation - GC](https://ruby-doc.org/core-3.1.2/GC.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Objekte werden automatisch verwaltet (ARC, nicht klassischer GC)
var numbers = [10, 20, 30, 40, 50]

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = []

// Keine explizite GC-API (verwendet ARC)
```

**Besonderheiten:**
- Verwendet Automatic Reference Counting (ARC), nicht klassischen GC
- Speicher wird zur Compile-Zeit verwaltet, nicht zur Laufzeit
- Keine Stop-the-world Phasen

**Weiterführende Links:**
- [Swift Documentation - Automatic Reference Counting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Objekte werden automatisch vom Garbage Collector verwaltet (JVM)
val numbers = listOf(10, 20, 30, 40, 50)

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
// (Kotlin hat keine explizite null-Zuweisung für val)

// Explizite Garbage Collection (normalerweise nicht nötig)
System.gc()
```

**Besonderheiten:**
- Auf JVM: Verwendet Java GC
- Auf Native: Verwendet eigenen GC
- `System.gc()` ist nur ein Hinweis, keine Garantie

**Weiterführende Links:**
- [Kotlin Documentation - Memory Management](https://kotlinlang.org/docs/native-memory-manager.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Objekte werden automatisch vom Garbage Collector verwaltet (JVM)
val numbers = List(10, 20, 30, 40, 50)

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben

// Explizite Garbage Collection (normalerweise nicht nötig)
System.gc()
```

**Besonderheiten:**
- Auf JVM: Verwendet Java GC
- Gleiche GC-Charakteristiken wie Java
- `System.gc()` ist nur ein Hinweis, keine Garantie

**Weiterführende Links:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Objekte werden automatisch vom Garbage Collector verwaltet
List<int> numbers = [10, 20, 30, 40, 50];

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = null;

// Explizite Garbage Collection (normalerweise nicht nötig)
import 'dart:developer' as developer;
developer.gc();
```

**Besonderheiten:**
- Generational Garbage Collector
- Optimiert für Flutter-Apps mit 60fps
- `developer.gc()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [Dart Documentation - Memory Management](https://dart.dev/guides/language/effective-dart/memory)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Objekte werden automatisch vom Garbage Collector verwaltet
$numbers = [10, 20, 30, 40, 50];

// Wenn $numbers nicht mehr referenziert wird, wird es automatisch freigegeben
$numbers = null;

// Explizite Garbage Collection (normalerweise nicht nötig)
gc_collect_cycles();
```

**Besonderheiten:**
- Verwendet Reference Counting als primären Mechanismus
- Zyklischer Garbage Collector für zirkuläre Referenzen
- `gc_collect_cycles()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [PHP Documentation - Garbage Collection](https://www.php.net/manual/en/features.gc.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Terme werden automatisch vom Garbage Collector verwaltet
numbers([10, 20, 30, 40, 50]).

% Wenn Terme nicht mehr referenziert werden, werden sie automatisch freigegeben
% Prolog verwaltet Speicher automatisch über die WAM (Warren Abstract Machine)

% Explizite Garbage Collection (SWI-Prolog)
:- garbage_collect.
```

**Besonderheiten:**
- Prolog verwaltet Speicher vollständig automatisch über die WAM (Warren Abstract Machine)
- SWI-Prolog verwendet mark-and-sweep Garbage Collection auf dem globalen Stack
- `garbage_collect/0` kann in SWI-Prolog manuell aufgerufen werden
- Verschiedene Speicherbereiche: Local Stack, Global Stack (Heap), Trail, Choice Points

**Weiterführende Links:**
- [SWI-Prolog Documentation - Memory Management](https://www.swi-prolog.org/pldoc/man?section=memory)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Objekte werden automatisch vom Garbage Collector verwaltet
local numbers = {10, 20, 30, 40, 50}

-- Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = nil

-- Explizite Garbage Collection (normalerweise nicht nötig)
collectgarbage("collect")
```

**Besonderheiten:**
- Incremental Garbage Collector
- `collectgarbage()` kann manuell aufgerufen werden
- Verschiedene GC-Modi verfügbar

**Weiterführende Links:**
- [Lua Documentation - Garbage Collection](https://www.lua.org/manual/2.4/manual.html#2.5)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Objekte werden automatisch vom Garbage Collector verwaltet
numbers = [10, 20, 30, 40, 50]

-- Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
-- (Haskell hat keine explizite null-Zuweisung)

-- Explizite Garbage Collection (normalerweise nicht nötig)
-- System.Mem.performGC (GHC-spezifisch)
```

**Besonderheiten:**
- GHC verwendet einen generational, parallel Garbage Collector
- Optimiert für funktionale Programmierung
- `System.Mem.performGC` kann manuell aufgerufen werden

**Weiterführende Links:**
- [GHC Documentation - Memory Management](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/runtime_control.html#rts-options-gc)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Objekte werden automatisch vom Garbage Collector verwaltet *)
let numbers = [10; 20; 30; 40; 50]

(* Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben *)

(* Explizite Garbage Collection (normalerweise nicht nötig) *)
Gc.full_major ()
```

**Besonderheiten:**
- Generational Garbage Collector
- Incremental GC mit Stop-the-world Phasen
- `Gc.full_major` kann manuell aufgerufen werden

**Weiterführende Links:**
- [OCaml Documentation - Garbage Collection](https://v2.ocaml.org/api/Gc.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Objekte werden automatisch vom Garbage Collector verwaltet (.NET)
let numbers = [10; 20; 30; 40; 50]

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben

// Explizite Garbage Collection (normalerweise nicht nötig)
System.GC.Collect()
```

**Besonderheiten:**
- Verwendet .NET Garbage Collector
- Gleiche GC-Charakteristiken wie C#
- `System.GC.Collect()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [F# Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Objekte werden automatisch vom Garbage Collector verwaltet (JVM)
(def numbers [10 20 30 40 50])

;; Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben

;; Explizite Garbage Collection (normalerweise nicht nötig)
(System/gc)
```

**Besonderheiten:**
- Auf JVM: Verwendet Java GC
- Gleiche GC-Charakteristiken wie Java
- `System/gc` ist nur ein Hinweis, keine Garantie

**Weiterführende Links:**
- [Clojure Documentation](https://clojure.org/reference/documentation)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Objekte werden automatisch vom Garbage Collector verwaltet (JVM)
def numbers = [10, 20, 30, 40, 50]

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = null

// Explizite Garbage Collection (normalerweise nicht nötig)
System.gc()
```

**Besonderheiten:**
- Auf JVM: Verwendet Java GC
- Gleiche GC-Charakteristiken wie Java
- `System.gc()` ist nur ein Hinweis, keine Garantie

**Weiterführende Links:**
- [Groovy Documentation](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Objekte werden automatisch vom Garbage Collector verwaltet
Numbers = [10, 20, 30, 40, 50].

% Wenn Numbers nicht mehr referenziert wird, wird es automatisch freigegeben
% (Erlang hat keine explizite null-Zuweisung)

% Explizite Garbage Collection (normalerweise nicht nötig)
% erlang:garbage_collect() (prozess-spezifisch)
```

**Besonderheiten:**
- Per-Process Garbage Collector
- Jeder Prozess hat seinen eigenen Heap
- `erlang:garbage_collect()` kann pro Prozess aufgerufen werden

**Weiterführende Links:**
- [Erlang Documentation - Memory Management](https://www.erlang.org/doc/efficiency_guide/processes.html#memory)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Objekte werden automatisch vom Garbage Collector verwaltet (BEAM VM)
numbers = [10, 20, 30, 40, 50]

# Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben

# Explizite Garbage Collection (normalerweise nicht nötig)
# :erlang.garbage_collect() (prozess-spezifisch)
```

**Besonderheiten:**
- Verwendet BEAM VM Garbage Collector (wie Erlang)
- Per-Process Garbage Collector
- `:erlang.garbage_collect()` kann pro Prozess aufgerufen werden

**Weiterführende Links:**
- [Elixir Documentation - Processes](https://elixir-lang.org/getting-started/processes.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Objekte werden automatisch vom Garbage Collector verwaltet
numbers = [10, 20, 30, 40, 50]

-- Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
-- (Elm hat keine explizite null-Zuweisung)

-- Keine explizite GC-API verfügbar
```

**Besonderheiten:**
- Verwendet JavaScript GC (kompiliert zu JavaScript)
- Gleiche GC-Charakteristiken wie JavaScript
- Keine standardisierte API für manuelle GC

**Weiterführende Links:**
- [Elm Documentation](https://guide.elm-lang.org/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Objekte werden automatisch vom Garbage Collector verwaltet
let numbers = [10, 20, 30, 40, 50]

-- Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
-- (PureScript hat keine explizite null-Zuweisung)

-- Keine explizite GC-API verfügbar (target-spezifisch)
```

**Besonderheiten:**
- GC hängt vom Ziel ab (JavaScript, Erlang, etc.)
- Gleiche GC-Charakteristiken wie das Ziel
- Keine standardisierte API für manuelle GC

**Weiterführende Links:**
- [PureScript Documentation](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Objekte werden automatisch vom Garbage Collector verwaltet
var numbers = [10, 20, 30, 40, 50];

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = null;

// Keine explizite GC-API verfügbar (target-spezifisch)
```

**Besonderheiten:**
- GC hängt vom Ziel ab (JavaScript, C#, Java, etc.)
- Gleiche GC-Charakteristiken wie das Ziel
- Keine standardisierte API für manuelle GC

**Weiterführende Links:**
- [Haxe Documentation](https://haxe.org/documentation/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Objekte werden automatisch vom Garbage Collector verwaltet
numbers = [10, 20, 30, 40, 50]

# Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = nothing

# Explizite Garbage Collection (normalerweise nicht nötig)
GC.gc()
```

**Besonderheiten:**
- Mark-and-sweep Garbage Collector
- Optimiert für numerische Berechnungen
- `GC.gc()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [Julia Documentation - Garbage Collection](https://docs.julialang.org/en/v1/manual/garbage-collection/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Objekte werden automatisch vom Garbage Collector verwaltet
var numbers = @[10, 20, 30, 40, 50]

# Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = nil

# Explizite Garbage Collection (normalerweise nicht nötig)
GC_fullCollect()
```

**Besonderheiten:**
- Standardmäßig verwendet Nim Garbage Collection
- Verschiedene GC-Algorithmen verfügbar (refc, markAndSweep, etc.)
- `GC_fullCollect()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [Nim Manual - Garbage Collection](https://nim-lang.org/docs/gc.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Objekte werden automatisch vom Garbage Collector verwaltet
int[] numbers = [10, 20, 30, 40, 50];

// Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = null;

// Explizite Garbage Collection (normalerweise nicht nötig)
import core.memory;
GC.collect();
```

**Besonderheiten:**
- Mark-and-sweep Garbage Collector
- Optional: @nogc für manuelle Speicherverwaltung
- `GC.collect()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [D Language Specification - Garbage Collection](https://dlang.org/spec/garbage.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Objekte werden automatisch vom Garbage Collector verwaltet
numbers = [10, 20, 30, 40, 50]

# Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = nil

# Explizite Garbage Collection (normalerweise nicht nötig)
GC.collect
```

**Besonderheiten:**
- Boehm-Demers-Weiser Garbage Collector
- Mark-and-sweep Algorithmus
- `GC.collect` kann manuell aufgerufen werden

**Weiterführende Links:**
- [Crystal Documentation - Garbage Collection](https://crystal-lang.org/reference/guides/gc.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Objekte werden automatisch vom Garbage Collector verwaltet
numbers <- c(10, 20, 30, 40, 50)

# Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers <- NULL

# Explizite Garbage Collection (normalerweise nicht nötig)
gc()
```

**Besonderheiten:**
- Mark-and-sweep Garbage Collector
- `gc()` kann manuell aufgerufen werden
- Automatische GC bei Speicherdruck

**Weiterführende Links:**
- [R Documentation - Memory](https://cran.r-project.org/doc/manuals/r-release/R-exts.html#Memory-allocators)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Objekte werden automatisch vom Garbage Collector verwaltet
my @numbers = (10, 20, 30, 40, 50);

# Wenn @numbers nicht mehr referenziert wird, wird es automatisch freigegeben
@numbers = ();

# Explizite Garbage Collection (normalerweise nicht nötig)
# Keine explizite GC-API in Standard-Perl
```

**Besonderheiten:**
- Reference Counting als primärer Mechanismus
- Zyklischer Garbage Collector für zirkuläre Referenzen
- Automatische Freigabe bei Referenz-Count 0

**Weiterführende Links:**
- [Perl Documentation - Memory Management](https://perldoc.perl.org/perlguts#Memory-Management)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Objekte werden automatisch vom Garbage Collector verwaltet
(define numbers (list 10 20 30 40 50))

;; Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben

;; Explizite Garbage Collection (normalerweise nicht nötig)
;; (gc) (implementation-spezifisch)
```

**Besonderheiten:**
- GC-Implementierung ist implementation-spezifisch
- Verschiedene GC-Algorithmen je nach Implementation
- `(gc)` kann manuell aufgerufen werden (wenn verfügbar)

**Weiterführende Links:**
- [R7RS Scheme Specification](https://small.r7rs.org/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Objekte werden automatisch vom Garbage Collector verwaltet
(define numbers (list 10 20 30 40 50))

; Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben

; Explizite Garbage Collection (normalerweise nicht nötig)
(collect-garbage)
```

**Besonderheiten:**
- Generational Garbage Collector
- `collect-garbage` kann manuell aufgerufen werden
- Optimiert für funktionale Programmierung

**Weiterführende Links:**
- [Racket Documentation - Memory Management](https://docs.racket-lang.org/reference/gc.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Objekte werden automatisch vom Garbage Collector verwaltet
(defvar numbers (list 10 20 30 40 50))

;; Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben

;; Explizite Garbage Collection (normalerweise nicht nötig)
(sb-ext:gc) ; SBCL-spezifisch
```

**Besonderheiten:**
- GC-Implementierung ist implementation-spezifisch
- Verschiedene GC-Algorithmen je nach Implementation
- `gc` kann manuell aufgerufen werden (implementation-spezifisch)

**Weiterführende Links:**
- [Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Front/index.htm)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
# Objekte werden automatisch vom Garbage Collector verwaltet
var numbers = List[Int](10, 20, 30, 40, 50)

# Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = None

# Keine explizite GC-API verfügbar (experimentell)
```

**Besonderheiten:**
- Experimentelle Sprache, GC-Implementierung kann sich ändern
- Python-ähnliche Syntax mit modernen Features
- Automatische Speicherverwaltung

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Objekte werden automatisch vom Garbage Collector verwaltet
numbers = [10, 20, 30, 40, 50];

% Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = [];

% Keine explizite GC-API verfügbar
```

**Besonderheiten:**
- Automatische Speicherverwaltung
- GC wird automatisch bei Speicherdruck ausgeführt
- Keine standardisierte API für manuelle GC

**Weiterführende Links:**
- [MATLAB Documentation - Memory Management](https://www.mathworks.com/help/matlab/matlab_prog/memory-management.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Terme werden automatisch vom Garbage Collector verwaltet
main(!IO) :-
    Numbers = [10, 20, 30, 40, 50],
    % Wenn Numbers nicht mehr referenziert wird, wird es automatisch freigegeben
    % Mercury verwaltet Speicher vollständig automatisch
    io.write_line(Numbers, !IO).

% Keine explizite GC-API verfügbar
% Der Garbage Collector läuft automatisch im Hintergrund
```

**Besonderheiten:**
- Mercury verwendet den Boehm-Demers-Weiser Conservative Garbage Collector (C-Backend)
- Auf dem Java-Backend wird der JVM GC verwendet, auf dem Erlang-Backend der BEAM GC
- Keine explizite GC-API verfügbar – der GC läuft vollständig automatisch
- Alle Terme und Datenstrukturen werden automatisch vom GC verwaltet

**Weiterführende Links:**
- [Mercury Documentation - Garbage Collection](https://www.mercurylang.org/information/doc-latest/mercury_ref/Garbage-collection.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Objekte werden automatisch vom Garbage Collector verwaltet
numbers = [10, 20, 30, 40, 50];

% Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = [];

% Keine explizite GC-API verfügbar
```

**Besonderheiten:**
- Automatische Speicherverwaltung
- GC wird automatisch bei Speicherdruck ausgeführt
- Keine standardisierte API für manuelle GC

**Weiterführende Links:**
- [GNU Octave Documentation](https://octave.org/doc/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Objekte werden automatisch vom Garbage Collector verwaltet (.NET)
Dim numbers As List(Of Integer) = New List(Of Integer) From {10, 20, 30, 40, 50}

' Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben
numbers = Nothing

' Explizite Garbage Collection (normalerweise nicht nötig)
GC.Collect()
```

**Besonderheiten:**
- Verwendet .NET Garbage Collector
- Gleiche GC-Charakteristiken wie C#
- `GC.Collect()` kann manuell aufgerufen werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Objekte werden automatisch vom Garbage Collector verwaltet *)
numbers = {10, 20, 30, 40, 50};

(* Wenn numbers nicht mehr referenziert wird, wird es automatisch freigegeben *)
numbers = Null;

(* Keine explizite GC-API verfügbar *)
```

**Besonderheiten:**
- Automatische Speicherverwaltung
- GC wird automatisch bei Speicherdruck ausgeführt
- Keine standardisierte API für manuelle GC

**Weiterführende Links:**
- [Wolfram Language Documentation - Memory Management](https://reference.wolfram.com/language/guide/MemoryManagement.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Garbage Collection durch BEAM VM
pub fn create_list() -> List(Int) {
  // Speicher wird automatisch verwaltet
  list.range(1, 1000)
}
// Nicht mehr referenzierte Werte werden automatisch freigegeben
```

**Besonderheiten:**
- BEAM VM bietet per-Process Garbage Collection
- Jeder BEAM-Prozess hat seinen eigenen Heap
- GC läuft pro Prozess, keine globalen GC-Pausen
- Generational Garbage Collection

**Weiterführende Links:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Speicherverwaltung ist automatisch
-- Garbage Collection wird vom Backend bereitgestellt
items : List Int
items = [1, 2, 3, 4, 5]
filtered : List Int
filtered = filter (> 2) items
-- items wird automatisch freigegeben, wenn nicht mehr referenziert
```

**Besonderheiten:**
- Automatische Speicherverwaltung durch Garbage Collection
- GC wird vom gewählten Backend bereitgestellt (Chez Scheme, C mit Boehm GC, etc.)
- Keine manuelle Speicherverwaltung nötig

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/)

</TabItem>
<TabItem value="v" label="V">

```v
// Garbage Collection (Standard)
fn create_data() []int {
    mut data := []int{cap: 1000}
    for i in 0 .. 1000 {
        data << i
    }
    return data  // GC verwaltet den Speicher
}

result := create_data()
// Speicher wird automatisch freigegeben
```

**Besonderheiten:**
- GC ist die Standard-Speicherverwaltung
- `-gc boehm` für Boehm GC (Standard)
- `-autofree` für deterministische Freigabe ohne GC
- `-gc none` deaktiviert den GC vollständig

**Weiterführende Links:**
- [V Documentation - Memory Management](https://github.com/vlang/v/blob/master/doc/docs.md#memory-management)

</TabItem>
</Tabs>


## 13.1.3. Reference Counting

Speicherverwaltung durch Zählen von Referenzen auf Objekte. Objekte werden automatisch freigegeben, wenn der Referenzzähler auf 0 fällt.

### Sprachen {#sprachen}

<Tabs availableTabs={['koka', 'lean4', 'nim', 'objective-c', 'object-pascal', 'perl', 'php', 'python', 'roc', 'swift']}>
<TabItem value="python" label="Python">

```python
# Benötigt: import sys
# Reference Counting als primärer Mechanismus
numbers = [10, 20, 30, 40, 50]
ref_count = sys.getrefcount(numbers)  # Zeigt aktuellen Referenzzähler

# Neue Referenz erhöht Zähler
numbers2 = numbers

# Referenz entfernen verringert Zähler
numbers2 = None

# Wenn alle Referenzen entfernt sind, wird Objekt freigegeben
numbers = None
```

**Besonderheiten:**
- Reference Counting als primärer Mechanismus
- Zusätzlich zyklischer Garbage Collector für zirkuläre Referenzen
- `sys.getrefcount()` zeigt aktuellen Referenzzähler (inkl. temporärer Referenz)

**Weiterführende Links:**
- [Python Documentation - gc](https://docs.python.org/3/library/gc.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Automatic Reference Counting (ARC)
var numbers: [Int]? = [10, 20, 30, 40, 50]

// Neue Referenz erhöht Referenzzähler
var numbers2 = numbers

// Referenz entfernen verringert Zähler
numbers2 = nil

// Wenn alle Referenzen entfernt sind, wird Objekt freigegeben
numbers = nil
```

**Besonderheiten:**
- Verwendet Automatic Reference Counting (ARC)
- Referenzzähler wird zur Compile-Zeit verwaltet
- Keine Laufzeit-Overhead für Reference Counting
- Weak References verfügbar für zirkuläre Referenzen

**Weiterführende Links:**
- [Swift Documentation - Automatic Reference Counting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Automatic Reference Counting (ARC)
NSArray *numbers = @[@10, @20, @30, @40, @50];

// Neue Referenz erhöht Referenzzähler
NSArray *numbers2 = numbers;

// Referenz entfernen verringert Zähler
numbers2 = nil;

// Wenn alle Referenzen entfernt sind, wird Objekt freigegeben
numbers = nil;
```

**Besonderheiten:**
- Verwendet Automatic Reference Counting (ARC) seit iOS 5.0 / OS X 10.7
- Vor ARC: Manuelles Reference Counting mit `retain`/`release`/`autorelease`
- Weak References verfügbar für zirkuläre Referenzen
- `__weak` und `__strong` Qualifier verfügbar

**Weiterführende Links:**
- [Apple Documentation - Automatic Reference Counting](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Reference Counting als primärer Mechanismus
$numbers = [10, 20, 30, 40, 50];

// Neue Referenz erhöht Referenzzähler
$numbers2 = $numbers;

// Referenz entfernen verringert Zähler
$numbers2 = null;

// Wenn alle Referenzen entfernt sind, wird Objekt freigegeben
$numbers = null;
```

**Besonderheiten:**
- Reference Counting als primärer Mechanismus
- Zusätzlich zyklischer Garbage Collector für zirkuläre Referenzen
- Automatische Freigabe bei Referenz-Count 0

**Weiterführende Links:**
- [PHP Documentation - Garbage Collection](https://www.php.net/manual/en/features.gc.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Reference Counting als primärer Mechanismus
my @numbers = (10, 20, 30, 40, 50);
my $numbers_ref = \@numbers;

# Neue Referenz erhöht Referenzzähler
my $numbers_ref2 = $numbers_ref;

# Referenz entfernen verringert Zähler
$numbers_ref2 = undef;

# Wenn alle Referenzen entfernt sind, wird Objekt freigegeben
$numbers_ref = undef;
```

**Besonderheiten:**
- Reference Counting als primärer Mechanismus
- Zyklischer Garbage Collector für zirkuläre Referenzen (seit Perl 5.8)
- Automatische Freigabe bei Referenz-Count 0

**Weiterführende Links:**
- [Perl Documentation - Memory Management](https://perldoc.perl.org/perlguts#Memory-Management)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Perceus Reference Counting
// Koka verwendet Perceus, ein präzises Reference-Counting-System
// mit automatischer Reuse-Analyse

// Werte werden automatisch per Reference Counting verwaltet
fun main()
  val xs = [1, 2, 3, 4, 5]
  val ys = xs  // Referenzzähler wird erhöht
  // Wenn xs nicht mehr verwendet wird, sinkt der Zähler
  // Bei Zähler 0 wird der Speicher freigegeben oder wiederverwendet
  println(ys.show)
```

**Besonderheiten:**
- Perceus Reference Counting: präzise, automatische Referenzzählung zur Compile-Zeit
- Automatische Reuse-Analyse: Speicher wird in-place wiederverwendet wenn möglich
- Keine Zyklen möglich durch rein funktionales Design (keine mutablen Referenzen)
- Kein Garbage Collector nötig – deterministische Speicherfreigabe

**Weiterführende Links:**
- [Koka – Perceus Reference Counting](https://koka-lang.github.io/koka/doc/book.html#sec-perceus)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 verwendet Reference Counting zur Speicherverwaltung
-- Der Compiler fügt automatisch RC-Operationen ein

-- Werte werden per Reference Counting verwaltet
def example : IO Unit := do
  let xs := [1, 2, 3, 4, 5]
  let ys := xs  -- Referenzzähler wird erhöht
  IO.println s!"{ys}"
  -- Wenn xs nicht mehr verwendet wird, sinkt der Zähler
  -- Bei Zähler 0 wird der Speicher freigegeben
```

**Besonderheiten:**
- Lean 4 verwendet Reference Counting als primären Speicherverwaltungsmechanismus.
- Der Compiler fügt automatisch `rc_inc` und `rc_dec` Operationen ein.
- Keine Zyklen möglich durch rein funktionales Design (keine mutablen Referenzen).
- Kein Garbage Collector nötig – deterministische Speicherfreigabe.

**Weiterführende Links:**
- [Lean 4 Documentation - Memory Management](https://lean-lang.org/lean4/doc/dev/ffi.html#memory-management)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Reference Counting (ARC/ORC seit Nim 1.4)
type
  Node = ref object
    value: int
    next: Node

var a = Node(value: 1)
var b = a  # Reference Count erhöht sich
b = nil    # Reference Count sinkt, Objekt wird freigegeben wenn 0
```

**Besonderheiten:**
- ARC (Automatic Reference Counting) seit Nim 1.4, Standard seit Nim 2.0
- ORC erweitert ARC um Zykluserkennung
- Deterministisches Speichermanagement
- Alte GC-Backends (refc, markAndSweep) noch verfügbar

**Weiterführende Links:**
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
  // Automatische Freigabe durch Reference Counting
  // wenn intf den Scope verlässt
end;
```

**Besonderheiten:**
- Interfaces werden automatisch per Reference Counting verwaltet
- `TInterfacedObject` implementiert `_AddRef` und `_Release`
- Strings und dynamische Arrays werden ebenfalls per Reference Counting verwaltet
- Klassen-Objekte (ohne Interface) müssen manuell freigegeben werden

**Weiterführende Links:**
- [Delphi Documentation - Interfaces](https://docwiki.embarcadero.com/RADStudio/en/Interfaces)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Automatisches Reference Counting
numbers = [10, 20, 30, 40, 50]

-- Speicher wird automatisch freigegeben wenn
-- keine Referenzen mehr existieren
-- Roc optimiert: wenn nur eine Referenz existiert,
-- wird in-place mutiert (opportunistic mutation)
```

**Besonderheiten:**
- Automatisches Reference Counting (ARC)
- Keine Garbage Collection Pausen
- Opportunistische Mutation bei einziger Referenz (Performance-Optimierung)
- Keine manuelle Speicherverwaltung nötig

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>
</Tabs>


## 13.1.4. Ownership System

Speicherverwaltung durch ein Ownership-System, bei dem jedes Objekt genau einen Besitzer hat. Wenn der Besitzer den Scope verlässt, wird das Objekt automatisch freigegeben.

### Sprachen {#sprachen}

<Tabs availableTabs={['rust']}>
<TabItem value="rust" label="Rust">

```rust
// Ownership: Jedes Objekt hat genau einen Besitzer
let numbers = vec![10, 20, 30, 40, 50];

// Ownership wird übertragen (move)
let numbers2 = numbers;
// numbers ist nicht mehr verwendbar

// Ownership kann durch Borrowing geteilt werden
let numbers3 = vec![10, 20, 30, 40, 50];
let reference = &numbers3;  // Immutable borrow
let reference2 = &numbers3;  // Mehrere immutable borrows erlaubt

// Mutable borrow
let mut numbers4 = vec![10, 20, 30, 40, 50];
let mutable_ref = &mut numbers4;  // Nur ein mutable borrow gleichzeitig

// Am Ende des Scopes wird Objekt automatisch freigegeben
```

**Besonderheiten:**
- Jedes Objekt hat genau einen Besitzer
- Ownership kann durch Move-Semantik übertragen werden
- Borrowing erlaubt temporäre Referenzen ohne Ownership-Transfer
- Compiler garantiert Speichersicherheit zur Compile-Zeit
- Keine Laufzeit-Overhead für Speicherverwaltung

**Weiterführende Links:**
- [The Rust Book - Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)

</TabItem>
</Tabs>


## 13.1.5. RAII (Resource Acquisition Is Initialization)

Ressourcen werden bei der Initialisierung eines Objekts erworben und automatisch beim Verlassen des Scopes freigegeben.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'd', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
// RAII: Ressourcen werden im Konstruktor erworben und im Destruktor freigegeben
#include <fstream>
#include <memory>

class FileHandler {
    std::ofstream file;
public:
    FileHandler(const std::string& filename) : file(filename) {
        // Datei wird im Konstruktor geöffnet
    }
    
    ~FileHandler() {
        // Datei wird automatisch im Destruktor geschlossen
        if (file.is_open()) {
            file.close();
        }
    }
    
    void write(const std::string& data) {
        file << data;
    }
};

// RAII: Datei wird automatisch geschlossen, wenn Objekt den Scope verlässt
{
    FileHandler handler("output.txt");
    handler.write("Hello, World!");
    // Destruktor wird automatisch aufgerufen, Datei wird geschlossen
}

// Smart Pointers verwenden RAII
{
    auto ptr = std::make_unique<int>(42);
    // Speicher wird automatisch freigegeben, wenn ptr den Scope verlässt
}
```

**Besonderheiten:**
- Ressourcen werden im Konstruktor erworben
- Ressourcen werden im Destruktor automatisch freigegeben
- Funktioniert auch bei Exceptions (Exception Safety)
- Smart Pointers (`std::unique_ptr`, `std::shared_ptr`) verwenden RAII

**Weiterführende Links:**
- [cppreference.com - RAII](https://en.cppreference.com/w/cpp/language/raii)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// RAII: Ressourcen werden bei der Initialisierung erworben und automatisch freigegeben
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

// RAII: Datei wird automatisch geschlossen, wenn Objekt den Scope verlässt
{
    let mut handler = FileHandler::new("output.txt")?;
    handler.write("Hello, World!")?;
    // Drop-Trait wird automatisch aufgerufen, Datei wird geschlossen
}

// Box, Vec, etc. verwenden RAII
{
    let vec = vec![10, 20, 30];
    // Speicher wird automatisch freigegeben, wenn vec den Scope verlässt
}
```

**Besonderheiten:**
- Ressourcen werden bei der Initialisierung erworben
- `Drop`-Trait wird automatisch aufgerufen, wenn Objekt den Scope verlässt
- Funktioniert auch bei Exceptions (Panics)
- Alle Typen mit Ownership verwenden RAII

**Weiterführende Links:**
- [The Rust Book - Drop](https://doc.rust-lang.org/book/ch15-03-drop.html)

</TabItem>
<TabItem value="d" label="D">

```d
// RAII über Struct-Destruktoren
struct FileHandle {
    private int fd;

    this(string filename) {
        // Ressource öffnen
        writeln("File opened: ", filename);
    }

    ~this() {
        // Ressource automatisch freigeben
        writeln("File closed");
    }
}

void processFile() {
    auto handle = FileHandle("data.txt");
    // ... Datei verwenden ...
}  // ~this() wird hier automatisch aufgerufen

// Scope Guards als Alternative
void process() {
    auto resource = acquireResource();
    scope(exit) releaseResource(resource);
    // ... Ressource verwenden ...
}  // releaseResource wird garantiert aufgerufen
```

**Besonderheiten:**
- Struct-Destruktoren (`~this()`) werden beim Verlassen des Scopes aufgerufen
- `scope(exit)`, `scope(success)`, `scope(failure)` als Scope Guards
- RAII funktioniert nur mit Structs (nicht mit Klassen, da GC-verwaltet)
- Kombination von RAII und Scope Guards ist idiomatisches D

**Weiterführende Links:**
- [D Language Specification - Scope Guard Statement](https://dlang.org/spec/statement.html#scope-guard-statement)

</TabItem>
</Tabs>


## 13.1.6. Automatic Reference Counting (ARC)

Automatisches Reference Counting zur Compile-Zeit. Der Compiler fügt automatisch Code zum Erhöhen und Verringern von Referenzzählern ein.

### Sprachen {#sprachen}

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
        print("\(name) wird freigegeben")
    }
}

// Referenz erhöht Zähler
var person1: Person? = Person(name: "Alice")
var person2 = person1  // Referenzzähler: 2

// Referenz entfernen verringert Zähler
person2 = nil  // Referenzzähler: 1

// Letzte Referenz entfernen gibt Objekt frei
person1 = nil  // "Alice wird freigegeben"

// Weak References für zirkuläre Referenzen
class Parent {
    let name: String
    var child: Child?
    init(name: String) {
        self.name = name
    }
    deinit {
        print("\(name) wird freigegeben")
    }
}

class Child {
    let name: String
    weak var parent: Parent?  // Weak Reference
    init(name: String) {
        self.name = name
    }
    deinit {
        print("\(name) wird freigegeben")
    }
}
```

**Besonderheiten:**
- ARC wird zur Compile-Zeit implementiert, nicht zur Laufzeit
- Keine Laufzeit-Overhead für Reference Counting
- Weak References verfügbar für zirkuläre Referenzen
- `weak` und `unowned` Qualifier verfügbar
- Automatische Freigabe, wenn Referenzzähler auf 0 fällt

**Weiterführende Links:**
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

// Referenz erhöht Zähler
Person *person1 = [[Person alloc] init];
person1.name = @"Alice";
Person *person2 = person1;  // Referenzzähler: 2

// Referenz entfernen verringert Zähler
person2 = nil;  // Referenzzähler: 1

// Letzte Referenz entfernen gibt Objekt frei
person1 = nil;  // "Alice wird freigegeben"

// Weak References für zirkuläre Referenzen
@interface Parent : NSObject
@property (nonatomic, strong) Child *child;
@end

@interface Child : NSObject
@property (nonatomic, weak) Parent *parent;  // Weak Reference
@end
```

**Besonderheiten:**
- ARC wurde in iOS 5.0 / OS X 10.7 eingeführt
- Vor ARC: Manuelles Reference Counting mit `retain`/`release`/`autorelease`
- `__weak` und `__strong` Qualifier verfügbar
- `weak` Property-Attribut für zirkuläre Referenzen
- Automatische Freigabe, wenn Referenzzähler auf 0 fällt

**Weiterführende Links:**
- [Apple Documentation - Automatic Reference Counting](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Perceus: Automatic Reference Counting zur Compile-Zeit
// Der Compiler fügt automatisch Referenzzähler-Operationen ein

fun process-data()
  val data = [1, 2, 3, 4, 5]
  // Compiler fügt automatisch RC-Inkremente/-Dekremente ein
  val result = data.map(fn(x) x * 2)
  // 'data' wird automatisch freigegeben wenn nicht mehr benötigt
  // Falls möglich, wird der Speicher in-place wiederverwendet (Reuse-Analyse)
  result.foreach(fn(x) println(x.show))

fun main()
  process-data()
  // Alle Ressourcen werden deterministisch freigegeben
```

**Besonderheiten:**
- Perceus: Compiler-gestütztes ARC mit präziser Referenzzählung
- Reuse-Analyse: Speicher wird automatisch in-place wiederverwendet
- Keine zirkulären Referenzen möglich (rein funktionales Design)
- Deterministisch: Freigabe erfolgt sofort bei Referenzzähler 0
- Kein Laufzeit-GC nötig – geeignet für eingebettete Systeme

**Weiterführende Links:**
- [Koka – Perceus Reference Counting](https://koka-lang.github.io/koka/doc/book.html#sec-perceus)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 verwendet Automatic Reference Counting (ARC)
-- Der Compiler fügt automatisch RC-Operationen ein

-- Jeder Wert wird per ARC verwaltet
def processData : IO Unit := do
  let data := [1, 2, 3, 4, 5]
  -- Compiler fügt automatisch rc_inc/rc_dec Operationen ein
  let result := data.map (fun x => x * 2)
  -- 'data' wird automatisch freigegeben wenn nicht mehr benötigt
  IO.println s!"{result}"
```

**Besonderheiten:**
- Lean 4 verwendet ARC als primären Speicherverwaltungsmechanismus.
- Der Compiler fügt automatisch `rc_inc` und `rc_dec` Operationen ein.
- Keine zirkulären Referenzen möglich durch rein funktionales Design.
- Deterministisch: Freigabe erfolgt sofort bei Referenzzähler 0.
- Kein Laufzeit-GC nötig.

**Weiterführende Links:**
- [Lean 4 Documentation - Memory Management](https://lean-lang.org/lean4/doc/dev/ffi.html#memory-management)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# ARC (Automatic Reference Counting, Standard seit Nim 2.0)
type
  Resource = ref object
    data: string

proc createResource(): Resource =
  Resource(data: "wichtige Daten")

block:
  var r = createResource()
  echo r.data
  # r wird am Ende des Scopes automatisch freigegeben
```

**Besonderheiten:**
- ARC ist Standard-Speicherverwaltung seit Nim 2.0
- ORC (ARC + Zykluserkennung) ist empfohlen für zyklische Datenstrukturen
- Compile-Flags: `--mm:arc` oder `--mm:orc`
- Deterministisch, vorhersagbares Freigabeverhalten

**Weiterführende Links:**
- [Nim Documentation - Memory Management](https://nim-lang.org/docs/mm.html)

</TabItem>
</Tabs>

