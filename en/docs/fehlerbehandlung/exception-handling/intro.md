---
slug: /fehlerbehandlung/exception-handling
title: 12.1. Exception Handling
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 12.1. Exception Handling

Handling of exceptions.

## 12.1.1. Try-Catch Blocks

Try-catch blocks enable catching and handling exceptions during program execution.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'kotlin', 'mercury', 'nim', 'objective-c', 'object-pascal', 'octave', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['julia', 'matlab']}>
<TabItem value="csharp" label="C#">

```csharp
try
{
    int result = 10 / 0;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"General error: {ex.Message}");
}
```

**Special features:**
- Multiple catch blocks possible, more specific exceptions first
- Exception type must derive from System.Exception
- `when` clause for conditional catch blocks (since C# 6.0)

**Further reading:**
- [Microsoft C# Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Required: #include <iostream>, #include <stdexcept>
try
{
    throw std::runtime_error("Runtime error occurred");
}
catch (const std::runtime_error& ex)
{
    std::cout << "Runtime error: " << ex.what() << std::endl;
}
catch (const std::exception& ex)
{
    std::cout << "Error: " << ex.what() << std::endl;
}
catch (...)
{
    std::cout << "Unknown error" << std::endl;
}
```

**Special features:**
- Exception handling since C++98
- `catch (...)` catches all exceptions (including non-exception types)
- Exception specifications (deprecated since C++11, removed in C++17)
- `noexcept` specification for functions that do not throw exceptions
- Integer division by zero is undefined behavior, no exception

**Further reading:**
- [cppreference.com - Exception Handling](https://en.cppreference.com/w/cpp/language/exceptions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
try
{
    int result = 10 ~/ 0;
}
on IntegerDivisionByZeroException
{
    print('Division by zero');
}
on Exception catch (e)
{
    print('Error: $e');
}
catch (e, stackTrace)
{
    print('Unknown error: $e');
    print('Stack Trace: $stackTrace');
}
```

**Special features:**
- `on` for specific exception types without access to the exception object
- `on ... catch` for specific exception types with access to the exception object
- `catch` without type catches all exceptions
- Optional second parameter for stack trace

**Further reading:**
- [Dart Language Tour - Exceptions](https://dart.dev/guides/language/language-tour#exceptions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
try
{
    int result = 10 / 0
}
catch (ArithmeticException e)
{
    println "Error: ${e.message}"
}
catch (Exception e)
{
    println "General error: ${e.message}"
}
```

**Special features:**
- Syntax identical to Java
- Supports all Java exception types
- Optional `finally` block possible

**Further reading:**
- [Groovy Documentation - Exception Handling](https://groovy-lang.org/semantics.html#_exception_handling)

</TabItem>
<TabItem value="java" label="Java">

```java
try
{
    int result = 10 / 0;
}
catch (ArithmeticException e)
{
    System.out.println("Error: " + e.getMessage());
}
catch (Exception e)
{
    System.out.println("General error: " + e.getMessage());
}
```

**Special features:**
- Multiple catch blocks possible, more specific exceptions first
- All exception types must derive from Throwable
- Checked exceptions must be declared (see separate feature)

**Further reading:**
- [Oracle Java Documentation - Exception Handling](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
try
{
    let result = 10 / 0;
    if (!isFinite(result)) throw new Error('Division ergibt unendlich');
}
catch (error)
{
    console.log(`Fehler: ${error.message}`);
}
```

**Special features:**
- A catch block catches all exceptions
- Exception object has `name`, `message` and `stack` properties
- `throw` can throw any value, not just Error objects

**Further reading:**
- [MDN Web Docs - try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
try
{
    val result = 10 / 0
}
catch (e: ArithmeticException)
{
    println("Fehler: ${e.message}")
}
catch (e: Exception)
{
    println("Allgemeiner Fehler: ${e.message}")
}
```

**Special features:**
- Syntax similar to Java, but with Kotlin type annotations
- No checked exceptions (all exceptions are unchecked)
- `try` can be used as an expression

**Further reading:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Required: :- import_module exception.

:- pred safe_divide(int::in, int::in, int::out, io::di, io::uo) is det.
safe_divide(A, B, Result, !IO) :-
    ( try [io(!IO)] (
        ( B = 0 ->
            throw("Division durch Null")
        ;
            true
        )
    )
    then
        Result = A // B
    catch S ->
        io.format("Fehler: %s\n", [s(S)], !IO),
        Result = 0
    ).

% Alternative: exception.try/1 with Result type
main(!IO) :-
    ( exception.try(
        (pred(R::out) is det :-
            R = 10 // 0
        ))
    = exception.succeeded(Value) ->
        io.format("Ergebnis: %d\n", [i(Value)], !IO)
    ;
        io.write_string("Exception aufgetreten\n", !IO)
    ).
```

**Special features:**
- `throw(Term)` throws an exception with any type
- `exception.try/1` catches exceptions and returns `succeeded(Value)` or `exception(Univ)`
- Exceptions in Mercury are based on the `univ` type (any values can be thrown)
- Mercury primarily uses `maybe`/`result` types instead of exceptions for expected errors

**Further reading:**
- [Mercury Library Reference - exception](https://www.mercurylang.org/information/doc-release/mercury_library/exception.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
try
{
    $result = 10 / 0;
}
catch (DivisionByZeroError $e)
{
    echo "Fehler: " . $e->getMessage();
}
catch (Throwable $e)
{
    echo "Allgemeiner Fehler: " . $e->getMessage();
}
```

**Special features:**
- Exception handling since PHP 5
- All exceptions must derive from Throwable (since PHP 7)
- `Error` and `Exception` both derive from Throwable

**Further reading:**
- [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% catch/3 — ISO Prolog (equivalent to try-catch)
% catch(Goal, Catcher, Recovery)
:- catch(
       (Result is 10 / 0),
       error(evaluation_error(zero_divisor), _),
       format("Fehler: Division durch Null~n")
   ).

% General catching of all errors
:- catch(
       risky_goal,
       Error,
       format("Allgemeiner Fehler: ~w~n", [Error])
   ).
```

**Special features:**
- `catch(Goal, Catcher, Recovery)` is the ISO Prolog equivalent to try-catch
- `Catcher` is compared with the thrown term through unification
- Only one `catch` level per call — nested `catch/3` for multiple handlers
- `throw(Term)` for throwing arbitrary Prolog terms

**Further reading:**
- [SWI-Prolog Documentation - catch/3](https://www.swi-prolog.org/pldoc/doc_for?object=catch/3)

</TabItem>
<TabItem value="python" label="Python">

```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Fehler: {e}")
except Exception as e:
    print(f"Allgemeiner Fehler: {e}")
```

**Special features:**
- `except` instead of `catch`
- Multiple `except` clauses possible, more specific exceptions first
- `as` clause for accessing the exception object
- `except` without type catches all exceptions (not recommended)

**Further reading:**
- [Python Documentation - Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
begin
    result = 10 / 0
rescue ZeroDivisionError => e
    puts "Fehler: #{e.message}"
rescue => e
    puts "Allgemeiner Fehler: #{e.message}"
end
```

**Special features:**
- `begin...rescue...end` instead of `try...catch`
- `rescue` instead of `catch`
- `=>` for assigning the exception object
- `rescue` without type catches all StandardError exceptions

**Further reading:**
- [Ruby Documentation - Exception Handling](https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
try
{
    val result = 10 / 0
}
catch
{
    case e: ArithmeticException => println(s"Fehler: ${e.getMessage}")
    case e: Exception => println(s"Allgemeiner Fehler: ${e.getMessage}")
}
```

**Special features:**
- Pattern matching in catch blocks
- `case` clauses for different exception types
- No checked exceptions (all exceptions are unchecked)

**Further reading:**
- [Scala Documentation - Exception Handling](https://docs.scala-lang.org/tour/exception-handling.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
enum MathError: Error
{
    case divisionByZero
}

func divide(_ a: Int, _ b: Int) throws -> Int
{
    if b == 0
    {
        throw MathError.divisionByZero
    }
    return a / b
}

do
{
    let result = try divide(10, 0)
    print("Ergebnis: \(result)")
}
catch let error as MathError
{
    print("Math-Fehler: \(error)")
}
catch
{
    print("Unbekannter Fehler: \(error)")
}
```

**Special features:**
- `do...catch` instead of `try...catch`
- `try` before functions that can throw exceptions
- Pattern matching in catch blocks
- All errors must conform to the Error protocol

**Further reading:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
try
{
    let result = 10 / 0;
    if (!isFinite(result)) throw new Error('Division ergibt unendlich');
}
catch (error: unknown)
{
    if (error instanceof Error)
    {
        console.log(`Fehler: ${error.message}`);
    }
    else
    {
        console.log('Unbekannter Fehler');
    }
}
```

**Special features:**
- Syntax identical to JavaScript
- TypeScript type annotations possible for exception objects
- `unknown` type recommended for exception objects (since TypeScript 3.0)

**Further reading:**
- [TypeScript Handbook - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
Try
    Dim result As Integer = 10 / 0
Catch ex As DivideByZeroException
    Console.WriteLine($"Fehler: {ex.Message}")
Catch ex As Exception
    Console.WriteLine($"Allgemeiner Fehler: {ex.Message}")
End Try
```

**Special features:**
- Syntax similar to C#, but with VB.NET keywords
- Multiple catch blocks possible, more specific exceptions first
- Exception type must derive from System.Exception

**Further reading:**
- [Microsoft VB.NET Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Try-Catch
(try
  (/ 10 0)
  (catch ArithmeticException e
    (println (str "Fehler: " (.getMessage e))))
  (catch Exception e
    (println (str "Allgemeiner Fehler: " (.getMessage e)))))

;; Throwing exceptions
(try
  (throw (ex-info "Eigener Fehler" {:code 404}))
  (catch clojure.lang.ExceptionInfo e
    (println (.getMessage e))       ; "Eigener Fehler"
    (println (ex-data e))))         ; {:code 404}
```

**Special features:**
- `try`/`catch`/`finally` like in Java
- `ex-info` for exceptions with additional data (Map)
- `ex-data` for reading data from `ExceptionInfo`
- Multiple `catch` clauses possible

**Further reading:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms#try)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; handler-case (equivalent to try-catch)
(handler-case
    (progn
      (format t "Versuche...~%")
      (/ 1 0))
  (division-by-zero (e)
    (format t "Division durch Null: ~a~%" e))
  (error (e)
    (format t "Allgemeiner Fehler: ~a~%" e)))

;; unwind-protect (equivalent to try-finally)
(unwind-protect
    (progn
      (format t "Try-Block~%")
      (error "Fehler!"))
  (format t "Cleanup (wird immer ausgeführt)~%"))
```

**Special features:**
- `handler-case` is equivalent to try/catch (stack is unwound before handler)
- `unwind-protect` is equivalent to try/finally
- Condition System is more powerful than classical exceptions (restarts, handler-bind)
- `handler-bind` enables handling without stack unwinding

**Further reading:**
- [Common Lisp HyperSpec - handler-case](http://www.lispworks.com/documentation/HyperSpec/Body/m_hand_1.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Try-Catch Blocks
// Required: import std.stdio;
// Required: import std.conv;
try {
    int value = to!int("abc");  // Throws ConvException
} catch (ConvException e) {
    writeln("Konvertierungsfehler: ", e.msg);
} catch (Exception e) {
    writeln("Allgemeiner Fehler: ", e.msg);
}
```

**Special features:**
- `try-catch` syntax similar to Java/C++
- Multiple `catch` blocks for different exception types
- More specific exceptions must come before more general ones
- `catch (Exception e)` catches all exceptions

**Further reading:**
- [D Language Specification - Try Statement](https://dlang.org/spec/statement.html#try-statement)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Try-Catch Block
Result = try
    1 / 0
catch
    error:badarith -> {error, "Division by zero"}
end.
```

**Special features:**
- `try...catch...end` since OTP R10B
- Catch clauses support pattern matching on error class and error reason
- Three error classes: `error`, `exit`, `throw`

**Further reading:**
- [Erlang Documentation - Try Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#try)
</TabItem>
<TabItem value="julia" label="Julia">

```julia
try
    result = 10 / 0
    sqrt(-1)
catch e
    if isa(e, DivideError)
        println("Division durch Null")
    elseif isa(e, DomainError)
        println("Mathematischer Fehler: $e")
    else
        println("Unbekannter Fehler: $e")
    end
end
```

**Special features:**
- `try ... catch e ... end` syntax
- Exception variable `e` is optional
- No type filter in `catch` – type checking is done with `isa`
- `rethrow()` for rethrowing an exception

**Further reading:**
- [Julia Documentation - Exception Handling](https://docs.julialang.org/en/v1/manual/control-flow/#Exception-Handling)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Try-Catch Block
try
    result = 1 / 0;
    error('myApp:divisionByZero', 'Division durch Null');
catch ME
    fprintf('Fehler: %s\n', ME.message);
    fprintf('Identifier: %s\n', ME.identifier);
end
```

**Special features:**
- `try-catch` syntax with optional `ME` (MException object)
- No `finally` block, instead `onCleanup()` for cleanup actions
- `error()` for triggering exceptions

**Further reading:**
- [MATLAB Documentation - try, catch](https://www.mathworks.com/help/matlab/ref/try.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Try-Except (Nim's try-catch)
try:
  let x = parseInt("abc")
except ValueError:
  echo "Ungültige Zahl"
except IOError as e:
  echo "IO-Fehler: ", e.msg
except CatchableError:
  echo "Allgemeiner Fehler"
```

**Special features:**
- `try`-`except` instead of `try`-`catch`
- Multiple `except` branches possible
- `as e` for accessing exception object
- `CatchableError` as base for all catchable exceptions

**Further reading:**
- [Nim Documentation - Exception Handling](https://nim-lang.org/docs/manual.html#exception-handling)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  x, y: Integer;
begin
  try
    x := 10;
    y := 0;
    WriteLn(x div y);
  except
    on E: EDivByZero do
      WriteLn('Division durch Null: ', E.Message);
    on E: Exception do
      WriteLn('Fehler: ', E.Message);
  end;
end;
```

**Special features:**
- `try`/`except` instead of `try`/`catch`
- `on E: ExceptionType do` for typed handling
- Exception hierarchy with `Exception` as base class

**Further reading:**
- [Delphi Documentation - Try-Except](https://docwiki.embarcadero.com/RADStudio/en/Try...except_Statements)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@try {
    NSArray *array = @[@1, @2, @3];
    id item = array[10]; // Wirft NSRangeException
}
@catch (NSException *exception) {
    NSLog(@"Exception: %@ - %@", exception.name, exception.reason);
}
```

**Special features:**
- `@try`/`@catch` syntax for exception handling
- Exceptions in Objective-C are intended for programming errors, not for regular error handling
- NSError pattern (out parameter) is preferred for expected errors
- Performance overhead with `@try` blocks (minimal with Non-Fragile ABI)

**Further reading:**
- [Apple Documentation - Exception Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Exceptions.html)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
try
    result = some_function();
catch err
    printf("Fehler-ID: %s\n", err.identifier);
    printf("Nachricht: %s\n", err.message);
end
```

**Special features:**
- `try`/`catch`/`end` syntax
- Error object contains `identifier`, `message` and `stack`
- `unwind_protect` as alternative for guaranteed cleanup execution

**Further reading:**
- [GNU Octave Documentation - Errors](https://octave.org/doc/v8.1.0/Errors.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Catch/Throw *)
result = Catch[
    Throw["Fehler aufgetreten"];
    Print["Wird nicht erreicht"]
]
(* result = "Fehler aufgetreten" *)

(* Check for message-based error handling *)
result2 = Check[1/0, "Division durch Null"]
```

**Special features:**
- `Catch[expr]` catches `Throw[value]`
- `Check[expr, failexpr]` catches messages (warnings/errors)
- `Catch[expr, tag]` for tagged exceptions

**Further reading:**
- [Wolfram Language Documentation - Catch](https://reference.wolfram.com/language/ref/Catch.html)

</TabItem>
</Tabs>


## 12.1.2. Finally Blocks

Finally blocks enable execution of code that runs regardless of whether an exception occurred or not.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']} orangeTabs={['cpp']}>
<TabItem value="csharp" label="C#">

```csharp
try
{
    int result = 10 / 0;
}
catch (Exception ex)
{
    Console.WriteLine($"Fehler: {ex.Message}");
}
finally
{
    Console.WriteLine("Wird immer ausgeführt");
}
```

**Special features:**
- `finally` block is always executed, even if no exception occurs
- Also executed when `return` is used in try or catch block
- Useful for resource cleanup

**Further reading:**
- [Microsoft C# Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Required: #include <iostream>, #include <stdexcept>, #include <fstream>
// C++ has no finally - RAII is used instead
{
    std::ofstream file("output.txt"); // Resource is opened in constructor
    try
    {
        file << "Daten schreiben";
        throw std::runtime_error("Fehler");
    }
    catch (const std::exception& ex)
    {
        std::cout << "Fehler: " << ex.what() << std::endl;
    }
    // file is automatically closed by destructor (RAII)
    // No finally block needed
}
```

**Special features:**
- C++ has no `finally` construct
- RAII (Resource Acquisition Is Initialization) is used as alternative
- Destructors are automatically called, even with exceptions
- Scope guards (e.g., with lambdas) can simulate `finally` behavior

**Further reading:**
- [cppreference.com - RAII](https://en.cppreference.com/w/cpp/language/raii)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
try
{
    int result = 10 ~/ 0;
}
catch (e)
{
    print('Fehler: $e');
}
finally
{
    print('Wird immer ausgeführt');
}
```

**Special features:**
- `finally` block is always executed
- Also executed when `return` is used in try or catch block

**Further reading:**
- [Dart Language Tour - Exceptions](https://dart.dev/guides/language/language-tour#exceptions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
try
{
    int result = 10 / 0
}
catch (Exception e)
{
    println "Fehler: ${e.message}"
}
finally
{
    println "Wird immer ausgeführt"
}
```

**Special features:**
- Syntax identical to Java
- `finally` block is always executed

**Further reading:**
- [Groovy Documentation - Exception Handling](https://groovy-lang.org/semantics.html#_exception_handling)

</TabItem>
<TabItem value="java" label="Java">

```java
try
{
    int result = 10 / 0;
}
catch (Exception e)
{
    System.out.println("Fehler: " + e.getMessage());
}
finally
{
    System.out.println("Wird immer ausgeführt");
}
```

**Special features:**
- `finally` block is always executed, even if no exception occurs
- Also executed when `return` is used in try or catch block
- Useful for resource cleanup

**Further reading:**
- [Oracle Java Documentation - Exception Handling](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
try
{
    let result = 10 / 0;
}
catch (error)
{
    console.log(`Fehler: ${error.message}`);
}
finally
{
    console.log('Wird immer ausgeführt');
}
```

**Special features:**
- `finally` block is always executed
- Also executed when `return` is used in try or catch block

**Further reading:**
- [MDN Web Docs - try...catch...finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
try
{
    val result = 10 / 0
}
catch (e: Exception)
{
    println("Fehler: ${e.message}")
}
finally
{
    println("Wird immer ausgeführt")
}
```

**Special features:**
- `finally` block is always executed
- Also executed when `return` is used in try or catch block

**Further reading:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
try
{
    $result = 10 / 0;
}
catch (Throwable $e)
{
    echo "Fehler: " . $e->getMessage();
}
finally
{
    echo "Wird immer ausgeführt";
}
```

**Special features:**
- `finally` block is always executed (since PHP 5.5)
- Also executed when `return` is used in try or catch block

**Further reading:**
- [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% setup_call_cleanup/3 — ISO Prolog (equivalent to try-finally)
:- setup_call_cleanup(
       true,                                    % Setup
       catch(
           (Result is 10 / 0),
           error(_, _),
           format("Fehler aufgetreten~n")
       ),
       format("Wird immer ausgeführt~n")        % Cleanup
   ).

% Typical usage: resource cleanup
:- setup_call_cleanup(
       open('data.txt', read, Stream),
       read_string(Stream, _, Data),
       close(Stream)                            % Stream is always closed
   ).
```

**Special features:**
- `setup_call_cleanup/3` is the ISO Prolog equivalent to try-finally
- Cleanup is always executed (on success, error or deterministic termination)
- `setup_call_catcher_cleanup/4` additionally enables access to the error term
- No separate `finally` block — the guarantee is built into the predicate

**Further reading:**
- [SWI-Prolog Documentation - setup_call_cleanup/3](https://www.swi-prolog.org/pldoc/doc_for?object=setup_call_cleanup/3)

</TabItem>
<TabItem value="python" label="Python">

```python
try:
    result = 10 / 0
except Exception as e:
    print(f"Fehler: {e}")
finally:
    print("Wird immer ausgeführt")
```

**Special features:**
- `finally` block is always executed
- Also executed when `return` is used in try or except block
- Can also be used without `except`

**Further reading:**
- [Python Documentation - Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
begin
    result = 10 / 0
rescue => e
    puts "Fehler: #{e.message}"
ensure
    puts "Wird immer ausgeführt"
end
```

**Special features:**
- `ensure` instead of `finally`
- Always executed, even if no exception occurs
- Also executed when `return` is used in begin or rescue block

**Further reading:**
- [Ruby Documentation - Exception Handling](https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
try
{
    val result = 10 / 0
}
catch
{
    case e: Exception => println(s"Fehler: ${e.getMessage}")
}
finally
{
    println("Wird immer ausgeführt")
}
```

**Special features:**
- `finally` block is always executed
- Also executed when `return` is used in try or catch block

**Further reading:**
- [Scala Documentation - Exception Handling](https://docs.scala-lang.org/tour/exception-handling.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func processData() throws
{
    defer
    {
        print("Wird immer ausgeführt (Cleanup)")
    }
    
    do
    {
        let result = try riskyOperation()
        print("Ergebnis: \(result)")
    }
    catch
    {
        print("Fehler aufgetreten: \(error)")
        throw error
    }
}
```

**Special features:**
- `defer` instead of `finally`
- Executed in reverse order (LIFO)
- Executed when the scope is left

**Further reading:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
try
{
    let result = 10 / 0;
}
catch (error: unknown)
{
    if (error instanceof Error)
    {
        console.log(`Fehler: ${error.message}`);
    }
}
finally
{
    console.log('Wird immer ausgeführt');
}
```

**Special features:**
- Syntax identical to JavaScript
- `finally` block is always executed
- Also executed when `return` is used in try or catch block

**Further reading:**
- [TypeScript Handbook - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
Try
    Dim result As Integer = 10 / 0
Catch ex As Exception
    Console.WriteLine($"Fehler: {ex.Message}")
Finally
    Console.WriteLine("Wird immer ausgeführt")
End Try
```

**Special features:**
- Syntax similar to C#, but with VB.NET keywords
- `finally` block is always executed
- Also executed when `Return` is used in Try or Catch block

**Further reading:**
- [Microsoft VB.NET Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Finally Block
(try
  (println "Versuch...")
  (/ 10 0)
  (catch ArithmeticException e
    (println "Division durch Null!"))
  (finally
    (println "Aufräumen...")))  ; Always executed

;; Resource management with with-open (like try-with-resources)
;; Required: clojure.java.io
(with-open [reader (clojure.java.io/reader "datei.txt")]
  (println (line-seq reader)))
```

**Special features:**
- `finally` is always executed (like in Java)
- `with-open` for automatic closing of resources
- `finally` block has no return value

**Further reading:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms#try)

</TabItem>
<TabItem value="d" label="D">

```d
// Finally Blocks
// Required: import std.stdio;
try {
    writeln("Try-Block");
    throw new Exception("Fehler");
} catch (Exception e) {
    writeln("Catch: ", e.msg);
} finally {
    writeln("Finally wird immer ausgeführt");
}
```

**Special features:**
- `finally` block is always executed (whether exception or not)
- Can be used with or without `catch` block
- Often replaced by `scope(exit)` (more idiomatic in D)

**Further reading:**
- [D Language Specification - Try Statement](https://dlang.org/spec/statement.html#try-statement)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% After clause (equivalent to finally)
Result = try
    file:read_file("test.txt")
catch
    error:Reason -> {error, Reason}
after
    io:format("Cleanup ausgeführt~n")
end.
```

**Special features:**
- `after` clause is always executed, regardless of result
- Typically used for resource cleanup

**Further reading:**
- [Erlang Documentation - Try Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#try)
</TabItem>
<TabItem value="julia" label="Julia">

```julia
f = open("datei.txt", "w")
try
    write(f, "Hallo")
catch e
    println("Fehler: $e")
finally
    close(f)  # Always executed
end
```

**Special features:**
- `finally` block is always executed, even with exceptions
- Can be used with or without `catch` block
- Typical usage: resource cleanup

**Further reading:**
- [Julia Documentation - Exception Handling](https://docs.julialang.org/en/v1/manual/control-flow/#The-try/catch-statement)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Finally Block
var f: File
try:
  f = open("test.txt")
  echo f.readAll()
except IOError:
  echo "Datei konnte nicht gelesen werden"
finally:
  if f != nil:
    f.close()
```

**Special features:**
- `finally` block is always executed (even with exceptions)
- Can be used without `except` block
- Used for resource cleanup

**Further reading:**
- [Nim Documentation - Try Statement](https://nim-lang.org/docs/manual.html#exception-handling-try-statement)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  list: TStringList;
begin
  list := TStringList.Create;
  try
    list.Add('Hallo');
    list.Add('Welt');
    // Verarbeitung
  finally
    list.Free;  // Always executed
  end;
end;
```

**Special features:**
- `try`/`finally` for guaranteed execution (resource release)
- `try`/`except` and `try`/`finally` cannot be combined, must be nested
- Essential for manual memory management

**Further reading:**
- [Delphi Documentation - Try-Finally](https://docwiki.embarcadero.com/RADStudio/en/Try...finally_Statements)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@try {
    [self riskyOperation];
}
@catch (NSException *exception) {
    NSLog(@"Fehler: %@", exception.reason);
}
@finally {
    [self cleanup]; // Always executed
}
```

**Special features:**
- `@finally` is always executed (even with exception)
- Used for cleanup work (releasing resources)

**Further reading:**
- [Apple Documentation - Exception Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Exceptions.html)

</TabItem>
</Tabs>


## 12.1.3. Exception Types

Exception types enable categorization and specific handling of different error types through hierarchical type structures.

### Languages {#sprachen}

<Tabs availableTabs={['common-lisp', 'cpp', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Basis-Exception-Typ
Exception ex1 = new Exception("Allgemeine Ausnahme");

// Spezifische Exception-Typen
ArgumentException argEx = new ArgumentException("Ungültiges Argument");
ArgumentNullException nullEx = new ArgumentNullException("param", "Parameter ist null");
InvalidOperationException opEx = new InvalidOperationException("Ungültige Operation");

// Define custom exception types
class CustomException : Exception
{
    public CustomException(string message) : base(message) { }
}
```

**Special features:**
- All exceptions inherit from System.Exception
- Hierarchical structure with specific exception types
- Custom exception types can be defined

**Further reading:**
- [Microsoft C# Documentation - Exception Types](https://learn.microsoft.com/en-us/dotnet/api/system.exception)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Basis-Exception-Typ
std::exception ex1;

// Spezifische Exception-Typen
std::runtime_error runtimeEx("Laufzeitfehler");
std::logic_error logicEx("Logikfehler");
std::invalid_argument invalidArg("Ungültiges Argument");

// Define custom exception types
class CustomException : public std::exception
{
public:
    const char* what() const noexcept override
    {
        return "Benutzerdefinierte Ausnahme";
    }
};
```

**Special features:**
- All exceptions inherit from std::exception
- Hierarchical structure with specific exception types
- `what()` method for error messages

**Further reading:**
- [cppreference.com - Exception Types](https://en.cppreference.com/w/cpp/error/exception)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Basis-Exception-Typ
Exception ex1 = Exception("Allgemeine Ausnahme");

// Spezifische Exception-Typen
FormatException formatEx = FormatException("Ungültiges Format");
RangeError rangeEx = RangeError("Index außerhalb des Bereichs");
StateError stateEx = StateError("Ungültiger Zustand");

// Define custom exception types
class CustomException implements Exception
{
    final String message;
    CustomException(this.message);
}
```

**Special features:**
- Exception is an abstract class
- Various specific exception types available
- Custom exception types can be defined

**Further reading:**
- [Dart Language Tour - Exceptions](https://dart.dev/guides/language/language-tour#exceptions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Basis-Exception-Typ
Exception ex1 = new Exception("Allgemeine Ausnahme")

// Spezifische Exception-Typen
IllegalArgumentException argEx = new IllegalArgumentException("Ungültiges Argument")
NullPointerException nullEx = new NullPointerException("Null-Referenz")
RuntimeException runtimeEx = new RuntimeException("Laufzeitfehler")

// Define custom exception types
class CustomException extends Exception
{
    CustomException(String message) { super(message) }
}
```

**Special features:**
- Uses Java exception types
- Hierarchical structure with Throwable as base
- Custom exception types can be defined

**Further reading:**
- [Groovy Documentation - Exception Handling](https://groovy-lang.org/semantics.html#_exception_handling)

</TabItem>
<TabItem value="java" label="Java">

```java
// Basis-Exception-Typ
Exception ex1 = new Exception("Allgemeine Ausnahme");

// Spezifische Exception-Typen
IllegalArgumentException argEx = new IllegalArgumentException("Ungültiges Argument");
NullPointerException nullEx = new NullPointerException("Null-Referenz");
RuntimeException runtimeEx = new RuntimeException("Laufzeitfehler");

// Define custom exception types
class CustomException extends Exception
{
    public CustomException(String message)
    {
        super(message);
    }
}
```

**Special features:**
- All exceptions inherit from Throwable
- Hierarchical structure: Throwable → Exception → RuntimeException / Checked Exceptions
- Custom exception types can be defined

**Further reading:**
- [Oracle Java Documentation - Exception Hierarchy](https://docs.oracle.com/javase/tutorial/essential/exceptions/hierarchy.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Basis-Error-Typ
Error error1 = new Error("Allgemeiner Fehler");

// Spezifische Error-Typen
TypeError typeError = new TypeError("Ungültiger Typ");
RangeError rangeError = new RangeError("Wert außerhalb des Bereichs");
ReferenceError refError = new ReferenceError("Ungültige Referenz");
SyntaxError syntaxError = new SyntaxError("Syntaxfehler");

// Define custom error types
class CustomError extends Error
{
    constructor(message)
    {
        super(message);
        this.name = "CustomError";
    }
}
```

**Special features:**
- All errors inherit from Error
- Various specific error types available
- Custom error types can be defined through inheritance

**Further reading:**
- [MDN Web Docs - Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Basis-Exception-Typ
val ex1 = Exception("Allgemeine Ausnahme")

// Spezifische Exception-Typen
val argEx = IllegalArgumentException("Ungültiges Argument")
val nullEx = NullPointerException("Null-Referenz")
val runtimeEx = RuntimeException("Laufzeitfehler")

// Define custom exception types
class CustomException(message: String) : Exception(message)
```

**Special features:**
- Uses Java exception types (based on JVM)
- All exceptions inherit from `Throwable`
- Custom exception types can be defined through inheritance

**Further reading:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Required: :- import_module exception, univ.

% Custom exception types as algebraic data types
:- type math_error ---> division_by_zero ; overflow ; invalid_input(string).
:- type app_error ---> math(math_error) ; io_error(string) ; not_found(string).

% Throwing exceptions (any types possible via univ)
:- pred validate(int::in) is det.
validate(N) :-
    ( N < 0 ->
        throw(math(invalid_input("Wert muss positiv sein")))
    ;
        true
    ).

% Catching exceptions and distinguishing by type
main(!IO) :-
    ( exception.try(
        (pred(R::out) is det :- validate(-1), R = unit))
    = exception.succeeded(_) ->
        io.write_string("OK\n", !IO)
    ; exception.try(
        (pred(R::out) is det :- validate(-1), R = unit))
    = exception.exception(Univ) ->
        ( univ.univ_to_type(Univ, math(Err)) ->
            (
                Err = division_by_zero,
                io.write_string("Division durch Null\n", !IO)
            ;
                Err = overflow,
                io.write_string("Überlauf\n", !IO)
            ;
                Err = invalid_input(Msg),
                io.format("Ungültige Eingabe: %s\n", [s(Msg)], !IO)
            )
        ;
            io.write_string("Unbekannter Fehler\n", !IO)
        )
    ;
        true
    ).
```

**Special features:**
- Exception types are defined as algebraic data types (no class hierarchy)
- `throw/1` can throw any types (via `univ`)
- `univ_to_type/2` for extracting the concrete type when catching
- Pattern matching on the variants of the exception type

**Further reading:**
- [Mercury Library Reference - exception](https://www.mercurylang.org/information/doc-release/mercury_library/exception.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Basis-Exception-Typ
$ex1 = new Exception("Allgemeine Ausnahme");

// Spezifische Exception-Typen
$argEx = new InvalidArgumentException("Ungültiges Argument");
$runtimeEx = new RuntimeException("Laufzeitfehler");
$logicEx = new LogicException("Logikfehler");

// Error types (since PHP 7)
$error = new Error("Fataler Fehler");
$typeError = new TypeError("Typfehler");

// Define custom exception types
class CustomException extends Exception
{
    public function __construct(string $message)
    {
        parent::__construct($message);
    }
}
```

**Special features:**
- Exception and Error both inherit from Throwable (since PHP 7)
- Hierarchical structure with Exception and Error as separate branches
- Custom exception types can be defined

**Further reading:**
- [PHP Documentation - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% ISO Prolog Error Terms (structured error terms)
% Format: error(ErrorTerm, Context)

% Type error
:- catch(
       atom_length(123, _),
       error(type_error(Expected, Actual), _),
       format("Typfehler: erwartet ~w, bekam ~w~n", [Expected, Actual])
   ).

% Existence error
:- catch(
       unknown_predicate,
       error(existence_error(procedure, Name), _),
       format("Prozedur nicht gefunden: ~w~n", [Name])
   ).

% Define and throw custom error terms
validate(Age) :-
    (Age < 0 ->
        throw(error(domain_error(not_less_than_zero, Age),
                    context(validate/1, 'Alter ungültig')))
    ; true).
```

**Special features:**
- ISO Prolog defines structured error terms: `error(ErrorTerm, Context)`
- Standard error types: `type_error`, `instantiation_error`, `existence_error`, `permission_error`, `evaluation_error`
- Error terms are ordinary Prolog terms — no classes or hierarchy
- Custom error terms can be freely defined (arbitrary Prolog structures)

**Further reading:**
- [SWI-Prolog Documentation - Exception Terms](https://www.swi-prolog.org/pldoc/man?section=exception)

</TabItem>
<TabItem value="python" label="Python">

```python
# Basis-Exception-Typ
ex1 = Exception("Allgemeine Ausnahme")

# Spezifische Exception-Typen
value_error = ValueError("Ungültiger Wert")
type_error = TypeError("Ungültiger Typ")
index_error = IndexError("Index außerhalb des Bereichs")
key_error = KeyError("Schlüssel nicht gefunden")

# Define custom exception types
class CustomException(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)
```

**Special features:**
- All exceptions inherit from BaseException
- Hierarchical structure with Exception as most common base
- Custom exception types can be defined through inheritance

**Further reading:**
- [Python Documentation - Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Basis-Exception-Typ
ex1 = Exception.new("Allgemeine Ausnahme")

# Spezifische Exception-Typen
argument_error = ArgumentError.new("Ungültiges Argument")
type_error = TypeError.new("Ungültiger Typ")
runtime_error = RuntimeError.new("Laufzeitfehler")

# Define custom exception types
class CustomException < StandardError
    def initialize(message)
        super(message)
    end
end
```

**Special features:**
- All exceptions inherit from Exception
- StandardError is the base for most exceptions
- Custom exception types can be defined through inheritance

**Further reading:**
- [Ruby Documentation - Exception Types](https://docs.ruby-lang.org/en/master/Exception.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Basis-Exception-Typ
val ex1 = new Exception("Allgemeine Ausnahme")

// Spezifische Exception-Typen
val argEx = new IllegalArgumentException("Ungültiges Argument")
val nullEx = new NullPointerException("Null-Referenz")
val runtimeEx = new RuntimeException("Laufzeitfehler")

// Define custom exception types
class CustomException(message: String) extends Exception(message)
```

**Special features:**
- Uses Java exception types
- All exceptions inherit from Throwable
- Custom exception types can be defined through inheritance

**Further reading:**
- [Scala Documentation - Exception Handling](https://docs.scala-lang.org/tour/exception-handling.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Base Error protocol
enum CustomError: Error
{
    case generalError(String)
    case invalidArgument(String)
    case runtimeError(String)
}

// Usage
do
{
    throw CustomError.generalError("Allgemeiner Fehler")
}
catch CustomError.generalError(let message)
{
    print("Fehler: \(message)")
}
```

**Special features:**
- Errors must conform to the Error protocol
- Enums are commonly used for error types
- Pattern matching for different error cases

**Further reading:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Basis-Error-Typ
Error error1 = new Error("Allgemeiner Fehler");

// Spezifische Error-Typen
TypeError typeError = new TypeError("Ungültiger Typ");
RangeError rangeError = new RangeError("Wert außerhalb des Bereichs");
ReferenceError refError = new ReferenceError("Ungültige Referenz");

// Define custom error types
class CustomError extends Error
{
    constructor(message: string)
    {
        super(message);
        this.name = "CustomError";
    }
}
```

**Special features:**
- Syntax identical to JavaScript
- TypeScript type annotations possible for error objects
- Custom error types can be defined through inheritance

**Further reading:**
- [TypeScript Handbook - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' Basis-Exception-Typ
Dim ex1 As Exception = New Exception("Allgemeine Ausnahme")

' Spezifische Exception-Typen
Dim argEx As ArgumentException = New ArgumentException("Ungültiges Argument")
Dim nullEx As ArgumentNullException = New ArgumentNullException("param", "Parameter ist null")
Dim opEx As InvalidOperationException = New InvalidOperationException("Ungültige Operation")

' Define custom exception types
Class CustomException
    Inherits Exception
    Public Sub New(message As String)
        MyBase.New(message)
    End Sub
End Class
```

**Special features:**
- Syntax similar to C#, but with VB.NET keywords
- All exceptions inherit from System.Exception
- Custom exception types can be defined

**Further reading:**
- [Microsoft VB.NET Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Define custom condition types
(define-condition network-error (error)
  ((url :initarg :url :reader network-error-url)
   (code :initarg :code :reader network-error-code))
  (:report (lambda (c stream)
             (format stream "Network error ~a: ~a"
                     (network-error-code c)
                     (network-error-url c)))))

;; Signaling conditions
(error 'network-error :url "https://example.com" :code 404)

;; Catching
(handler-case
    (error 'network-error :url "https://example.com" :code 404)
  (network-error (e)
    (format t "~a~%" e)))
```

**Special features:**
- Conditions form a class hierarchy (based on CLOS)
- Base conditions: `condition`, `warning`, `error`, `serious-condition`
- Custom conditions via `define-condition`
- `:report` method for formatted error messages

**Further reading:**
- [Common Lisp HyperSpec - Conditions](http://www.lispworks.com/documentation/HyperSpec/Body/09_.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Exception Types
// Required: import std.stdio;

// Custom exception class
class ValidationException : Exception {
    this(string msg) {
        super(msg);
    }
}

// Exception hierarchy: Throwable → Error / Exception
void validate(int value) {
    if (value < 0) {
        throw new ValidationException("Wert muss positiv sein");
    }
}

try {
    validate(-1);
} catch (ValidationException e) {
    writeln("Validierung fehlgeschlagen: ", e.msg);
}
```

**Special features:**
- Hierarchy: `Throwable` → `Error` (not catchable) / `Exception` (catchable)
- `Error` for serious errors (e.g., `AssertError`, `OutOfMemoryError`)
- `Exception` for regular exceptions
- User-defined exceptions inherit from `Exception`

**Further reading:**
- [D Language Specification - Exceptions](https://dlang.org/spec/expression.html#throw-expression)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Three exception types
try
    erlang:error(my_error)    % Runtime error
catch
    error:my_error -> "Error gefangen"
end.

try
    throw(my_reason)          % Intentionally thrown exception
catch
    throw:my_reason -> "Throw gefangen"
end.

try
    exit(my_exit)             % Process termination
catch
    exit:my_exit -> "Exit gefangen"
end.
```

**Special features:**
- `error`: Runtime errors (e.g., `badarith`, `badmatch`)
- `throw`: Intentionally thrown exceptions (for control flow)
- `exit`: Process termination (for OTP supervision)

**Further reading:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Built-in Exception Types
# ErrorException, ArgumentError, BoundsError, DivideError,
# DomainError, MethodError, OverflowError, StackOverflowError, etc.

# Define custom exception
struct ValidationError <: Exception
    message::String
end

Base.showerror(io::IO, e::ValidationError) = print(io, "ValidationError: ", e.message)

# Throwing exceptions
function validate_age(age)
    age < 0 && throw(ValidationError("Alter darf nicht negativ sein"))
    age > 150 && throw(ValidationError("Ungültiges Alter"))
    age
end
```

**Special features:**
- Exception types are subtypes of `Exception`
- Custom exceptions with `struct ... <: Exception`
- `throw()` for throwing, `error()` for simple error messages
- `showerror()` for custom error messages

**Further reading:**
- [Julia Documentation - Exception Handling](https://docs.julialang.org/en/v1/manual/control-flow/#Exception-Handling)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Exception Types: MException
try
    ME = MException('myApp:inputError', 'Ungültiger Wert: %d', -1);
    throw(ME);
catch ME
    fprintf('ID: %s\n', ME.identifier);
    fprintf('Message: %s\n', ME.message);
    fprintf('Stack: %s (Zeile %d)\n', ME.stack(1).name, ME.stack(1).line);
end
```

**Special features:**
- `MException` is the only exception class
- Identifier in the format `component:mnemonic` (e.g. `MATLAB:badInput`)
- Contains `message`, `identifier`, `stack` and `cause`
- Custom exceptions via `MException` constructor

**Further reading:**
- [MATLAB Documentation - MException](https://www.mathworks.com/help/matlab/ref/mexception.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Exception Types
# Hierarchy: Exception > CatchableError > ValueError, IOError, OSError, ...
#             Exception > Defect > AssertionDefect, IndexDefect, ...

# Define custom exception
type
  AppError = object of CatchableError
  DatabaseError = object of AppError

raise newException(DatabaseError, "Verbindung fehlgeschlagen")
```

**Special features:**
- `CatchableError`: Base for catchable errors
- `Defect`: Base for program errors (should not be caught)
- Custom exceptions as `object of CatchableError`
- `newException()` for creating exceptions

**Further reading:**
- [Nim Documentation - Exception Hierarchy](https://nim-lang.org/docs/system.html#Exception)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Required: uses SysUtils;
type
  EValidationError = class(Exception);
  EAgeError = class(EValidationError);

procedure ValidateAge(age: Integer);
begin
  if age < 0 then
    raise EAgeError.Create('Alter darf nicht negativ sein');
end;

begin
  try
    ValidateAge(-5);
  except
    on E: EAgeError do
      WriteLn('Altersfehler: ', E.Message);
    on E: EValidationError do
      WriteLn('Validierungsfehler: ', E.Message);
  end;
end;
```

**Special features:**
- All exceptions inherit from `Exception` (in SysUtils)
- Standard exceptions: `EAccessViolation`, `EDivByZero`, `ERangeError`, etc.
- Custom exceptions through inheritance

**Further reading:**
- [Delphi Documentation - Exception Classes](https://docwiki.embarcadero.com/RADStudio/en/Exception_Classes)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Standard Exception Types
// NSRangeException, NSInvalidArgumentException, NSInternalInconsistencyException

// Throw custom exception
@throw [NSException exceptionWithName:@"CustomException"
                               reason:@"Ungültiger Wert"
                             userInfo:@{@"value": @-1}];

// Catch exception by type
@try {
    [self riskyOperation];
}
@catch (NSException *exception) {
    if ([exception.name isEqualToString:@"CustomException"]) {
        NSLog(@"Custom: %@", exception.reason);
    }
}
```

**Special features:**
- `NSException` as base exception class
- Predefined exception names (NSRangeException, NSInvalidArgumentException, etc.)
- `@throw` for throwing exceptions
- `name`, `reason`, `userInfo` properties

**Further reading:**
- [Apple Documentation - NSException](https://developer.apple.com/documentation/foundation/nsexception)

</TabItem>
</Tabs>


## 12.1.4. Checked Exceptions

Checked Exceptions are exceptions that are checked at compile time and must be explicitly handled or declared.

### Languages {#sprachen}

<Tabs availableTabs={['java']}>
<TabItem value="java" label="Java">

```java
// Define checked exception
class FileNotFoundException extends Exception
{
    public FileNotFoundException(String message)
    {
        super(message);
    }
}

// Checked exception must be declared
public void readFile(String filename) throws FileNotFoundException
{
    // Code that can throw FileNotFoundException
    throw new FileNotFoundException("Datei nicht gefunden: " + filename);
}

// Caller must handle or rethrow exception
public void processFile(String filename)
{
    try
    {
        readFile(filename);
    }
    catch (FileNotFoundException e)
    {
        System.out.println("Fehler: " + e.getMessage());
    }
}
```

**Special features:**
- Checked exceptions must be declared in the method signature (`throws`)
- Callers must handle or rethrow checked exceptions
- All exceptions that inherit from Exception (but not from RuntimeException) are checked exceptions
- Compiler enforces handling at compile time

**Further reading:**
- [Oracle Java Documentation - Checked Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html)

</TabItem>
</Tabs>


## 12.1.5. Unchecked Exceptions

Unchecked Exceptions are exceptions that are not checked at compile time and do not need to be explicitly declared.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'mercury', 'nim', 'objective-c', 'object-pascal', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// All exceptions are unchecked
public void divide(int a, int b)
{
    if (b == 0)
    {
        throw new DivideByZeroException("Division durch Null");
    }
    int result = a / b;
}

// No throws declaration required
public void callDivide()
{
    divide(10, 0); // Compiler does not check
}
```

**Special features:**
- All exceptions are unchecked
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [Microsoft C# Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// All exceptions are unchecked
void divide(int a, int b)
{
    if (b == 0)
    {
        throw std::runtime_error("Division durch Null");
    }
    int result = a / b;
}

// No throws declaration required
void callDivide()
{
    divide(10, 0); // Compiler does not check
}
```

**Special features:**
- All exceptions are unchecked
- Exception specifications are deprecated (since C++11)
- Compiler does not check whether exceptions are handled

**Further reading:**
- [cppreference.com - Exception Handling](https://en.cppreference.com/w/cpp/language/exceptions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// All exceptions are unchecked
void divide(int a, int b)
{
    if (b == 0)
    {
        throw IntegerDivisionByZeroException();
    }
    int result = a ~/ b;
}

// No throws declaration required
void callDivide()
{
    divide(10, 0); // Compiler does not check
}
```

**Special features:**
- All exceptions are unchecked
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [Dart Language Tour - Exceptions](https://dart.dev/guides/language/language-tour#exceptions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// All exceptions are unchecked
void divide(int a, int b)
{
    if (b == 0)
    {
        throw new ArithmeticException("Division durch Null")
    }
    int result = a / b
}

// No throws declaration required
void callDivide()
{
    divide(10, 0) // Compiler does not check
}
```

**Special features:**
- All exceptions are unchecked (even if they inherit from Java checked exceptions)
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [Groovy Documentation - Exception Handling](https://groovy-lang.org/semantics.html#_exception_handling)

</TabItem>
<TabItem value="java" label="Java">

```java
// Unchecked exceptions inherit from RuntimeException
public void divide(int a, int b)
{
    if (b == 0)
    {
        throw new ArithmeticException("Division durch Null");
    }
    int result = a / b;
}

// No throws declaration required
public void callDivide()
{
    divide(10, 0); // Compiler does not check
}
```

**Special features:**
- Unchecked exceptions inherit from RuntimeException or Error
- No `throws` declaration required
- Compiler does not check whether exceptions are handled
- In contrast to checked exceptions

**Further reading:**
- [Oracle Java Documentation - Unchecked Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// All exceptions are unchecked
function divide(a, b)
{
    if (b === 0)
    {
        throw new Error("Division durch Null");
    }
    return a / b;
}

// No throws declaration required
function callDivide()
{
    divide(10, 0); // Compiler does not check
}
```

**Special features:**
- All exceptions are unchecked
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [MDN Web Docs - throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// All exceptions are unchecked
fun divide(a: Int, b: Int)
{
    if (b == 0)
    {
        throw ArithmeticException("Division durch Null")
    }
    val result = a / b
}

// No throws declaration required
fun callDivide()
{
    divide(10, 0) // Compiler does not check
}
```

**Special features:**
- All exceptions are unchecked (no checked exceptions like in Java)
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Required: :- import_module exception.

% All exceptions in Mercury are unchecked
:- pred divide(int::in, int::in, int::out) is det.
divide(A, B, Result) :-
    ( B = 0 ->
        throw("Division durch Null")  % No declaration needed
    ;
        Result = A // B
    ).

% No declaration in predicate signature required
:- pred call_divide(io::di, io::uo) is det.
call_divide(!IO) :-
    divide(10, 0, _).  % Compiler does not check
```

**Special features:**
- All exceptions in Mercury are unchecked
- `throw/1` can be called in any predicate without declaration in the signature
- Compiler does not check whether exceptions are handled
- Mercury prefers `maybe`/`result` types for expected errors (instead of exceptions)

**Further reading:**
- [Mercury Library Reference - exception](https://www.mercurylang.org/information/doc-release/mercury_library/exception.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
// All exceptions are unchecked
function divide($a, $b)
{
    if ($b == 0)
    {
        throw new DivisionByZeroError("Division durch Null");
    }
    return $a / $b;
}

// No throws declaration required
function callDivide()
{
    divide(10, 0); // Compiler does not check
}
```

**Special features:**
- All exceptions are unchecked
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% All exceptions in Prolog are unchecked
divide(_, 0, _) :-
    throw(error(evaluation_error(zero_divisor),
                context(divide/3, 'Division durch Null'))).
divide(A, B, Result) :-
    Result is A / B.

% No declaration in predicate signature required
call_divide :-
    divide(10, 0, _).  % Compiler does not check
```

**Special features:**
- All exceptions in Prolog are unchecked
- No declaration of possible exceptions in predicate signatures
- Compiler/interpreter does not check whether exceptions are handled
- `throw/1` can throw arbitrary terms

**Further reading:**
- [SWI-Prolog Documentation - Exception Handling](https://www.swi-prolog.org/pldoc/man?section=exception)

</TabItem>
<TabItem value="python" label="Python">

```python
# All exceptions are unchecked
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Division durch Null")
    return a / b

# No throws declaration required
def call_divide():
    divide(10, 0)  # Compiler does not check
```

**Special features:**
- All exceptions are unchecked
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [Python Documentation - Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# All exceptions are unchecked
def divide(a, b)
    if b == 0
        raise ZeroDivisionError, "Division durch Null"
    end
    a / b
end

# No throws declaration required
def call_divide
    divide(10, 0)  # Compiler does not check
end
```

**Special features:**
- All exceptions are unchecked
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [Ruby Documentation - Exception Handling](https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// All exceptions are unchecked
def divide(a: Int, b: Int): Unit =
{
    if (b == 0)
    {
        throw new ArithmeticException("Division durch Null")
    }
    val result = a / b
}

// No throws declaration required
def callDivide(): Unit =
{
    divide(10, 0) // Compiler does not check
}
```

**Special features:**
- All exceptions are unchecked (no checked exceptions like in Java)
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [Scala Documentation - Exception Handling](https://docs.scala-lang.org/tour/exception-handling.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Required: import Foundation

enum DivisionError: Error
{
    case divisionByZero
}

func divide(_ a: Int, _ b: Int) throws -> Int
{
    if b == 0
    {
        throw DivisionError.divisionByZero
    }
    return a / b
}

// throws is MANDATORY - compiler enforces try
func callDivide()
{
    do
    {
        try divide(10, 0)
    }
    catch
    {
        print("Fehler aufgetreten")
    }
}
```

**Special features:**
- Swift enforces `throws` for functions that can throw
- Compiler checks that `try` is used when calling throws functions
- "Unchecked" in the sense that it does not need to be specified WHICH errors are thrown (until Swift 5.9 Typed Throws)
- `try?` converts errors to nil, `try!` enforces success (crashes on error)

**Further reading:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// All exceptions are unchecked
function divide(a: number, b: number): number
{
    if (b === 0)
    {
        throw new Error("Division durch Null");
    }
    return a / b;
}

// No throws declaration required
function callDivide(): void
{
    divide(10, 0); // Compiler does not check
}
```

**Special features:**
- Syntax identical to JavaScript
- All exceptions are unchecked
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [TypeScript Handbook - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' All exceptions are unchecked
Sub Divide(a As Integer, b As Integer)
    If b = 0 Then
        Throw New DivideByZeroException("Division durch Null")
    End If
    Dim result As Integer = a / b
End Sub

' No throws declaration required
Sub CallDivide()
    Divide(10, 0) ' Compiler does not check
End Sub
```

**Special features:**
- Syntax similar to C#, but with VB.NET keywords
- All exceptions are unchecked
- No `throws` declaration required
- Compiler does not check whether exceptions are handled

**Further reading:**
- [Microsoft VB.NET Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="d" label="D">

```d
// Unchecked Exceptions
// Required: import std.stdio;

// Functions do not need to declare exceptions
void riskyFunction() {
    throw new Exception("Unerwarteter Fehler");
}

void caller() {
    // No requirement to catch exceptions
    riskyFunction();
}

// nothrow attribute guarantees that no exceptions are thrown
nothrow void safeFunction() {
    // throw new Exception("...");  // Error: nothrow function
}
```

**Special features:**
- All exceptions in D are unchecked (like in C++, Python)
- No `throws` declaration in function signatures needed
- `nothrow` attribute guarantees absence of exceptions
- Compiler can detect `nothrow` violations at compile time

**Further reading:**
- [D Language Specification - nothrow Functions](https://dlang.org/spec/function.html#nothrow-functions)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% All exceptions are unchecked
divide(X, Y) ->
    X div Y.    % Can throw badarith, but no compiler requirement to catch

Result = try
    divide(10, 0)
catch
    error:badarith -> {error, division_by_zero}
end.
```

**Special features:**
- All Erlang exceptions are unchecked
- No compiler requirement to catch exceptions
- "Let it crash" philosophy: processes may crash and are restarted by the supervisor

**Further reading:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="julia" label="Julia">

```julia
# All exceptions in Julia are unchecked
function risky_operation(x)
    x < 0 && throw(ArgumentError("x muss positiv sein"))
    sqrt(x)
end

# No requirement to catch
result = risky_operation(4.0)  # Works

# Exception is propagated if not caught
# risky_operation(-1.0)  # ArgumentError is thrown
```

**Special features:**
- Julia has exclusively unchecked exceptions
- No checked exceptions or compile-time checking
- Function signatures do not declare possible exceptions

**Further reading:**
- [Julia Documentation - Exception Handling](https://docs.julialang.org/en/v1/manual/control-flow/#Exception-Handling)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Unchecked Exceptions (standard in Nim)
proc divide(a, b: int): int =
  if b == 0:
    raise newException(DivByZeroDefect, "Division by zero")
  a div b

# No declaration of exceptions needed
proc process() =
  echo divide(10, 0)  # throws exception without declaration
```

**Special features:**
- All exceptions are unchecked
- No `throws` declaration required
- `{.raises: [].}` pragma for optional exception tracking
- Compiler can analyze exceptions at compile time

**Further reading:**
- [Nim Documentation - Exception Tracking](https://nim-lang.org/docs/manual.html#exception-handling-exception-tracking)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// All exceptions are unchecked
procedure MayThrow;
begin
  raise Exception.Create('Fehler');
  // No declaration in signature required
end;

begin
  MayThrow;  // Compiles without try/except
end;
```

**Special features:**
- All exceptions are unchecked (no checked exceptions)
- No declaration of thrown exceptions in function signature
- Compiler does not enforce exception handling

**Further reading:**
- [Delphi Documentation - Exceptions](https://docwiki.embarcadero.com/RADStudio/en/Exceptions)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// All exceptions are unchecked
- (void)process {
    @throw [NSException exceptionWithName:@"Error"
                                   reason:@"Fehler"
                                 userInfo:nil];
    // No declaration in method signature needed
}

// Call without try/catch possible (no compiler error)
[self process]; // Can throw exception, but does not need to be caught
```

**Special features:**
- All Objective-C exceptions are unchecked (no checked exceptions)
- Method signatures do not declare thrown exceptions
- Apple recommends NSError pattern instead of exceptions for regular errors
- Exceptions are intended for program errors (similar to assertions)

**Further reading:**
- [Apple Documentation - Exception Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Exceptions.html)

</TabItem>
</Tabs>


## 12.1.6. Exception Propagation

Exception Propagation describes how exceptions are automatically propagated up through the call stack until they are handled.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'mercury', 'nim', 'objective-c', 'object-pascal', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
void level3()
{
    throw new Exception("Fehler in level3");
}

void level2()
{
    level3(); // Exception is automatically propagated
}

void level1()
{
    try
    {
        level2();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Caught in level1: {ex.Message}");
    }
}
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated
- Stack trace shows the complete call stack

**Further reading:**
- [Microsoft C# Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
void level3()
{
    throw std::runtime_error("Fehler in level3");
}

void level2()
{
    level3(); // Exception is automatically propagated
}

void level1()
{
    try
    {
        level2();
    }
    catch (const std::exception& ex)
    {
        std::cout << "Caught in level1: " << ex.what() << std::endl;
    }
}
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- If no handling is present, `std::terminate()` is called
- Stack trace shows the complete call stack (if available)

**Further reading:**
- [cppreference.com - Exception Handling](https://en.cppreference.com/w/cpp/language/exceptions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
void level3()
{
    throw Exception("Fehler in level3");
}

void level2()
{
    level3(); // Exception is automatically propagated
}

void level1()
{
    try
    {
        level2();
    }
    catch (e)
    {
        print("Caught in level1: $e");
    }
}
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated
- Stack trace can be captured with `StackTrace`

**Further reading:**
- [Dart Language Tour - Exceptions](https://dart.dev/guides/language/language-tour#exceptions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
void level3()
{
    throw new Exception("Fehler in level3")
}

void level2()
{
    level3() // Exception is automatically propagated
}

void level1()
{
    try
    {
        level2()
    }
    catch (Exception e)
    {
        println "Caught in level1: ${e.message}"
    }
}
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated
- Stack trace shows the complete call stack

**Further reading:**
- [Groovy Documentation - Exception Handling](https://groovy-lang.org/semantics.html#_exception_handling)

</TabItem>
<TabItem value="java" label="Java">

```java
void level3() throws Exception
{
    throw new Exception("Fehler in level3");
}

void level2() throws Exception
{
    level3(); // Exception is automatically propagated
}

void level1()
{
    try
    {
        level2();
    }
    catch (Exception ex)
    {
        System.out.println("Caught in level1: " + ex.getMessage());
    }
}
```

**Special features:**
- Checked exceptions must be declared in the method signature (`throws`)
- Unchecked exceptions are automatically propagated
- If no handling is present, the application is terminated
- Stack trace shows the complete call stack

**Further reading:**
- [Oracle Java Documentation - Exception Propagation](https://docs.oracle.com/javase/tutorial/essential/exceptions/throwing.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function level3()
{
    throw new Error("Fehler in level3");
}

function level2()
{
    level3(); // Exception is automatically propagated
}

function level1()
{
    try
    {
        level2();
    }
    catch (error)
    {
        console.log(`Caught in level1: ${error.message}`);
    }
}
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated
- Stack trace is available in the `stack` property

**Further reading:**
- [MDN Web Docs - throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun level3()
{
    throw Exception("Fehler in level3")
}

fun level2()
{
    level3() // Exception is automatically propagated
}

fun level1()
{
    try
    {
        level2()
    }
    catch (e: Exception)
    {
        println("Caught in level1: ${e.message}")
    }
}
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- No `throws` declaration required (no checked exceptions)
- If no handling is present, the application is terminated

**Further reading:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Required: :- import_module exception.

:- pred level3(io::di, io::uo) is det.
level3(!IO) :-
    throw("Fehler in level3").

:- pred level2(io::di, io::uo) is det.
level2(!IO) :-
    level3(!IO).  % Exception is automatically propagated

:- pred level1(io::di, io::uo) is det.
level1(!IO) :-
    ( exception.try(
        (pred(R::out) is det :- level3(!IO), R = unit))
    = exception.succeeded(_) ->
        true
    ; exception.try(
        (pred(R::out) is det :- level3(!IO), R = unit))
    = exception.exception(Univ) ->
        ( univ.univ_to_type(Univ, Msg) ->
            io.format("Caught in level1: %s\n", [s(Msg)], !IO)
        ;
            io.write_string("Unknown error\n", !IO)
        )
    ;
        true
    ).
```

**Special features:**
- Exceptions are automatically propagated through the goal/call stack
- No `catch` on the way → program is terminated
- `throw/1` unwinds the stack until an `exception.try` handler is found
- No declaration of possible exceptions in predicate signatures

**Further reading:**
- [Mercury Library Reference - exception](https://www.mercurylang.org/information/doc-release/mercury_library/exception.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
function level3()
{
    throw new Exception("Fehler in level3");
}

function level2()
{
    level3(); // Exception is automatically propagated
}

function level1()
{
    try
    {
        level2();
    }
    catch (Exception $e)
    {
        echo "Caught in level1: " . $e->getMessage();
    }
}
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated
- Stack trace can be captured with `getTrace()`

**Further reading:**
- [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
level3 :-
    throw(error(my_error, context(level3/0, 'Fehler in level3'))).

level2 :-
    level3.  % Exception is automatically propagated

level1 :-
    catch(
        level2,
        error(my_error, _),
        format("Caught in level1: Fehler in level3~n")
    ).
```

**Special features:**
- Exceptions are automatically propagated through the goal stack
- If no `catch/3` catches the exception, the program is terminated
- `throw/1` unwinds the stack until a matching `catch/3` handler is found

**Further reading:**
- [SWI-Prolog Documentation - catch/3](https://www.swi-prolog.org/pldoc/doc_for?object=catch/3)

</TabItem>
<TabItem value="python" label="Python">

```python
def level3():
    raise Exception("Fehler in level3")

def level2():
    level3()  # Exception is automatically propagated

def level1():
    try:
        level2()
    except Exception as e:
        print(f"Caught in level1: {e}")
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated
- Stack trace is automatically output

**Further reading:**
- [Python Documentation - Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def level3
    raise Exception, "Fehler in level3"
end

def level2
    level3  # Exception is automatically propagated
end

def level1
    begin
        level2
    rescue => e
        puts "Caught in level1: #{e.message}"
    end
end
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated
- Stack trace is automatically output

**Further reading:**
- [Ruby Documentation - Exception Handling](https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def level3(): Unit =
{
    throw new Exception("Fehler in level3")
}

def level2(): Unit =
{
    level3() // Exception is automatically propagated
}

def level1(): Unit =
{
    try
    {
        level2()
    }
    catch
    {
        case e: Exception => println(s"Caught in level1: ${e.getMessage}")
    }
}
```

**Special features:**
- Exceptions are automatically propagated through the call stack
- No `throws` declaration required (no checked exceptions)
- If no handling is present, the application is terminated

**Further reading:**
- [Scala Documentation - Exception Handling](https://docs.scala-lang.org/tour/exception-handling.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func level3() throws
{
    throw NSError(domain: "Error", code: 1, userInfo: [NSLocalizedDescriptionKey: "Fehler in level3"])
}

func level2() throws
{
    try level3() // Error is automatically propagated
}

func level1()
{
    do
    {
        try level2()
    }
    catch
    {
        print("Caught in level1: \(error)")
    }
}
```

**Special features:**
- Errors are automatically propagated through the call stack
- `throws` declaration is MANDATORY for functions that propagate errors
- `try` must be used when calling throws functions

**Further reading:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function level3(): void
{
    throw new Error("Fehler in level3");
}

function level2(): void
{
    level3(); // Exception is automatically propagated
}

function level1(): void
{
    try
    {
        level2();
    }
    catch (error: unknown)
    {
        if (error instanceof Error)
        {
            console.log(`Caught in level1: ${error.message}`);
        }
    }
}
```

**Special features:**
- Syntax identical to JavaScript
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated

**Further reading:**
- [TypeScript Handbook - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
Sub Level3()
    Throw New Exception("Fehler in level3")
End Sub

Sub Level2()
    Level3() ' Exception is automatically propagated
End Sub

Sub Level1()
    Try
        Level2()
    Catch ex As Exception
        Console.WriteLine($"Caught in level1: {ex.Message}")
    End Try
End Sub
```

**Special features:**
- Syntax similar to C#, but with VB.NET keywords
- Exceptions are automatically propagated through the call stack
- If no handling is present, the application is terminated

**Further reading:**
- [Microsoft VB.NET Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="d" label="D">

```d
// Exception Propagation
// Required: import std.stdio;

void innerFunction() {
    throw new Exception("Fehler in innerFunction");
}

void middleFunction() {
    innerFunction();  // Exception is forwarded
}

void outerFunction() {
    try {
        middleFunction();
    } catch (Exception e) {
        writeln("Caught in outerFunction: ", e.msg);
    }
}
```

**Special features:**
- Exceptions automatically propagate up the call stack
- If not caught, the program is terminated
- Stack unwinding calls destructors and `scope` guards
- `nothrow` functions prevent exception propagation at compile time

**Further reading:**
- [D Language Specification - Exception Handling](https://dlang.org/spec/statement.html#try-statement)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Exception Propagation
inner() ->
    erlang:error(inner_error).

outer() ->
    inner().    % Exception propagates upward

Result = try
    outer()
catch
    error:inner_error -> "Caught in outer"
end.
```

**Special features:**
- Exceptions propagate up the call stack
- Uncaught exceptions terminate the current process
- OTP supervisors can restart processes after exceptions

**Further reading:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="julia" label="Julia">

```julia
function inner()
    error("Fehler in inner()")
end

function middle()
    inner()  # Exception is propagated
end

function outer()
    try
        middle()
    catch e
        println("Caught in outer: $e")
        # rethrow()  # Optional: continue propagating
    end
end

outer()  # "Caught in outer: ErrorException("Fehler in inner()")"
```

**Special features:**
- Exceptions automatically propagate up the call stack
- `rethrow()` for explicitly rethrowing
- Stack trace is displayed for uncaught exceptions

**Further reading:**
- [Julia Documentation - Exception Handling](https://docs.julialang.org/en/v1/manual/control-flow/#Exception-Handling)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Exception Propagation
proc innerProc() =
  raise newException(ValueError, "Fehler in innerProc")

proc outerProc() =
  innerProc()  # Exception is automatically propagated

try:
  outerProc()
except ValueError as e:
  echo "Caught: ", e.msg
```

**Special features:**
- Exceptions are automatically propagated until caught
- No explicit `throws` needed
- `{.raises: [].}` pragma for exception tracking

**Further reading:**
- [Nim Documentation - Exception Handling](https://nim-lang.org/docs/manual.html#exception-handling)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Inner;
begin
  raise Exception.Create('Fehler in Inner');
end;

procedure Middle;
begin
  Inner;  // Exception propagates upward
end;

begin
  try
    Middle;
  except
    on E: Exception do
      WriteLn('Caught: ', E.Message);
  end;
end;
```

**Special features:**
- Exceptions automatically propagate through the call stack
- `raise` without parameter in an `except` block rethrows the current exception
- Unhandled exceptions lead to program termination

**Further reading:**
- [Delphi Documentation - Exception Propagation](https://docwiki.embarcadero.com/RADStudio/en/Exceptions)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (void)innerMethod {
    @throw [NSException exceptionWithName:@"Error"
                                   reason:@"Innerer Fehler"
                                 userInfo:nil];
}

- (void)outerMethod {
    [self innerMethod]; // Exception propagates upward
}

// Catch exception
@try {
    [self outerMethod];
}
@catch (NSException *exception) {
    NSLog(@"Caught: %@", exception.reason);
}
```

**Special features:**
- Exceptions automatically propagate up the call stack
- Without @try/@catch, an exception leads to program termination
- ARC-compatible code: memory is not automatically released during propagation (leak risk)

**Further reading:**
- [Apple Documentation - Exception Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Exceptions.html)

</TabItem>
</Tabs>

