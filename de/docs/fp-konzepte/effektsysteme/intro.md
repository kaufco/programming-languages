---
slug: /fp-konzepte/effektsysteme
title: 9.2. Effektsysteme
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 9.2. Effektsysteme

Algebraische Effekte, Effect Handlers und Effect-Tracking.

## 9.2.1. Algebraische Effekte

Algebraische Effekte sind ein Ansatz zur strukturierten Behandlung von Seiteneffekten, bei dem Effekte als abstrakte Operationen deklariert und durch Handler interpretiert werden. Im Gegensatz zu Monaden erlauben sie eine flexible Komposition ohne das „Monad Transformer"-Problem.

### Sprachen {#sprachen}

<Tabs availableTabs={['koka', 'ocaml']} yellowTabs={['common-lisp', 'haskell']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Effekt als Condition deklarieren
(define-condition ask (condition) ())

;; Programm mit Effekt-Operation (signal = perform)
(defun greet ()
  (let ((name (restart-case (signal 'ask)
                (provide (value) value))))
    (format t "Hallo, ~A!~%" name)))
```

**Besonderheiten:**
- Common Lisps Condition/Restart-System ist ein historischer Vorläufer algebraischer Effekte
- `signal` entspricht dem „Performen" eines Effekts
- `restart-case` definiert Wiederaufnahmepunkte, die von Handlern aufgerufen werden können
- Im Gegensatz zu echten algebraischen Effekten ist das System dynamisch und untypisiert

**Weiterführende Links:**
- [Common Lisp HyperSpec – Conditions](http://www.lispworks.com/documentation/HyperSpec/Body/09_.htm)
- [Common Lisp HyperSpec – restart-case](http://www.lispworks.com/documentation/HyperSpec/Body/m_rst_ca.htm)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: polysemy

-- Effekt-Deklaration als GADT
data Ask m a where
  Ask :: Ask m String

data Log m a where
  Log :: String -> Log m ()

makeSem ''Ask
makeSem ''Log

-- Programm mit algebraischen Effekten
greet :: Members '[Ask, Log] r => Sem r ()
greet = do
  name <- ask
  log ("Hallo, " ++ name ++ "!")
```

**Besonderheiten:**
- Algebraische Effekte werden über Bibliotheken realisiert (z.B. `polysemy`, `effectful`, `fused-effects`)
- Effekte werden als GADTs deklariert, nicht als native Sprachkonstrukte
- Template Haskell (`makeSem`) generiert Smart Constructors automatisch
- Effekte sind im Typ der Funktion kodiert (`Members '[Ask, Log] r`)

**Weiterführende Links:**
- [polysemy – GitHub](https://github.com/polysemy-research/polysemy)
- [effectful – GitHub](https://github.com/haskell-effectful/effectful)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Effekt-Deklarationen
effect ask
  ctl ask() : string

effect log
  ctl log(msg : string) : ()

// Programm mit algebraischen Effekten
fun greet() : <ask, log> ()
  val name = ask()
  log("Hallo, " ++ name ++ "!")
```

**Besonderheiten:**
- Koka ist die Referenzsprache für algebraische Effekte – sie sind das zentrale Sprachfeature
- Effekte werden mit `effect` deklariert, Operationen mit `ctl` (Control) oder `fun`
- Effekte erscheinen im Funktionstyp als Effekt-Reihe (`<ask, log>`)
- `ctl`-Operationen haben Zugang zur Continuation (wie `shift` in delimited continuations)

**Weiterführende Links:**
- [Koka Documentation – Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Algebraische Effekte (seit OCaml 5.0) *)
type _ Effect.t +=
  | Ask : string Effect.t
  | Log : string -> unit Effect.t

(* Programm mit algebraischen Effekten *)
let greet () =
  let name = Effect.perform Ask in
  Effect.perform (Log ("Hallo, " ^ name ^ "!"))
```

**Besonderheiten:**
- Native Unterstützung für algebraische Effekte seit OCaml 5.0
- Effekte werden als erweiterbare Varianten (`Effect.t`) deklariert
- `Effect.perform` führt eine Effekt-Operation aus und übergibt die Kontrolle an den nächsten Handler
- Effekte sind aktuell nicht im Typsystem abgebildet (dynamisch zur Laufzeit geprüft)

**Weiterführende Links:**
- [OCaml Manual – Effect Handlers](https://v2.ocaml.org/manual/effects.html)
- [OCaml Effects Tutorial](https://github.com/ocaml-multicore/ocaml-effects-tutorial)

</TabItem>
</Tabs>

## 9.2.2. Effect Handlers

Effect Handlers definieren, wie algebraische Effektoperationen interpretiert werden. Sie fangen Effekte ab, können die Continuation fortsetzen oder verwerfen, und ermöglichen es, dasselbe Programm mit unterschiedlichen Interpretationen auszuführen.

### Sprachen {#sprachen}

<Tabs availableTabs={['koka', 'ocaml']} yellowTabs={['common-lisp', 'haskell']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Handler 1: Liefert festen Wert
(handler-bind
  ((ask (lambda (c)
          (declare (ignore c))
          (invoke-restart 'provide "Welt"))))
  (greet))
;; Ausgabe: Hallo, Welt!

;; Handler 2: Interaktiv
(handler-bind
  ((ask (lambda (c)
          (declare (ignore c))
          (format t "Name: ")
          (invoke-restart 'provide (read-line)))))
  (greet))
;; Liest Name interaktiv von stdin
```

**Besonderheiten:**
- `handler-bind` installiert Handler, die im dynamischen Kontext des Signalgebers laufen
- `invoke-restart` setzt die Ausführung am Restart-Punkt fort (analog zu `continue` bei algebraischen Effekten)
- Verschiedene Handler können dieselben Conditions unterschiedlich behandeln
- Handler haben Zugriff auf den vollen Call-Stack – mächtiger als einfache Exception-Handler

**Weiterführende Links:**
- [Common Lisp HyperSpec – handler-bind](http://www.lispworks.com/documentation/HyperSpec/Body/m_handle.htm)
- [Common Lisp HyperSpec – invoke-restart](http://www.lispworks.com/documentation/HyperSpec/Body/f_invo_1.htm)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: polysemy

-- Handler: Ask liefert festen Wert
runAskConst :: String -> Sem (Ask ': r) a -> Sem r a
runAskConst val = interpret $ \case
  Ask -> pure val

-- Handler: Log gibt auf Konsole aus
runLogIO :: Member (Embed IO) r => Sem (Log ': r) a -> Sem r a
runLogIO = interpret $ \case
  Log msg -> embed (putStrLn msg)

-- Handler: Log ignorieren (für Tests)
runLogSilent :: Sem (Log ': r) a -> Sem r a
runLogSilent = interpret $ \case
  Log _ -> pure ()

-- Handler sind frei komponierbar
main :: IO ()
main = runM . runLogIO . runAskConst "Welt" $ greet
-- Ausgabe: Hallo, Welt!
```

**Besonderheiten:**
- Handler werden als Funktionen definiert, die einen Effekt aus dem Effekt-Stack entfernen
- Handler sind frei komponierbar: die Reihenfolge der Handler bestimmt die Interpretation
- Verschiedene Handler können denselben Effekt unterschiedlich interpretieren (Produktion vs. Test)
- `interpret` definiert einen Handler durch Pattern Matching auf den Effekt-Konstruktoren

**Weiterführende Links:**
- [polysemy – Interpretation](https://github.com/polysemy-research/polysemy#readme)
- [effectful – Tutorial](https://github.com/haskell-effectful/effectful#readme)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Handler 1: Liefert festen Wert
fun run-const()
  with handler
    ctl ask() resume("Welt")
  with handler
    ctl log(msg)
      println(msg)
      resume(())
  greet()
// Ausgabe: Hallo, Welt!

// Handler 2: Test-Modus (Log ignorieren)
fun run-test()
  with handler
    ctl ask() resume("Test")
  with handler
    ctl log(_msg) resume(())
  greet()
```

**Besonderheiten:**
- `with handler` installiert einen Effect Handler für den folgenden Block
- `resume(value)` setzt die Continuation am Punkt der Effekt-Operation fort
- Handler können die Continuation verwerfen, einmal oder mehrfach aufrufen
- Verschiedene Handler ermöglichen unterschiedliche Interpretationen desselben Programms

**Weiterführende Links:**
- [Koka Documentation – Handlers](https://koka-lang.github.io/koka/doc/book.html#sec-handlers)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Effect Handler (seit OCaml 5.0) *)
open Effect
open Effect.Deep

(* Handler 1: Interaktiver Modus *)
let run_interactive f =
  try_with f () {
    effc = fun (type a) (eff : a Effect.t) ->
      match eff with
      | Ask -> Some (fun (k : (a, _) continuation) ->
          continue k (read_line ()))
      | Log msg -> Some (fun (k : (a, _) continuation) ->
          print_endline msg; continue k ())
      | _ -> None
  }

(* Handler 2: Test-Modus *)
let run_test f =
  try_with f () {
    effc = fun (type a) (eff : a Effect.t) ->
      match eff with
      | Ask -> Some (fun (k : (a, _) continuation) ->
          continue k "Test")
      | Log _ -> Some (fun (k : (a, _) continuation) ->
          continue k ())
      | _ -> None
  }

let () = run_interactive greet  (* Liest Name von stdin *)
let () = run_test greet          (* Verwendet "Test" *)
```

**Besonderheiten:**
- `try_with` installiert einen Deep Handler, der Effekte rekursiv behandelt
- `continue k value` setzt die Continuation mit dem gegebenen Wert fort
- Shallow Handler (`Effect.Shallow`) erlauben einmalige Behandlung ohne automatische Rekursion
- Handler können die Continuation verwerfen (`discontinue`) oder mehrfach fortsetzen

**Weiterführende Links:**
- [OCaml Manual – Effect Handlers](https://v2.ocaml.org/manual/effects.html)
- [OCaml Effects Tutorial](https://github.com/ocaml-multicore/ocaml-effects-tutorial)

</TabItem>
</Tabs>

## 9.2.3. Effect Types im Typsystem

Effect Types ermöglichen es dem Typsystem, die Seiteneffekte einer Funktion explizit zu erfassen. Reine Funktionen werden auf Typebene von effektbehafteten Funktionen unterschieden, was Kompositionalität und Sicherheit erhöht.

### Sprachen {#sprachen}

<Tabs availableTabs={['elm', 'haskell', 'idris', 'koka', 'lean4', 'purescript']} yellowTabs={['fsharp', 'mercury', 'scala']}>
<TabItem value="elm" label="Elm">

```elm
-- Reine Funktion: kein Effekt im Typ
add : Int -> Int -> Int
add x y = x + y

-- Effekt als Cmd im Typ sichtbar
type Msg = GotName (Result Http.Error String)

fetchName : Cmd Msg
fetchName =
    Http.get
        { url = "/api/name"
        , expect = Http.expectString GotName
        }

-- Update: reine Funktion, die (Model, Cmd Msg) zurückgibt
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotName (Ok name) ->
            ( { model | name = name }, Cmd.none )
        GotName (Err _) ->
            ( model, Cmd.none )
```

**Besonderheiten:**
- Elm ist rein funktional: Seiteneffekte sind ausschließlich über `Cmd` und `Sub` möglich
- Der Typ unterscheidet strikt zwischen reinen Werten und Effekten
- Kein granulares Effect-Tracking: `Cmd msg` unterscheidet nicht zwischen IO-Arten
- The Elm Architecture (TEA) erzwingt die Trennung von Logik und Effekten architektonisch

**Weiterführende Links:**
- [Elm Guide – Effects](https://guide.elm-lang.org/effects/)
- [Elm Guide – HTTP](https://guide.elm-lang.org/effects/http)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Reine Funktion: kein Effekt im Typ
let add x y = x + y

// F# erlaubt ungetrackte Seiteneffekte
let greet name = printfn "Hallo, %s!" name

// Async-Effekt: explizit im Typ (seit F# 2.0)
let greetAsync name : Async<unit> =
    async {
        printfn "Hallo, %s!" name
    }

// Task-Effekt (seit F# 6.0)
let fetchData (url: string) : Task<string> =
    task {
        use client = new HttpClient()
        return! client.GetStringAsync(url)
    }
```

**Besonderheiten:**
- Computation Expressions (`async`, `task`) machen bestimmte Effekte im Typ sichtbar
- F# erlaubt aber auch ungetrackte Seiteneffekte in normalen Funktionen (`printfn` hat Typ `string -> unit`)
- Effect-Tracking ist optional und auf bestimmte Domänen beschränkt (Async, Task, Result)
- Eigene Computation Expressions können für benutzerdefinierte Effekte erstellt werden (seit F# 6.0)

**Weiterführende Links:**
- [F# Documentation – Async](https://learn.microsoft.com/en-us/dotnet/fsharp/tutorials/async)
- [F# Documentation – Computation Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/computation-expressions)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Reine Funktion: kein Effekt im Typ
add :: Int -> Int -> Int
add x y = x + y

-- IO-Effekt: explizit im Typ
greet :: String -> IO ()
greet name = putStrLn ("Hallo, " ++ name ++ "!")

-- State-Effekt: explizit im Typ
increment :: State Int ()
increment = modify (+ 1)

-- Kombination von Effekten (Monad Transformer)
app :: StateT Int IO ()
app = do
    increment
    count <- get
    liftIO (putStrLn ("Zähler: " ++ show count))
```

**Besonderheiten:**
- Das Typsystem unterscheidet strikt zwischen reinen Funktionen (`a -> b`) und effektbehafteten (`a -> IO b`)
- IO, ST, STM und State sind im Typ kodierte Effekte
- Monad Transformer (`StateT`, `ReaderT`, `ExceptT`) kombinieren mehrere Effekte
- Reine Funktionen können keine IO-Operationen ausführen – dies wird vom Compiler erzwungen

**Weiterführende Links:**
- [Haskell Wiki – IO inside](https://wiki.haskell.org/IO_inside)
- [Hackage – transformers](https://hackage.haskell.org/package/transformers)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Reine Funktion: kein Effekt im Typ
add : Int -> Int -> Int
add x y = x + y

-- IO-Effekt: explizit im Typ
greet : String -> IO ()
greet name = putStrLn ("Hallo, " ++ name ++ "!")

-- HasIO-Constraint: flexibles Effect-Tracking
greetFlex : HasIO io => String -> io ()
greetFlex name = putStrLn ("Hallo, " ++ name ++ "!")

-- Linearer Typ: Ressource muss korrekt verwendet werden
openFile : (path : String) -> (mode : Mode) -> IO (Either FileError File)
```

**Besonderheiten:**
- Idris unterscheidet reine von effektbehafteten Funktionen über das Typsystem (wie Haskell)
- `HasIO` als Constraint ermöglicht polymorphe IO-Funktionen
- Lineare Typen (Idris 2) tracken Ressourcen-Effekte auf Typebene
- Abhängige Typen ermöglichen präzisere Effekt-Beschreibungen als in Haskell

**Weiterführende Links:**
- [Idris 2 Documentation – IO](https://idris2.readthedocs.io/en/latest/tutorial/interactive.html)
- [Idris 2 Documentation – Multiplicities](https://idris2.readthedocs.io/en/latest/tutorial/multiplicities.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Reine Funktion: leerer Effekt-Typ (total)
fun add(x : int, y : int) : total int
  x + y

// IO-Effekt: console im Typ sichtbar
fun greet(name : string) : console ()
  println("Hallo, " ++ name ++ "!")

// Mehrere Effekte im Typ
fun greet-ask() : <ask, console> ()
  val name = ask()
  println("Hallo, " ++ name ++ "!")

// Effektpolymorphismus: e ist eine Effekt-Variable
fun twice(action : () -> e ()) : e ()
  action()
  action()
```

**Besonderheiten:**
- Koka trackt alle Seiteneffekte im Typsystem – dies ist das zentrale Sprachfeature
- Reine Funktionen haben den Effekt `total` (oder leere Effekt-Reihe)
- Effekte werden automatisch inferiert und müssen nicht annotiert werden
- Eingebaute Effekte: `console`, `exn`, `div` (Divergenz), `alloc`, `read`, `write`
- Effektpolymorphismus ermöglicht generische Funktionen über beliebige Effekte

**Weiterführende Links:**
- [Koka Documentation – Effect Types](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Reine Funktion: kein Effekt im Typ
def add (x y : Int) : Int :=
  x + y

-- IO-Effekt: explizit im Typ
def greet (name : String) : IO Unit :=
  IO.println s!"Hallo, {name}!"

-- State-Effekt: explizit im Typ
def increment : StateM Nat Unit :=
  modify (· + 1)

-- Kombination von Effekten (Monad Transformer)
def app : StateT Nat IO Unit := do
  increment
  let count ← get
  IO.println s!"Zähler: {count}"
```

**Besonderheiten:**
- Das Typsystem unterscheidet strikt zwischen reinen Funktionen und IO-Funktionen
- `IO`-Monade kapselt Seiteneffekte – reine Funktionen können keine IO-Operationen ausführen
- Monad Transformer (`StateT`, `ReaderT`, `ExceptT`) kombinieren mehrere Effekte
- Abhängige Typen ermöglichen präzisere Effektbeschreibungen als in Haskell

**Weiterführende Links:**
- [Functional Programming in Lean – Monads](https://lean-lang.org/functional_programming_in_lean/monads.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Reine Funktion: kein Effekt im Typ
:- func add(int, int) = int.
add(X, Y) = X + Y.

% IO-Effekt: io-State muss explizit durchgereicht werden
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.format("Hallo, %s!\n", [s(Name)], !IO).

% Determinismus als Effekt-Tracking
:- pred safe_head(list(T)::in, T::out) is semidet.
safe_head([X | _], X).

% Kombination: IO + Determinismus im Typ
:- pred greet_first(list(string)::in, io::di, io::uo) is semidet.
greet_first(Names, !IO) :-
    safe_head(Names, Name),
    greet(Name, !IO).
```

**Besonderheiten:**
- IO-Effekte werden durch explizites Threading von `io.state` (`!IO`) getrackt – reine Prädikate haben keinen `io`-Parameter
- Determinismus-Deklarationen (`det`, `semidet`, `multi`, `nondet`) tracken Nichtdeterminismus als Effektart
- `impure`/`semipure`-Deklarationen markieren kontrollierte Reinheitsverletzungen (z.B. für FFI)
- Der Compiler erzwingt korrekte Purity: reine Prädikate können keine IO-Operationen aufrufen

**Weiterführende Links:**
- [Mercury Language Reference – Purity](https://www.mercurylang.org/information/doc-release/mercury_ref/Purity.html)
- [Mercury Language Reference – Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Reine Funktion: kein Effekt im Typ
add :: Int -> Int -> Int
add x y = x + y

-- Synchroner Effekt: Effect
greet :: String -> Effect Unit
greet name = Console.log ("Hallo, " <> name <> "!")

-- Asynchroner Effekt: Aff
delay :: Milliseconds -> Aff Unit
delay ms = Aff.delay ms

-- Kombination von Effekten
app :: Aff Unit
app = do
    liftEffect (greet "Welt")
    delay (Milliseconds 1000.0)
    liftEffect (greet "nochmal!")
```

**Besonderheiten:**
- `Effect` für synchrone Seiteneffekte, `Aff` für asynchrone Effekte
- Reine Funktionen sind strikt von effektbehafteten getrennt (wie in Haskell)
- Frühere Versionen hatten row-basierte Effekttypen (`Eff (console :: CONSOLE | r)`) für granulares Tracking
- `liftEffect` hebt synchrone Effekte in den asynchronen Kontext

**Weiterführende Links:**
- [PureScript – Effect](https://pursuit.purescript.org/packages/purescript-effect)
- [PureScript – Aff](https://pursuit.purescript.org/packages/purescript-aff)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: ZIO

// Reine Funktion: kein Effekt im Typ
def add(x: Int, y: Int): Int = x + y

// IO-Effekt: explizit im Typ
// Task[A] = ZIO[Any, Throwable, A]
def greet(name: String): Task[Unit] =
  Console.printLine(s"Hallo, $name!")

// Kombination: Effekttypen werden zusammengeführt
def app: Task[Unit] =
  for
    n <- Random.nextIntBounded(10)
    _ <- Console.printLine(s"Zufallszahl: $n")
  yield ()
```

**Besonderheiten:**
- Effect-Tracking auf Bibliotheksebene über ZIO (`ZIO[R, E, A]`) oder Cats Effect (`IO[A]`)
- `R` (Environment), `E` (Error), `A` (Wert) kodieren alle Aspekte im Typ
- Scala selbst erlaubt ungetrackte Seiteneffekte – die Disziplin kommt von der Bibliothek
- ZIO's Environment-Typ (`R`) ermöglicht Dependency Injection auf Typebene

**Weiterführende Links:**
- [ZIO Documentation](https://zio.dev/)
- [Cats Effect Documentation](https://typelevel.org/cats-effect/)

</TabItem>
</Tabs>