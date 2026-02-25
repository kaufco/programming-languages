---
slug: /fehlerbehandlung/alternative-error-handling
title: 12.2. Alternative Error Handling
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 12.2. Alternative Error Handling

Alternative methods for error handling.

## 12.2.1. Error Returns (Multiple Return Values)

Error Returns allow returning error information as part of the return value, typically through multiple return values or composite types.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'erlang', 'go', 'lua', 'mercury', 'objective-c', 'python', 'rust', 'v', 'zig']} orangeTabs={['c']}>
<TabItem value="c" label="C">

```c
#include <stdio.h>
#include <errno.h>

// Structure for return value and error
typedef struct {
    int value;
    int error;
} Result;

Result divide(int a, int b)
{
    Result result = {0, 0};
    if (b == 0)
    {
        result.error = 1; // Error
        return result;
    }
    result.value = a / b;
    return result;
}

// Usage
Result r = divide(10, 2);
if (r.error != 0)
{
    printf("Error: Division by zero\n");
}
else
{
    printf("Result: %d\n", r.value);
}
```

**Special features:**
- No native multiple return values
- Structures are used to combine value and error
- `errno` is commonly used for error codes

**Further reading:**
- [C Standard Library - errno](https://en.cppreference.com/w/c/error/errno)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <optional>
#include <tuple>

// With std::optional
std::optional<int> divide(int a, int b)
{
    if (b == 0)
    {
        return std::nullopt; // Error
    }
    return a / b;
}

// With std::tuple
std::tuple<int, bool> divideWithError(int a, int b)
{
    if (b == 0)
    {
        return {0, false}; // Error
    }
    return {a / b, true};
}

// Usage
auto result = divide(10, 2);
if (result.has_value())
{
    std::cout << "Result: " << *result << std::endl;
}
```

**Special features:**
- `std::optional` for optional return values (since C++17)
- `std::tuple` for multiple return values
- `std::pair` for two return values

**Further reading:**
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
        return 0, fmt.Errorf("Division by zero")
    }
    return a / b, nil
}

// Usage
result, err := divide(10, 2)
if err != nil
{
    fmt.Printf("Error: %v\n", err)
    return
}
fmt.Printf("Result: %d\n", result)
```

**Special features:**
- Multiple return values are a core feature of the language
- Convention: Last return value is the error (often `error` type)
- `nil` means "no error"
- Compiler does not enforce error handling

**Further reading:**
- [Go Documentation - Error Handling](https://go.dev/doc/effective_go#errors)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function divide(a, b)
    if b == 0 then
        return nil, "Division by zero"
    end
    return a / b, nil
end

-- Usage
local result, err = divide(10, 2)
if err then
    print("Error: " .. err)
else
    print("Result: " .. result)
end
```

**Special features:**
- Multiple return values are a core feature of the language
- Convention: First value is the result, second is the error
- `nil` is commonly used for errors

**Further reading:**
- [Lua Documentation - Multiple Results](https://www.lua.org/manual/5.4/manual.html#3.4.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Required: :- import_module maybe.

% Idiomatic: maybe type for error return
:- func divide(int, int) = maybe(int).
divide(_, 0) = no.
divide(A, B) = yes(A // B).

% Alternative: Multiple output parameters
:- pred divide(int::in, int::in, int::out, string::out) is det.
divide(A, B, Result, Error) :-
    ( B = 0 ->
        Result = 0, Error = "Division by zero"
    ;
        Result = A // B, Error = ""
    ).

% Usage
main(!IO) :-
    Result = divide(10, 2),
    (
        Result = yes(Value),
        io.format("Result: %d\n", [i(Value)], !IO)
    ;
        Result = no,
        io.write_string("Error: Division by zero\n", !IO)
    ).
```

**Special features:**
- `maybe(T)` with `yes(Value)` / `no` as idiomatic error return type
- Multiple output parameters as alternative to multiple return values
- `semidet` predicates as implicit error return (failure instead of error value)

**Further reading:**
- [Mercury Library Reference - maybe](https://www.mercurylang.org/information/doc-release/mercury_library/maybe.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def divide(a, b):
    if b == 0:
        return None, "Division by zero"
    return a / b, None

# Usage
result, err = divide(10, 2)
if err:
    print(f"Error: {err}")
else:
    print(f"Result: {result}")
```

**Special features:**
- Multiple return values via tuples
- Convention: First value is the result, second is the error
- `None` is commonly used for errors

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn divide(a: i32, b: i32) -> Result<i32, &'static str>
{
    if b == 0
    {
        return Err("Division by zero");
    }
    Ok(a / b)
}

// Usage
match divide(10, 2)
{
    Ok(result) => println!("Result: {}", result),
    Err(e) => println!("Error: {}", e),
}
```

**Special features:**
- `Result<T, E>` type for error handling
- `Ok(T)` for success, `Err(E)` for error
- Pattern matching for error handling
- Compiler enforces handling of Result value

**Further reading:**
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

// Usage
const result = divide(10, 2) catch |err|
{
    std.debug.print("Error: {}\n", .{err});
    return;
};
std.debug.print("Result: {}\n", .{result});
```

**Special features:**
- Error Union Types (`!T` is `T` or `error`)
- `catch` for error handling
- Compiler enforces handling of Error Unions

**Further reading:**
- [Zig Documentation - Error Handling](https://ziglang.org/documentation/0.11.0/#Errors)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Error Returns via Tagged Tuples
safe_divide(_, 0) -> {error, division_by_zero};
safe_divide(X, Y) -> {ok, X div Y}.

% Usage with Pattern Matching
case safe_divide(10, 3) of
    {ok, Result} -> io:format("Result: ~p~n", [Result]);
    {error, Reason} -> io:format("Error: ~p~n", [Reason])
end.
```

**Special features:**
- `{ok, Value}` / `{error, Reason}` is the idiomatic error return pattern
- Pattern matching for error handling
- No special Result type, but convention with tagged tuples

**Further reading:**
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
                                     userInfo:@{NSLocalizedDescriptionKey: @"No data"}];
        }
        return NO;
    }
    return [data writeToFile:path options:0 error:error];
}

// Usage
NSError *error = nil;
BOOL success = [self saveData:data toPath:@"/tmp/file" error:&error];
if (!success) {
    NSLog(@"Error: %@", error.localizedDescription);
}
```

**Special features:**
- NSError out-parameter (`NSError **`) is the standard error handling pattern
- Return value (BOOL or nil) indicates success/failure
- NSError contains domain, code, and userInfo
- This pattern is preferred by Apple over exceptions

**Further reading:**
- [Apple Documentation - Error Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Error Returns
fn parse_int(s string) !int {
    for c in s {
        if c < `0` || c > `9` {
            return error('Invalid character: ${c}')
        }
    }
    return s.int()
}

value := parse_int('42') or {
    println('Error: ${err}')
    return
}
println(value)
```

**Special features:**
- `!Type` marks functions that can fail (Result Type)
- `error('message')` creates an error
- `or { }` block for error handling
- Errors can be propagated with `!`

**Further reading:**
- [V Documentation - Error Handling](https://github.com/vlang/v/blob/master/doc/docs.md#error-handling)

</TabItem>
</Tabs>


## 12.2.2. No Exceptions (Error Returns only)

Languages that have no exception mechanisms and use exclusively error returns for error handling.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'elm', 'gleam', 'go', 'idris', 'lean4', 'roc', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
#include <stdio.h>
#include <errno.h>

int divide(int a, int b, int* result)
{
    if (b == 0)
    {
        return 1; // Error code
    }
    *result = a / b;
    return 0; // Success
}

// Usage
int result;
int error = divide(10, 2, &result);
if (error != 0)
{
    printf("Error: Division by zero\n");
}
else
{
    printf("Result: %d\n", result);
}
```

**Special features:**
- No exception mechanisms
- Error handling via return codes
- `errno` is commonly used for error codes
- Out-parameters for return values

**Further reading:**
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
        return 0, fmt.Errorf("Division by zero")
    }
    return a / b, nil
}

// Usage
result, err := divide(10, 2)
if err != nil
{
    fmt.Printf("Error: %v\n", err)
    return
}
fmt.Printf("Result: %d\n", result)
```

**Special features:**
- No exception mechanisms
- Error handling exclusively via error returns
- Convention: Last return value is the error
- `nil` means "no error"
- Compiler does not enforce error handling

**Further reading:**
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

// Usage
const result = divide(10, 2) catch |err|
{
    std.debug.print("Error: {}\n", .{err});
    return;
};
std.debug.print("Result: {}\n", .{result});
```

**Special features:**
- No exception mechanisms
- Error handling via Error Union Types (`!T`)
- `catch` for error handling
- Compiler enforces handling of Error Unions

**Further reading:**
- [Zig Documentation - Error Handling](https://ziglang.org/documentation/0.11.0/#Errors)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm has no exceptions
-- Error handling via Result type
divide : Int -> Int -> Result String Int
divide a b =
    if b == 0 then
        Err "Division by zero"
    else
        Ok (a // b)

-- Error handling via Maybe type
safeHead : List a -> Maybe a
safeHead list =
    case list of
        first :: _ -> Just first
        [] -> Nothing
```

**Special features:**
- Elm has no exceptions and no `try`/`catch`
- Guarantee: no runtime errors (no `null`, no `undefined`)
- `Result error value` for operations that can fail
- `Maybe a` for optional values
- Compiler enforces handling of all error cases

**Further reading:**
- [Elm Documentation - Error Handling](https://guide.elm-lang.org/error_handling/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// No Exceptions - Result Types for error handling
pub fn divide(a: Int, b: Int) -> Result(Int, String) {
  case b {
    0 -> Error("Division by zero")
    _ -> Ok(a / b)
  }
}

// use syntax for Result chaining
pub fn calculate() -> Result(Int, String) {
  use x <- result.try(divide(10, 2))
  use y <- result.try(divide(x, 3))
  Ok(y)
}
```

**Special features:**
- Gleam has no exceptions (no try/catch/throw)
- `Result(value, error)` for all error handling
- `use` syntax for elegant Result chaining
- Compiler enforces handling of Result values

**Further reading:**
- [Gleam Documentation - Result](https://tour.gleam.run/data-types/results/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- No Exceptions: errors via Either type
safeDivide : Int -> Int -> Either String Int
safeDivide _ 0 = Left "Division by zero"
safeDivide x y = Right (x `div` y)

-- Error handling via pattern matching
result : String
result = case safeDivide 10 0 of
    Left err => "Error: " ++ err
    Right val => "Result: " ++ show val
```

**Special features:**
- No exceptions in the language
- Errors are modeled via `Either`, `Maybe`, and dependent types
- Compiler enforces explicit error handling

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- No Exceptions: errors modeled via Except and Option
def safeDivide (x y : Int) : Except String Int :=
  if y == 0 then .error "Division by zero"
  else .ok (x / y)

-- Error handling via pattern matching
def result : String :=
  match safeDivide 10 0 with
  | .ok val => s!"Result: {val}"
  | .error err => s!"Error: {err}"

-- Option for operations that can fail
def safeHead (xs : List α) : Option α :=
  match xs with
  | [] => none
  | x :: _ => some x
```

**Special features:**
- No exceptions in the core language
- `Except ε α` for typed error handling (analogous to `Either`)
- `Option α` for optional values (analogous to `Maybe`)
- Compiler enforces explicit error handling through type system

**Further reading:**
- [Lean 4 Documentation - Error Handling](https://lean-lang.org/lean4/doc/monads.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- No Exceptions: errors are modeled via Tag Unions
divide : F64, F64 -> [Ok F64, DivByZero]
divide = \x, y ->
    if y == 0.0 then
        DivByZero
    else
        Ok (x / y)

result = divide 10.0 0.0
when result is
    Ok value -> "Result: $(Num.toStr value)"
    DivByZero -> "Error: Division by zero"
```

**Special features:**
- No exceptions in the language
- Errors are modeled via Tag Unions (Result-like types)
- `crash` for unrecoverable errors (similar to panic)

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="v" label="V">

```v
// No Exceptions: Error Returns only
fn divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('Division by zero')
    }
    return a / b
}

// Error handling with or-block
result := divide(10.0, 0.0) or {
    println('Error: ${err}')
    0.0
}
```

**Special features:**
- No try/catch/throw mechanisms
- `!Type` for Result Types
- `or { }` for error handling
- Explicit error handling enforced

**Further reading:**
- [V Documentation - Error Handling](https://github.com/vlang/v/blob/master/doc/docs.md#error-handling)

</TabItem>
</Tabs>


## 12.2.3. Result Types / Either Types

Result Types (or Either Types) are algebraic data types that contain either a success value or an error value.

### Languages {#sprachen}

<Tabs availableTabs={['elixir', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'v', 'zig']}>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math do
  def divide(a, b) when b != 0, do: {:ok, div(a, b)}
  def divide(_a, 0), do: {:error, "Division by zero"}
end

# Usage
case Math.divide(10, 2) do
  {:ok, result} -> IO.puts("Result: #{result}")
  {:error, reason} -> IO.puts("Error: #{reason}")
end
```

**Special features:**
- Tuples `{:ok, value}` for success, `{:error, reason}` for error
- Pattern matching for error handling
- Convention, no special types

**Further reading:**
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
        Err "Division by zero"
    else
        Ok (a // b)

-- Usage
case divide 10 2 of
    Ok result -> "Result: " ++ String.fromInt result
    Err reason -> "Error: " ++ reason
```

**Special features:**
- `Result error value` is a built-in type
- `Ok value` for success, `Err error` for error
- Pattern matching for error handling
- Compiler enforces handling of Result value

**Further reading:**
- [Elm Documentation - Error Handling](https://guide.elm-lang.org/error_handling/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Result<'T, 'TError> =
    | Ok of 'T
    | Error of 'TError

let divide a b =
    if b = 0 then
        Error "Division by zero"
    else
        Ok (a / b)

// Usage
match divide 10 2 with
| Ok result -> printfn "Result: %d" result
| Error reason -> printfn "Error: %s" reason
```

**Special features:**
- `Result<'T, 'TError>` is a built-in type (since F# 4.1)
- `Ok value` for success, `Error error` for error
- Pattern matching for error handling

**Further reading:**
- [F# Documentation - Result Type](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/results)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
pub fn divide(a: Int, b: Int) -> Result(Int, String) {
  case b {
    0 -> Error("Division by zero")
    _ -> Ok(a / b)
  }
}

// Usage
case divide(10, 2) {
  Ok(result) -> io.println("Result: " <> int.to_string(result))
  Error(reason) -> io.println("Error: " <> reason)
}
```

**Special features:**
- `Result(value, error)` is a built-in type
- `Ok(value)` for success, `Error(error)` for error
- Pattern matching for error handling
- Compiler enforces handling of Result value

**Further reading:**
- [Gleam Documentation - Error Handling](https://gleam.run/documentation/tour/error-handling/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
data Either a b = Left a | Right b

divide :: Int -> Int -> Either String Int
divide a b
    | b == 0 = Left "Division by zero"
    | otherwise = Right (a `div` b)

-- Usage
case divide 10 2 of
    Right result -> putStrLn $ "Result: " ++ show result
    Left reason -> putStrLn $ "Error: " ++ reason
```

**Special features:**
- `Either a b` is a built-in type
- `Left error` for error, `Right value` for success (convention)
- Pattern matching for error handling
- Monadic operations available

**Further reading:**
- [Haskell Documentation - Either](https://hackage.haskell.org/package/base/docs/Data-Either.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
type ('a, 'b) result = Ok of 'a | Error of 'b

let divide a b =
    if b = 0 then
        Error "Division by zero"
    else
        Ok (a / b)

(* Usage *)
match divide 10 2 with
| Ok result -> Printf.printf "Result: %d\n" result
| Error reason -> Printf.printf "Error: %s\n" reason
```

**Special features:**
- `('a, 'b) result` is a built-in type (since OCaml 4.03)
- `Ok value` for success, `Error error` for error
- Pattern matching for error handling

**Further reading:**
- [OCaml Documentation - Result Type](https://v2.ocaml.org/api/Result.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn divide(a: i32, b: i32) -> Result<i32, &'static str>
{
    if b == 0
    {
        return Err("Division by zero");
    }
    Ok(a / b)
}

// Usage
match divide(10, 2)
{
    Ok(result) => println!("Result: {}", result),
    Err(e) => println!("Error: {}", e),
}
```

**Special features:**
- `Result<T, E>` is a built-in type
- `Ok(T)` for success, `Err(E)` for error
- Pattern matching for error handling
- Compiler enforces handling of Result value
- Monadic operations available (`?` operator)

**Further reading:**
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
        Err("Division by zero")
    }
    else
    {
        Ok(a / b)
    }
}

// Usage
divide(10, 2) match
{
    case Ok(result) => println(s"Result: $result")
    case Err(reason) => println(s"Error: $reason")
}
```

**Special features:**
- `Result[T, E]` can be defined as an ADT
- `Either[E, T]` is also available (standard library)
- Pattern matching for error handling

**Further reading:**
- [Scala Documentation - Either](https://www.scala-lang.org/api/current/scala/util/Either.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Required: import Foundation

func divide(_ a: Int, _ b: Int) -> Result<Int, Error>
{
    if b == 0
    {
        return .failure(NSError(domain: "MathError", code: 1, userInfo: [NSLocalizedDescriptionKey: "Division by zero"]))
    }
    return .success(a / b)
}

// Usage
switch divide(10, 2)
{
case .success(let result):
    print("Result: \(result)")
case .failure(let error):
    print("Error: \(error.localizedDescription)")
}
```

**Special features:**
- `Result<Success, Failure>` is a built-in type (since Swift 5.0)
- `.success(value)` for success, `.failure(error)` for error
- Pattern matching for error handling

**Further reading:**
- [Swift Documentation - Result](https://developer.apple.com/documentation/swift/result)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Either type for error handling
parseInt : String -> Either String Int
parseInt str = case parseInteger str of
    Just n => Right (cast n)
    Nothing => Left ("Invalid number: " ++ str)

-- Chaining with >>= (Monad)
compute : String -> Either String Int
compute input = do
    n <- parseInt input
    if n > 0
        then Right (n * 2)
        else Left "Number must be positive"
```

**Special features:**
- `Either` is a built-in Sum Type: `Left` for error, `Right` for success
- Monadic chaining with `do` notation or `>>=`
- Compiler enforces handling of both cases

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Either type for error handling
fun safe-divide(a : int, b : int) : either<string,int>
  if b == 0 then Left("Division by zero")
  else Right(a / b)

// Pattern Matching on Either
fun show-result(r : either<string,int>) : string
  match r
    Left(err) -> "Error: " ++ err
    Right(val) -> "Result: " ++ val.show

// Alternative: Effects instead of Either
effect ctl raise(msg : string) : a

fun safe-div(a : int, b : int) : raise int
  if b == 0 then raise("Division by zero") else a / b
```

**Special features:**
- `either<a,b>` and `maybe<a>` as algebraic error types
- Pattern matching on `Left`/`Right` and `Just`/`Nothing`
- Koka prefers algebraic effects for error handling
- Effects provide direct control flow without monadic wrapping

**Further reading:**
- [Koka Language Guide - Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Except as Result/Either Type
def safeDivide (x y : Int) : Except String Int :=
  if y == 0 then .error "Division by zero"
  else .ok (x / y)

-- Usage with Pattern Matching
def result : String :=
  match safeDivide 10 0 with
  | .ok val => s!"Result: {val}"
  | .error err => s!"Error: {err}"

-- do notation for monadic chaining
def compute : Except String Int := do
  let a ← safeDivide 100 5
  let b ← safeDivide a 2
  return b
-- .ok 10
```

**Special features:**
- `Except ε α` as Result type (analogous to `Either`)
- `.ok` for success, `.error` for error
- Pattern matching for explicit error handling
- `do` notation for monadic chaining with `←`

**Further reading:**
- [Lean 4 Documentation - Monads](https://lean-lang.org/lean4/doc/monads.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Required: :- import_module maybe.

% Custom Result type (Either analog)
:- type result(T, E) ---> ok(T) ; error(E).

:- func divide(int, int) = result(int, string).
divide(_, 0) = error("Division by zero").
divide(A, B) = ok(A // B).

% Usage with Pattern Matching
main(!IO) :-
    Result = divide(10, 2),
    (
        Result = ok(Value),
        io.format("Result: %d\n", [i(Value)], !IO)
    ;
        Result = error(Reason),
        io.format("Error: %s\n", [s(Reason)], !IO)
    ).

% Alternative: maybe(T) as Option type
:- func safe_head(list(T)) = maybe(T).
safe_head([]) = no.
safe_head([X | _]) = yes(X).
```

**Special features:**
- Custom Result/Either types are defined as algebraic data types (`---> ok(T) ; error(E)`)
- `maybe(T)` with `yes(Value)` / `no` as built-in Option type
- Pattern matching enforces handling of both cases
- Discriminated Unions allow arbitrary error types

**Further reading:**
- [Mercury Language Reference - Type Definitions](https://www.mercurylang.org/information/doc-release/mercury_ref/Type-definitions.html)
- [Mercury Library Reference - maybe](https://www.mercurylang.org/information/doc-release/mercury_library/maybe.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Result Types: Either
safeDivide :: Int -> Int -> Either String Int
safeDivide _ 0 = Left "Division by zero"
safeDivide x y = Right (x / y)

-- Usage
result = case safeDivide 10 3 of
    Left err -> "Error: " <> err
    Right val -> "Result: " <> show val
```

**Special features:**
- `Either` is the standard Result Type
- `Left` for error cases, `Right` for success cases
- Pattern matching for error handling

**Further reading:**
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

**Special features:**
- Tag Unions are used as Result Types
- No built-in `Result` type, instead flexible Tag Unions
- Compiler enforces error handling

**Further reading:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
<TabItem value="v" label="V">

```v
// Result Types: !Type
fn read_file(path string) !string {
    // Required: import os
    return os.read_file(path) or {
        return error('File not found: ${path}')
    }
}

content := read_file('test.txt') or {
    println('Error: ${err}')
    return
}
println(content)
```

**Special features:**
- `!Type` marks a Result Type
- Contains either a value or an error
- `or { }` block for error handling
- Error propagation with `!` (e.g. `value := func()!`)

**Further reading:**
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

// Usage with catch
const result = divide(10, 2) catch |err| {
    std.debug.print("Error: {}\n", .{err});
    return;
};

// Usage with try (propagates error)
fn calculate() MathError!i32 {
    const a = try divide(10, 2);
    const b = try divide(a, 0);  // Error is propagated
    return b;
}
```

**Special features:**
- `E!T` is the Error Union Type (equivalent to `Result<T, E>`)
- `try` propagates errors automatically
- `catch` handles errors
- Compiler enforces handling of Error Unions

**Further reading:**
- [Zig Documentation - Errors](https://ziglang.org/documentation/master/#Errors)

</TabItem>
</Tabs>


## 12.2.4. Error Unions

Error Unions are types that contain either a value or an error, where the error part can be a union of different error types.

### Languages {#sprachen}

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

// Usage
const result = divide(10, 2) catch |err|
{
    switch (err)
    {
        MathError.DivisionByZero => std.debug.print("Error: Division by zero\n", .{}),
        MathError.Overflow => std.debug.print("Error: Overflow\n", .{}),
        MathError.Underflow => std.debug.print("Error: Underflow\n", .{}),
    }
    return;
};
std.debug.print("Result: {}\n", .{result});
```

**Special features:**
- Error Union Types (`!T` is `T` or `error`)
- Error Sets can be defined
- `catch` for error handling
- Compiler enforces handling of Error Unions
- Pattern matching on Error Sets possible

**Further reading:**
- [Zig Documentation - Error Handling](https://ziglang.org/documentation/0.11.0/#Errors)

</TabItem>
</Tabs>


## 12.2.5. Pattern Matching on Errors

Pattern matching on errors enables structured handling of different error types through pattern matching.

### Languages {#sprachen}

<Tabs availableTabs={['elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'lean4', 'mercury', 'ocaml', 'prolog', 'purescript', 'roc', 'rust', 'scala', 'swift', 'zig']}>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math do
  def divide(a, b) when b != 0, do: {:ok, div(a, b)}
  def divide(_a, 0), do: {:error, :division_by_zero}
  def divide(_a, _b), do: {:error, :invalid_operation}
end

# Pattern Matching on different Error-Patterns
case Math.divide(10, 2) do
  {:ok, result} -> IO.puts("Result: #{result}")
  {:error, :division_by_zero} -> IO.puts("Error: Division by zero")
  {:error, reason} -> IO.puts("Error: #{reason}")
end
```

**Special features:**
- Pattern matching on tuple structures
- Different error patterns can be handled differently
- Wildcard patterns for general error handling

**Further reading:**
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

-- Pattern Matching on Error-Variants
case divide 10 2 of
    Ok result -> "Result: " ++ String.fromInt result
    Err DivisionByZero -> "Error: Division by zero"
    Err InvalidOperation -> "Error: Invalid operation"
```

**Special features:**
- Pattern matching on Error-Union types
- Different error variants can be handled differently
- Compiler checks completeness of patterns

**Further reading:**
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

// Pattern matching on Error-Varianten
match divide 10 2 with
| Ok result -> printfn "Result: %d" result
| Error DivisionByZero -> printfn "Error: Division by zero"
| Error (InvalidOperation msg) -> printfn "Error: %s" msg
```

**Special features:**
- Pattern matching on Discriminated Unions
- Different error variants can be handled differently
- Compiler checks completeness of patterns

**Further reading:**
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

// Pattern Matching on Error-Variants
case divide(10, 2) {
  Ok(result) -> io.println("Result: " <> int.to_string(result))
  Error(DivisionByZero) -> io.println("Error: Division by zero")
  Error(InvalidOperation(msg)) -> io.println("Error: " <> msg)
}
```

**Special features:**
- Pattern matching on Custom Types
- Different error variants can be handled differently
- Compiler checks completeness of patterns

**Further reading:**
- [Gleam Documentation - Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
data MathError = DivisionByZero | InvalidOperation String

divide :: Int -> Int -> Either MathError Int
divide a b
    | b == 0 = Left DivisionByZero
    | otherwise = Right (a `div` b)

-- Pattern Matching on Error-Constructors
case divide 10 2 of
    Right result -> putStrLn $ "Result: " ++ show result
    Left DivisionByZero -> putStrLn "Error: Division by zero"
    Left (InvalidOperation msg) -> putStrLn $ "Error: " ++ msg
```

**Special features:**
- Pattern matching on ADT constructors
- Different error constructors can be handled differently
- Compiler checks completeness of patterns (with warnings)

**Further reading:**
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

(* Pattern matching on Error-Varianten *)
match divide 10 2 with
| Ok result -> Printf.printf "Result: %d\n" result
| Error DivisionByZero -> Printf.printf "Error: Division by zero\n"
| Error (InvalidOperation msg) -> Printf.printf "Error: %s\n" msg
```

**Special features:**
- Pattern matching on Variant Types
- Different error variants can be handled differently
- Compiler checks completeness of patterns

**Further reading:**
- [OCaml Documentation - Pattern Matching](https://v2.ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Pattern matching on Error-Terme durch Unifikation
process :-
    catch(
        (Result is 10 / 0),
        Error,
        handle_error(Error)
    ).

% Different error types with separate clauses
handle_error(error(evaluation_error(zero_divisor), _)) :-
    format("Error: Division by zero~n").
handle_error(error(type_error(Expected, Actual), _)) :-
    format("Error: Type ~w expected, ~w received~n", [Expected, Actual]).
handle_error(error(existence_error(procedure, Name), _)) :-
    format("Error: Procedure ~w not found~n", [Name]).
handle_error(error(Error, _)) :-
    format("General error: ~w~n", [Error]).
```

**Special features:**
- Pattern matching on error terms occurs through Prolog's unification
- Error terms are structured terms — different clauses for different errors
- More specific patterns before more general ones (clause order)
- Compiler does not enforce completeness of patterns

**Further reading:**
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

// Pattern Matching on Error-Variants
match divide(10, 2)
{
    Ok(result) => println!("Result: {}", result),
    Err(MathError::DivisionByZero) => println!("Error: Division by zero"),
    Err(MathError::InvalidOperation(msg)) => println!("Error: {}", msg),
}
```

**Special features:**
- Pattern matching on Enum variants
- Different error variants can be handled differently
- Compiler checks completeness of patterns

**Further reading:**
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

// Pattern Matching on Error-Variants
divide(10, 2) match
{
    case Right(result) => println(s"Result: $result")
    case Left(DivisionByZero) => println("Error: Division by zero")
    case Left(InvalidOperation(msg)) => println(s"Error: $msg")
}
```

**Special features:**
- Pattern matching on Sealed Traits
- Different error variants can be handled differently
- Compiler checks completeness of patterns (with sealed traits)

**Further reading:**
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

// Pattern Matching on Error-Variants
do
{
    let result = try divide(10, 2)
    print("Result: \(result)")
}
catch MathError.divisionByZero
{
    print("Error: Division by zero")
}
catch MathError.invalidOperation(let msg)
{
    print("Error: \(msg)")
}
catch
{
    print("Unknown error")
}
```

**Special features:**
- Pattern matching in catch blocks
- Different error variants can be handled differently
- Wildcard pattern for general error handling

**Further reading:**
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

// Pattern Matching on Error Sets
const result = divide(10, 2) catch |err|
{
    switch (err)
    {
        MathError.DivisionByZero => std.debug.print("Error: Division by zero\n", .{}),
        MathError.InvalidOperation => std.debug.print("Error: Invalid operation\n", .{}),
    }
    return;
};
std.debug.print("Result: {}\n", .{result});
```

**Special features:**
- Pattern matching on Error Sets with `switch`
- Different error values can be handled differently
- Compiler checks completeness of patterns

**Further reading:**
- [Zig Documentation - Error Handling](https://ziglang.org/documentation/0.11.0/#Errors)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Pattern Matching on Error-Tuples
case file:read_file("test.txt") of
    {ok, Content} -> Content;
    {error, enoent} -> "File not found";
    {error, Reason} -> io:format("Error: ~p~n", [Reason])
end.

% Pattern Matching in try-catch
try
    list_to_integer("abc")
catch
    error:badarg -> "Invalid argument"
end.
```

**Special features:**
- Pattern matching on `{ok, Value}` / `{error, Reason}` Tuples
- Pattern matching in `catch` clauses on error class and error reason
- Fundamental pattern for Error Handling in Erlang

**Further reading:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Pattern Matching on Either
handleResult : Either String Int -> String
handleResult (Left err) = "Error: " ++ err
handleResult (Right val) = "Value: " ++ show val

-- Pattern Matching on Maybe
handleMaybe : Maybe Int -> Int
handleMaybe (Just n) = n
handleMaybe Nothing = 0
```

**Special features:**
- Errors are handled through pattern matching on `Either` and `Maybe`
- Exhaustiveness checking enforces complete error handling
- No exception mechanisms needed

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Pattern Matching on Either
fun handle-result(r : either<string,int>) : string
  match r
    Left(err) -> "Error: " ++ err
    Right(val) -> "Value: " ++ val.show

// Pattern Matching on Maybe
fun handle-maybe(m : maybe<int>) : int
  match m
    Just(n) -> n
    Nothing -> 0

// Custom error types
type app-error
  NotFound
  Unauthorized
  ServerError(msg : string)

fun handle-error(err : app-error) : string
  match err
    NotFound         -> "Not found"
    Unauthorized     -> "Unauthorized"
    ServerError(msg) -> "Server error: " ++ msg
```

**Special features:**
- Pattern matching on `either`, `maybe` and custom error types
- Exhaustiveness checking enforces complete error handling
- Algebraic data types for structured error modeling

**Further reading:**
- [Koka Language Guide - Data Types](https://koka-lang.github.io/koka/doc/book.html#sec-datatypes)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pattern Matching on Except
def handleResult (r : Except String Int) : String :=
  match r with
  | .ok val => s!"Value: {val}"
  | .error err => s!"Error: {err}"

-- Pattern Matching on Option
def handleOption (m : Option Int) : Int :=
  match m with
  | some n => n
  | none => 0

-- Custom error types
inductive AppError where
  | notFound : AppError
  | unauthorized : AppError
  | serverError : String → AppError

def handleError (err : AppError) : String :=
  match err with
  | .notFound => "Not found"
  | .unauthorized => "Unauthorized"
  | .serverError msg => s!"Server error: {msg}"
```

**Special features:**
- Pattern matching on `Except`, `Option` and custom error types
- Exhaustiveness checking enforces complete error handling
- Inductive types for structured error modeling
- Dot notation `.ok`, `.error` for constructors

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/patternmatching.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Error type as algebraic data type
:- type math_error ---> division_by_zero ; overflow ; invalid_input(string).
:- type result(T, E) ---> ok(T) ; error(E).

:- func divide(int, int) = result(int, math_error).
divide(_, 0) = error(division_by_zero).
divide(A, B) = ok(A // B).

% Pattern Matching on different error variants
:- pred handle_result(result(int, math_error)::in, io::di, io::uo) is det.
handle_result(ok(Value), !IO) :-
    io.format("Result: %d\n", [i(Value)], !IO).
handle_result(error(division_by_zero), !IO) :-
    io.write_string("Error: Division by zero\n", !IO).
handle_result(error(overflow), !IO) :-
    io.write_string("Error: Overflow\n", !IO).
handle_result(error(invalid_input(Msg)), !IO) :-
    io.format("Error: Invalid input – %s\n", [s(Msg)], !IO).

% Pattern Matching on maybe(T)
:- func handle_maybe(maybe(int)) = int.
handle_maybe(yes(N)) = N.
handle_maybe(no) = 0.
```

**Special features:**
- Pattern matching on algebraic data types is fundamental in Mercury
- Separate clauses for each error variant (like in Prolog/Erlang)
- Compiler checks completeness of patterns (Exhaustiveness Checking)
- Nested patterns possible (e.g. `error(invalid_input(Msg))`)

**Further reading:**
- [Mercury Language Reference - Clauses and Disjunctions](https://www.mercurylang.org/information/doc-release/mercury_ref/Clauses-and-disjunctions.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Pattern Matching on Errors
data AppError = NotFound | Unauthorized | ServerError String

handleError :: Either AppError String -> String
handleError (Left NotFound) = "Not found"
handleError (Left Unauthorized) = "Unauthorized"
handleError (Left (ServerError msg)) = "Server error: " <> msg
handleError (Right value) = value
```

**Special features:**
- Pattern matching on `Either` and custom error types
- Exhaustiveness checking enforces complete error handling
- No exceptions, only algebraic error types

**Further reading:**
- [PureScript Documentation - Either](https://pursuit.purescript.org/packages/purescript-either/docs/Data.Either)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Pattern Matching on Errors
handleResult : [Ok I64, NotFound, ParseError Str] -> Str
handleResult = \result ->
    when result is
        Ok value -> "Value: $(Num.toStr value)"
        NotFound -> "Not found"
        ParseError msg -> "Parse error: $(msg)"
```

**Special features:**
- `when/is` for pattern matching on error types
- Exhaustive checking enforces handling of all error cases
- Different error tags with different payloads

**Further reading:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
</Tabs>

## 12.2.6. Conditions / Restarts

The Conditions/Restarts system separates the detection of errors (Signaling), the decision about error handling (Handling), and recovery (Restarting). In contrast to traditional exception handling, the call stack is not unwound when signaling a Condition — the handler runs in the context of the signaler and can invoke restarts defined there.

### Languages {#sprachen}

<Tabs availableTabs={['common-lisp', 'koka']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Define Condition class
(define-condition division-error (error)
  ((dividend :initarg :dividend :reader dividend)
   (divisor :initarg :divisor :reader divisor)))

;; Function with Restarts — defines recovery options
(defun safe-divide (a b)
  (restart-case
    (if (zerop b)
        (error 'division-error :dividend a :divisor b)
        (/ a b))
    (return-zero ()
      :report "Return 0."
      0)
    (use-value (value)
      :report "Use an alternative value."
      value)
    (recalc-using (new-divisor)
      :report "Use a different divisor."
      (safe-divide a new-divisor))))

;; Handler chooses a Restart — without unwinding the stack
(handler-bind
  ((division-error
     (lambda (c)
       (invoke-restart 'return-zero))))
  (safe-divide 10 0))  ; => 0

;; Handler with alternative Restart
(handler-bind
  ((division-error
     (lambda (c)
       (invoke-restart 'use-value 42))))
  (safe-divide 10 0))  ; => 42

;; Handler with recalculation
(handler-bind
  ((division-error
     (lambda (c)
       (invoke-restart 'recalc-using 2))))
  (safe-divide 10 0))  ; => 5
```

**Special features:**
- `define-condition` defines Condition classes in a hierarchy (based on CLOS)
- `restart-case` establishes named restarts with recovery options
- `handler-bind` binds handlers without unwinding the call stack
- `invoke-restart` invokes a restart from the handler context
- Conditions are not limited to errors — warnings (`warn`) and signals (`signal`) are also possible
- In the interactive debugger, restarts can be selected manually
- Fundamental difference to try/catch: separation of Policy (Handler) and Mechanism (Restart)

**Further reading:**
- [Common Lisp HyperSpec - Conditions](http://www.lispworks.com/documentation/HyperSpec/Body/09_.htm)
- [Practical Common Lisp - Beyond Exception Handling](https://gigamonkeys.com/book/beyond-exception-handling-conditions-and-restarts)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Algebraic Effects as Conditions/Restarts
// Effect defines Conditions and possible Restarts
effect ctl raise(msg : string) : int  // Restart: return int

fun safe-divide(a : int, b : int) : int
  if b == 0 then raise("Division by zero")
  else a / b

// Handler decides on Restart strategy
fun with-default(action : () -> <raise|e> int) : e int
  with ctl raise(msg) -> resume(0)  // Restart: default value
  action()

// Alternative Handler: Different Restart strategy
fun with-retry(action : () -> <raise|e> int) : e int
  with ctl raise(msg) -> resume(1)  // Restart: replacement value
  action()

val result1 = with-default{ safe-divide(10, 0) }  // 0
val result2 = with-retry{ safe-divide(10, 0) }    // 1
```

**Special features:**
- Algebraic effects are a direct generalization of Conditions/Restarts
- `ctl` defines Conditions, `resume` corresponds to `invoke-restart`
- Handlers run in the context of the signaler (stack is not unwound)
- Different handlers can implement different restart strategies
- In contrast to Common Lisp: Effect type is tracked in the type system

**Further reading:**
- [Koka Language Guide - Effect Handlers](https://koka-lang.github.io/koka/doc/book.html#sec-handlers)

</TabItem>
</Tabs>

