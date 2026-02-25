---
slug: /concurrency/threading
title: 14.1. Threading
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 14.1. Threading

Thread-basierte Concurrency.

## 14.1.1. Threads

Parallele Ausführung von Code durch separate Ausführungsstränge innerhalb eines Prozesses. Threads teilen sich den Speicherraum und ermöglichen gleichzeitige Verarbeitung mehrerer Aufgaben.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'cpp', 'csharp', 'd', 'java', 'javascript', 'julia', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'prolog', 'python', 'rust', 'typescript', 'v', 'zig']} yellowTabs={['swift']}>
<TabItem value="ada" label="Ada">

```ada
with Ada.Text_IO; use Ada.Text_IO;

procedure Thread_Example is
   task Worker;
   
   task body Worker is
   begin
      Put_Line("Thread läuft");
      delay 1.0;
      Put_Line("Thread beendet");
   end Worker;
begin
   Put_Line("Hauptthread");
   delay 2.0;
end Thread_Example;
```

**Besonderheiten:**
- Verwendet Tasks als primäres Concurrency-Modell
- Tasks werden automatisch beim Erreichen des begin-Blocks gestartet
- Tasks können auf das Ende anderer Tasks warten

**Weiterführende Links:**
- [Ada Reference Manual - Tasks](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-9.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Benötigt: #include <pthread.h>, <stdio.h>, <unistd.h>
#include <pthread.h>
#include <stdio.h>
#include <unistd.h>

void* thread_function(void* arg) {
    printf("Thread läuft\n");
    sleep(1);
    printf("Thread beendet\n");
    return NULL;
}

int main() {
    pthread_t thread;
    printf("Hauptthread\n");
    pthread_create(&thread, NULL, thread_function, NULL);
    pthread_join(thread, NULL);
    return 0;
}
```

**Besonderheiten:**
- Verwendet POSIX Threads (pthread)
- Manuelle Speicherverwaltung erforderlich
- pthread_join wartet auf Thread-Ende

**Weiterführende Links:**
- [POSIX Threads Documentation](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/pthread.h.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Threading;

class Program {
    static void ThreadFunction() {
        Console.WriteLine("Thread läuft");
        Thread.Sleep(1000);
        Console.WriteLine("Thread beendet");
    }
    
    static void Main() {
        Console.WriteLine("Hauptthread");
        Thread thread = new Thread(ThreadFunction);
        thread.Start();
        thread.Join();
    }
}
```

**Besonderheiten:**
- System.Threading.Thread für Thread-Erstellung
- Thread.Join() wartet auf Thread-Ende
- Unterstützt Thread-Prioritäten und Thread-Lokalen Speicher

**Weiterführende Links:**
- [Microsoft C# Documentation - Thread Class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.thread)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Threads (seit C++11)
// Benötigt: #include <thread>, <iostream>, <chrono>
#include <thread>
#include <iostream>
#include <chrono>

void thread_function() {
    std::cout << "Thread läuft" << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(1));
    std::cout << "Thread beendet" << std::endl;
}

int main() {
    std::cout << "Hauptthread" << std::endl;
    std::thread thread(thread_function);
    thread.join();
    return 0;
}
```

**Besonderheiten:**
- std::thread seit C++11
- RAII-basierte Thread-Verwaltung
- thread.join() wartet auf Thread-Ende

**Weiterführende Links:**
- [cppreference.com - std::thread](https://en.cppreference.com/w/cpp/thread/thread)

</TabItem>
<TabItem value="d" label="D">

```d
import std.stdio;
import std.concurrency;
import core.thread;

void threadFunction() {
    writeln("Thread läuft");
    Thread.sleep(dur!"seconds"(1));
    writeln("Thread beendet");
}

void main() {
    writeln("Hauptthread");
    auto thread = new Thread(&threadFunction);
    thread.start();
    thread.join();
}
```

**Besonderheiten:**
- core.thread für Thread-Erstellung
- Thread.start() startet den Thread
- Thread.join() wartet auf Thread-Ende

**Weiterführende Links:**
- [D Language Reference - core.thread](https://dlang.org/phobos/core_thread.html)

</TabItem>
<TabItem value="java" label="Java">

```java
public class ThreadExample {
    public static void main(String[] args) {
        System.out.println("Hauptthread");
        Thread thread = new Thread(() -> {
            System.out.println("Thread läuft");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("Thread beendet");
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

**Besonderheiten:**
- java.lang.Thread für Thread-Erstellung
- Thread.start() startet den Thread
- Thread.join() wartet auf Thread-Ende
- InterruptedException muss behandelt werden

**Weiterführende Links:**
- [Oracle Java Documentation - Thread Class](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Thread.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun main() {
    println("Hauptthread")
    val thread = Thread {
        println("Thread läuft")
        Thread.sleep(1000)
        println("Thread beendet")
    }
    thread.start()
    thread.join()
}
```

**Besonderheiten:**
- Verwendet java.lang.Thread (JVM)
- Lambda-Syntax für Thread-Funktion
- Thread.join() wartet auf Thread-Ende

**Weiterführende Links:**
- [Kotlin Documentation - Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

</TabItem>
<TabItem value="python" label="Python">

```python
import threading
import time

def thread_function():
    print("Thread läuft")
    time.sleep(1)
    print("Thread beendet")

print("Hauptthread")
thread = threading.Thread(target=thread_function)
thread.start()
thread.join()
```

**Besonderheiten:**
- threading.Thread für Thread-Erstellung
- Global Interpreter Lock (GIL) limitiert echte Parallelität für CPU-intensive Aufgaben
- Thread.join() wartet auf Thread-Ende

**Weiterführende Links:**
- [Python Documentation - threading](https://docs.python.org/3/library/threading.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::thread;
use std::time::Duration;

fn main() {
    println!("Hauptthread");
    let handle = thread::spawn(|| {
        println!("Thread läuft");
        thread::sleep(Duration::from_secs(1));
        println!("Thread beendet");
    });
    handle.join().unwrap();
}
```

**Besonderheiten:**
- thread::spawn erstellt einen Thread
- Gibt einen JoinHandle zurück
- handle.join() wartet auf Thread-Ende

**Weiterführende Links:**
- [Rust Book - Threads](https://doc.rust-lang.org/book/ch16-01-threads.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: import Foundation

print("Hauptthread")
let thread = Thread {
    print("Thread läuft")
    Thread.sleep(forTimeInterval: 1.0)
    print("Thread beendet")
}
thread.start()

// Warten (Thread hat kein join() - Alternative: sleep oder Semaphore)
Thread.sleep(forTimeInterval: 2.0)
```

**Besonderheiten:**
- Thread-Klasse für Thread-Erstellung
- `Thread.start()` startet den Thread
- Kein `join()` verfügbar - Synchronisation über GCD oder Semaphore
- Bevorzugt: Swift Concurrency (`async`/`await`) seit Swift 5.5

**Weiterführende Links:**
- [Apple Swift Documentation - Thread](https://developer.apple.com/documentation/foundation/thread)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Node.js Worker Threads (seit Node.js 12.0.0)
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    console.log('Hauptthread');
    const worker = new Worker(__filename);
    worker.on('message', (msg) => console.log(msg));
} else {
    console.log('Thread läuft');
    setTimeout(() => {
        console.log('Thread beendet');
        parentPort.postMessage('Fertig');
    }, 1000);
}
```

**Besonderheiten:**
- Worker Threads in Node.js (seit Node.js 12.0.0)
- Im Browser: Web Workers statt Threads
- Message-Passing zwischen Threads

**Weiterführende Links:**
- [Node.js Documentation - worker_threads](https://nodejs.org/api/worker_threads.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Node.js Worker Threads (seit Node.js 12.0.0)
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

if (isMainThread) {
    console.log('Hauptthread');
    const worker = new Worker(__filename);
    worker.on('message', (msg) => console.log(msg));
} else {
    console.log('Thread läuft');
    setTimeout(() => {
        console.log('Thread beendet');
        parentPort.postMessage('Fertig');
    }, 1000);
}
```

**Besonderheiten:**
- Worker Threads in Node.js (seit Node.js 12.0.0)
- Im Browser: Web Workers statt Threads
- Message-Passing zwischen Threads

**Weiterführende Links:**
- [Node.js Documentation - worker_threads](https://nodejs.org/api/worker_threads.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Multi-Threading (seit Julia 1.3)
# Benötigt: julia --threads=4

# Threads.@threads für parallele Schleifen
results = zeros(10)
Threads.@threads for i in 1:10
    results[i] = i^2
end

# Thread-ID abfragen
println("Thread: $(Threads.threadid()) von $(Threads.nthreads())")

# Task auf separatem Thread starten (seit Julia 1.3)
t = Threads.@spawn begin
    heavy_computation()
end
result = fetch(t)
```

**Besonderheiten:**
- Multi-Threading seit Julia 1.3
- Thread-Anzahl wird beim Start festgelegt (`--threads=N` oder `JULIA_NUM_THREADS`)
- `Threads.@threads` für parallele Schleifen
- `Threads.@spawn` für asynchrone Task-Ausführung auf Threads

**Weiterführende Links:**
- [Julia Documentation - Multi-Threading](https://docs.julialang.org/en/v1/manual/multi-threading/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: --threads:on Compiler-Flag
proc worker(id: int) {.thread.} =
  echo "Thread ", id, " läuft"

var threads: array[4, Thread[int]]
for i in 0..3:
  createThread(threads[i], worker, i)

joinThreads(threads)
```

**Besonderheiten:**
- Threads über `createThread` erstellen
- `{.thread.}` Pragma markiert Thread-Prozeduren
- `--threads:on` Compiler-Flag erforderlich
- Thread-lokaler Speicher mit `{.threadvar.}` Pragma

**Weiterführende Links:**
- [Nim Documentation - Threads](https://nim-lang.org/docs/threads.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses Classes;
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

**Besonderheiten:**
- `TThread`-Klasse als Basis für Threads
- `Execute`-Methode muss überschrieben werden
- `Synchronize` für Thread-sichere GUI-Zugriffe
- `WaitFor` zum Warten auf Thread-Ende

**Weiterführende Links:**
- [Delphi Documentation - TThread](https://docwiki.embarcadero.com/Libraries/en/System.Classes.TThread)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Threads (SWI-Prolog)
thread_example :-
    writeln('Hauptthread'),
    thread_create(worker, Id, []),
    thread_join(Id, _).

worker :-
    writeln('Thread läuft'),
    sleep(1),
    writeln('Thread beendet').
```

**Besonderheiten:**
- `thread_create/3` erstellt einen neuen Thread mit einem Ziel (Goal)
- `thread_join/2` wartet auf Thread-Ende und liefert Status
- `thread_detach/1` für Threads, die nicht gejoint werden
- SWI-Prolog-spezifisch (nicht im ISO-Prolog-Standard)

**Weiterführende Links:**
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

**Besonderheiten:**
- `NSThread` als objektorientierte Thread-API
- Auch C-level `pthreads` verfügbar (da C-Superset)
- Grand Central Dispatch (GCD) wird für die meisten Fälle bevorzugt
- Jeder Thread benötigt einen eigenen Autorelease Pool

**Weiterführende Links:**
- [Apple Documentation - NSThread](https://developer.apple.com/documentation/foundation/nsthread)

</TabItem>
<TabItem value="v" label="V">

```v
// Threads mit spawn
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

**Besonderheiten:**
- `spawn` startet eine Funktion in einem neuen Thread
- `.wait()` wartet auf das Ergebnis
- OS-Threads (nicht Green Threads)

**Weiterführende Links:**
- [V Documentation - Concurrency](https://github.com/vlang/v/blob/master/doc/docs.md#concurrency)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

fn workerFunction(id: usize) void {
    std.debug.print("Thread {} gestartet\n", .{id});
}

pub fn main() !void {
    // Thread erstellen
    const thread = try std.Thread.spawn(.{}, workerFunction, .{1});

    // Auf Thread warten
    thread.join();
}
```

**Besonderheiten:**
- `std.Thread.spawn()` erstellt neue Threads
- `thread.join()` wartet auf Thread-Beendigung
- Thread-Funktionen sind reguläre Funktionen
- Unterstützt detached Threads

**Weiterführende Links:**
- [Zig Standard Library - Thread](https://ziglang.org/documentation/master/std/#std.Thread)

</TabItem>
</Tabs>


## 14.1.2. Thread Pools

Verwaltung einer Gruppe von wiederverwendbaren Threads zur effizienten Ausführung mehrerer Aufgaben. Thread Pools reduzieren den Overhead durch wiederholtes Erstellen und Zerstören von Threads.

### Sprachen {#sprachen}

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
                System.out.println("Aufgabe " + taskId + " läuft");
            });
        }
        
        pool.shutdown();
        pool.awaitTermination(5, TimeUnit.SECONDS);
    }
}
```

**Besonderheiten:**
- ExecutorService für Thread Pool-Verwaltung
- newFixedThreadPool erstellt Pool mit fester Größe
- pool.shutdown() beendet Pool nach Abschluss aller Aufgaben

**Weiterführende Links:**
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
                Console.WriteLine($"Aufgabe {taskId} läuft");
            });
        }
        
        Task.WaitAll(tasks);
    }
}
```

**Besonderheiten:**
- Task.Run verwendet Thread Pool automatisch
- ThreadPool-Klasse für manuelle Pool-Verwaltung verfügbar
- Task.WaitAll wartet auf alle Aufgaben

**Weiterführende Links:**
- [Microsoft C# Documentation - ThreadPool](https://learn.microsoft.com/en-us/dotnet/api/system.threading.threadpool)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Thread Pools (seit C++11, erweitert in C++17)
// Benötigt: #include <thread>, <vector>, <future>, <iostream>
#include <thread>
#include <vector>
#include <future>
#include <iostream>

void task_function(int task_id) {
    std::cout << "Aufgabe " << task_id << " läuft" << std::endl;
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

**Besonderheiten:**
- std::async kann Thread Pool verwenden (implementation-defined)
- std::launch::async erzwingt asynchrone Ausführung
- Externe Bibliotheken für explizite Thread Pools (z.B. ThreadPool)

**Weiterführende Links:**
- [cppreference.com - std::async](https://en.cppreference.com/w/cpp/thread/async)

</TabItem>
<TabItem value="python" label="Python">

```python
from concurrent.futures import ThreadPoolExecutor

def task_function(task_id):
    print(f"Aufgabe {task_id} läuft")

with ThreadPoolExecutor(max_workers=4) as pool:
    futures = [pool.submit(task_function, i) for i in range(10)]
    for future in futures:
        future.result()
```

**Besonderheiten:**
- concurrent.futures.ThreadPoolExecutor für Thread Pools
- max_workers legt Pool-Größe fest
- Context Manager für automatische Bereinigung

**Weiterführende Links:**
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
                        println!("Aufgabe {} läuft", task_id);
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

**Besonderheiten:**
- Manuelle Thread Pool-Implementierung mit Channels
- Externe Crate rayon für Thread Pools empfohlen
- mpsc::channel für Task-Verteilung

**Weiterführende Links:**
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
                fmt.Printf("Aufgabe %d läuft\n", taskId)
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

**Besonderheiten:**
- Goroutines mit Channels für Thread Pool-ähnliches Verhalten
- sync.WaitGroup für Synchronisation
- Channels für Task-Verteilung

**Weiterführende Links:**
- [Go Documentation - Channels](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.util.concurrent.Executors

fun main() {
    val pool = Executors.newFixedThreadPool(4)
    
    val futures = (0..9).map { taskId ->
        pool.submit {
            println("Aufgabe $taskId läuft")
        }
    }
    
    futures.forEach { it.get() }
    pool.shutdown()
}
```

**Besonderheiten:**
- Verwendet Java ExecutorService (JVM)
- newFixedThreadPool erstellt Pool mit fester Größe
- pool.shutdown() beendet Pool

**Weiterführende Links:**
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
        println(s"Aufgabe $taskId läuft")
      }
    }
    
    futures.foreach(_.value)
  }
}
```

**Besonderheiten:**
- ExecutionContext für Thread Pool-Verwaltung
- Future für asynchrone Ausführung
- Verwendet Java ExecutorService (JVM)

**Weiterführende Links:**
- [Scala Documentation - ExecutionContext](https://www.scala-lang.org/api/current/scala/concurrent/ExecutionContext.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Thread Pools (SWI-Prolog)
% Benötigt: use_module(library(thread_pool))
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
    format('Aufgabe ~w läuft~n', [TaskId]).
```

**Besonderheiten:**
- `thread_pool_create/3` erstellt einen benannten Thread Pool mit maximaler Größe
- `thread_create_in_pool/4` erstellt einen Thread im Pool
- Pool blockiert automatisch bei Überlastung (Backlog)
- Optionale Einstellungen für Stack-Größe und maximalen Backlog

**Weiterführende Links:**
- [SWI-Prolog Documentation - Thread Pool](https://www.swi-prolog.org/pldoc/man?section=threadpool)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Grand Central Dispatch (GCD)
dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
dispatch_async(queue, ^{
    NSLog(@"Hintergrund-Task");
    dispatch_async(dispatch_get_main_queue(), ^{
        NSLog(@"Zurück auf Main Thread");
    });
});

// NSOperationQueue
NSOperationQueue *operationQueue = [[NSOperationQueue alloc] init];
operationQueue.maxConcurrentOperationCount = 4;
[operationQueue addOperationWithBlock:^{
    NSLog(@"Operation im Thread Pool");
}];
```

**Besonderheiten:**
- Grand Central Dispatch (GCD) mit systemverwaltetem Thread Pool
- `NSOperationQueue` als High-Level-Abstraktion
- Automatische Thread-Pool-Verwaltung durch das System
- `dispatch_get_global_queue` für verschiedene Prioritätsstufen

**Weiterführende Links:**
- [Apple Documentation - Grand Central Dispatch](https://developer.apple.com/documentation/dispatch)

</TabItem>
</Tabs>


## 14.1.3. Thread Synchronization

Koordinierung der Ausführung mehrerer Threads, um Race Conditions zu vermeiden und Datenkonsistenz sicherzustellen. Synchronisation umfasst Mechanismen wie Locks, Condition Variables und Barriers.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- synchronized-Blöcke für kritische Abschnitte
- synchronized-Methoden synchronisieren auf this
- wait() und notify() für Condition Variables

**Weiterführende Links:**
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

**Besonderheiten:**
- lock-Statement für kritische Abschnitte
- Monitor.Enter/Exit für manuelle Synchronisation
- Interlocked-Klasse für atomare Operationen

**Weiterführende Links:**
- [Microsoft C# Documentation - lock Statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/lock)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Thread Synchronization (seit C++11)
// Benötigt: #include <mutex>, <thread>
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

**Besonderheiten:**
- std::mutex für Mutual Exclusion
- std::lock_guard für RAII-basierte Lock-Verwaltung
- std::condition_variable für Condition Variables

**Weiterführende Links:**
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

**Besonderheiten:**
- threading.Lock für Mutual Exclusion
- with-Statement für automatische Lock-Freigabe
- threading.Condition für Condition Variables

**Weiterführende Links:**
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

**Besonderheiten:**
- Mutex für Mutual Exclusion
- Arc für Shared Ownership zwischen Threads
- lock() gibt MutexGuard zurück (RAII)

**Weiterführende Links:**
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

**Besonderheiten:**
- sync.Mutex für Mutual Exclusion
- defer für automatische Unlock
- sync.WaitGroup für Thread-Synchronisation

**Weiterführende Links:**
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

**Besonderheiten:**
- ReentrantLock für Mutual Exclusion
- try-finally für sichere Lock-Freigabe
- @Synchronized-Annotation für Methoden

**Weiterführende Links:**
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

**Besonderheiten:**
- pthread_mutex_t für Mutual Exclusion
- Manuelle Lock/Unlock-Operationen
- pthread_cond_t für Condition Variables

**Weiterführende Links:**
- [POSIX Threads Documentation - Mutexes](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/pthread.h.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Thread Synchronization
// Benötigt: import core.thread;
// Benötigt: import std.stdio;

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

**Besonderheiten:**
- `synchronized` Block für gegenseitigen Ausschluss
- `shared` Qualifier für Thread-sichere Variablen
- `synchronized` Klassen für automatische Synchronisierung aller Methoden
- Objekt-basierte Synchronisierung: `synchronized(obj) { ... }`

**Weiterführende Links:**
- [D Language Specification - Synchronized](https://dlang.org/spec/statement.html#synchronized-statement)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Lock für Thread-Synchronisation (seit Julia 1.3)
counter = 0
lock = ReentrantLock()

Threads.@threads for i in 1:1000
    lock(lock) do
        counter += 1
    end
end

# Alternativ: SpinLock für kurze kritische Abschnitte
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

**Besonderheiten:**
- `ReentrantLock` für allgemeine Thread-Synchronisation
- `SpinLock` für kurze kritische Abschnitte
- `lock()` mit `do`-Block für automatisches Unlock

**Weiterführende Links:**
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

**Besonderheiten:**
- `Lock` aus dem `locks`-Modul
- `acquire`/`release` für Lock-Verwaltung
- `withLock` Template für automatisches Lock-Management

**Weiterführende Links:**
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

**Besonderheiten:**
- `TCriticalSection` für Mutual Exclusion
- `TEvent` für Event-basierte Synchronisation
- `Synchronize` für GUI-Thread-Zugriff
- `TMonitor` für objekt-basierte Synchronisation

**Weiterführende Links:**
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

**Besonderheiten:**
- `with_mutex/2` für kritische Abschnitte (automatisches Lock/Unlock)
- Mutexes werden bei erster Verwendung automatisch erstellt
- `mutex_lock/1` und `mutex_unlock/1` für manuelle Kontrolle
- Dynamische Prädikate als geteilter Zustand zwischen Threads

**Weiterführende Links:**
- [SWI-Prolog Documentation - Thread Synchronization](https://www.swi-prolog.org/pldoc/man?section=threadsync)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// @synchronized Block
@synchronized(self) {
    // Nur ein Thread kann diesen Block gleichzeitig ausführen
    self.counter++;
}

// dispatch_barrier für Reader-Writer-Pattern
dispatch_queue_t queue = dispatch_queue_create("com.app.sync", DISPATCH_QUEUE_CONCURRENT);
dispatch_barrier_async(queue, ^{
    // Exklusiver Schreibzugriff
});
```

**Besonderheiten:**
- `@synchronized` als einfachstes Synchronisations-Konstrukt
- GCD Barriers für Reader-Writer-Patterns
- `dispatch_semaphore` für Semaphor-basierte Synchronisation
- Atomic Properties für einfache Thread-Sicherheit

**Weiterführende Links:**
- [Apple Documentation - Synchronization](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/ThreadSafety/ThreadSafety.html)

</TabItem>
</Tabs>


## 14.1.4. Locks / Mutexes

Mechanismen zur gegenseitigen Ausschließung (Mutual Exclusion), die sicherstellen, dass nur ein Thread gleichzeitig auf eine gemeinsame Ressource zugreift. Verhindern Race Conditions durch Serialisierung des Zugriffs auf kritische Abschnitte.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- ReentrantLock für explizite Lock-Verwaltung
- tryLock() für nicht-blockierende Versuche
- Reentrant: derselbe Thread kann mehrfach locken

**Weiterführende Links:**
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

**Besonderheiten:**
- lock-Statement für automatische Lock-Verwaltung
- Monitor.Enter/Exit für manuelle Kontrolle
- Mutex-Klasse für systemweite Locks verfügbar

**Weiterführende Links:**
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

**Besonderheiten:**
- std::mutex für Mutual Exclusion
- std::lock_guard für RAII-basierte Lock-Verwaltung
- std::unique_lock für flexiblere Lock-Verwaltung mit try_lock()

**Weiterführende Links:**
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

**Besonderheiten:**
- threading.Lock für Mutual Exclusion
- with-Statement für automatische Lock-Freigabe
- acquire(blocking=False) für nicht-blockierende Versuche

**Weiterführende Links:**
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

**Besonderheiten:**
- Mutex für Mutual Exclusion
- lock() gibt MutexGuard zurück (RAII)
- Arc für Shared Ownership zwischen Threads

**Weiterführende Links:**
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

**Besonderheiten:**
- sync.Mutex für Mutual Exclusion
- defer für automatische Unlock
- TryLock() für nicht-blockierende Versuche (seit Go 1.18)

**Weiterführende Links:**
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

**Besonderheiten:**
- ReentrantLock für explizite Lock-Verwaltung
- tryLock() für nicht-blockierende Versuche
- Reentrant: derselbe Thread kann mehrfach locken

**Weiterführende Links:**
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

**Besonderheiten:**
- pthread_mutex_t für Mutual Exclusion
- pthread_mutex_trylock() für nicht-blockierende Versuche
- Manuelle Initialisierung und Zerstörung erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- core.sync.mutex.Mutex für Mutual Exclusion
- tryLock() für nicht-blockierende Versuche
- try-finally für sichere Lock-Freigabe

**Weiterführende Links:**
- [D Language Reference - core.sync.mutex](https://dlang.org/phobos/core_sync_mutex.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# ReentrantLock (seit Julia 1.3)
lk = ReentrantLock()

lock(lk)
try
    # Kritischer Abschnitt
finally
    unlock(lk)
end

# Idiomatisch mit do-Block
lock(lk) do
    # Kritischer Abschnitt
end
```

**Besonderheiten:**
- `ReentrantLock` als primärer Mutex-Typ
- `SpinLock` für leichtgewichtige Synchronisation
- `lock(lk) do ... end` Pattern für automatisches Unlock

**Weiterführende Links:**
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
  # Kritischer Abschnitt
  echo "Thread-sicherer Zugriff"

deinitLock(mutex)
```

**Besonderheiten:**
- `Lock` aus dem `locks`-Modul
- `withLock` für RAII-ähnliches Lock-Management
- `initLock`/`deinitLock` für Lebenszyklus-Verwaltung

**Weiterführende Links:**
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
    // Geschützter Bereich
    WriteLn('Arbeite...');
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

**Besonderheiten:**
- `TCriticalSection` für leichtgewichtige Locks (innerhalb eines Prozesses)
- `TMutex` für system-weite Locks (zwischen Prozessen)
- `TMonitor.Enter`/`TMonitor.Exit` als Alternative

**Weiterführende Links:**
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

**Besonderheiten:**
- `with_mutex/2` für automatisches Lock/Unlock (RAII-ähnlich)
- `mutex_lock/1` / `mutex_unlock/1` für manuelle Verwaltung
- `mutex_trylock/1` für nicht-blockierende Versuche
- Mutexes werden bei erster Verwendung automatisch erstellt (Lazy Creation)

**Weiterführende Links:**
- [SWI-Prolog Documentation - Mutexes](https://www.swi-prolog.org/pldoc/man?section=threadsync)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSLock
NSLock *lock = [[NSLock alloc] init];
[lock lock];
// Kritischer Abschnitt
[lock unlock];

// NSRecursiveLock (erlaubt mehrfaches Sperren vom selben Thread)
NSRecursiveLock *recursiveLock = [[NSRecursiveLock alloc] init];
[recursiveLock lock];
[recursiveLock lock]; // OK im selben Thread
[recursiveLock unlock];
[recursiveLock unlock];
```

**Besonderheiten:**
- `NSLock` für einfache Mutex-Locks
- `NSRecursiveLock` für rekursive Locks
- `NSConditionLock` für Bedingungsvariablen
- Auch C-level `pthread_mutex` verfügbar

**Weiterführende Links:**
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

**Besonderheiten:**
- `std.Thread.Mutex` für gegenseitigen Ausschluss
- `defer mutex.unlock()` garantiert Freigabe
- Keine eingebaute Deadlock-Erkennung
- `std.Thread.RwLock` für Read-Write-Locks

**Weiterführende Links:**
- [Zig Standard Library - Mutex](https://ziglang.org/documentation/master/std/#std.Thread.Mutex)

</TabItem>
</Tabs>


## 14.1.5. Semaphores

Synchronisationsprimitive, die den Zugriff auf eine Ressource durch eine begrenzte Anzahl von Threads kontrollieren. Semaphores verwenden einen Zähler, um zu verfolgen, wie viele Threads gleichzeitig auf eine Ressource zugreifen können.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'go', 'java', 'kotlin', 'objective-c', 'python', 'rust']}>
<TabItem value="java" label="Java">

```java
import java.util.concurrent.Semaphore;

public class SemaphoreExample {
    private final Semaphore semaphore = new Semaphore(3);
    
    public void accessResource() throws InterruptedException {
        semaphore.acquire();
        try {
            // Zugriff auf Ressource
            System.out.println("Ressource wird verwendet");
            Thread.sleep(1000);
        } finally {
            semaphore.release();
        }
    }
    
    public boolean tryAccessResource() {
        if (semaphore.tryAcquire()) {
            try {
                // Zugriff auf Ressource
                return true;
            } finally {
                semaphore.release();
            }
        }
        return false;
    }
}
```

**Besonderheiten:**
- Semaphore-Klasse für Semaphore-Implementierung
- acquire() blockiert, bis Permit verfügbar ist
- tryAcquire() für nicht-blockierende Versuche

**Weiterführende Links:**
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
            // Zugriff auf Ressource
            Console.WriteLine("Ressource wird verwendet");
            Thread.Sleep(1000);
        } finally {
            semaphore.Release();
        }
    }
    
    public bool TryAccessResource() {
        if (semaphore.WaitOne(0)) {
            try {
                // Zugriff auf Ressource
                return true;
            } finally {
                semaphore.Release();
            }
        }
        return false;
    }
}
```

**Besonderheiten:**
- Semaphore-Klasse für Semaphore-Implementierung
- WaitOne() blockiert, bis Permit verfügbar ist
- WaitOne(0) für nicht-blockierende Versuche

**Weiterführende Links:**
- [Microsoft C# Documentation - Semaphore](https://learn.microsoft.com/en-us/dotnet/api/system.threading.semaphore)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Semaphores (seit C++20)
// Benötigt: #include <semaphore>
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
            // Zugriff auf Ressource
            std::cout << "Ressource wird verwendet" << std::endl;
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
                // Zugriff auf Ressource
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

**Besonderheiten:**
- std::counting_semaphore seit C++20
- acquire() blockiert, bis Permit verfügbar ist
- try_acquire() für nicht-blockierende Versuche

**Weiterführende Links:**
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
            # Zugriff auf Ressource
            print("Ressource wird verwendet")
            threading.Event().wait(1)
        finally:
            self.semaphore.release()
    
    def try_access_resource(self):
        if self.semaphore.acquire(blocking=False):
            try:
                # Zugriff auf Ressource
                return True
            finally:
                self.semaphore.release()
        return False
```

**Besonderheiten:**
- threading.Semaphore für Semaphore-Implementierung
- acquire() blockiert, bis Permit verfügbar ist
- acquire(blocking=False) für nicht-blockierende Versuche

**Weiterführende Links:**
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
            println!("Ressource wird verwendet von Thread {}", i);
            thread::sleep(std::time::Duration::from_secs(1));
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
}
```

**Besonderheiten:**
- Semaphore-Klasse für Semaphore-Implementierung
- acquire() gibt Permit zurück (RAII)
- Externe Crate tokio für asynchrone Semaphores

**Weiterführende Links:**
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
    
    fmt.Println("Ressource wird verwendet")
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

**Besonderheiten:**
- Channels als Semaphore-Implementierung
- Buffered Channel mit Kapazität als Semaphore-Zähler
- Senden = acquire, Empfangen = release

**Weiterführende Links:**
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
            // Zugriff auf Ressource
            println("Ressource wird verwendet")
            Thread.sleep(1000)
        } finally {
            semaphore.release()
        }
    }
    
    fun tryAccessResource(): Boolean {
        if (semaphore.tryAcquire()) {
            try {
                // Zugriff auf Ressource
                return true
            } finally {
                semaphore.release()
            }
        }
        return false
    }
}
```

**Besonderheiten:**
- Semaphore-Klasse für Semaphore-Implementierung
- acquire() blockiert, bis Permit verfügbar ist
- tryAcquire() für nicht-blockierende Versuche

**Weiterführende Links:**
- [Oracle Java Documentation - Semaphore](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/Semaphore.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Benötigt: #include <semaphore.h>, <pthread.h>
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
    // Zugriff auf Ressource
    printf("Ressource wird verwendet\n");
    sleep(1);
    sem_post(&se->semaphore);
}

int tryAccessResource(SemaphoreExample* se) {
    if (sem_trywait(&se->semaphore) == 0) {
        // Zugriff auf Ressource
        sem_post(&se->semaphore);
        return 1;
    }
    return 0;
}
```

**Besonderheiten:**
- sem_t für Semaphore-Implementierung
- sem_wait() blockiert, bis Permit verfügbar ist
- sem_trywait() für nicht-blockierende Versuche

**Weiterführende Links:**
- [POSIX Semaphores Documentation](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/semaphore.h.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Semaphores
// Benötigt: import core.sync.semaphore;
// Benötigt: import core.thread;
// Benötigt: import std.stdio;

auto sem = new Semaphore(3);  // Maximal 3 gleichzeitige Zugriffe

void worker(int id) {
    sem.wait();
    scope(exit) sem.notify();
    writeln("Worker ", id, " arbeitet");
    Thread.sleep(dur!"msecs"(100));
}

// Starte mehrere Threads
foreach (i; 0 .. 10) {
    new Thread({ worker(i); }).start();
}
```

**Besonderheiten:**
- `core.sync.semaphore.Semaphore` für Semaphore-basierte Synchronisation
- `wait()` dekrementiert, `notify()` inkrementiert den Zähler
- `tryWait()` für nicht-blockierendes Warten
- Oft mit `scope(exit)` kombiniert für automatisches `notify()`

**Weiterführende Links:**
- [D Phobos - core.sync.semaphore](https://dlang.org/phobos/core_sync_semaphore.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// dispatch_semaphore
dispatch_semaphore_t semaphore = dispatch_semaphore_create(3); // Max 3 gleichzeitige Zugriffe

dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER); // Wartet auf Zugriff
// Kritischer Abschnitt
dispatch_semaphore_signal(semaphore); // Gibt Zugriff frei
```

**Besonderheiten:**
- `dispatch_semaphore` aus Grand Central Dispatch
- Zähler-basierte Synchronisation
- Auch für Synchronisation von asynchronen Callbacks verwendet

**Weiterführende Links:**
- [Apple Documentation - dispatch_semaphore](https://developer.apple.com/documentation/dispatch/dispatch_semaphore)

</TabItem>
</Tabs>


## 14.1.6. Atomic Operations

Unterbrechungsfreie Operationen, die ohne zusätzliche Synchronisationsmechanismen thread-sicher sind. Atomare Operationen werden auf Hardware-Ebene garantiert und sind effizienter als Locks für einfache Operationen.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- java.util.concurrent.atomic für atomare Operationen
- AtomicInteger, AtomicLong, AtomicReference verfügbar
- compareAndSet() für Compare-And-Swap-Operationen

**Weiterführende Links:**
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

**Besonderheiten:**
- Interlocked-Klasse für atomare Operationen
- Increment, Decrement, Add, Exchange verfügbar
- CompareExchange für Compare-And-Swap-Operationen

**Weiterführende Links:**
- [Microsoft C# Documentation - Interlocked](https://learn.microsoft.com/en-us/dotnet/api/system.threading.interlocked)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Atomic Operations (seit C++11)
// Benötigt: #include <atomic>
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

**Besonderheiten:**
- std::atomic für atomare Operationen
- load(), store(), fetch_add() verfügbar
- compare_exchange_strong() für Compare-And-Swap-Operationen

**Weiterführende Links:**
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

**Besonderheiten:**
- Python hat keine nativen atomaren Operationen
- Lock-basierte Implementierung erforderlich
- C-Extensions können atomare Operationen verwenden

**Weiterführende Links:**
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

**Besonderheiten:**
- std::sync::atomic für atomare Operationen
- Ordering für Memory-Ordering-Semantik
- fetch_add(), load(), compare_exchange() verfügbar

**Weiterführende Links:**
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

**Besonderheiten:**
- sync/atomic für atomare Operationen
- AddInt32, LoadInt32, CompareAndSwapInt32 verfügbar
- Verschiedene Typen: Int32, Int64, Uint32, Uint64, Pointer

**Weiterführende Links:**
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

**Besonderheiten:**
- java.util.concurrent.atomic für atomare Operationen
- AtomicInteger, AtomicLong, AtomicReference verfügbar
- compareAndSet() für Compare-And-Swap-Operationen

**Weiterführende Links:**
- [Oracle Java Documentation - AtomicInteger](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Benötigt: #include <stdatomic.h> (seit C11)
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

**Besonderheiten:**
- stdatomic.h für atomare Operationen (seit C11)
- atomic_fetch_add(), atomic_load() verfügbar
- atomic_compare_exchange_strong() für Compare-And-Swap-Operationen

**Weiterführende Links:**
- [C11 Standard - stdatomic.h](https://en.cppreference.com/w/c/atomic)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Atoms für atomare Zustandsänderungen
(def counter (atom 0))

;; Atomares Update mit swap!
(swap! counter inc)       ; 1
(swap! counter + 10)      ; 11

;; Atomares Setzen mit reset!
(reset! counter 0)        ; 0

;; Lesen mit deref oder @
(println @counter)        ; 0

;; compare-and-set!
(compare-and-set! counter 0 42)  ; true (nur wenn aktueller Wert 0 ist)
```

**Besonderheiten:**
- `atom` für unkoordinierte, synchrone Zustandsänderungen
- Lock-frei über Compare-and-Swap (CAS)
- `swap!` für funktionale Updates (retry bei Konflikten)
- `reset!` für direktes Setzen
- Thread-safe ohne explizite Locks

**Weiterführende Links:**
- [Clojure Documentation - Atoms](https://clojure.org/reference/atoms)

</TabItem>
<TabItem value="d" label="D">

```d
// Atomic Operations
// Benötigt: import core.atomic;
// Benötigt: import core.thread;
// Benötigt: import std.stdio;

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

**Besonderheiten:**
- `core.atomic` für lock-freie atomare Operationen
- `atomicOp` für atomare Rechenoperationen
- `atomicLoad` / `atomicStore` für atomares Lesen/Schreiben
- `cas` (Compare-And-Swap) für komplexere atomare Operationen

**Weiterführende Links:**
- [D Phobos - core.atomic](https://dlang.org/phobos/core_atomic.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Atomic Operations (seit Julia 1.3)
counter = Threads.Atomic{Int}(0)

Threads.@threads for i in 1:1000
    Threads.atomic_add!(counter, 1)
end

println(counter[])  # 1000
```

**Besonderheiten:**
- `Threads.Atomic{T}` für atomare Variablen
- `atomic_add!`, `atomic_sub!`, `atomic_cas!` etc.
- Thread-sichere Operationen ohne Locks

**Weiterführende Links:**
- [Julia Documentation - Atomic Operations](https://docs.julialang.org/en/v1/base/multi-threading/#Atomic-operations)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Atomic Properties (Standard)
@property (atomic, strong) NSString *name; // Thread-sicher für Getter/Setter

// Nonatomic Properties (explizit nicht-atomar)
@property (nonatomic, strong) NSString *fastName; // Nicht Thread-sicher, aber schneller
```

**Besonderheiten:**
- Properties sind standardmäßig `atomic` (Thread-sichere Getter/Setter)
- `nonatomic` für Performance bei nicht-geteilten Properties
- `atomic` garantiert nur einzelne Property-Zugriffe, keine zusammengesetzten Operationen
- `os_atomic_*` Funktionen für Low-Level-Atomics

**Weiterführende Links:**
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

**Besonderheiten:**
- `std.atomic.Value(T)` für atomare Operationen
- Unterstützt verschiedene Memory-Orderings (`.seq_cst`, `.acquire`, `.release`, etc.)
- `fetchAdd`, `fetchSub`, `store`, `load` für atomare Operationen
- `@cmpxchgStrong` und `@cmpxchgWeak` als Builtins

**Weiterführende Links:**
- [Zig Standard Library - Atomic](https://ziglang.org/documentation/master/std/#std.atomic)

</TabItem>
</Tabs>

