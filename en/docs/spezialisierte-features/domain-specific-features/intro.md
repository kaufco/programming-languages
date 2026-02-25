---
slug: /spezialisierte-features/domain-specific-features
title: 19.1. Domain-Specific Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 19.1. Domain-Specific Features

LINQ, Reactive Programming, Event-Driven and Stream Processing.

## 19.1.1. Database Query Languages (LINQ, etc.)

Language-integrated query languages that allow database queries to be formulated directly in the programming language without having to use separate SQL strings.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'fsharp', 'vbnet']} orangeTabs={['kotlin', 'scala']}>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System.Linq;
var products = from p in db.Products
               where p.Price > 100
               orderby p.Name
               select new { p.Name, p.Price };

// Alternative method syntax
var products2 = db.Products
    .Where(p => p.Price > 100)
    .OrderBy(p => p.Name)
    .Select(p => new { p.Name, p.Price });
```

**Special features:**
- LINQ (Language Integrated Query) since .NET 3.5 / C# 3.0
- Supports both query syntax and method syntax
- Can be applied to various data sources (LINQ to Objects, LINQ to SQL, LINQ to Entities, etc.)
- Type-safe queries at compile time

**Further reading:**
- [C# LINQ Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Query Expressions
let products = query {
    for p in db.Products do
    where (p.Price > 100)
    sortBy p.Name
    select {| Name = p.Name; Price = p.Price |}
}
```

**Special features:**
- Query Expressions since F# 3.0
- Integrated into the language with `query { }` Computation Expression
- Type-safe queries
- Supports LINQ-compatible data sources

**Further reading:**
- [F# Query Expressions Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/query-expressions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Exposed DSL
val products = Products
    .select { Products.name to Products.price }
    .where { Products.price greater 100 }
    .orderBy(Products.name)
    .map { it[Products.name] to it[Products.price] }

// Ktorm DSL
val products2 = database
    .from(Products)
    .select(Products.name, Products.price)
    .where { Products.price gt 100 }
    .orderBy(Products.name.asc())
```

**Special features:**
- Exposed and Ktorm provide DSLs for database queries
- Type-safe queries at compile time
- No language-integrated query syntax like LINQ, but library DSLs

**Further reading:**
- [Kotlin Exposed Documentation](https://github.com/JetBrains/Exposed)
- [Ktorm Documentation](https://www.ktorm.org/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Slick DSL
val products = for {
  p <- Products if p.price > 100
} yield (p.name, p.price)

// Quill
val products2 = quote {
  query[Product]
    .filter(_.price > 100)
    .map(p => (p.name, p.price))
}
```

**Special features:**
- Slick and Quill provide DSLs for database queries
- Type-safe queries at compile time
- Quill uses compile-time code generation for type safety
- No language-integrated query syntax, but library DSLs

**Further reading:**
- [Slick Documentation](https://scala-slick.org/)
- [Quill Documentation](https://getquill.io/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Required: Imports System.Linq
Dim products = From p In db.Products
               Where p.Price > 100
               Order By p.Name
               Select New With {p.Name, p.Price}

' Alternative method syntax
Dim products2 = db.Products.
    Where(Function(p) p.Price > 100).
    OrderBy(Function(p) p.Name).
    Select(Function(p) New With {p.Name, p.Price})
```

**Special features:**
- LINQ (Language Integrated Query) since .NET 3.5 / VB.NET 9.0
- Supports both query syntax and method syntax
- Can be applied to various data sources
- Type-safe queries at compile time

**Further reading:**
- [VB.NET LINQ Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/linq/)

</TabItem>
</Tabs>


## 19.1.2. Reactive Programming

### Reactive Programming


Programming paradigm that works with asynchronous data streams and the propagation of changes. Enables declarative processing of events and data streams through Observable patterns.


<Tabs availableTabs={['csharp', 'dart', 'go', 'java', 'javascript', 'kotlin', 'python', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System.Reactive.Linq;
var observable = Observable
    .Range(1, 10)
    .Where(x => x % 2 == 0)
    .Select(x => x * 2);

observable.Subscribe(
    onNext: x => Console.WriteLine($"Wert: {x}"),
    onError: ex => Console.WriteLine($"Fehler: {ex}"),
    onCompleted: () => Console.WriteLine("Abgeschlossen")
);
```

**Special features:**
- Reactive Extensions (Rx.NET) available as a library
- Supports Observable pattern with LINQ-like operators
- Integrated with async/await

**Further reading:**
- [Rx.NET Documentation](https://github.com/dotnet/reactive)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Required: import 'package:rxdart/rxdart.dart';
final stream = Stream.fromIterable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .where((x) => x % 2 == 0)
    .map((x) => x * 2);

stream.listen(
    (value) => print('Wert: $value'),
    onError: (error) => print('Fehler: $error'),
    onDone: () => print('Abgeschlossen')
);
```

**Special features:**
- RxDart extends Dart Streams with ReactiveX operators
- Dart Streams as the basis for Reactive Programming
- Integrated with async/await

**Further reading:**
- [RxDart Documentation](https://pub.dev/packages/rxdart)

</TabItem>
<TabItem value="go" label="Go">

```go
// Required: github.com/reactivex/rxgo/v2
observable := rxgo.Just(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)().
    Filter(func(item interface{}) bool {
        return item.(int)%2 == 0
    }).
    Map(func(_ context.Context, item interface{}) (interface{}, error) {
        return item.(int) * 2, nil
    })

ch := observable.Observe()
for item := range ch {
    if item.Error() {
        fmt.Printf("Fehler: %v\n", item.E)
    } else {
        fmt.Printf("Wert: %v\n", item.V)
    }
}
```

**Special features:**
- reactivex-go available as a library
- Uses Go Channels for streams
- Type assertions required

**Further reading:**
- [reactivex-go Documentation](https://github.com/ReactiveX/RxGo)

</TabItem>
<TabItem value="java" label="Java">

```java
// Required: io.reactivex.rxjava3:rxjava
Observable.range(1, 10)
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .subscribe(
        x -> System.out.println("Wert: " + x),
        error -> System.out.println("Fehler: " + error),
        () -> System.out.println("Abgeschlossen")
    );
```

**Special features:**
- RxJava available as a library
- Supports Observable, Flowable, Single, Completable, Maybe
- Integrated with Java Streams API

**Further reading:**
- [RxJava Documentation](https://github.com/ReactiveX/RxJava)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Required: rxjs
import { range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observable = range(1, 10).pipe(
    filter(x => x % 2 === 0),
    map(x => x * 2)
);

observable.subscribe({
    next: x => console.log(`Wert: ${x}`),
    error: err => console.log(`Fehler: ${err}`),
    complete: () => console.log('Abgeschlossen')
});
```

**Special features:**
- RxJS available as a library
- Supports Observables, Subjects, Operators
- Integrated with Promises and async/await

**Further reading:**
- [RxJS Documentation](https://rxjs.dev/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Required: io.reactivex.rxjava3:rxkotlin
Observable.range(1, 10)
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .subscribe(
        { x -> println("Wert: $x") },
        { error -> println("Fehler: $error") },
        { println("Abgeschlossen") }
    )
```

**Special features:**
- RxKotlin extends RxJava with Kotlin-specific extensions
- Uses RxJava as the basis
- Integrated with Kotlin Coroutines

**Further reading:**
- [RxKotlin Documentation](https://github.com/ReactiveX/RxKotlin)

</TabItem>
<TabItem value="python" label="Python">

```python
# Required: rx
from rx import range as rx_range
from rx import operators as ops

observable = rx_range(1, 11).pipe(
    ops.filter(lambda x: x % 2 == 0),
    ops.map(lambda x: x * 2)
)

observable.subscribe(
    on_next=lambda x: print(f"Wert: {x}"),
    on_error=lambda err: print(f"Fehler: {err}"),
    on_completed=lambda: print("Abgeschlossen")
)
```

**Special features:**
- RxPy available as a library
- Supports Observable pattern with operators
- Integrated with asyncio

**Further reading:**
- [RxPy Documentation](https://github.com/ReactiveX/RxPY)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Required: rxrust
use rxrust::prelude::*;

observable::from_iter(1..=10)
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2)
    .subscribe(
        |x| println!("Wert: {}", x),
        |err| println!("Fehler: {:?}", err),
        || println!("Abgeschlossen")
    );
```

**Special features:**
- rxrust available as a library
- Type-safe through Rust's type system
- Zero-cost abstractions

**Further reading:**
- [rxrust Documentation](https://github.com/rxrust/rxrust)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Required: io.reactivex.rxjava3:rxscala
Observable.range(1, 10)
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .subscribe(
        x => println(s"Wert: $x"),
        error => println(s"Fehler: $error"),
        () => println("Abgeschlossen")
    )
```

**Special features:**
- RxScala extends RxJava with Scala-specific extensions
- Uses RxJava as the basis
- Integrated with Scala Futures

**Further reading:**
- [RxScala Documentation](https://github.com/ReactiveX/RxScala)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Required: RxSwift
import RxSwift

Observable.range(start: 1, count: 10)
    .filter { $0 % 2 == 0 }
    .map { $0 * 2 }
    .subscribe(
        onNext: { x in print("Wert: \(x)") },
        onError: { error in print("Fehler: \(error)") },
        onCompleted: { print("Abgeschlossen") }
    )
```

**Special features:**
- RxSwift available as a library
- Supports Observable, Subject, Driver, Signal
- Integrated with Swift async/await

**Further reading:**
- [RxSwift Documentation](https://github.com/ReactiveX/RxSwift)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Required: rxjs
import { range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observable = range(1, 10).pipe(
    filter(x => x % 2 === 0),
    map(x => x * 2)
);

observable.subscribe({
    next: x => console.log(`Wert: ${x}`),
    error: err => console.log(`Fehler: ${err}`),
    complete: () => console.log('Abgeschlossen')
});
```

**Special features:**
- RxJS available as a library
- Supports Observables, Subjects, Operators
- Integrated with Promises and async/await
- Type-safe through TypeScript's type system

**Further reading:**
- [RxJS Documentation](https://rxjs.dev/)

</TabItem>
</Tabs>



---

### Functional Reactive Programming (FRP)


Combination of functional programming and reactive data streams. FRP treats time-varying values as continuous signals and enables declarative description of reactive systems with functional transformations.


<Tabs availableTabs={['elm', 'fsharp', 'haskell', 'purescript', 'scala']}>
<TabItem value="elm" label="Elm">

```elm
import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

type Msg = Increment | Decrement

update : Msg -> Int -> Int
update msg model =
    case msg of
        Increment -> model + 1
        Decrement -> model - 1

view : Int -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]
```

**Special features:**
- FRP is a fundamental language feature in Elm
- Model-View-Update architecture as FRP implementation
- Pure functions without side effects
- Automatic event handling by the runtime

**Further reading:**
- [Elm Documentation](https://guide.elm-lang.org/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Required: FSharp.Control.Reactive or similar library
open System
open FSharp.Control.Reactive

let source = Observable.interval (TimeSpan.FromSeconds(1.0))
let mapped = source |> Observable.map (fun x -> x * 2)
let filtered = mapped |> Observable.filter (fun x -> x % 4 = 0)

filtered
|> Observable.subscribe (fun x -> printfn "Wert: %d" x)
|> ignore
```

**Special features:**
- FSharp.Control.Reactive available as a library
- Uses F# pipeline operators for functional composition
- Integrated with .NET Reactive Extensions
- Functional transformations over Observable streams

**Further reading:**
- [FSharp.Control.Reactive Documentation](https://github.com/fsprojects/FSharp.Control.Reactive)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Required: reactive-banana
import Reactive.Banana
import Reactive.Banana.Combinators

-- Events and Behaviors as building blocks
counter :: Event Int -> Behavior Int
counter eChange = accumB 0 ((+) <$> eChange)

-- Functional transformations
doubled :: Behavior Int -> Behavior Int
doubled = fmap (* 2)

-- Event combination
merged :: Event a -> Event a -> Event a
merged = unionWith const
```

**Special features:**
- Libraries: reactive-banana, reflex, yampa
- Pure functional transformations over Events (discrete) and Behaviors (time-continuous)
- Type-safe through Haskell's type system
- Push- and pull-based implementations available

**Further reading:**
- [Reactive-Banana Documentation](https://wiki.haskell.org/Reactive-banana)

</TabItem>

<TabItem value="purescript" label="PureScript">

```purescript
-- Required: purescript-event
import Control.Event.Handler (EventHandler)
import Data.Maybe (Maybe(..))

type Model = Int

data Msg = Increment | Decrement

update :: Msg -> Model -> Model
update Increment model = model + 1
update Decrement model = model - 1

-- Event handler composition
handleEvent :: EventHandler Msg -> Model -> EventHandler Model
handleEvent msgHandler model = \msg -> 
    Just (update msg model)
```

**Special features:**
- Various FRP libraries available (purescript-event, purescript-signal, etc.)
- Pure functional transformations
- Type-safe through PureScript's type system
- Integrated with functional UI frameworks

**Further reading:**
- [PureScript Documentation](https://www.purescript.org/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Required: com.github.julien-truffaut:monocle or similar FRP library
import cats.effect.IO
import fs2.Stream

val source: Stream[IO, Int] = Stream.range(1, 11)
val mapped: Stream[IO, Int] = source.map(_ * 2)
val filtered: Stream[IO, Int] = mapped.filter(_ % 4 == 0)

filtered.evalMap(x => IO(println(s"Wert: $x"))).compile.drain.unsafeRunSync()
```

**Special features:**
- FS2, Monix and other FRP libraries available
- Functional stream transformations
- Type-safe through Scala's type system
- Integrated with Cats Effect for functional effects

**Further reading:**
- [FS2 Documentation](https://fs2.io/)
- [Monix Documentation](https://monix.io/)

</TabItem>
</Tabs>


## 19.1.3. Event-Driven Programming

Programming paradigm in which program flow is controlled by events. The code reacts to incoming events instead of following a linear execution flow.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'rust', 'typescript']} yellowTabs={['java']} orangeTabs={['go', 'python']}>
<TabItem value="csharp" label="C#">

```csharp
// Events as a language feature
public class EventPublisher
{
    public event EventHandler<string> OnMessage;
    
    public void Publish(string message)
    {
        OnMessage?.Invoke(this, message);
    }
}

var publisher = new EventPublisher();
publisher.OnMessage += (sender, msg) => Console.WriteLine($"Nachricht: {msg}");
publisher.Publish("Hallo");
```

**Special features:**
- Events as a language feature since C# 1.0
- Event handlers with `+=` and `-=` operators
- Null-conditional operator `?.` for safe event invocation
- Supports multicast delegates

**Further reading:**
- [C# Events Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Channels for event communication
type Event struct {
    Type    string
    Message string
}

eventChan := make(chan Event, 10)

// Event producer
go func() {
    eventChan <- Event{Type: "message", Message: "Hallo"}
}()

// Event consumer
go func() {
    for event := range eventChan {
        fmt.Printf("Event: %s - %s\n", event.Type, event.Message)
    }
}()
```

**Special features:**
- Channels as primitive event mechanism
- Goroutines for asynchronous event processing
- Select statement for event multiplexing
- No built-in events, but channel-based patterns

**Further reading:**
- [Go Channels Documentation](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="java" label="Java">

```java
// Event listener pattern
import java.util.*;

interface EventListener {
    void onEvent(String event);
}

class EventPublisher {
    private List<EventListener> listeners = new ArrayList<>();
    
    public void addListener(EventListener listener) {
        listeners.add(listener);
    }
    
    public void publish(String event) {
        for (EventListener listener : listeners) {
            listener.onEvent(event);
        }
    }
}

EventPublisher publisher = new EventPublisher();
publisher.addListener(event -> System.out.println("Nachricht: " + event));
publisher.publish("Hallo");
```

**Special features:**
- Event listener pattern as standard implementation
- Various event frameworks available (JavaFX Events, Swing Events, etc.)
- Lambda expressions for event handlers since Java 8
- No built-in events as a language feature

**Further reading:**
- [Java Event Handling](https://docs.oracle.com/javase/tutorial/uiswing/events/index.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// EventEmitter pattern
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}

const emitter = new EventEmitter();
emitter.on('message', (msg) => console.log(`Nachricht: ${msg}`));
emitter.emit('message', 'Hallo');
```

**Special features:**
- EventEmitter pattern widely used (Node.js EventEmitter, DOM Events)
- Callback-based event handlers
- DOM Events as built-in event system
- Asynchronous event processing through event loop

**Further reading:**
- [MDN Web Docs - Events](https://developer.mozilla.org/en-US/docs/Web/API/Event)

</TabItem>
<TabItem value="python" label="Python">

```python
# Event handler pattern
class EventEmitter:
    def __init__(self):
        self._events = {}
    
    def on(self, event, callback):
        if event not in self._events:
            self._events[event] = []
        self._events[event].append(callback)
    
    def emit(self, event, data):
        if event in self._events:
            for callback in self._events[event]:
                callback(data)

emitter = EventEmitter()
emitter.on('message', lambda msg: print(f"Nachricht: {msg}"))
emitter.emit('message', 'Hallo')
```

**Special features:**
- Event handler pattern as standard implementation
- asyncio Events for asynchronous event processing
- Various event libraries available
- No built-in events as a language feature

**Further reading:**
- [Python asyncio Events](https://docs.python.org/3/library/asyncio-sync.html#asyncio.Event)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Event channel pattern
use std::sync::mpsc;

#[derive(Clone)]
enum Event {
    Message(String),
}

let (tx, rx) = mpsc::channel();

// Event producer
tx.send(Event::Message("Hallo".to_string())).unwrap();

// Event consumer
match rx.recv() {
    Ok(Event::Message(msg)) => println!("Nachricht: {}", msg),
    Err(e) => println!("Fehler: {}", e),
}
```

**Special features:**
- Channels (mpsc) for event communication
- Type-safe events through enums
- Various event libraries available (tokio, async-std, etc.)
- Ownership-based event processing

**Further reading:**
- [Rust Channels Documentation](https://doc.rust-lang.org/std/sync/mpsc/index.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// EventEmitter pattern with types
type EventMap = {
    message: string;
    error: Error;
};

class EventEmitter<T extends EventMap> {
    private _events: { [K in keyof T]?: Array<(data: T[K]) => void> } = {};
    
    on<K extends keyof T>(event: K, callback: (data: T[K]) => void) {
        if (!this._events[event]) {
            this._events[event] = [];
        }
        this._events[event]!.push(callback);
    }
    
    emit<K extends keyof T>(event: K, data: T[K]) {
        if (this._events[event]) {
            this._events[event]!.forEach(callback => callback(data));
        }
    }
}

const emitter = new EventEmitter<EventMap>();
emitter.on('message', (msg) => console.log(`Nachricht: ${msg}`));
emitter.emit('message', 'Hallo');
```

**Special features:**
- EventEmitter pattern with TypeScript types
- Type-safe events through generic types
- DOM Events as built-in event system
- Integrated with JavaScript EventEmitter

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
</Tabs>


## 19.1.4. Stream Processing

Processing of continuous data streams through sequential transformations. Enables declarative processing of large or unlimited amounts of data without fully loading into memory.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'go', 'java', 'javascript', 'kotlin', 'python', 'rust', 'scala', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// LINQ to Objects for stream processing
var numbers = Enumerable.Range(1, 1000);
var result = numbers
    .Where(x => x % 2 == 0)
    .Select(x => x * 2)
    .Take(10);

foreach (var item in result)
{
    Console.WriteLine($"Wert: {item}");
}

// IAsyncEnumerable for asynchronous streams (since C# 8.0)
async IAsyncEnumerable<int> GenerateNumbers()
{
    for (int i = 1; i <= 1000; i++)
    {
        await Task.Delay(10);
        yield return i;
    }
}

await foreach (var item in GenerateNumbers().Where(x => x % 2 == 0).Take(10))
{
    Console.WriteLine($"Wert: {item}");
}
```

**Special features:**
- LINQ to Objects for synchronous streams
- IAsyncEnumerable for asynchronous streams since C# 8.0
- Lazy evaluation through IEnumerable
- Supports unlimited streams

**Further reading:**
- [C# LINQ Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)
- [C# IAsyncEnumerable Documentation](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.iasyncenumerable-1)

</TabItem>
<TabItem value="go" label="Go">

```go
// Channels for stream processing
func generateNumbers(count int) <-chan int {
    ch := make(chan int)
    go func() {
        defer close(ch)
        for i := 1; i <= count; i++ {
            ch <- i
        }
    }()
    return ch
}

func filterEven(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for n := range in {
            if n%2 == 0 {
                out <- n * 2
            }
        }
    }()
    return out
}

numbers := generateNumbers(1000)
filtered := filterEven(numbers)
for i := 0; i < 10; i++ {
    if val, ok := <-filtered; ok {
        fmt.Printf("Wert: %d\n", val)
    }
}
```

**Special features:**
- Channels for stream communication
- Goroutines for parallel stream processing
- Pipeline pattern through channel composition
- Unlimited streams through channel buffering

**Further reading:**
- [Go Channels Documentation](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="java" label="Java">

```java
// Streams API (since Java 8)
import java.util.stream.*;

IntStream.range(1, 1001)
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(10)
    .forEach(x -> System.out.println("Wert: " + x));

// Parallel streams
IntStream.range(1, 1001)
    .parallel()
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(10)
    .forEach(x -> System.out.println("Wert: " + x));
```

**Special features:**
- Streams API since Java 8
- Supports parallel processing with `.parallel()`
- Lazy evaluation
- Supports unlimited streams with `Stream.generate()` and `Stream.iterate()`

**Further reading:**
- [Java Streams Documentation](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generators for stream processing
function* generateNumbers(count) {
    for (let i = 1; i <= count; i++) {
        yield i;
    }
}

function* filterEven(stream) {
    for (const n of stream) {
        if (n % 2 === 0) {
            yield n * 2;
        }
    }
}

const numbers = generateNumbers(1000);
const filtered = filterEven(numbers);
let count = 0;
for (const item of filtered) {
    if (count++ >= 10) break;
    console.log(`Wert: ${item}`);
}

// Async generators for asynchronous streams
async function* generateNumbersAsync(count) {
    for (let i = 1; i <= count; i++) {
        await new Promise(resolve => setTimeout(resolve, 10));
        yield i;
    }
}
```

**Special features:**
- Generators for synchronous streams
- Async generators for asynchronous streams
- Lazy evaluation through generators
- Supports unlimited streams

**Further reading:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Sequences for stream processing
val numbers = generateSequence(1) { it + 1 }
val result = numbers
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(10)

result.forEach { println("Wert: $it") }

// Flow for asynchronous streams
import kotlinx.coroutines.flow.*

fun numbersFlow(): Flow<Int> = flow {
    for (i in 1..1000) {
        delay(10)
        emit(i)
    }
}

numbersFlow()
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(10)
    .collect { println("Wert: $it") }
```

**Special features:**
- Sequences for synchronous streams
- Flow for asynchronous streams (Coroutines)
- Lazy evaluation through sequences
- Supports unlimited streams

**Further reading:**
- [Kotlin Sequences Documentation](https://kotlinlang.org/docs/sequences.html)
- [Kotlin Flow Documentation](https://kotlinlang.org/docs/flow.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generators for stream processing
def generate_numbers(count):
    for i in range(1, count + 1):
        yield i

def filter_even(stream):
    for n in stream:
        if n % 2 == 0:
            yield n * 2

numbers = generate_numbers(1000)
filtered = filter_even(numbers)
for i, item in enumerate(filtered):
    if i >= 10:
        break
    print(f"Wert: {item}")

# Async generators for asynchronous streams
import asyncio

async def generate_numbers_async(count):
    for i in range(1, count + 1):
        await asyncio.sleep(0.01)
        yield i
```

**Special features:**
- Generators for synchronous streams
- Async generators for asynchronous streams
- Lazy evaluation through generators
- itertools for advanced stream operations
- Supports unlimited streams

**Further reading:**
- [Python Generators Documentation](https://docs.python.org/3/tutorial/classes.html#generators)
- [Python asyncio Documentation](https://docs.python.org/3/library/asyncio.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iterator trait for stream processing
let numbers = 1..=1000;
let result: Vec<i32> = numbers
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2)
    .take(10)
    .collect();

for item in result {
    println!("Wert: {}", item);
}

// Lazy evaluation without collect
let numbers = 1..=1000;
numbers
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2)
    .take(10)
    .for_each(|x| println!("Wert: {}", x));
```

**Special features:**
- Iterator trait as the basis for stream processing
- Lazy evaluation through iterators
- Zero-cost abstractions
- Supports unlimited streams with `std::iter::repeat()` and `std::iter::successors()`

**Further reading:**
- [Rust Iterator Documentation](https://doc.rust-lang.org/std/iter/trait.Iterator.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Streams for stream processing
val numbers = Stream.from(1)
val result = numbers
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .take(10)

result.foreach(x => println(s"Wert: $x"))

// Lazy Lists (since Scala 2.13)
val numbers2 = LazyList.from(1)
val result2 = numbers2
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .take(10)

result2.foreach(x => println(s"Wert: $x"))
```

**Special features:**
- Streams (deprecated since Scala 2.13)
- LazyList as replacement for Streams since Scala 2.13
- Lazy evaluation
- Supports unlimited streams

**Further reading:**
- [Scala LazyList Documentation](https://www.scala-lang.org/api/current/scala/collection/immutable/LazyList.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generators for stream processing
function* generateNumbers(count: number): Generator<number> {
    for (let i = 1; i <= count; i++) {
        yield i;
    }
}

function* filterEven(stream: Generator<number>): Generator<number> {
    for (const n of stream) {
        if (n % 2 === 0) {
            yield n * 2;
        }
    }
}

const numbers = generateNumbers(1000);
const filtered = filterEven(numbers);
let count = 0;
for (const item of filtered) {
    if (count++ >= 10) break;
    console.log(`Wert: ${item}`);
}

// Async generators for asynchronous streams
async function* generateNumbersAsync(count: number): AsyncGenerator<number> {
    for (let i = 1; i <= count; i++) {
        await new Promise(resolve => setTimeout(resolve, 10));
        yield i;
    }
}
```

**Special features:**
- Generators for synchronous streams
- Async generators for asynchronous streams
- Lazy evaluation through generators
- Type-safe through TypeScript's type system
- Supports unlimited streams

**Further reading:**
- [TypeScript Generators Documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-generators)

</TabItem>
</Tabs>

