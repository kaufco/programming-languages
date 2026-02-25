---
slug: /concurrency/parallel-computing
title: 14.4. Parallel Computing
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 14.4. Parallel Computing

Parallele Berechnungen.

## 14.4.1. Parallel Loops

Schleifen, die Iterationen parallel über mehrere Threads verteilen. Ermöglichen effiziente Parallelisierung von unabhängigen Iterationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'd', 'fortran', 'java', 'julia', 'nim', 'python', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Threading.Tasks;

class Program {
    static void Main() {
        Parallel.For(0, 10, i => {
            Console.WriteLine($"Iteration {i}");
        });
        
        var numbers = new[] { 1, 2, 3, 4, 5 };
        Parallel.ForEach(numbers, num => {
            Console.WriteLine($"Wert: {num}");
        });
    }
}
```

**Besonderheiten:**
- Parallel.For() für parallele for-Schleifen
- Parallel.ForEach() für parallele foreach-Schleifen
- Automatische Thread-Verwaltung

**Weiterführende Links:**
- [Microsoft C# Documentation - Parallel.For](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.parallel.for)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.stream.IntStream;

public class ParallelLoopExample {
    public static void main(String[] args) {
        IntStream.range(0, 10)
            .parallel()
            .forEach(i -> System.out.println("Iteration " + i));
    }
}
```

**Besonderheiten:**
- Stream.parallel() für parallele Verarbeitung
- Automatische Thread-Verwaltung
- ForkJoinPool für Thread-Verwaltung

**Weiterführende Links:**
- [Oracle Java Documentation - Parallel Streams](https://docs.oracle.com/javase/tutorial/collections/streams/parallelism.html)

</TabItem>
<TabItem value="python" label="Python">

```python
from multiprocessing import Pool

def process_item(item):
    return item * 2

if __name__ == '__main__':
    with Pool() as pool:
        results = pool.map(process_item, range(10))
        print(results)
```

**Besonderheiten:**
- multiprocessing.Pool für parallele Verarbeitung
- pool.map() für parallele Iteration
- Prozess-basiert (nicht Thread-basiert)

**Weiterführende Links:**
- [Python Documentation - multiprocessing](https://docs.python.org/3/library/multiprocessing.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Parallel Loops (seit C++17)
// Benötigt: #include <execution>, <algorithm>, <vector>
#include <execution>
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> vec(10);
    std::iota(vec.begin(), vec.end(), 0);
    
    std::for_each(std::execution::par, vec.begin(), vec.end(),
        [](int i) {
            std::cout << "Iteration " << i << std::endl;
        });
    
    return 0;
}
```

**Besonderheiten:**
- std::execution::par für parallele Ausführung
- Seit C++17 verfügbar
- Unterstützt verschiedene Execution Policies

**Weiterführende Links:**
- [cppreference.com - Execution Policies](https://en.cppreference.com/w/cpp/algorithm/execution_policy_tag)

</TabItem>
<TabItem value="d" label="D">

```d
// Parallel Loops
// Benötigt: import std.parallelism;
// Benötigt: import std.stdio;

int[] data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
double[] results = new double[data.length];

// Parallele foreach-Schleife
foreach (i, ref val; parallel(data)) {
    results[i] = val * val;  // Parallel ausgeführt
}

writeln(results);
```

**Besonderheiten:**
- `std.parallelism.parallel` für parallele foreach-Schleifen
- Automatische Work-Stealing-Strategie
- Konfigurierbare Anzahl von Worker-Threads
- `taskPool` für explizite Thread-Pool-Verwaltung

**Weiterführende Links:**
- [D Phobos - std.parallelism](https://dlang.org/phobos/std_parallelism.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Parallele Schleifen mit DO CONCURRENT (seit Fortran 2008)
real, dimension(1000) :: a, b, c

do concurrent (i = 1:1000)
    c(i) = a(i) + b(i)
end do
```

**Besonderheiten:**
- `DO CONCURRENT` für parallele Schleifen (seit Fortran 2008)
- Compiler kann Iterationen parallelisieren
- Keine Datenabhängigkeiten zwischen Iterationen erlaubt
- Ergänzend zu OpenMP-Direktiven

**Weiterführende Links:**
- [Fortran Wiki - DO CONCURRENT](https://fortranwiki.org/fortran/show/DO+CONCURRENT)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Multi-Threading parallele Schleife (seit Julia 1.3)
results = zeros(100)
Threads.@threads for i in 1:100
    results[i] = heavy_computation(i)
end

# Distributed parallele Schleife
# Benötigt: using Distributed
@distributed (+) for i in 1:1_000_000
    rand()^2
end
```

**Besonderheiten:**
- `Threads.@threads` für Thread-basierte parallele Schleifen
- `@distributed` für prozessbasierte parallele Schleifen
- Reduktions-Operatoren möglich (z.B. `@distributed (+)`)

**Weiterführende Links:**
- [Julia Documentation - Multi-Threading](https://docs.julialang.org/en/v1/manual/multi-threading/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import threadpool
# Compile: --threads:on

proc processItem(x: int): int =
  x * x

# Parallele Verarbeitung mit spawn
var results: array[10, FlowVar[int]]
for i in 0..9:
  results[i] = spawn processItem(i)

for i in 0..9:
  echo ^results[i]  # ^ wartet auf Ergebnis
```

**Besonderheiten:**
- `spawn` für parallele Ausführung
- `FlowVar[T]` als Future-ähnlicher Rückgabetyp
- `^` Operator zum Warten auf Ergebnis
- `parallel`-Statement für automatische Parallelisierung (experimentell)

**Weiterführende Links:**
- [Nim Documentation - Threadpool](https://nim-lang.org/docs/threadpool.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Parallel Loops *)
ParallelDo[Print[i^2], {i, 1, 10}]

(* Parallel Table *)
result = ParallelTable[i^2, {i, 1, 1000}]
```

**Besonderheiten:**
- `ParallelDo` und `ParallelTable` für parallele Schleifen
- Automatische Verteilung auf verfügbare Kernel
- Erfordert `LaunchKernels[]` für Parallel-Kernel

**Weiterführende Links:**
- [Wolfram Language Documentation - Parallel Computing](https://reference.wolfram.com/language/guide/ParallelComputation.html)

</TabItem>
</Tabs>


## 14.4.2. Parallel Collections

Collections, die Operationen parallel über ihre Elemente ausführen. Ermöglichen effiziente parallele Verarbeitung von Datenstrukturen ohne explizite Thread-Verwaltung.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'java', 'scala', 'wolfram-language']}>
<TabItem value="scala" label="Scala">

```scala
import scala.collection.parallel.CollectionConverters._

object ParallelCollectionExample {
    def main(args: Array[String]): Unit = {
        val numbers = (1 to 100).par
        val doubled = numbers.map(_ * 2)
        val sum = doubled.sum
        println(sum)
    }
}
```

**Besonderheiten:**
- .par für parallele Collections
- Automatische Parallelisierung von Operationen
- CollectionConverters für Konvertierung

**Weiterführende Links:**
- [Scala Documentation - Parallel Collections](https://docs.scala-lang.org/overviews/parallel-collections/overview.html)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ParallelCollectionExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> doubled = numbers.parallelStream()
            .map(n -> n * 2)
            .collect(Collectors.toList());
        System.out.println(doubled);
    }
}
```

**Besonderheiten:**
- parallelStream() für parallele Streams
- Automatische Parallelisierung von Operationen
- ForkJoinPool für Thread-Verwaltung

**Weiterführende Links:**
- [Oracle Java Documentation - Parallel Streams](https://docs.oracle.com/javase/tutorial/collections/streams/parallelism.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Linq;

class Program {
    static void Main() {
        var numbers = new[] { 1, 2, 3, 4, 5 };
        var doubled = numbers.AsParallel()
            .Select(n => n * 2)
            .ToArray();
        Console.WriteLine(string.Join(", ", doubled));
    }
}
```

**Besonderheiten:**
- AsParallel() für parallele LINQ-Abfragen
- Automatische Parallelisierung von Operationen
- PLINQ für Parallel LINQ

**Weiterführende Links:**
- [Microsoft C# Documentation - PLINQ](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/introduction-to-plinq)

</TabItem>
<TabItem value="d" label="D">

```d
// Parallel Collections
// Benötigt: import std.parallelism;
// Benötigt: import std.algorithm;
// Benötigt: import std.stdio;

int[] data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Paralleles Map
auto results = taskPool.amap!((a) => a * a)(data);
writeln(results);

// Paralleles Reduce
auto sum = taskPool.reduce!((a, b) => a + b)(0, data);
writeln("Summe: ", sum);
```

**Besonderheiten:**
- `taskPool.amap` für paralleles Mapping
- `taskPool.reduce` für parallele Reduktion
- Work-Stealing Thread Pool
- Automatische Lastverteilung

**Weiterführende Links:**
- [D Phobos - std.parallelism](https://dlang.org/phobos/std_parallelism.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Parallel Map *)
items = Range[1000];
result = ParallelMap[#^2 &, items]
```

**Besonderheiten:**
- `ParallelMap`, `ParallelTable`, `ParallelSum` für parallele Collection-Operationen
- Automatische Datenverteilung auf Kernel

**Weiterführende Links:**
- [Wolfram Language Documentation - Parallel Computing](https://reference.wolfram.com/language/guide/ParallelComputation.html)

</TabItem>
</Tabs>


## 14.4.3. Data Parallelism

Parallele Verarbeitung, bei der derselbe Vorgang gleichzeitig auf verschiedenen Daten ausgeführt wird. Fokus auf Verteilung von Daten über mehrere Verarbeitungseinheiten.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'fortran', 'java', 'julia', 'python', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Linq;
using System.Threading.Tasks;

class Program {
    static void Main() {
        var data = Enumerable.Range(1, 1000).ToArray();
        var results = data.AsParallel()
            .Select(x => x * x)
            .ToArray();
        Console.WriteLine($"Ergebnisse: {results.Length}");
    }
}
```

**Besonderheiten:**
- AsParallel() für Data Parallelism
- Automatische Datenverteilung
- PLINQ für Parallel LINQ

**Weiterführende Links:**
- [Microsoft C# Documentation - Data Parallelism](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/data-parallelism-task-parallel-library)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.Arrays;
import java.util.stream.IntStream;

public class DataParallelismExample {
    public static void main(String[] args) {
        int[] data = IntStream.range(1, 1000).toArray();
        int[] results = Arrays.stream(data)
            .parallel()
            .map(x -> x * x)
            .toArray();
        System.out.println("Ergebnisse: " + results.length);
    }
}
```

**Besonderheiten:**
- parallel() für Data Parallelism
- Automatische Datenverteilung
- ForkJoinPool für Thread-Verwaltung

**Weiterführende Links:**
- [Oracle Java Documentation - Parallel Streams](https://docs.oracle.com/javase/tutorial/collections/streams/parallelism.html)

</TabItem>
<TabItem value="python" label="Python">

```python
from multiprocessing import Pool
import numpy as np

def square(x):
    return x * x

if __name__ == '__main__':
    data = np.arange(1, 1000)
    with Pool() as pool:
        results = pool.map(square, data)
    print(f"Ergebnisse: {len(results)}")
```

**Besonderheiten:**
- multiprocessing.Pool für Data Parallelism
- pool.map() für parallele Datenverarbeitung
- Prozess-basiert (nicht Thread-basiert)

**Weiterführende Links:**
- [Python Documentation - multiprocessing](https://docs.python.org/3/library/multiprocessing.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Data Parallelism
// Benötigt: import std.parallelism;
// Benötigt: import std.stdio;

double[] a = [1.0, 2.0, 3.0, 4.0];
double[] b = [5.0, 6.0, 7.0, 8.0];
double[] result = new double[a.length];

// Parallele Element-weise Operation
foreach (i; parallel(iota(a.length))) {
    result[i] = a[i] + b[i];
}

writeln(result);  // [6, 8, 10, 12]
```

**Besonderheiten:**
- Datenparallele Verarbeitung über `parallel` und `taskPool`
- Automatische Aufteilung der Daten auf Worker-Threads
- Gut geeignet für numerische Berechnungen
- Kombination mit SIMD-Intrinsics über `core.simd` möglich

**Weiterführende Links:**
- [D Phobos - std.parallelism](https://dlang.org/phobos/std_parallelism.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Coarrays für Data Parallelism (seit Fortran 2008)
integer :: x[*]  ! Coarray (eine Kopie pro Image)

x = this_image()  ! Jedes Image setzt seinen eigenen Wert

sync all  ! Synchronisation aller Images

if (this_image() == 1) then
    print *, "Wert auf Image 2: ", x[2]
end if
```

**Besonderheiten:**
- Coarrays für verteilte Datenparallelität (seit Fortran 2008)
- `this_image()` gibt die aktuelle Image-Nummer zurück
- `num_images()` gibt die Gesamtzahl der Images zurück
- `SYNC ALL` für globale Synchronisation

**Weiterführende Links:**
- [Fortran Wiki - Coarrays](https://fortranwiki.org/fortran/show/Coarrays)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Broadcasting (elementweise Operationen)
a = [1, 2, 3, 4, 5]
b = a .* 2          # [2, 4, 6, 8, 10]
c = sin.(a)          # sin auf jedes Element

# Parallele Map
# Benötigt: using Distributed
results = pmap(heavy_computation, 1:100)

# Thread-basierter Data Parallelism
Threads.@threads for i in eachindex(a)
    a[i] = process(a[i])
end
```

**Besonderheiten:**
- Broadcasting (`.`-Syntax) für elementweise Operationen
- `pmap()` für prozessbasiertes paralleles Map
- `Threads.@threads` für Thread-basiertes Data Parallelism

**Weiterführende Links:**
- [Julia Documentation - Parallel Computing](https://docs.julialang.org/en/v1/manual/parallel-computing/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Data Parallelism *)
data = Range[10000];
result = ParallelMap[Prime, data]
```

**Besonderheiten:**
- Automatische Datenpartitionierung über Kernel
- `Parallelize[expr]` für automatische Parallelisierung
- `DistributeDefinitions[symbols]` verteilt Definitionen an Kernel

**Weiterführende Links:**
- [Wolfram Language Documentation - Parallel Computing](https://reference.wolfram.com/language/guide/ParallelComputation.html)

</TabItem>
</Tabs>


## 14.4.4. Task Parallelism

Parallele Ausführung verschiedener Aufgaben oder Funktionen. Fokus auf Verteilung von Aufgaben über mehrere Verarbeitungseinheiten, unabhängig von den Daten.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'java', 'julia', 'mercury', 'python', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Threading.Tasks;

class Program {
    static void Main() {
        var task1 = Task.Run(() => ProcessData1());
        var task2 = Task.Run(() => ProcessData2());
        var task3 = Task.Run(() => ProcessData3());
        
        Task.WaitAll(task1, task2, task3);
    }
    
    static void ProcessData1() {
        Console.WriteLine("Aufgabe 1");
    }
    
    static void ProcessData2() {
        Console.WriteLine("Aufgabe 2");
    }
    
    static void ProcessData3() {
        Console.WriteLine("Aufgabe 3");
    }
}
```

**Besonderheiten:**
- Task.Run() für Task Parallelism
- Task.WaitAll() für Warten auf alle Tasks
- Automatische Thread-Verwaltung

**Weiterführende Links:**
- [Microsoft C# Documentation - Task Parallelism](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/task-based-asynchronous-programming)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.concurrent.CompletableFuture;

public class TaskParallelismExample {
    public static void main(String[] args) {
        CompletableFuture<Void> task1 = CompletableFuture.runAsync(() -> processData1());
        CompletableFuture<Void> task2 = CompletableFuture.runAsync(() -> processData2());
        CompletableFuture<Void> task3 = CompletableFuture.runAsync(() -> processData3());
        
        CompletableFuture.allOf(task1, task2, task3).join();
    }
    
    static void processData1() {
        System.out.println("Aufgabe 1");
    }
    
    static void processData2() {
        System.out.println("Aufgabe 2");
    }
    
    static void processData3() {
        System.out.println("Aufgabe 3");
    }
}
```

**Besonderheiten:**
- CompletableFuture.runAsync() für Task Parallelism
- allOf() für Warten auf alle Tasks
- Automatische Thread-Verwaltung

**Weiterführende Links:**
- [Oracle Java Documentation - CompletableFuture](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/CompletableFuture.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Parallel Conjunction
% Benötigt: Kompilierung mit parallelem Grade (z.B. asm_fast.par.gc)
:- pred process_all(int::out, int::out, int::out) is det.
process_all(Result1, Result2, Result3) :-
    (
        process_data1(Result1)
    &
        process_data2(Result2)
    &
        process_data3(Result3)
    ).

:- pred process_data1(int::out) is det.
process_data1(42).

:- pred process_data2(int::out) is det.
process_data2(100).

:- pred process_data3(int::out) is det.
process_data3(7).
```

**Besonderheiten:**
- `&` (parallele Konjunktion) als natives Sprachfeature für parallele Ausführung
- Ziele werden automatisch parallel evaluiert
- Compiler prüft Unabhängigkeit der Ziele über Mode- und Determinismus-System
- Erfordert paralleles Grade (z.B. `asm_fast.par.gc`)
- Dependent Parallel Conjunction für Ziele mit geteilten Variablen möglich

**Weiterführende Links:**
- [Mercury Reference Manual - Parallel Conjunction](https://www.mercurylang.org/information/doc-latest/mercury_ref/Parallel-conjunction.html)

</TabItem>
<TabItem value="python" label="Python">

```python
from concurrent.futures import ThreadPoolExecutor

def process_data1():
    print("Aufgabe 1")

def process_data2():
    print("Aufgabe 2")

def process_data3():
    print("Aufgabe 3")

if __name__ == '__main__':
    with ThreadPoolExecutor() as executor:
        futures = [
            executor.submit(process_data1),
            executor.submit(process_data2),
            executor.submit(process_data3)
        ]
        for future in futures:
            future.result()
```

**Besonderheiten:**
- ThreadPoolExecutor für Task Parallelism
- submit() für Task-Übermittlung
- result() für Warten auf Ergebnis

**Weiterführende Links:**
- [Python Documentation - ThreadPoolExecutor](https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor)

</TabItem>
<TabItem value="d" label="D">

```d
// Task Parallelism
// Benötigt: import std.parallelism;
// Benötigt: import std.stdio;

// Tasks erstellen und parallel ausführen
auto task1 = task!(() {
    // Aufgabe 1
    return 42;
})();

auto task2 = task!(() {
    // Aufgabe 2
    return 100;
})();

taskPool.put(task1);
taskPool.put(task2);

// Ergebnisse abrufen (blockiert bis fertig)
writeln("Task 1: ", task1.yieldForce);
writeln("Task 2: ", task2.yieldForce);
```

**Besonderheiten:**
- `task` für asynchrone Aufgaben
- `yieldForce` / `spinForce` / `workForce` zum Abrufen von Ergebnissen
- Tasks werden im Thread-Pool ausgeführt
- Unterstützt abhängige und unabhängige Tasks

**Weiterführende Links:**
- [D Phobos - std.parallelism](https://dlang.org/phobos/std_parallelism.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Task Parallelism mit @spawn (seit Julia 1.3)
t1 = Threads.@spawn compute_a()
t2 = Threads.@spawn compute_b()
t3 = Threads.@spawn compute_c()

result = fetch(t1) + fetch(t2) + fetch(t3)

# @sync für strukturierte Parallelität
@sync begin
    Threads.@spawn task_a()
    Threads.@spawn task_b()
end  # Wartet bis beide Tasks fertig sind
```

**Besonderheiten:**
- `Threads.@spawn` für Task-basierte Parallelität
- Tasks werden auf verfügbare Threads verteilt
- `fetch()` zum Abrufen von Ergebnissen
- `@sync` für strukturierte Parallelität

**Weiterführende Links:**
- [Julia Documentation - Multi-Threading](https://docs.julialang.org/en/v1/manual/multi-threading/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Task Parallelism *)
task1 = ParallelSubmit[Prime[10000]];
task2 = ParallelSubmit[Fibonacci[100]];
{result1, result2} = WaitAll[{task1, task2}]
```

**Besonderheiten:**
- `ParallelSubmit[expr]` für asynchrone Task-Erstellung
- `WaitAll[tasks]` wartet auf alle Tasks
- Unterstützt Task-basierte Parallelität

**Weiterführende Links:**
- [Wolfram Language Documentation - ParallelSubmit](https://reference.wolfram.com/language/ref/ParallelSubmit.html)

</TabItem>
</Tabs>

## 14.4.5. Reactive Streams

Reactive Streams sind asynchrone Datenströme mit Unterstützung für Backpressure. Sie ermöglichen die deklarative Verarbeitung von asynchronen Datensequenzen durch Operatoren wie `map`, `filter` und `merge`, wobei der Datenfluss zwischen Producer und Consumer kontrolliert wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'java', 'kotlin', 'scala', 'swift']} yellowTabs={['elixir', 'haskell', 'javascript', 'rust', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: NuGet System.Reactive
// IObservable<T> ist Teil der Standardbibliothek

// Observable-Stream erstellen
IObservable<long> stream = Observable.Interval(TimeSpan.FromMilliseconds(100))
    .Select(i => i * 2)
    .Where(i => i < 10)
    .Take(5);

// Subscription mit Backpressure-Unterstützung
IDisposable subscription = stream.Subscribe(
    value => Console.WriteLine($"Wert: {value}"),
    error => Console.WriteLine($"Fehler: {error}"),
    () => Console.WriteLine("Abgeschlossen")
);

// Kombination mehrerer Streams
var merged = stream1.Merge(stream2);
var zipped = stream1.Zip(stream2, (a, b) => a + b);
```

**Besonderheiten:**
- `IObservable<T>` und `IObserver<T>` sind Teil der .NET-Standardbibliothek
- System.Reactive (Rx.NET) bietet umfangreiche Operatoren (Map, Filter, Merge, Zip, etc.)
- `Subject<T>` als manueller Publisher
- Hot und Cold Observables unterstützt
- LINQ-Syntax für reaktive Abfragen verfügbar

**Weiterführende Links:**
- [Microsoft Documentation - IObservable](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)
- [Reactive Extensions for .NET](https://github.com/dotnet/reactive)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Stream ist ein eingebauter Typ in dart:async

// Async Generator als Stream-Quelle
Stream<int> numberStream() async* {
  for (var i = 0; i < 5; i++) {
    await Future.delayed(Duration(milliseconds: 100));
    yield i;
  }
}

// Stream-Operatoren
final stream = numberStream()
    .map((i) => i * 2)
    .where((i) => i < 8);

// Subscription
stream.listen(
  (value) => print('Wert: $value'),
  onError: (error) => print('Fehler: $error'),
  onDone: () => print('Abgeschlossen'),
);

// StreamController für manuelles Senden
final controller = StreamController<int>();
controller.sink.add(1);
controller.sink.add(2);
controller.close();
```

**Besonderheiten:**
- `Stream<T>` ist ein eingebauter Typ in der Kernbibliothek (`dart:async`)
- `async*` / `yield` für asynchrone Generatoren
- `StreamController<T>` für manuelles Stream-Management
- Single-Subscription und Broadcast-Streams
- Transformation via `map`, `where`, `expand`, `asyncMap` etc.

**Weiterführende Links:**
- [Dart Documentation - Streams](https://dart.dev/libraries/async/using-streams)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Benötigt: {:gen_stage, "~> 1.0"} und {:flow, "~> 1.0"} in mix.exs

# Flow für deklarative parallele Stream-Verarbeitung
1..1000
|> Flow.from_enumerable()
|> Flow.map(&(&1 * 2))
|> Flow.filter(&(&1 < 100))
|> Flow.partition()
|> Flow.reduce(fn -> 0 end, &(&1 + &2))
|> Enum.to_list()

# GenStage für Producer-Consumer mit Backpressure
defmodule Producer do
  use GenStage
  def init(counter), do: {:producer, counter}
  def handle_demand(demand, counter) do
    events = Enum.to_list(counter..(counter + demand - 1))
    {:noreply, events, counter + demand}
  end
end

defmodule Consumer do
  use GenStage
  def init(:ok), do: {:consumer, :ok}
  def handle_events(events, _from, state) do
    Enum.each(events, &IO.inspect/1)
    {:noreply, [], state}
  end
end
```

**Besonderheiten:**
- GenStage implementiert Producer-Consumer mit Demand-basiertem Backpressure
- Flow baut auf GenStage auf und bietet deklarative parallele Stream-Verarbeitung
- `Flow.from_enumerable()` wandelt Collections in parallele Streams um
- Backpressure ist Demand-basiert: Consumer fordert Daten vom Producer an
- Nativ für verteilte Systeme über das Erlang-Ökosystem

**Weiterführende Links:**
- [Elixir Documentation - GenStage](https://hexdocs.pm/gen_stage/GenStage.html)
- [Elixir Documentation - Flow](https://hexdocs.pm/flow/Flow.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Observable-Modul in FSharp.Core
// Benötigt: open System

// Event-basierte Streams
let event = new Event<int>()

event.Publish
|> Observable.map (fun x -> x * 2)
|> Observable.filter (fun x -> x < 10)
|> Observable.subscribe (fun x -> printfn "Wert: %d" x)

// Events auslösen
event.Trigger 1  // Wert: 2
event.Trigger 3  // Wert: 6
event.Trigger 7  // (gefiltert: 14 >= 10)

// Observable aus Sequenz
let stream =
    Observable.Generate(
        0,
        (fun i -> i < 5),
        (fun i -> i + 1),
        (fun i -> i * 2))

stream |> Observable.subscribe (fun x -> printfn "Wert: %d" x)
```

**Besonderheiten:**
- `Observable`-Modul ist Teil der F#-Kernbibliothek (`FSharp.Core`)
- Basiert auf `IObservable<T>` / `IObserver<T>` aus .NET
- `Event<T>` als nativer Event-Typ mit Observable-Unterstützung
- Pipe-Operator (`|>`) für funktionale Stream-Komposition
- Volle Kompatibilität mit System.Reactive (Rx.NET)

**Weiterführende Links:**
- [F# Documentation - Observable Module](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-control-observablemodule.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: conduit Paket (cabal install conduit)
import Conduit

-- Conduit-Pipeline mit Backpressure
runConduit $
    yieldMany [1..10]
    .| mapC (* 2)
    .| filterC (< 15)
    .| mapM_C (liftIO . print)

-- Composable Streams
source :: ConduitT () Int IO ()
source = yieldMany [1..100]

pipeline :: ConduitT Int Int IO ()
pipeline = mapC (* 2) .| filterC even .| takeC 10

sink :: ConduitT Int Void IO [Int]
sink = sinkList

-- Ausführung mit Backpressure
result <- runConduit $ source .| pipeline .| sink
```

**Besonderheiten:**
- `conduit` ist die meistverbreitete Streaming-Bibliothek mit Backpressure
- `pipes` als alternative Streaming-Bibliothek
- `streaming` für effizientes Streaming im Funktor-Stil
- Composable Pipelines via `.|`-Operator
- Garantierte Ressourcen-Freigabe durch `ResourceT`

**Weiterführende Links:**
- [Hackage - conduit](https://hackage.haskell.org/package/conduit)

</TabItem>
<TabItem value="java" label="Java">

```java
// Reactive Streams API (seit Java 9)
// Benötigt: import java.util.concurrent.Flow.*;
// Benötigt: import java.util.concurrent.SubmissionPublisher;

// Publisher erstellen
SubmissionPublisher<Integer> publisher = new SubmissionPublisher<>();

// Subscriber mit Backpressure
publisher.subscribe(new Flow.Subscriber<>() {
    private Flow.Subscription subscription;

    public void onSubscribe(Flow.Subscription s) {
        this.subscription = s;
        s.request(1); // Backpressure: 1 Element anfordern
    }

    public void onNext(Integer item) {
        System.out.println("Wert: " + item);
        subscription.request(1); // Nächstes Element anfordern
    }

    public void onError(Throwable t) {
        System.err.println("Fehler: " + t);
    }

    public void onComplete() {
        System.out.println("Abgeschlossen");
    }
});

publisher.submit(1);
publisher.submit(2);
publisher.close();
```

**Besonderheiten:**
- `java.util.concurrent.Flow` definiert die Reactive-Streams-Interfaces (seit Java 9)
- `Publisher`, `Subscriber`, `Subscription`, `Processor` als Kernabstraktionen
- `SubmissionPublisher<T>` als eingebaute Publisher-Implementierung
- Backpressure über `Subscription.request(n)` gesteuert
- Project Reactor und RxJava als umfangreiche Implementierungen

**Weiterführende Links:**
- [Oracle Java Documentation - Flow](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/Flow.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Benötigt: npm install rxjs

import { interval, merge } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

// Observable erstellen
const stream = interval(100).pipe(
    map(i => i * 2),
    filter(i => i < 10),
    take(5)
);

// Subscription
const subscription = stream.subscribe({
    next: value => console.log(`Wert: ${value}`),
    error: err => console.error(`Fehler: ${err}`),
    complete: () => console.log('Abgeschlossen')
});

// Kombination mehrerer Streams
const merged = merge(stream1, stream2);

// Subscription beenden
subscription.unsubscribe();
```

**Besonderheiten:**
- RxJS ist die Standard-Bibliothek für Reactive Streams in JavaScript
- Observable-Proposal (TC39 Stage 1) für native Unterstützung geplant
- Umfangreiche Operatoren: `map`, `filter`, `mergeMap`, `switchMap`, `combineLatest`
- Hot und Cold Observables
- Weit verbreitet in Angular und anderen Frameworks

**Weiterführende Links:**
- [RxJS Documentation](https://rxjs.dev/guide/overview)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Benötigt: kotlinx-coroutines-core

import kotlinx.coroutines.flow.*

// Flow erstellen
val numberFlow: Flow<Int> = flow {
    for (i in 0..4) {
        delay(100)
        emit(i)
    }
}

// Operatoren
val processedFlow = numberFlow
    .map { it * 2 }
    .filter { it < 8 }

// Terminal-Operator (collect)
processedFlow.collect { value ->
    println("Wert: $value")
}

// Kombination von Flows
val merged = merge(flow1, flow2)
val zipped = flow1.zip(flow2) { a, b -> a + b }
```

**Besonderheiten:**
- Kotlin Flow ist Teil von `kotlinx.coroutines` (semi-offiziell)
- Cold Streams: Flow emittiert erst beim Collect
- `SharedFlow` und `StateFlow` für Hot Streams
- Backpressure ist standardmäßig eingebaut (Suspending)
- Nahtlose Integration mit Coroutines (`suspend`-Funktionen)

**Weiterführende Links:**
- [Kotlin Documentation - Flow](https://kotlinlang.org/docs/flow.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: tokio-stream = "0.1", tokio = { features = ["full"] }
use tokio_stream::{self, StreamExt};

// Stream erstellen und transformieren
let stream = tokio_stream::iter(0..5)
    .map(|i| i * 2)
    .filter(|i| *i < 8);

// Stream konsumieren
tokio::pin!(stream);
while let Some(value) = stream.next().await {
    println!("Wert: {}", value);
}

// Async Stream mit yield
async fn number_stream() -> impl Stream<Item = i32> {
    async_stream::stream! {
        for i in 0..5 {
            tokio::time::sleep(Duration::from_millis(100)).await;
            yield i;
        }
    }
}
```

**Besonderheiten:**
- `futures::Stream` Trait definiert die Stream-Abstraktion
- `tokio-stream` bietet Operatoren und Adapter
- `async-stream` für async Generator-Syntax
- Pull-basiert: Consumer steuert den Datenfluss (implizites Backpressure)
- `pin!` nötig für Stack-basierte Stream-Nutzung

**Weiterführende Links:**
- [Tokio Documentation - Streams](https://tokio.rs/tokio/tutorial/streams)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: "com.typesafe.akka" %% "akka-stream" % "2.x"
import akka.stream.scaladsl._
import akka.actor.ActorSystem

implicit val system: ActorSystem = ActorSystem("reactive")

// Source (Publisher) erstellen
val source = Source(1 to 10)
    .map(_ * 2)
    .filter(_ < 15)
    .take(5)

// Sink (Subscriber) definieren
val sink = Sink.foreach[Int](value => println(s"Wert: $value"))

// Stream ausführen (mit Backpressure)
source.runWith(sink)

// Flow als wiederverwendbare Transformation
val transform = Flow[Int].map(_ + 1).filter(_ % 2 == 0)
source.via(transform).runWith(sink)
```

**Besonderheiten:**
- Akka Streams ist die Standard-Implementierung für Reactive Streams in Scala
- Source (Publisher), Flow (Processor), Sink (Subscriber) als Kernabstraktionen
- Backpressure automatisch über Akka Streams verwaltet
- Materialisierung: Streams erzeugen materialisierte Werte beim Ausführen
- ZIO Streams und fs2 als alternative Streaming-Bibliotheken

**Weiterführende Links:**
- [Akka Documentation - Streams](https://doc.akka.io/docs/akka/current/stream/index.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: import Combine

// Publisher erstellen
let numbers = [1, 2, 3, 4, 5].publisher

// Operatoren-Kette
let cancellable = numbers
    .map { $0 * 2 }
    .filter { $0 < 8 }
    .sink(
        receiveCompletion: { completion in
            print("Abgeschlossen")
        },
        receiveValue: { value in
            print("Wert: \(value)")
        }
    )

// PassthroughSubject für manuelles Senden
let subject = PassthroughSubject<Int, Never>()
let sub = subject
    .map { $0 * 2 }
    .sink { print("Wert: \($0)") }

subject.send(1) // Wert: 2
subject.send(3) // Wert: 6
subject.send(completion: .finished)
```

**Besonderheiten:**
- Combine ist Apples natives Reactive-Streams-Framework (seit iOS 13 / macOS 10.15)
- `Publisher`, `Subscriber`, `Subscription` als Kernprotokolle
- `PassthroughSubject` und `CurrentValueSubject` für manuelle Publisher
- Backpressure über `Subscribers.Demand` gesteuert
- `AsyncSequence` (seit Swift 5.5) als async/await-basierte Alternative

**Weiterführende Links:**
- [Apple Documentation - Combine](https://developer.apple.com/documentation/combine)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Benötigt: npm install rxjs

import { interval, merge } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

// Observable erstellen
const stream = interval(100).pipe(
    map(i => i * 2),
    filter(i => i < 10),
    take(5)
);

// Typisierte Subscription
const subscription = stream.subscribe({
    next: (value: number) => console.log(`Wert: ${value}`),
    error: (err: Error) => console.error(`Fehler: ${err}`),
    complete: () => console.log('Abgeschlossen')
});

// Kombination mehrerer Streams
const merged = merge(stream1, stream2);

subscription.unsubscribe();
```

**Besonderheiten:**
- RxJS bietet vollständige Typisierung für TypeScript
- Generische Observable-Typen: `Observable<T>`, `Subject<T>`, `BehaviorSubject<T>`
- Identisch zu JavaScript-RxJS, aber mit voller Typ-Sicherheit
- Angular nutzt RxJS als Kernabhängigkeit für reaktive Patterns

**Weiterführende Links:**
- [RxJS Documentation](https://rxjs.dev/guide/overview)

</TabItem>
</Tabs>

