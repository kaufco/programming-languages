---
slug: /fehlerbehandlung/alternative-error-handling
title: 12.2. Alternative Error Handling
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 12.2. Alternative Error Handling

Alternative Methoden zur Fehlerbehandlung.

## 12.2.1. Error Returns (Multiple Return Values)

Error Returns ermöglichen die Rückgabe von Fehlerinformationen als Teil des Rückgabewerts, typischerweise durch mehrere Rückgabewerte oder zusammengesetzte Typen.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'erlang', 'go', 'lua', 'mercury', 'objective-c', 'python', 'rust', 'v', 'zig']} orangeTabs={['c']}>
<TabItem value="c" label="C">

```c
#include <stdio.h>
#include <errno.h>

// Struktur für Rückgabewert und Fehler
typedef struct {
    int value;
    int error;
} Result;

Result divide(int a, int b)
{
    Result result = {0, 0};
    if (b == 0)
    {
        result.error = 1; // Fehler
        return result;
    }
    result.value = a / b;
    return result;
}

// Verwendung
Result r = divide(10, 2);
if (r.error != 0)
{
    printf("Fehler: Division durch Null\n");
}
else
{
    printf("Ergebnis: %d\n", r.value);
}
```

**Besonderheiten:**
- Keine nativen mehrfachen Rückgabewerte
- Strukturen werden verwendet, um Wert und Fehler zu kombinieren
- `errno` wird häufig für Fehlercodes verwendet

**Weiterführende Links:**
- [C Standard Library - errno](https://en.cppreference.com/w/c/error/errno)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <optional>
#include <tuple>

// Mit std::optional
std::optional<int> divide(int a, int b)
{
    if (b == 0)
    {
        return std::nullopt; // Fehler
    }
    return a / b;
}

// Mit std::tuple
std::tuple<int, bool> divideWithError(int a, int b)
{
    if (b == 0)
    {
        return {0, false}; // Fehler
    }
    return {a / b, true};
}

// Verwendung
auto result = divide(10, 2);
if (result.has_value())
{
    std::cout << "Ergebnis: " << *result << std::endl;
}
```

**Besonderheiten:**
- `std::optional` für optionale Rückgabewerte (seit C++17)
- `std::tuple` für mehrere Rückgabewerte
- `std::pair` für zwei Rückgabewerte

**Weiterführende Links:**
- [cppreference.com - std::optional](https://en.cppreference.com/w/cpp/utility/optional)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import "fmt"

func divide(a, b int) (int, error)
{
    if b == 0
    {
        return 0, fmt.Errorf("Division durch Null")
    }
    return a / b, nil
}

// Verwendung
result, err := divide(10, 2)
if err != nil
{
    fmt.Printf("Fehler: %v\n", err)
    return
}
fmt.Printf("Ergebnis: %d\n", result)
```

**Besonderheiten:**
- Mehrere Rückgabewerte sind ein Kernfeature der Sprache
- Konvention: Letzter Rückgabewert ist der Fehler (oft `error`-Typ)
- `nil` bedeutet "kein Fehler"
- Compiler erzwingt nicht die Behandlung des Fehlers

**Weiterführende Links:**
- [Go Documentation - Error Handling](https://go.dev/doc/effective_go#errors)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function divide(a, b)
    if b == 0 then
        return nil, "Division durch Null"
    end
    return a / b, nil
end

-- Verwendung
local result, err = divide(10, 2)
if err then
    print("Fehler: " .. err)
else
    print("Ergebnis: " .. result)
end
```

**Besonderheiten:**
- Mehrere Rückgabewerte sind ein Kernfeature der Sprache
- Konvention: Erster Wert ist das Ergebnis, zweiter ist der Fehler
- `nil` wird häufig für Fehler verwendet

**Weiterführende Links:**
- [Lua Documentation - Multiple Results](https://www.lua.org/manual/5.4/manual.html#3.4.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module maybe.

% Idiomatisch: maybe-Typ für fehlerhafte Rückgabe
:- func divide(int, int) = maybe(int).
divide(_, 0) = no.
divide(A, B) = yes(A // B).

% Alternative: Mehrere Output-Parameter
:- pred divide(int::in, int::in, int::out, string::out) is det.
divide(A, B, Result, Error) :-
    ( B = 0 ->
        Result = 0, Error = "Division durch Null"
    ;
        Result = A // B, Error = ""
    ).

% Verwendung
main(!IO) :-
    Result = divide(10, 2),
    (
        Result = yes(Value),
        io.format("Ergebnis: %d\n", [i(Value)], !IO)
    ;
        Result = no,
        io.write_string("Fehler: Division durch Null\n", !IO)
    ).
```

**Besonderheiten:**
- `maybe(T)` mit `yes(Value)` / `no` als idiomatischer Error-Return-Typ
- Mehrere Output-Parameter als Alternative zu mehreren Rückgabewerten
- `semidet`-Prädikate als impliziter Error Return (Fehlschlag statt Fehlerwert)

**Weiterführende Links:**
- [Mercury Library Reference - maybe](https://www.mercurylang.org/information/doc-release/mercury_library/maybe.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def divide(a, b):
    if b == 0:
        return None, "Division durch Null"
    return a / b, None

# Verwendung
result, err = divide(10, 2)
if err:
    print(f"Fehler: {err}")
else:
    print(f"Ergebnis: {result}")
```

**Besonderheiten:**
- Mehrere Rückgabewerte durch Tupel
- Konvention: Erster Wert ist das Ergebnis, zweiter ist der Fehler
- `None` wird häufig für Fehler verwendet

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn divide(a: i32, b: i32) -> Result<i32, &'static str>
{
    if b == 0
    {
        return Err("Division durch Null");
    }
    Ok(a / b)
}

// Verwendung
match divide(10, 2)
{
    Ok(result) => println!("Ergebnis: {}", result),
    Err(e) => println!("Fehler: {}", e),
}
```

**Besonderheiten:**
- `Result<T, E>`-Typ für Fehlerbehandlung
- `Ok(T)` für Erfolg, `Err(E)` für Fehler
- Pattern Matching für Fehlerbehandlung
- Compiler erzwingt Behandlung des Result-Werts

**Weiterführende Links:**
- [Rust Book - Error Handling](https://doc.rust-lang.org/book/ch09-00-error-handling.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

fn divide(a: i32, b: i32) !i32
{
    if (b == 0)
    {
        return error.DivisionByZero;
    }
    return a / b;
}

// Verwendung
const result = divide(10, 2) catch |err|
{
    std.debug.print("Fehler: {}\n", .{err});
    return;
};
std.debug.print("Ergebnis: {}\n", .{result});
```

**Besonderheiten:**
- Error Union Types (`!T` ist `T` oder `error`)
- `catch` für Fehlerbehandlung
- Compiler erzwingt Behandlung von Error Unions

**Weiterführende Links:**
- [Zig Documentation - Error Handling](https://ziglang.org/documentation/0.11.0/#Errors)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Error Returns via Tagged Tuples
safe_divide(_, 0) -> {error, division_by_zero};
safe_divide(X, Y) -> {ok, X div Y}.

% Verwendung mit Pattern Matching
case safe_divide(10, 3) of
    {ok, Result} -> io:format("Ergebnis: ~p~n", [Result]);
    {error, Reason} -> io:format("Fehler: ~p~n", [Reason])
end.
```

**Besonderheiten:**
- `{ok, Value}` / `{error, Reason}` ist das idiomatische Error-Return-Pattern
- Pattern Matching zur Fehlerbehandlung
- Kein spezieller Result-Type, sondern Konvention mit Tagged Tuples

**Weiterführende Links:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSError Out-Parameter Pattern
- (BOOL)saveData:(NSData *)data toPath:(NSString *)path error:(NSError **)error {
    if (!data) {
        if (error) {
            *error = [NSError errorWithDomain:@"AppDomain"
                                         code:100
                                     userInfo:@{NSLocalizedDescriptionKey: @"Keine Daten"}];
        }
        return NO;
    }
    return [data writeToFile:path options:0 error:error];
}

// Verwendung
NSError *error = nil;
BOOL success = [self saveData:data toPath:@"/tmp/file" error:&error];
if (!success) {
    NSLog(@"Fehler: %@", error.localizedDescription);
}
```

**Besonderheiten:**
- NSError-Out-Parameter (`NSError **`) ist das Standard-Fehlerbehandlungsmuster
- Rückgabewert (BOOL oder nil) zeigt Erfolg/Misserfolg an
- NSError enthält domain, code und userInfo
- Dieses Pattern wird von Apple gegenüber Exceptions bevorzugt

**Weiterführende Links:**
- [Apple Documentation - Error Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Error Returns
fn parse_int(s string) !int {
    for c in s {
        if c < `0` || c > `9` {
            return error('Ungültiges Zeichen: ${c}')
        }
    }
    return s.int()
}

value := parse_int('42') or {
    println('Fehler: ${err}')
    return
}
println(value)
```

**Besonderheiten:**
- `!Type` kennzeichnet fehlbare Funktionen (Result Type)
- `error('message')` erzeugt einen Fehler
- `or { }` Block für Error-Handling
- Fehler können mit `!` propagiert werden

**Weiterführende Links:**
- [V Documentation - Error Handling](https://github.com/vlang/v/blob/master/doc/docs.md#error-handling)

</TabItem>
</Tabs>


## 12.2.2. No Exceptions (Error Returns only)

Sprachen, die keine Exception-Mechanismen haben und ausschließlich Error Returns für die Fehlerbehandlung verwenden.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'elm', 'gleam', 'go', 'idris', 'lean4', 'roc', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
#include <stdio.h>
#include <errno.h>

int divide(int a, int b, int* result)
{
    if (b == 0)
    {
        return 1; // Fehlercode
    }
    *result = a / b;
    return 0; // Erfolg
}

// Verwendung
int result;
int error = divide(10, 2, &result);
if (error != 0)
{
    printf("Fehler: Division durch Null\n");
}
else
{
    printf("Ergebnis: %d\n", result);
}
```

**Besonderheiten:**
- Keine Exception-Mechanismen
- Fehlerbehandlung durch Rückgabecodes
- `errno` wird häufig für Fehlercodes verwendet
- Out-Parameter für Rückgabewerte

**Weiterführende Links:**
- [C Standard Library - errno](https://en.cppreference.com/w/c/error/errno)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import "fmt"

func divide(a, b int) (int, error)
{
    if b == 0
    {
        return 0, fmt.Errorf("Division durch Null")
    }
    return a / b, nil
}

// Verwendung
result, err := divide(10, 2)
if err != nil
{
    fmt.Printf("Fehler: %v\n", err)
    return
}
fmt.Printf("Ergebnis: %d\n", result)
```

**Besonderheiten:**
- Keine Exception-Mechanismen
- Fehlerbehandlung ausschließlich durch Error Returns
- Konvention: Letzter Rückgabewert ist der Fehler
- `nil` bedeutet "kein Fehler"
- Compiler erzwingt nicht die Behandlung des Fehlers

**Weiterführende Links:**
- [Go Documentation - Error Handling](https://go.dev/doc/effective_go#errors)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

fn divide(a: i32, b: i32) !i32
{
    if (b == 0)
    {
        return error.DivisionByZero;
    }
    return a / b;
}

// Verwendung
const result = divide(10, 2) catch |err|
{
    std.debug.print("Fehler: {}\n", .{err});
    return;
};
std.debug.print("Ergebnis: {}\n", .{result});
```

**Besonderheiten:**
- Keine Exception-Mechanismen
- Fehlerbehandlung durch Error Union Types (`!T`)
- `catch` für Fehlerbehandlung
- Compiler erzwingt Behandlung von Error Unions

**Weiterführende Links:**
- [Zig Documentation - Error Handling](https://ziglang.org/documentation/0.11.0/#Errors)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm hat keine Exceptions
-- Fehlerbehandlung über Result-Typ
divide : Int -> Int -> Result String Int
divide a b =
    if b == 0 then
        Err "Division durch Null"
    else
        Ok (a // b)

-- Fehlerbehandlung über Maybe-Typ
safeHead : List a -> Maybe a
safeHead list =
    case list of
        first :: _ -> Just first
        [] -> Nothing
```

**Besonderheiten:**
- Elm hat keine Exceptions und kein `try`/`catch`
- Garantie: keine Laufzeitfehler (keine `null`, keine `undefined`)
- `Result error value` für Operationen, die fehlschlagen können
- `Maybe a` für optionale Werte
- Compiler erzwingt Behandlung aller Fehlerfälle

**Weiterführende Links:**
- [Elm Documentation - Error Handling](https://guide.elm-lang.org/error_handling/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Keine Exceptions - Result Types für Fehlerbehandlung
pub fn divide(a: Int, b: Int) -> Result(Int, String) {
  case b {
    0 -> Error("Division durch Null")
    _ -> Ok(a / b)
  }
}

// use-Syntax für Result-Verkettung
pub fn calculate() -> Result(Int, String) {
  use x <- result.try(divide(10, 2))
  use y <- result.try(divide(x, 3))
  Ok(y)
}
```

**Besonderheiten:**
- Gleam hat keine Exceptions (kein try/catch/throw)
- `Result(value, error)` für alle Fehlerbehandlung
- `use`-Syntax für elegante Result-Verkettung
- Compiler erzwingt Behandlung von Result-Werten

**Weiterführende Links:**
- [Gleam Documentation - Result](https://tour.gleam.run/data-types/results/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Keine Exceptions: Fehler durch Either-Typ
safeDivide : Int -> Int -> Either String Int
safeDivide _ 0 = Left "Division durch Null"
safeDivide x y = Right (x `div` y)

-- Fehlerbehandlung durch Pattern Matching
result : String
result = case safeDivide 10 0 of
    Left err => "Fehler: " ++ err
    Right val => "Ergebnis: " ++ show val
```

**Besonderheiten:**
- Keine Exceptions in der Sprache
- Fehler werden durch `Either`, `Maybe` und Dependent Types modelliert
- Compiler erzwingt explizite Fehlerbehandlung

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Keine Exceptions: Fehler durch Except und Option modelliert
def safeDivide (x y : Int) : Except String Int :=
  if y == 0 then .error "Division durch Null"
  else .ok (x / y)

-- Fehlerbehandlung durch Pattern Matching
def result : String :=
  match safeDivide 10 0 with
  | .ok val => s!"Ergebnis: {val}"
  | .error err => s!"Fehler: {err}"

-- Option für fehlbare Operationen
def safeHead (xs : List α) : Option α :=
  match xs with
  | [] => none
  | x :: _ => some x
```

**Besonderheiten:**
- Keine Exceptions in der Kernsprache
- `Except ε α` für typisierte Fehlerbehandlung (analog zu `Either`)
- `Option α` für optionale Werte (analog zu `Maybe`)
- Compiler erzwingt explizite Fehlerbehandlung durch Typsystem

**Weiterführende Links:**
- [Lean 4 Documentation - Error Handling](https://lean-lang.org/lean4/doc/monads.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Keine Exceptions: Fehler werden durch Tag Unions modelliert
divide : F64, F64 -> [Ok F64, DivByZero]
divide = \x, y ->
    if y == 0.0 then
        DivByZero
    else
        Ok (x / y)

result = divide 10.0 0.0
when result is
    Ok value -> "Ergebnis: $(Num.toStr value)"
    DivByZero -> "Fehler: Division durch Null"
```

**Besonderheiten:**
- Keine Exceptions in der Sprache
- Fehler werden durch Tag Unions (Result-artige Typen) modelliert
- `crash` für unrecoverable Fehler (ähnlich panic)

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="v" label="V">

```v
// No Exceptions: Error Returns only
fn divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('Division durch Null')
    }
    return a / b
}

// Error-Handling mit or-Block
result := divide(10.0, 0.0) or {
    println('Fehler: ${err}')
    0.0
}
```

**Besonderheiten:**
- Keine try/catch/throw Mechanismen
- `!Type` für Result Types
- `or { }` für Error-Handling
- Explizite Fehlerbehandlung erzwungen

**Weiterführende Links:**
- [V Documentation - Error Handling](https://github.com/vlang/v/blob/master/doc/docs.md#error-handling)

</TabItem>
</Tabs>


## 12.2.3. Result Types / Either Types

Result Types (oder Either Types) sind algebraische Datentypen, die entweder einen Erfolgswert oder einen Fehlerwert enthalten.

### Sprachen {#sprachen}

<Tabs availableTabs={['elixir', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'v', 'zig']}>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math do
  def divide(a, b) when b != 0, do: {:ok, div(a, b)}
  def divide(_a, 0), do: {:error, "Division durch Null"}
end

# Verwendung
case Math.divide(10, 2) do
  {:ok, result} -> IO.puts("Ergebnis: #{result}")
  {:error, reason} -> IO.puts("Fehler: #{reason}")
end
```

**Besonderheiten:**
- Tupel `{:ok, value}` für Erfolg, `{:error, reason}` für Fehler
- Pattern Matching für Fehlerbehandlung
- Konvention, keine speziellen Typen

**Weiterführende Links:**
- [Elixir Documentation - Error Handling](https://elixir-lang.org/getting-started/errors-and-exits.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
type Result error value
    = Ok value
    | Err error

divide : Int -> Int -> Result String Int
divide a b =
    if b == 0 then
        Err "Division durch Null"
    else
        Ok (a // b)

-- Verwendung
case divide 10 2 of
    Ok result -> "Ergebnis: " ++ String.fromInt result
    Err reason -> "Fehler: " ++ reason
```

**Besonderheiten:**
- `Result error value` ist ein eingebauter Typ
- `Ok value` für Erfolg, `Err error` für Fehler
- Pattern Matching für Fehlerbehandlung
- Compiler erzwingt Behandlung des Result-Werts

**Weiterführende Links:**
- [Elm Documentation - Error Handling](https://guide.elm-lang.org/error_handling/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Result<'T, 'TError> =
    | Ok of 'T
    | Error of 'TError

let divide a b =
    if b = 0 then
        Error "Division durch Null"
    else
        Ok (a / b)

// Verwendung
match divide 10 2 with
| Ok result -> printfn "Ergebnis: %d" result
| Error reason -> printfn "Fehler: %s" reason
```

**Besonderheiten:**
- `Result<'T, 'TError>` ist ein eingebauter Typ (seit F# 4.1)
- `Ok value` für Erfolg, `Error error` für Fehler
- Pattern Matching für Fehlerbehandlung

**Weiterführende Links:**
- [F# Documentation - Result Type](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/results)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
pub fn divide(a: Int, b: Int) -> Result(Int, String) {
  case b {
    0 -> Error("Division durch Null")
    _ -> Ok(a / b)
  }
}

// Verwendung
case divide(10, 2) {
  Ok(result) -> io.println("Ergebnis: " <> int.to_string(result))
  Error(reason) -> io.println("Fehler: " <> reason)
}
```

**Besonderheiten:**
- `Result(value, error)` ist ein eingebauter Typ
- `Ok(value)` für Erfolg, `Error(error)` für Fehler
- Pattern Matching für Fehlerbehandlung
- Compiler erzwingt Behandlung des Result-Werts

**Weiterführende Links:**
- [Gleam Documentation - Error Handling](https://gleam.run/documentation/tour/error-handling/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
data Either a b = Left a | Right b

divide :: Int -> Int -> Either String Int
divide a b
    | b == 0 = Left "Division durch Null"
    | otherwise = Right (a `div` b)

-- Verwendung
case divide 10 2 of
    Right result -> putStrLn $ "Ergebnis: " ++ show result
    Left reason -> putStrLn $ "Fehler: " ++ reason
```

**Besonderheiten:**
- `Either a b` ist ein eingebauter Typ
- `Left error` für Fehler, `Right value` für Erfolg (Konvention)
- Pattern Matching für Fehlerbehandlung
- Monadische Operationen verfügbar

**Weiterführende Links:**
- [Haskell Documentation - Either](https://hackage.haskell.org/package/base/docs/Data-Either.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
type ('a, 'b) result = Ok of 'a | Error of 'b

let divide a b =
    if b = 0 then
        Error "Division durch Null"
    else
        Ok (a / b)

(* Verwendung *)
match divide 10 2 with
| Ok result -> Printf.printf "Ergebnis: %d\n" result
| Error reason -> Printf.printf "Fehler: %s\n" reason
```

**Besonderheiten:**
- `('a, 'b) result` ist ein eingebauter Typ (seit OCaml 4.03)
- `Ok value` für Erfolg, `Error error` für Fehler
- Pattern Matching für Fehlerbehandlung

**Weiterführende Links:**
- [OCaml Documentation - Result Type](https://v2.ocaml.org/api/Result.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn divide(a: i32, b: i32) -> Result<i32, &'static str>
{
    if b == 0
    {
        return Err("Division durch Null");
    }
    Ok(a / b)
}

// Verwendung
match divide(10, 2)
{
    Ok(result) => println!("Ergebnis: {}", result),
    Err(e) => println!("Fehler: {}", e),
}
```

**Besonderheiten:**
- `Result<T, E>` ist ein eingebauter Typ
- `Ok(T)` für Erfolg, `Err(E)` für Fehler
- Pattern Matching für Fehlerbehandlung
- Compiler erzwingt Behandlung des Result-Werts
- Monadische Operationen verfügbar (`?`-Operator)

**Weiterführende Links:**
- [Rust Book - Error Handling](https://doc.rust-lang.org/book/ch09-00-error-handling.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
sealed trait Result[+T, +E]
case class Ok[T](value: T) extends Result[T, Nothing]
case class Err[E](error: E) extends Result[Nothing, E]

def divide(a: Int, b: Int): Result[Int, String] =
{
    if (b == 0)
    {
        Err("Division durch Null")
    }
    else
    {
        Ok(a / b)
    }
}

// Verwendung
divide(10, 2) match
{
    case Ok(result) => println(s"Ergebnis: $result")
    case Err(reason) => println(s"Fehler: $reason")
}
```

**Besonderheiten:**
- `Result[T, E]` kann als ADT definiert werden
- `Either[E, T]` ist auch verfügbar (Standardbibliothek)
- Pattern Matching für Fehlerbehandlung

**Weiterführende Links:**
- [Scala Documentation - Either](https://www.scala-lang.org/api/current/scala/util/Either.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: import Foundation

func divide(_ a: Int, _ b: Int) -> Result<Int, Error>
{
    if b == 0
    {
        return .failure(NSError(domain: "MathError", code: 1, userInfo: [NSLocalizedDescriptionKey: "Division durch Null"]))
    }
    return .success(a / b)
}

// Verwendung
switch divide(10, 2)
{
case .success(let result):
    print("Ergebnis: \(result)")
case .failure(let error):
    print("Fehler: \(error.localizedDescription)")
}
```

**Besonderheiten:**
- `Result<Success, Failure>` ist ein eingebauter Typ (seit Swift 5.0)
- `.success(value)` für Erfolg, `.failure(error)` für Fehler
- Pattern Matching für Fehlerbehandlung

**Weiterführende Links:**
- [Swift Documentation - Result](https://developer.apple.com/documentation/swift/result)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Either-Typ für Fehlerbehandlung
parseInt : String -> Either String Int
parseInt str = case parseInteger str of
    Just n => Right (cast n)
    Nothing => Left ("Ungültige Zahl: " ++ str)

-- Verkettung mit >>= (Monad)
compute : String -> Either String Int
compute input = do
    n <- parseInt input
    if n > 0
        then Right (n * 2)
        else Left "Zahl muss positiv sein"
```

**Besonderheiten:**
- `Either` ist ein eingebauter Sum Type: `Left` für Fehler, `Right` für Erfolg
- Monadische Verkettung mit `do`-Notation oder `>>=`
- Compiler erzwingt Behandlung beider Fälle

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Either-Typ für Fehlerbehandlung
fun safe-divide(a : int, b : int) : either<string,int>
  if b == 0 then Left("Division durch Null")
  else Right(a / b)

// Pattern Matching auf Either
fun show-result(r : either<string,int>) : string
  match r
    Left(err) -> "Fehler: " ++ err
    Right(val) -> "Ergebnis: " ++ val.show

// Alternativ: Effekte statt Either
effect ctl raise(msg : string) : a

fun safe-div(a : int, b : int) : raise int
  if b == 0 then raise("Division durch Null") else a / b
```

**Besonderheiten:**
- `either<a,b>` und `maybe<a>` als algebraische Fehlertypen
- Pattern Matching auf `Left`/`Right` und `Just`/`Nothing`
- Koka bevorzugt algebraische Effekte für Fehlerbehandlung
- Effekte bieten direkten Kontrollfluss ohne monadisches Wrapping

**Weiterführende Links:**
- [Koka Language Guide - Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Except als Result/Either Type
def safeDivide (x y : Int) : Except String Int :=
  if y == 0 then .error "Division durch Null"
  else .ok (x / y)

-- Verwendung mit Pattern Matching
def result : String :=
  match safeDivide 10 0 with
  | .ok val => s!"Ergebnis: {val}"
  | .error err => s!"Fehler: {err}"

-- do-Notation für monadische Verkettung
def compute : Except String Int := do
  let a ← safeDivide 100 5
  let b ← safeDivide a 2
  return b
-- .ok 10
```

**Besonderheiten:**
- `Except ε α` als Result-Typ (analog zu `Either`)
- `.ok` für Erfolg, `.error` für Fehler
- Pattern Matching für explizite Fehlerbehandlung
- `do`-Notation für monadische Verkettung mit `←`

**Weiterführende Links:**
- [Lean 4 Documentation - Monads](https://lean-lang.org/lean4/doc/monads.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module maybe.

% Eigener Result-Typ (Either-Analogon)
:- type result(T, E) ---> ok(T) ; error(E).

:- func divide(int, int) = result(int, string).
divide(_, 0) = error("Division durch Null").
divide(A, B) = ok(A // B).

% Verwendung mit Pattern Matching
main(!IO) :-
    Result = divide(10, 2),
    (
        Result = ok(Value),
        io.format("Ergebnis: %d\n", [i(Value)], !IO)
    ;
        Result = error(Reason),
        io.format("Fehler: %s\n", [s(Reason)], !IO)
    ).

% Alternativ: maybe(T) als Option-Typ
:- func safe_head(list(T)) = maybe(T).
safe_head([]) = no.
safe_head([X | _]) = yes(X).
```

**Besonderheiten:**
- Eigene Result-/Either-Typen werden als algebraische Datentypen definiert (`---> ok(T) ; error(E)`)
- `maybe(T)` mit `yes(Value)` / `no` als eingebauter Option-Typ
- Pattern Matching erzwingt Behandlung beider Fälle
- Discriminated Unions ermöglichen beliebige Fehlertypen

**Weiterführende Links:**
- [Mercury Language Reference - Type Definitions](https://www.mercurylang.org/information/doc-release/mercury_ref/Type-definitions.html)
- [Mercury Library Reference - maybe](https://www.mercurylang.org/information/doc-release/mercury_library/maybe.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Result Types: Either
safeDivide :: Int -> Int -> Either String Int
safeDivide _ 0 = Left "Division by zero"
safeDivide x y = Right (x / y)

-- Verwendung
result = case safeDivide 10 3 of
    Left err -> "Fehler: " <> err
    Right val -> "Ergebnis: " <> show val
```

**Besonderheiten:**
- `Either` ist der Standard-Result-Type
- `Left` für Fehlerfälle, `Right` für Erfolgsfälle
- Pattern Matching für Fehlerbehandlung

**Weiterführende Links:**
- [PureScript Documentation - Either](https://pursuit.purescript.org/packages/purescript-either/docs/Data.Either)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Result Types als Tag Unions
parseNumber : Str -> [Ok I64, InvalidNumber]
parseNumber = \str ->
    when Str.toI64 str is
        Ok n -> Ok n
        Err _ -> InvalidNumber

result = parseNumber "42"
when result is
    Ok n -> n
    InvalidNumber -> 0
```

**Besonderheiten:**
- Tag Unions werden als Result Types verwendet
- Kein eingebauter `Result` Typ, stattdessen flexible Tag Unions
- Compiler erzwingt Fehlerbehandlung

**Weiterführende Links:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
<TabItem value="v" label="V">

```v
// Result Types: !Type
fn read_file(path string) !string {
    // Benötigt: import os
    return os.read_file(path) or {
        return error('Datei nicht gefunden: ${path}')
    }
}

content := read_file('test.txt') or {
    println('Fehler: ${err}')
    return
}
println(content)
```

**Besonderheiten:**
- `!Type` markiert einen Result Type
- Enthält entweder einen Wert oder einen Fehler
- `or { }` Block für Fehlerbehandlung
- Fehler-Propagation mit `!` (z.B. `value := func()!`)

**Weiterführende Links:**
- [V Documentation - Error Handling](https://github.com/vlang/v/blob/master/doc/docs.md#error-handling)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

const MathError = error{
    DivisionByZero,
    Overflow,
};

// Error Union Type: MathError!i32 (Result-Typ)
fn divide(a: i32, b: i32) MathError!i32 {
    if (b == 0) return MathError.DivisionByZero;
    return @divTrunc(a, b);
}

// Verwendung mit catch
const result = divide(10, 2) catch |err| {
    std.debug.print("Fehler: {}\n", .{err});
    return;
};

// Verwendung mit try (propagiert Fehler)
fn calculate() MathError!i32 {
    const a = try divide(10, 2);
    const b = try divide(a, 0);  // Fehler wird propagiert
    return b;
}
```

**Besonderheiten:**
- `E!T` ist der Error Union Type (äquivalent zu `Result<T, E>`)
- `try` propagiert Fehler automatisch
- `catch` behandelt Fehler
- Compiler erzwingt die Behandlung von Error Unions

**Weiterführende Links:**
- [Zig Documentation - Errors](https://ziglang.org/documentation/master/#Errors)

</TabItem>
</Tabs>


## 12.2.4. Error Unions

Error Unions sind Typen, die entweder einen Wert oder einen Fehler enthalten, wobei der Fehler-Teil eine Union verschiedener Fehlertypen sein kann.

### Sprachen {#sprachen}

<Tabs availableTabs={['zig']}>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

// Error Set definieren
const MathError = error{
    DivisionByZero,
    Overflow,
    Underflow,
};

// Error Union Type
fn divide(a: i32, b: i32) MathError!i32
{
    if (b == 0)
    {
        return MathError.DivisionByZero;
    }
    return a / b;
}

// Verwendung
const result = divide(10, 2) catch |err|
{
    switch (err)
    {
        MathError.DivisionByZero => std.debug.print("Fehler: Division durch Null\n", .{}),
        MathError.Overflow => std.debug.print("Fehler: Überlauf\n", .{}),
        MathError.Underflow => std.debug.print("Fehler: Unterlauf\n", .{}),
    }
    return;
};
std.debug.print("Ergebnis: {}\n", .{result});
```

**Besonderheiten:**
- Error Union Types (`!T` ist `T` oder `error`)
- Error Sets können definiert werden
- `catch` für Fehlerbehandlung
- Compiler erzwingt Behandlung von Error Unions
- Pattern Matching auf Error Sets möglich

**Weiterführende Links:**
- [Zig Documentation - Error Handling](https://ziglang.org/documentation/0.11.0/#Errors)

</TabItem>
</Tabs>


## 12.2.5. Pattern Matching auf Errors

Pattern Matching auf Errors ermöglicht die strukturierte Behandlung verschiedener Fehlertypen durch Pattern Matching.

### Sprachen {#sprachen}

<Tabs availableTabs={['elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'lean4', 'mercury', 'ocaml', 'prolog', 'purescript', 'roc', 'rust', 'scala', 'swift', 'zig']}>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math do
  def divide(a, b) when b != 0, do: {:ok, div(a, b)}
  def divide(_a, 0), do: {:error, :division_by_zero}
  def divide(_a, _b), do: {:error, :invalid_operation}
end

# Pattern Matching auf verschiedene Error-Patterns
case Math.divide(10, 2) do
  {:ok, result} -> IO.puts("Ergebnis: #{result}")
  {:error, :division_by_zero} -> IO.puts("Fehler: Division durch Null")
  {:error, reason} -> IO.puts("Fehler: #{reason}")
end
```

**Besonderheiten:**
- Pattern Matching auf Tupel-Strukturen
- Verschiedene Error-Patterns können unterschiedlich behandelt werden
- Wildcard-Patterns für allgemeine Fehlerbehandlung

**Weiterführende Links:**
- [Elixir Documentation - Pattern Matching](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
type MathError = DivisionByZero | InvalidOperation

divide : Int -> Int -> Result MathError Int
divide a b =
    if b == 0 then
        Err DivisionByZero
    else
        Ok (a // b)

-- Pattern Matching auf Error-Varianten
case divide 10 2 of
    Ok result -> "Ergebnis: " ++ String.fromInt result
    Err DivisionByZero -> "Fehler: Division durch Null"
    Err InvalidOperation -> "Fehler: Ungültige Operation"
```

**Besonderheiten:**
- Pattern Matching auf Error-Union-Typen
- Verschiedene Error-Varianten können unterschiedlich behandelt werden
- Compiler prüft Vollständigkeit der Pattern

**Weiterführende Links:**
- [Elm Documentation - Pattern Matching](https://guide.elm-lang.org/types/pattern_matching.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type MathError =
    | DivisionByZero
    | InvalidOperation of string

let divide a b =
    if b = 0 then
        Error DivisionByZero
    else
        Ok (a / b)

// Pattern Matching auf Error-Varianten
match divide 10 2 with
| Ok result -> printfn "Ergebnis: %d" result
| Error DivisionByZero -> printfn "Fehler: Division durch Null"
| Error (InvalidOperation msg) -> printfn "Fehler: %s" msg
```

**Besonderheiten:**
- Pattern Matching auf Discriminated Unions
- Verschiedene Error-Varianten können unterschiedlich behandelt werden
- Compiler prüft Vollständigkeit der Pattern

**Weiterführende Links:**
- [F# Documentation - Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
pub type MathError {
  DivisionByZero
  InvalidOperation(String)
}

pub fn divide(a: Int, b: Int) -> Result(Int, MathError) {
  case b {
    0 -> Error(DivisionByZero)
    _ -> Ok(a / b)
  }
}

// Pattern Matching auf Error-Varianten
case divide(10, 2) {
  Ok(result) -> io.println("Ergebnis: " <> int.to_string(result))
  Error(DivisionByZero) -> io.println("Fehler: Division durch Null")
  Error(InvalidOperation(msg)) -> io.println("Fehler: " <> msg)
}
```

**Besonderheiten:**
- Pattern Matching auf Custom Types
- Verschiedene Error-Varianten können unterschiedlich behandelt werden
- Compiler prüft Vollständigkeit der Pattern

**Weiterführende Links:**
- [Gleam Documentation - Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
data MathError = DivisionByZero | InvalidOperation String

divide :: Int -> Int -> Either MathError Int
divide a b
    | b == 0 = Left DivisionByZero
    | otherwise = Right (a `div` b)

-- Pattern Matching auf Error-Konstruktoren
case divide 10 2 of
    Right result -> putStrLn $ "Ergebnis: " ++ show result
    Left DivisionByZero -> putStrLn "Fehler: Division durch Null"
    Left (InvalidOperation msg) -> putStrLn $ "Fehler: " ++ msg
```

**Besonderheiten:**
- Pattern Matching auf ADT-Konstruktoren
- Verschiedene Error-Konstruktoren können unterschiedlich behandelt werden
- Compiler prüft Vollständigkeit der Pattern (mit Warnungen)

**Weiterführende Links:**
- [Haskell Documentation - Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
type math_error =
    | DivisionByZero
    | InvalidOperation of string

let divide a b =
    if b = 0 then
        Error DivisionByZero
    else
        Ok (a / b)

(* Pattern Matching auf Error-Varianten *)
match divide 10 2 with
| Ok result -> Printf.printf "Ergebnis: %d\n" result
| Error DivisionByZero -> Printf.printf "Fehler: Division durch Null\n"
| Error (InvalidOperation msg) -> Printf.printf "Fehler: %s\n" msg
```

**Besonderheiten:**
- Pattern Matching auf Variant Types
- Verschiedene Error-Varianten können unterschiedlich behandelt werden
- Compiler prüft Vollständigkeit der Pattern

**Weiterführende Links:**
- [OCaml Documentation - Pattern Matching](https://v2.ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Pattern Matching auf Error-Terme durch Unifikation
process :-
    catch(
        (Result is 10 / 0),
        Error,
        handle_error(Error)
    ).

% Verschiedene Fehlertypen mit separaten Klauseln
handle_error(error(evaluation_error(zero_divisor), _)) :-
    format("Fehler: Division durch Null~n").
handle_error(error(type_error(Expected, Actual), _)) :-
    format("Fehler: Typ ~w erwartet, ~w erhalten~n", [Expected, Actual]).
handle_error(error(existence_error(procedure, Name), _)) :-
    format("Fehler: Prozedur ~w nicht gefunden~n", [Name]).
handle_error(error(Error, _)) :-
    format("Allgemeiner Fehler: ~w~n", [Error]).
```

**Besonderheiten:**
- Pattern Matching auf Fehlerterme erfolgt durch Prologs Unifikation
- Fehlerterme sind strukturierte Terme — verschiedene Klauseln für verschiedene Fehler
- Spezifischere Muster vor allgemeineren (Klauselreihenfolge)
- Compiler erzwingt keine Vollständigkeit der Pattern

**Weiterführende Links:**
- [SWI-Prolog Documentation - Exception Terms](https://www.swi-prolog.org/pldoc/man?section=exception)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
#[derive(Debug)]
enum MathError
{
    DivisionByZero,
    InvalidOperation(String),
}

fn divide(a: i32, b: i32) -> Result<i32, MathError>
{
    if b == 0
    {
        return Err(MathError::DivisionByZero);
    }
    Ok(a / b)
}

// Pattern Matching auf Error-Varianten
match divide(10, 2)
{
    Ok(result) => println!("Ergebnis: {}", result),
    Err(MathError::DivisionByZero) => println!("Fehler: Division durch Null"),
    Err(MathError::InvalidOperation(msg)) => println!("Fehler: {}", msg),
}
```

**Besonderheiten:**
- Pattern Matching auf Enum-Varianten
- Verschiedene Error-Varianten können unterschiedlich behandelt werden
- Compiler prüft Vollständigkeit der Pattern

**Weiterführende Links:**
- [Rust Book - Pattern Matching](https://doc.rust-lang.org/book/ch06-02-match.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
sealed trait MathError
case object DivisionByZero extends MathError
case class InvalidOperation(msg: String) extends MathError

def divide(a: Int, b: Int): Either[MathError, Int] =
{
    if (b == 0)
    {
        Left(DivisionByZero)
    }
    else
    {
        Right(a / b)
    }
}

// Pattern Matching auf Error-Varianten
divide(10, 2) match
{
    case Right(result) => println(s"Ergebnis: $result")
    case Left(DivisionByZero) => println("Fehler: Division durch Null")
    case Left(InvalidOperation(msg)) => println(s"Fehler: $msg")
}
```

**Besonderheiten:**
- Pattern Matching auf Sealed Traits
- Verschiedene Error-Varianten können unterschiedlich behandelt werden
- Compiler prüft Vollständigkeit der Pattern (bei sealed traits)

**Weiterführende Links:**
- [Scala Documentation - Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
enum MathError: Error
{
    case divisionByZero
    case invalidOperation(String)
}

func divide(_ a: Int, _ b: Int) throws -> Int
{
    if b == 0
    {
        throw MathError.divisionByZero
    }
    return a / b
}

// Pattern Matching auf Error-Varianten
do
{
    let result = try divide(10, 2)
    print("Ergebnis: \(result)")
}
catch MathError.divisionByZero
{
    print("Fehler: Division durch Null")
}
catch MathError.invalidOperation(let msg)
{
    print("Fehler: \(msg)")
}
catch
{
    print("Unbekannter Fehler")
}
```

**Besonderheiten:**
- Pattern Matching in catch-Blöcken
- Verschiedene Error-Varianten können unterschiedlich behandelt werden
- Wildcard-Pattern für allgemeine Fehlerbehandlung

**Weiterführende Links:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

const MathError = error{
    DivisionByZero,
    InvalidOperation,
};

fn divide(a: i32, b: i32) MathError!i32
{
    if (b == 0)
    {
        return MathError.DivisionByZero;
    }
    return a / b;
}

// Pattern Matching auf Error Sets
const result = divide(10, 2) catch |err|
{
    switch (err)
    {
        MathError.DivisionByZero => std.debug.print("Fehler: Division durch Null\n", .{}),
        MathError.InvalidOperation => std.debug.print("Fehler: Ungültige Operation\n", .{}),
    }
    return;
};
std.debug.print("Ergebnis: {}\n", .{result});
```

**Besonderheiten:**
- Pattern Matching auf Error Sets mit `switch`
- Verschiedene Error-Werte können unterschiedlich behandelt werden
- Compiler prüft Vollständigkeit der Pattern

**Weiterführende Links:**
- [Zig Documentation - Error Handling](https://ziglang.org/documentation/0.11.0/#Errors)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Pattern Matching auf Error-Tuples
case file:read_file("test.txt") of
    {ok, Content} -> Content;
    {error, enoent} -> "Datei nicht gefunden";
    {error, Reason} -> io:format("Fehler: ~p~n", [Reason])
end.

% Pattern Matching in try-catch
try
    list_to_integer("abc")
catch
    error:badarg -> "Ungültiges Argument"
end.
```

**Besonderheiten:**
- Pattern Matching auf `{ok, Value}` / `{error, Reason}` Tuples
- Pattern Matching in `catch`-Klauseln auf Fehlerklasse und Fehlergrund
- Fundamentales Muster für Error Handling in Erlang

**Weiterführende Links:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Pattern Matching auf Either
handleResult : Either String Int -> String
handleResult (Left err) = "Fehler: " ++ err
handleResult (Right val) = "Wert: " ++ show val

-- Pattern Matching auf Maybe
handleMaybe : Maybe Int -> Int
handleMaybe (Just n) = n
handleMaybe Nothing = 0
```

**Besonderheiten:**
- Fehler werden durch Pattern Matching auf `Either` und `Maybe` behandelt
- Exhaustiveness Checking erzwingt vollständige Fehlerbehandlung
- Keine Exception-Mechanismen nötig

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Pattern Matching auf Either
fun handle-result(r : either<string,int>) : string
  match r
    Left(err) -> "Fehler: " ++ err
    Right(val) -> "Wert: " ++ val.show

// Pattern Matching auf Maybe
fun handle-maybe(m : maybe<int>) : int
  match m
    Just(n) -> n
    Nothing -> 0

// Benutzerdefinierte Fehlertypen
type app-error
  NotFound
  Unauthorized
  ServerError(msg : string)

fun handle-error(err : app-error) : string
  match err
    NotFound         -> "Nicht gefunden"
    Unauthorized     -> "Nicht autorisiert"
    ServerError(msg) -> "Server-Fehler: " ++ msg
```

**Besonderheiten:**
- Pattern Matching auf `either`, `maybe` und benutzerdefinierte Fehlertypen
- Exhaustiveness Checking erzwingt vollständige Fehlerbehandlung
- Algebraische Datentypen für strukturierte Fehler-Modellierung

**Weiterführende Links:**
- [Koka Language Guide - Data Types](https://koka-lang.github.io/koka/doc/book.html#sec-datatypes)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pattern Matching auf Except
def handleResult (r : Except String Int) : String :=
  match r with
  | .ok val => s!"Wert: {val}"
  | .error err => s!"Fehler: {err}"

-- Pattern Matching auf Option
def handleOption (m : Option Int) : Int :=
  match m with
  | some n => n
  | none => 0

-- Benutzerdefinierte Fehlertypen
inductive AppError where
  | notFound : AppError
  | unauthorized : AppError
  | serverError : String → AppError

def handleError (err : AppError) : String :=
  match err with
  | .notFound => "Nicht gefunden"
  | .unauthorized => "Nicht autorisiert"
  | .serverError msg => s!"Server-Fehler: {msg}"
```

**Besonderheiten:**
- Pattern Matching auf `Except`, `Option` und benutzerdefinierte Fehlertypen
- Exhaustiveness Checking erzwingt vollständige Fehlerbehandlung
- Induktive Typen für strukturierte Fehler-Modellierung
- Dot-Notation `.ok`, `.error` für Konstruktoren

**Weiterführende Links:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/patternmatching.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Fehlertyp als algebraischer Datentyp
:- type math_error ---> division_by_zero ; overflow ; invalid_input(string).
:- type result(T, E) ---> ok(T) ; error(E).

:- func divide(int, int) = result(int, math_error).
divide(_, 0) = error(division_by_zero).
divide(A, B) = ok(A // B).

% Pattern Matching auf verschiedene Fehlervarianten
:- pred handle_result(result(int, math_error)::in, io::di, io::uo) is det.
handle_result(ok(Value), !IO) :-
    io.format("Ergebnis: %d\n", [i(Value)], !IO).
handle_result(error(division_by_zero), !IO) :-
    io.write_string("Fehler: Division durch Null\n", !IO).
handle_result(error(overflow), !IO) :-
    io.write_string("Fehler: Überlauf\n", !IO).
handle_result(error(invalid_input(Msg)), !IO) :-
    io.format("Fehler: Ungültige Eingabe – %s\n", [s(Msg)], !IO).

% Pattern Matching auf maybe(T)
:- func handle_maybe(maybe(int)) = int.
handle_maybe(yes(N)) = N.
handle_maybe(no) = 0.
```

**Besonderheiten:**
- Pattern Matching auf algebraische Datentypen ist fundamental in Mercury
- Separate Klauseln für jede Fehlervariante (wie in Prolog/Erlang)
- Compiler prüft Vollständigkeit der Pattern (Exhaustiveness Checking)
- Verschachtelte Pattern möglich (z.B. `error(invalid_input(Msg))`)

**Weiterführende Links:**
- [Mercury Language Reference - Clauses and Disjunctions](https://www.mercurylang.org/information/doc-release/mercury_ref/Clauses-and-disjunctions.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Pattern Matching auf Errors
data AppError = NotFound | Unauthorized | ServerError String

handleError :: Either AppError String -> String
handleError (Left NotFound) = "Nicht gefunden"
handleError (Left Unauthorized) = "Nicht autorisiert"
handleError (Left (ServerError msg)) = "Server-Fehler: " <> msg
handleError (Right value) = value
```

**Besonderheiten:**
- Pattern Matching auf `Either` und eigenen Error-Typen
- Exhaustiveness Checking erzwingt vollständige Fehlerbehandlung
- Keine Exceptions, nur algebraische Fehlertypen

**Weiterführende Links:**
- [PureScript Documentation - Either](https://pursuit.purescript.org/packages/purescript-either/docs/Data.Either)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Pattern Matching auf Errors
handleResult : [Ok I64, NotFound, ParseError Str] -> Str
handleResult = \result ->
    when result is
        Ok value -> "Wert: $(Num.toStr value)"
        NotFound -> "Nicht gefunden"
        ParseError msg -> "Parse-Fehler: $(msg)"
```

**Besonderheiten:**
- `when/is` für Pattern Matching auf Error-Typen
- Exhaustive Checking erzwingt Behandlung aller Fehlerfälle
- Verschiedene Error-Tags mit unterschiedlichen Payloads

**Weiterführende Links:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
</Tabs>

## 12.2.6. Conditions / Restarts

Das Conditions/Restarts-System trennt die Erkennung von Fehlern (Signaling), die Entscheidung über die Fehlerbehandlung (Handling) und die Wiederherstellung (Restarting). Im Gegensatz zu traditionellem Exception-Handling wird der Call-Stack beim Signalisieren einer Condition nicht abgebaut — der Handler läuft im Kontext des Signalers und kann dort definierte Restarts aufrufen.

### Sprachen {#sprachen}

<Tabs availableTabs={['common-lisp', 'koka']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Condition-Klasse definieren
(define-condition division-error (error)
  ((dividend :initarg :dividend :reader dividend)
   (divisor :initarg :divisor :reader divisor)))

;; Funktion mit Restarts — definiert Wiederherstellungsoptionen
(defun safe-divide (a b)
  (restart-case
    (if (zerop b)
        (error 'division-error :dividend a :divisor b)
        (/ a b))
    (return-zero ()
      :report "Gib 0 zurück."
      0)
    (use-value (value)
      :report "Verwende einen alternativen Wert."
      value)
    (recalc-using (new-divisor)
      :report "Verwende einen anderen Divisor."
      (safe-divide a new-divisor))))

;; Handler wählt einen Restart — ohne den Stack abzubauen
(handler-bind
  ((division-error
     (lambda (c)
       (invoke-restart 'return-zero))))
  (safe-divide 10 0))  ; => 0

;; Handler mit alternativem Restart
(handler-bind
  ((division-error
     (lambda (c)
       (invoke-restart 'use-value 42))))
  (safe-divide 10 0))  ; => 42

;; Handler mit Neuberechnung
(handler-bind
  ((division-error
     (lambda (c)
       (invoke-restart 'recalc-using 2))))
  (safe-divide 10 0))  ; => 5
```

**Besonderheiten:**
- `define-condition` definiert Condition-Klassen in einer Hierarchie (basierend auf CLOS)
- `restart-case` etabliert benannte Restarts mit Wiederherstellungsoptionen
- `handler-bind` bindet Handler, ohne den Call-Stack abzubauen
- `invoke-restart` ruft einen Restart aus dem Handler-Kontext auf
- Conditions sind nicht auf Fehler beschränkt — auch Warnungen (`warn`) und Signale (`signal`) möglich
- Im interaktiven Debugger können Restarts manuell ausgewählt werden
- Fundamentaler Unterschied zu try/catch: Trennung von Policy (Handler) und Mechanism (Restart)

**Weiterführende Links:**
- [Common Lisp HyperSpec - Conditions](http://www.lispworks.com/documentation/HyperSpec/Body/09_.htm)
- [Practical Common Lisp - Beyond Exception Handling](https://gigamonkeys.com/book/beyond-exception-handling-conditions-and-restarts)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Algebraische Effekte als Conditions/Restarts
// Effekt definiert Conditions und mögliche Restarts
effect ctl raise(msg : string) : int  // Restart: int zurückgeben

fun safe-divide(a : int, b : int) : int
  if b == 0 then raise("Division durch Null")
  else a / b

// Handler entscheidet über Restart-Strategie
fun with-default(action : () -> <raise|e> int) : e int
  with ctl raise(msg) -> resume(0)  // Restart: Default-Wert
  action()

// Alternativer Handler: Andere Restart-Strategie
fun with-retry(action : () -> <raise|e> int) : e int
  with ctl raise(msg) -> resume(1)  // Restart: Ersatzwert
  action()

val result1 = with-default{ safe-divide(10, 0) }  // 0
val result2 = with-retry{ safe-divide(10, 0) }    // 1
```

**Besonderheiten:**
- Algebraische Effekte sind eine direkte Verallgemeinerung von Conditions/Restarts
- `ctl` definiert Conditions, `resume` entspricht `invoke-restart`
- Handler laufen im Kontext des Signalers (Stack wird nicht abgebaut)
- Verschiedene Handler können verschiedene Restart-Strategien implementieren
- Im Gegensatz zu Common Lisp: Effect-Typ wird im Typsystem verfolgt

**Weiterführende Links:**
- [Koka Language Guide - Effect Handlers](https://koka-lang.github.io/koka/doc/book.html#sec-handlers)

</TabItem>
</Tabs>

