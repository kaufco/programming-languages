---
slug: /concurrency/parallel-computing
title: 14.4. Parallel Computing
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 14.4. Parallel Computing

Parallel computations.

## 14.4.1. Parallel Loops

Loops that distribute iterations in parallel across multiple threads. Enable efficient parallelization of independent iterations.

### Languages {#sprachen}

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
            Console.WriteLine($"Value: {num}");
        });
    }
}
```

**Special features:**
- Parallel.For() for parallel for loops
- Parallel.ForEach() for parallel foreach loops
- Automatic thread management

**Further reading:**
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

**Special features:**
- Stream.parallel() for parallel processing
- Automatic thread management
- ForkJoinPool for thread management

**Further reading:**
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

**Special features:**
- multiprocessing.Pool for parallel processing
- pool.map() for parallel iteration
- Process-based (not thread-based)

**Further reading:**
- [Python Documentation - multiprocessing](https://docs.python.org/3/library/multiprocessing.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Parallel Loops (since C++17)
// Requires: #include <execution>, <algorithm>, <vector>
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

**Special features:**
- std::execution::par for parallel execution
- Available since C++17
- Supports various execution policies

**Further reading:**
- [cppreference.com - Execution Policies](https://en.cppreference.com/w/cpp/algorithm/execution_policy_tag)

</TabItem>
<TabItem value="d" label="D">

```d
// Parallel Loops
// Requires: import std.parallelism;
// Requires: import std.stdio;

int[] data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
double[] results = new double[data.length];

// Parallel foreach loop
foreach (i, ref val; parallel(data)) {
    results[i] = val * val;  // Executed in parallel
}

writeln(results);
```

**Special features:**
- `std.parallelism.parallel` for parallel foreach loops
- Automatic work-stealing strategy
- Configurable number of worker threads
- `taskPool` for explicit thread pool management

**Further reading:**
- [D Phobos - std.parallelism](https://dlang.org/phobos/std_parallelism.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Parallel loops with DO CONCURRENT (since Fortran 2008)
real, dimension(1000) :: a, b, c

do concurrent (i = 1:1000)
    c(i) = a(i) + b(i)
end do
```

**Special features:**
- `DO CONCURRENT` for parallel loops (since Fortran 2008)
- Compiler can parallelize iterations
- No data dependencies between iterations allowed
- Complementary to OpenMP directives

**Further reading:**
- [Fortran Wiki - DO CONCURRENT](https://fortranwiki.org/fortran/show/DO+CONCURRENT)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Multi-threading parallel loop (since Julia 1.3)
results = zeros(100)
Threads.@threads for i in 1:100
    results[i] = heavy_computation(i)
end

# Distributed parallel loop
# Requires: using Distributed
@distributed (+) for i in 1:1_000_000
    rand()^2
end
```

**Special features:**
- `Threads.@threads` for thread-based parallel loops
- `@distributed` for process-based parallel loops
- Reduction operators possible (e.g., `@distributed (+)`)

**Further reading:**
- [Julia Documentation - Multi-Threading](https://docs.julialang.org/en/v1/manual/multi-threading/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: import threadpool
# Compile: --threads:on

proc processItem(x: int): int =
  x * x

# Parallel processing with spawn
var results: array[10, FlowVar[int]]
for i in 0..9:
  results[i] = spawn processItem(i)

for i in 0..9:
  echo ^results[i]  # ^ waits for result
```

**Special features:**
- `spawn` for parallel execution
- `FlowVar[T]` as future-like return type
- `^` operator to wait for result
- `parallel` statement for automatic parallelization (experimental)

**Further reading:**
- [Nim Documentation - Threadpool](https://nim-lang.org/docs/threadpool.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Parallel Loops *)
ParallelDo[Print[i^2], {i, 1, 10}]

(* Parallel Table *)
result = ParallelTable[i^2, {i, 1, 1000}]
```

**Special features:**
- `ParallelDo` and `ParallelTable` for parallel loops
- Automatic distribution across available kernels
- Requires `LaunchKernels[]` for parallel kernels

**Further reading:**
- [Wolfram Language Documentation - Parallel Computing](https://reference.wolfram.com/language/guide/ParallelComputation.html)

</TabItem>
</Tabs>


## 14.4.2. Parallel Collections

Collections that execute operations in parallel across their elements. Enable efficient parallel processing of data structures without explicit thread management.

### Languages {#sprachen}

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

**Special features:**
- .par for parallel collections
- Automatic parallelization of operations
- CollectionConverters for conversion

**Further reading:**
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

**Special features:**
- parallelStream() for parallel streams
- Automatic parallelization of operations
- ForkJoinPool for thread management

**Further reading:**
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

**Special features:**
- AsParallel() for parallel LINQ queries
- Automatic parallelization of operations
- PLINQ for Parallel LINQ

**Further reading:**
- [Microsoft C# Documentation - PLINQ](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/introduction-to-plinq)

</TabItem>
<TabItem value="d" label="D">

```d
// Parallel Collections
// Requires: import std.parallelism;
// Requires: import std.algorithm;
// Requires: import std.stdio;

int[] data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Parallel Map
auto results = taskPool.amap!((a) => a * a)(data);
writeln(results);

// Parallel Reduce
auto sum = taskPool.reduce!((a, b) => a + b)(0, data);
writeln("Sum: ", sum);
```

**Special features:**
- `taskPool.amap` for parallel mapping
- `taskPool.reduce` for parallel reduction
- Work-stealing thread pool
- Automatic load balancing

**Further reading:**
- [D Phobos - std.parallelism](https://dlang.org/phobos/std_parallelism.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Parallel Map *)
items = Range[1000];
result = ParallelMap[#^2 &, items]
```

**Special features:**
- `ParallelMap`, `ParallelTable`, `ParallelSum` for parallel collection operations
- Automatic data distribution across kernels

**Further reading:**
- [Wolfram Language Documentation - Parallel Computing](https://reference.wolfram.com/language/guide/ParallelComputation.html)

</TabItem>
</Tabs>


## 14.4.3. Data Parallelism

Parallel processing where the same operation is executed simultaneously on different data. Focus on distributing data across multiple processing units.

### Languages {#sprachen}

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
        Console.WriteLine($"Results: {results.Length}");
    }
}
```

**Special features:**
- AsParallel() for data parallelism
- Automatic data distribution
- PLINQ for Parallel LINQ

**Further reading:**
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
        System.out.println("Results: " + results.length);
    }
}
```

**Special features:**
- parallel() for data parallelism
- Automatic data distribution
- ForkJoinPool for thread management

**Further reading:**
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
    print(f"Results: {len(results)}")
```

**Special features:**
- multiprocessing.Pool for data parallelism
- pool.map() for parallel data processing
- Process-based (not thread-based)

**Further reading:**
- [Python Documentation - multiprocessing](https://docs.python.org/3/library/multiprocessing.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Data Parallelism
// Requires: import std.parallelism;
// Requires: import std.stdio;

double[] a = [1.0, 2.0, 3.0, 4.0];
double[] b = [5.0, 6.0, 7.0, 8.0];
double[] result = new double[a.length];

// Parallel element-wise operation
foreach (i; parallel(iota(a.length))) {
    result[i] = a[i] + b[i];
}

writeln(result);  // [6, 8, 10, 12]
```

**Special features:**
- Data-parallel processing via `parallel` and `taskPool`
- Automatic data partitioning across worker threads
- Well-suited for numerical computations
- Can be combined with SIMD intrinsics via `core.simd`

**Further reading:**
- [D Phobos - std.parallelism](https://dlang.org/phobos/std_parallelism.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Coarrays for Data Parallelism (since Fortran 2008)
integer :: x[*]  ! Coarray (one copy per image)

x = this_image()  ! Each image sets its own value

sync all  ! Synchronization of all images

if (this_image() == 1) then
    print *, "Value on image 2: ", x[2]
end if
```

**Special features:**
- Coarrays for distributed data parallelism (since Fortran 2008)
- `this_image()` returns the current image number
- `num_images()` returns the total number of images
- `SYNC ALL` for global synchronization

**Further reading:**
- [Fortran Wiki - Coarrays](https://fortranwiki.org/fortran/show/Coarrays)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Broadcasting (element-wise operations)
a = [1, 2, 3, 4, 5]
b = a .* 2          # [2, 4, 6, 8, 10]
c = sin.(a)          # sin on each element

# Parallel Map
# Requires: using Distributed
results = pmap(heavy_computation, 1:100)

# Thread-based Data Parallelism
Threads.@threads for i in eachindex(a)
    a[i] = process(a[i])
end
```

**Special features:**
- Broadcasting (`.` syntax) for element-wise operations
- `pmap()` for process-based parallel map
- `Threads.@threads` for thread-based data parallelism

**Further reading:**
- [Julia Documentation - Parallel Computing](https://docs.julialang.org/en/v1/manual/parallel-computing/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Data Parallelism *)
data = Range[10000];
result = ParallelMap[Prime, data]
```

**Special features:**
- Automatic data partitioning across kernels
- `Parallelize[expr]` for automatic parallelization
- `DistributeDefinitions[symbols]` distributes definitions to kernels

**Further reading:**
- [Wolfram Language Documentation - Parallel Computing](https://reference.wolfram.com/language/guide/ParallelComputation.html)

</TabItem>
</Tabs>


## 14.4.4. Task Parallelism

Parallel execution of different tasks or functions. Focus on distributing tasks across multiple processing units, independent of the data.

### Languages {#sprachen}

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
        Console.WriteLine("Task 1");
    }
    
    static void ProcessData2() {
        Console.WriteLine("Task 2");
    }
    
    static void ProcessData3() {
        Console.WriteLine("Task 3");
    }
}
```

**Special features:**
- Task.Run() for task parallelism
- Task.WaitAll() for waiting on all tasks
- Automatic thread management

**Further reading:**
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
        System.out.println("Task 1");
    }
    
    static void processData2() {
        System.out.println("Task 2");
    }
    
    static void processData3() {
        System.out.println("Task 3");
    }
}
```

**Special features:**
- CompletableFuture.runAsync() for task parallelism
- allOf() for waiting on all tasks
- Automatic thread management

**Further reading:**
- [Oracle Java Documentation - CompletableFuture](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/CompletableFuture.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Parallel Conjunction
% Requires: compilation with parallel grade (e.g., asm_fast.par.gc)
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

**Special features:**
- `&` (parallel conjunction) as native language feature for parallel execution
- Goals are automatically evaluated in parallel
- Compiler checks independence of goals via mode and determinism system
- Requires parallel grade (e.g., `asm_fast.par.gc`)
- Dependent parallel conjunction possible for goals with shared variables

**Further reading:**
- [Mercury Reference Manual - Parallel Conjunction](https://www.mercurylang.org/information/doc-latest/mercury_ref/Parallel-conjunction.html)

</TabItem>
<TabItem value="python" label="Python">

```python
from concurrent.futures import ThreadPoolExecutor

def process_data1():
    print("Task 1")

def process_data2():
    print("Task 2")

def process_data3():
    print("Task 3")

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

**Special features:**
- ThreadPoolExecutor for task parallelism
- submit() for task submission
- result() for waiting on result

**Further reading:**
- [Python Documentation - ThreadPoolExecutor](https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor)

</TabItem>
<TabItem value="d" label="D">

```d
// Task Parallelism
// Requires: import std.parallelism;
// Requires: import std.stdio;

// Create and execute tasks in parallel
auto task1 = task!(() {
    // Task 1
    return 42;
})();

auto task2 = task!(() {
    // Task 2
    return 100;
})();

taskPool.put(task1);
taskPool.put(task2);

// Retrieve results (blocks until finished)
writeln("Task 1: ", task1.yieldForce);
writeln("Task 2: ", task2.yieldForce);
```

**Special features:**
- `task` for asynchronous tasks
- `yieldForce` / `spinForce` / `workForce` to retrieve results
- Tasks are executed in thread pool
- Supports dependent and independent tasks

**Further reading:**
- [D Phobos - std.parallelism](https://dlang.org/phobos/std_parallelism.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Task Parallelism with @spawn (since Julia 1.3)
t1 = Threads.@spawn compute_a()
t2 = Threads.@spawn compute_b()
t3 = Threads.@spawn compute_c()

result = fetch(t1) + fetch(t2) + fetch(t3)

# @sync for structured parallelism
@sync begin
    Threads.@spawn task_a()
    Threads.@spawn task_b()
end  # Waits until both tasks are finished
```

**Special features:**
- `Threads.@spawn` for task-based parallelism
- Tasks are distributed across available threads
- `fetch()` to retrieve results
- `@sync` for structured parallelism

**Further reading:**
- [Julia Documentation - Multi-Threading](https://docs.julialang.org/en/v1/manual/multi-threading/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Task Parallelism *)
task1 = ParallelSubmit[Prime[10000]];
task2 = ParallelSubmit[Fibonacci[100]];
{result1, result2} = WaitAll[{task1, task2}]
```

**Special features:**
- `ParallelSubmit[expr]` for asynchronous task creation
- `WaitAll[tasks]` waits for all tasks
- Supports task-based parallelism

**Further reading:**
- [Wolfram Language Documentation - ParallelSubmit](https://reference.wolfram.com/language/ref/ParallelSubmit.html)

</TabItem>
</Tabs>

## 14.4.5. Reactive Streams

Reactive Streams are asynchronous data streams with support for backpressure. They enable declarative processing of asynchronous data sequences through operators such as `map`, `filter`, and `merge`, where data flow between producer and consumer is controlled.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'java', 'kotlin', 'scala', 'swift']} yellowTabs={['elixir', 'haskell', 'javascript', 'rust', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Requires: NuGet System.Reactive
// IObservable<T> is part of the standard library

// Create observable stream
IObservable<long> stream = Observable.Interval(TimeSpan.FromMilliseconds(100))
    .Select(i => i * 2)
    .Where(i => i < 10)
    .Take(5);

// Subscription with backpressure support
IDisposable subscription = stream.Subscribe(
    value => Console.WriteLine($"Value: {value}"),
    error => Console.WriteLine($"Error: {error}"),
    () => Console.WriteLine("Completed")
);

// Combine multiple streams
var merged = stream1.Merge(stream2);
var zipped = stream1.Zip(stream2, (a, b) => a + b);
```

**Special features:**
- `IObservable<T>` and `IObserver<T>` are part of the .NET standard library
- System.Reactive (Rx.NET) provides extensive operators (Map, Filter, Merge, Zip, etc.)
- `Subject<T>` as manual publisher
- Hot and Cold Observables supported
- LINQ syntax available for reactive queries

**Further reading:**
- [Microsoft Documentation - IObservable](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)
- [Reactive Extensions for .NET](https://github.com/dotnet/reactive)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Stream is a built-in type in dart:async

// Async generator as stream source
Stream<int> numberStream() async* {
  for (var i = 0; i < 5; i++) {
    await Future.delayed(Duration(milliseconds: 100));
    yield i;
  }
}

// Stream operators
final stream = numberStream()
    .map((i) => i * 2)
    .where((i) => i < 8);

// Subscription
stream.listen(
  (value) => print('Value: $value'),
  onError: (error) => print('Error: $error'),
  onDone: () => print('Completed'),
);

// StreamController for manual sending
final controller = StreamController<int>();
controller.sink.add(1);
controller.sink.add(2);
controller.close();
```

**Special features:**
- `Stream<T>` is a built-in type in the core library (`dart:async`)
- `async*` / `yield` for async generators
- `StreamController<T>` for manual stream management
- Single-subscription and broadcast streams
- Transformation via `map`, `where`, `expand`, `asyncMap` etc.

**Further reading:**
- [Dart Documentation - Streams](https://dart.dev/libraries/async/using-streams)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Requires: {:gen_stage, "~> 1.0"} and {:flow, "~> 1.0"} in mix.exs

# Flow for declarative parallel stream processing
1..1000
|> Flow.from_enumerable()
|> Flow.map(&(&1 * 2))
|> Flow.filter(&(&1 < 100))
|> Flow.partition()
|> Flow.reduce(fn -> 0 end, &(&1 + &2))
|> Enum.to_list()

# GenStage for Producer-Consumer with Backpressure
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

**Special features:**
- GenStage implements Producer-Consumer with demand-based backpressure
- Flow builds on GenStage and provides declarative parallel stream processing
- `Flow.from_enumerable()` converts collections into parallel streams
- Backpressure is demand-based: consumer requests data from producer
- Native for distributed systems via the Erlang ecosystem

**Further reading:**
- [Elixir Documentation - GenStage](https://hexdocs.pm/gen_stage/GenStage.html)
- [Elixir Documentation - Flow](https://hexdocs.pm/flow/Flow.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Observable module in FSharp.Core
// Requires: open System

// Event-based streams
let event = new Event<int>()

event.Publish
|> Observable.map (fun x -> x * 2)
|> Observable.filter (fun x -> x < 10)
|> Observable.subscribe (fun x -> printfn "Value: %d" x)

// Trigger events
event.Trigger 1  // Value: 2
event.Trigger 3  // Value: 6
event.Trigger 7  // (filtered: 14 >= 10)

// Observable from sequence
let stream =
    Observable.Generate(
        0,
        (fun i -> i < 5),
        (fun i -> i + 1),
        (fun i -> i * 2))

stream |> Observable.subscribe (fun x -> printfn "Value: %d" x)
```

**Special features:**
- `Observable` module is part of the F# core library (`FSharp.Core`)
- Based on `IObservable<T>` / `IObserver<T>` from .NET
- `Event<T>` as native event type with Observable support
- Pipe operator (`|>`) for functional stream composition
- Full compatibility with System.Reactive (Rx.NET)

**Further reading:**
- [F# Documentation - Observable Module](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-control-observablemodule.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: conduit package (cabal install conduit)
import Conduit

-- Conduit pipeline with backpressure
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

-- Execution with backpressure
result <- runConduit $ source .| pipeline .| sink
```

**Special features:**
- `conduit` is the most widely used streaming library with backpressure
- `pipes` as alternative streaming library
- `streaming` for efficient streaming in functor style
- Composable pipelines via `.|` operator
- Guaranteed resource release through `ResourceT`

**Further reading:**
- [Hackage - conduit](https://hackage.haskell.org/package/conduit)

</TabItem>
<TabItem value="java" label="Java">

```java
// Reactive Streams API (since Java 9)
// Requires: import java.util.concurrent.Flow.*;
// Requires: import java.util.concurrent.SubmissionPublisher;

// Create publisher
SubmissionPublisher<Integer> publisher = new SubmissionPublisher<>();

// Subscriber with backpressure
publisher.subscribe(new Flow.Subscriber<>() {
    private Flow.Subscription subscription;

    public void onSubscribe(Flow.Subscription s) {
        this.subscription = s;
        s.request(1); // Backpressure: request 1 element
    }

    public void onNext(Integer item) {
        System.out.println("Value: " + item);
        subscription.request(1); // Request next element
    }

    public void onError(Throwable t) {
        System.err.println("Error: " + t);
    }

    public void onComplete() {
        System.out.println("Completed");
    }
});

publisher.submit(1);
publisher.submit(2);
publisher.close();
```

**Special features:**
- `java.util.concurrent.Flow` defines the Reactive Streams interfaces (since Java 9)
- `Publisher`, `Subscriber`, `Subscription`, `Processor` as core abstractions
- `SubmissionPublisher<T>` as built-in publisher implementation
- Backpressure controlled via `Subscription.request(n)`
- Project Reactor and RxJava as extensive implementations

**Further reading:**
- [Oracle Java Documentation - Flow](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/Flow.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Requires: npm install rxjs

import { interval, merge } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

// Create observable
const stream = interval(100).pipe(
    map(i => i * 2),
    filter(i => i < 10),
    take(5)
);

// Subscription
const subscription = stream.subscribe({
    next: value => console.log(`Value: ${value}`),
    error: err => console.error(`Error: ${err}`),
    complete: () => console.log('Completed')
});

// Combine multiple streams
const merged = merge(stream1, stream2);

// Unsubscribe
subscription.unsubscribe();
```

**Special features:**
- RxJS is the standard library for Reactive Streams in JavaScript
- Observable proposal (TC39 Stage 1) planned for native support
- Extensive operators: `map`, `filter`, `mergeMap`, `switchMap`, `combineLatest`
- Hot and Cold Observables
- Widely used in Angular and other frameworks

**Further reading:**
- [RxJS Documentation](https://rxjs.dev/guide/overview)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Requires: kotlinx-coroutines-core

import kotlinx.coroutines.flow.*

// Create flow
val numberFlow: Flow<Int> = flow {
    for (i in 0..4) {
        delay(100)
        emit(i)
    }
}

// Operators
val processedFlow = numberFlow
    .map { it * 2 }
    .filter { it < 8 }

// Terminal operator (collect)
processedFlow.collect { value ->
    println("Value: $value")
}

// Combine flows
val merged = merge(flow1, flow2)
val zipped = flow1.zip(flow2) { a, b -> a + b }
```

**Special features:**
- Kotlin Flow is part of `kotlinx.coroutines` (semi-official)
- Cold Streams: Flow emits only when collected
- `SharedFlow` and `StateFlow` for Hot Streams
- Backpressure is built-in by default (Suspending)
- Seamless integration with Coroutines (`suspend` functions)

**Further reading:**
- [Kotlin Documentation - Flow](https://kotlinlang.org/docs/flow.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Requires: tokio-stream = "0.1", tokio = { features = ["full"] }
use tokio_stream::{self, StreamExt};

// Create and transform stream
let stream = tokio_stream::iter(0..5)
    .map(|i| i * 2)
    .filter(|i| *i < 8);

// Consume stream
tokio::pin!(stream);
while let Some(value) = stream.next().await {
    println!("Value: {}", value);
}

// Async stream with yield
async fn number_stream() -> impl Stream<Item = i32> {
    async_stream::stream! {
        for i in 0..5 {
            tokio::time::sleep(Duration::from_millis(100)).await;
            yield i;
        }
    }
}
```

**Special features:**
- `futures::Stream` trait defines the stream abstraction
- `tokio-stream` provides operators and adapters
- `async-stream` for async generator syntax
- Pull-based: consumer controls data flow (implicit backpressure)
- `pin!` required for stack-based stream usage

**Further reading:**
- [Tokio Documentation - Streams](https://tokio.rs/tokio/tutorial/streams)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Requires: "com.typesafe.akka" %% "akka-stream" % "2.x"
import akka.stream.scaladsl._
import akka.actor.ActorSystem

implicit val system: ActorSystem = ActorSystem("reactive")

// Create source (publisher)
val source = Source(1 to 10)
    .map(_ * 2)
    .filter(_ < 15)
    .take(5)

// Define sink (subscriber)
val sink = Sink.foreach[Int](value => println(s"Value: $value"))

// Execute stream (with backpressure)
source.runWith(sink)

// Flow as reusable transformation
val transform = Flow[Int].map(_ + 1).filter(_ % 2 == 0)
source.via(transform).runWith(sink)
```

**Special features:**
- Akka Streams is the standard implementation for Reactive Streams in Scala
- Source (Publisher), Flow (Processor), Sink (Subscriber) as core abstractions
- Backpressure automatically managed via Akka Streams
- Materialization: streams produce materialized values when executed
- ZIO Streams and fs2 as alternative streaming libraries

**Further reading:**
- [Akka Documentation - Streams](https://doc.akka.io/docs/akka/current/stream/index.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Requires: import Combine

// Create publisher
let numbers = [1, 2, 3, 4, 5].publisher

// Operator chain
let cancellable = numbers
    .map { $0 * 2 }
    .filter { $0 < 8 }
    .sink(
        receiveCompletion: { completion in
            print("Completed")
        },
        receiveValue: { value in
            print("Value: \(value)")
        }
    )

// PassthroughSubject for manual sending
let subject = PassthroughSubject<Int, Never>()
let sub = subject
    .map { $0 * 2 }
    .sink { print("Value: \($0)") }

subject.send(1) // Value: 2
subject.send(3) // Value: 6
subject.send(completion: .finished)
```

**Special features:**
- Combine is Apple's native Reactive Streams framework (since iOS 13 / macOS 10.15)
- `Publisher`, `Subscriber`, `Subscription` as core protocols
- `PassthroughSubject` and `CurrentValueSubject` for manual publishers
- Backpressure controlled via `Subscribers.Demand`
- `AsyncSequence` (since Swift 5.5) as async/await-based alternative

**Further reading:**
- [Apple Documentation - Combine](https://developer.apple.com/documentation/combine)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Requires: npm install rxjs

import { interval, merge } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

// Create observable
const stream = interval(100).pipe(
    map(i => i * 2),
    filter(i => i < 10),
    take(5)
);

// Typed subscription
const subscription = stream.subscribe({
    next: (value: number) => console.log(`Value: ${value}`),
    error: (err: Error) => console.error(`Error: ${err}`),
    complete: () => console.log('Completed')
});

// Combine multiple streams
const merged = merge(stream1, stream2);

subscription.unsubscribe();
```

**Special features:**
- RxJS provides full typing for TypeScript
- Generic Observable types: `Observable<T>`, `Subject<T>`, `BehaviorSubject<T>`
- Identical to JavaScript RxJS, but with full type safety
- Angular uses RxJS as core dependency for reactive patterns

**Further reading:**
- [RxJS Documentation](https://rxjs.dev/guide/overview)

</TabItem>
</Tabs>

