---
slug: /concurrency/async-await
title: 14.2. Async/Await
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 14.2. Async/Await

Asynchronous programming with async/await.

## 14.2.1. Async Functions

Functions that can be executed asynchronously and return a Promise or Future. Async Functions enable non-blocking execution and are typically used with await.

### Languages {#languages}

<Tabs availableTabs={['csharp', 'dart', 'javascript', 'julia', 'kotlin', 'nim', 'python', 'rust', 'swift', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Async Functions (since ES2017)
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

async function processData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

**Special features:**
- async keyword marks asynchronous functions
- Automatically returns a Promise
- Can use await inside

**Further reading:**
- [MDN Web Docs - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Async Functions (since ES2017)
async function fetchData(): Promise<Data> {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

async function processData(): Promise<void> {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

**Special features:**
- async keyword marks asynchronous functions
- Automatically returns a Promise
- Can use await inside
- Explicit return types possible

**Further reading:**
- [TypeScript Handbook - Async Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#async-functions)

</TabItem>
<TabItem value="python" label="Python">

```python
# Async Functions (since Python 3.5)
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return {"data": "example"}

async def process_data():
    try:
        data = await fetch_data()
        print(data)
    except Exception as error:
        print(f"Error: {error}")
```

**Special features:**
- async def for asynchronous functions
- Returns a Coroutine object
- Must be called with await or with asyncio.run()

**Further reading:**
- [Python Documentation - Coroutines](https://docs.python.org/3/library/asyncio-task.html#coroutines)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Async Functions (since C# 5.0)
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program {
    static async Task<string> FetchDataAsync() {
        using var client = new HttpClient();
        var response = await client.GetAsync("https://api.example.com/data");
        return await response.Content.ReadAsStringAsync();
    }
    
    static async Task ProcessDataAsync() {
        try {
            var data = await FetchDataAsync();
            Console.WriteLine(data);
        } catch (Exception error) {
            Console.WriteLine($"Error: {error}");
        }
    }
}
```

**Special features:**
- async modifier for asynchronous methods
- Returns Task or `Task<T>`
- async void only for Event Handlers

**Further reading:**
- [Microsoft C# Documentation - async](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/async)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Async Functions (since Rust 1.39)
// Requires: tokio = { version = "1", features = ["full"] }
use tokio::time::{sleep, Duration};

async fn fetch_data() -> String {
    sleep(Duration::from_secs(1)).await;
    "data".to_string()
}

async fn process_data() {
    let data = fetch_data().await;
    println!("{}", data);
}

#[tokio::main]
async fn main() {
    process_data().await;
}
```

**Special features:**
- `async fn` for asynchronous functions
- Returns an `impl Future<Output = T>`
- Requires runtime (e.g. tokio, async-std) for execution
- No colored function distinction (async is not viral as in some other languages)

**Further reading:**
- [Rust Reference - Async Functions](https://doc.rust-lang.org/reference/items/functions.html#async-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Async Functions (Coroutines, since Kotlin 1.1)
import kotlinx.coroutines.*

suspend fun fetchData(): String {
    delay(1000)
    return "data"
}

suspend fun processData() {
    try {
        val data = fetchData()
        println(data)
    } catch (error: Exception) {
        println("Error: $error")
    }
}

fun main() = runBlocking {
    processData()
}
```

**Special features:**
- suspend functions for asynchronous operations
- Part of the Coroutines system
- Can be used within Coroutine scopes

**Further reading:**
- [Kotlin Documentation - Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Async Functions (since Swift 5.5)
func fetchData() async throws -> String {
    let url = URL(string: "https://api.example.com/data")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return String(data: data, encoding: .utf8) ?? ""
}

func processData() async {
    do {
        let data = try await fetchData()
        print(data)
    } catch {
        print("Error: \(error)")
    }
}
```

**Special features:**
- async keyword for asynchronous functions
- throws for error handling
- Can use await inside

**Further reading:**
- [Swift Documentation - Concurrency](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Async Functions
Future<String> fetchData() async {
    await Future.delayed(Duration(seconds: 1));
    return 'data';
}

Future<void> processData() async {
    try {
        var data = await fetchData();
        print(data);
    } catch (error) {
        print('Error: $error');
    }
}
```

**Special features:**
- async keyword for asynchronous functions
- Returns Future or `Future<T>`
- Can use await inside

**Further reading:**
- [Dart Documentation - Async Functions](https://dart.dev/guides/language/language-tour#asynchrony-support)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Asynchronous Tasks
t1 = @async begin
    sleep(1)
    "Result 1"
end

t2 = @async begin
    sleep(1)
    "Result 2"
end

# Wait for results
result1 = fetch(t1)
result2 = fetch(t2)

# @sync waits for all inner @async Tasks
@sync begin
    @async download("url1")
    @async download("url2")
end
```

**Special features:**
- `@async` starts an asynchronous Task
- `fetch()` waits for and returns the result
- `@sync` waits for all inner `@async` Tasks
- Tasks are cooperative – context switching on I/O operations

**Further reading:**
- [Julia Documentation - Asynchronous Programming](https://docs.julialang.org/en/v1/manual/asynchronous-programming/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: import asyncdispatch
proc fetchData(url: string): Future[string] {.async.} =
  # Asynchronous operation
  await sleepAsync(100)
  return "Data from " & url

proc main() {.async.} =
  let data = await fetchData("https://example.com")
  echo data

waitFor main()
```

**Special features:**
- `{.async.}` pragma marks asynchronous procedures
- `Future[T]` as return type for asynchronous operations
- `await` to wait for asynchronous results
- `waitFor` to start the Event Loop

**Further reading:**
- [Nim Documentation - Asyncdispatch](https://nim-lang.org/docs/asyncdispatch.html)

</TabItem>
</Tabs>


## 14.2.2. Await Keywords

Keyword that pauses the execution of an asynchronous function until the Promise or Future is fulfilled. Enables synchronous syntax for asynchronous operations.

### Languages {#languages}

<Tabs availableTabs={['csharp', 'dart', 'javascript', 'kotlin', 'nim', 'python', 'rust', 'swift', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// await (since ES2017)
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

async function processMultiple() {
    const [data1, data2] = await Promise.all([
        fetchData(),
        fetchData()
    ]);
    return { data1, data2 };
}
```

**Special features:**
- await can only be used in async functions
- Pauses execution until Promise is fulfilled
- Can be combined with Promise.all() for parallel execution

**Further reading:**
- [MDN Web Docs - await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// await (since ES2017)
async function fetchData(): Promise<Data> {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

async function processMultiple(): Promise<{data1: Data, data2: Data}> {
    const [data1, data2] = await Promise.all([
        fetchData(),
        fetchData()
    ]);
    return { data1, data2 };
}
```

**Special features:**
- await can only be used in async functions
- Pauses execution until Promise is fulfilled
- Can be combined with Promise.all() for parallel execution
- TypeScript provides type support for await expressions

**Further reading:**
- [TypeScript Handbook - await](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#async-await)

</TabItem>
<TabItem value="python" label="Python">

```python
# await (since Python 3.5)
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return {"data": "example"}

async def process_multiple():
    data1, data2 = await asyncio.gather(
        fetch_data(),
        fetch_data()
    )
    return {"data1": data1, "data2": data2}
```

**Special features:**
- await can only be used in async def functions
- Pauses execution until Coroutine is fulfilled
- Can be combined with asyncio.gather() for parallel execution

**Further reading:**
- [Python Documentation - await](https://docs.python.org/3/reference/expressions.html#await)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// await (since C# 5.0)
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program {
    static async Task<string> FetchDataAsync() {
        using var client = new HttpClient();
        var response = await client.GetAsync("https://api.example.com/data");
        return await response.Content.ReadAsStringAsync();
    }
    
    static async Task ProcessMultipleAsync() {
        var task1 = FetchDataAsync();
        var task2 = FetchDataAsync();
        var (data1, data2) = (await task1, await task2);
        return (data1, data2);
    }
}
```

**Special features:**
- await can only be used in async methods
- Pauses execution until Task is fulfilled
- ConfigureAwait(false) available for performance optimization

**Further reading:**
- [Microsoft C# Documentation - await](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/await)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// await (since Rust 1.39)
use tokio::time::{sleep, Duration};

async fn fetch_data() -> String {
    sleep(Duration::from_secs(1)).await;
    "data".to_string()
}

async fn process_multiple() {
    let data1 = fetch_data().await;
    let data2 = fetch_data().await;
    println!("{} {}", data1, data2);
}

#[tokio::main]
async fn main() {
    process_multiple().await;
}
```

**Special features:**
- `.await` postfix syntax for asynchronous operations
- Pauses execution until Future is fulfilled
- Can be combined with `tokio::join!()` for parallel execution

**Further reading:**
- [Rust Reference - Await Expressions](https://doc.rust-lang.org/reference/expressions/await-expr.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// await (Coroutines)
import kotlinx.coroutines.*

suspend fun fetchData(): String {
    delay(1000)
    return "data"
}

suspend fun processMultiple() {
    val data1 = async { fetchData() }
    val data2 = async { fetchData() }
    val (result1, result2) = awaitAll(data1, data2)
    println("$result1 $result2")
}

fun main() = runBlocking {
    processMultiple()
}
```

**Special features:**
- awaitAll() for parallel execution
- suspend functions can use await
- Part of the Coroutines system

**Further reading:**
- [Kotlin Documentation - Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// await (since Swift 5.5)
func fetchData() async throws -> String {
    let url = URL(string: "https://api.example.com/data")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return String(data: data, encoding: .utf8) ?? ""
}

func processMultiple() async throws {
    async let data1 = fetchData()
    async let data2 = fetchData()
    let (result1, result2) = try await (data1, data2)
    print("\(result1) \(result2)")
}
```

**Special features:**
- await can only be used in async functions
- async let for parallel execution
- Pauses execution until Task is fulfilled

**Further reading:**
- [Swift Documentation - await](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// await
Future<String> fetchData() async {
    await Future.delayed(Duration(seconds: 1));
    return 'data';
}

Future<void> processMultiple() async {
    final data1 = fetchData();
    final data2 = fetchData();
    final results = await Future.wait([data1, data2]);
    print('${results[0]} ${results[1]}');
}
```

**Special features:**
- await can only be used in async functions
- Pauses execution until Future is fulfilled
- Future.wait() for parallel execution

**Further reading:**
- [Dart Documentation - await](https://dart.dev/guides/language/language-tour#asynchrony-support)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: import asyncdispatch
proc step1(): Future[int] {.async.} =
  await sleepAsync(100)
  return 10

proc step2(x: int): Future[int] {.async.} =
  await sleepAsync(100)
  return x * 2

proc pipeline() {.async.} =
  let a = await step1()
  let b = await step2(a)
  echo b  # 20

waitFor pipeline()
```

**Special features:**
- `await` can only be used in `{.async.}` procedures
- Pauses execution until the Future is completed
- Multiple `await` expressions possible

**Further reading:**
- [Nim Documentation - Async/Await](https://nim-lang.org/docs/asyncdispatch.html)

</TabItem>
</Tabs>


## 14.2.3. Promises / Futures

Objects that represent a value or exception that will be available at a later time. Promises/Futures enable asynchronous programming without explicit callbacks.

### Languages {#languages}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'java', 'javascript', 'kotlin', 'lean4', 'nim', 'python', 'rust', 'scala', 'typescript']} yellowTabs={['lean4']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Promises (since ES2015)
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "example" });
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Promise.all for parallel execution
Promise.all([fetchData(), fetchData()])
    .then(results => console.log(results));
```

**Special features:**
- Promise constructor for Promise creation
- then() for success handling
- catch() for error handling
- Promise.all() for parallel execution

**Further reading:**
- [MDN Web Docs - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Promises (since ES2015)
function fetchData(): Promise<Data> {
    return new Promise<Data>((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "example" });
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Promise.all for parallel execution
Promise.all([fetchData(), fetchData()])
    .then(results => console.log(results));
```

**Special features:**
- Promise constructor for Promise creation
- then() for success handling
- catch() for error handling
- Promise.all() for parallel execution
- TypeScript provides type support for Promises

**Further reading:**
- [MDN Web Docs - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

</TabItem>
<TabItem value="python" label="Python">

```python
# Futures (since Python 3.2)
from concurrent.futures import Future, ThreadPoolExecutor
import time

def fetch_data():
    time.sleep(1)
    return {"data": "example"}

with ThreadPoolExecutor() as executor:
    future = executor.submit(fetch_data)
    result = future.result()
    print(result)

# asyncio.Future for asynchronous operations
import asyncio

async def async_fetch_data():
    await asyncio.sleep(1)
    return {"data": "example"}

future = asyncio.create_task(async_fetch_data())
result = await future
```

**Special features:**
- concurrent.futures.Future for thread-based Futures
- asyncio.Future for asynchronous Futures
- result() blocks until result is available
- add_done_callback() for callback-based handling

**Further reading:**
- [Python Documentation - concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Tasks (Futures, since .NET 4.0)
using System;
using System.Threading.Tasks;

class Program {
    static Task<string> FetchDataAsync() {
        return Task.Run(() => {
            System.Threading.Thread.Sleep(1000);
            return "data";
        });
    }
    
    static void Main() {
        var task = FetchDataAsync();
        task.ContinueWith(t => {
            Console.WriteLine(t.Result);
        });
        
        // Wait for result
        var result = task.Result;
        
        // Parallel execution
        var tasks = new[] { FetchDataAsync(), FetchDataAsync() };
        Task.WaitAll(tasks);
    }
}
```

**Special features:**
- `Task<T>` for Future implementation
- `ContinueWith()` for callback-based handling
- Result property blocks until result is available
- `Task.WaitAll()` for parallel execution

**Further reading:**
- [Microsoft C# Documentation - Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Futures (since Rust 1.39)
use std::future::Future;
use tokio::time::{sleep, Duration};

fn fetch_data() -> impl Future<Output = String> {
    async {
        sleep(Duration::from_secs(1)).await;
        "data".to_string()
    }
}

#[tokio::main]
async fn main() {
    let future = fetch_data();
    let result = future.await;
    println!("{}", result);
    
    // Parallel execution
    let futures = vec![fetch_data(), fetch_data()];
    futures::future::join_all(futures).await;
}
```

**Special features:**
- impl Future for Future types
- await for execution
- futures::future::join_all() for parallel execution
- Requires runtime (e.g. tokio) for execution

**Further reading:**
- [Rust Documentation - std::future](https://doc.rust-lang.org/std/future/index.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// CompletableFuture (since Java 8)
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class FutureExample {
    public static CompletableFuture<String> fetchData() {
        return CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            return "data";
        });
    }
    
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        CompletableFuture<String> future = fetchData();
        future.thenAccept(data -> System.out.println(data));
        
        String result = future.get();
        
        // Parallel execution
        CompletableFuture<String> f1 = fetchData();
        CompletableFuture<String> f2 = fetchData();
        CompletableFuture.allOf(f1, f2).join();
    }
}
```

**Special features:**
- CompletableFuture for Future implementation
- thenAccept() for callback-based handling
- get() blocks until result is available
- allOf() for parallel execution

**Further reading:**
- [Oracle Java Documentation - CompletableFuture](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/CompletableFuture.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Deferred (Futures in Coroutines)
import kotlinx.coroutines.*

fun main() = runBlocking {
    val deferred = async {
        delay(1000)
        "data"
    }
    
    deferred.await()
    
    // Parallel execution
    val deferred1 = async { fetchData() }
    val deferred2 = async { fetchData() }
    awaitAll(deferred1, deferred2)
}
```

**Special features:**
- Deferred for Future implementation in Coroutines
- await() for result
- async {} for Deferred creation
- awaitAll() for parallel execution

**Further reading:**
- [Kotlin Documentation - Deferred](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Futures
Future<String> fetchData() {
    return Future.delayed(Duration(seconds: 1), () => 'data');
}

void main() {
    fetchData()
        .then((data) => print(data))
        .catchError((error) => print(error));
    
    // Wait for result
    var result = await fetchData();
    
    // Parallel execution
    Future.wait([fetchData(), fetchData()])
        .then((results) => print(results));
}
```

**Special features:**
- Future for Future implementation
- then() for success handling
- catchError() for error handling
- Future.wait() for parallel execution

**Further reading:**
- [Dart Documentation - Future](https://api.dart.dev/stable/dart-async/Future-class.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Future: Asynchronous computation
(def result (future
  (Thread/sleep 1000)
  (+ 1 2)))

;; Retrieve value (blocks until done)
@result  ; 3

;; Promise: Manually redeemable value
(def p (promise))

;; Redeem in another thread
(future (deliver p 42))

;; Retrieve value (blocks until redeemed)
@p  ; 42

;; Timeout on deref
(deref (future (Thread/sleep 5000) 42) 1000 :timeout)  ; :timeout after 1s
```

**Special features:**
- `future` starts asynchronous computation in thread pool
- `promise`/`deliver` for one-time value transfer
- `deref` / `@` for retrieval (blocking)
- Timeout option with `deref`
- `realized?` checks if value is available

**Further reading:**
- [Clojure Documentation - Agents and Futures](https://clojure.org/reference/agents)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Task as Future equivalent
def computeAsync : IO (Task (Except IO.Error Nat)) := do
  IO.asTask do
    IO.sleep 100
    pure 42

def main : IO Unit := do
  let task ← computeAsync
  let result ← IO.ofExcept (← task.get)
  IO.println s!"Result: {result}"
```

**Special features:**
- `Task α` represents an asynchronously running computation.
- `IO.asTask` starts an IO computation in a new thread and returns a `Task` object.
- `Task.get` waits blocking for the result.
- No `async/await` pattern – instead `Task` and `IO` monad are combined.

**Further reading:**
- [Lean 4 Documentation - IO](https://lean-lang.org/lean4/doc/io.html)
- [Lean 4 Documentation - Task](https://leanprover-community.github.io/mathlib4_docs/Init/System/IO.html#IO.asTask)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: import asyncdispatch
proc computeAsync(): Future[int] {.async.} =
  await sleepAsync(100)
  return 42

proc main() {.async.} =
  let future = computeAsync()
  # Other work...
  let result = await future
  echo result  # 42

waitFor main()
```

**Special features:**
- `Future[T]` represents an asynchronous result
- Automatically generated by `{.async.}` procedures
- `newFuture[T]()` for manual creation of Futures
- `complete()` and `fail()` to set the result

**Further reading:**
- [Nim Documentation - Asyncfutures](https://nim-lang.org/docs/asyncfutures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.concurrent.{Future, Promise, Await}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration._

// Future: Asynchronous computation
val future: Future[Int] = Future
{
    Thread.sleep(1000)
    42
}

// Callbacks
future.onComplete
{
    case scala.util.Success(value) => println(s"Result: $value")
    case scala.util.Failure(exception) => println(s"Error: $exception")
}

// Promise: Manually fulfillable
val promise = Promise[String]()
val promisedFuture: Future[String] = promise.future

Future
{
    Thread.sleep(500)
    promise.success("Result from Promise")
}

val result = Await.result(promisedFuture, 2.seconds)
```

**Special features:**
- `Future[T]` represents an asynchronous computation
- `Promise[T]` is a writable container that fulfills a `Future`
- Requires an `ExecutionContext` (Thread Pool)
- Supports `map`, `flatMap`, `filter` for functional composition
- Since Scala 2.10 in the standard library

**Further reading:**
- [Scala Documentation - Futures and Promises](https://docs.scala-lang.org/overviews/core/futures.html)

</TabItem>

</Tabs>


## 14.2.4. Async Iterators

Iterators that asynchronously iterate over a sequence of values. Enable processing of data streams that are loaded asynchronously with a synchronous for-await-of syntax.

### Languages {#languages}

<Tabs availableTabs={['javascript', 'typescript', 'python', 'csharp', 'rust', 'kotlin', 'dart']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Async Iterators (since ES2018)
async function* asyncGenerator() {
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        yield i;
    }
}

async function processAsync() {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
}
```

**Special features:**
- async function* for Async Generators
- yield for value output
- for await...of for iteration over Async Iterables

**Further reading:**
- [MDN Web Docs - Async Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Async Iterators (since ES2018)
async function* asyncGenerator(): AsyncGenerator<number> {
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        yield i;
    }
}

async function processAsync(): Promise<void> {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
}
```

**Special features:**
- async function* for Async Generators
- yield for value output
- for await...of for iteration over Async Iterables
- TypeScript provides type support for Async Iterators

**Further reading:**
- [TypeScript Handbook - Async Iterators](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-iteration)

</TabItem>
<TabItem value="python" label="Python">

```python
# Async Iterators (since Python 3.6)
import asyncio

async def async_generator():
    for i in range(5):
        await asyncio.sleep(0.1)
        yield i

async def process_async():
    async for value in async_generator():
        print(value)
```

**Special features:**
- async def with yield for Async Generators
- async for for iteration over Async Iterables
- __aiter__() and __anext__() for manual implementation

**Further reading:**
- [Python Documentation - Async Iterators](https://docs.python.org/3/reference/datamodel.html#asynchronous-iterators)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Async Iterators (since C# 8.0)
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class Program {
    static async IAsyncEnumerable<int> AsyncGenerator() {
        for (int i = 0; i < 5; i++) {
            await Task.Delay(100);
            yield return i;
        }
    }
    
    static async Task ProcessAsync() {
        await foreach (var value in AsyncGenerator()) {
            Console.WriteLine(value);
        }
    }
}
```

**Special features:**
- `IAsyncEnumerable<T>` for Async Iterables
- `yield return` in async methods
- `await foreach` for iteration

**Further reading:**
- [Microsoft C# Documentation - Async Streams](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8#async-streams)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Async Iterators (Streams)
// Requires: futures = "0.3", tokio = { version = "1", features = ["full"] }
use futures::stream::{self, Stream, StreamExt};
use tokio::time::{sleep, Duration};

fn async_generator() -> impl Stream<Item = i32> {
    stream::unfold(0, |state| async move {
        if state < 5 {
            sleep(Duration::from_millis(100)).await;
            Some((state, state + 1))
        } else {
            None
        }
    })
}

#[tokio::main]
async fn main() {
    let mut stream = Box::pin(async_generator());
    while let Some(value) = stream.next().await {
        println!("{}", value);
    }
}
```

**Special features:**
- `Stream` trait for asynchronous Iterables (from `futures` crate)
- `.next().await` for asynchronous iteration
- External crate `futures` for Stream implementation
- Streams must be pinned (`Box::pin` or `pin!`)

**Further reading:**
- [Rust Documentation - Streams](https://docs.rs/futures/latest/futures/stream/index.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Async Iterators (Flow, since Kotlin 1.3)
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun asyncGenerator(): Flow<Int> = flow {
    for (i in 0..4) {
        delay(100)
        emit(i)
    }
}

suspend fun processAsync() {
    asyncGenerator().collect { value ->
        println(value)
    }
}
```

**Special features:**
- Flow for Async Iterables in Coroutines
- emit() for value output
- collect() for iteration

**Further reading:**
- [Kotlin Documentation - Flow](https://kotlinlang.org/docs/flow.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Async Iterators (Streams)
Stream<int> asyncGenerator() async* {
    for (int i = 0; i < 5; i++) {
        await Future.delayed(Duration(milliseconds: 100));
        yield i;
    }
}

Future<void> processAsync() async {
    await for (var value in asyncGenerator()) {
        print(value);
    }
}
```

**Special features:**
- async* for Async Generators
- yield for value output
- await for for iteration over Streams

**Further reading:**
- [Dart Documentation - Streams](https://dart.dev/guides/language/language-tour#generators)

</TabItem>
</Tabs>

