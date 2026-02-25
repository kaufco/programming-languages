---
slug: /concurrency/async-await
title: 14.2. Async/Await
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 14.2. Async/Await

Asynchrone Programmierung mit async/await.

## 14.2.1. Async Functions

Funktionen, die asynchron ausgeführt werden können und ein Promise oder Future zurückgeben. Async Functions ermöglichen nicht-blockierende Ausführung und werden typischerweise mit await verwendet.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'javascript', 'julia', 'kotlin', 'nim', 'python', 'rust', 'swift', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Async Functions (seit ES2017)
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
        console.error('Fehler:', error);
    }
}
```

**Besonderheiten:**
- async-Schlüsselwort markiert asynchrone Funktionen
- Gibt automatisch ein Promise zurück
- Kann await innerhalb verwenden

**Weiterführende Links:**
- [MDN Web Docs - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Async Functions (seit ES2017)
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
        console.error('Fehler:', error);
    }
}
```

**Besonderheiten:**
- async-Schlüsselwort markiert asynchrone Funktionen
- Gibt automatisch ein Promise zurück
- Kann await innerhalb verwenden
- Explizite Return-Typen möglich

**Weiterführende Links:**
- [TypeScript Handbook - Async Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#async-functions)

</TabItem>
<TabItem value="python" label="Python">

```python
# Async Functions (seit Python 3.5)
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return {"data": "example"}

async def process_data():
    try:
        data = await fetch_data()
        print(data)
    except Exception as error:
        print(f"Fehler: {error}")
```

**Besonderheiten:**
- async def für asynchrone Funktionen
- Gibt ein Coroutine-Objekt zurück
- Muss mit await aufgerufen werden oder mit asyncio.run()

**Weiterführende Links:**
- [Python Documentation - Coroutines](https://docs.python.org/3/library/asyncio-task.html#coroutines)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Async Functions (seit C# 5.0)
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
            Console.WriteLine($"Fehler: {error}");
        }
    }
}
```

**Besonderheiten:**
- async-Modifier für asynchrone Methoden
- Gibt Task oder `Task<T>` zurück
- async void nur für Event Handler

**Weiterführende Links:**
- [Microsoft C# Documentation - async](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/async)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Async Functions (seit Rust 1.39)
// Benötigt: tokio = { version = "1", features = ["full"] }
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

**Besonderheiten:**
- `async fn` für asynchrone Funktionen
- Gibt ein `impl Future<Output = T>` zurück
- Benötigt Runtime (z.B. tokio, async-std) für Ausführung
- Keine farbige Funktions-Unterscheidung (async ist nicht viral wie in manchen anderen Sprachen)

**Weiterführende Links:**
- [Rust Reference - Async Functions](https://doc.rust-lang.org/reference/items/functions.html#async-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Async Functions (Coroutines, seit Kotlin 1.1)
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
        println("Fehler: $error")
    }
}

fun main() = runBlocking {
    processData()
}
```

**Besonderheiten:**
- suspend-Funktionen für asynchrone Operationen
- Teil des Coroutines-Systems
- Kann innerhalb von Coroutine-Scopes verwendet werden

**Weiterführende Links:**
- [Kotlin Documentation - Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Async Functions (seit Swift 5.5)
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
        print("Fehler: \(error)")
    }
}
```

**Besonderheiten:**
- async-Schlüsselwort für asynchrone Funktionen
- throws für Fehlerbehandlung
- Kann await innerhalb verwenden

**Weiterführende Links:**
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
        print('Fehler: $error');
    }
}
```

**Besonderheiten:**
- async-Schlüsselwort für asynchrone Funktionen
- Gibt Future oder `Future<T>` zurück
- Kann await innerhalb verwenden

**Weiterführende Links:**
- [Dart Documentation - Async Functions](https://dart.dev/guides/language/language-tour#asynchrony-support)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Asynchrone Tasks
t1 = @async begin
    sleep(1)
    "Ergebnis 1"
end

t2 = @async begin
    sleep(1)
    "Ergebnis 2"
end

# Auf Ergebnisse warten
result1 = fetch(t1)
result2 = fetch(t2)

# @sync wartet auf alle inneren @async Tasks
@sync begin
    @async download("url1")
    @async download("url2")
end
```

**Besonderheiten:**
- `@async` startet einen asynchronen Task
- `fetch()` wartet auf und gibt das Ergebnis zurück
- `@sync` wartet auf alle inneren `@async` Tasks
- Tasks sind kooperativ – Kontextwechsel bei I/O-Operationen

**Weiterführende Links:**
- [Julia Documentation - Asynchronous Programming](https://docs.julialang.org/en/v1/manual/asynchronous-programming/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import asyncdispatch
proc fetchData(url: string): Future[string] {.async.} =
  # Asynchrone Operation
  await sleepAsync(100)
  return "Daten von " & url

proc main() {.async.} =
  let data = await fetchData("https://example.com")
  echo data

waitFor main()
```

**Besonderheiten:**
- `{.async.}` Pragma markiert asynchrone Prozeduren
- `Future[T]` als Rückgabetyp für asynchrone Operationen
- `await` zum Warten auf asynchrone Ergebnisse
- `waitFor` zum Starten der Event-Loop

**Weiterführende Links:**
- [Nim Documentation - Asyncdispatch](https://nim-lang.org/docs/asyncdispatch.html)

</TabItem>
</Tabs>


## 14.2.2. Await Keywords

Schlüsselwort, das die Ausführung einer asynchronen Funktion pausiert, bis das Promise oder Future erfüllt ist. Ermöglicht synchrone Schreibweise für asynchrone Operationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'javascript', 'kotlin', 'nim', 'python', 'rust', 'swift', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// await (seit ES2017)
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

**Besonderheiten:**
- await kann nur in async-Funktionen verwendet werden
- Pausiert Ausführung bis Promise erfüllt ist
- Kann mit Promise.all() für parallele Ausführung kombiniert werden

**Weiterführende Links:**
- [MDN Web Docs - await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// await (seit ES2017)
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

**Besonderheiten:**
- await kann nur in async-Funktionen verwendet werden
- Pausiert Ausführung bis Promise erfüllt ist
- Kann mit Promise.all() für parallele Ausführung kombiniert werden
- TypeScript bietet Typ-Unterstützung für await-Ausdrücke

**Weiterführende Links:**
- [TypeScript Handbook - await](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#async-await)

</TabItem>
<TabItem value="python" label="Python">

```python
# await (seit Python 3.5)
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

**Besonderheiten:**
- await kann nur in async def-Funktionen verwendet werden
- Pausiert Ausführung bis Coroutine erfüllt ist
- Kann mit asyncio.gather() für parallele Ausführung kombiniert werden

**Weiterführende Links:**
- [Python Documentation - await](https://docs.python.org/3/reference/expressions.html#await)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// await (seit C# 5.0)
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

**Besonderheiten:**
- await kann nur in async-Methoden verwendet werden
- Pausiert Ausführung bis Task erfüllt ist
- ConfigureAwait(false) für Performance-Optimierung verfügbar

**Weiterführende Links:**
- [Microsoft C# Documentation - await](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/await)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// await (seit Rust 1.39)
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

**Besonderheiten:**
- `.await` Postfix-Syntax für asynchrone Operationen
- Pausiert Ausführung bis Future erfüllt ist
- Kann mit `tokio::join!()` für parallele Ausführung kombiniert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- awaitAll() für parallele Ausführung
- suspend-Funktionen können await verwenden
- Teil des Coroutines-Systems

**Weiterführende Links:**
- [Kotlin Documentation - Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// await (seit Swift 5.5)
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

**Besonderheiten:**
- await kann nur in async-Funktionen verwendet werden
- async let für parallele Ausführung
- Pausiert Ausführung bis Task erfüllt ist

**Weiterführende Links:**
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

**Besonderheiten:**
- await kann nur in async-Funktionen verwendet werden
- Pausiert Ausführung bis Future erfüllt ist
- Future.wait() für parallele Ausführung

**Weiterführende Links:**
- [Dart Documentation - await](https://dart.dev/guides/language/language-tour#asynchrony-support)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import asyncdispatch
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

**Besonderheiten:**
- `await` kann nur in `{.async.}` Prozeduren verwendet werden
- Pausiert die Ausführung bis das Future abgeschlossen ist
- Mehrere `await`-Ausdrücke möglich

**Weiterführende Links:**
- [Nim Documentation - Async/Await](https://nim-lang.org/docs/asyncdispatch.html)

</TabItem>
</Tabs>


## 14.2.3. Promises / Futures

Objekte, die einen Wert oder eine Ausnahme repräsentieren, die zu einem späteren Zeitpunkt verfügbar sein wird. Promises/Futures ermöglichen asynchrone Programmierung ohne explizite Callbacks.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'java', 'javascript', 'kotlin', 'lean4', 'nim', 'python', 'rust', 'scala', 'typescript']} yellowTabs={['lean4']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Promises (seit ES2015)
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

// Promise.all für parallele Ausführung
Promise.all([fetchData(), fetchData()])
    .then(results => console.log(results));
```

**Besonderheiten:**
- Promise-Konstruktor für Promise-Erstellung
- then() für Erfolgsbehandlung
- catch() für Fehlerbehandlung
- Promise.all() für parallele Ausführung

**Weiterführende Links:**
- [MDN Web Docs - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Promises (seit ES2015)
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

// Promise.all für parallele Ausführung
Promise.all([fetchData(), fetchData()])
    .then(results => console.log(results));
```

**Besonderheiten:**
- Promise-Konstruktor für Promise-Erstellung
- then() für Erfolgsbehandlung
- catch() für Fehlerbehandlung
- Promise.all() für parallele Ausführung
- TypeScript bietet Typ-Unterstützung für Promises

**Weiterführende Links:**
- [MDN Web Docs - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

</TabItem>
<TabItem value="python" label="Python">

```python
# Futures (seit Python 3.2)
from concurrent.futures import Future, ThreadPoolExecutor
import time

def fetch_data():
    time.sleep(1)
    return {"data": "example"}

with ThreadPoolExecutor() as executor:
    future = executor.submit(fetch_data)
    result = future.result()
    print(result)

# asyncio.Future für asynchrone Operationen
import asyncio

async def async_fetch_data():
    await asyncio.sleep(1)
    return {"data": "example"}

future = asyncio.create_task(async_fetch_data())
result = await future
```

**Besonderheiten:**
- concurrent.futures.Future für Thread-basierte Futures
- asyncio.Future für asynchrone Futures
- result() blockiert bis Ergebnis verfügbar ist
- add_done_callback() für Callback-basierte Behandlung

**Weiterführende Links:**
- [Python Documentation - concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Tasks (Futures, seit .NET 4.0)
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
        
        // Warten auf Ergebnis
        var result = task.Result;
        
        // Parallele Ausführung
        var tasks = new[] { FetchDataAsync(), FetchDataAsync() };
        Task.WaitAll(tasks);
    }
}
```

**Besonderheiten:**
- `Task<T>` für Future-Implementierung
- `ContinueWith()` für Callback-basierte Behandlung
- Result-Eigenschaft blockiert bis Ergebnis verfügbar ist
- `Task.WaitAll()` für parallele Ausführung

**Weiterführende Links:**
- [Microsoft C# Documentation - Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Futures (seit Rust 1.39)
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
    
    // Parallele Ausführung
    let futures = vec![fetch_data(), fetch_data()];
    futures::future::join_all(futures).await;
}
```

**Besonderheiten:**
- impl Future für Future-Typen
- await für Ausführung
- futures::future::join_all() für parallele Ausführung
- Benötigt Runtime (z.B. tokio) für Ausführung

**Weiterführende Links:**
- [Rust Documentation - std::future](https://doc.rust-lang.org/std/future/index.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// CompletableFuture (seit Java 8)
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
        
        // Parallele Ausführung
        CompletableFuture<String> f1 = fetchData();
        CompletableFuture<String> f2 = fetchData();
        CompletableFuture.allOf(f1, f2).join();
    }
}
```

**Besonderheiten:**
- CompletableFuture für Future-Implementierung
- thenAccept() für Callback-basierte Behandlung
- get() blockiert bis Ergebnis verfügbar ist
- allOf() für parallele Ausführung

**Weiterführende Links:**
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
    
    // Parallele Ausführung
    val deferred1 = async { fetchData() }
    val deferred2 = async { fetchData() }
    awaitAll(deferred1, deferred2)
}
```

**Besonderheiten:**
- Deferred für Future-Implementierung in Coroutines
- await() für Ergebnis
- async {} für Deferred-Erstellung
- awaitAll() für parallele Ausführung

**Weiterführende Links:**
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
    
    // Warten auf Ergebnis
    var result = await fetchData();
    
    // Parallele Ausführung
    Future.wait([fetchData(), fetchData()])
        .then((results) => print(results));
}
```

**Besonderheiten:**
- Future für Future-Implementierung
- then() für Erfolgsbehandlung
- catchError() für Fehlerbehandlung
- Future.wait() für parallele Ausführung

**Weiterführende Links:**
- [Dart Documentation - Future](https://api.dart.dev/stable/dart-async/Future-class.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Future: Asynchrone Berechnung
(def result (future
  (Thread/sleep 1000)
  (+ 1 2)))

;; Wert abrufen (blockiert bis fertig)
@result  ; 3

;; Promise: Manuell einlösbarer Wert
(def p (promise))

;; In anderem Thread einlösen
(future (deliver p 42))

;; Wert abrufen (blockiert bis eingelöst)
@p  ; 42

;; Timeout beim Deref
(deref (future (Thread/sleep 5000) 42) 1000 :timeout)  ; :timeout nach 1s
```

**Besonderheiten:**
- `future` startet asynchrone Berechnung in Thread-Pool
- `promise`/`deliver` für einmalige Wert-Übergabe
- `deref` / `@` zum Abrufen (blockierend)
- Timeout-Option bei `deref`
- `realized?` prüft ob Wert verfügbar

**Weiterführende Links:**
- [Clojure Documentation - Agents and Futures](https://clojure.org/reference/agents)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Task als Future-Äquivalent
def computeAsync : IO (Task (Except IO.Error Nat)) := do
  IO.asTask do
    IO.sleep 100
    pure 42

def main : IO Unit := do
  let task ← computeAsync
  let result ← IO.ofExcept (← task.get)
  IO.println s!"Ergebnis: {result}"
```

**Besonderheiten:**
- `Task α` repräsentiert eine asynchron laufende Berechnung.
- `IO.asTask` startet eine IO-Berechnung in einem neuen Thread und gibt ein `Task`-Objekt zurück.
- `Task.get` wartet blockierend auf das Ergebnis.
- Kein `async/await`-Pattern – stattdessen werden `Task` und `IO`-Monade kombiniert.

**Weiterführende Links:**
- [Lean 4 Documentation - IO](https://lean-lang.org/lean4/doc/io.html)
- [Lean 4 Documentation - Task](https://leanprover-community.github.io/mathlib4_docs/Init/System/IO.html#IO.asTask)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import asyncdispatch
proc computeAsync(): Future[int] {.async.} =
  await sleepAsync(100)
  return 42

proc main() {.async.} =
  let future = computeAsync()
  # Andere Arbeit...
  let result = await future
  echo result  # 42

waitFor main()
```

**Besonderheiten:**
- `Future[T]` repräsentiert ein asynchrones Ergebnis
- Wird automatisch von `{.async.}` Prozeduren erzeugt
- `newFuture[T]()` für manuelles Erstellen von Futures
- `complete()` und `fail()` zum Setzen des Ergebnisses

**Weiterführende Links:**
- [Nim Documentation - Asyncfutures](https://nim-lang.org/docs/asyncfutures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.concurrent.{Future, Promise, Await}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration._

// Future: Asynchrone Berechnung
val future: Future[Int] = Future
{
    Thread.sleep(1000)
    42
}

// Callbacks
future.onComplete
{
    case scala.util.Success(value) => println(s"Ergebnis: $value")
    case scala.util.Failure(exception) => println(s"Fehler: $exception")
}

// Promise: Manuell erfüllbar
val promise = Promise[String]()
val promisedFuture: Future[String] = promise.future

Future
{
    Thread.sleep(500)
    promise.success("Ergebnis vom Promise")
}

val result = Await.result(promisedFuture, 2.seconds)
```

**Besonderheiten:**
- `Future[T]` repräsentiert eine asynchrone Berechnung
- `Promise[T]` ist ein schreibbarer Container, der ein `Future` erfüllt
- Benötigt einen `ExecutionContext` (Thread Pool)
- Unterstützt `map`, `flatMap`, `filter` für funktionale Komposition
- Seit Scala 2.10 in der Standardbibliothek

**Weiterführende Links:**
- [Scala Documentation - Futures and Promises](https://docs.scala-lang.org/overviews/core/futures.html)

</TabItem>

</Tabs>


## 14.2.4. Async Iterators

Iteratoren, die asynchron über eine Sequenz von Werten iterieren. Ermöglichen die Verarbeitung von Datenströmen, die asynchron geladen werden, mit einer synchronen for-await-of-Syntax.

### Sprachen {#sprachen}

<Tabs availableTabs={['javascript', 'typescript', 'python', 'csharp', 'rust', 'kotlin', 'dart']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Async Iterators (seit ES2018)
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

**Besonderheiten:**
- async function* für Async Generators
- yield für Werte-Ausgabe
- for await...of für Iteration über Async Iterables

**Weiterführende Links:**
- [MDN Web Docs - Async Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Async Iterators (seit ES2018)
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

**Besonderheiten:**
- async function* für Async Generators
- yield für Werte-Ausgabe
- for await...of für Iteration über Async Iterables
- TypeScript bietet Typ-Unterstützung für Async Iterators

**Weiterführende Links:**
- [TypeScript Handbook - Async Iterators](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-iteration)

</TabItem>
<TabItem value="python" label="Python">

```python
# Async Iterators (seit Python 3.6)
import asyncio

async def async_generator():
    for i in range(5):
        await asyncio.sleep(0.1)
        yield i

async def process_async():
    async for value in async_generator():
        print(value)
```

**Besonderheiten:**
- async def mit yield für Async Generators
- async for für Iteration über Async Iterables
- __aiter__() und __anext__() für manuelle Implementierung

**Weiterführende Links:**
- [Python Documentation - Async Iterators](https://docs.python.org/3/reference/datamodel.html#asynchronous-iterators)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Async Iterators (seit C# 8.0)
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

**Besonderheiten:**
- `IAsyncEnumerable<T>` für Async Iterables
- `yield return` in async-Methoden
- `await foreach` für Iteration

**Weiterführende Links:**
- [Microsoft C# Documentation - Async Streams](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8#async-streams)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Async Iterators (Streams)
// Benötigt: futures = "0.3", tokio = { version = "1", features = ["full"] }
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

**Besonderheiten:**
- `Stream`-Trait für asynchrone Iterables (aus `futures`-Crate)
- `.next().await` für asynchrone Iteration
- Externe Crate `futures` für Stream-Implementierung
- Streams müssen gepinnt werden (`Box::pin` oder `pin!`)

**Weiterführende Links:**
- [Rust Documentation - Streams](https://docs.rs/futures/latest/futures/stream/index.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Async Iterators (Flow, seit Kotlin 1.3)
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

**Besonderheiten:**
- Flow für Async Iterables in Coroutines
- emit() für Werte-Ausgabe
- collect() für Iteration

**Weiterführende Links:**
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

**Besonderheiten:**
- async* für Async Generators
- yield für Werte-Ausgabe
- await for für Iteration über Streams

**Weiterführende Links:**
- [Dart Documentation - Streams](https://dart.dev/guides/language/language-tour#generators)

</TabItem>
</Tabs>

