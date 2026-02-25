---
slug: /concurrency/concurrency-models
title: 14.3. Concurrency Models
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 14.3. Concurrency Models

Various concurrency models.

## 14.3.1. Coroutines

Lightweight, cooperative multitasking units that can voluntarily suspend their execution to yield control to other coroutines. Enable efficient asynchronous programming without thread overhead.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'julia', 'kotlin', 'lua', 'prolog', 'python', 'typescript']}>
<TabItem value="python" label="Python">

```python
# Coroutines (since Python 3.5)
import asyncio

async def coroutine_example():
    print("Coroutine starts")
    await asyncio.sleep(1)
    print("Coroutine continues")
    return "Result"

async def main():
    result = await coroutine_example()
    print(result)

asyncio.run(main())
```

**Special features:**
- async def for coroutine definition
- await for suspension and resumption
- asyncio.run() for execution

**Further reading:**
- [Python Documentation - Coroutines](https://docs.python.org/3/library/asyncio-task.html#coroutines)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Coroutines (since Kotlin 1.1)
import kotlinx.coroutines.*

suspend fun coroutineExample() {
    println("Coroutine starts")
    delay(1000)
    println("Coroutine continues")
}

fun main() = runBlocking {
    coroutineExample()
}
```

**Special features:**
- suspend functions for coroutines
- delay() for suspension
- runBlocking for coroutine execution

**Further reading:**
- [Kotlin Documentation - Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Coroutines (since Lua 5.0)
function coroutine_example()
    print("Coroutine starts")
    coroutine.yield()
    print("Coroutine continues")
end

local co = coroutine.create(coroutine_example)
coroutine.resume(co)
coroutine.resume(co)
```

**Special features:**
- coroutine.create() for coroutine creation
- coroutine.yield() for suspension
- coroutine.resume() for resumption

**Further reading:**
- [Lua Documentation - Coroutines](https://www.lua.org/manual/5.4/manual.html#2.6)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Coroutines (Unity, not part of standard C# language)
using System.Collections;
using UnityEngine;

public class CoroutineExample : MonoBehaviour {
    IEnumerator CoroutineExample() {
        Debug.Log("Coroutine starts");
        yield return new WaitForSeconds(1);
        Debug.Log("Coroutine continues");
    }
    
    void Start() {
        StartCoroutine(CoroutineExample());
    }
}
```

**Special features:**
- IEnumerator for coroutine definition
- yield return for suspension
- Unity-specific, not part of standard C# language

**Further reading:**
- [Unity Documentation - Coroutines](https://docs.unity3d.com/Manual/Coroutines.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generators as coroutines (since ES2015)
function* coroutineExample() {
    console.log("Coroutine starts");
    yield;
    console.log("Coroutine continues");
}

const co = coroutineExample();
co.next();
co.next();
```

**Special features:**
- Generators (function*) as coroutine implementation
- yield for suspension
- next() for resumption

**Further reading:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generators as coroutines (since ES2015)
function* coroutineExample(): Generator<void, void, unknown> {
    console.log("Coroutine starts");
    yield;
    console.log("Coroutine continues");
}

const co = coroutineExample();
co.next();
co.next();
```

**Special features:**
- Generators (function*) as coroutine implementation
- yield for suspension
- next() for resumption
- TypeScript provides type support for generators

**Further reading:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Engines as coroutines (SWI-Prolog)
coroutine_example :-
    engine_create(Return, (
        writeln('Coroutine starts'),
        engine_yield(intermediate value),
        writeln('Coroutine continues'),
        Return = 'Result'
    ), Engine),
    engine_next(Engine, V1),
    writeln(V1),                % intermediate value
    engine_next(Engine, V2),
    writeln(V2),                % Result
    engine_destroy(Engine).
```

**Special features:**
- `engine_create/3` creates a coroutine (Engine)
- `engine_yield/1` pauses and returns a value
- `engine_next/2` resumes the coroutine and receives the next value
- Engines are based on Prolog's backtracking mechanism
- `engine_destroy/1` releases resources

**Further reading:**
- [SWI-Prolog Documentation - Engines](https://www.swi-prolog.org/pldoc/man?section=engines)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Tasks as coroutines
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

**Special features:**
- `Task` is Julia's coroutine type
- Cooperative scheduling with `yield()`
- `Channel` for communication between coroutines
- Lightweight (no OS thread per task)

**Further reading:**
- [Julia Documentation - Tasks](https://docs.julialang.org/en/v1/manual/asynchronous-programming/)

</TabItem>
</Tabs>


## 14.3.2. Goroutines / Green Threads

Lightweight threads managed by the runtime system instead of the operating system. Enable efficient concurrency with low overhead through M:N threading model.

### Languages {#sprachen}

<Tabs availableTabs={['elixir', 'erlang', 'gleam', 'go', 'java', 'julia']}>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "time"
)

func goroutineExample() {
    fmt.Println("Goroutine running")
    time.Sleep(1 * time.Second)
    fmt.Println("Goroutine finished")
}

func main() {
    go goroutineExample()
    fmt.Println("Main thread")
    time.Sleep(2 * time.Second)
}
```

**Special features:**
- go keyword starts goroutine
- Managed by Go runtime
- M:N threading model (multiple goroutines per OS thread)

**Further reading:**
- [Go Documentation - Goroutines](https://go.dev/tour/concurrency/1)

</TabItem>
<TabItem value="java" label="Java">

```java
// Virtual Threads (since Java 21)
// Requires: import java.util.concurrent.Executors;

try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> {
        System.out.println("Virtual Thread running");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println("Virtual Thread finished");
    });
}
```

**Special features:**
- Virtual Threads since Java 21 as Green Threads
- Managed by JVM
- M:N threading model

**Further reading:**
- [Oracle Java Documentation - Virtual Threads](https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lightweight processes (green threads)
spawn(fun() ->
    io:format("Process running~n"),
    timer:sleep(1000),
    io:format("Process finished~n")
end).
```

**Special features:**
- spawn() creates lightweight process
- Managed by Erlang VM
- Millions of processes possible

**Further reading:**
- [Erlang Documentation - Processes](https://www.erlang.org/doc/reference_manual/processes.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lightweight processes (green threads)
spawn(fn ->
    IO.puts("Process running")
    Process.sleep(1000)
    IO.puts("Process finished")
end)
```

**Special features:**
- spawn() creates lightweight process
- Managed by BEAM VM
- Millions of processes possible

**Further reading:**
- [Elixir Documentation - Processes](https://elixir-lang.org/getting-started/processes.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// BEAM processes (green threads)
// Requires: import gleam/erlang/process
pub fn main() {
  process.start(fn() {
    io.println("Hello from a BEAM process!")
  }, True)
}
```

**Special features:**
- BEAM processes are lightweight green threads
- Thousands to millions of concurrent processes possible
- Each process has its own heap and GC
- Preemptive scheduling by BEAM VM

**Further reading:**
- [Gleam OTP Documentation](https://hexdocs.pm/gleam_otp/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Tasks are green threads
@sync begin
    for i in 1:10
        @async begin
            sleep(rand())
            println("Task $i on thread $(Threads.threadid())")
        end
    end
end
```

**Special features:**
- Julia tasks are lightweight (Green Threads)
- Since Julia 1.3, tasks can be mapped to OS threads
- M:N threading model (since Julia 1.7+)
- Cooperative scheduling within a thread

**Further reading:**
- [Julia Documentation - Asynchronous Programming](https://docs.julialang.org/en/v1/manual/asynchronous-programming/)

</TabItem>
</Tabs>


## 14.3.3. Virtual Threads

Lightweight threads managed by the runtime system and executed on a small number of OS threads. Enable efficient concurrency with low overhead.

### Languages {#sprachen}

<Tabs availableTabs={['java']}>
<TabItem value="java" label="Java">

```java
// Virtual Threads (since Java 21)
// Requires: import java.util.concurrent.Executors;

try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 10_000; i++) {
        int taskId = i;
        executor.submit(() -> {
            System.out.println("Virtual Thread " + taskId + " running");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
    }
}
```

**Special features:**
- Virtual Threads since Java 21 (JEP 444)
- Managed by JVM
- Millions of virtual threads possible
- Blocking I/O only blocks virtual thread, not OS thread

**Further reading:**
- [Oracle Java Documentation - Virtual Threads](https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html)

</TabItem>
</Tabs>


## 14.3.4. Isolates

Isolated execution environments with their own memory that do not share mutable data. Communication occurs through message passing, which prevents race conditions.

### Languages {#sprachen}

<Tabs availableTabs={['dart']}>
<TabItem value="dart" label="Dart">

```dart
// Isolates
import 'dart:isolate';

void isolateFunction(SendPort sendPort) {
    sendPort.send('Message from isolate');
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

**Special features:**
- Isolate.spawn() creates new isolate
- Message passing via SendPort/ReceivePort
- No shared memory

**Further reading:**
- [Dart Documentation - Isolates](https://dart.dev/guides/language/concurrency)

</TabItem>
</Tabs>


## 14.3.5. Actor Model

Concurrency model where actors are isolated units that communicate only through message passing. Each actor has a mailbox and processes messages sequentially.

### Languages {#sprachen}

<Tabs availableTabs={['elixir', 'erlang', 'gleam', 'scala', 'swift']}>
<TabItem value="erlang" label="Erlang">

```erlang
% Actor Model
-module(actor_example).
-export([start/0, loop/0]).

start() ->
    Pid = spawn(?MODULE, loop, []),
    Pid ! {message, "Hello"},
    Pid ! stop.

loop() ->
    receive
        {message, Msg} ->
            io:format("Received: ~p~n", [Msg]),
            loop();
        stop ->
            io:format("Actor finished~n")
    end.
```

**Special features:**
- spawn() creates actor (process)
- ! for message sending
- receive for message receiving
- Mailbox for each message

**Further reading:**
- [Erlang Documentation - Processes](https://www.erlang.org/doc/reference_manual/processes.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Actor Model
defmodule ActorExample do
    def start do
        pid = spawn(__MODULE__, :loop, [])
        send(pid, {:message, "Hello"})
        send(pid, :stop)
    end
    
    def loop do
        receive do
            {:message, msg} ->
                IO.puts("Received: #{msg}")
                loop()
            :stop ->
                IO.puts("Actor finished")
        end
    end
end
```

**Special features:**
- spawn() creates actor (process)
- send() for message sending
- receive for message receiving
- Mailbox for each message

**Further reading:**
- [Elixir Documentation - Processes](https://elixir-lang.org/getting-started/processes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Actor Model (Akka)
import akka.actor.{Actor, ActorSystem, Props}

class ActorExample extends Actor {
    def receive = {
        case msg: String =>
            println(s"Received: $msg")
        case "stop" =>
            println("Actor finished")
            context.stop(self)
    }
}

object Main extends App {
    val system = ActorSystem("ExampleSystem")
    val actor = system.actorOf(Props[ActorExample], "exampleActor")
    actor ! "Hello"
    actor ! "stop"
}
```

**Special features:**
- Akka for actor implementation
- ! for message sending
- receive for message handling
- ActorSystem for actor management

**Further reading:**
- [Akka Documentation - Actors](https://doc.akka.io/docs/akka/current/typed/actors.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Actor Model via OTP
// Requires: import gleam/otp/actor
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

**Special features:**
- Actor Model via BEAM/OTP
- Gleam OTP library provides type-safe actor framework
- Message passing between processes
- Supervision trees for fault tolerance

**Further reading:**
- [Gleam OTP Documentation](https://hexdocs.pm/gleam_otp/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Actor Model (since Swift 5.5)
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

// Usage (in async context)
let account = BankAccount()
await account.deposit(amount: 100)
let balance = await account.getBalance()
```

**Special features:**
- `actor` keyword defines an actor (since Swift 5.5)
- Actors automatically isolate their state
- Access to actor properties/methods requires `await`
- `@MainActor` for UI-related operations
- Actors are reference types

**Further reading:**
- [Swift Documentation - Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/#Actors)

</TabItem>
</Tabs>


## 14.3.6. Channels / Message Passing

Communication mechanism between threads/goroutines via channels. Enables safe data transfer without explicit locks through communication instead of shared memory.

### Languages {#sprachen}

<Tabs availableTabs={['d', 'erlang', 'gleam', 'go', 'julia', 'kotlin', 'nim', 'prolog', 'rust', 'v']}>
<TabItem value="go" label="Go">

```go
package main

import "fmt"

func main() {
    ch := make(chan string)
    
    go func() {
        ch <- "Message"
    }()
    
    msg := <-ch
    fmt.Println(msg)
}
```

**Special features:**
- `make(chan T)` creates channel
- `<-` for sending and receiving
- Blocks until data is available
- Buffered channels with `make(chan T, size)`

**Further reading:**
- [Go Documentation - Channels](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    
    thread::spawn(move || {
        tx.send("Message".to_string()).unwrap();
    });
    
    let msg = rx.recv().unwrap();
    println!("{}", msg);
}
```

**Special features:**
- mpsc::channel() creates channel
- send() for sending
- recv() for receiving (blocking)
- try_recv() for non-blocking receiving

**Further reading:**
- [Rust Book - Channels](https://doc.rust-lang.org/book/ch16-02-message-passing.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Channels (coroutines)
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking {
    val channel = Channel<String>()
    
    launch {
        channel.send("Message")
        channel.close()
    }
    
    for (msg in channel) {
        println(msg)
    }
}
```

**Special features:**
- `Channel<T>()` creates channel
- `send()` for sending
- `receive()` for receiving
- Part of coroutines system

**Further reading:**
- [Kotlin Documentation - Channels](https://kotlinlang.org/docs/channels.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Message Passing
// Requires: import std.concurrency;
// Requires: import std.stdio;

void worker() {
    // Receive messages
    while (true) {
        receive(
            (string msg) {
                writeln("Received: ", msg);
                if (msg == "quit") return;
            },
            (int num) {
                writeln("Number: ", num);
                ownerTid.send(num * 2);  // Send reply
            }
        );
    }
}

void main() {
    auto tid = spawn(&worker);
    tid.send(42);
    tid.send("hello");
    tid.send("quit");

    // Receive reply
    receive((int result) {
        writeln("Result: ", result);  // 84
    });
}
```

**Special features:**
- `std.concurrency` for actor-based message passing
- `spawn` creates new thread with its own message channel
- `send` / `receive` for type-safe message delivery
- No shared state between threads (Share Nothing)
- Pattern matching on message types

**Further reading:**
- [D Phobos - std.concurrency](https://dlang.org/phobos/std_concurrency.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Message Passing
Pid = spawn(fun() ->
    receive
        {msg, Text} ->
            io:format("Received: ~s~n", [Text]);
        stop ->
            ok
    end
end),

Pid ! {msg, "Hello"},
Pid ! stop.
```

**Special features:**
- `!` (bang operator) for message sending
- `receive` for message receiving
- Each process has its own mailbox
- Asynchronous message passing (non-blocking when sending)

**Further reading:**
- [Erlang Documentation - Processes](https://www.erlang.org/doc/reference_manual/processes.html)
</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Message Passing via Subjects
// Requires: import gleam/erlang/process
pub fn main() {
  let subject = process.new_subject()
  process.start(fn() {
    process.send(subject, "Message from child process")
  }, True)
  let message = process.receive(subject, 1000)
}
```

**Special features:**
- `Subject` as type-safe channel for message passing
- `process.send` and `process.receive` for communication
- Timeout-based receiving
- Type-safe through Gleam's type system

**Further reading:**
- [Gleam OTP Documentation](https://hexdocs.pm/gleam_otp/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Buffered channel
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
    println("Received: $val")
end

# Unbuffered channel
ch = Channel{String}(0)
@async put!(ch, "Hello")  # Blocks until someone reads
msg = take!(ch)  # "Hello"
```

**Special features:**
- `Channel{T}(size)` for typed, buffered channels
- `put!(ch, val)` for sending, `take!(ch)` for receiving
- Channels are iterable (for loop)
- Blocking when channel is full/empty

**Further reading:**
- [Julia Documentation - Channels](https://docs.julialang.org/en/v1/base/parallel/#Base.Channel)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: --threads:on
var chan: Channel[int]
open(chan)

proc producer() {.thread.} =
  for i in 1..5:
    chan.send(i)

proc consumer() {.thread.} =
  for i in 1..5:
    let msg = chan.recv()
    echo "Received: ", msg

var t1, t2: Thread[void]
createThread(t1, producer)
createThread(t2, consumer)
joinThreads(t1, t2)
close(chan)
```

**Special features:**
- `Channel[T]` for type-safe thread communication
- `send`/`recv` for blocking operations
- `tryRecv` for non-blocking receiving
- Channels must be managed with `open`/`close`

**Further reading:**
- [Nim Documentation - Channels](https://nim-lang.org/docs/channels_builtin.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- use_module(library(thread)).

% Create message queue
example_message_passing :-
    message_queue_create(Queue),
    
    % Producer thread
    thread_create((
        forall(between(1, 5, I), (
            thread_send_message(Queue, data(I)),
            format('Sent: ~w~n', [I])
        )),
        thread_send_message(Queue, done)
    ), Producer, []),
    
    % Consumer
    consume_messages(Queue),
    
    % Cleanup
    thread_join(Producer, _),
    message_queue_destroy(Queue).

consume_messages(Queue) :-
    thread_get_message(Queue, Msg),
    (   Msg == done
    ->  writeln('All messages received')
    ;   Msg = data(Value),
        format('Received: ~w~n', [Value]),
        consume_messages(Queue)
    ).
```

**Special features:**
- `message_queue_create/1` creates a named or anonymous message queue
- `thread_send_message/2` sends a message (non-blocking)
- `thread_get_message/2` receives a message (blocking)
- `thread_peek_message/2` checks if a message is available (non-blocking)
- Messages can be arbitrary Prolog terms

**Further reading:**
- [SWI-Prolog Documentation - Thread Communication](https://www.swi-prolog.org/pldoc/man?section=threadcom)

</TabItem>
<TabItem value="v" label="V">

```v
// Channels
ch := chan int{cap: 5}

// Send in a thread
spawn fn [ch] () {
    for i in 0 .. 5 {
        ch <- i
    }
    ch.close()
}()

// Receive
for {
    value := <-ch or { break }
    println(value)
}
```

**Special features:**
- `chan Type{cap: n}` for buffered channels
- `ch <- value` for sending
- `<-ch` for receiving
- `ch.close()` for closing
- Similar to Go channels

**Further reading:**
- [V Documentation - Channels](https://github.com/vlang/v/blob/master/doc/docs.md#channels)

</TabItem>
</Tabs>


## 14.3.7. Tasks (Ada-style)

Concurrency units in Ada that are automatically started when reaching the begin block. Tasks can wait for each other and communicate via rendezvous.

### Languages {#sprachen}

<Tabs availableTabs={['ada']}>
<TabItem value="ada" label="Ada">

```ada
with Ada.Text_IO; use Ada.Text_IO;

procedure Task_Example is
   task Worker;
   
   task body Worker is
   begin
      Put_Line("Task running");
      delay 1.0;
      Put_Line("Task finished");
   end Worker;
begin
   Put_Line("Main program");
   delay 2.0;
end Task_Example;
```

**Special features:**
- task declaration for task specification
- task body for task implementation
- Automatic start when reaching begin block
- Rendezvous for task communication

**Further reading:**
- [Ada Reference Manual - Tasks](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-9.html)

</TabItem>
</Tabs>


## 14.3.8. Protected Objects

Thread-safe objects in Ada that are automatically synchronized. Protected objects enable safe access to shared data without explicit locks.

### Languages {#sprachen}

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

**Special features:**
- protected for protected object declaration
- Automatic synchronization
- Procedures for exclusive access
- Functions for read access (can be executed in parallel)

**Further reading:**
- [Ada Reference Manual - Protected Objects](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-9-4.html)

</TabItem>
</Tabs>


## 14.3.9. Software Transactional Memory (STM)

Concurrency mechanism that enables atomic transactions for memory accesses. Similar to database transactions: either all changes are successfully applied or all are rolled back.

### Languages {#sprachen}

<Tabs availableTabs={['haskell', 'clojure']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- STM (since GHC 6.4)
import Control.Concurrent.STM

main = do
    account <- atomically $ newTVar 100
    atomically $ do
        current <- readTVar account
        writeTVar account (current + 50)
    balance <- atomically $ readTVar account
    print balance
```

**Special features:**
- STM monad for transactions
- atomically for atomic execution
- TVar for transactional variables
- Automatic rollback on conflicts

**Further reading:**
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

**Special features:**
- ref for transactional references
- dosync for transactions
- alter for changes
- Automatic retry on conflicts

**Further reading:**
- [Clojure Documentation - Refs](https://clojure.org/reference/refs)

</TabItem>
</Tabs>


## 14.3.10. Scoped Values

Thread-local values that are available within a scope and can be inherited by child threads. Enable safe passing of context information without explicit parameter passing.

### Languages {#sprachen}

<Tabs availableTabs={['java']}>
<TabItem value="java" label="Java">

```java
// Scoped Values (since Java 23)

private static final ScopedValue<String> CONTEXT = ScopedValue.newInstance();

public static void main(String[] args) {
    ScopedValue.runWhere(CONTEXT, "Value", () -> {
        System.out.println(CONTEXT.get()); // "Value"
    });
}
```

**Special features:**
- ScopedValue since Java 23 (JEP 481, Preview since Java 20)
- `runWhere()` for scope definition
- `get()` for value access
- Thread-safe and immutable within the scope

**Further reading:**
- [Oracle Java Documentation - ScopedValue](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/ScopedValue.html)

</TabItem>
</Tabs>

## 14.3.11. Structured Concurrency

Concurrency paradigm where the lifetime of concurrent operations is bound to a syntactic block. Concurrent tasks cannot outlive their parent scope, which prevents resource leaks and makes error handling predictable.

### Languages

<Tabs availableTabs={['java', 'kotlin', 'python', 'swift']} yellowTabs={['go', 'rust']}>
<TabItem value="go" label="Go">

```go
// Structured concurrency via errgroup
// Requires: import "golang.org/x/sync/errgroup"
g, ctx := errgroup.WithContext(context.Background())

g.Go(func() error {
    result1, err := fetchData(ctx, "url1")
    return err
})

g.Go(func() error {
    result2, err := fetchData(ctx, "url2")
    return err
})

// Waits for all goroutines, returns first error
if err := g.Wait(); err != nil {
    log.Fatal(err)
}
```

**Special features:**
- No native structured concurrency in the language
- `errgroup` package from `golang.org/x/sync` as convention
- `errgroup.WithContext` cancels all other goroutines on error
- Goroutines themselves have no parent-child relationship

**Further reading:**
- [Go errgroup Documentation](https://pkg.go.dev/golang.org/x/sync/errgroup)

</TabItem>
<TabItem value="java" label="Java">

```java
// Structured Concurrency (since Java 21, Preview)
// Requires: import java.util.concurrent.StructuredTaskScope;
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Subtask<String> task1 = scope.fork(() -> fetchData("url1"));
    Subtask<Integer> task2 = scope.fork(() -> fetchData("url2"));

    scope.join();           // Waits for all tasks
    scope.throwIfFailed();  // Propagates errors

    var result1 = task1.get();
    var result2 = task2.get();
}
// All tasks are guaranteed to be finished here
```

**Special features:**
- `StructuredTaskScope` since Java 21 (Preview, JEP 462)
- `ShutdownOnFailure` cancels all tasks on first error
- `ShutdownOnSuccess` cancels all tasks on first success
- Tasks cannot outlive their scope (try-with-resources)

**Further reading:**
- [JEP 462 - Structured Concurrency](https://openjdk.org/jeps/462)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Structured concurrency via coroutineScope
import kotlinx.coroutines.*

suspend fun fetchBoth(): Pair<String, String> = coroutineScope {
    val deferred1 = async { fetchData("url1") }
    val deferred2 = async { fetchData("url2") }

    Pair(deferred1.await(), deferred2.await())
}
// All coroutines are guaranteed to be finished here

// supervisorScope: error of one child does not cancel the others
suspend fun fetchIndependent() = supervisorScope {
    val result1 = async { fetchData("url1") }
    val result2 = async { fetchData("url2") }
    // Error in result1 does not cancel result2
}
```

**Special features:**
- Structured concurrency is core principle of coroutine system
- `coroutineScope` waits for all child coroutines and propagates errors
- `supervisorScope` isolates errors of individual children
- `async`/`launch` within a scope are automatically bound
- No `GlobalScope.launch` recommended (violates structured concurrency)

**Further reading:**
- [Kotlin Documentation - Structured Concurrency](https://kotlinlang.org/docs/coroutines-basics.html#structured-concurrency)

</TabItem>
<TabItem value="python" label="Python">

```python
# TaskGroup (since Python 3.11)
import asyncio

async def fetch_both():
    async with asyncio.TaskGroup() as tg:
        task1 = tg.create_task(fetch_data("url1"))
        task2 = tg.create_task(fetch_data("url2"))
    # All tasks are guaranteed to be finished here
    return task1.result(), task2.result()

# On error, all other tasks are cancelled
async def main():
    try:
        results = await fetch_both()
    except* ValueError as eg:
        # ExceptionGroup (since Python 3.11)
        for exc in eg.exceptions:
            print(f"Error: {exc}")
```

**Special features:**
- `asyncio.TaskGroup` since Python 3.11 for structured concurrency
- Tasks are bound to the `async with` block
- `ExceptionGroup` and `except*` for multiple error handling
- `trio` library as pioneer for structured concurrency in Python

**Further reading:**
- [Python Documentation - TaskGroup](https://docs.python.org/3/library/asyncio-task.html#asyncio.TaskGroup)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Scoped threads (since Rust 1.63)
std::thread::scope(|s| {
    let t1 = s.spawn(|| fetch_data("url1"));
    let t2 = s.spawn(|| fetch_data("url2"));

    let result1 = t1.join().unwrap();
    let result2 = t2.join().unwrap();
    // All threads are guaranteed to be finished here
});

// Tokio scoped tasks (async)
// Requires: tokio
tokio::task::LocalSet::new().run_until(async {
    let t1 = tokio::task::spawn_local(fetch_data("url1"));
    let t2 = tokio::task::spawn_local(fetch_data("url2"));
    let (r1, r2) = tokio::join!(t1, t2);
}).await;
```

**Special features:**
- `std::thread::scope` since Rust 1.63 for scoped threads
- Threads can borrow references from parent scope (borrow checker enforces validity)
- Async: `tokio::join!` for parallel execution, no complete structured concurrency
- Ownership system enforces partial structural guarantees

**Further reading:**
- [Rust Documentation - Scoped Threads](https://doc.rust-lang.org/std/thread/fn.scope.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Task groups (since Swift 5.5)
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
    // All tasks are guaranteed to be finished here
}

// async let for implicit task groups
func fetchBothSimple() async throws -> (String, String) {
    async let result1 = fetchData("url1")
    async let result2 = fetchData("url2")
    return try await (result1, result2)
}
```

**Special features:**
- Structured concurrency is core principle of Swift concurrency (since Swift 5.5)
- `withTaskGroup` / `withThrowingTaskGroup` for explicit task groups
- `async let` as syntactic sugar for parallel execution
- Tasks are automatically bound to their scope and cancelled at scope end

**Further reading:**
- [Swift Documentation - Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/#Structured-Concurrency)

</TabItem>
</Tabs>

## 14.3.12. Select / Multiplex

Mechanism for simultaneously waiting on multiple concurrent operations, proceeding with the first ready operation. Enables multiplexing over multiple channels, futures, or asynchronous operations.

### Languages

<Tabs availableTabs={['ada', 'elixir', 'erlang', 'go', 'kotlin', 'rust', 'v']} yellowTabs={['d', 'julia', 'nim']}>
<TabItem value="ada" label="Ada">

```ada
-- Select statement for task entries
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
         Put_Line("Timeout after 5 seconds");
         exit;
      end select;
   end loop;
end Server;
```

**Special features:**
- `select` statement for multiplexing over multiple task entries
- `or` for alternative accept statements
- `delay` for timeout clauses
- `else` for non-blocking select
- `terminate` alternative for controlled task end

**Further reading:**
- [Ada Reference Manual - Select Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-9-7.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Select-like via receiveTimeout
// Requires: import std.concurrency;
// Requires: import core.time;

auto tid1 = spawn(&worker1);
auto tid2 = spawn(&worker2);

// Waits for first message from any sender
bool received = receiveTimeout(
    5.seconds,
    (int msg) {
        writeln("Int received: ", msg);
    },
    (string msg) {
        writeln("String received: ", msg);
    }
);

if (!received) {
    writeln("Timeout");
}
```

**Special features:**
- No native `select` statement
- `receiveTimeout` waits for messages of different types
- Pattern matching on message types
- Timeout-based waiting possible

**Further reading:**
- [D Phobos - std.concurrency](https://dlang.org/phobos/std_concurrency.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# receive with pattern matching on multiple messages
receive do
  {:data, value} ->
    IO.puts("Data received: #{value}")
  {:error, reason} ->
    IO.puts("Error: #{reason}")
  :stop ->
    IO.puts("Stop signal received")
after
  5000 ->
    IO.puts("Timeout after 5 seconds")
end

# Task-based select
task1 = Task.async(fn -> fetch_data("url1") end)
task2 = Task.async(fn -> fetch_data("url2") end)

# Pick up first completed task
case Task.yield_many([task1, task2], timeout: 5000) do
  [{^task1, {:ok, result}}, _] -> result
  [_, {^task2, {:ok, result}}] -> result
end
```

**Special features:**
- `receive` with pattern matching over different message types
- `after` clause for timeout
- `Task.yield_many` for multiplexing over multiple tasks
- Based on Erlang/BEAM selective receive

**Further reading:**
- [Elixir Documentation - Processes](https://elixir-lang.org/getting-started/processes.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% receive with pattern matching on multiple messages
receive
    {data, Value} ->
        io:format("Data received: ~p~n", [Value]);
    {error, Reason} ->
        io:format("Error: ~p~n", [Reason]);
    stop ->
        io:format("Stop signal received~n")
after
    5000 ->
        io:format("Timeout after 5 seconds~n")
end.
```

**Special features:**
- `receive` with pattern matching as selective receive
- Messages are filtered in mailbox by pattern
- `after` clause for timeout
- Non-matching messages remain in mailbox

**Further reading:**
- [Erlang Documentation - Receive](https://www.erlang.org/doc/reference_manual/expressions.html#receive)

</TabItem>
<TabItem value="go" label="Go">

```go
ch1 := make(chan string)
ch2 := make(chan int)

go func() { ch1 <- "Message" }()
go func() { ch2 <- 42 }()

// select waits for first ready channel
select {
case msg := <-ch1:
    fmt.Println("Channel 1:", msg)
case num := <-ch2:
    fmt.Println("Channel 2:", num)
case <-time.After(5 * time.Second):
    fmt.Println("Timeout")
default:
    fmt.Println("No channel ready")
}
```

**Special features:**
- `select` statement as core language feature for channel multiplexing
- Randomly selects when multiple channels are simultaneously ready
- `default` case for non-blocking select
- `time.After` for timeout pattern
- Can multiplex both sending and receiving

**Further reading:**
- [Go Documentation - Select](https://go.dev/tour/concurrency/5)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Select-like via channel polling
ch1 = Channel{String}(1)
ch2 = Channel{Int}(1)

@async put!(ch1, "Message")
@async put!(ch2, 42)

# Manual select implementation
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

**Special features:**
- No native `select` statement
- `isready(ch)` to check if a channel has data
- Select behavior manually implementable via polling
- `@async` and `Channel` as building blocks

**Further reading:**
- [Julia Documentation - Channels](https://docs.julialang.org/en/v1/base/parallel/#Base.Channel)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// select expression for coroutines
import kotlinx.coroutines.*
import kotlinx.coroutines.selects.select

val ch1 = Channel<String>()
val ch2 = Channel<Int>()

launch { ch1.send("Message") }
launch { ch2.send(42) }

// select waits for first ready channel
val result = select {
    ch1.onReceive { value -> "Channel 1: $value" }
    ch2.onReceive { value -> "Channel 2: $value" }
    onTimeout(5000) { "Timeout" }
}
println(result)
```

**Special features:**
- `select` expression as part of coroutine framework
- `onReceive`, `onSend`, `onAwait` for different operations
- `onTimeout` for timeout clause
- Biased selection: selects first clause when multiple are ready

**Further reading:**
- [Kotlin Documentation - Select](https://kotlinlang.org/docs/select-expression.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Select-like via tryRecv on multiple channels
var ch1: Channel[string]
var ch2: Channel[int]
open(ch1)
open(ch2)

# Polling-based select
proc selectChannels(): string =
  while true:
    let (ok1, msg1) = ch1.tryRecv()
    if ok1: return "Channel 1: " & msg1

    let (ok2, msg2) = ch2.tryRecv()
    if ok2: return "Channel 2: " & $msg2

    sleep(1)  # Brief wait before checking again
```

**Special features:**
- No native `select` statement
- `tryRecv` for non-blocking receiving
- Select behavior simulatible via polling loop
- Chronos library provides extended async patterns

**Further reading:**
- [Nim Documentation - Channels](https://nim-lang.org/docs/channels_builtin.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// tokio::select! macro (async)
// Requires: tokio
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

// crossbeam::select! for synchronous channels
// Requires: crossbeam-channel
crossbeam::select! {
    recv(rx1) -> msg => println!("Channel 1: {:?}", msg),
    recv(rx2) -> msg => println!("Channel 2: {:?}", msg),
    default(Duration::from_secs(5)) => println!("Timeout"),
}
```

**Special features:**
- `tokio::select!` macro for async channel multiplexing
- `crossbeam::select!` macro for synchronous channels
- No native `select` in standard library
- `tokio::select!` supports arbitrary futures, not just channels

**Further reading:**
- [Tokio Documentation - select!](https://docs.rs/tokio/latest/tokio/macro.select.html)

</TabItem>
<TabItem value="v" label="V">

```v
// select on multiple channels
ch1 := chan string{cap: 1}
ch2 := chan int{cap: 1}

spawn fn [ch1] () { ch1 <- 'Message' }()
spawn fn [ch2] () { ch2 <- 42 }()

// select waits for first ready channel
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

**Special features:**
- `select` statement similar to Go
- Supports timeout clause with duration
- Can multiplex both sending and receiving
- Similar syntax and semantics to Go's `select`

**Further reading:**
- [V Documentation - Concurrency](https://github.com/vlang/v/blob/master/doc/docs.md#channels)

</TabItem>
</Tabs>

