---
slug: /concurrency/threading
title: 14.1. Threading
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 14.1. Threading

Thread-based concurrency.

## 14.1.1. Threads

Parallel execution of code through separate execution threads within a process. Threads share memory space and enable concurrent processing of multiple tasks.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'cpp', 'csharp', 'd', 'java', 'javascript', 'julia', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'prolog', 'python', 'rust', 'typescript', 'v', 'zig']} yellowTabs={['swift']}>
<TabItem value="ada" label="Ada">

```ada
with Ada.Text_IO; use Ada.Text_IO;

procedure Thread_Example is
   task Worker;
   
   task body Worker is
   begin
      Put_Line("Thread running");
      delay 1.0;
      Put_Line("Thread finished");
   end Worker;
begin
   Put_Line("Main thread");
   delay 2.0;
end Thread_Example;
```

**Special features:**
- Uses tasks as primary concurrency model
- Tasks are automatically started when reaching the begin block
- Tasks can wait for the completion of other tasks

**Further reading:**
- [Ada Reference Manual - Tasks](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-9.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Requires: #include <pthread.h>, <stdio.h>, <unistd.h>
#include <pthread.h>
#include <stdio.h>
#include <unistd.h>

void* thread_function(void* arg) {
    printf("Thread running\n");
    sleep(1);
    printf("Thread finished\n");
    return NULL;
}

int main() {
    pthread_t thread;
    printf("Main thread\n");
    pthread_create(&thread, NULL, thread_function, NULL);
    pthread_join(thread, NULL);
    return 0;
}
```

**Special features:**
- Uses POSIX Threads (pthread)
- Manual memory management required
- pthread_join waits for thread completion

**Further reading:**
- [POSIX Threads Documentation](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/pthread.h.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Threading;

class Program {
    static void ThreadFunction() {
        Console.WriteLine("Thread running");
        Thread.Sleep(1000);
        Console.WriteLine("Thread finished");
    }
    
    static void Main() {
        Console.WriteLine("Main thread");
        Thread thread = new Thread(ThreadFunction);
        thread.Start();
        thread.Join();
    }
}
```

**Special features:**
- System.Threading.Thread for thread creation
- Thread.Join() waits for thread completion
- Supports thread priorities and thread-local storage

**Further reading:**
- [Microsoft C# Documentation - Thread Class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.thread)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Threads (since C++11)
// Requires: #include <thread>, <iostream>, <chrono>
#include <thread>
#include <iostream>
#include <chrono>

void thread_function() {
    std::cout << "Thread running" << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(1));
    std::cout << "Thread finished" << std::endl;
}

int main() {
    std::cout << "Main thread" << std::endl;
    std::thread thread(thread_function);
    thread.join();
    return 0;
}
```

**Special features:**
- std::thread since C++11
- RAII-based thread management
- thread.join() waits for thread completion

**Further reading:**
- [cppreference.com - std::thread](https://en.cppreference.com/w/cpp/thread/thread)

</TabItem>
<TabItem value="d" label="D">

```d
import std.stdio;
import std.concurrency;
import core.thread;

void threadFunction() {
    writeln("Thread running");
    Thread.sleep(dur!"seconds"(1));
    writeln("Thread finished");
}

void main() {
    writeln("Main thread");
    auto thread = new Thread(&threadFunction);
    thread.start();
    thread.join();
}
```

**Special features:**
- core.thread for thread creation
- Thread.start() starts the thread
- Thread.join() waits for thread completion

**Further reading:**
- [D Language Reference - core.thread](https://dlang.org/phobos/core_thread.html)

</TabItem>
<TabItem value="java" label="Java">

```java
public class ThreadExample {
    public static void main(String[] args) {
        System.out.println("Main thread");
        Thread thread = new Thread(() -> {
            System.out.println("Thread running");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("Thread finished");
        });
        thread.start();
        try {
            thread.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```

**Special features:**
- java.lang.Thread for thread creation
- Thread.start() starts the thread
- Thread.join() waits for thread completion
- InterruptedException must be handled

**Further reading:**
- [Oracle Java Documentation - Thread Class](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Thread.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun main() {
    println("Main thread")
    val thread = Thread {
        println("Thread running")
        Thread.sleep(1000)
        println("Thread finished")
    }
    thread.start()
    thread.join()
}
```

**Special features:**
- Uses java.lang.Thread (JVM)
- Lambda syntax for thread function
- Thread.join() waits for thread completion

**Further reading:**
- [Kotlin Documentation - Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

</TabItem>
<TabItem value="python" label="Python">

```python
import threading
import time

def thread_function():
    print("Thread running")
    time.sleep(1)
    print("Thread finished")

print("Main thread")
thread = threading.Thread(target=thread_function)
thread.start()
thread.join()
```

**Special features:**
- threading.Thread for thread creation
- Global Interpreter Lock (GIL) limits true parallelism for CPU-intensive tasks
- Thread.join() waits for thread completion

**Further reading:**
- [Python Documentation - threading](https://docs.python.org/3/library/threading.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::thread;
use std::time::Duration;

fn main() {
    println!("Main thread");
    let handle = thread::spawn(|| {
        println!("Thread running");
        thread::sleep(Duration::from_secs(1));
        println!("Thread finished");
    });
    handle.join().unwrap();
}
```

**Special features:**
- thread::spawn creates a thread
- Returns a JoinHandle
- handle.join() waits for thread completion

**Further reading:**
- [Rust Book - Threads](https://doc.rust-lang.org/book/ch16-01-threads.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Requires: import Foundation

print("Main thread")
let thread = Thread {
    print("Thread running")
    Thread.sleep(forTimeInterval: 1.0)
    print("Thread finished")
}
thread.start()

// Wait (Thread has no join() - Alternative: sleep or Semaphore)
Thread.sleep(forTimeInterval: 2.0)
```

**Special features:**
- Thread class for thread creation
- `Thread.start()` starts the thread
- No `join()` available - synchronization via GCD or Semaphore
- Preferred: Swift Concurrency (`async`/`await`) since Swift 5.5

**Further reading:**
- [Apple Swift Documentation - Thread](https://developer.apple.com/documentation/foundation/thread)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Node.js Worker Threads (since Node.js 12.0.0)
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    console.log('Hauptthread');
    const worker = new Worker(__filename);
    worker.on('message', (msg) => console.log(msg));
} else {
    console.log('Thread running');
    setTimeout(() => {
        console.log('Thread finished');
        parentPort.postMessage('Done');
    }, 1000);
}
```

**Special features:**
- Worker Threads in Node.js (since Node.js 12.0.0)
- In browser: Web Workers instead of threads
- Message passing between threads

**Further reading:**
- [Node.js Documentation - worker_threads](https://nodejs.org/api/worker_threads.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Node.js Worker Threads (since Node.js 12.0.0)
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

if (isMainThread) {
    console.log('Hauptthread');
    const worker = new Worker(__filename);
    worker.on('message', (msg) => console.log(msg));
} else {
    console.log('Thread running');
    setTimeout(() => {
        console.log('Thread finished');
        parentPort.postMessage('Done');
    }, 1000);
}
```

**Special features:**
- Worker Threads in Node.js (since Node.js 12.0.0)
- In browser: Web Workers instead of threads
- Message passing between threads

**Further reading:**
- [Node.js Documentation - worker_threads](https://nodejs.org/api/worker_threads.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Multi-threading (since Julia 1.3)
# Requires: julia --threads=4

# Threads.@threads for parallel loops
results = zeros(10)
Threads.@threads for i in 1:10
    results[i] = i^2
end

# Thread-ID abfragen
println("Thread: $(Threads.threadid()) of $(Threads.nthreads())")

# Start task on separate thread (since Julia 1.3)
t = Threads.@spawn begin
    heavy_computation()
end
result = fetch(t)
```

**Special features:**
- Multi-threading since Julia 1.3
- Thread count is set at startup (`--threads=N` or `JULIA_NUM_THREADS`)
- `Threads.@threads` for parallel loops
- `Threads.@spawn` for asynchronous task execution on threads

**Further reading:**
- [Julia Documentation - Multi-Threading](https://docs.julialang.org/en/v1/manual/multi-threading/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: --threads:on compiler flag
proc worker(id: int) {.thread.} =
  echo "Thread ", id, " läuft"

var threads: array[4, Thread[int]]
for i in 0..3:
  createThread(threads[i], worker, i)

joinThreads(threads)
```

**Special features:**
- Create threads via `createThread`
- `{.thread.}` pragma marks thread procedures
- `--threads:on` compiler flag required
- Thread-local storage with `{.threadvar.}` pragma

**Further reading:**
- [Nim Documentation - Threads](https://nim-lang.org/docs/threads.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Requires: uses Classes;
type
  TWorkerThread = class(TThread)
  protected
    procedure Execute; override;
  end;

procedure TWorkerThread.Execute;
var
  i: Integer;
begin
  for i := 1 to 5 do
  begin
    WriteLn('Thread: ', i);
    Sleep(100);
  end;
end;

var
  worker: TWorkerThread;
begin
  worker := TWorkerThread.Create(False);
  worker.WaitFor;
  worker.Free;
end;
```

**Special features:**
- `TThread` class as base for threads
- `Execute` method must be overridden
- `Synchronize` for thread-safe GUI access
- `WaitFor` to wait for thread completion

**Further reading:**
- [Delphi Documentation - TThread](https://docwiki.embarcadero.com/Libraries/en/System.Classes.TThread)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Threads (SWI-Prolog)
thread_example :-
    writeln('Main thread'),
    thread_create(worker, Id, []),
    thread_join(Id, _).

worker :-
    writeln('Thread running'),
    sleep(1),
    writeln('Thread finished').
```

**Special features:**
- `thread_create/3` creates a new thread with a goal
- `thread_join/2` waits for thread completion and returns status
- `thread_detach/1` for threads that are not joined
- SWI-Prolog specific (not in ISO Prolog standard)

**Further reading:**
- [SWI-Prolog Documentation - Threads](https://www.swi-prolog.org/pldoc/man?section=threads)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSThread
NSThread *thread = [[NSThread alloc] initWithBlock:^{
    NSLog(@"Hintergrund-Thread: %@", [NSThread currentThread]);
}];
[thread start];

// Einfacher Background-Thread
[NSThread detachNewThreadWithBlock:^{
    NSLog(@"Detached Thread");
}];
```

**Special features:**
- `NSThread` as object-oriented thread API
- C-level `pthreads` also available (as C superset)
- Grand Central Dispatch (GCD) preferred for most cases
- Each thread needs its own autorelease pool

**Further reading:**
- [Apple Documentation - NSThread](https://developer.apple.com/documentation/foundation/nsthread)

</TabItem>
<TabItem value="v" label="V">

```v
// Threads with spawn
fn compute(id int) int {
    return id * id
}

// Threads starten
t1 := spawn compute(1)
t2 := spawn compute(2)
t3 := spawn compute(3)

// Ergebnisse abholen
r1 := t1.wait()
r2 := t2.wait()
r3 := t3.wait()
println('${r1}, ${r2}, ${r3}')
```

**Special features:**
- `spawn` starts a function in a new thread
- `.wait()` waits for the result
- OS threads (not green threads)

**Further reading:**
- [V Documentation - Concurrency](https://github.com/vlang/v/blob/master/doc/docs.md#concurrency)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

fn workerFunction(id: usize) void {
    std.debug.print("Thread {} started\n", .{id});
}

pub fn main() !void {
    // Create thread
    const thread = try std.Thread.spawn(.{}, workerFunction, .{1});

    // Wait for thread
    thread.join();
}
```

**Special features:**
- `std.Thread.spawn()` creates new threads
- `thread.join()` waits for thread termination
- Thread functions are regular functions
- Supports detached threads

**Further reading:**
- [Zig Standard Library - Thread](https://ziglang.org/documentation/master/std/#std.Thread)

</TabItem>
</Tabs>


## 14.1.2. Thread Pools

Management of a group of reusable threads for efficient execution of multiple tasks. Thread pools reduce overhead from repeatedly creating and destroying threads.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'go', 'java', 'kotlin', 'objective-c', 'prolog', 'python', 'rust', 'scala']}>
<TabItem value="java" label="Java">

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ThreadPoolExample {
    public static void main(String[] args) throws InterruptedException {
        ExecutorService pool = Executors.newFixedThreadPool(4);
        
        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            pool.submit(() -> {
                System.out.println("Task " + taskId + " running");
            });
        }
        
        pool.shutdown();
        pool.awaitTermination(5, TimeUnit.SECONDS);
    }
}
```

**Special features:**
- ExecutorService for thread pool management
- newFixedThreadPool creates pool with fixed size
- pool.shutdown() terminates pool after all tasks complete

**Further reading:**
- [Oracle Java Documentation - ExecutorService](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/ExecutorService.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Threading.Tasks;

class Program {
    static void Main() {
        var tasks = new Task[10];
        
        for (int i = 0; i < 10; i++) {
            int taskId = i;
            tasks[i] = Task.Run(() => {
                Console.WriteLine($"Task {taskId} running");
            });
        }
        
        Task.WaitAll(tasks);
    }
}
```

**Special features:**
- Task.Run automatically uses thread pool
- ThreadPool class available for manual pool management
- Task.WaitAll waits for all tasks

**Further reading:**
- [Microsoft C# Documentation - ThreadPool](https://learn.microsoft.com/en-us/dotnet/api/system.threading.threadpool)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Thread Pools (since C++11, extended in C++17)
// Requires: #include <thread>, <vector>, <future>, <iostream>
#include <thread>
#include <vector>
#include <future>
#include <iostream>

void task_function(int task_id) {
    std::cout << "Task " << task_id << " running" << std::endl;
}

int main() {
    std::vector<std::future<void>> futures;
    
    for (int i = 0; i < 10; i++) {
        futures.push_back(std::async(std::launch::async, task_function, i));
    }
    
    for (auto& future : futures) {
        future.wait();
    }
    
    return 0;
}
```

**Special features:**
- std::async can use thread pool (implementation-defined)
- std::launch::async forces asynchronous execution
- External libraries for explicit thread pools (e.g., ThreadPool)

**Further reading:**
- [cppreference.com - std::async](https://en.cppreference.com/w/cpp/thread/async)

</TabItem>
<TabItem value="python" label="Python">

```python
from concurrent.futures import ThreadPoolExecutor

def task_function(task_id):
    print(f"Task {task_id} running")

with ThreadPoolExecutor(max_workers=4) as pool:
    futures = [pool.submit(task_function, i) for i in range(10)]
    for future in futures:
        future.result()
```

**Special features:**
- concurrent.futures.ThreadPoolExecutor for thread pools
- max_workers sets pool size
- Context manager for automatic cleanup

**Further reading:**
- [Python Documentation - ThreadPoolExecutor](https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    let pool_size = 4;
    
    for i in 0..pool_size {
        let tx = tx.clone();
        thread::spawn(move || {
            loop {
                match rx.recv() {
                    Ok(task_id) => {
                        println!("Task {} running", task_id);
                    }
                    Err(_) => break,
                }
            }
        });
    }
    
    for i in 0..10 {
        tx.send(i).unwrap();
    }
    
    drop(tx);
    thread::sleep(std::time::Duration::from_secs(1));
}
```

**Special features:**
- Manual thread pool implementation with channels
- External crate rayon recommended for thread pools
- mpsc::channel for task distribution

**Further reading:**
- [Rust Book - Channels](https://doc.rust-lang.org/book/ch16-02-message-passing.html)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    poolSize := 4
    tasks := make(chan int, 10)
    
    for i := 0; i < poolSize; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for taskId := range tasks {
                fmt.Printf("Task %d running\n", taskId)
            }
        }()
    }
    
    for i := 0; i < 10; i++ {
        tasks <- i
    }
    close(tasks)
    
    wg.Wait()
}
```

**Special features:**
- Goroutines with channels for thread pool-like behavior
- sync.WaitGroup for synchronization
- Channels for task distribution

**Further reading:**
- [Go Documentation - Channels](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.util.concurrent.Executors

fun main() {
    val pool = Executors.newFixedThreadPool(4)
    
    val futures = (0..9).map { taskId ->
        pool.submit {
            println("Task $taskId running")
        }
    }
    
    futures.forEach { it.get() }
    pool.shutdown()
}
```

**Special features:**
- Uses Java ExecutorService (JVM)
- newFixedThreadPool creates pool with fixed size
- pool.shutdown() terminates pool

**Further reading:**
- [Oracle Java Documentation - ExecutorService](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/ExecutorService.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import java.util.concurrent.Executors
import scala.concurrent.{ExecutionContext, Future}

object ThreadPoolExample {
  def main(args: Array[String]): Unit = {
    implicit val ec = ExecutionContext.fromExecutor(
      Executors.newFixedThreadPool(4)
    )
    
    val futures = (0 to 9).map { taskId =>
      Future {
        println(s"Task $taskId running")
      }
    }
    
    futures.foreach(_.value)
  }
}
```

**Special features:**
- ExecutionContext for thread pool management
- Future for asynchronous execution
- Uses Java ExecutorService (JVM)

**Further reading:**
- [Scala Documentation - ExecutionContext](https://www.scala-lang.org/api/current/scala/concurrent/ExecutionContext.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Thread Pools (SWI-Prolog)
% Requires: use_module(library(thread_pool))
:- thread_pool_create(pool, 4, []).

run_tasks :-
    numlist(0, 9, Tasks),
    maplist(submit_task, Tasks, Ids),
    maplist(wait_task, Ids).

submit_task(TaskId, Id) :-
    thread_create_in_pool(pool, task(TaskId), Id, []).

wait_task(Id) :-
    thread_join(Id, _).

task(TaskId) :-
    format('Task ~w running~n', [TaskId]).
```

**Special features:**
- `thread_pool_create/3` creates a named thread pool with maximum size
- `thread_create_in_pool/4` creates a thread in the pool
- Pool automatically blocks on overload (backlog)
- Optional settings for stack size and maximum backlog

**Further reading:**
- [SWI-Prolog Documentation - Thread Pool](https://www.swi-prolog.org/pldoc/man?section=threadpool)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Grand Central Dispatch (GCD)
dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
dispatch_async(queue, ^{
    NSLog(@"Background task");
    dispatch_async(dispatch_get_main_queue(), ^{
        NSLog(@"Back to main thread");
    });
});

// NSOperationQueue
NSOperationQueue *operationQueue = [[NSOperationQueue alloc] init];
operationQueue.maxConcurrentOperationCount = 4;
[operationQueue addOperationWithBlock:^{
    NSLog(@"Operation in thread pool");
}];
```

**Special features:**
- Grand Central Dispatch (GCD) with system-managed thread pool
- `NSOperationQueue` as high-level abstraction
- Automatic thread pool management by the system
- `dispatch_get_global_queue` for different priority levels

**Further reading:**
- [Apple Documentation - Grand Central Dispatch](https://developer.apple.com/documentation/dispatch)

</TabItem>
</Tabs>


## 14.1.3. Thread Synchronization

Coordination of execution of multiple threads to avoid race conditions and ensure data consistency. Synchronization includes mechanisms such as locks, condition variables, and barriers.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'go', 'java', 'julia', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'prolog', 'python', 'rust']}>
<TabItem value="java" label="Java">

```java
public class SynchronizationExample {
    private int counter = 0;
    private final Object lock = new Object();
    
    public void increment() {
        synchronized (lock) {
            counter++;
        }
    }
    
    public int getCounter() {
        synchronized (lock) {
            return counter;
        }
    }
}
```

**Special features:**
- synchronized blocks for critical sections
- synchronized methods synchronize on this
- wait() and notify() for condition variables

**Further reading:**
- [Oracle Java Documentation - Synchronization](https://docs.oracle.com/javase/tutorial/essential/concurrency/sync.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Threading;

class SynchronizationExample {
    private int counter = 0;
    private readonly object lockObj = new object();
    
    public void Increment() {
        lock (lockObj) {
            counter++;
        }
    }
    
    public int GetCounter() {
        lock (lockObj) {
            return counter;
        }
    }
}
```

**Special features:**
- lock statement for critical sections
- Monitor.Enter/Exit for manual synchronization
- Interlocked class for atomic operations

**Further reading:**
- [Microsoft C# Documentation - lock Statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/lock)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Thread Synchronization (since C++11)
// Requires: #include <mutex>, <thread>
#include <mutex>
#include <thread>

class SynchronizationExample {
private:
    int counter = 0;
    std::mutex mtx;
    
public:
    void increment() {
        std::lock_guard<std::mutex> lock(mtx);
        counter++;
    }
    
    int getCounter() {
        std::lock_guard<std::mutex> lock(mtx);
        return counter;
    }
};
```

**Special features:**
- std::mutex for mutual exclusion
- std::lock_guard for RAII-based lock management
- std::condition_variable for condition variables

**Further reading:**
- [cppreference.com - std::mutex](https://en.cppreference.com/w/cpp/thread/mutex)

</TabItem>
<TabItem value="python" label="Python">

```python
import threading

class SynchronizationExample:
    def __init__(self):
        self.counter = 0
        self.lock = threading.Lock()
    
    def increment(self):
        with self.lock:
            self.counter += 1
    
    def get_counter(self):
        with self.lock:
            return self.counter
```

**Special features:**
- threading.Lock for mutual exclusion
- with statement for automatic lock release
- threading.Condition for condition variables

**Further reading:**
- [Python Documentation - threading.Lock](https://docs.python.org/3/library/threading.html#lock-objects)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Counter: {}", *counter.lock().unwrap());
}
```

**Special features:**
- Mutex for mutual exclusion
- Arc for shared ownership between threads
- lock() returns MutexGuard (RAII)

**Further reading:**
- [Rust Book - Shared-State Concurrency](https://doc.rust-lang.org/book/ch16-03-shared-state.html)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "sync"
)

type SynchronizationExample struct {
    counter int
    mutex   sync.Mutex
}

func (se *SynchronizationExample) increment() {
    se.mutex.Lock()
    defer se.mutex.Unlock()
    se.counter++
}

func (se *SynchronizationExample) getCounter() int {
    se.mutex.Lock()
    defer se.mutex.Unlock()
    return se.counter
}

func main() {
    se := &SynchronizationExample{}
    var wg sync.WaitGroup
    
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            se.increment()
        }()
    }
    
    wg.Wait()
    fmt.Println("Counter:", se.getCounter())
}
```

**Special features:**
- sync.Mutex for mutual exclusion
- defer for automatic unlock
- sync.WaitGroup for thread synchronization

**Further reading:**
- [Go Documentation - sync.Mutex](https://pkg.go.dev/sync#Mutex)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.util.concurrent.locks.ReentrantLock

class SynchronizationExample {
    private var counter = 0
    private val lock = ReentrantLock()
    
    fun increment() {
        lock.lock()
        try {
            counter++
        } finally {
            lock.unlock()
        }
    }
    
    fun getCounter(): Int {
        lock.lock()
        try {
            return counter
        } finally {
            lock.unlock()
        }
    }
}
```

**Special features:**
- ReentrantLock for mutual exclusion
- try-finally for safe lock release
- @Synchronized annotation for methods

**Further reading:**
- [Oracle Java Documentation - ReentrantLock](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Benötigt: #include <pthread.h>
#include <pthread.h>

typedef struct {
    int counter;
    pthread_mutex_t mutex;
} SynchronizationExample;

void increment(SynchronizationExample* se) {
    pthread_mutex_lock(&se->mutex);
    se->counter++;
    pthread_mutex_unlock(&se->mutex);
}

int getCounter(SynchronizationExample* se) {
    pthread_mutex_lock(&se->mutex);
    int value = se->counter;
    pthread_mutex_unlock(&se->mutex);
    return value;
}
```

**Special features:**
- pthread_mutex_t for mutual exclusion
- Manual lock/unlock operations
- pthread_cond_t for condition variables

**Further reading:**
- [POSIX Threads Documentation - Mutexes](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/pthread.h.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Thread Synchronization
// Requires: import core.thread;
// Requires: import std.stdio;

shared int counter = 0;

void incrementer() {
    foreach (i; 0 .. 10_000) {
        synchronized {
            counter++;
        }
    }
}

void main() {
    auto t1 = new Thread(&incrementer);
    auto t2 = new Thread(&incrementer);
    t1.start();
    t2.start();
    t1.join();
    t2.join();
    writeln("Counter: ", counter);  // 20000
}
```

**Special features:**
- `synchronized` block for mutual exclusion
- `shared` qualifier for thread-safe variables
- `synchronized` classes for automatic synchronization of all methods
- Object-based synchronization: `synchronized(obj) { ... }`

**Further reading:**
- [D Language Specification - Synchronized](https://dlang.org/spec/statement.html#synchronized-statement)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Lock for thread synchronization (since Julia 1.3)
counter = 0
lock = ReentrantLock()

Threads.@threads for i in 1:1000
    lock(lock) do
        counter += 1
    end
end

# Alternative: SpinLock for short critical sections
spinlock = Threads.SpinLock()
Threads.@threads for i in 1:1000
    lock(spinlock)
    try
        counter += 1
    finally
        unlock(spinlock)
    end
end
```

**Special features:**
- `ReentrantLock` for general thread synchronization
- `SpinLock` for short critical sections
- `lock()` with `do` block for automatic unlock

**Further reading:**
- [Julia Documentation - Multi-Threading](https://docs.julialang.org/en/v1/manual/multi-threading/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import locks
var lock: Lock
var sharedCounter = 0

initLock(lock)

proc worker() {.thread.} =
  for i in 0..999:
    acquire(lock)
    inc sharedCounter
    release(lock)

var threads: array[4, Thread[void]]
for i in 0..3:
  createThread(threads[i], worker)
joinThreads(threads)
deinitLock(lock)

echo sharedCounter  # 4000
```

**Special features:**
- `Lock` from the `locks` module
- `acquire`/`release` for lock management
- `withLock` template for automatic lock management

**Further reading:**
- [Nim Documentation - Locks](https://nim-lang.org/docs/locks.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses SyncObjs;
var
  CS: TCriticalSection;
  SharedCounter: Integer = 0;

procedure SafeIncrement;
begin
  CS.Enter;
  try
    SharedCounter := SharedCounter + 1;
  finally
    CS.Leave;
  end;
end;

begin
  CS := TCriticalSection.Create;
  try
    SafeIncrement;
  finally
    CS.Free;
  end;
end;
```

**Special features:**
- `TCriticalSection` for mutual exclusion
- `TEvent` for event-based synchronization
- `Synchronize` for GUI thread access
- `TMonitor` for object-based synchronization

**Further reading:**
- [Delphi Documentation - SyncObjs](https://docwiki.embarcadero.com/Libraries/en/System.SyncObjs)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Thread Synchronization (SWI-Prolog)
:- dynamic counter/1.
counter(0).

increment :-
    with_mutex(counter_mutex, (
        retract(counter(N)),
        N1 is N + 1,
        assert(counter(N1))
    )).

get_counter(Value) :-
    with_mutex(counter_mutex, counter(Value)).
```

**Special features:**
- `with_mutex/2` for critical sections (automatic lock/unlock)
- Mutexes are automatically created on first use
- `mutex_lock/1` and `mutex_unlock/1` for manual control
- Dynamic predicates as shared state between threads

**Further reading:**
- [SWI-Prolog Documentation - Thread Synchronization](https://www.swi-prolog.org/pldoc/man?section=threadsync)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// @synchronized block
@synchronized(self) {
    // Only one thread can execute this block at a time
    self.counter++;
}

// dispatch_barrier for reader-writer pattern
dispatch_queue_t queue = dispatch_queue_create("com.app.sync", DISPATCH_QUEUE_CONCURRENT);
dispatch_barrier_async(queue, ^{
    // Exclusive write access
});
```

**Special features:**
- `@synchronized` as simplest synchronization construct
- GCD barriers for reader-writer patterns
- `dispatch_semaphore` for semaphore-based synchronization
- Atomic properties for simple thread safety

**Further reading:**
- [Apple Documentation - Synchronization](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/ThreadSafety/ThreadSafety.html)

</TabItem>
</Tabs>


## 14.1.4. Locks / Mutexes

Mechanisms for mutual exclusion that ensure only one thread accesses a shared resource at a time. Prevent race conditions by serializing access to critical sections.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'go', 'java', 'julia', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'prolog', 'python', 'rust', 'zig']}>
<TabItem value="java" label="Java">

```java
import java.util.concurrent.locks.ReentrantLock;

public class LockExample {
    private final ReentrantLock lock = new ReentrantLock();
    private int counter = 0;
    
    public void increment() {
        lock.lock();
        try {
            counter++;
        } finally {
            lock.unlock();
        }
    }
    
    public boolean tryIncrement() {
        if (lock.tryLock()) {
            try {
                counter++;
                return true;
            } finally {
                lock.unlock();
            }
        }
        return false;
    }
}
```

**Special features:**
- ReentrantLock for explicit lock management
- tryLock() for non-blocking attempts
- Reentrant: same thread can lock multiple times

**Further reading:**
- [Oracle Java Documentation - ReentrantLock](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Threading;

class LockExample {
    private readonly object lockObj = new object();
    private int counter = 0;
    
    public void Increment() {
        lock (lockObj) {
            counter++;
        }
    }
    
    public void IncrementWithMonitor() {
        Monitor.Enter(lockObj);
        try {
            counter++;
        } finally {
            Monitor.Exit(lockObj);
        }
    }
}
```

**Special features:**
- lock statement for automatic lock management
- Monitor.Enter/Exit for manual control
- Mutex class available for system-wide locks

**Further reading:**
- [Microsoft C# Documentation - lock Statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/lock)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Mutexes (seit C++11)
// Benötigt: #include <mutex>
#include <mutex>

class LockExample {
private:
    std::mutex mtx;
    int counter = 0;
    
public:
    void increment() {
        std::lock_guard<std::mutex> lock(mtx);
        counter++;
    }
    
    bool tryIncrement() {
        std::unique_lock<std::mutex> lock(mtx, std::try_to_lock);
        if (lock.owns_lock()) {
            counter++;
            return true;
        }
        return false;
    }
};
```

**Special features:**
- std::mutex for mutual exclusion
- std::lock_guard for RAII-based lock management
- std::unique_lock for more flexible lock management with try_lock()

**Further reading:**
- [cppreference.com - std::mutex](https://en.cppreference.com/w/cpp/thread/mutex)

</TabItem>
<TabItem value="python" label="Python">

```python
import threading

class LockExample:
    def __init__(self):
        self.lock = threading.Lock()
        self.counter = 0
    
    def increment(self):
        with self.lock:
            self.counter += 1
    
    def try_increment(self):
        if self.lock.acquire(blocking=False):
            try:
                self.counter += 1
                return True
            finally:
                self.lock.release()
        return False
```

**Special features:**
- threading.Lock for mutual exclusion
- with statement for automatic lock release
- acquire(blocking=False) for non-blocking attempts

**Further reading:**
- [Python Documentation - threading.Lock](https://docs.python.org/3/library/threading.html#lock-objects)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Counter: {}", *counter.lock().unwrap());
}
```

**Special features:**
- Mutex for mutual exclusion
- lock() returns MutexGuard (RAII)
- Arc for shared ownership between threads

**Further reading:**
- [Rust Book - Mutex](https://doc.rust-lang.org/book/ch16-03-shared-state.html#using-mutexes-to-allow-access-to-data-from-one-thread-at-a-time)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "sync"
)

type LockExample struct {
    mutex   sync.Mutex
    counter int
}

func (le *LockExample) increment() {
    le.mutex.Lock()
    defer le.mutex.Unlock()
    le.counter++
}

func (le *LockExample) tryIncrement() bool {
    if le.mutex.TryLock() {
        defer le.mutex.Unlock()
        le.counter++
        return true
    }
    return false
}

func main() {
    le := &LockExample{}
    var wg sync.WaitGroup
    
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            le.increment()
        }()
    }
    
    wg.Wait()
    fmt.Println("Counter:", le.counter)
}
```

**Special features:**
- sync.Mutex für Mutual Exclusion
- defer für automatische Unlock
- TryLock() für nicht-blockierende Versuche (seit Go 1.18)

**Further reading:**
- [Go Documentation - sync.Mutex](https://pkg.go.dev/sync#Mutex)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.util.concurrent.locks.ReentrantLock

class LockExample {
    private val lock = ReentrantLock()
    private var counter = 0
    
    fun increment() {
        lock.lock()
        try {
            counter++
        } finally {
            lock.unlock()
        }
    }
    
    fun tryIncrement(): Boolean {
        if (lock.tryLock()) {
            try {
                counter++
                return true
            } finally {
                lock.unlock()
            }
        }
        return false
    }
}
```

**Special features:**
- ReentrantLock for explicit lock management
- tryLock() for non-blocking attempts
- Reentrant: same thread can lock multiple times

**Further reading:**
- [Oracle Java Documentation - ReentrantLock](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Benötigt: #include <pthread.h>
#include <pthread.h>

typedef struct {
    pthread_mutex_t mutex;
    int counter;
} LockExample;

void increment(LockExample* le) {
    pthread_mutex_lock(&le->mutex);
    le->counter++;
    pthread_mutex_unlock(&le->mutex);
}

int tryIncrement(LockExample* le) {
    if (pthread_mutex_trylock(&le->mutex) == 0) {
        le->counter++;
        pthread_mutex_unlock(&le->mutex);
        return 1;
    }
    return 0;
}
```

**Special features:**
- pthread_mutex_t für Mutual Exclusion
- pthread_mutex_trylock() für nicht-blockierende Versuche
- Manuelle Initialisierung und Zerstörung erforderlich

**Further reading:**
- [POSIX Threads Documentation - Mutexes](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/pthread.h.html)

</TabItem>
<TabItem value="d" label="D">

```d
import core.sync.mutex;
import core.sync.condition;
import std.stdio;

class LockExample {
    private Mutex mutex;
    private int counter;
    
    this() {
        mutex = new Mutex();
    }
    
    void increment() {
        mutex.lock();
        try {
            counter++;
        } finally {
            mutex.unlock();
        }
    }
    
    bool tryIncrement() {
        if (mutex.tryLock()) {
            try {
                counter++;
                return true;
            } finally {
                mutex.unlock();
            }
        }
        return false;
    }
}
```

**Special features:**
- core.sync.mutex.Mutex für Mutual Exclusion
- tryLock() für nicht-blockierende Versuche
- try-finally für sichere Lock-Freigabe

**Further reading:**
- [D Language Reference - core.sync.mutex](https://dlang.org/phobos/core_sync_mutex.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# ReentrantLock (seit Julia 1.3)
lk = ReentrantLock()

lock(lk)
try
    # Critical section
finally
    unlock(lk)
end

# Idiomatisch mit do-Block
lock(lk) do
    # Critical section
end
```

**Special features:**
- `ReentrantLock` als primärer Mutex-Typ
- `SpinLock` für leichtgewichtige Synchronisation
- `lock(lk) do ... end` Pattern für automatisches Unlock

**Further reading:**
- [Julia Documentation - Synchronization](https://docs.julialang.org/en/v1/base/parallel/#Synchronization)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import locks
var mutex: Lock
initLock(mutex)

# Manuelle Verwaltung
acquire(mutex)
# Kritischer Abschnitt
release(mutex)

# Automatische Verwaltung mit withLock
withLock(mutex):
  # Critical section
  echo "Thread-sicherer Zugriff"

deinitLock(mutex)
```

**Special features:**
- `Lock` aus dem `locks`-Modul
- `withLock` für RAII-ähnliches Lock-Management
- `initLock`/`deinitLock` für Lebenszyklus-Verwaltung

**Further reading:**
- [Nim Documentation - Locks](https://nim-lang.org/docs/locks.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses SyncObjs;
var
  Mutex: TMutex;

procedure CriticalWork;
begin
  Mutex.Acquire;
  try
    // Protected area
    WriteLn('Working...');
  finally
    Mutex.Release;
  end;
end;

begin
  Mutex := TMutex.Create;
  try
    CriticalWork;
  finally
    Mutex.Free;
  end;
end;
```

**Special features:**
- `TCriticalSection` für leichtgewichtige Locks (innerhalb eines Prozesses)
- `TMutex` für system-weite Locks (zwischen Prozessen)
- `TMonitor.Enter`/`TMonitor.Exit` als Alternative

**Further reading:**
- [Delphi Documentation - TMutex](https://docwiki.embarcadero.com/Libraries/en/System.SyncObjs.TMutex)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Mutexes (SWI-Prolog)
:- dynamic counter/1.
counter(0).

% with_mutex/2 für automatisches Lock/Unlock (empfohlen)
increment :-
    with_mutex(counter_mutex, (
        retract(counter(N)),
        N1 is N + 1,
        assert(counter(N1))
    )).

% Manuelle Lock-Verwaltung mit setup_call_cleanup
manual_increment :-
    setup_call_cleanup(
        mutex_lock(counter_mutex),
        (   retract(counter(N)),
            N1 is N + 1,
            assert(counter(N1))
        ),
        mutex_unlock(counter_mutex)
    ).

% Nicht-blockierender Versuch
try_increment :-
    mutex_trylock(counter_mutex),
    (   retract(counter(N)),
        N1 is N + 1,
        assert(counter(N1))
    ->  mutex_unlock(counter_mutex)
    ;   mutex_unlock(counter_mutex),
        fail
    ).
```

**Special features:**
- `with_mutex/2` für automatisches Lock/Unlock (RAII-ähnlich)
- `mutex_lock/1` / `mutex_unlock/1` für manuelle Verwaltung
- `mutex_trylock/1` für nicht-blockierende Versuche
- Mutexes werden bei erster Verwendung automatisch erstellt (Lazy Creation)

**Further reading:**
- [SWI-Prolog Documentation - Mutexes](https://www.swi-prolog.org/pldoc/man?section=threadsync)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSLock
NSLock *lock = [[NSLock alloc] init];
[lock lock];
// Critical section
[lock unlock];

// NSRecursiveLock (erlaubt mehrfaches Sperren vom selben Thread)
NSRecursiveLock *recursiveLock = [[NSRecursiveLock alloc] init];
[recursiveLock lock];
[recursiveLock lock]; // OK im selben Thread
[recursiveLock unlock];
[recursiveLock unlock];
```

**Special features:**
- `NSLock` für einfache Mutex-Locks
- `NSRecursiveLock` für rekursive Locks
- `NSConditionLock` für Bedingungsvariablen
- Auch C-level `pthread_mutex` verfügbar

**Further reading:**
- [Apple Documentation - NSLock](https://developer.apple.com/documentation/foundation/nslock)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

var mutex = std.Thread.Mutex{};
var shared_counter: i32 = 0;

fn increment() void {
    mutex.lock();
    defer mutex.unlock();
    shared_counter += 1;
}

pub fn main() !void {
    var threads: [10]std.Thread = undefined;
    for (&threads) |*t| {
        t.* = try std.Thread.spawn(.{}, increment, .{});
    }
    for (threads) |t| {
        t.join();
    }
    std.debug.print("Counter: {}\n", .{shared_counter});
}
```

**Special features:**
- `std.Thread.Mutex` für gegenseitigen Ausschluss
- `defer mutex.unlock()` garantiert Freigabe
- Keine eingebaute Deadlock-Erkennung
- `std.Thread.RwLock` für Read-Write-Locks

**Further reading:**
- [Zig Standard Library - Mutex](https://ziglang.org/documentation/master/std/#std.Thread.Mutex)

</TabItem>
</Tabs>


## 14.1.5. Semaphores

Synchronization primitives that control access to a resource by a limited number of threads. Semaphores use a counter to track how many threads can access a resource simultaneously.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'go', 'java', 'kotlin', 'objective-c', 'python', 'rust']}>
<TabItem value="java" label="Java">

```java
import java.util.concurrent.Semaphore;

public class SemaphoreExample {
    private final Semaphore semaphore = new Semaphore(3);
    
    public void accessResource() throws InterruptedException {
        semaphore.acquire();
        try {
            // Access resource
            System.out.println("Resource in use");
            Thread.sleep(1000);
        } finally {
            semaphore.release();
        }
    }
    
    public boolean tryAccessResource() {
        if (semaphore.tryAcquire()) {
            try {
                // Access resource
                return true;
            } finally {
                semaphore.release();
            }
        }
        return false;
    }
}
```

**Special features:**
- Semaphore class for semaphore implementation
- acquire() blocks until permit is available
- tryAcquire() for non-blocking attempts

**Further reading:**
- [Oracle Java Documentation - Semaphore](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/Semaphore.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Threading;

class SemaphoreExample {
    private readonly Semaphore semaphore = new Semaphore(3, 3);
    
    public void AccessResource() {
        semaphore.WaitOne();
        try {
            // Access resource
            Console.WriteLine("Resource in use");
            Thread.Sleep(1000);
        } finally {
            semaphore.Release();
        }
    }
    
    public bool TryAccessResource() {
        if (semaphore.WaitOne(0)) {
            try {
                // Access resource
                return true;
            } finally {
                semaphore.Release();
            }
        }
        return false;
    }
}
```

**Special features:**
- Semaphore class for semaphore implementation
- WaitOne() blocks until permit is available
- WaitOne(0) for non-blocking attempts

**Further reading:**
- [Microsoft C# Documentation - Semaphore](https://learn.microsoft.com/en-us/dotnet/api/system.threading.semaphore)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Semaphores (since C++20)
// Requires: #include <semaphore>
#include <semaphore>
#include <thread>
#include <iostream>

class SemaphoreExample {
private:
    std::counting_semaphore<10> semaphore{3};
    
public:
    void accessResource() {
        semaphore.acquire();
        try {
            // Access resource
            std::cout << "Resource in use" << std::endl;
            std::this_thread::sleep_for(std::chrono::seconds(1));
        } catch (...) {
            semaphore.release();
            throw;
        }
        semaphore.release();
    }
    
    bool tryAccessResource() {
        if (semaphore.try_acquire()) {
            try {
                // Access resource
                return true;
            } catch (...) {
                semaphore.release();
                throw;
            }
            semaphore.release();
        }
        return false;
    }
};
```

**Special features:**
- std::counting_semaphore since C++20
- acquire() blocks until permit is available
- try_acquire() for non-blocking attempts

**Further reading:**
- [cppreference.com - std::counting_semaphore](https://en.cppreference.com/w/cpp/thread/counting_semaphore)

</TabItem>
<TabItem value="python" label="Python">

```python
import threading

class SemaphoreExample:
    def __init__(self):
        self.semaphore = threading.Semaphore(3)
    
    def access_resource(self):
        self.semaphore.acquire()
        try:
            # Access resource
            print("Resource is being used")
            threading.Event().wait(1)
        finally:
            self.semaphore.release()
    
    def try_access_resource(self):
        if self.semaphore.acquire(blocking=False):
            try:
                # Access resource
                return True
            finally:
                self.semaphore.release()
        return False
```

**Special features:**
- threading.Semaphore for semaphore implementation
- acquire() blocks until permit is available
- acquire(blocking=False) for non-blocking attempts

**Further reading:**
- [Python Documentation - threading.Semaphore](https://docs.python.org/3/library/threading.html#semaphore-objects)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::sync::{Arc, Semaphore};
use std::thread;

fn main() {
    let semaphore = Arc::new(Semaphore::new(3));
    let mut handles = vec![];
    
    for i in 0..10 {
        let sem = Arc::clone(&semaphore);
        let handle = thread::spawn(move || {
            let _permit = sem.acquire().unwrap();
            println!("Resource is being used by thread {}", i);
            thread::sleep(std::time::Duration::from_secs(1));
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
}
```

**Special features:**
- Semaphore class for semaphore implementation
- acquire() returns permit (RAII)
- External crate tokio for asynchronous semaphores

**Further reading:**
- [Rust Documentation - Semaphore](https://docs.rs/tokio/latest/tokio/sync/struct.Semaphore.html)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

type SemaphoreExample struct {
    semaphore chan struct{}
}

func NewSemaphoreExample(maxConcurrent int) *SemaphoreExample {
    return &SemaphoreExample{
        semaphore: make(chan struct{}, maxConcurrent),
    }
}

func (se *SemaphoreExample) accessResource() {
    se.semaphore <- struct{}{} // acquire
    defer func() { <-se.semaphore }() // release
    
    fmt.Println("Resource is being used")
    time.Sleep(1 * time.Second)
}

func main() {
    se := NewSemaphoreExample(3)
    var wg sync.WaitGroup
    
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            se.accessResource()
        }()
    }
    
    wg.Wait()
}
```

**Special features:**
- Channels as semaphore implementation
- Buffered channel with capacity as semaphore counter
- Send = acquire, receive = release

**Further reading:**
- [Go Documentation - Channels](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.util.concurrent.Semaphore

class SemaphoreExample {
    private val semaphore = Semaphore(3)
    
    fun accessResource() {
        semaphore.acquire()
        try {
            // Access resource
            println("Resource is being used")
            Thread.sleep(1000)
        } finally {
            semaphore.release()
        }
    }
    
    fun tryAccessResource(): Boolean {
        if (semaphore.tryAcquire()) {
            try {
                // Access resource
                return true
            } finally {
                semaphore.release()
            }
        }
        return false
    }
}
```

**Special features:**
- Semaphore class for semaphore implementation
- acquire() blocks until permit is available
- tryAcquire() for non-blocking attempts

**Further reading:**
- [Oracle Java Documentation - Semaphore](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/Semaphore.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Required: #include <semaphore.h>, <pthread.h>
#include <semaphore.h>
#include <pthread.h>
#include <stdio.h>
#include <unistd.h>

typedef struct {
    sem_t semaphore;
} SemaphoreExample;

void initSemaphore(SemaphoreExample* se, int value) {
    sem_init(&se->semaphore, 0, value);
}

void accessResource(SemaphoreExample* se) {
    sem_wait(&se->semaphore);
    // Access resource
    printf("Resource is being used\n");
    sleep(1);
    sem_post(&se->semaphore);
}

int tryAccessResource(SemaphoreExample* se) {
    if (sem_trywait(&se->semaphore) == 0) {
        // Access resource
        sem_post(&se->semaphore);
        return 1;
    }
    return 0;
}
```

**Special features:**
- sem_t for semaphore implementation
- sem_wait() blocks until permit is available
- sem_trywait() for non-blocking attempts

**Further reading:**
- [POSIX Semaphores Documentation](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/semaphore.h.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Semaphores
// Required: import core.sync.semaphore;
// Required: import core.thread;
// Required: import std.stdio;

auto sem = new Semaphore(3);  // Maximum 3 concurrent accesses

void worker(int id) {
    sem.wait();
    scope(exit) sem.notify();
    writeln("Worker ", id, " is working");
    Thread.sleep(dur!"msecs"(100));
}

// Start multiple threads
foreach (i; 0 .. 10) {
    new Thread({ worker(i); }).start();
}
```

**Special features:**
- `core.sync.semaphore.Semaphore` for semaphore-based synchronization
- `wait()` decrements, `notify()` increments the counter
- `tryWait()` for non-blocking waiting
- Often combined with `scope(exit)` for automatic `notify()`

**Further reading:**
- [D Phobos - core.sync.semaphore](https://dlang.org/phobos/core_sync_semaphore.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// dispatch_semaphore
dispatch_semaphore_t semaphore = dispatch_semaphore_create(3); // Max 3 concurrent accesses

dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER); // Wait for access
// Critical section
dispatch_semaphore_signal(semaphore); // Release access
```

**Special features:**
- `dispatch_semaphore` from Grand Central Dispatch
- Counter-based synchronization
- Also used for synchronization of asynchronous callbacks

**Further reading:**
- [Apple Documentation - dispatch_semaphore](https://developer.apple.com/documentation/dispatch/dispatch_semaphore)

</TabItem>
</Tabs>


## 14.1.6. Atomic Operations

Uninterruptible operations that are thread-safe without additional synchronization mechanisms. Atomic operations are guaranteed at the hardware level and are more efficient than locks for simple operations.

### Languages {#languages}

<Tabs availableTabs={['c', 'clojure', 'cpp', 'csharp', 'd', 'go', 'java', 'julia', 'kotlin', 'rust', 'zig']} yellowTabs={['objective-c']} orangeTabs={['python']}>
<TabItem value="java" label="Java">

```java
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicExample {
    private final AtomicInteger counter = new AtomicInteger(0);
    
    public void increment() {
        counter.incrementAndGet();
    }
    
    public int getValue() {
        return counter.get();
    }
    
    public boolean compareAndSet(int expected, int update) {
        return counter.compareAndSet(expected, update);
    }
}
```

**Special features:**
- java.util.concurrent.atomic for atomic operations
- AtomicInteger, AtomicLong, AtomicReference available
- compareAndSet() for Compare-And-Swap operations

**Further reading:**
- [Oracle Java Documentation - AtomicInteger](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System.Threading;

class AtomicExample {
    private int counter = 0;
    
    public void Increment() {
        Interlocked.Increment(ref counter);
    }
    
    public int GetValue() {
        return Interlocked.Read(ref counter);
    }
    
    public bool CompareExchange(int expected, int update) {
        return Interlocked.CompareExchange(ref counter, update, expected) == expected;
    }
}
```

**Special features:**
- Interlocked class for atomic operations
- Increment, Decrement, Add, Exchange available
- CompareExchange for Compare-And-Swap operations

**Further reading:**
- [Microsoft C# Documentation - Interlocked](https://learn.microsoft.com/en-us/dotnet/api/system.threading.interlocked)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Atomic Operations (since C++11)
// Required: #include <atomic>
#include <atomic>
#include <thread>

class AtomicExample {
private:
    std::atomic<int> counter{0};
    
public:
    void increment() {
        counter++;
    }
    
    int getValue() {
        return counter.load();
    }
    
    bool compareAndSet(int expected, int update) {
        int expected_val = expected;
        return counter.compare_exchange_strong(expected_val, update);
    }
};
```

**Special features:**
- std::atomic for atomic operations
- load(), store(), fetch_add() available
- compare_exchange_strong() for Compare-And-Swap operations

**Further reading:**
- [cppreference.com - std::atomic](https://en.cppreference.com/w/cpp/atomic/atomic)

</TabItem>
<TabItem value="python" label="Python">

```python
import threading

class AtomicExample:
    def __init__(self):
        self._counter = 0
        self._lock = threading.Lock()
    
    def increment(self):
        with self._lock:
            self._counter += 1
    
    def get_value(self):
        with self._lock:
            return self._counter
```

**Special features:**
- Python has no native atomic operations
- Lock-based implementation required
- C extensions can use atomic operations

**Further reading:**
- [Python Documentation - threading](https://docs.python.org/3/library/threading.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::sync::atomic::{AtomicI32, Ordering};

struct AtomicExample {
    counter: AtomicI32,
}

impl AtomicExample {
    fn new() -> Self {
        AtomicExample {
            counter: AtomicI32::new(0),
        }
    }
    
    fn increment(&self) {
        self.counter.fetch_add(1, Ordering::SeqCst);
    }
    
    fn get_value(&self) -> i32 {
        self.counter.load(Ordering::SeqCst)
    }
    
    fn compare_and_set(&self, expected: i32, update: i32) -> bool {
        self.counter.compare_exchange(
            expected,
            update,
            Ordering::SeqCst,
            Ordering::SeqCst
        ).is_ok()
    }
}
```

**Special features:**
- std::sync::atomic for atomic operations
- Ordering for memory ordering semantics
- fetch_add(), load(), compare_exchange() available

**Further reading:**
- [Rust Documentation - std::sync::atomic](https://doc.rust-lang.org/std/sync/atomic/index.html)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import (
    "sync/atomic"
)

type AtomicExample struct {
    counter int32
}

func (ae *AtomicExample) increment() {
    atomic.AddInt32(&ae.counter, 1)
}

func (ae *AtomicExample) getValue() int32 {
    return atomic.LoadInt32(&ae.counter)
}

func (ae *AtomicExample) compareAndSet(expected, update int32) bool {
    return atomic.CompareAndSwapInt32(&ae.counter, expected, update)
}

func main() {
    ae := &AtomicExample{}
    ae.increment()
    fmt.Println(ae.getValue())
}
```

**Special features:**
- sync/atomic for atomic operations
- AddInt32, LoadInt32, CompareAndSwapInt32 available
- Various types: Int32, Int64, Uint32, Uint64, Pointer

**Further reading:**
- [Go Documentation - sync/atomic](https://pkg.go.dev/sync/atomic)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.util.concurrent.atomic.AtomicInteger

class AtomicExample {
    private val counter = AtomicInteger(0)
    
    fun increment() {
        counter.incrementAndGet()
    }
    
    fun getValue(): Int {
        return counter.get()
    }
    
    fun compareAndSet(expected: Int, update: Int): Boolean {
        return counter.compareAndSet(expected, update)
    }
}
```

**Special features:**
- java.util.concurrent.atomic for atomic operations
- AtomicInteger, AtomicLong, AtomicReference available
- compareAndSet() for Compare-And-Swap operations

**Further reading:**
- [Oracle Java Documentation - AtomicInteger](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Required: #include <stdatomic.h> (since C11)
#include <stdatomic.h>
#include <stdbool.h>

typedef struct {
    atomic_int counter;
} AtomicExample;

void initAtomic(AtomicExample* ae) {
    atomic_init(&ae->counter, 0);
}

void increment(AtomicExample* ae) {
    atomic_fetch_add(&ae->counter, 1);
}

int getValue(AtomicExample* ae) {
    return atomic_load(&ae->counter);
}

bool compareAndSet(AtomicExample* ae, int expected, int update) {
    int expected_val = expected;
    return atomic_compare_exchange_strong(&ae->counter, &expected_val, update);
}
```

**Special features:**
- stdatomic.h for atomic operations (since C11)
- atomic_fetch_add(), atomic_load() available
- atomic_compare_exchange_strong() for Compare-And-Swap operations

**Further reading:**
- [C11 Standard - stdatomic.h](https://en.cppreference.com/w/c/atomic)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Atoms for atomic state changes
(def counter (atom 0))

;; Atomic update with swap!
(swap! counter inc)       ; 1
(swap! counter + 10)      ; 11

;; Atomic setting with reset!
(reset! counter 0)        ; 0

;; Reading with deref or @
(println @counter)        ; 0

;; compare-and-set!
(compare-and-set! counter 0 42)  ; true (only if current value is 0)
```

**Special features:**
- `atom` for uncoordinated, synchronous state changes
- Lock-free via Compare-and-Swap (CAS)
- `swap!` for functional updates (retry on conflicts)
- `reset!` for direct setting
- Thread-safe without explicit locks

**Further reading:**
- [Clojure Documentation - Atoms](https://clojure.org/reference/atoms)

</TabItem>
<TabItem value="d" label="D">

```d
// Atomic Operations
// Required: import core.atomic;
// Required: import core.thread;
// Required: import std.stdio;

shared int counter = 0;

void incrementer() {
    foreach (i; 0 .. 10_000) {
        atomicOp!"+="(counter, 1);
    }
}

void main() {
    auto t1 = new Thread(&incrementer);
    auto t2 = new Thread(&incrementer);
    t1.start();
    t2.start();
    t1.join();
    t2.join();
    writeln("Counter: ", atomicLoad(counter));  // 20000
}
```

**Special features:**
- `core.atomic` for lock-free atomic operations
- `atomicOp` for atomic arithmetic operations
- `atomicLoad` / `atomicStore` for atomic read/write
- `cas` (Compare-And-Swap) for more complex atomic operations

**Further reading:**
- [D Phobos - core.atomic](https://dlang.org/phobos/core_atomic.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Atomic Operations (since Julia 1.3)
counter = Threads.Atomic{Int}(0)

Threads.@threads for i in 1:1000
    Threads.atomic_add!(counter, 1)
end

println(counter[])  # 1000
```

**Special features:**
- `Threads.Atomic{T}` for atomic variables
- `atomic_add!`, `atomic_sub!`, `atomic_cas!` etc.
- Thread-safe operations without locks

**Further reading:**
- [Julia Documentation - Atomic Operations](https://docs.julialang.org/en/v1/base/multi-threading/#Atomic-operations)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Atomic Properties (Default)
@property (atomic, strong) NSString *name; // Thread-safe for getter/setter

// Nonatomic Properties (explicitly non-atomic)
@property (nonatomic, strong) NSString *fastName; // Not thread-safe, but faster
```

**Special features:**
- Properties are `atomic` by default (thread-safe getter/setter)
- `nonatomic` for performance with non-shared properties
- `atomic` only guarantees individual property accesses, not compound operations
- `os_atomic_*` functions for low-level atomics

**Further reading:**
- [Apple Documentation - Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

var counter: std.atomic.Value(i32) = std.atomic.Value(i32).init(0);

fn atomicIncrement() void {
    _ = counter.fetchAdd(1, .seq_cst);
}

pub fn main() !void {
    var threads: [10]std.Thread = undefined;
    for (&threads) |*t| {
        t.* = try std.Thread.spawn(.{}, atomicIncrement, .{});
    }
    for (threads) |t| {
        t.join();
    }
    const final_value = counter.load(.seq_cst);
    std.debug.print("Counter: {}\n", .{final_value});
}
```

**Special features:**
- `std.atomic.Value(T)` for atomic operations
- Supports various memory orderings (`.seq_cst`, `.acquire`, `.release`, etc.)
- `fetchAdd`, `fetchSub`, `store`, `load` for atomic operations
- `@cmpxchgStrong` and `@cmpxchgWeak` as builtins

**Further reading:**
- [Zig Standard Library - Atomic](https://ziglang.org/documentation/master/std/#std.atomic)

</TabItem>
</Tabs>

