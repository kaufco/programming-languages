---
slug: /concurrency/concurrency-models
title: 14.3. Concurrency Models
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 14.3. Concurrency Models

Verschiedene Concurrency-Modelle.

## 14.3.1. Coroutines

Leichtgewichtige, kooperative Multitasking-Einheiten, die ihre Ausführung freiwillig unterbrechen können, um anderen Coroutines die Kontrolle zu übergeben. Ermöglichen effiziente asynchrone Programmierung ohne Thread-Overhead.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'julia', 'kotlin', 'lua', 'prolog', 'python', 'typescript']}>
<TabItem value="python" label="Python">

```python
# Coroutines (seit Python 3.5)
import asyncio

async def coroutine_example():
    print("Coroutine startet")
    await asyncio.sleep(1)
    print("Coroutine setzt fort")
    return "Ergebnis"

async def main():
    result = await coroutine_example()
    print(result)

asyncio.run(main())
```

**Besonderheiten:**
- async def für Coroutine-Definition
- await für Unterbrechung und Fortsetzung
- asyncio.run() für Ausführung

**Weiterführende Links:**
- [Python Documentation - Coroutines](https://docs.python.org/3/library/asyncio-task.html#coroutines)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Coroutines (seit Kotlin 1.1)
import kotlinx.coroutines.*

suspend fun coroutineExample() {
    println("Coroutine startet")
    delay(1000)
    println("Coroutine setzt fort")
}

fun main() = runBlocking {
    coroutineExample()
}
```

**Besonderheiten:**
- suspend-Funktionen für Coroutines
- delay() für Unterbrechung
- runBlocking für Coroutine-Ausführung

**Weiterführende Links:**
- [Kotlin Documentation - Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Coroutines (seit Lua 5.0)
function coroutine_example()
    print("Coroutine startet")
    coroutine.yield()
    print("Coroutine setzt fort")
end

local co = coroutine.create(coroutine_example)
coroutine.resume(co)
coroutine.resume(co)
```

**Besonderheiten:**
- coroutine.create() für Coroutine-Erstellung
- coroutine.yield() für Unterbrechung
- coroutine.resume() für Fortsetzung

**Weiterführende Links:**
- [Lua Documentation - Coroutines](https://www.lua.org/manual/5.4/manual.html#2.6)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Coroutines (Unity, nicht Teil der Standard-C#-Sprache)
using System.Collections;
using UnityEngine;

public class CoroutineExample : MonoBehaviour {
    IEnumerator CoroutineExample() {
        Debug.Log("Coroutine startet");
        yield return new WaitForSeconds(1);
        Debug.Log("Coroutine setzt fort");
    }
    
    void Start() {
        StartCoroutine(CoroutineExample());
    }
}
```

**Besonderheiten:**
- IEnumerator für Coroutine-Definition
- yield return für Unterbrechung
- Unity-spezifisch, nicht Teil der Standard-C#-Sprache

**Weiterführende Links:**
- [Unity Documentation - Coroutines](https://docs.unity3d.com/Manual/Coroutines.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generators als Coroutines (seit ES2015)
function* coroutineExample() {
    console.log("Coroutine startet");
    yield;
    console.log("Coroutine setzt fort");
}

const co = coroutineExample();
co.next();
co.next();
```

**Besonderheiten:**
- Generators (function*) als Coroutine-Implementierung
- yield für Unterbrechung
- next() für Fortsetzung

**Weiterführende Links:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generators als Coroutines (seit ES2015)
function* coroutineExample(): Generator<void, void, unknown> {
    console.log("Coroutine startet");
    yield;
    console.log("Coroutine setzt fort");
}

const co = coroutineExample();
co.next();
co.next();
```

**Besonderheiten:**
- Generators (function*) als Coroutine-Implementierung
- yield für Unterbrechung
- next() für Fortsetzung
- TypeScript bietet Typ-Unterstützung für Generators

**Weiterführende Links:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Engines als Coroutines (SWI-Prolog)
coroutine_example :-
    engine_create(Return, (
        writeln('Coroutine startet'),
        engine_yield(zwischenwert),
        writeln('Coroutine setzt fort'),
        Return = 'Ergebnis'
    ), Engine),
    engine_next(Engine, V1),
    writeln(V1),                % zwischenwert
    engine_next(Engine, V2),
    writeln(V2),                % Ergebnis
    engine_destroy(Engine).
```

**Besonderheiten:**
- `engine_create/3` erstellt eine Coroutine (Engine)
- `engine_yield/1` pausiert und gibt einen Wert zurück
- `engine_next/2` setzt die Coroutine fort und empfängt den nächsten Wert
- Engines basieren auf Prologs Backtracking-Mechanismus
- `engine_destroy/1` gibt Ressourcen frei

**Weiterführende Links:**
- [SWI-Prolog Documentation - Engines](https://www.swi-prolog.org/pldoc/man?section=engines)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Tasks als Coroutines
function producer(ch::Channel)
    for i in 1:5
        put!(ch, i * 10)
    end
end

ch = Channel(producer)

for val in ch
    println(val)  # 10, 20, 30, 40, 50
end
```

**Besonderheiten:**
- `Task` ist Julias Coroutine-Typ
- Kooperatives Scheduling mit `yield()`
- `Channel` für Kommunikation zwischen Coroutines
- Lightweight (kein OS-Thread pro Task)

**Weiterführende Links:**
- [Julia Documentation - Tasks](https://docs.julialang.org/en/v1/manual/asynchronous-programming/)

</TabItem>
</Tabs>


## 14.3.2. Goroutines / Green Threads

Leichtgewichtige Threads, die vom Runtime-System verwaltet werden statt vom Betriebssystem. Ermöglichen effiziente Concurrency mit geringem Overhead durch M:N-Threading-Modell.

### Sprachen {#sprachen}

<Tabs availableTabs={['elixir', 'erlang', 'gleam', 'go', 'java', 'julia']}>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "time"
)

func goroutineExample() {
    fmt.Println("Goroutine läuft")
    time.Sleep(1 * time.Second)
    fmt.Println("Goroutine beendet")
}

func main() {
    go goroutineExample()
    fmt.Println("Hauptthread")
    time.Sleep(2 * time.Second)
}
```

**Besonderheiten:**
- go-Schlüsselwort startet Goroutine
- Werden vom Go-Runtime verwaltet
- M:N-Threading-Modell (mehrere Goroutines pro OS-Thread)

**Weiterführende Links:**
- [Go Documentation - Goroutines](https://go.dev/tour/concurrency/1)

</TabItem>
<TabItem value="java" label="Java">

```java
// Virtual Threads (seit Java 21)
// Benötigt: import java.util.concurrent.Executors;

try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> {
        System.out.println("Virtual Thread läuft");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println("Virtual Thread beendet");
    });
}
```

**Besonderheiten:**
- Virtual Threads seit Java 21 als Green Threads
- Werden vom JVM verwaltet
- M:N-Threading-Modell

**Weiterführende Links:**
- [Oracle Java Documentation - Virtual Threads](https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lightweight Processes (Green Threads)
spawn(fun() ->
    io:format("Process läuft~n"),
    timer:sleep(1000),
    io:format("Process beendet~n")
end).
```

**Besonderheiten:**
- spawn() erstellt Lightweight Process
- Werden vom Erlang VM verwaltet
- Millionen von Prozessen möglich

**Weiterführende Links:**
- [Erlang Documentation - Processes](https://www.erlang.org/doc/reference_manual/processes.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lightweight Processes (Green Threads)
spawn(fn ->
    IO.puts("Process läuft")
    Process.sleep(1000)
    IO.puts("Process beendet")
end)
```

**Besonderheiten:**
- spawn() erstellt Lightweight Process
- Werden vom BEAM VM verwaltet
- Millionen von Prozessen möglich

**Weiterführende Links:**
- [Elixir Documentation - Processes](https://elixir-lang.org/getting-started/processes.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// BEAM Prozesse (Green Threads)
// Benötigt: import gleam/erlang/process
pub fn main() {
  process.start(fn() {
    io.println("Hallo aus einem BEAM-Prozess!")
  }, True)
}
```

**Besonderheiten:**
- BEAM-Prozesse sind leichtgewichtige Green Threads
- Tausende bis Millionen gleichzeitiger Prozesse möglich
- Jeder Prozess hat eigenen Heap und GC
- Preemptive Scheduling durch BEAM VM

**Weiterführende Links:**
- [Gleam OTP Documentation](https://hexdocs.pm/gleam_otp/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Tasks sind Green Threads
@sync begin
    for i in 1:10
        @async begin
            sleep(rand())
            println("Task $i auf Thread $(Threads.threadid())")
        end
    end
end
```

**Besonderheiten:**
- Julia Tasks sind leichtgewichtig (Green Threads)
- Seit Julia 1.3 können Tasks auf OS-Threads gemappt werden
- M:N Threading-Modell (seit Julia 1.7+)
- Kooperatives Scheduling innerhalb eines Threads

**Weiterführende Links:**
- [Julia Documentation - Asynchronous Programming](https://docs.julialang.org/en/v1/manual/asynchronous-programming/)

</TabItem>
</Tabs>


## 14.3.3. Virtual Threads

Leichtgewichtige Threads, die vom Runtime-System verwaltet werden und auf einer kleinen Anzahl von OS-Threads ausgeführt werden. Ermöglichen effiziente Concurrency mit geringem Overhead.

### Sprachen {#sprachen}

<Tabs availableTabs={['java']}>
<TabItem value="java" label="Java">

```java
// Virtual Threads (seit Java 21)
// Benötigt: import java.util.concurrent.Executors;

try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 10_000; i++) {
        int taskId = i;
        executor.submit(() -> {
            System.out.println("Virtual Thread " + taskId + " läuft");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
    }
}
```

**Besonderheiten:**
- Virtual Threads seit Java 21 (JEP 444)
- Werden vom JVM verwaltet
- Millionen von Virtual Threads möglich
- Blocking I/O blockiert nur Virtual Thread, nicht OS-Thread

**Weiterführende Links:**
- [Oracle Java Documentation - Virtual Threads](https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html)

</TabItem>
</Tabs>


## 14.3.4. Isolates

Isolierte Ausführungsumgebungen mit eigenem Speicher, die keine gemeinsamen veränderlichen Daten teilen. Kommunikation erfolgt über Message Passing, was Race Conditions verhindert.

### Sprachen {#sprachen}

<Tabs availableTabs={['dart']}>
<TabItem value="dart" label="Dart">

```dart
// Isolates
import 'dart:isolate';

void isolateFunction(SendPort sendPort) {
    sendPort.send('Nachricht von Isolate');
}

void main() async {
    ReceivePort receivePort = ReceivePort();
    Isolate isolate = await Isolate.spawn(isolateFunction, receivePort.sendPort);
    
    receivePort.listen((message) {
        print(message);
        receivePort.close();
        isolate.kill();
    });
}
```

**Besonderheiten:**
- Isolate.spawn() erstellt neues Isolate
- Message Passing über SendPort/ReceivePort
- Kein gemeinsamer Speicher

**Weiterführende Links:**
- [Dart Documentation - Isolates](https://dart.dev/guides/language/concurrency)

</TabItem>
</Tabs>


## 14.3.5. Actor Model

Concurrency-Modell, bei dem Actors isolierte Einheiten sind, die nur über Message Passing kommunizieren. Jeder Actor hat eine Mailbox und verarbeitet Nachrichten sequenziell.

### Sprachen {#sprachen}

<Tabs availableTabs={['elixir', 'erlang', 'gleam', 'scala', 'swift']}>
<TabItem value="erlang" label="Erlang">

```erlang
% Actor Model
-module(actor_example).
-export([start/0, loop/0]).

start() ->
    Pid = spawn(?MODULE, loop, []),
    Pid ! {message, "Hallo"},
    Pid ! stop.

loop() ->
    receive
        {message, Msg} ->
            io:format("Empfangen: ~p~n", [Msg]),
            loop();
        stop ->
            io:format("Actor beendet~n")
    end.
```

**Besonderheiten:**
- spawn() erstellt Actor (Process)
- ! für Message Sending
- receive für Message Receiving
- Mailbox für jede Nachricht

**Weiterführende Links:**
- [Erlang Documentation - Processes](https://www.erlang.org/doc/reference_manual/processes.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Actor Model
defmodule ActorExample do
    def start do
        pid = spawn(__MODULE__, :loop, [])
        send(pid, {:message, "Hallo"})
        send(pid, :stop)
    end
    
    def loop do
        receive do
            {:message, msg} ->
                IO.puts("Empfangen: #{msg}")
                loop()
            :stop ->
                IO.puts("Actor beendet")
        end
    end
end
```

**Besonderheiten:**
- spawn() erstellt Actor (Process)
- send() für Message Sending
- receive für Message Receiving
- Mailbox für jede Nachricht

**Weiterführende Links:**
- [Elixir Documentation - Processes](https://elixir-lang.org/getting-started/processes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Actor Model (Akka)
import akka.actor.{Actor, ActorSystem, Props}

class ActorExample extends Actor {
    def receive = {
        case msg: String =>
            println(s"Empfangen: $msg")
        case "stop" =>
            println("Actor beendet")
            context.stop(self)
    }
}

object Main extends App {
    val system = ActorSystem("ExampleSystem")
    val actor = system.actorOf(Props[ActorExample], "exampleActor")
    actor ! "Hallo"
    actor ! "stop"
}
```

**Besonderheiten:**
- Akka für Actor-Implementierung
- ! für Message Sending
- receive für Message Handling
- ActorSystem für Actor-Verwaltung

**Weiterführende Links:**
- [Akka Documentation - Actors](https://doc.akka.io/docs/akka/current/typed/actors.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Actor Model via OTP
// Benötigt: import gleam/otp/actor
pub type Message {
  Increment
  GetCount(reply_with: process.Subject(Int))
}

fn handle_message(message: Message, count: Int) -> actor.Next(Message, Int) {
  case message {
    Increment -> actor.continue(count + 1)
    GetCount(client) -> {
      process.send(client, count)
      actor.continue(count)
    }
  }
}
```

**Besonderheiten:**
- Actor Model über BEAM/OTP
- Gleam OTP-Bibliothek bietet typsicheres Actor-Framework
- Message Passing zwischen Prozessen
- Supervision Trees für Fehlertoleranz

**Weiterführende Links:**
- [Gleam OTP Documentation](https://hexdocs.pm/gleam_otp/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Actor Model (seit Swift 5.5)
actor BankAccount {
    private var balance: Double = 0
    
    func deposit(amount: Double) {
        balance += amount
    }
    
    func withdraw(amount: Double) -> Bool {
        if balance >= amount {
            balance -= amount
            return true
        }
        return false
    }
    
    func getBalance() -> Double {
        return balance
    }
}

// Verwendung (in async Kontext)
let account = BankAccount()
await account.deposit(amount: 100)
let balance = await account.getBalance()
```

**Besonderheiten:**
- `actor`-Keyword definiert einen Actor (seit Swift 5.5)
- Actors isolieren ihren Zustand automatisch
- Zugriff auf Actor-Properties/-Methoden erfordert `await`
- `@MainActor` für UI-bezogene Operationen
- Actors sind Reference Types

**Weiterführende Links:**
- [Swift Documentation - Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/#Actors)

</TabItem>
</Tabs>


## 14.3.6. Channels / Message Passing

Kommunikationsmechanismus zwischen Threads/Goroutines über Channels. Ermöglicht sichere Datenübertragung ohne explizite Locks durch Kommunikation statt gemeinsamen Speichers.

### Sprachen {#sprachen}

<Tabs availableTabs={['d', 'erlang', 'gleam', 'go', 'julia', 'kotlin', 'nim', 'prolog', 'rust', 'v']}>
<TabItem value="go" label="Go">

```go
package main

import "fmt"

func main() {
    ch := make(chan string)
    
    go func() {
        ch <- "Nachricht"
    }()
    
    msg := <-ch
    fmt.Println(msg)
}
```

**Besonderheiten:**
- `make(chan T)` erstellt Channel
- `<-` für Senden und Empfangen
- Blockiert bis Daten verfügbar sind
- Buffered Channels mit `make(chan T, size)`

**Weiterführende Links:**
- [Go Documentation - Channels](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    
    thread::spawn(move || {
        tx.send("Nachricht".to_string()).unwrap();
    });
    
    let msg = rx.recv().unwrap();
    println!("{}", msg);
}
```

**Besonderheiten:**
- mpsc::channel() erstellt Channel
- send() für Senden
- recv() für Empfangen (blockierend)
- try_recv() für nicht-blockierendes Empfangen

**Weiterführende Links:**
- [Rust Book - Channels](https://doc.rust-lang.org/book/ch16-02-message-passing.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Channels (Coroutines)
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking {
    val channel = Channel<String>()
    
    launch {
        channel.send("Nachricht")
        channel.close()
    }
    
    for (msg in channel) {
        println(msg)
    }
}
```

**Besonderheiten:**
- `Channel<T>()` erstellt Channel
- `send()` für Senden
- `receive()` für Empfangen
- Teil des Coroutines-Systems

**Weiterführende Links:**
- [Kotlin Documentation - Channels](https://kotlinlang.org/docs/channels.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Message Passing
// Benötigt: import std.concurrency;
// Benötigt: import std.stdio;

void worker() {
    // Empfange Nachrichten
    while (true) {
        receive(
            (string msg) {
                writeln("Empfangen: ", msg);
                if (msg == "quit") return;
            },
            (int num) {
                writeln("Zahl: ", num);
                ownerTid.send(num * 2);  // Antwort senden
            }
        );
    }
}

void main() {
    auto tid = spawn(&worker);
    tid.send(42);
    tid.send("hello");
    tid.send("quit");

    // Antwort empfangen
    receive((int result) {
        writeln("Ergebnis: ", result);  // 84
    });
}
```

**Besonderheiten:**
- `std.concurrency` für Actor-basiertes Message Passing
- `spawn` erstellt neuen Thread mit eigenem Nachrichtenkanal
- `send` / `receive` für typsichere Nachrichtenübermittlung
- Kein geteilter Zustand zwischen Threads (Share Nothing)
- Pattern Matching auf Nachrichtentypen

**Weiterführende Links:**
- [D Phobos - std.concurrency](https://dlang.org/phobos/std_concurrency.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Message Passing
Pid = spawn(fun() ->
    receive
        {msg, Text} ->
            io:format("Empfangen: ~s~n", [Text]);
        stop ->
            ok
    end
end),

Pid ! {msg, "Hallo"},
Pid ! stop.
```

**Besonderheiten:**
- `!` (Bang-Operator) für Message Sending
- `receive` für Message Receiving
- Jeder Prozess hat eine eigene Mailbox
- Asynchrones Message Passing (nicht blockierend beim Senden)

**Weiterführende Links:**
- [Erlang Documentation - Processes](https://www.erlang.org/doc/reference_manual/processes.html)
</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Message Passing via Subjects
// Benötigt: import gleam/erlang/process
pub fn main() {
  let subject = process.new_subject()
  process.start(fn() {
    process.send(subject, "Nachricht vom Kind-Prozess")
  }, True)
  let message = process.receive(subject, 1000)
}
```

**Besonderheiten:**
- `Subject` als typsicherer Kanal für Message Passing
- `process.send` und `process.receive` für Kommunikation
- Timeout-basiertes Empfangen
- Typsicher durch Gleam's Typsystem

**Weiterführende Links:**
- [Gleam OTP Documentation](https://hexdocs.pm/gleam_otp/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Buffered Channel
ch = Channel{Int}(10)

# Producer
@async begin
    for i in 1:5
        put!(ch, i)
    end
    close(ch)
end

# Consumer
for val in ch
    println("Empfangen: $val")
end

# Unbuffered Channel
ch = Channel{String}(0)
@async put!(ch, "Hallo")  # Blockiert bis jemand liest
msg = take!(ch)  # "Hallo"
```

**Besonderheiten:**
- `Channel{T}(size)` für typisierte, gepufferte Channels
- `put!(ch, val)` zum Senden, `take!(ch)` zum Empfangen
- Channels sind iterierbar (for-Schleife)
- Blockierung bei vollem/leerem Channel

**Weiterführende Links:**
- [Julia Documentation - Channels](https://docs.julialang.org/en/v1/base/parallel/#Base.Channel)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: --threads:on
var chan: Channel[int]
open(chan)

proc producer() {.thread.} =
  for i in 1..5:
    chan.send(i)

proc consumer() {.thread.} =
  for i in 1..5:
    let msg = chan.recv()
    echo "Empfangen: ", msg

var t1, t2: Thread[void]
createThread(t1, producer)
createThread(t2, consumer)
joinThreads(t1, t2)
close(chan)
```

**Besonderheiten:**
- `Channel[T]` für typsichere Thread-Kommunikation
- `send`/`recv` für blockierende Operationen
- `tryRecv` für nicht-blockierendes Empfangen
- Channels müssen mit `open`/`close` verwaltet werden

**Weiterführende Links:**
- [Nim Documentation - Channels](https://nim-lang.org/docs/channels_builtin.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- use_module(library(thread)).

% Message Queue erstellen
example_message_passing :-
    message_queue_create(Queue),
    
    % Producer-Thread
    thread_create((
        forall(between(1, 5, I), (
            thread_send_message(Queue, data(I)),
            format('Gesendet: ~w~n', [I])
        )),
        thread_send_message(Queue, done)
    ), Producer, []),
    
    % Consumer
    consume_messages(Queue),
    
    % Aufräumen
    thread_join(Producer, _),
    message_queue_destroy(Queue).

consume_messages(Queue) :-
    thread_get_message(Queue, Msg),
    (   Msg == done
    ->  writeln('Alle Nachrichten empfangen')
    ;   Msg = data(Value),
        format('Empfangen: ~w~n', [Value]),
        consume_messages(Queue)
    ).
```

**Besonderheiten:**
- `message_queue_create/1` erstellt eine benannte oder anonyme Nachrichtenwarteschlange
- `thread_send_message/2` sendet eine Nachricht (nicht blockierend)
- `thread_get_message/2` empfängt eine Nachricht (blockierend)
- `thread_peek_message/2` prüft, ob eine Nachricht verfügbar ist (nicht blockierend)
- Nachrichten können beliebige Prolog-Terme sein

**Weiterführende Links:**
- [SWI-Prolog Documentation - Thread Communication](https://www.swi-prolog.org/pldoc/man?section=threadcom)

</TabItem>
<TabItem value="v" label="V">

```v
// Channels
ch := chan int{cap: 5}

// Senden in einem Thread
spawn fn [ch] () {
    for i in 0 .. 5 {
        ch <- i
    }
    ch.close()
}()

// Empfangen
for {
    value := <-ch or { break }
    println(value)
}
```

**Besonderheiten:**
- `chan Type{cap: n}` für gebufferte Channels
- `ch <- value` zum Senden
- `<-ch` zum Empfangen
- `ch.close()` zum Schließen
- Ähnlich wie Go-Channels

**Weiterführende Links:**
- [V Documentation - Channels](https://github.com/vlang/v/blob/master/doc/docs.md#channels)

</TabItem>
</Tabs>


## 14.3.7. Tasks (Ada-style)

Concurrency-Einheiten in Ada, die beim Erreichen des begin-Blocks automatisch gestartet werden. Tasks können aufeinander warten und über Rendezvous kommunizieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada']}>
<TabItem value="ada" label="Ada">

```ada
with Ada.Text_IO; use Ada.Text_IO;

procedure Task_Example is
   task Worker;
   
   task body Worker is
   begin
      Put_Line("Task läuft");
      delay 1.0;
      Put_Line("Task beendet");
   end Worker;
begin
   Put_Line("Hauptprogramm");
   delay 2.0;
end Task_Example;
```

**Besonderheiten:**
- task-Deklaration für Task-Spezifikation
- task body für Task-Implementierung
- Automatischer Start beim Erreichen des begin-Blocks
- Rendezvous für Task-Kommunikation

**Weiterführende Links:**
- [Ada Reference Manual - Tasks](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-9.html)

</TabItem>
</Tabs>


## 14.3.8. Protected Objects

Thread-sichere Objekte in Ada, die automatisch synchronisiert werden. Protected Objects ermöglichen sicheren Zugriff auf gemeinsame Daten ohne explizite Locks.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada']}>
<TabItem value="ada" label="Ada">

```ada
with Ada.Text_IO; use Ada.Text_IO;

procedure Protected_Example is
   protected Counter is
      procedure Increment;
      function Get_Value return Integer;
   private
      Value : Integer := 0;
   end Counter;
   
   protected body Counter is
      procedure Increment is
      begin
         Value := Value + 1;
      end Increment;
      
      function Get_Value return Integer is
      begin
         return Value;
      end Get_Value;
   end Counter;
begin
   Counter.Increment;
   Put_Line(Integer'Image(Counter.Get_Value));
end Protected_Example;
```

**Besonderheiten:**
- protected für Protected Object-Deklaration
- Automatische Synchronisation
- Procedures für exklusiven Zugriff
- Functions für lesenden Zugriff (können parallel ausgeführt werden)

**Weiterführende Links:**
- [Ada Reference Manual - Protected Objects](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-9-4.html)

</TabItem>
</Tabs>


## 14.3.9. Software Transactional Memory (STM)

Concurrency-Mechanismus, der atomare Transaktionen für Speicherzugriffe ermöglicht. Ähnlich wie Datenbanktransaktionen: Entweder werden alle Änderungen erfolgreich durchgeführt oder alle werden zurückgerollt.

### Sprachen {#sprachen}

<Tabs availableTabs={['haskell', 'clojure']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- STM (seit GHC 6.4)
import Control.Concurrent.STM

main = do
    account <- atomically $ newTVar 100
    atomically $ do
        current <- readTVar account
        writeTVar account (current + 50)
    balance <- atomically $ readTVar account
    print balance
```

**Besonderheiten:**
- STM-Monade für Transaktionen
- atomically für atomare Ausführung
- TVar für Transactional Variables
- Automatisches Rollback bei Konflikten

**Weiterführende Links:**
- [Haskell Documentation - STM](https://hackage.haskell.org/package/stm)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; STM
(def account (ref 100))

(dosync
  (alter account + 50))

(println @account)
```

**Besonderheiten:**
- ref für Transactional References
- dosync für Transaktionen
- alter für Änderungen
- Automatisches Retry bei Konflikten

**Weiterführende Links:**
- [Clojure Documentation - Refs](https://clojure.org/reference/refs)

</TabItem>
</Tabs>


## 14.3.10. Scoped Values

Thread-lokale Werte, die innerhalb eines Scopes verfügbar sind und an untergeordnete Threads vererbt werden können. Ermöglichen sichere Weitergabe von Kontextinformationen ohne explizite Parameterübergabe.

### Sprachen {#sprachen}

<Tabs availableTabs={['java']}>
<TabItem value="java" label="Java">

```java
// Scoped Values (seit Java 23)

private static final ScopedValue<String> CONTEXT = ScopedValue.newInstance();

public static void main(String[] args) {
    ScopedValue.runWhere(CONTEXT, "Wert", () -> {
        System.out.println(CONTEXT.get()); // "Wert"
    });
}
```

**Besonderheiten:**
- ScopedValue seit Java 23 (JEP 481, Preview seit Java 20)
- `runWhere()` für Scope-Definition
- `get()` für Wert-Zugriff
- Thread-sicher und immutable innerhalb des Scopes

**Weiterführende Links:**
- [Oracle Java Documentation - ScopedValue](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/ScopedValue.html)

</TabItem>
</Tabs>

## 14.3.11. Structured Concurrency

Concurrency-Paradigma, bei dem die Lebensdauer nebenläufiger Operationen an einen syntaktischen Block gebunden ist. Concurrent Tasks können ihren Eltern-Scope nicht überleben, was Ressourcen-Leaks verhindert und die Fehlerbehandlung vorhersagbar macht.

### Sprachen

<Tabs availableTabs={['java', 'kotlin', 'python', 'swift']} yellowTabs={['go', 'rust']}>
<TabItem value="go" label="Go">

```go
// Structured Concurrency via errgroup
// Benötigt: import "golang.org/x/sync/errgroup"
g, ctx := errgroup.WithContext(context.Background())

g.Go(func() error {
    result1, err := fetchData(ctx, "url1")
    return err
})

g.Go(func() error {
    result2, err := fetchData(ctx, "url2")
    return err
})

// Wartet auf alle Goroutines, gibt ersten Fehler zurück
if err := g.Wait(); err != nil {
    log.Fatal(err)
}
```

**Besonderheiten:**
- Kein natives Structured Concurrency in der Sprache
- `errgroup` Package aus `golang.org/x/sync` als Konvention
- `errgroup.WithContext` cancelt bei Fehler alle anderen Goroutines
- Goroutines selbst haben keine Eltern-Kind-Beziehung

**Weiterführende Links:**
- [Go errgroup Documentation](https://pkg.go.dev/golang.org/x/sync/errgroup)

</TabItem>
<TabItem value="java" label="Java">

```java
// Structured Concurrency (seit Java 21, Preview)
// Benötigt: import java.util.concurrent.StructuredTaskScope;
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Subtask<String> task1 = scope.fork(() -> fetchData("url1"));
    Subtask<Integer> task2 = scope.fork(() -> fetchData("url2"));

    scope.join();           // Wartet auf alle Tasks
    scope.throwIfFailed();  // Propagiert Fehler

    var result1 = task1.get();
    var result2 = task2.get();
}
// Alle Tasks sind hier garantiert beendet
```

**Besonderheiten:**
- `StructuredTaskScope` seit Java 21 (Preview, JEP 462)
- `ShutdownOnFailure` cancelt alle Tasks bei erstem Fehler
- `ShutdownOnSuccess` cancelt alle Tasks bei erstem Erfolg
- Tasks können ihren Scope nicht überleben (try-with-resources)

**Weiterführende Links:**
- [JEP 462 - Structured Concurrency](https://openjdk.org/jeps/462)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Structured Concurrency via coroutineScope
import kotlinx.coroutines.*

suspend fun fetchBoth(): Pair<String, String> = coroutineScope {
    val deferred1 = async { fetchData("url1") }
    val deferred2 = async { fetchData("url2") }

    Pair(deferred1.await(), deferred2.await())
}
// Alle Coroutines sind hier garantiert beendet

// supervisorScope: Fehler eines Kindes cancelt nicht die anderen
suspend fun fetchIndependent() = supervisorScope {
    val result1 = async { fetchData("url1") }
    val result2 = async { fetchData("url2") }
    // Fehler in result1 cancelt result2 nicht
}
```

**Besonderheiten:**
- Structured Concurrency ist Kernprinzip des Coroutine-Systems
- `coroutineScope` wartet auf alle Kind-Coroutines und propagiert Fehler
- `supervisorScope` isoliert Fehler einzelner Kinder
- `async`/`launch` innerhalb eines Scopes sind automatisch gebunden
- Kein `GlobalScope.launch` empfohlen (verletzt Structured Concurrency)

**Weiterführende Links:**
- [Kotlin Documentation - Structured Concurrency](https://kotlinlang.org/docs/coroutines-basics.html#structured-concurrency)

</TabItem>
<TabItem value="python" label="Python">

```python
# TaskGroup (seit Python 3.11)
import asyncio

async def fetch_both():
    async with asyncio.TaskGroup() as tg:
        task1 = tg.create_task(fetch_data("url1"))
        task2 = tg.create_task(fetch_data("url2"))
    # Alle Tasks sind hier garantiert beendet
    return task1.result(), task2.result()

# Bei Fehler werden alle anderen Tasks gecancelt
async def main():
    try:
        results = await fetch_both()
    except* ValueError as eg:
        # ExceptionGroup (seit Python 3.11)
        for exc in eg.exceptions:
            print(f"Fehler: {exc}")
```

**Besonderheiten:**
- `asyncio.TaskGroup` seit Python 3.11 für Structured Concurrency
- Tasks sind an den `async with`-Block gebunden
- `ExceptionGroup` und `except*` für Mehrfach-Fehlerbehandlung
- `trio` Library als Vorreiter für Structured Concurrency in Python

**Weiterführende Links:**
- [Python Documentation - TaskGroup](https://docs.python.org/3/library/asyncio-task.html#asyncio.TaskGroup)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Scoped Threads (seit Rust 1.63)
std::thread::scope(|s| {
    let t1 = s.spawn(|| fetch_data("url1"));
    let t2 = s.spawn(|| fetch_data("url2"));

    let result1 = t1.join().unwrap();
    let result2 = t2.join().unwrap();
    // Alle Threads sind hier garantiert beendet
});

// Tokio Scoped Tasks (async)
// Benötigt: tokio
tokio::task::LocalSet::new().run_until(async {
    let t1 = tokio::task::spawn_local(fetch_data("url1"));
    let t2 = tokio::task::spawn_local(fetch_data("url2"));
    let (r1, r2) = tokio::join!(t1, t2);
}).await;
```

**Besonderheiten:**
- `std::thread::scope` seit Rust 1.63 für Scoped Threads
- Threads können Referenzen aus dem Eltern-Scope borgen (Borrow Checker erzwingt Gültigkeit)
- Async: `tokio::join!` für parallele Ausführung, kein vollständiges Structured Concurrency
- Ownership-System erzwingt teilweise strukturelle Garantien

**Weiterführende Links:**
- [Rust Documentation - Scoped Threads](https://doc.rust-lang.org/std/thread/fn.scope.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Task Groups (seit Swift 5.5)
func fetchBoth() async throws -> (String, String) {
    try await withThrowingTaskGroup(of: String.self) { group in
        group.addTask { try await fetchData("url1") }
        group.addTask { try await fetchData("url2") }

        var results: [String] = []
        for try await result in group {
            results.append(result)
        }
        return (results[0], results[1])
    }
    // Alle Tasks sind hier garantiert beendet
}

// async let für implizite Task Groups
func fetchBothSimple() async throws -> (String, String) {
    async let result1 = fetchData("url1")
    async let result2 = fetchData("url2")
    return try await (result1, result2)
}
```

**Besonderheiten:**
- Structured Concurrency ist Kernprinzip von Swift Concurrency (seit Swift 5.5)
- `withTaskGroup` / `withThrowingTaskGroup` für explizite Task Groups
- `async let` als syntaktischer Zucker für parallele Ausführung
- Tasks sind automatisch an ihren Scope gebunden und werden bei Scope-Ende gecancelt

**Weiterführende Links:**
- [Swift Documentation - Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/#Structured-Concurrency)

</TabItem>
</Tabs>

## 14.3.12. Select / Multiplex

Mechanismus zum gleichzeitigen Warten auf mehrere nebenläufige Operationen, wobei mit der zuerst bereiten Operation fortgefahren wird. Ermöglicht Multiplexing über mehrere Channels, Futures oder asynchrone Operationen.

### Sprachen

<Tabs availableTabs={['ada', 'elixir', 'erlang', 'go', 'kotlin', 'rust', 'v']} yellowTabs={['d', 'julia', 'nim']}>
<TabItem value="ada" label="Ada">

```ada
-- Select Statement für Task-Entries
task Server is
   entry Request_A(Data : in Integer);
   entry Request_B(Data : in String);
end Server;

task body Server is
begin
   loop
      select
         accept Request_A(Data : in Integer) do
            Put_Line("Request A: " & Integer'Image(Data));
         end Request_A;
      or
         accept Request_B(Data : in String) do
            Put_Line("Request B: " & Data);
         end Request_B;
      or
         delay 5.0;
         Put_Line("Timeout nach 5 Sekunden");
         exit;
      end select;
   end loop;
end Server;
```

**Besonderheiten:**
- `select` Statement für Multiplexing über mehrere Task-Entries
- `or` für alternative Accept-Statements
- `delay` für Timeout-Klauseln
- `else` für nicht-blockierenden Select
- `terminate` Alternative für kontrolliertes Task-Ende

**Weiterführende Links:**
- [Ada Reference Manual - Select Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-9-7.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Select-ähnlich via receiveTimeout
// Benötigt: import std.concurrency;
// Benötigt: import core.time;

auto tid1 = spawn(&worker1);
auto tid2 = spawn(&worker2);

// Wartet auf erste Nachricht von beliebigem Sender
bool received = receiveTimeout(
    5.seconds,
    (int msg) {
        writeln("Int empfangen: ", msg);
    },
    (string msg) {
        writeln("String empfangen: ", msg);
    }
);

if (!received) {
    writeln("Timeout");
}
```

**Besonderheiten:**
- Kein natives `select` Statement
- `receiveTimeout` wartet auf Nachrichten verschiedener Typen
- Pattern Matching auf Nachrichtentypen
- Timeout-basiertes Warten möglich

**Weiterführende Links:**
- [D Phobos - std.concurrency](https://dlang.org/phobos/std_concurrency.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# receive mit Pattern Matching auf mehrere Nachrichten
receive do
  {:data, value} ->
    IO.puts("Daten empfangen: #{value}")
  {:error, reason} ->
    IO.puts("Fehler: #{reason}")
  :stop ->
    IO.puts("Stop-Signal empfangen")
after
  5000 ->
    IO.puts("Timeout nach 5 Sekunden")
end

# Task-basiertes Select
task1 = Task.async(fn -> fetch_data("url1") end)
task2 = Task.async(fn -> fetch_data("url2") end)

# Erste abgeschlossene Task abholen
case Task.yield_many([task1, task2], timeout: 5000) do
  [{^task1, {:ok, result}}, _] -> result
  [_, {^task2, {:ok, result}}] -> result
end
```

**Besonderheiten:**
- `receive` mit Pattern Matching über verschiedene Nachrichtentypen
- `after`-Klausel für Timeout
- `Task.yield_many` für Multiplexing über mehrere Tasks
- Basiert auf Erlang/BEAM Selective Receive

**Weiterführende Links:**
- [Elixir Documentation - Processes](https://elixir-lang.org/getting-started/processes.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% receive mit Pattern Matching auf mehrere Nachrichten
receive
    {data, Value} ->
        io:format("Daten empfangen: ~p~n", [Value]);
    {error, Reason} ->
        io:format("Fehler: ~p~n", [Reason]);
    stop ->
        io:format("Stop-Signal empfangen~n")
after
    5000 ->
        io:format("Timeout nach 5 Sekunden~n")
end.
```

**Besonderheiten:**
- `receive` mit Pattern Matching als Selective Receive
- Nachrichten werden in der Mailbox nach Muster gefiltert
- `after`-Klausel für Timeout
- Nicht-matchende Nachrichten bleiben in der Mailbox

**Weiterführende Links:**
- [Erlang Documentation - Receive](https://www.erlang.org/doc/reference_manual/expressions.html#receive)

</TabItem>
<TabItem value="go" label="Go">

```go
ch1 := make(chan string)
ch2 := make(chan int)

go func() { ch1 <- "Nachricht" }()
go func() { ch2 <- 42 }()

// select wartet auf den ersten bereiten Channel
select {
case msg := <-ch1:
    fmt.Println("Channel 1:", msg)
case num := <-ch2:
    fmt.Println("Channel 2:", num)
case <-time.After(5 * time.Second):
    fmt.Println("Timeout")
default:
    fmt.Println("Kein Channel bereit")
}
```

**Besonderheiten:**
- `select` Statement als Kernsprachfeature für Channel-Multiplexing
- Wählt zufällig bei mehreren gleichzeitig bereiten Channels
- `default`-Case für nicht-blockierendes Select
- `time.After` für Timeout-Pattern
- Kann sowohl Senden als auch Empfangen multiplexen

**Weiterführende Links:**
- [Go Documentation - Select](https://go.dev/tour/concurrency/5)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Select-ähnlich via Channel-Polling
ch1 = Channel{String}(1)
ch2 = Channel{Int}(1)

@async put!(ch1, "Nachricht")
@async put!(ch2, 42)

# Manuelle Select-Implementierung
function select(channels...; timeout=5.0)
    deadline = time() + timeout
    while time() < deadline
        for (i, ch) in enumerate(channels)
            if isready(ch)
                return i, take!(ch)
            end
        end
        sleep(0.001)
    end
    return 0, nothing  # Timeout
end
```

**Besonderheiten:**
- Kein natives `select` Statement
- `isready(ch)` zum Prüfen ob ein Channel Daten hat
- Select-Verhalten manuell über Polling implementierbar
- `@async` und `Channel` als Grundbausteine

**Weiterführende Links:**
- [Julia Documentation - Channels](https://docs.julialang.org/en/v1/base/parallel/#Base.Channel)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// select Expression für Coroutines
import kotlinx.coroutines.*
import kotlinx.coroutines.selects.select

val ch1 = Channel<String>()
val ch2 = Channel<Int>()

launch { ch1.send("Nachricht") }
launch { ch2.send(42) }

// select wartet auf den ersten bereiten Channel
val result = select {
    ch1.onReceive { value -> "Channel 1: $value" }
    ch2.onReceive { value -> "Channel 2: $value" }
    onTimeout(5000) { "Timeout" }
}
println(result)
```

**Besonderheiten:**
- `select` Expression als Teil des Coroutine-Frameworks
- `onReceive`, `onSend`, `onAwait` für verschiedene Operationen
- `onTimeout` für Timeout-Klausel
- Biased Selection: Wählt die erste Klausel wenn mehrere bereit sind

**Weiterführende Links:**
- [Kotlin Documentation - Select](https://kotlinlang.org/docs/select-expression.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Select-ähnlich via tryRecv auf mehreren Channels
var ch1: Channel[string]
var ch2: Channel[int]
open(ch1)
open(ch2)

# Polling-basiertes Select
proc selectChannels(): string =
  while true:
    let (ok1, msg1) = ch1.tryRecv()
    if ok1: return "Channel 1: " & msg1

    let (ok2, msg2) = ch2.tryRecv()
    if ok2: return "Channel 2: " & $msg2

    sleep(1)  # Kurz warten bevor erneut geprüft wird
```

**Besonderheiten:**
- Kein natives `select` Statement
- `tryRecv` für nicht-blockierendes Empfangen
- Select-Verhalten über Polling-Loop simulierbar
- Chronos-Library bietet erweiterte Async-Patterns

**Weiterführende Links:**
- [Nim Documentation - Channels](https://nim-lang.org/docs/channels_builtin.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// tokio::select! Makro (async)
// Benötigt: tokio
use tokio::sync::mpsc;

let (tx1, mut rx1) = mpsc::channel::<String>(1);
let (tx2, mut rx2) = mpsc::channel::<i32>(1);

tokio::select! {
    val = rx1.recv() => {
        println!("Channel 1: {:?}", val);
    }
    val = rx2.recv() => {
        println!("Channel 2: {:?}", val);
    }
    _ = tokio::time::sleep(Duration::from_secs(5)) => {
        println!("Timeout");
    }
}

// crossbeam::select! für synchrone Channels
// Benötigt: crossbeam-channel
crossbeam::select! {
    recv(rx1) -> msg => println!("Channel 1: {:?}", msg),
    recv(rx2) -> msg => println!("Channel 2: {:?}", msg),
    default(Duration::from_secs(5)) => println!("Timeout"),
}
```

**Besonderheiten:**
- `tokio::select!` Makro für async Channel-Multiplexing
- `crossbeam::select!` Makro für synchrone Channels
- Kein natives `select` in der Standardbibliothek
- `tokio::select!` unterstützt beliebige Futures, nicht nur Channels

**Weiterführende Links:**
- [Tokio Documentation - select!](https://docs.rs/tokio/latest/tokio/macro.select.html)

</TabItem>
<TabItem value="v" label="V">

```v
// select auf mehreren Channels
ch1 := chan string{cap: 1}
ch2 := chan int{cap: 1}

spawn fn [ch1] () { ch1 <- 'Nachricht' }()
spawn fn [ch2] () { ch2 <- 42 }()

// select wartet auf den ersten bereiten Channel
select {
    msg := <-ch1 {
        println('Channel 1: ${msg}')
    }
    num := <-ch2 {
        println('Channel 2: ${num}')
    }
    5 * time.second {
        println('Timeout')
    }
}
```

**Besonderheiten:**
- `select` Statement ähnlich wie Go
- Unterstützt Timeout-Klausel mit Zeitdauer
- Kann sowohl Senden als auch Empfangen multiplexen
- Ähnliche Syntax und Semantik wie Go's `select`

**Weiterführende Links:**
- [V Documentation - Concurrency](https://github.com/vlang/v/blob/master/doc/docs.md#channels)

</TabItem>
</Tabs>

