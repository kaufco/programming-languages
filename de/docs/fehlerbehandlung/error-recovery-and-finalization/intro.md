---
slug: /fehlerbehandlung/error-recovery-and-finalization
title: 12.3. Error Recovery and Finalization
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 12.3. Error Recovery and Finalization

Wiederherstellung und Finalisierung bei Fehlern.

## 12.3.1. Defer Statements

Defer Statements ermöglichen die Ausführung von Code am Ende einer Funktion, unabhängig davon, wie die Funktion beendet wird (normal oder durch Fehler).

### Sprachen {#sprachen}

<Tabs availableTabs={['d', 'go', 'nim', 'swift', 'v', 'zig']}>
<TabItem value="go" label="Go">

```go
package main

import "fmt"

func processFile() error
{
    file, err := openFile("data.txt")
    if err != nil
    {
        return err
    }
    defer file.Close() // Wird am Ende der Funktion ausgeführt
    
    // Code, der Fehler verursachen kann
    data, err := readFile(file)
    if err != nil
    {
        return err // file.Close() wird trotzdem aufgerufen
    }
    
    fmt.Println(data)
    return nil // file.Close() wird hier aufgerufen
}
```

**Besonderheiten:**
- `defer` verschiebt die Ausführung bis zum Ende der Funktion
- Mehrere `defer`-Statements werden in LIFO-Reihenfolge ausgeführt
- Wird auch bei `return` oder `panic` ausgeführt
- Nützlich für Ressourcenbereinigung

**Weiterführende Links:**
- [Go Documentation - Defer](https://go.dev/ref/spec#Defer_statements)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func processFile() throws
{
    let file = try openFile("data.txt")
    defer
    {
        file.close() // Wird am Ende des Gültigkeitsbereichs ausgeführt
    }
    
    // Code, der Fehler verursachen kann
    let data = try readFile(file)
    print(data)
    // file.close() wird hier aufgerufen
}
```

**Besonderheiten:**
- `defer` verschiebt die Ausführung bis zum Ende des Gültigkeitsbereichs
- Mehrere `defer`-Statements werden in LIFO-Reihenfolge ausgeführt
- Wird auch bei `return` oder `throw` ausgeführt
- Nützlich für Ressourcenbereinigung

**Weiterführende Links:**
- [Swift Documentation - Defer](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/statements/#Defer-Statement)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

fn processFile() !void
{
    var file = try openFile("data.txt");
    defer file.close(); // Wird am Ende des Gültigkeitsbereichs ausgeführt
    
    // Code, der Fehler verursachen kann
    const data = try readFile(&file);
    std.debug.print("{s}\n", .{data});
    // file.close() wird hier aufgerufen
}
```

**Besonderheiten:**
- `defer` verschiebt die Ausführung bis zum Ende des Gültigkeitsbereichs
- Mehrere `defer`-Statements werden in LIFO-Reihenfolge ausgeführt
- Wird auch bei `return` oder Fehlern ausgeführt
- Nützlich für Ressourcenbereinigung

**Weiterführende Links:**
- [Zig Documentation - Defer](https://ziglang.org/documentation/0.11.0/#defer)

</TabItem>
<TabItem value="d" label="D">

```d
// Scope Guards (D's Defer-Äquivalent)
// Benötigt: import std.stdio;

void processFile(string filename) {
    auto file = File(filename, "r");
    scope(exit) file.close();  // Wird immer ausgeführt

    scope(failure) writeln("Fehler bei Verarbeitung von ", filename);
    scope(success) writeln("Erfolgreich verarbeitet: ", filename);

    // ... Datei verarbeiten ...
}

void multipleDefers() {
    scope(exit) writeln("Dritter");
    scope(exit) writeln("Zweiter");
    scope(exit) writeln("Erster");
    // Ausgabe: Erster, Zweiter, Dritter (LIFO-Reihenfolge)
}
```

**Besonderheiten:**
- `scope(exit)`: wird immer ausgeführt (wie `defer` in Go/Swift)
- `scope(success)`: nur bei normalem Verlassen des Scopes
- `scope(failure)`: nur bei Exception
- Ausführung in umgekehrter Reihenfolge der Deklaration (LIFO)
- Mächtiger als einfaches `defer` durch die drei Varianten

**Weiterführende Links:**
- [D Language Specification - Scope Guard Statement](https://dlang.org/spec/statement.html#scope-guard-statement)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Defer Statement
proc processFile(path: string) =
  let f = open(path)
  defer: f.close()  # wird am Ende des Scopes ausgeführt
  echo f.readAll()

# Mehrere defers (LIFO-Reihenfolge)
proc multiDefer() =
  defer: echo "3"
  defer: echo "2"
  defer: echo "1"
  echo "Start"
# Ausgabe: Start, 1, 2, 3
```

**Besonderheiten:**
- `defer` führt Code am Ende des aktuellen Scopes aus
- LIFO-Reihenfolge bei mehreren `defer`-Statements
- Wird auch bei Exceptions ausgeführt

**Weiterführende Links:**
- [Nim Documentation - Defer Statement](https://nim-lang.org/docs/manual.html#exception-handling-defer-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Defer Statements
// Benötigt: import os
fn read_data(path string) !string {
    f := os.open(path)!
    defer {
        f.close()
    }
    return f.read_string()
}
```

**Besonderheiten:**
- `defer { }` führt Code am Ende des Scopes aus
- Wird in LIFO-Reihenfolge ausgeführt (letztes `defer` zuerst)
- Nützlich für Ressourcen-Cleanup

**Weiterführende Links:**
- [V Documentation - Defer](https://github.com/vlang/v/blob/master/doc/docs.md#defer)

</TabItem>
</Tabs>


## 12.3.2. Context Managers (with statement)

Context Managers ermöglichen die automatische Ressourcenverwaltung durch definierte Ein- und Ausstiegspunkte, unabhängig davon, ob Fehler auftreten.

### Sprachen {#sprachen}

<Tabs availableTabs={['java', 'python']} yellowTabs={['prolog']} orangeTabs={['swift']}>
<TabItem value="python" label="Python">

```python
# Mit with-Statement
with open("data.txt", "r") as file:
    data = file.read()
    # Datei wird automatisch geschlossen, auch bei Fehlern
    print(data)

# Eigener Context Manager
class FileManager:
    def __init__(self, filename):
        self.filename = filename
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, "r")
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()
        return False  # Fehler nicht unterdrücken

# Verwendung
with FileManager("data.txt") as file:
    data = file.read()
    print(data)
```

**Besonderheiten:**
- `with`-Statement für automatische Ressourcenverwaltung
- `__enter__` und `__exit__` Methoden für Context Manager
- `__exit__` wird immer aufgerufen, auch bei Fehlern
- `contextlib.contextmanager` Decorator für einfache Context Manager

**Weiterführende Links:**
- [Python Documentation - Context Managers](https://docs.python.org/3/reference/datamodel.html#context-managers)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% setup_call_cleanup/3 als Context Manager
% Setup → Body → Cleanup (Cleanup wird immer ausgeführt)
read_file_content(Path, Content) :-
    setup_call_cleanup(
        open(Path, read, Stream),         % Setup: Ressource öffnen
        read_string(Stream, _, Content),  % Body: Ressource nutzen
        close(Stream)                     % Cleanup: Ressource freigeben
    ).

% Verschachteltes Ressourcen-Management
copy_file(Source, Dest) :-
    setup_call_cleanup(
        open(Source, read, In),
        setup_call_cleanup(
            open(Dest, write, Out),
            copy_stream_data(In, Out),
            close(Out)),
        close(In)).
```

**Besonderheiten:**
- `setup_call_cleanup/3` bietet Context-Manager-Funktionalität als eingebautes ISO-Prädikat
- Setup, Body und Cleanup werden als Prolog-Ziele übergeben
- Cleanup wird garantiert ausgeführt (auch bei Exceptions oder Fehlschlagen)
- Verschachtelung für mehrere Ressourcen möglich

**Weiterführende Links:**
- [SWI-Prolog Documentation - setup_call_cleanup/3](https://www.swi-prolog.org/pldoc/doc_for?object=setup_call_cleanup/3)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Mit defer (ähnlich zu Context Managers)
func processFile() throws
{
    let file = try openFile("data.txt")
    defer
    {
        file.close() // Wird automatisch aufgerufen
    }
    
    let data = try readFile(file)
    print(data)
}

// Mit Resource Management Protocol
protocol Resource
{
    func acquire()
    func release()
}

func withResource<T: Resource>(_ resource: T, _ body: (T) throws -> Void) rethrows
{
    resource.acquire()
    defer { resource.release() }
    try body(resource)
}
```

**Besonderheiten:**
- Keine nativen Context Managers wie in Python
- `defer` wird häufig für ähnliche Zwecke verwendet
- Resource Management kann durch Protokolle und Funktionen implementiert werden

**Weiterführende Links:**
- [Swift Documentation - Defer](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/statements/#Defer-Statement)

</TabItem>
<TabItem value="java" label="Java">

```java
// Try-with-resources (seit Java 7)
// Benötigt: import java.io.*;
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line = reader.readLine();
    System.out.println(line);
}
// reader wird automatisch geschlossen

// Mehrere Ressourcen
try (FileInputStream in = new FileInputStream("input.txt");
     FileOutputStream out = new FileOutputStream("output.txt")) {
    // Beide werden automatisch geschlossen
}
```

**Besonderheiten:**
- Try-with-resources seit Java 7 für `AutoCloseable`-Ressourcen
- Ressourcen werden am Ende des Blocks automatisch geschlossen
- Mehrere Ressourcen mit Semikolon getrennt
- Seit Java 9: Effektiv finale Variablen können verwendet werden

**Weiterführende Links:**
- [Oracle Java Documentation - try-with-resources](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html)

</TabItem>
</Tabs>


## 12.3.3. Effect Tracking and Isolation

Effect Tracking and Isolation ermöglicht die explizite Typisierung und Isolierung von Seiteneffekten (einschließlich Fehlerbehandlung) im Typsystem.

### Sprachen {#sprachen}

<Tabs availableTabs={['idris', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc']}>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Effect-System für Fehlerbehandlung (seit OCaml 5.0) *)
open Effect

type _ Effect.t += DivisionByZero : int Effect.t

let divide a b =
    if b = 0 then
        perform DivisionByZero
    else
        a / b

(* Handler für Effect *)
let handle_divide a b =
    try_with divide a b
    {
        effc = (fun (type a) (e : a Effect.t) ->
            match e with
            | DivisionByZero -> Some (fun (k : (a, _) continuation) ->
                continue k 0)
            | _ -> None)
    }
```

**Besonderheiten:**
- Effect-System verfügbar (seit OCaml 5.0)
- Fehlerbehandlung als Effect im Typsystem
- Handler für Effect-Isolation
- Compiler erzwingt Behandlung von Effects

**Weiterführende Links:**
- [OCaml Documentation - Effect System](https://v2.ocaml.org/manual/effects.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Reine Funktionen vs. IO-Funktionen
pureAdd : Int -> Int -> Int
pureAdd a b = a + b

-- Seiteneffekte nur in IO
greet : String -> IO ()
greet name = putStrLn ("Hallo, " ++ name ++ "!")

-- main muss IO () sein
main : IO ()
main = greet "Welt"
```

**Besonderheiten:**
- Seiteneffekte werden durch den `IO`-Typ isoliert
- Reine Funktionen können keine IO-Operationen ausführen
- Typsystem erzwingt Trennung von reinem Code und Seiteneffekten

**Weiterführende Links:**
- [Idris 2 Documentation - IO](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Reine Funktion: kein Effekt im Typ
fun add(x : int, y : int) : int
  x + y

// Funktion mit Effekt: explizit im Typ
fun greet(name : string) : console ()
  println("Hallo, " ++ name ++ "!")

// Funktion mit Fehler-Effekt
effect ctl raise(msg : string) : a

fun safe-divide(a : int, b : int) : raise int
  if b == 0 then raise("Division durch Null") else a / b

// Effekte werden im Typsystem verfolgt und isoliert
fun compute() : <raise,console> int
  val x = safe-divide(10, 2)
  println(x.show)
  x
```

**Besonderheiten:**
- Koka verfolgt ALLE Effekte explizit im Typsystem
- Reine Funktionen haben keinen Effekt im Typ
- Effekte werden durch Handler isoliert und behandelt
- Fundamentales Sprachdesign: Effekte sind Kokas zentrales Feature

**Weiterführende Links:**
- [Koka Language Guide - Effect Types](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Reine Funktionen haben keine Effekte im Typ
def pureAdd (x y : Nat) : Nat :=
  x + y

-- IO-Monade für Seiteneffekte (explizit im Typ)
def greet (name : String) : IO Unit :=
  IO.println s!"Hallo, {name}!"

-- StateM für Zustandseffekte
def increment : StateM Nat Unit :=
  modify (fun n => n + 1)

-- ReaderM für Umgebungseffekte
def readConfig : ReaderM String String :=
  read
```

**Besonderheiten:**
- Lean 4 verfolgt Effekte durch Monaden im Typsystem: `IO`, `StateM`, `ReaderM`, `ExceptT`.
- Reine Funktionen haben keinen monadischen Rückgabetyp.
- Der Compiler erzwingt, dass Seiteneffekte nur in der passenden Monade ausgeführt werden.
- Abhängige Typen ermöglichen noch präzisere Spezifikationen als einfache Effect-Tracking-Systeme.

**Weiterführende Links:**
- [Lean 4 Documentation - IO Monad](https://lean-lang.org/lean4/doc/io.html)
- [Lean 4 Documentation - Monads](https://lean-lang.org/lean4/doc/monads.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Reine Funktion: kein IO-Parameter, garantiert seiteneffektfrei
:- func add(int, int) = int.
add(X, Y) = X + Y.

% IO-Effekt explizit durch IO-State-Threading
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.format("Hallo, %s!\n", [s(Name)], !IO).

% Reines Prädikat: kein IO, darf keine Seiteneffekte haben
:- pred is_positive(int::in) is semidet.
is_positive(N) :- N > 0.

% Impure-Deklaration für Ausnahmen (selten, explizit markiert)
:- impure pred unsafe_print(string::in) is det.
:- pragma foreign_proc("C", unsafe_print(Msg::in),
    [will_not_call_mercury], "printf(\"%s\", Msg);").

% Compiler-Fehler: IO-Operation in reinem Kontext
% :- func broken(int) = int.
% broken(X) = Y :- io.write_int(X, !IO), Y = X.  % FEHLER!
```

**Besonderheiten:**
- Mercury ist eine **reine** Logiksprache: Seiteneffekte nur über explizites IO-State-Threading (`!IO`)
- Prädikate/Funktionen ohne `io`-Parameter sind garantiert seiteneffektfrei
- `impure`-Deklaration für unreine Foreign-Code-Einbindungen (selten und explizit)
- `promise_pure`/`promise_semipure` für kontrolliertes Aufheben der Reinheit
- Compiler erzwingt Reinheit: IO-Operationen in reinen Kontexten sind ein Kompilierfehler

**Weiterführende Links:**
- [Mercury Language Reference - Purity](https://www.mercurylang.org/information/doc-release/mercury_ref/Purity.html)
- [Mercury Language Reference - Impurity](https://www.mercurylang.org/information/doc-release/mercury_ref/Impurity.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Effect Tracking: Effect Monad
pureFunction :: Int -> Int -> Int
pureFunction a b = a + b

-- Seiteneffekte müssen im Typ deklariert werden
impureFunction :: Int -> Effect Int
impureFunction n = do
    log ("Processing: " <> show n)
    pure (n * 2)
```

**Besonderheiten:**
- `Effect` Monad für Seiteneffekte (synchron)
- `Aff` Monad für asynchrone Effekte
- Reine Funktionen haben keinen `Effect`-Typ
- Compiler erzwingt Effect Tracking

**Weiterführende Links:**
- [PureScript Documentation - Effects](https://book.purescript.org/chapter8.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Effect Tracking durch Platform-System
-- Reine Funktionen können keine I/O durchführen
-- I/O wird durch Tasks gehandhabt

-- app-Deklaration verbindet mit Platform
-- Platform stellt Task-basierte I/O bereit
```

**Besonderheiten:**
- Reine Funktionen sind garantiert seiteneffektfrei
- I/O wird durch das Platform/Task-System isoliert
- Klare Trennung zwischen reinem Code und Effekten

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
</Tabs>

