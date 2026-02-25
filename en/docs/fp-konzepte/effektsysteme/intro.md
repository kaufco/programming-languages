---
slug: /fp-konzepte/effektsysteme
title: 9.2. Effect Systems
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 9.2. Effect Systems

Algebraic effects, effect handlers, and effect tracking.

## 9.2.1. Algebraic Effects

Algebraic effects are an approach to structured handling of side effects, where effects are declared as abstract operations and interpreted by handlers. Unlike monads, they allow flexible composition without the "monad transformer" problem.

### Languages {#sprachen}

<Tabs availableTabs={['koka', 'ocaml']} yellowTabs={['common-lisp', 'haskell']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Declare effect as condition
(define-condition ask (condition) ())

;; Program with effect operation (signal = perform)
(defun greet ()
  (let ((name (restart-case (signal 'ask)
                (provide (value) value))))
    (format t "Hallo, ~A!~%" name)))
```

**Special features:**
- Common Lisp's condition/restart system is a historical precursor to algebraic effects
- `signal` corresponds to "performing" an effect
- `restart-case` defines resumption points that can be called by handlers
- Unlike true algebraic effects, the system is dynamic and untyped

**Further reading:**
- [Common Lisp HyperSpec – Conditions](http://www.lispworks.com/documentation/HyperSpec/Body/09_.htm)
- [Common Lisp HyperSpec – restart-case](http://www.lispworks.com/documentation/HyperSpec/Body/m_rst_ca.htm)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: polysemy

-- Effect declaration as GADT
data Ask m a where
  Ask :: Ask m String

data Log m a where
  Log :: String -> Log m ()

makeSem ''Ask
makeSem ''Log

-- Program with algebraic effects
greet :: Members '[Ask, Log] r => Sem r ()
greet = do
  name <- ask
  log ("Hallo, " ++ name ++ "!")
```

**Special features:**
- Algebraic effects are implemented via libraries (e.g., `polysemy`, `effectful`, `fused-effects`)
- Effects are declared as GADTs, not as native language constructs
- Template Haskell (`makeSem`) automatically generates smart constructors
- Effects are encoded in the function's type (`Members '[Ask, Log] r`)

**Further reading:**
- [polysemy – GitHub](https://github.com/polysemy-research/polysemy)
- [effectful – GitHub](https://github.com/haskell-effectful/effectful)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Effect declarations
effect ask
  ctl ask() : string

effect log
  ctl log(msg : string) : ()

// Program with algebraic effects
fun greet() : <ask, log> ()
  val name = ask()
  log("Hallo, " ++ name ++ "!")
```

**Special features:**
- Koka is the reference language for algebraic effects – they are the central language feature
- Effects are declared with `effect`, operations with `ctl` (Control) or `fun`
- Effects appear in the function type as an effect row (`<ask, log>`)
- `ctl` operations have access to the continuation (like `shift` in delimited continuations)

**Further reading:**
- [Koka Documentation – Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Algebraic effects (since OCaml 5.0) *)
type _ Effect.t +=
  | Ask : string Effect.t
  | Log : string -> unit Effect.t

(* Program with algebraic effects *)
let greet () =
  let name = Effect.perform Ask in
  Effect.perform (Log ("Hallo, " ^ name ^ "!"))
```

**Special features:**
- Native support for algebraic effects since OCaml 5.0
- Effects are declared as extensible variants (`Effect.t`)
- `Effect.perform` executes an effect operation and transfers control to the next handler
- Effects are currently not represented in the type system (dynamically checked at runtime)

**Further reading:**
- [OCaml Manual – Effect Handlers](https://v2.ocaml.org/manual/effects.html)
- [OCaml Effects Tutorial](https://github.com/ocaml-multicore/ocaml-effects-tutorial)

</TabItem>
</Tabs>

## 9.2.2. Effect Handlers

Effect handlers define how algebraic effect operations are interpreted. They intercept effects, can resume or discard the continuation, and enable the same program to be executed with different interpretations.

### Languages {#sprachen}

<Tabs availableTabs={['koka', 'ocaml']} yellowTabs={['common-lisp', 'haskell']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Handler 1: Returns fixed value
(handler-bind
  ((ask (lambda (c)
          (declare (ignore c))
          (invoke-restart 'provide "Welt"))))
  (greet))
;; Output: Hallo, Welt!

;; Handler 2: Interactive
(handler-bind
  ((ask (lambda (c)
          (declare (ignore c))
          (format t "Name: ")
          (invoke-restart 'provide (read-line)))))
  (greet))
;; Reads name interactively from stdin
```

**Special features:**
- `handler-bind` installs handlers that run in the dynamic context of the signaler
- `invoke-restart` resumes execution at the restart point (analogous to `continue` in algebraic effects)
- Different handlers can treat the same conditions differently
- Handlers have access to the full call stack – more powerful than simple exception handlers

**Further reading:**
- [Common Lisp HyperSpec – handler-bind](http://www.lispworks.com/documentation/HyperSpec/Body/m_handle.htm)
- [Common Lisp HyperSpec – invoke-restart](http://www.lispworks.com/documentation/HyperSpec/Body/f_invo_1.htm)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: polysemy

-- Handler: Ask returns fixed value
runAskConst :: String -> Sem (Ask ': r) a -> Sem r a
runAskConst val = interpret $ \case
  Ask -> pure val

-- Handler: Log outputs to console
runLogIO :: Member (Embed IO) r => Sem (Log ': r) a -> Sem r a
runLogIO = interpret $ \case
  Log msg -> embed (putStrLn msg)

-- Handler: Ignore log (for tests)
runLogSilent :: Sem (Log ': r) a -> Sem r a
runLogSilent = interpret $ \case
  Log _ -> pure ()

-- Handlers are freely composable
main :: IO ()
main = runM . runLogIO . runAskConst "Welt" $ greet
-- Output: Hallo, Welt!
```

**Special features:**
- Handlers are defined as functions that remove an effect from the effect stack
- Handlers are freely composable: the order of handlers determines the interpretation
- Different handlers can interpret the same effect differently (production vs. test)
- `interpret` defines a handler through pattern matching on effect constructors

**Further reading:**
- [polysemy – Interpretation](https://github.com/polysemy-research/polysemy#readme)
- [effectful – Tutorial](https://github.com/haskell-effectful/effectful#readme)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Handler 1: Returns fixed value
fun run-const()
  with handler
    ctl ask() resume("Welt")
  with handler
    ctl log(msg)
      println(msg)
      resume(())
  greet()
// Output: Hallo, Welt!

// Handler 2: Test mode (ignore log)
fun run-test()
  with handler
    ctl ask() resume("Test")
  with handler
    ctl log(_msg) resume(())
  greet()
```

**Special features:**
- `with handler` installs an effect handler for the following block
- `resume(value)` resumes the continuation at the point of the effect operation
- Handlers can discard the continuation, call it once or multiple times
- Different handlers enable different interpretations of the same program

**Further reading:**
- [Koka Documentation – Handlers](https://koka-lang.github.io/koka/doc/book.html#sec-handlers)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Effect Handler (since OCaml 5.0) *)
open Effect
open Effect.Deep

(* Handler 1: Interactive mode *)
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

(* Handler 2: Test mode *)
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

let () = run_interactive greet  (* Reads name from stdin *)
let () = run_test greet          (* Uses "Test" *)
```

**Special features:**
- `try_with` installs a deep handler that handles effects recursively
- `continue k value` resumes the continuation with the given value
- Shallow handlers (`Effect.Shallow`) allow one-time handling without automatic recursion
- Handlers can discard the continuation (`discontinue`) or resume it multiple times

**Further reading:**
- [OCaml Manual – Effect Handlers](https://v2.ocaml.org/manual/effects.html)
- [OCaml Effects Tutorial](https://github.com/ocaml-multicore/ocaml-effects-tutorial)

</TabItem>
</Tabs>

## 9.2.3. Effect Types in the Type System

Effect types enable the type system to explicitly capture the side effects of a function. Pure functions are distinguished from effectful functions at the type level, which increases composability and safety.

### Languages {#sprachen}

<Tabs availableTabs={['elm', 'haskell', 'idris', 'koka', 'lean4', 'purescript']} yellowTabs={['fsharp', 'mercury', 'scala']}>
<TabItem value="elm" label="Elm">

```elm
-- Pure function: no effect in type
add : Int -> Int -> Int
add x y = x + y

-- Effect visible as Cmd in type
type Msg = GotName (Result Http.Error String)

fetchName : Cmd Msg
fetchName =
    Http.get
        { url = "/api/name"
        , expect = Http.expectString GotName
        }

-- Update: pure function that returns (Model, Cmd Msg)
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotName (Ok name) ->
            ( { model | name = name }, Cmd.none )
        GotName (Err _) ->
            ( model, Cmd.none )
```

**Special features:**
- Elm is purely functional: side effects are only possible via `Cmd` and `Sub`
- The type strictly distinguishes between pure values and effects
- No granular effect tracking: `Cmd msg` does not distinguish between IO types
- The Elm Architecture (TEA) architecturally enforces the separation of logic and effects

**Further reading:**
- [Elm Guide – Effects](https://guide.elm-lang.org/effects/)
- [Elm Guide – HTTP](https://guide.elm-lang.org/effects/http)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Pure function: no effect in type
let add x y = x + y

// F# allows untracked side effects
let greet name = printfn "Hallo, %s!" name

// Async effect: explicit in type (since F# 2.0)
let greetAsync name : Async<unit> =
    async {
        printfn "Hallo, %s!" name
    }

// Task effect (since F# 6.0)
let fetchData (url: string) : Task<string> =
    task {
        use client = new HttpClient()
        return! client.GetStringAsync(url)
    }
```

**Special features:**
- Computation expressions (`async`, `task`) make certain effects visible in the type
- F# also allows untracked side effects in normal functions (`printfn` has type `string -> unit`)
- Effect tracking is optional and limited to certain domains (Async, Task, Result)
- Custom computation expressions can be created for user-defined effects (since F# 6.0)

**Further reading:**
- [F# Documentation – Async](https://learn.microsoft.com/en-us/dotnet/fsharp/tutorials/async)
- [F# Documentation – Computation Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/computation-expressions)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Pure function: no effect in type
add :: Int -> Int -> Int
add x y = x + y

-- IO effect: explicit in type
greet :: String -> IO ()
greet name = putStrLn ("Hallo, " ++ name ++ "!")

-- State effect: explicit in type
increment :: State Int ()
increment = modify (+ 1)

-- Combination of effects (Monad Transformer)
app :: StateT Int IO ()
app = do
    increment
    count <- get
    liftIO (putStrLn ("Zähler: " ++ show count))
```

**Special features:**
- The type system strictly distinguishes between pure functions (`a -> b`) and effectful ones (`a -> IO b`)
- IO, ST, STM, and State are effects encoded in the type
- Monad transformers (`StateT`, `ReaderT`, `ExceptT`) combine multiple effects
- Pure functions cannot execute IO operations – this is enforced by the compiler

**Further reading:**
- [Haskell Wiki – IO inside](https://wiki.haskell.org/IO_inside)
- [Hackage – transformers](https://hackage.haskell.org/package/transformers)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Pure function: no effect in type
add : Int -> Int -> Int
add x y = x + y

-- IO effect: explicit in type
greet : String -> IO ()
greet name = putStrLn ("Hallo, " ++ name ++ "!")

-- HasIO constraint: flexible effect tracking
greetFlex : HasIO io => String -> io ()
greetFlex name = putStrLn ("Hallo, " ++ name ++ "!")

-- Linear type: resource must be used correctly
openFile : (path : String) -> (mode : Mode) -> IO (Either FileError File)
```

**Special features:**
- Idris distinguishes pure from effectful functions via the type system (like Haskell)
- `HasIO` as a constraint enables polymorphic IO functions
- Linear types (Idris 2) track resource effects at the type level
- Dependent types enable more precise effect descriptions than in Haskell

**Further reading:**
- [Idris 2 Documentation – IO](https://idris2.readthedocs.io/en/latest/tutorial/interactive.html)
- [Idris 2 Documentation – Multiplicities](https://idris2.readthedocs.io/en/latest/tutorial/multiplicities.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Pure function: empty effect type (total)
fun add(x : int, y : int) : total int
  x + y

// IO effect: console visible in type
fun greet(name : string) : console ()
  println("Hallo, " ++ name ++ "!")

// Multiple effects in type
fun greet-ask() : <ask, console> ()
  val name = ask()
  println("Hallo, " ++ name ++ "!")

// Effect polymorphism: e is an effect variable
fun twice(action : () -> e ()) : e ()
  action()
  action()
```

**Special features:**
- Koka tracks all side effects in the type system – this is the central language feature
- Pure functions have the effect `total` (or empty effect row)
- Effects are automatically inferred and do not need to be annotated
- Built-in effects: `console`, `exn`, `div` (divergence), `alloc`, `read`, `write`
- Effect polymorphism enables generic functions over arbitrary effects

**Further reading:**
- [Koka Documentation – Effect Types](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pure function: no effect in type
def add (x y : Int) : Int :=
  x + y

-- IO effect: explicit in type
def greet (name : String) : IO Unit :=
  IO.println s!"Hallo, {name}!"

-- State effect: explicit in type
def increment : StateM Nat Unit :=
  modify (· + 1)

-- Combination of effects (Monad Transformer)
def app : StateT Nat IO Unit := do
  increment
  let count ← get
  IO.println s!"Zähler: {count}"
```

**Special features:**
- The type system strictly distinguishes between pure functions and IO functions
- The `IO` monad encapsulates side effects – pure functions cannot execute IO operations
- Monad transformers (`StateT`, `ReaderT`, `ExceptT`) combine multiple effects
- Dependent types enable more precise effect descriptions than in Haskell

**Further reading:**
- [Functional Programming in Lean – Monads](https://lean-lang.org/functional_programming_in_lean/monads.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Pure function: no effect in type
:- func add(int, int) = int.
add(X, Y) = X + Y.

% IO effect: io state must be explicitly threaded
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.format("Hallo, %s!\n", [s(Name)], !IO).

% Determinism as effect tracking
:- pred safe_head(list(T)::in, T::out) is semidet.
safe_head([X | _], X).

% Combination: IO + determinism in type
:- pred greet_first(list(string)::in, io::di, io::uo) is semidet.
greet_first(Names, !IO) :-
    safe_head(Names, Name),
    greet(Name, !IO).
```

**Special features:**
- IO effects are tracked through explicit threading of `io.state` (`!IO`) – pure predicates have no `io` parameter
- Determinism declarations (`det`, `semidet`, `multi`, `nondet`) track non-determinism as an effect type
- `impure`/`semipure` declarations mark controlled purity violations (e.g., for FFI)
- The compiler enforces correct purity: pure predicates cannot call IO operations

**Further reading:**
- [Mercury Language Reference – Purity](https://www.mercurylang.org/information/doc-release/mercury_ref/Purity.html)
- [Mercury Language Reference – Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Pure function: no effect in type
add :: Int -> Int -> Int
add x y = x + y

-- Synchronous effect: Effect
greet :: String -> Effect Unit
greet name = Console.log ("Hallo, " <> name <> "!")

-- Asynchronous effect: Aff
delay :: Milliseconds -> Aff Unit
delay ms = Aff.delay ms

-- Combination of effects
app :: Aff Unit
app = do
    liftEffect (greet "Welt")
    delay (Milliseconds 1000.0)
    liftEffect (greet "nochmal!")
```

**Special features:**
- `Effect` for synchronous side effects, `Aff` for asynchronous effects
- Pure functions are strictly separated from effectful ones (like in Haskell)
- Earlier versions had row-based effect types (`Eff (console :: CONSOLE | r)`) for granular tracking
- `liftEffect` lifts synchronous effects into the asynchronous context

**Further reading:**
- [PureScript – Effect](https://pursuit.purescript.org/packages/purescript-effect)
- [PureScript – Aff](https://pursuit.purescript.org/packages/purescript-aff)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Requires: ZIO

// Pure function: no effect in type
def add(x: Int, y: Int): Int = x + y

// IO effect: explicit in type
// Task[A] = ZIO[Any, Throwable, A]
def greet(name: String): Task[Unit] =
  Console.printLine(s"Hallo, $name!")

// Combination: effect types are merged
def app: Task[Unit] =
  for
    n <- Random.nextIntBounded(10)
    _ <- Console.printLine(s"Zufallszahl: $n")
  yield ()
```

**Special features:**
- Effect tracking at library level via ZIO (`ZIO[R, E, A]`) or Cats Effect (`IO[A]`)
- `R` (Environment), `E` (Error), `A` (Value) encode all aspects in the type
- Scala itself allows untracked side effects – the discipline comes from the library
- ZIO's environment type (`R`) enables dependency injection at the type level

**Further reading:**
- [ZIO Documentation](https://zio.dev/)
- [Cats Effect Documentation](https://typelevel.org/cats-effect/)

</TabItem>
</Tabs>