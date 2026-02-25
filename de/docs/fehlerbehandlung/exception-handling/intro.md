---
slug: /fehlerbehandlung/exception-handling
title: 12.1. Exception Handling
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 12.1. Exception Handling

Behandlung von Ausnahmen.

## 12.1.1. Try-Catch Blocks

Try-Catch-Blöcke ermöglichen das Abfangen und Behandeln von Ausnahmen während der Programmausführung.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'kotlin', 'mercury', 'nim', 'objective-c', 'object-pascal', 'octave', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['julia', 'matlab']}>
<TabItem value="csharp" label="C#">

```csharp
try
{
    int result = 10 / 0;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Fehler: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"Allgemeiner Fehler: {ex.Message}");
}
```

**Besonderheiten:**
- Mehrere catch-Blöcke möglich, spezifischere Ausnahmen zuerst
- Exception-Typ muss von System.Exception abgeleitet sein
- `when`-Klausel für bedingte catch-Blöcke (seit C# 6.0)

**Weiterführende Links:**
- [Microsoft C# Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <iostream>, #include <stdexcept>
try
{
    throw std::runtime_error("Laufzeitfehler aufgetreten");
}
catch (const std::runtime_error& ex)
{
    std::cout << "Runtime-Fehler: " << ex.what() << std::endl;
}
catch (const std::exception& ex)
{
    std::cout << "Fehler: " << ex.what() << std::endl;
}
catch (...)
{
    std::cout << "Unbekannter Fehler" << std::endl;
}
```

**Besonderheiten:**
- Exception-Handling seit C++98
- `catch (...)` fängt alle Ausnahmen (auch Nicht-Exception-Typen)
- Exception-Spezifikationen (deprecated seit C++11, entfernt in C++17)
- `noexcept`-Spezifikation für Funktionen, die keine Ausnahmen werfen
- Integer-Division durch Null ist Undefined Behavior, keine Exception

**Weiterführende Links:**
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
    print('Division durch Null');
}
on Exception catch (e)
{
    print('Fehler: $e');
}
catch (e, stackTrace)
{
    print('Unbekannter Fehler: $e');
    print('Stack Trace: $stackTrace');
}
```

**Besonderheiten:**
- `on` für spezifische Exception-Typen ohne Zugriff auf das Exception-Objekt
- `on ... catch` für spezifische Exception-Typen mit Zugriff auf das Exception-Objekt
- `catch` ohne Typ fängt alle Ausnahmen
- Optionaler zweiter Parameter für Stack-Trace

**Weiterführende Links:**
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
    println "Fehler: ${e.message}"
}
catch (Exception e)
{
    println "Allgemeiner Fehler: ${e.message}"
}
```

**Besonderheiten:**
- Syntax identisch zu Java
- Unterstützt alle Java-Exception-Typen
- Optionaler `finally`-Block möglich

**Weiterführende Links:**
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
    System.out.println("Fehler: " + e.getMessage());
}
catch (Exception e)
{
    System.out.println("Allgemeiner Fehler: " + e.getMessage());
}
```

**Besonderheiten:**
- Mehrere catch-Blöcke möglich, spezifischere Ausnahmen zuerst
- Alle Exception-Typen müssen von Throwable abgeleitet sein
- Checked Exceptions müssen deklariert werden (siehe separates Feature)

**Weiterführende Links:**
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

**Besonderheiten:**
- Ein catch-Block fängt alle Ausnahmen
- Exception-Objekt hat `name`, `message` und `stack` Eigenschaften
- `throw` kann jeden Wert werfen, nicht nur Error-Objekte

**Weiterführende Links:**
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

**Besonderheiten:**
- Syntax ähnlich zu Java, aber mit Kotlin-Typannotationen
- Keine Checked Exceptions (alle Exceptions sind unchecked)
- `try` kann als Ausdruck verwendet werden

**Weiterführende Links:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module exception.

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

% Alternativ: exception.try/1 mit Result-Typ
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

**Besonderheiten:**
- `throw(Term)` wirft eine Exception mit beliebigem Typ
- `exception.try/1` fängt Exceptions und gibt `succeeded(Value)` oder `exception(Univ)` zurück
- Exceptions in Mercury basieren auf dem `univ`-Typ (beliebige Werte können geworfen werden)
- Mercury nutzt primär `maybe`/`result`-Typen statt Exceptions für erwartete Fehler

**Weiterführende Links:**
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

**Besonderheiten:**
- Exception-Handling seit PHP 5
- Alle Exceptions müssen von Throwable abgeleitet sein (seit PHP 7)
- `Error` und `Exception` sind beide von Throwable abgeleitet

**Weiterführende Links:**
- [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% catch/3 — ISO Prolog (äquivalent zu try-catch)
% catch(Goal, Catcher, Recovery)
:- catch(
       (Result is 10 / 0),
       error(evaluation_error(zero_divisor), _),
       format("Fehler: Division durch Null~n")
   ).

% Allgemeines Abfangen aller Fehler
:- catch(
       risky_goal,
       Error,
       format("Allgemeiner Fehler: ~w~n", [Error])
   ).
```

**Besonderheiten:**
- `catch(Goal, Catcher, Recovery)` ist das ISO-Prolog-Äquivalent zu try-catch
- `Catcher` wird durch Unifikation mit dem geworfenen Term verglichen
- Nur ein `catch`-Level pro Aufruf — verschachtelte `catch/3` für mehrere Handler
- `throw(Term)` zum Werfen beliebiger Prolog-Terme

**Weiterführende Links:**
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

**Besonderheiten:**
- `except` statt `catch`
- Mehrere `except`-Klauseln möglich, spezifischere Ausnahmen zuerst
- `as`-Klausel für Zugriff auf das Exception-Objekt
- `except` ohne Typ fängt alle Ausnahmen (nicht empfohlen)

**Weiterführende Links:**
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

**Besonderheiten:**
- `begin...rescue...end` statt `try...catch`
- `rescue` statt `catch`
- `=>` für Zuweisung des Exception-Objekts
- `rescue` ohne Typ fängt alle StandardError-Ausnahmen

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching in catch-Blöcken
- `case`-Klauseln für verschiedene Exception-Typen
- Keine Checked Exceptions (alle Exceptions sind unchecked)

**Weiterführende Links:**
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

**Besonderheiten:**
- `do...catch` statt `try...catch`
- `try` vor Funktionen, die Ausnahmen werfen können
- Pattern Matching in catch-Blöcken
- Alle Fehler müssen dem Error-Protokoll entsprechen

**Weiterführende Links:**
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

**Besonderheiten:**
- Syntax identisch zu JavaScript
- TypeScript-Typannotationen für Exception-Objekte möglich
- `unknown`-Typ für Exception-Objekte empfohlen (seit TypeScript 3.0)

**Weiterführende Links:**
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

**Besonderheiten:**
- Syntax ähnlich zu C#, aber mit VB.NET-Schlüsselwörtern
- Mehrere Catch-Blöcke möglich, spezifischere Ausnahmen zuerst
- Exception-Typ muss von System.Exception abgeleitet sein

**Weiterführende Links:**
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

;; Exceptions werfen
(try
  (throw (ex-info "Eigener Fehler" {:code 404}))
  (catch clojure.lang.ExceptionInfo e
    (println (.getMessage e))       ; "Eigener Fehler"
    (println (ex-data e))))         ; {:code 404}
```

**Besonderheiten:**
- `try`/`catch`/`finally` wie in Java
- `ex-info` für Exceptions mit zusätzlichen Daten (Map)
- `ex-data` zum Auslesen der Daten aus `ExceptionInfo`
- Mehrere `catch`-Klauseln möglich

**Weiterführende Links:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms#try)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; handler-case (entspricht try-catch)
(handler-case
    (progn
      (format t "Versuche...~%")
      (/ 1 0))
  (division-by-zero (e)
    (format t "Division durch Null: ~a~%" e))
  (error (e)
    (format t "Allgemeiner Fehler: ~a~%" e)))

;; unwind-protect (entspricht try-finally)
(unwind-protect
    (progn
      (format t "Try-Block~%")
      (error "Fehler!"))
  (format t "Cleanup (wird immer ausgeführt)~%"))
```

**Besonderheiten:**
- `handler-case` entspricht try/catch (Stack wird vor Handler abgewickelt)
- `unwind-protect` entspricht try/finally
- Condition System ist mächtiger als klassische Exceptions (Restarts, Handler-Bind)
- `handler-bind` ermöglicht Handling ohne Stack-Abwicklung

**Weiterführende Links:**
- [Common Lisp HyperSpec - handler-case](http://www.lispworks.com/documentation/HyperSpec/Body/m_hand_1.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Try-Catch Blocks
// Benötigt: import std.stdio;
// Benötigt: import std.conv;
try {
    int value = to!int("abc");  // Wirft ConvException
} catch (ConvException e) {
    writeln("Konvertierungsfehler: ", e.msg);
} catch (Exception e) {
    writeln("Allgemeiner Fehler: ", e.msg);
}
```

**Besonderheiten:**
- `try-catch` Syntax ähnlich zu Java/C++
- Mehrere `catch`-Blöcke für verschiedene Exception-Typen
- Spezifischere Exceptions müssen vor allgemeineren stehen
- `catch (Exception e)` fängt alle Exceptions

**Weiterführende Links:**
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

**Besonderheiten:**
- `try...catch...end` seit OTP R10B
- Catch-Klauseln unterstützen Pattern Matching auf Fehlerklasse und Fehlergrund
- Drei Fehlerklassen: `error`, `exit`, `throw`

**Weiterführende Links:**
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

**Besonderheiten:**
- `try ... catch e ... end` Syntax
- Exception-Variable `e` ist optional
- Kein Typ-Filter im `catch` – Typ-Prüfung erfolgt mit `isa`
- `rethrow()` zum Weiterwerfen einer Exception

**Weiterführende Links:**
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

**Besonderheiten:**
- `try-catch` Syntax mit optionalem `ME` (MException-Objekt)
- Kein `finally`-Block, stattdessen `onCleanup()` für Cleanup-Aktionen
- `error()` zum Auslösen von Exceptions

**Weiterführende Links:**
- [MATLAB Documentation - try, catch](https://www.mathworks.com/help/matlab/ref/try.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Try-Except (Nims try-catch)
try:
  let x = parseInt("abc")
except ValueError:
  echo "Ungültige Zahl"
except IOError as e:
  echo "IO-Fehler: ", e.msg
except CatchableError:
  echo "Allgemeiner Fehler"
```

**Besonderheiten:**
- `try`-`except` statt `try`-`catch`
- Mehrere `except`-Branches möglich
- `as e` für Zugriff auf Exception-Objekt
- `CatchableError` als Basis für alle abfangbaren Exceptions

**Weiterführende Links:**
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

**Besonderheiten:**
- `try`/`except` statt `try`/`catch`
- `on E: ExceptionType do` für typisiertes Handling
- Exception-Hierarchie mit `Exception` als Basisklasse

**Weiterführende Links:**
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

**Besonderheiten:**
- `@try`/`@catch` Syntax für Exception Handling
- Exceptions sind in Objective-C für Programmfehler gedacht, nicht für reguläre Fehlerbehandlung
- NSError-Pattern (Out-Parameter) wird für erwartete Fehler bevorzugt
- Performance-Overhead bei `@try`-Blöcken (mit Non-Fragile ABI minimal)

**Weiterführende Links:**
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

**Besonderheiten:**
- `try`/`catch`/`end` Syntax
- Fehler-Objekt enthält `identifier`, `message` und `stack`
- `unwind_protect` als Alternative für garantierte Cleanup-Ausführung

**Weiterführende Links:**
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

(* Check für Message-basierte Fehlerbehandlung *)
result2 = Check[1/0, "Division durch Null"]
```

**Besonderheiten:**
- `Catch[expr]` fängt `Throw[value]` auf
- `Check[expr, failexpr]` fängt Messages (Warnungen/Fehler)
- `Catch[expr, tag]` für getaggte Exceptions

**Weiterführende Links:**
- [Wolfram Language Documentation - Catch](https://reference.wolfram.com/language/ref/Catch.html)

</TabItem>
</Tabs>


## 12.1.2. Finally Blocks

Finally-Blöcke ermöglichen die Ausführung von Code, der unabhängig davon ausgeführt wird, ob eine Ausnahme aufgetreten ist oder nicht.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt, auch wenn keine Ausnahme auftritt
- Wird auch ausgeführt, wenn `return` im try- oder catch-Block verwendet wird
- Nützlich für Ressourcenbereinigung

**Weiterführende Links:**
- [Microsoft C# Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <iostream>, #include <stdexcept>, #include <fstream>
// C++ hat kein finally - RAII wird stattdessen verwendet
{
    std::ofstream file("output.txt"); // Ressource wird im Konstruktor geöffnet
    try
    {
        file << "Daten schreiben";
        throw std::runtime_error("Fehler");
    }
    catch (const std::exception& ex)
    {
        std::cout << "Fehler: " << ex.what() << std::endl;
    }
    // file wird automatisch durch den Destruktor geschlossen (RAII)
    // Kein finally-Block nötig
}
```

**Besonderheiten:**
- C++ hat kein `finally`-Konstrukt
- RAII (Resource Acquisition Is Initialization) wird als Alternative verwendet
- Destruktoren werden automatisch aufgerufen, auch bei Ausnahmen
- Scope Guards (z.B. mit Lambdas) können `finally`-Verhalten simulieren

**Weiterführende Links:**
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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt
- Wird auch ausgeführt, wenn `return` im try- oder catch-Block verwendet wird

**Weiterführende Links:**
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

**Besonderheiten:**
- Syntax identisch zu Java
- `finally`-Block wird immer ausgeführt

**Weiterführende Links:**
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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt, auch wenn keine Ausnahme auftritt
- Wird auch ausgeführt, wenn `return` im try- oder catch-Block verwendet wird
- Nützlich für Ressourcenbereinigung

**Weiterführende Links:**
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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt
- Wird auch ausgeführt, wenn `return` im try- oder catch-Block verwendet wird

**Weiterführende Links:**
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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt
- Wird auch ausgeführt, wenn `return` im try- oder catch-Block verwendet wird

**Weiterführende Links:**
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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt (seit PHP 5.5)
- Wird auch ausgeführt, wenn `return` im try- oder catch-Block verwendet wird

**Weiterführende Links:**
- [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% setup_call_cleanup/3 — ISO Prolog (äquivalent zu try-finally)
:- setup_call_cleanup(
       true,                                    % Setup
       catch(
           (Result is 10 / 0),
           error(_, _),
           format("Fehler aufgetreten~n")
       ),
       format("Wird immer ausgeführt~n")        % Cleanup
   ).

% Typische Verwendung: Ressourcen-Cleanup
:- setup_call_cleanup(
       open('data.txt', read, Stream),
       read_string(Stream, _, Data),
       close(Stream)                            % Stream wird immer geschlossen
   ).
```

**Besonderheiten:**
- `setup_call_cleanup/3` ist das ISO-Prolog-Äquivalent zu try-finally
- Cleanup wird immer ausgeführt (bei Erfolg, Fehler oder deterministischer Beendigung)
- `setup_call_catcher_cleanup/4` ermöglicht zusätzlich Zugriff auf den Fehler-Term
- Kein separater `finally`-Block — die Garantie ist in das Prädikat eingebaut

**Weiterführende Links:**
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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt
- Wird auch ausgeführt, wenn `return` im try- oder except-Block verwendet wird
- Kann auch ohne `except` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `ensure` statt `finally`
- Wird immer ausgeführt, auch wenn keine Ausnahme auftritt
- Wird auch ausgeführt, wenn `return` im begin- oder rescue-Block verwendet wird

**Weiterführende Links:**
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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt
- Wird auch ausgeführt, wenn `return` im try- oder catch-Block verwendet wird

**Weiterführende Links:**
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

**Besonderheiten:**
- `defer` statt `finally`
- Wird in umgekehrter Reihenfolge ausgeführt (LIFO)
- Wird ausgeführt, wenn der Gültigkeitsbereich verlassen wird

**Weiterführende Links:**
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

**Besonderheiten:**
- Syntax identisch zu JavaScript
- `finally`-Block wird immer ausgeführt
- Wird auch ausgeführt, wenn `return` im try- oder catch-Block verwendet wird

**Weiterführende Links:**
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

**Besonderheiten:**
- Syntax ähnlich zu C#, aber mit VB.NET-Schlüsselwörtern
- `finally`-Block wird immer ausgeführt
- Wird auch ausgeführt, wenn `Return` im Try- oder Catch-Block verwendet wird

**Weiterführende Links:**
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
    (println "Aufräumen...")))  ; Wird immer ausgeführt

;; Ressourcen-Management mit with-open (wie try-with-resources)
;; Benötigt: clojure.java.io
(with-open [reader (clojure.java.io/reader "datei.txt")]
  (println (line-seq reader)))
```

**Besonderheiten:**
- `finally` wird immer ausgeführt (wie in Java)
- `with-open` für automatisches Schließen von Ressourcen
- `finally`-Block hat keinen Rückgabewert

**Weiterführende Links:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms#try)

</TabItem>
<TabItem value="d" label="D">

```d
// Finally Blocks
// Benötigt: import std.stdio;
try {
    writeln("Try-Block");
    throw new Exception("Fehler");
} catch (Exception e) {
    writeln("Catch: ", e.msg);
} finally {
    writeln("Finally wird immer ausgeführt");
}
```

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt (ob Exception oder nicht)
- Kann mit oder ohne `catch`-Block verwendet werden
- Oft durch `scope(exit)` ersetzt (idiomatischer in D)

**Weiterführende Links:**
- [D Language Specification - Try Statement](https://dlang.org/spec/statement.html#try-statement)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% After-Klausel (Äquivalent zu finally)
Result = try
    file:read_file("test.txt")
catch
    error:Reason -> {error, Reason}
after
    io:format("Cleanup ausgeführt~n")
end.
```

**Besonderheiten:**
- `after`-Klausel wird immer ausgeführt, unabhängig vom Ergebnis
- Wird typisch für Ressourcen-Cleanup verwendet

**Weiterführende Links:**
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
    close(f)  # Wird immer ausgeführt
end
```

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt, auch bei Exceptions
- Kann mit oder ohne `catch`-Block verwendet werden
- Typische Verwendung: Ressourcen-Cleanup

**Weiterführende Links:**
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

**Besonderheiten:**
- `finally`-Block wird immer ausgeführt (auch bei Exceptions)
- Kann ohne `except`-Block verwendet werden
- Wird für Ressourcen-Bereinigung verwendet

**Weiterführende Links:**
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
    list.Free;  // Wird immer ausgeführt
  end;
end;
```

**Besonderheiten:**
- `try`/`finally` für garantierte Ausführung (Ressourcenfreigabe)
- `try`/`except` und `try`/`finally` können nicht kombiniert werden, müssen verschachtelt werden
- Essentiell für manuelle Speicherverwaltung

**Weiterführende Links:**
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
    [self cleanup]; // Wird immer ausgeführt
}
```

**Besonderheiten:**
- `@finally` wird immer ausgeführt (auch bei Exception)
- Wird für Aufräumarbeiten verwendet (Ressourcen freigeben)

**Weiterführende Links:**
- [Apple Documentation - Exception Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Exceptions.html)

</TabItem>
</Tabs>


## 12.1.3. Exception Types

Exception Types ermöglichen die Kategorisierung und spezifische Behandlung verschiedener Fehlertypen durch hierarchische Typstrukturen.

### Sprachen {#sprachen}

<Tabs availableTabs={['common-lisp', 'cpp', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Basis-Exception-Typ
Exception ex1 = new Exception("Allgemeine Ausnahme");

// Spezifische Exception-Typen
ArgumentException argEx = new ArgumentException("Ungültiges Argument");
ArgumentNullException nullEx = new ArgumentNullException("param", "Parameter ist null");
InvalidOperationException opEx = new InvalidOperationException("Ungültige Operation");

// Eigene Exception-Typen definieren
class CustomException : Exception
{
    public CustomException(string message) : base(message) { }
}
```

**Besonderheiten:**
- Alle Exceptions erben von System.Exception
- Hierarchische Struktur mit spezifischen Exception-Typen
- Eigene Exception-Typen können definiert werden

**Weiterführende Links:**
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

// Eigene Exception-Typen definieren
class CustomException : public std::exception
{
public:
    const char* what() const noexcept override
    {
        return "Benutzerdefinierte Ausnahme";
    }
};
```

**Besonderheiten:**
- Alle Exceptions erben von std::exception
- Hierarchische Struktur mit spezifischen Exception-Typen
- `what()`-Methode für Fehlermeldungen

**Weiterführende Links:**
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

// Eigene Exception-Typen definieren
class CustomException implements Exception
{
    final String message;
    CustomException(this.message);
}
```

**Besonderheiten:**
- Exception ist eine abstrakte Klasse
- Verschiedene spezifische Exception-Typen verfügbar
- Eigene Exception-Typen können definiert werden

**Weiterführende Links:**
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

// Eigene Exception-Typen definieren
class CustomException extends Exception
{
    CustomException(String message) { super(message) }
}
```

**Besonderheiten:**
- Verwendet Java-Exception-Typen
- Hierarchische Struktur mit Throwable als Basis
- Eigene Exception-Typen können definiert werden

**Weiterführende Links:**
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

// Eigene Exception-Typen definieren
class CustomException extends Exception
{
    public CustomException(String message)
    {
        super(message);
    }
}
```

**Besonderheiten:**
- Alle Exceptions erben von Throwable
- Hierarchische Struktur: Throwable → Exception → RuntimeException / Checked Exceptions
- Eigene Exception-Typen können definiert werden

**Weiterführende Links:**
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

// Eigene Error-Typen definieren
class CustomError extends Error
{
    constructor(message)
    {
        super(message);
        this.name = "CustomError";
    }
}
```

**Besonderheiten:**
- Alle Errors erben von Error
- Verschiedene spezifische Error-Typen verfügbar
- Eigene Error-Typen können durch Vererbung definiert werden

**Weiterführende Links:**
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

// Eigene Exception-Typen definieren
class CustomException(message: String) : Exception(message)
```

**Besonderheiten:**
- Verwendet Java-Exception-Typen (basierend auf JVM)
- Alle Exceptions erben von `Throwable`
- Eigene Exception-Typen können durch Vererbung definiert werden

**Weiterführende Links:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module exception, univ.

% Eigene Exception-Typen als algebraische Datentypen
:- type math_error ---> division_by_zero ; overflow ; invalid_input(string).
:- type app_error ---> math(math_error) ; io_error(string) ; not_found(string).

% Exception werfen (beliebige Typen möglich via univ)
:- pred validate(int::in) is det.
validate(N) :-
    ( N < 0 ->
        throw(math(invalid_input("Wert muss positiv sein")))
    ;
        true
    ).

% Exception fangen und nach Typ unterscheiden
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

**Besonderheiten:**
- Exception-Typen werden als algebraische Datentypen definiert (keine Klassenhierarchie)
- `throw/1` kann beliebige Typen werfen (über `univ`)
- `univ_to_type/2` zum Extrahieren des konkreten Typs beim Fangen
- Pattern Matching auf die Varianten des Exception-Typs

**Weiterführende Links:**
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

// Error-Typen (seit PHP 7)
$error = new Error("Fataler Fehler");
$typeError = new TypeError("Typfehler");

// Eigene Exception-Typen definieren
class CustomException extends Exception
{
    public function __construct(string $message)
    {
        parent::__construct($message);
    }
}
```

**Besonderheiten:**
- Exception und Error erben beide von Throwable (seit PHP 7)
- Hierarchische Struktur mit Exception und Error als separate Zweige
- Eigene Exception-Typen können definiert werden

**Weiterführende Links:**
- [PHP Documentation - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% ISO Prolog Error Terms (strukturierte Fehlerterme)
% Format: error(ErrorTerm, Context)

% Typfehler
:- catch(
       atom_length(123, _),
       error(type_error(Expected, Actual), _),
       format("Typfehler: erwartet ~w, bekam ~w~n", [Expected, Actual])
   ).

% Existenzfehler
:- catch(
       unknown_predicate,
       error(existence_error(procedure, Name), _),
       format("Prozedur nicht gefunden: ~w~n", [Name])
   ).

% Eigene Fehlerterme definieren und werfen
validate(Age) :-
    (Age < 0 ->
        throw(error(domain_error(not_less_than_zero, Age),
                    context(validate/1, 'Alter ungültig')))
    ; true).
```

**Besonderheiten:**
- ISO Prolog definiert strukturierte Fehlerterme: `error(ErrorTerm, Context)`
- Standard-Fehlertypen: `type_error`, `instantiation_error`, `existence_error`, `permission_error`, `evaluation_error`
- Fehlerterme sind gewöhnliche Prolog-Terme — keine Klassen oder Hierarchie
- Eigene Fehlerterme können frei definiert werden (beliebige Prolog-Strukturen)

**Weiterführende Links:**
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

# Eigene Exception-Typen definieren
class CustomException(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)
```

**Besonderheiten:**
- Alle Exceptions erben von BaseException
- Hierarchische Struktur mit Exception als häufigste Basis
- Eigene Exception-Typen können durch Vererbung definiert werden

**Weiterführende Links:**
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

# Eigene Exception-Typen definieren
class CustomException < StandardError
    def initialize(message)
        super(message)
    end
end
```

**Besonderheiten:**
- Alle Exceptions erben von Exception
- StandardError ist die Basis für die meisten Exceptions
- Eigene Exception-Typen können durch Vererbung definiert werden

**Weiterführende Links:**
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

// Eigene Exception-Typen definieren
class CustomException(message: String) extends Exception(message)
```

**Besonderheiten:**
- Verwendet Java-Exception-Typen
- Alle Exceptions erben von Throwable
- Eigene Exception-Typen können durch Vererbung definiert werden

**Weiterführende Links:**
- [Scala Documentation - Exception Handling](https://docs.scala-lang.org/tour/exception-handling.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Basis-Error-Protokoll
enum CustomError: Error
{
    case generalError(String)
    case invalidArgument(String)
    case runtimeError(String)
}

// Verwendung
do
{
    throw CustomError.generalError("Allgemeiner Fehler")
}
catch CustomError.generalError(let message)
{
    print("Fehler: \(message)")
}
```

**Besonderheiten:**
- Errors müssen dem Error-Protokoll entsprechen
- Enums werden häufig für Error-Typen verwendet
- Pattern Matching für verschiedene Error-Fälle

**Weiterführende Links:**
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

// Eigene Error-Typen definieren
class CustomError extends Error
{
    constructor(message: string)
    {
        super(message);
        this.name = "CustomError";
    }
}
```

**Besonderheiten:**
- Syntax identisch zu JavaScript
- TypeScript-Typannotationen für Error-Objekte möglich
- Eigene Error-Typen können durch Vererbung definiert werden

**Weiterführende Links:**
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

' Eigene Exception-Typen definieren
Class CustomException
    Inherits Exception
    Public Sub New(message As String)
        MyBase.New(message)
    End Sub
End Class
```

**Besonderheiten:**
- Syntax ähnlich zu C#, aber mit VB.NET-Schlüsselwörtern
- Alle Exceptions erben von System.Exception
- Eigene Exception-Typen können definiert werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Eigene Condition Types definieren
(define-condition network-error (error)
  ((url :initarg :url :reader network-error-url)
   (code :initarg :code :reader network-error-code))
  (:report (lambda (c stream)
             (format stream "Network error ~a: ~a"
                     (network-error-code c)
                     (network-error-url c)))))

;; Condition signalisieren
(error 'network-error :url "https://example.com" :code 404)

;; Abfangen
(handler-case
    (error 'network-error :url "https://example.com" :code 404)
  (network-error (e)
    (format t "~a~%" e)))
```

**Besonderheiten:**
- Conditions bilden eine Klassenhierarchie (basiert auf CLOS)
- Basis-Conditions: `condition`, `warning`, `error`, `serious-condition`
- Eigene Conditions über `define-condition`
- `:report`-Methode für formatierte Fehlermeldungen

**Weiterführende Links:**
- [Common Lisp HyperSpec - Conditions](http://www.lispworks.com/documentation/HyperSpec/Body/09_.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Exception Types
// Benötigt: import std.stdio;

// Eigene Exception-Klasse
class ValidationException : Exception {
    this(string msg) {
        super(msg);
    }
}

// Exception-Hierarchie: Throwable → Error / Exception
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

**Besonderheiten:**
- Hierarchie: `Throwable` → `Error` (nicht fangbar) / `Exception` (fangbar)
- `Error` für schwerwiegende Fehler (z.B. `AssertError`, `OutOfMemoryError`)
- `Exception` für reguläre Exceptions
- Benutzerdefinierte Exceptions erben von `Exception`

**Weiterführende Links:**
- [D Language Specification - Exceptions](https://dlang.org/spec/expression.html#throw-expression)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Drei Exception-Typen
try
    erlang:error(my_error)    % Runtime-Fehler
catch
    error:my_error -> "Error gefangen"
end.

try
    throw(my_reason)          % Bewusst geworfene Exception
catch
    throw:my_reason -> "Throw gefangen"
end.

try
    exit(my_exit)             % Prozess-Beendigung
catch
    exit:my_exit -> "Exit gefangen"
end.
```

**Besonderheiten:**
- `error`: Runtime-Fehler (z.B. `badarith`, `badmatch`)
- `throw`: Bewusst geworfene Exceptions (für Kontrollfluss)
- `exit`: Prozess-Beendigung (für OTP-Supervision)

**Weiterführende Links:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Built-in Exception Types
# ErrorException, ArgumentError, BoundsError, DivideError,
# DomainError, MethodError, OverflowError, StackOverflowError, etc.

# Eigene Exception definieren
struct ValidationError <: Exception
    message::String
end

Base.showerror(io::IO, e::ValidationError) = print(io, "ValidationError: ", e.message)

# Exception werfen
function validate_age(age)
    age < 0 && throw(ValidationError("Alter darf nicht negativ sein"))
    age > 150 && throw(ValidationError("Ungültiges Alter"))
    age
end
```

**Besonderheiten:**
- Exception-Typen sind Subtypes von `Exception`
- Benutzerdefinierte Exceptions mit `struct ... <: Exception`
- `throw()` zum Werfen, `error()` für einfache Fehlermeldungen
- `showerror()` für benutzerdefinierte Fehlermeldungen

**Weiterführende Links:**
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

**Besonderheiten:**
- `MException` ist die einzige Exception-Klasse
- Identifier im Format `component:mnemonic` (z.B. `MATLAB:badInput`)
- Enthält `message`, `identifier`, `stack` und `cause`
- Benutzerdefinierte Exceptions über `MException`-Konstruktor

**Weiterführende Links:**
- [MATLAB Documentation - MException](https://www.mathworks.com/help/matlab/ref/mexception.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Exception Types
# Hierarchie: Exception > CatchableError > ValueError, IOError, OSError, ...
#             Exception > Defect > AssertionDefect, IndexDefect, ...

# Eigene Exception definieren
type
  AppError = object of CatchableError
  DatabaseError = object of AppError

raise newException(DatabaseError, "Verbindung fehlgeschlagen")
```

**Besonderheiten:**
- `CatchableError`: Basis für abfangbare Fehler
- `Defect`: Basis für Programmfehler (sollten nicht abgefangen werden)
- Eigene Exceptions als `object of CatchableError`
- `newException()` zum Erzeugen von Exceptions

**Weiterführende Links:**
- [Nim Documentation - Exception Hierarchy](https://nim-lang.org/docs/system.html#Exception)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses SysUtils;
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

**Besonderheiten:**
- Alle Exceptions erben von `Exception` (in SysUtils)
- Standard-Exceptions: `EAccessViolation`, `EDivByZero`, `ERangeError`, etc.
- Benutzerdefinierte Exceptions durch Vererbung

**Weiterführende Links:**
- [Delphi Documentation - Exception Classes](https://docwiki.embarcadero.com/RADStudio/en/Exception_Classes)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Standard Exception Types
// NSRangeException, NSInvalidArgumentException, NSInternalInconsistencyException

// Eigene Exception werfen
@throw [NSException exceptionWithName:@"CustomException"
                               reason:@"Ungültiger Wert"
                             userInfo:@{@"value": @-1}];

// Exception nach Typ fangen
@try {
    [self riskyOperation];
}
@catch (NSException *exception) {
    if ([exception.name isEqualToString:@"CustomException"]) {
        NSLog(@"Custom: %@", exception.reason);
    }
}
```

**Besonderheiten:**
- `NSException` als Basis-Exception-Klasse
- Vordefinierte Exception-Namen (NSRangeException, NSInvalidArgumentException, etc.)
- `@throw` zum Werfen von Exceptions
- `name`, `reason`, `userInfo` Properties

**Weiterführende Links:**
- [Apple Documentation - NSException](https://developer.apple.com/documentation/foundation/nsexception)

</TabItem>
</Tabs>


## 12.1.4. Checked Exceptions

Checked Exceptions sind Ausnahmen, die zur Compile-Zeit überprüft werden und explizit behandelt oder deklariert werden müssen.

### Sprachen {#sprachen}

<Tabs availableTabs={['java']}>
<TabItem value="java" label="Java">

```java
// Checked Exception definieren
class FileNotFoundException extends Exception
{
    public FileNotFoundException(String message)
    {
        super(message);
    }
}

// Checked Exception muss deklariert werden
public void readFile(String filename) throws FileNotFoundException
{
    // Code, der FileNotFoundException werfen kann
    throw new FileNotFoundException("Datei nicht gefunden: " + filename);
}

// Aufrufer muss Exception behandeln oder weiterwerfen
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

**Besonderheiten:**
- Checked Exceptions müssen in der Methodensignatur deklariert werden (`throws`)
- Aufrufer müssen Checked Exceptions behandeln oder weiterwerfen
- Alle Exceptions, die von Exception (aber nicht von RuntimeException) erben, sind Checked Exceptions
- Compiler erzwingt Behandlung zur Compile-Zeit

**Weiterführende Links:**
- [Oracle Java Documentation - Checked Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html)

</TabItem>
</Tabs>


## 12.1.5. Unchecked Exceptions

Unchecked Exceptions sind Ausnahmen, die nicht zur Compile-Zeit überprüft werden und nicht explizit deklariert werden müssen.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'mercury', 'nim', 'objective-c', 'object-pascal', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Alle Exceptions sind unchecked
public void divide(int a, int b)
{
    if (b == 0)
    {
        throw new DivideByZeroException("Division durch Null");
    }
    int result = a / b;
}

// Keine throws-Deklaration erforderlich
public void callDivide()
{
    divide(10, 0); // Compiler prüft nicht
}
```

**Besonderheiten:**
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Alle Exceptions sind unchecked
void divide(int a, int b)
{
    if (b == 0)
    {
        throw std::runtime_error("Division durch Null");
    }
    int result = a / b;
}

// Keine throws-Deklaration erforderlich
void callDivide()
{
    divide(10, 0); // Compiler prüft nicht
}
```

**Besonderheiten:**
- Alle Exceptions sind unchecked
- Exception-Spezifikationen sind deprecated (seit C++11)
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [cppreference.com - Exception Handling](https://en.cppreference.com/w/cpp/language/exceptions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Alle Exceptions sind unchecked
void divide(int a, int b)
{
    if (b == 0)
    {
        throw IntegerDivisionByZeroException();
    }
    int result = a ~/ b;
}

// Keine throws-Deklaration erforderlich
void callDivide()
{
    divide(10, 0); // Compiler prüft nicht
}
```

**Besonderheiten:**
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [Dart Language Tour - Exceptions](https://dart.dev/guides/language/language-tour#exceptions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Alle Exceptions sind unchecked
void divide(int a, int b)
{
    if (b == 0)
    {
        throw new ArithmeticException("Division durch Null")
    }
    int result = a / b
}

// Keine throws-Deklaration erforderlich
void callDivide()
{
    divide(10, 0) // Compiler prüft nicht
}
```

**Besonderheiten:**
- Alle Exceptions sind unchecked (auch wenn sie von Java-Checked-Exceptions erben)
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [Groovy Documentation - Exception Handling](https://groovy-lang.org/semantics.html#_exception_handling)

</TabItem>
<TabItem value="java" label="Java">

```java
// Unchecked Exceptions erben von RuntimeException
public void divide(int a, int b)
{
    if (b == 0)
    {
        throw new ArithmeticException("Division durch Null");
    }
    int result = a / b;
}

// Keine throws-Deklaration erforderlich
public void callDivide()
{
    divide(10, 0); // Compiler prüft nicht
}
```

**Besonderheiten:**
- Unchecked Exceptions erben von RuntimeException oder Error
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden
- Im Gegensatz zu Checked Exceptions

**Weiterführende Links:**
- [Oracle Java Documentation - Unchecked Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Alle Exceptions sind unchecked
function divide(a, b)
{
    if (b === 0)
    {
        throw new Error("Division durch Null");
    }
    return a / b;
}

// Keine throws-Deklaration erforderlich
function callDivide()
{
    divide(10, 0); // Compiler prüft nicht
}
```

**Besonderheiten:**
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [MDN Web Docs - throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Alle Exceptions sind unchecked
fun divide(a: Int, b: Int)
{
    if (b == 0)
    {
        throw ArithmeticException("Division durch Null")
    }
    val result = a / b
}

// Keine throws-Deklaration erforderlich
fun callDivide()
{
    divide(10, 0) // Compiler prüft nicht
}
```

**Besonderheiten:**
- Alle Exceptions sind unchecked (keine Checked Exceptions wie in Java)
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module exception.

% Alle Exceptions in Mercury sind unchecked
:- pred divide(int::in, int::in, int::out) is det.
divide(A, B, Result) :-
    ( B = 0 ->
        throw("Division durch Null")  % Keine Deklaration nötig
    ;
        Result = A // B
    ).

% Keine Deklaration in der Prädikatsignatur erforderlich
:- pred call_divide(io::di, io::uo) is det.
call_divide(!IO) :-
    divide(10, 0, _).  % Compiler prüft nicht
```

**Besonderheiten:**
- Alle Exceptions in Mercury sind unchecked
- `throw/1` kann in jedem Prädikat aufgerufen werden, ohne Deklaration in der Signatur
- Compiler prüft nicht, ob Exceptions behandelt werden
- Mercury bevorzugt `maybe`/`result`-Typen für erwartete Fehler (statt Exceptions)

**Weiterführende Links:**
- [Mercury Library Reference - exception](https://www.mercurylang.org/information/doc-release/mercury_library/exception.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Alle Exceptions sind unchecked
function divide($a, $b)
{
    if ($b == 0)
    {
        throw new DivisionByZeroError("Division durch Null");
    }
    return $a / $b;
}

// Keine throws-Deklaration erforderlich
function callDivide()
{
    divide(10, 0); // Compiler prüft nicht
}
```

**Besonderheiten:**
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Alle Exceptions in Prolog sind unchecked
divide(_, 0, _) :-
    throw(error(evaluation_error(zero_divisor),
                context(divide/3, 'Division durch Null'))).
divide(A, B, Result) :-
    Result is A / B.

% Keine Deklaration in der Prädikatsignatur erforderlich
call_divide :-
    divide(10, 0, _).  % Compiler prüft nicht
```

**Besonderheiten:**
- Alle Exceptions in Prolog sind unchecked
- Keine Deklaration möglicher Exceptions in Prädikatsignaturen
- Compiler/Interpreter prüft nicht, ob Exceptions behandelt werden
- `throw/1` kann beliebige Terme werfen

**Weiterführende Links:**
- [SWI-Prolog Documentation - Exception Handling](https://www.swi-prolog.org/pldoc/man?section=exception)

</TabItem>
<TabItem value="python" label="Python">

```python
# Alle Exceptions sind unchecked
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Division durch Null")
    return a / b

# Keine throws-Deklaration erforderlich
def call_divide():
    divide(10, 0)  # Compiler prüft nicht
```

**Besonderheiten:**
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [Python Documentation - Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Alle Exceptions sind unchecked
def divide(a, b)
    if b == 0
        raise ZeroDivisionError, "Division durch Null"
    end
    a / b
end

# Keine throws-Deklaration erforderlich
def call_divide
    divide(10, 0)  # Compiler prüft nicht
end
```

**Besonderheiten:**
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [Ruby Documentation - Exception Handling](https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Alle Exceptions sind unchecked
def divide(a: Int, b: Int): Unit =
{
    if (b == 0)
    {
        throw new ArithmeticException("Division durch Null")
    }
    val result = a / b
}

// Keine throws-Deklaration erforderlich
def callDivide(): Unit =
{
    divide(10, 0) // Compiler prüft nicht
}
```

**Besonderheiten:**
- Alle Exceptions sind unchecked (keine Checked Exceptions wie in Java)
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [Scala Documentation - Exception Handling](https://docs.scala-lang.org/tour/exception-handling.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: import Foundation

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

// throws ist PFLICHT - Compiler erzwingt try
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

**Besonderheiten:**
- Swift erzwingt `throws` bei Funktionen die werfen können
- Compiler prüft, dass `try` bei throws-Funktionen verwendet wird
- "Unchecked" im Sinne, dass nicht spezifiziert werden muss WELCHE Fehler geworfen werden (bis Swift 5.9 Typed Throws)
- `try?` konvertiert Fehler zu nil, `try!` erzwingt Erfolg (crasht bei Fehler)

**Weiterführende Links:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Alle Exceptions sind unchecked
function divide(a: number, b: number): number
{
    if (b === 0)
    {
        throw new Error("Division durch Null");
    }
    return a / b;
}

// Keine throws-Deklaration erforderlich
function callDivide(): void
{
    divide(10, 0); // Compiler prüft nicht
}
```

**Besonderheiten:**
- Syntax identisch zu JavaScript
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [TypeScript Handbook - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' Alle Exceptions sind unchecked
Sub Divide(a As Integer, b As Integer)
    If b = 0 Then
        Throw New DivideByZeroException("Division durch Null")
    End If
    Dim result As Integer = a / b
End Sub

' Keine throws-Deklaration erforderlich
Sub CallDivide()
    Divide(10, 0) ' Compiler prüft nicht
End Sub
```

**Besonderheiten:**
- Syntax ähnlich zu C#, aber mit VB.NET-Schlüsselwörtern
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- Compiler prüft nicht, ob Exceptions behandelt werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="d" label="D">

```d
// Unchecked Exceptions
// Benötigt: import std.stdio;

// Funktionen müssen Exceptions nicht deklarieren
void riskyFunction() {
    throw new Exception("Unerwarteter Fehler");
}

void caller() {
    // Kein Zwang, Exceptions zu fangen
    riskyFunction();
}

// nothrow Attribut garantiert, dass keine Exceptions geworfen werden
nothrow void safeFunction() {
    // throw new Exception("...");  // Fehler: nothrow Funktion
}
```

**Besonderheiten:**
- Alle Exceptions in D sind unchecked (wie in C++, Python)
- Keine `throws`-Deklaration in Funktionssignaturen nötig
- `nothrow` Attribut garantiert Abwesenheit von Exceptions
- Compiler kann `nothrow`-Verletzungen zur Compile-Zeit erkennen

**Weiterführende Links:**
- [D Language Specification - nothrow Functions](https://dlang.org/spec/function.html#nothrow-functions)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Alle Exceptions sind unchecked
divide(X, Y) ->
    X div Y.    % Kann badarith werfen, aber kein Compiler-Zwang zum Fangen

Result = try
    divide(10, 0)
catch
    error:badarith -> {error, division_by_zero}
end.
```

**Besonderheiten:**
- Alle Erlang-Exceptions sind unchecked
- Kein Compiler-Zwang zum Fangen von Exceptions
- "Let it crash"-Philosophie: Prozesse dürfen abstürzen und werden vom Supervisor neu gestartet

**Weiterführende Links:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Alle Exceptions in Julia sind unchecked
function risky_operation(x)
    x < 0 && throw(ArgumentError("x muss positiv sein"))
    sqrt(x)
end

# Kein Zwang zum Fangen
result = risky_operation(4.0)  # Funktioniert

# Exception wird propagiert wenn nicht gefangen
# risky_operation(-1.0)  # ArgumentError wird geworfen
```

**Besonderheiten:**
- Julia hat ausschließlich Unchecked Exceptions
- Keine Checked Exceptions oder Compile-Time-Prüfung
- Funktionssignaturen deklarieren keine möglichen Exceptions

**Weiterführende Links:**
- [Julia Documentation - Exception Handling](https://docs.julialang.org/en/v1/manual/control-flow/#Exception-Handling)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Unchecked Exceptions (Standard in Nim)
proc divide(a, b: int): int =
  if b == 0:
    raise newException(DivByZeroDefect, "Division by zero")
  a div b

# Keine Deklaration der Exceptions nötig
proc process() =
  echo divide(10, 0)  # wirft Exception ohne Deklaration
```

**Besonderheiten:**
- Alle Exceptions sind unchecked
- Keine `throws`-Deklaration erforderlich
- `{.raises: [].}` Pragma für optionale Exception-Tracking
- Compiler kann Exceptions zur Compile-Zeit analysieren

**Weiterführende Links:**
- [Nim Documentation - Exception Tracking](https://nim-lang.org/docs/manual.html#exception-handling-exception-tracking)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Alle Exceptions sind unchecked
procedure MayThrow;
begin
  raise Exception.Create('Fehler');
  // Keine Deklaration in der Signatur erforderlich
end;

begin
  MayThrow;  // Kompiliert ohne try/except
end;
```

**Besonderheiten:**
- Alle Exceptions sind unchecked (keine Checked Exceptions)
- Keine Deklaration der geworfenen Exceptions in der Funktionssignatur
- Compiler erzwingt kein Exception-Handling

**Weiterführende Links:**
- [Delphi Documentation - Exceptions](https://docwiki.embarcadero.com/RADStudio/en/Exceptions)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Alle Exceptions sind unchecked
- (void)process {
    @throw [NSException exceptionWithName:@"Error"
                                   reason:@"Fehler"
                                 userInfo:nil];
    // Keine Deklaration in der Methodensignatur nötig
}

// Aufruf ohne try/catch möglich (kein Compiler-Fehler)
[self process]; // Kann Exception werfen, muss aber nicht gefangen werden
```

**Besonderheiten:**
- Alle Objective-C Exceptions sind unchecked (keine Checked Exceptions)
- Methodensignaturen deklarieren keine geworfenen Exceptions
- Apple empfiehlt NSError-Pattern statt Exceptions für reguläre Fehler
- Exceptions sind für Programmfehler gedacht (ähnlich Assertions)

**Weiterführende Links:**
- [Apple Documentation - Exception Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Exceptions.html)

</TabItem>
</Tabs>


## 12.1.6. Exception Propagation

Exception Propagation beschreibt, wie Ausnahmen automatisch durch den Call-Stack nach oben propagiert werden, bis sie behandelt werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'd', 'dart', 'erlang', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'mercury', 'nim', 'objective-c', 'object-pascal', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
void level3()
{
    throw new Exception("Fehler in level3");
}

void level2()
{
    level3(); // Exception wird automatisch propagiert
}

void level1()
{
    try
    {
        level2();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Gefangen in level1: {ex.Message}");
    }
}
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet
- Stack-Trace zeigt den vollständigen Call-Stack

**Weiterführende Links:**
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
    level3(); // Exception wird automatisch propagiert
}

void level1()
{
    try
    {
        level2();
    }
    catch (const std::exception& ex)
    {
        std::cout << "Gefangen in level1: " << ex.what() << std::endl;
    }
}
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird `std::terminate()` aufgerufen
- Stack-Trace zeigt den vollständigen Call-Stack (wenn verfügbar)

**Weiterführende Links:**
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
    level3(); // Exception wird automatisch propagiert
}

void level1()
{
    try
    {
        level2();
    }
    catch (e)
    {
        print("Gefangen in level1: $e");
    }
}
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet
- Stack-Trace kann mit `StackTrace` erfasst werden

**Weiterführende Links:**
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
    level3() // Exception wird automatisch propagiert
}

void level1()
{
    try
    {
        level2()
    }
    catch (Exception e)
    {
        println "Gefangen in level1: ${e.message}"
    }
}
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet
- Stack-Trace zeigt den vollständigen Call-Stack

**Weiterführende Links:**
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
    level3(); // Exception wird automatisch propagiert
}

void level1()
{
    try
    {
        level2();
    }
    catch (Exception ex)
    {
        System.out.println("Gefangen in level1: " + ex.getMessage());
    }
}
```

**Besonderheiten:**
- Checked Exceptions müssen in der Methodensignatur deklariert werden (`throws`)
- Unchecked Exceptions werden automatisch propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet
- Stack-Trace zeigt den vollständigen Call-Stack

**Weiterführende Links:**
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
    level3(); // Exception wird automatisch propagiert
}

function level1()
{
    try
    {
        level2();
    }
    catch (error)
    {
        console.log(`Gefangen in level1: ${error.message}`);
    }
}
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet
- Stack-Trace ist in der `stack`-Eigenschaft verfügbar

**Weiterführende Links:**
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
    level3() // Exception wird automatisch propagiert
}

fun level1()
{
    try
    {
        level2()
    }
    catch (e: Exception)
    {
        println("Gefangen in level1: ${e.message}")
    }
}
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Keine `throws`-Deklaration erforderlich (keine Checked Exceptions)
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet

**Weiterführende Links:**
- [Kotlin Documentation - Exception Handling](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module exception.

:- pred level3(io::di, io::uo) is det.
level3(!IO) :-
    throw("Fehler in level3").

:- pred level2(io::di, io::uo) is det.
level2(!IO) :-
    level3(!IO).  % Exception wird automatisch propagiert

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
            io.format("Gefangen in level1: %s\n", [s(Msg)], !IO)
        ;
            io.write_string("Unbekannter Fehler\n", !IO)
        )
    ;
        true
    ).
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Goal-/Call-Stack propagiert
- Kein `catch` auf dem Weg → Programm wird beendet
- `throw/1` wickelt den Stack ab, bis ein `exception.try`-Handler gefunden wird
- Keine Deklaration möglicher Exceptions in Prädikatsignaturen

**Weiterführende Links:**
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
    level3(); // Exception wird automatisch propagiert
}

function level1()
{
    try
    {
        level2();
    }
    catch (Exception $e)
    {
        echo "Gefangen in level1: " . $e->getMessage();
    }
}
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet
- Stack-Trace kann mit `getTrace()` erfasst werden

**Weiterführende Links:**
- [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
level3 :-
    throw(error(my_error, context(level3/0, 'Fehler in level3'))).

level2 :-
    level3.  % Exception wird automatisch propagiert

level1 :-
    catch(
        level2,
        error(my_error, _),
        format("Gefangen in level1: Fehler in level3~n")
    ).
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Goal-Stack propagiert
- Wenn kein `catch/3` die Exception auffängt, wird das Programm beendet
- `throw/1` wickelt den Stack ab, bis ein passender `catch/3`-Handler gefunden wird

**Weiterführende Links:**
- [SWI-Prolog Documentation - catch/3](https://www.swi-prolog.org/pldoc/doc_for?object=catch/3)

</TabItem>
<TabItem value="python" label="Python">

```python
def level3():
    raise Exception("Fehler in level3")

def level2():
    level3()  # Exception wird automatisch propagiert

def level1():
    try:
        level2()
    except Exception as e:
        print(f"Gefangen in level1: {e}")
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet
- Stack-Trace wird automatisch ausgegeben

**Weiterführende Links:**
- [Python Documentation - Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def level3
    raise Exception, "Fehler in level3"
end

def level2
    level3  # Exception wird automatisch propagiert
end

def level1
    begin
        level2
    rescue => e
        puts "Gefangen in level1: #{e.message}"
    end
end
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet
- Stack-Trace wird automatisch ausgegeben

**Weiterführende Links:**
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
    level3() // Exception wird automatisch propagiert
}

def level1(): Unit =
{
    try
    {
        level2()
    }
    catch
    {
        case e: Exception => println(s"Gefangen in level1: ${e.getMessage}")
    }
}
```

**Besonderheiten:**
- Exceptions werden automatisch durch den Call-Stack propagiert
- Keine `throws`-Deklaration erforderlich (keine Checked Exceptions)
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet

**Weiterführende Links:**
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
    try level3() // Error wird automatisch propagiert
}

func level1()
{
    do
    {
        try level2()
    }
    catch
    {
        print("Gefangen in level1: \(error)")
    }
}
```

**Besonderheiten:**
- Errors werden automatisch durch den Call-Stack propagiert
- `throws`-Deklaration ist PFLICHT für Funktionen die Errors weiterleiten
- `try` muss bei Aufrufen von throws-Funktionen verwendet werden

**Weiterführende Links:**
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
    level3(); // Exception wird automatisch propagiert
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
            console.log(`Gefangen in level1: ${error.message}`);
        }
    }
}
```

**Besonderheiten:**
- Syntax identisch zu JavaScript
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet

**Weiterführende Links:**
- [TypeScript Handbook - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
Sub Level3()
    Throw New Exception("Fehler in level3")
End Sub

Sub Level2()
    Level3() ' Exception wird automatisch propagiert
End Sub

Sub Level1()
    Try
        Level2()
    Catch ex As Exception
        Console.WriteLine($"Gefangen in level1: {ex.Message}")
    End Try
End Sub
```

**Besonderheiten:**
- Syntax ähnlich zu C#, aber mit VB.NET-Schlüsselwörtern
- Exceptions werden automatisch durch den Call-Stack propagiert
- Wenn keine Behandlung vorhanden ist, wird die Anwendung beendet

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Exception Handling](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="d" label="D">

```d
// Exception Propagation
// Benötigt: import std.stdio;

void innerFunction() {
    throw new Exception("Fehler in innerFunction");
}

void middleFunction() {
    innerFunction();  // Exception wird weitergeleitet
}

void outerFunction() {
    try {
        middleFunction();
    } catch (Exception e) {
        writeln("Gefangen in outerFunction: ", e.msg);
    }
}
```

**Besonderheiten:**
- Exceptions propagieren automatisch den Call-Stack hinauf
- Wenn nicht gefangen, wird das Programm beendet
- Stack-Unwinding ruft Destruktoren und `scope`-Guards auf
- `nothrow`-Funktionen verhindern Exception-Propagation zur Compile-Zeit

**Weiterführende Links:**
- [D Language Specification - Exception Handling](https://dlang.org/spec/statement.html#try-statement)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Exception Propagation
inner() ->
    erlang:error(inner_error).

outer() ->
    inner().    % Exception propagiert nach oben

Result = try
    outer()
catch
    error:inner_error -> "Fehler in outer gefangen"
end.
```

**Besonderheiten:**
- Exceptions propagieren den Call Stack hoch
- Nicht gefangene Exceptions beenden den aktuellen Prozess
- OTP-Supervisors können Prozesse nach Exceptions neu starten

**Weiterführende Links:**
- [Erlang Documentation - Errors](https://www.erlang.org/doc/reference_manual/errors.html)
</TabItem>
<TabItem value="julia" label="Julia">

```julia
function inner()
    error("Fehler in inner()")
end

function middle()
    inner()  # Exception wird propagiert
end

function outer()
    try
        middle()
    catch e
        println("Gefangen in outer: $e")
        # rethrow()  # Optional: weiter propagieren
    end
end

outer()  # "Gefangen in outer: ErrorException("Fehler in inner()")"
```

**Besonderheiten:**
- Exceptions propagieren automatisch den Call Stack nach oben
- `rethrow()` zum expliziten Weiterwerfen
- Stack-Trace wird bei ungefangenen Exceptions angezeigt

**Weiterführende Links:**
- [Julia Documentation - Exception Handling](https://docs.julialang.org/en/v1/manual/control-flow/#Exception-Handling)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Exception Propagation
proc innerProc() =
  raise newException(ValueError, "Fehler in innerProc")

proc outerProc() =
  innerProc()  # Exception wird automatisch propagiert

try:
  outerProc()
except ValueError as e:
  echo "Gefangen: ", e.msg
```

**Besonderheiten:**
- Exceptions werden automatisch propagiert bis sie abgefangen werden
- Kein explizites `throws` nötig
- `{.raises: [].}` Pragma für Exception-Tracking

**Weiterführende Links:**
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
  Inner;  // Exception propagiert nach oben
end;

begin
  try
    Middle;
  except
    on E: Exception do
      WriteLn('Gefangen: ', E.Message);
  end;
end;
```

**Besonderheiten:**
- Exceptions propagieren automatisch durch den Call-Stack
- `raise` ohne Parameter in einem `except`-Block wirft die aktuelle Exception erneut
- Unbehandelte Exceptions führen zum Programmabbruch

**Weiterführende Links:**
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
    [self innerMethod]; // Exception propagiert nach oben
}

// Exception fangen
@try {
    [self outerMethod];
}
@catch (NSException *exception) {
    NSLog(@"Gefangen: %@", exception.reason);
}
```

**Besonderheiten:**
- Exceptions propagieren automatisch den Call-Stack hinauf
- Ohne @try/@catch führt eine Exception zum Programmabbruch
- ARC-kompatibler Code: Speicher wird bei Propagation nicht automatisch freigegeben (Leak-Risiko)

**Weiterführende Links:**
- [Apple Documentation - Exception Handling](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Exceptions.html)

</TabItem>
</Tabs>

