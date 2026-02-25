---
slug: /spezialisierte-features/domain-specific-features
title: 19.1. Domain-Specific Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 19.1. Domain-Specific Features

LINQ, Reactive Programming, Event-Driven und Stream Processing.

## 19.1.1. Database Query Languages (LINQ, etc.)

Sprachintegrierte Abfragesprachen, die es ermöglichen, Datenbankabfragen direkt in der Programmiersprache zu formulieren, ohne separate SQL-Strings verwenden zu müssen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'fsharp', 'vbnet']} orangeTabs={['kotlin', 'scala']}>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System.Linq;
var products = from p in db.Products
               where p.Price > 100
               orderby p.Name
               select new { p.Name, p.Price };

// Alternative Methodensyntax
var products2 = db.Products
    .Where(p => p.Price > 100)
    .OrderBy(p => p.Name)
    .Select(p => new { p.Name, p.Price });
```

**Besonderheiten:**
- LINQ (Language Integrated Query) seit .NET 3.5 / C# 3.0
- Unterstützt sowohl Query-Syntax als auch Methodensyntax
- Kann auf verschiedene Datenquellen angewendet werden (LINQ to Objects, LINQ to SQL, LINQ to Entities, etc.)
- Type-safe Abfragen zur Compile-Zeit

**Weiterführende Links:**
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

**Besonderheiten:**
- Query Expressions seit F# 3.0
- Integriert in die Sprache mit `query { }` Computation Expression
- Type-safe Abfragen
- Unterstützt LINQ-kompatible Datenquellen

**Weiterführende Links:**
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

**Besonderheiten:**
- Exposed und Ktorm bieten DSLs für Datenbankabfragen
- Type-safe Abfragen zur Compile-Zeit
- Keine sprachintegrierte Query-Syntax wie LINQ, sondern Bibliotheks-DSLs

**Weiterführende Links:**
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

**Besonderheiten:**
- Slick und Quill bieten DSLs für Datenbankabfragen
- Type-safe Abfragen zur Compile-Zeit
- Quill verwendet Compile-Time Code Generation für Type-Safety
- Keine sprachintegrierte Query-Syntax, sondern Bibliotheks-DSLs

**Weiterführende Links:**
- [Slick Documentation](https://scala-slick.org/)
- [Quill Documentation](https://getquill.io/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Benötigt: Imports System.Linq
Dim products = From p In db.Products
               Where p.Price > 100
               Order By p.Name
               Select New With {p.Name, p.Price}

' Alternative Methodensyntax
Dim products2 = db.Products.
    Where(Function(p) p.Price > 100).
    OrderBy(Function(p) p.Name).
    Select(Function(p) New With {p.Name, p.Price})
```

**Besonderheiten:**
- LINQ (Language Integrated Query) seit .NET 3.5 / VB.NET 9.0
- Unterstützt sowohl Query-Syntax als auch Methodensyntax
- Kann auf verschiedene Datenquellen angewendet werden
- Type-safe Abfragen zur Compile-Zeit

**Weiterführende Links:**
- [VB.NET LINQ Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/linq/)

</TabItem>
</Tabs>


## 19.1.2. Reactive Programming

### Reactive Programming


Programmierparadigma, das mit asynchronen Datenströmen und der Verbreitung von Änderungen arbeitet. Ermöglicht die deklarative Verarbeitung von Ereignissen und Datenströmen über Observable-Patterns.


<Tabs availableTabs={['csharp', 'dart', 'go', 'java', 'javascript', 'kotlin', 'python', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System.Reactive.Linq;
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

**Besonderheiten:**
- Reactive Extensions (Rx.NET) als Bibliothek verfügbar
- Unterstützt Observable-Pattern mit LINQ-ähnlichen Operatoren
- Integriert mit async/await

**Weiterführende Links:**
- [Rx.NET Documentation](https://github.com/dotnet/reactive)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Benötigt: import 'package:rxdart/rxdart.dart';
final stream = Stream.fromIterable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .where((x) => x % 2 == 0)
    .map((x) => x * 2);

stream.listen(
    (value) => print('Wert: $value'),
    onError: (error) => print('Fehler: $error'),
    onDone: () => print('Abgeschlossen')
);
```

**Besonderheiten:**
- RxDart erweitert Dart Streams mit ReactiveX-Operatoren
- Dart Streams als Basis für Reactive Programming
- Integriert mit async/await

**Weiterführende Links:**
- [RxDart Documentation](https://pub.dev/packages/rxdart)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: github.com/reactivex/rxgo/v2
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

**Besonderheiten:**
- reactivex-go als Bibliothek verfügbar
- Nutzt Go Channels für Streams
- Typ-Assertions erforderlich

**Weiterführende Links:**
- [reactivex-go Documentation](https://github.com/ReactiveX/RxGo)

</TabItem>
<TabItem value="java" label="Java">

```java
// Benötigt: io.reactivex.rxjava3:rxjava
Observable.range(1, 10)
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .subscribe(
        x -> System.out.println("Wert: " + x),
        error -> System.out.println("Fehler: " + error),
        () -> System.out.println("Abgeschlossen")
    );
```

**Besonderheiten:**
- RxJava als Bibliothek verfügbar
- Unterstützt Observable, Flowable, Single, Completable, Maybe
- Integriert mit Java Streams API

**Weiterführende Links:**
- [RxJava Documentation](https://github.com/ReactiveX/RxJava)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Benötigt: rxjs
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

**Besonderheiten:**
- RxJS als Bibliothek verfügbar
- Unterstützt Observables, Subjects, Operators
- Integriert mit Promises und async/await

**Weiterführende Links:**
- [RxJS Documentation](https://rxjs.dev/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Benötigt: io.reactivex.rxjava3:rxkotlin
Observable.range(1, 10)
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .subscribe(
        { x -> println("Wert: $x") },
        { error -> println("Fehler: $error") },
        { println("Abgeschlossen") }
    )
```

**Besonderheiten:**
- RxKotlin erweitert RxJava mit Kotlin-spezifischen Erweiterungen
- Nutzt RxJava als Basis
- Integriert mit Kotlin Coroutines

**Weiterführende Links:**
- [RxKotlin Documentation](https://github.com/ReactiveX/RxKotlin)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: rx
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

**Besonderheiten:**
- RxPy als Bibliothek verfügbar
- Unterstützt Observable-Pattern mit Operatoren
- Integriert mit asyncio

**Weiterführende Links:**
- [RxPy Documentation](https://github.com/ReactiveX/RxPY)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: rxrust
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

**Besonderheiten:**
- rxrust als Bibliothek verfügbar
- Type-safe durch Rusts Typsystem
- Zero-cost Abstraktionen

**Weiterführende Links:**
- [rxrust Documentation](https://github.com/rxrust/rxrust)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: io.reactivex.rxjava3:rxscala
Observable.range(1, 10)
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .subscribe(
        x => println(s"Wert: $x"),
        error => println(s"Fehler: $error"),
        () => println("Abgeschlossen")
    )
```

**Besonderheiten:**
- RxScala erweitert RxJava mit Scala-spezifischen Erweiterungen
- Nutzt RxJava als Basis
- Integriert mit Scala Futures

**Weiterführende Links:**
- [RxScala Documentation](https://github.com/ReactiveX/RxScala)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: RxSwift
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

**Besonderheiten:**
- RxSwift als Bibliothek verfügbar
- Unterstützt Observable, Subject, Driver, Signal
- Integriert mit Swift async/await

**Weiterführende Links:**
- [RxSwift Documentation](https://github.com/ReactiveX/RxSwift)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Benötigt: rxjs
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

**Besonderheiten:**
- RxJS als Bibliothek verfügbar
- Unterstützt Observables, Subjects, Operators
- Integriert mit Promises und async/await
- Type-safe durch TypeScripts Typsystem

**Weiterführende Links:**
- [RxJS Documentation](https://rxjs.dev/)

</TabItem>
</Tabs>



---

### Functional Reactive Programming (FRP)


Kombination aus funktionaler Programmierung und reaktiven Datenströmen. FRP behandelt zeitveränderliche Werte als kontinuierliche Signale und ermöglicht deklarative Beschreibung von reaktiven Systemen mit funktionalen Transformationen.


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

**Besonderheiten:**
- FRP ist ein fundamentales Sprachfeature in Elm
- Model-View-Update-Architektur als FRP-Implementierung
- Reine Funktionen ohne Seiteneffekte
- Automatisches Event-Handling durch die Runtime

**Weiterführende Links:**
- [Elm Documentation](https://guide.elm-lang.org/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Benötigt: FSharp.Control.Reactive oder ähnliche Bibliothek
open System
open FSharp.Control.Reactive

let source = Observable.interval (TimeSpan.FromSeconds(1.0))
let mapped = source |> Observable.map (fun x -> x * 2)
let filtered = mapped |> Observable.filter (fun x -> x % 4 = 0)

filtered
|> Observable.subscribe (fun x -> printfn "Wert: %d" x)
|> ignore
```

**Besonderheiten:**
- FSharp.Control.Reactive als Bibliothek verfügbar
- Nutzt F# Pipeline-Operatoren für funktionale Komposition
- Integriert mit .NET Reactive Extensions
- Funktionale Transformationen über Observable-Streams

**Weiterführende Links:**
- [FSharp.Control.Reactive Documentation](https://github.com/fsprojects/FSharp.Control.Reactive)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: reactive-banana
import Reactive.Banana
import Reactive.Banana.Combinators

-- Events und Behaviors als Grundbausteine
counter :: Event Int -> Behavior Int
counter eChange = accumB 0 ((+) <$> eChange)

-- Funktionale Transformationen
doubled :: Behavior Int -> Behavior Int
doubled = fmap (* 2)

-- Event-Kombination
merged :: Event a -> Event a -> Event a
merged = unionWith const
```

**Besonderheiten:**
- Bibliotheken: reactive-banana, reflex, yampa
- Reine funktionale Transformationen über Events (diskret) und Behaviors (zeitkontinuierlich)
- Typsicher durch Haskells Typsystem
- Push- und Pull-basierte Implementierungen verfügbar

**Weiterführende Links:**
- [Reactive-Banana Documentation](https://wiki.haskell.org/Reactive-banana)

</TabItem>

<TabItem value="purescript" label="PureScript">

```purescript
-- Benötigt: purescript-event
import Control.Event.Handler (EventHandler)
import Data.Maybe (Maybe(..))

type Model = Int

data Msg = Increment | Decrement

update :: Msg -> Model -> Model
update Increment model = model + 1
update Decrement model = model - 1

-- Event-Handler-Komposition
handleEvent :: EventHandler Msg -> Model -> EventHandler Model
handleEvent msgHandler model = \msg -> 
    Just (update msg model)
```

**Besonderheiten:**
- Verschiedene FRP-Bibliotheken verfügbar (purescript-event, purescript-signal, etc.)
- Reine funktionale Transformationen
- Type-safe durch PureScripts Typsystem
- Integriert mit funktionalen UI-Frameworks

**Weiterführende Links:**
- [PureScript Documentation](https://www.purescript.org/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: com.github.julien-truffaut:monocle oder ähnliche FRP-Bibliothek
import cats.effect.IO
import fs2.Stream

val source: Stream[IO, Int] = Stream.range(1, 11)
val mapped: Stream[IO, Int] = source.map(_ * 2)
val filtered: Stream[IO, Int] = mapped.filter(_ % 4 == 0)

filtered.evalMap(x => IO(println(s"Wert: $x"))).compile.drain.unsafeRunSync()
```

**Besonderheiten:**
- FS2, Monix und andere FRP-Bibliotheken verfügbar
- Funktionale Stream-Transformationen
- Type-safe durch Scalas Typsystem
- Integriert mit Cats Effect für funktionale Effekte

**Weiterführende Links:**
- [FS2 Documentation](https://fs2.io/)
- [Monix Documentation](https://monix.io/)

</TabItem>
</Tabs>


## 19.1.3. Event-Driven Programming

Programmierparadigma, bei dem der Programmfluss durch Ereignisse gesteuert wird. Der Code reagiert auf eintretende Events, anstatt einem linearen Ausführungsfluss zu folgen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'rust', 'typescript']} yellowTabs={['java']} orangeTabs={['go', 'python']}>
<TabItem value="csharp" label="C#">

```csharp
// Events als Sprachfeature
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

**Besonderheiten:**
- Events als Sprachfeature seit C# 1.0
- Event-Handler mit `+=` und `-=` Operatoren
- Null-conditional Operator `?.` für sichere Event-Invocation
- Unterstützt Multicast-Delegates

**Weiterführende Links:**
- [C# Events Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Channels für Event-Kommunikation
type Event struct {
    Type    string
    Message string
}

eventChan := make(chan Event, 10)

// Event-Producer
go func() {
    eventChan <- Event{Type: "message", Message: "Hallo"}
}()

// Event-Consumer
go func() {
    for event := range eventChan {
        fmt.Printf("Event: %s - %s\n", event.Type, event.Message)
    }
}()
```

**Besonderheiten:**
- Channels als primitives Event-Mechanismus
- Goroutines für asynchrone Event-Verarbeitung
- Select-Statement für Event-Multiplexing
- Keine eingebauten Events, sondern Channel-basierte Patterns

**Weiterführende Links:**
- [Go Channels Documentation](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="java" label="Java">

```java
// Event-Listener-Pattern
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

**Besonderheiten:**
- Event-Listener-Pattern als Standard-Implementierung
- Verschiedene Event-Frameworks verfügbar (JavaFX Events, Swing Events, etc.)
- Lambda-Ausdrücke für Event-Handler seit Java 8
- Keine eingebauten Events als Sprachfeature

**Weiterführende Links:**
- [Java Event Handling](https://docs.oracle.com/javase/tutorial/uiswing/events/index.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// EventEmitter-Pattern
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

**Besonderheiten:**
- EventEmitter-Pattern weit verbreitet (Node.js EventEmitter, DOM Events)
- Callback-basierte Event-Handler
- DOM Events als eingebautes Event-System
- Asynchrone Event-Verarbeitung durch Event Loop

**Weiterführende Links:**
- [MDN Web Docs - Events](https://developer.mozilla.org/en-US/docs/Web/API/Event)

</TabItem>
<TabItem value="python" label="Python">

```python
# Event-Handler-Pattern
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

**Besonderheiten:**
- Event-Handler-Pattern als Standard-Implementierung
- asyncio Events für asynchrone Event-Verarbeitung
- Verschiedene Event-Bibliotheken verfügbar
- Keine eingebauten Events als Sprachfeature

**Weiterführende Links:**
- [Python asyncio Events](https://docs.python.org/3/library/asyncio-sync.html#asyncio.Event)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Event-Channel-Pattern
use std::sync::mpsc;

#[derive(Clone)]
enum Event {
    Message(String),
}

let (tx, rx) = mpsc::channel();

// Event-Producer
tx.send(Event::Message("Hallo".to_string())).unwrap();

// Event-Consumer
match rx.recv() {
    Ok(Event::Message(msg)) => println!("Nachricht: {}", msg),
    Err(e) => println!("Fehler: {}", e),
}
```

**Besonderheiten:**
- Channels (mpsc) für Event-Kommunikation
- Type-safe Events durch Enums
- Verschiedene Event-Bibliotheken verfügbar (tokio, async-std, etc.)
- Ownership-basierte Event-Verarbeitung

**Weiterführende Links:**
- [Rust Channels Documentation](https://doc.rust-lang.org/std/sync/mpsc/index.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// EventEmitter-Pattern mit Typen
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

**Besonderheiten:**
- EventEmitter-Pattern mit TypeScript-Typen
- Type-safe Events durch generische Typen
- DOM Events als eingebautes Event-System
- Integriert mit JavaScript EventEmitter

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
</Tabs>


## 19.1.4. Stream Processing

Verarbeitung von kontinuierlichen Datenströmen durch sequenzielle Transformationen. Ermöglicht die deklarative Verarbeitung großer oder unbegrenzter Datenmengen ohne vollständiges Laden in den Speicher.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'go', 'java', 'javascript', 'kotlin', 'python', 'rust', 'scala', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// LINQ to Objects für Stream Processing
var numbers = Enumerable.Range(1, 1000);
var result = numbers
    .Where(x => x % 2 == 0)
    .Select(x => x * 2)
    .Take(10);

foreach (var item in result)
{
    Console.WriteLine($"Wert: {item}");
}

// IAsyncEnumerable für asynchrone Streams (seit C# 8.0)
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

**Besonderheiten:**
- LINQ to Objects für synchrone Streams
- IAsyncEnumerable für asynchrone Streams seit C# 8.0
- Lazy Evaluation durch IEnumerable
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [C# LINQ Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)
- [C# IAsyncEnumerable Documentation](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.iasyncenumerable-1)

</TabItem>
<TabItem value="go" label="Go">

```go
// Channels für Stream Processing
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

**Besonderheiten:**
- Channels für Stream-Kommunikation
- Goroutines für parallele Stream-Verarbeitung
- Pipeline-Pattern durch Channel-Komposition
- Unbegrenzte Streams durch Channel-Buffering

**Weiterführende Links:**
- [Go Channels Documentation](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="java" label="Java">

```java
// Streams API (seit Java 8)
import java.util.stream.*;

IntStream.range(1, 1001)
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(10)
    .forEach(x -> System.out.println("Wert: " + x));

// Parallele Streams
IntStream.range(1, 1001)
    .parallel()
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(10)
    .forEach(x -> System.out.println("Wert: " + x));
```

**Besonderheiten:**
- Streams API seit Java 8
- Unterstützt parallele Verarbeitung mit `.parallel()`
- Lazy Evaluation
- Unterstützt unbegrenzte Streams mit `Stream.generate()` und `Stream.iterate()`

**Weiterführende Links:**
- [Java Streams Documentation](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generators für Stream Processing
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

// Async Generators für asynchrone Streams
async function* generateNumbersAsync(count) {
    for (let i = 1; i <= count; i++) {
        await new Promise(resolve => setTimeout(resolve, 10));
        yield i;
    }
}
```

**Besonderheiten:**
- Generators für synchrone Streams
- Async Generators für asynchrone Streams
- Lazy Evaluation durch Generators
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Sequences für Stream Processing
val numbers = generateSequence(1) { it + 1 }
val result = numbers
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(10)

result.forEach { println("Wert: $it") }

// Flow für asynchrone Streams
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

**Besonderheiten:**
- Sequences für synchrone Streams
- Flow für asynchrone Streams (Coroutines)
- Lazy Evaluation durch Sequences
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Kotlin Sequences Documentation](https://kotlinlang.org/docs/sequences.html)
- [Kotlin Flow Documentation](https://kotlinlang.org/docs/flow.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generators für Stream Processing
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

# Async Generators für asynchrone Streams
import asyncio

async def generate_numbers_async(count):
    for i in range(1, count + 1):
        await asyncio.sleep(0.01)
        yield i
```

**Besonderheiten:**
- Generators für synchrone Streams
- Async Generators für asynchrone Streams
- Lazy Evaluation durch Generators
- itertools für erweiterte Stream-Operationen
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Python Generators Documentation](https://docs.python.org/3/tutorial/classes.html#generators)
- [Python asyncio Documentation](https://docs.python.org/3/library/asyncio.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iterator trait für Stream Processing
let numbers = 1..=1000;
let result: Vec<i32> = numbers
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2)
    .take(10)
    .collect();

for item in result {
    println!("Wert: {}", item);
}

// Lazy Evaluation ohne collect
let numbers = 1..=1000;
numbers
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2)
    .take(10)
    .for_each(|x| println!("Wert: {}", x));
```

**Besonderheiten:**
- Iterator trait als Basis für Stream Processing
- Lazy Evaluation durch Iterators
- Zero-cost Abstraktionen
- Unterstützt unbegrenzte Streams mit `std::iter::repeat()` und `std::iter::successors()`

**Weiterführende Links:**
- [Rust Iterator Documentation](https://doc.rust-lang.org/std/iter/trait.Iterator.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Streams für Stream Processing
val numbers = Stream.from(1)
val result = numbers
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .take(10)

result.foreach(x => println(s"Wert: $x"))

// Lazy Lists (seit Scala 2.13)
val numbers2 = LazyList.from(1)
val result2 = numbers2
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .take(10)

result2.foreach(x => println(s"Wert: $x"))
```

**Besonderheiten:**
- Streams (deprecated seit Scala 2.13)
- LazyList als Ersatz für Streams seit Scala 2.13
- Lazy Evaluation
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Scala LazyList Documentation](https://www.scala-lang.org/api/current/scala/collection/immutable/LazyList.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generators für Stream Processing
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

// Async Generators für asynchrone Streams
async function* generateNumbersAsync(count: number): AsyncGenerator<number> {
    for (let i = 1; i <= count; i++) {
        await new Promise(resolve => setTimeout(resolve, 10));
        yield i;
    }
}
```

**Besonderheiten:**
- Generators für synchrone Streams
- Async Generators für asynchrone Streams
- Lazy Evaluation durch Generators
- Type-safe durch TypeScripts Typsystem
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [TypeScript Generators Documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-generators)

</TabItem>
</Tabs>

