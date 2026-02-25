---
slug: /testing/testing-features
title: 18.1. Testing and Assertions
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 18.1. Testing and Assertions

Assert statements, built-in test frameworks, property-based testing.

## 18.1.1. Assert Statements

Assert statements check at runtime whether a condition is true, and abort the program with an error message if not. They serve error detection during development and can be disabled in release builds in many languages.

### Languages

<Tabs availableTabs={['ada', 'c', 'cpp', 'csharp', 'clojure', 'common-lisp', 'd', 'dart', 'eiffel', 'elixir', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'java', 'julia', 'kotlin', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} yellowTabs={['erlang', 'gleam', 'javascript', 'typescript']} orangeTabs={['crystal', 'fortran', 'haxe', 'mercury', 'perl', 'prolog', 'ruby', 'scheme']}>
<TabItem value="ada" label="Ada">

```ada
X : Integer := 10;

pragma Assert(X > 0);
pragma Assert(X > 0, "X muss positiv sein");

-- Alternative with Ada 2012 aspects
procedure Process(Value : Integer) with
  Pre => Value > 0
is begin
  null;
end Process;
```

**Special features:**
- `pragma Assert` has been standardized since Ada 2005
- Can be enabled/disabled via `pragma Assertion_Policy(Check)`
- Ada 2012 additionally introduced pre-/postconditions as aspects
- Can be disabled in release mode with `pragma Assertion_Policy(Ignore)`

**Further reading:**
- [Ada Reference Manual - Assertions](http://www.ada-auth.org/standards/rm12_w_tc1/html/RM-11-4-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Requires: #include <assert.h>
int x = 10;

assert(x > 0);
assert(x > 0 && "x muss positiv sein");
```

**Special features:**
- `assert` is a macro from `<assert.h>`
- Completely disabled by `#define NDEBUG` before the include
- Outputs filename, line number, and expression on failure
- No separate message parameter – workaround via `&&` trick

**Further reading:**
- [cppreference.com - assert](https://en.cppreference.com/w/c/error/assert)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Requires: #include <cassert>
int x = 10;

assert(x > 0);
assert(x > 0 && "x muss positiv sein");

// static_assert for compile time (since C++11)
static_assert(sizeof(int) >= 4, "int muss mindestens 4 Bytes haben");
```

**Special features:**
- `assert` is a macro from `<cassert>`, identical to C
- Disabled by `#define NDEBUG`
- `static_assert` (since C++11) checks conditions at compile time
- `static_assert` without message since C++17

**Further reading:**
- [cppreference.com - assert](https://en.cppreference.com/w/cpp/error/assert)
- [cppreference.com - static_assert](https://en.cppreference.com/w/cpp/language/static_assert)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Requires: using System.Diagnostics;
int x = 10;

Debug.Assert(x > 0);
Debug.Assert(x > 0, "x muss positiv sein");

// Trace.Assert is also active in release builds
Trace.Assert(x > 0, "x muss positiv sein");
```

**Special features:**
- `Debug.Assert` is only active in debug builds (conditional attribute)
- `Trace.Assert` is also active in release builds
- Shows a dialog on failure or writes to trace output
- Not a language keyword, but methods from `System.Diagnostics`

**Further reading:**
- [Microsoft Docs - Debug.Assert](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.debug.assert)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def x 10)

(assert (> x 0))
(assert (> x 0) "x muss positiv sein")
```

**Special features:**
- `assert` is a macro in the standard library
- Throws `AssertionError` on failure
- Can be globally disabled via `*assert*` binding: `(set! *assert* false)`
- Optional second parameter for error message

**Further reading:**
- [Clojure Documentation - assert](https://clojuredocs.org/clojure.core/assert)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defvar x 10)

(assert (> x 0))
(assert (> x 0) () "x muss positiv sein")

;; With correctable placeholders
(assert (> x 0) (x) "x ist ~A, muss aber positiv sein" x)
```

**Special features:**
- `assert` is a standard macro in Common Lisp
- Unique: Can interactively prompt the user for correction (restarts)
- The second parameter is a list of correctable variables
- Cannot be globally disabled – always active

**Further reading:**
- [Common Lisp HyperSpec - assert](http://www.lispworks.com/documentation/HyperSpec/Body/m_assert.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
x = 10

raise "x muss positiv sein" unless x > 0

# In Specs: assert-ähnliche Matcher
describe "Assertions" do
  it "checks conditions" do
    x.should be > 0
  end
end
```

**Special features:**
- Crystal has no built-in `assert` statement
- Runtime checks are implemented via `raise`
- The Spec framework provides `should`-based assertions
- Workaround: Custom `assert` method is easily implementable

**Further reading:**
- [Crystal Documentation - Spec](https://crystal-lang.org/reference/1.11/guides/testing.html)

</TabItem>
<TabItem value="d" label="D">

```d
int x = 10;

assert(x > 0);
assert(x > 0, "x muss positiv sein");

// static assert für Compile-Zeit
static assert(int.sizeof >= 4, "int muss mindestens 4 Bytes haben");
```

**Special features:**
- `assert` is a language keyword (not a macro like in C/C++)
- Disabled in release builds with `-release`
- `static assert` checks conditions at compile time
- Throws an `AssertError` on failure

**Further reading:**
- [D Documentation - Assert Expression](https://dlang.org/spec/expression.html#AssertExpression)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int x = 10;

assert(x > 0);
assert(x > 0, 'x muss positiv sein');
```

**Special features:**
- `assert` is a language keyword
- Only active in debug mode – disabled in production (`dart compile`)
- Supports optional second parameter for error message
- Flutter uses assertions intensively for widget validation

**Further reading:**
- [Dart Documentation - Assert](https://dart.dev/language/error-handling#assert)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
x: INTEGER

x := 10
check x > 0 end

-- Design by Contract
process (value: INTEGER)
  require
    value_positive: value > 0
  do
    -- Processing
  ensure
    result_valid: value > 0
  end
```

**Special features:**
- `check` is the assert equivalent in Eiffel
- Design by Contract is a core concept: `require` (precondition), `ensure` (postcondition), `invariant` (class invariant)
- Assertions can be enabled/disabled per level
- Eiffel is the origin of Design by Contract

**Further reading:**
- [Eiffel Documentation - Assertions](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
x = 10

# Pattern matching as implicit assertion
^x = 10  # OK
# ^x = 5  # ** (MatchError)

# Explizite Prüfung
unless x > 0, do: raise "x muss positiv sein"
```

**Special features:**
- Elixir has no dedicated `assert` statement
- Pattern matching serves as idiomatic assertion (failure triggers `MatchError`)
- `assert` and `refute` only exist in the ExUnit test framework
- Runtime checks are implemented via guards or `raise`/`throw`

**Further reading:**
- [Elixir Documentation - Pattern Matching](https://hexdocs.pm/elixir/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
X = 10,

%% Pattern matching as implicit assertion
10 = X,  % OK
%% 5 = X  % ** badmatch

%% EUnit macro
%% Requires: -include_lib("eunit/include/eunit.hrl").
?assert(X > 0),
?assertEqual(10, X).
```

**Special features:**
- Erlang has no built-in `assert` statement
- Pattern matching is the idiomatic form of assertion
- EUnit provides `?assert`, `?assertEqual`, `?assertMatch` as macros
- Guards in function heads also serve value validation

**Further reading:**
- [Erlang Documentation - EUnit](https://www.erlang.org/doc/apps/eunit/chapter.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
integer :: x = 10

if (x <= 0) then
  error stop "x muss positiv sein"
end if
```

**Special features:**
- Fortran has no built-in `assert` statement
- Workaround via `if` + `error stop` (since Fortran 2008)
- Some compilers offer proprietary assert extensions
- No standardized mechanism for disabling

**Further reading:**
- [Fortran Wiki - Error Handling](https://fortranwiki.org/fortran/show/Error+handling)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let x = 10

assert (x > 0)

// System.Diagnostics für Nachrichten
System.Diagnostics.Debug.Assert(x > 0, "x muss positiv sein")
```

**Special features:**
- `assert` is an F# keyword that is only active in debug builds
- `System.Diagnostics.Debug.Assert` is needed for messages
- Throws `System.Exception` on failure
- Expression is not evaluated in release builds

**Further reading:**
- [Microsoft Docs - F# Assertions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/assertions)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
let x = 10

// let assert for pattern-matching assertions
let assert Ok(value) = parse("42")

// For boolean assertions: should library
should.be_true(x > 0)
```

**Special features:**
- `let assert` is a language feature for pattern-matching assertions
- No general `assert` for arbitrary boolean expressions
- Failed `let assert` terminates the program with a panic
- External libraries are used for boolean assertions

**Further reading:**
- [Gleam Documentation - Let Assert](https://gleam.run/book/tour/let-assert.html)

</TabItem>
<TabItem value="go" label="Go">

```go
x := 10

if x <= 0 {
    panic("x muss positiv sein")
}
```

**Special features:**
- Go deliberately has **no** `assert` statement
- Go developers recommend explicit `if` checks with `panic` or error handling
- `panic` is the idiomatic replacement for non-recoverable errors
- In the `testing` package: `t.Fatal()`, `t.Error()` instead of `assert`

**Further reading:**
- [Go FAQ - Why does Go not have assertions?](https://go.dev/doc/faq#assertions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def x = 10

assert x > 0
assert x > 0 : "x muss positiv sein"
```

**Special features:**
- Groovy has **Power Assertions** – on failure, all subexpressions are displayed
- Always active (cannot be disabled, unlike in Java)
- Error messages show the value of each subexpression in a visual representation
- Optional message with `:` instead of `,`

**Further reading:**
- [Groovy Documentation - Power Assertions](https://groovy-lang.org/semantics.html#_power_assertion)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: import Control.Exception (assert)
x = 10

-- assert returns the second value when the condition is true
result = assert (x > 0) "Berechnung erfolgreich"

-- error als Alternative
checkedX = if x > 0 then x else error "x muss positiv sein"
```

**Special features:**
- `assert` is a GHC extension from `Control.Exception`
- Disabled with `-O` (optimization) or `-fignore-asserts`
- Outputs source code location on failure
- `assert` takes two arguments: condition and return value

**Further reading:**
- [GHC Documentation - Assertions](https://downloads.haskell.org/~ghc/latest/docs/users_guide/exts/assert.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var x = 10;

// No built-in assert – workaround:
if (x <= 0) throw "x muss positiv sein";

// With Debug class
#if debug
if (x <= 0) throw "x muss positiv sein";
#end
```

**Special features:**
- Haxe has no built-in `assert` statement
- Workaround via `if` + `throw` or conditional compilation
- `#if debug` enables debug-only assertions
- External libraries like `buddy` provide assert functionality

**Further reading:**
- [Haxe Documentation - Conditional Compilation](https://haxe.org/manual/lf-condition-compilation.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Assert statements (since Java 1.4)
int x = 10;

assert x > 0;
assert x > 0 : "x muss positiv sein";
```

**Special features:**
- `assert` is a language keyword since Java 1.4
- **Disabled** by default – must be enabled with `-ea` (enable assertions)
- Throws `AssertionError` on failure
- Message is specified with `:` instead of `,`

**Further reading:**
- [Oracle Java Documentation - Assertions](https://docs.oracle.com/javase/8/docs/technotes/guides/language/assert.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let x = 10;

// console.assert – only logs, does not throw an error
console.assert(x > 0, "x muss positiv sein");

// Node.js: assert module (throws error)
// Requires: const assert = require('node:assert');
assert(x > 0);
assert.strictEqual(x, 10);
```

**Special features:**
- `console.assert()` is available in the browser, but **does not throw an error** – only logs
- Node.js provides a complete `assert` module with `assert`, `strictEqual`, `deepEqual` etc.
- Not a language keyword – assert is always a function/method
- The Node.js module `node:assert` throws `AssertionError` on failure

**Further reading:**
- [MDN - console.assert()](https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static)
- [Node.js - Assert Module](https://nodejs.org/api/assert.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
x = 10

@assert x > 0
@assert x > 0 "x muss positiv sein"
```

**Special features:**
- `@assert` is a macro in the standard library
- Throws `AssertionError` on failure
- Cannot be globally disabled
- Shows the failed expression on failure

**Further reading:**
- [Julia Documentation - @assert](https://docs.julialang.org/en/v1/base/base/#Base.@assert)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val x = 10

assert(x > 0)
assert(x > 0) { "x muss positiv sein" }

// require/check – always active
require(x > 0) { "x muss positiv sein" }  // IllegalArgumentException
check(x > 0) { "x muss positiv sein" }    // IllegalStateException
```

**Special features:**
- `assert` is disabled by default like in Java (enable with `-ea`)
- `require` and `check` are **always active** and more idiomatic in Kotlin
- `require` throws `IllegalArgumentException` (for parameter validation)
- `check` throws `IllegalStateException` (for state checks)

**Further reading:**
- [Kotlin Documentation - assert](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/assert.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local x = 10

assert(x > 0)
assert(x > 0, "x muss positiv sein")
```

**Special features:**
- `assert` is a built-in function
- Throws an `error` on failure
- Cannot be disabled
- Outputs the optional message or `"assertion failed!"` on failure

**Further reading:**
- [Lua Documentation - assert](https://www.lua.org/manual/5.4/manual.html#pdf-assert)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
x = 10;

assert(x > 0);
assert(x > 0, 'x muss positiv sein');
assert(x > 0, 'myId:assertFail', 'x ist %d, muss positiv sein', x);
```

**Special features:**
- `assert` is a built-in function
- Supports formatted error messages with message ID
- Cannot be disabled
- Throws an error that can be caught with `try/catch`

**Further reading:**
- [MathWorks Documentation - assert](https://www.mathworks.com/help/matlab/ref/assert.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
X = 10,

% Workaround via if-then-else with error/1
( X > 0 ->
    true
;
    error("x muss positiv sein")
).
```

**Special features:**
- Mercury has no built-in `assert` statement
- Workaround via if-then-else (`( Cond -> true ; error(Msg) )`)
- `error/1` from the `exception` module aborts the program with an error message
- Mercury primarily relies on its strong type system and determinism system for compile-time guarantees

**Further reading:**
- [Mercury Library Reference - exception](https://mercurylang.org/information/doc-release/mercury_library/exception.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var x = 10

debug_assert(x > 0, "x muss positiv sein")
```

**Special features:**
- `debug_assert` is the standard assert function
- Only active in debug mode – removed in release builds
- Mojo is still under active development
- Syntax and availability may change

**Further reading:**
- [Mojo Documentation - debug_assert](https://docs.modular.com/mojo/stdlib/builtin/debug_assert/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
let x = 10

assert x > 0
assert x > 0, "x muss positiv sein"

# doAssert – cannot be disabled
doAssert x > 0, "x muss positiv sein"

# Static Assert für Compile-Zeit
static: assert sizeof(int) >= 4
```

**Special features:**
- `assert` is a template in the standard library
- Disabled with `--assertions:off` or `-d:danger`
- `doAssert` is **always active** and cannot be disabled
- Shows source code location and expression on failure

**Further reading:**
- [Nim Documentation - assert](https://nim-lang.org/docs/assertions.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
int x = 10;

NSAssert(x > 0, @"x muss positiv sein");
NSCAssert(x > 0, @"x muss positiv sein");  // In C-Funktionen

// C-Style assert ist ebenfalls verfügbar
assert(x > 0);
```

**Special features:**
- `NSAssert` is a Foundation macro for Objective-C methods
- `NSCAssert` is the variant for C functions
- Disabled by `NS_BLOCK_ASSERTIONS` preprocessor flag
- Additionally, the C macro `assert` from `<assert.h>` is available

**Further reading:**
- [Apple Documentation - NSAssert](https://developer.apple.com/documentation/foundation/nsassert)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  x: Integer;
begin
  x := 10;

  Assert(x > 0);
  Assert(x > 0, 'x muss positiv sein');
end;
```

**Special features:**
- `Assert` is a built-in procedure
- Can be disabled via compiler directive `{$C-}`
- Throws `EAssertionFailed` exception on failure
- Active by default in debug mode

**Further reading:**
- [Free Pascal Documentation - Assert](https://www.freepascal.org/docs-html/rtl/system/assert.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let x = 10

let () = assert (x > 0)

(* assert false – signals unreachable code *)
let unreachable () = assert false
```

**Special features:**
- `assert` is a language keyword
- Throws `Assert_failure` exception with file, line, and column
- Cannot be disabled
- `assert false` has the special type `'a` (arbitrary type)

**Further reading:**
- [OCaml Manual - Assertions](https://v2.ocaml.org/api/compilerlibrary/index.html)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
x = 10;

assert(x > 0);
assert(x, 10);           % Checks equality
assert(x, 10, 0.001);    % Checks equality with tolerance
```

**Special features:**
- `assert` is a built-in function
- Supports numeric comparisons with tolerance (third parameter)
- Often used in `%!test` blocks for embedded tests
- Cannot be disabled

**Further reading:**
- [GNU Octave Documentation - assert](https://docs.octave.org/latest/Test-Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
x := 10

assert(x > 0)
assert(x > 0, "x muss positiv sein")

// Panic for non-recoverable errors
if x <= 0 do panic("x muss positiv sein")
```

**Special features:**
- `assert` is a built-in procedure
- Disabled in release builds with `-o:speed` or `-no-bounds-check`
- Shows source code location on failure
- `panic` is a separate function that is always active

**Further reading:**
- [Odin Documentation - Built-in Procedures](https://odin-lang.org/docs/overview/#built-in-procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Requires: use Carp::Assert;
my $x = 10;

assert($x > 0);

# Without module: workaround
die "x muss positiv sein" unless $x > 0;
```

**Special features:**
- Perl has no built-in `assert` statement
- `Carp::Assert` is a CPAN module for assertions
- Idiomatic workaround: `die ... unless ...`
- `Carp::Assert` can be disabled with `no Carp::Assert`

**Further reading:**
- [CPAN - Carp::Assert](https://metacpan.org/pod/Carp::Assert)

</TabItem>
<TabItem value="php" label="PHP">

```php
$x = 10;

assert($x > 0);
assert($x > 0, 'x muss positiv sein');

// Since PHP 8.0: throws AssertionError
// assert($x > 100);  // AssertionError
```

**Special features:**
- `assert` is a language construct-like function
- Behavior configurable via `php.ini` (`zend.assertions`)
- Since PHP 8.0, `assert` throws `AssertionError` by default
- Fully removable in production mode with `zend.assertions = -1`

**Further reading:**
- [PHP Documentation - assert](https://www.php.net/manual/en/function.assert.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
X = 10,

% Workaround: If-then-else with throw
(X > 0 -> true ; throw(error(assertion_error, 'X muss positiv sein'))),

% Custom helper predicate
assert_true(Goal) :-
    (call(Goal) -> true ; throw(assertion_failed(Goal))).

:- assert_true(10 > 0).
```

**Special features:**
- ISO-Prolog has **no** built-in assert statement for condition checks
- `assert/1` and `assertz/1` in Prolog serve database manipulation (adding facts/clauses), not condition checking
- Workaround via if-then-else (`->`) with `throw/1`
- SWI-Prolog's `plunit` library provides `assertion/1` for tests

**Further reading:**
- [SWI-Prolog Documentation - Exception Handling](https://www.swi-prolog.org/pldoc/man?section=exception)

</TabItem>
<TabItem value="python" label="Python">

```python
x = 10

assert x > 0
assert x > 0, "x muss positiv sein"
```

**Special features:**
- `assert` is a language keyword
- Disabled with `-O` (optimization) or `-OO`
- Throws `AssertionError` on failure
- Should **not** be used for validation of user input

**Further reading:**
- [Python Documentation - assert](https://docs.python.org/3/reference/simple_stmts.html#the-assert-statement)

</TabItem>
<TabItem value="r" label="R">

```r
x <- 10

stopifnot(x > 0)
stopifnot("x muss positiv sein" = x > 0)

# Mehrere Bedingungen gleichzeitig
stopifnot(x > 0, x < 100, is.numeric(x))
```

**Special features:**
- R uses `stopifnot()` instead of `assert`
- Supports multiple conditions as separate arguments
- Named arguments are used as error message (since R 4.0)
- Cannot be disabled – always active

**Further reading:**
- [R Documentation - stopifnot](https://stat.ethz.ch/R-manual/R-devel/library/base/html/stopifnot.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define x 10)

;; Workaround via unless/error
(unless (> x 0)
  (error "x muss positiv sein"))

;; In rackunit: test-specific assertions
;; Requires: (require rackunit)
(check-true (> x 0))
(check-equal? x 10)
```

**Special features:**
- Racket has no built-in `assert` statement for runtime checks
- `unless`/`error` is the idiomatic workaround
- `rackunit` provides extensive test assertions (`check-true`, `check-equal?` etc.)
- Racket's contract system (`define/contract`) provides more powerful guarantees

**Further reading:**
- [Racket Documentation - rackunit](https://docs.racket-lang.org/rackunit/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
x = 10

expect x > 0

-- In tests
expect x == 10
```

**Special features:**
- `expect` is a language keyword specifically for assertions and tests
- Used by the compiler in test contexts
- Shows the expression and involved values on failure
- Roc is still under active development

**Further reading:**
- [Roc Documentation - expect](https://www.roc-lang.org/tutorial#expect)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
x = 10

# No built-in assert – workaround:
raise "x muss positiv sein" unless x > 0

# In Minitest/Test::Unit:
# assert x > 0
# assert_equal 10, x
```

**Special features:**
- Ruby has no built-in `assert` statement
- Idiomatic workaround: `raise ... unless ...`
- `assert` methods exist in Minitest and Test::Unit (test frameworks)
- Custom `assert` method is easily implementable

**Further reading:**
- [Ruby Documentation - Minitest::Assertions](https://ruby-doc.org/stdlib/libdoc/minitest/rdoc/Minitest/Assertions.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let x = 10;

assert!(x > 0);
assert!(x > 0, "x muss positiv sein");
assert!(x > 0, "x ist {}, muss positiv sein", x);

assert_eq!(x, 10);
assert_ne!(x, 0);

// debug_assert – only in debug builds
debug_assert!(x > 0);
```

**Special features:**
- `assert!`, `assert_eq!`, `assert_ne!` are macros (always active)
- `debug_assert!`, `debug_assert_eq!`, `debug_assert_ne!` only in debug builds
- Error messages support format strings like `println!`
- `assert_eq!` and `assert_ne!` show both values on failure

**Further reading:**
- [Rust Documentation - assert!](https://doc.rust-lang.org/std/macro.assert.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val x = 10

assert(x > 0)
assert(x > 0, "x muss positiv sein")

// require – for preconditions (throws IllegalArgumentException)
require(x > 0, "x muss positiv sein")

// ensuring – for postconditions
def double(n: Int): Int = { n * 2 } ensuring (_ > 0)
```

**Special features:**
- `assert` is a method in `Predef` (automatically imported)
- `require` is for parameter validation (throws `IllegalArgumentException`)
- `ensuring` checks postconditions on the return value
- Assertions can be disabled with `-Xelide-below`

**Further reading:**
- [Scala Documentation - assert](https://www.scala-lang.org/api/current/scala/Predef$.html#assert)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define x 10)

;; No standard assert – workaround:
(when (<= x 0)
  (error "x muss positiv sein"))

;; SRFI-78: Lightweight testing
;; (check (> x 0) => #t)
```

**Special features:**
- Scheme (R7RS) has no standardized `assert`
- Workaround via `error` or `when`/`unless`
- SRFI-78 defines lightweight testing with `check`
- Some implementations offer their own assert extensions

**Further reading:**
- [SRFI-78 - Lightweight Testing](https://srfi.schemers.org/srfi-78/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let x = 10

assert(x > 0)
assert(x > 0, "x muss positiv sein")

// precondition – also active in release builds
precondition(x > 0, "x muss positiv sein")

// assertionFailure/preconditionFailure – unconditional abort
// assertionFailure("Unerreichbarer Code")
```

**Special features:**
- `assert` is removed in release builds (`-O`)
- `precondition` remains active in release builds
- `assertionFailure` and `preconditionFailure` are unconditional aborts
- With `-Ounchecked`, `precondition` checks are also removed

**Further reading:**
- [Swift Documentation - assert](https://developer.apple.com/documentation/swift/assert(_:_:file:line:))

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let x = 10;

// console.assert – only logs, does not throw an error
console.assert(x > 0, "x muss positiv sein");

// Node.js: assert module (throws error)
// Requires: import assert from 'node:assert';
assert(x > 0);
assert.strictEqual(x, 10);
```

**Special features:**
- Identical behavior to JavaScript
- TypeScript additionally provides **Assertion Functions** for type narrowing: `asserts value is Type`
- `console.assert()` does **not** throw an error – only logs
- The Node.js module `node:assert` throws `AssertionError` on failure

**Further reading:**
- [TypeScript Documentation - Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
- [Node.js - Assert Module](https://nodejs.org/api/assert.html)

</TabItem>
<TabItem value="v" label="V">

```v
x := 10

assert x > 0
assert x > 0, 'x muss positiv sein'
```

**Special features:**
- `assert` is a language keyword
- Shows the expression and operand values on failure
- In `test_` files, assertions are the primary testing means
- Assertions are disabled in release builds (`-prod`)

**Further reading:**
- [V Documentation - assert](https://github.com/vlang/v/blob/master/doc/docs.md#asserts)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' Benötigt: Imports System.Diagnostics
Dim x As Integer = 10

Debug.Assert(x > 0)
Debug.Assert(x > 0, "x muss positiv sein")

' Trace.Assert ist auch im Release-Build aktiv
Trace.Assert(x > 0, "x muss positiv sein")
```

**Special features:**
- Identical behavior to C# (both use `System.Diagnostics`)
- `Debug.Assert` is only active in debug builds
- `Trace.Assert` is also active in release builds
- Not a language keyword, but methods from the .NET Framework

**Further reading:**
- [Microsoft Docs - Debug.Assert](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.debug.assert)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
x = 10;

Assert[x > 0]
Assert[x > 0, "x muss positiv sein"]
```

**Special features:**
- `Assert` is a built-in function
- Generates an `Assert::asrtf` message on failure
- Can be customized via `$AssertFunction`
- Always active by default

**Further reading:**
- [Wolfram Documentation - Assert](https://reference.wolfram.com/language/ref/Assert.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const x: i32 = 10;

// Requires: const std = @import("std");
std.debug.assert(x > 0);

// Unreachable – for unreachable code
// unreachable;
```

**Special features:**
- `std.debug.assert` is a standard library function
- No separate message parameter possible
- In release builds (`ReleaseFast`, `ReleaseSmall`), `assert` becomes `unreachable`
- `@panic` can be used for assertions with message

**Further reading:**
- [Zig Documentation - std.debug.assert](https://ziglang.org/documentation/master/std/#std.debug.assert)

</TabItem>
</Tabs>

## 18.1.2. Built-in Test Frameworks

Some languages provide a test framework as part of the language or standard library, so no external dependencies are needed for basic unit testing.

### Languages

<Tabs availableTabs={['clojure', 'crystal', 'd', 'elixir', 'erlang', 'go', 'julia', 'matlab', 'nim', 'octave', 'odin', 'perl', 'prolog', 'python', 'racket', 'roc', 'ruby', 'rust', 'swift', 'v', 'wolfram-language', 'zig']} yellowTabs={['csharp', 'dart', 'elm', 'gleam', 'groovy', 'javascript', 'kotlin', 'mojo', 'objective-c', 'typescript', 'vbnet']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; clojure.test is part of the standard library
(ns myapp.core-test
  (:require [clojure.test :refer [deftest is testing]]))

(deftest addition-test
  (testing "Addition"
    (is (= 4 (+ 2 2)))
    (is (pos? 42))))
```

**Special features:**
- `clojure.test` is part of the Clojure standard library
- `deftest` defines tests, `is` checks assertions
- `testing` groups related assertions with description
- Execution with `lein test` or `clojure -X:test`

**Further reading:**
- [Clojure Documentation - clojure.test](https://clojure.github.io/clojure/clojure.test-api.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// MSTest – part of the .NET SDK
[TestClass]
public class MathTests
{
    [TestMethod]
    public void Addition_ReturnsCorrectResult()
    {
        Assert.AreEqual(4, 2 + 2);
        Assert.IsTrue(42 > 0);
    }
}
```

**Special features:**
- MSTest is included in the .NET SDK and executable via `dotnet test`
- Not a language feature, but an official framework from Microsoft
- Alternatives like xUnit and NUnit are more popular in the community
- Test projects are created with `dotnet new mstest`

**Further reading:**
- [Microsoft Docs - MSTest](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
require "spec"

describe "Math" do
  it "adds correctly" do
    (2 + 2).should eq(4)
    42.should be > 0
  end
end
```

**Special features:**
- `spec` is part of the Crystal standard library
- RSpec-like syntax with `describe`, `it`, `should`
- Execution with `crystal spec`
- Supports `before_each`, `after_each`, and `pending` for skipped tests

**Further reading:**
- [Crystal Documentation - Spec](https://crystal-lang.org/reference/1.11/guides/testing.html)

</TabItem>
<TabItem value="d" label="D">

```d
// unittest blocks are a language feature
int add(int a, int b) {
    return a + b;
}

unittest {
    assert(add(2, 2) == 4);
    assert(42 > 0);
}
```

**Special features:**
- `unittest` blocks are directly integrated into the language
- Can be placed anywhere in the code – directly next to the function being tested
- Execution with `dmd -unittest` or `rdmd --main -unittest`
- Tests run before `main()` and are skipped in release builds

**Further reading:**
- [D Documentation - Unit Tests](https://dlang.org/spec/unittest.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Requires: package:test (official Dart package)
import 'package:test/test.dart';

void main() {
  test('Addition', () {
    expect(2 + 2, equals(4));
    expect(42, isPositive);
  });
}
```

**Special features:**
- `package:test` is the official test package, but not in the standard library
- Must be added as a dependency in `pubspec.yaml`
- Execution with `dart test`
- Supports `group`, `setUp`, `tearDown`, and asynchronous tests

**Further reading:**
- [Dart Documentation - Testing](https://dart.dev/guides/testing)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule MathTest do
  use ExUnit.Case

  test "Addition" do
    assert 2 + 2 == 4
    assert 42 > 0
  end
end
```

**Special features:**
- ExUnit is part of the Elixir standard library
- `use ExUnit.Case` imports the test functionality
- Execution with `mix test`
- Supports `setup`, `describe`, `doctest`, and asynchronous tests

**Further reading:**
- [Elixir Documentation - ExUnit](https://hexdocs.pm/ex_unit/ExUnit.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Requires: elm-explorations/test (official package)
module MathTest exposing (..)

import Expect
import Test exposing (Test, test)

suite : Test
suite =
    test "Addition" <|
        \_ -> Expect.equal 4 (2 + 2)
```

**Special features:**
- `elm-test` is the official test package, but not in the standard library
- Must be installed separately: `elm install elm-explorations/test`
- Execution with `elm-test`
- Purely functional tests without side effects

**Further reading:**
- [Elm Test Documentation](https://package.elm-lang.org/packages/elm-explorations/test/latest/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_test).
-include_lib("eunit/include/eunit.hrl").

addition_test() ->
    ?assertEqual(4, 2 + 2),
    ?assert(42 > 0).
```

**Special features:**
- EUnit and Common Test are part of the OTP distribution
- EUnit: Lightweight unit testing with `_test()` suffix convention
- Common Test: More comprehensive framework for system and integration tests
- Execution with `rebar3 eunit` or `eunit:test(module_name)`

**Further reading:**
- [Erlang Documentation - EUnit](https://www.erlang.org/doc/apps/eunit/chapter.html)
- [Erlang Documentation - Common Test](https://www.erlang.org/doc/apps/common_test/introduction.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Requires: gleeunit (official test package)
import gleeunit
import gleeunit/should

pub fn addition_test() {
  { 2 + 2 } |> should.equal(4)
  True |> should.be_true()
}
```

**Special features:**
- `gleeunit` is the official test package, but not in the standard library
- Added as a dependency by default with `gleam new`
- Test functions end with `_test`
- Execution with `gleam test`

**Further reading:**
- [Gleam Documentation - Testing](https://gleam.run/book/tour/test.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// File: math_test.go
package math

import "testing"

func TestAddition(t *testing.T) {
    result := 2 + 2
    if result != 4 {
        t.Errorf("Expected 4, got %d", result)
    }
}
```

**Special features:**
- `testing` is part of the Go standard library
- Test files end with `_test.go`, functions begin with `Test`
- Execution with `go test`
- No assert – tests use `t.Error()`, `t.Fatal()`, `t.Errorf()`
- Supports benchmarks (`BenchmarkXxx`) and fuzzing (`FuzzXxx`, since Go 1.18)

**Further reading:**
- [Go Documentation - testing](https://pkg.go.dev/testing)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Groovy's own test support
class MathTest extends GroovyTestCase {
    void testAddition() {
        assertEquals(4, 2 + 2)
        assertTrue(42 > 0)
    }
}
```

**Special features:**
- `GroovyTestCase` is part of the Groovy standard library
- Based on JUnit, extends it with Groovy features
- Power Assertions provide detailed error messages
- In practice, Spock is often used as an external framework

**Further reading:**
- [Groovy Documentation - Testing](https://groovy-lang.org/testing.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Node.js: node:test (seit Node.js 18)
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('Math', () => {
    it('addiert korrekt', () => {
        assert.strictEqual(2 + 2, 4);
        assert.ok(42 > 0);
    });
});
```

**Special features:**
- `node:test` has been included in the core since Node.js 18
- Execution with `node --test`
- Provides `describe`, `it`, `before`, `after`, `beforeEach`, `afterEach`
- Uses the `node:assert` module for assertions
- There is no built-in test framework in the browser

**Further reading:**
- [Node.js Documentation - Test Runner](https://nodejs.org/api/test.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Test

@testset "Math" begin
    @test 2 + 2 == 4
    @test 42 > 0
    @test_throws DomainError sqrt(-1)
end
```

**Special features:**
- `Test` is part of the Julia standard library
- `@testset` groups tests, `@test` checks individual assertions
- `@test_throws` checks whether an exception is thrown
- Execution with `julia -e 'using Pkg; Pkg.test()'`

**Further reading:**
- [Julia Documentation - Test](https://docs.julialang.org/en/v1/stdlib/Test/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// kotlin.test – official test library
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class MathTest {
    @Test fun addition() {
        assertEquals(4, 2 + 2)
        assertTrue(42 > 0)
    }
}
```

**Special features:**
- `kotlin.test` is an official library from JetBrains, but not in the stdlib
- Must be added as a dependency
- Platform-independent – works on JVM, JS, and Native
- Uses JUnit, QUnit, or native test runner depending on platform

**Further reading:**
- [Kotlin Documentation - kotlin.test](https://kotlinlang.org/api/latest/kotlin.test/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% File: MathTest.m
classdef MathTest < matlab.unittest.TestCase
    methods (Test)
        function testAddition(testCase)
            testCase.verifyEqual(2 + 2, 4);
            testCase.verifyGreaterThan(42, 0);
        end
    end
end
```

**Special features:**
- `matlab.unittest` is part of the MATLAB standard library
- Class-based framework with `verifyEqual`, `verifyTrue` etc.
- Execution with `runtests('MathTest')`
- Supports fixtures, parameterized tests, and test suites

**Further reading:**
- [MathWorks Documentation - Unit Testing Framework](https://www.mathworks.com/help/matlab/matlab-unit-test-framework.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
from testing import assert_equal, assert_true

def test_addition():
    assert_equal(2 + 2, 4)
    assert_true(42 > 0)
```

**Special features:**
- `testing` module is part of the Mojo standard library
- Provides `assert_equal`, `assert_true`, `assert_false` etc.
- Mojo is still under active development
- Execution with `mojo test`

**Further reading:**
- [Mojo Documentation - Testing](https://docs.modular.com/mojo/stdlib/testing/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
import unittest

suite "Math":
  test "Addition":
    check 2 + 2 == 4
    check 42 > 0
```

**Special features:**
- `unittest` is part of the Nim standard library
- `suite` groups tests, `test` defines individual test cases
- `check` is the assert function in the test context
- Execution with `nim c -r test_math.nim`

**Further reading:**
- [Nim Documentation - unittest](https://nim-lang.org/docs/unittest.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// XCTest – part of the Xcode SDK
@interface MathTests : XCTestCase
@end

@implementation MathTests
- (void)testAddition {
    XCTAssertEqual(2 + 2, 4);
    XCTAssertTrue(42 > 0);
}
@end
```

**Special features:**
- XCTest is part of the Xcode SDK (not the language itself)
- Test classes inherit from `XCTestCase`
- Test methods begin with `test`
- Execution via Xcode or `xcodebuild test`

**Further reading:**
- [Apple Documentation - XCTest](https://developer.apple.com/documentation/xctest)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Embedded tests in source files
function result = add(a, b)
  result = a + b;
endfunction

%!test
%! assert(add(2, 2), 4);
%! assert(42 > 0);
```

**Special features:**
- Octave has embedded tests with `%!test` blocks directly in source files
- `assert` is the primary test function
- Execution with `test('filename')`
- Tests are written directly next to the code being tested

**Further reading:**
- [GNU Octave Documentation - Test Functions](https://docs.octave.org/latest/Test-Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math_test

import "core:testing"

@(test)
test_addition :: proc(t: ^testing.T) {
    testing.expect_value(t, 2 + 2, 4)
    testing.expect(t, 42 > 0)
}
```

**Special features:**
- `core:testing` is part of the Odin standard library
- Test functions are annotated with `@(test)`
- Execution with `odin test`
- Supports `expect`, `expect_value`, and `log`

**Further reading:**
- [Odin Documentation - Testing](https://odin-lang.org/docs/overview/#testing)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
use Test::More;

is(2 + 2, 4, 'Addition');
ok(42 > 0, 'Positive');

done_testing();
```

**Special features:**
- `Test::More` and `Test::Simple` are part of the Perl core distribution
- TAP (Test Anything Protocol) as standardized output format
- Execution with `prove` or `perl -Ilib t/test.t`
- Supports `is`, `ok`, `like`, `is_deeply`, and many more

**Further reading:**
- [Perl Documentation - Test::More](https://perldoc.perl.org/Test::More)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
%% Requires: :- use_module(library(plunit)).
:- begin_tests(math).

test(addition) :-
    X is 2 + 2,
    assertion(X == 4).

test(positive) :-
    assertion(42 > 0).

:- end_tests(math).
```

**Special features:**
- `plunit` is part of the SWI-Prolog standard library
- `:- begin_tests(Name).` / `:- end_tests(Name).` define test blocks
- `test(Name)` or `test(Name, [Options])` define individual tests
- `assertion/1` checks goals within tests
- Execution with `run_tests.` in the Prolog console or `swipl -g run_tests -t halt datei.pl`

**Further reading:**
- [SWI-Prolog Documentation - PlUnit](https://www.swi-prolog.org/pldoc/doc_for?object=section(%27packages/plunit.html%27))

</TabItem>
<TabItem value="python" label="Python">

```python
import unittest

class MathTest(unittest.TestCase):
    def test_addition(self):
        self.assertEqual(2 + 2, 4)
        self.assertTrue(42 > 0)

# Alternative: doctest
def add(a, b):
    """
    >>> add(2, 2)
    4
    """
    return a + b
```

**Special features:**
- `unittest` and `doctest` are part of the Python standard library
- `unittest` is JUnit-inspired with classes and methods
- `doctest` tests examples directly from docstrings
- Execution with `python -m unittest` or `python -m doctest`
- In practice, `pytest` is often used as an external framework

**Further reading:**
- [Python Documentation - unittest](https://docs.python.org/3/library/unittest.html)
- [Python Documentation - doctest](https://docs.python.org/3/library/doctest.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(require rackunit)

(test-case "Math"
  (check-equal? (+ 2 2) 4)
  (check-true (> 42 0)))
```

**Special features:**
- `rackunit` is part of the Racket distribution
- `check-equal?`, `check-true`, `check-exn` etc. as assertion functions
- `test-case` and `test-suite` for grouping
- Execution with `raco test datei.rkt`

**Further reading:**
- [Racket Documentation - RackUnit](https://docs.racket-lang.org/rackunit/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
expect 2 + 2 == 4
expect 42 > 0
```

**Special features:**
- `expect` is a language keyword for tests and assertions
- No separate framework needed – testing is integrated into the language
- Execution with `roc test`
- Shows the involved values on failure
- Roc is still under active development

**Further reading:**
- [Roc Documentation - Testing](https://www.roc-lang.org/tutorial#expect)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require "minitest/autorun"

class MathTest < Minitest::Test
  def test_addition
    assert_equal 4, 2 + 2
    assert 42 > 0
  end
end
```

**Special features:**
- `minitest` is part of the Ruby standard library
- Supports both unit test and spec style
- `assert`, `assert_equal`, `assert_raises` etc. as assertions
- Execution with `ruby test_math.rb`

**Further reading:**
- [Ruby Documentation - Minitest](https://ruby-doc.org/stdlib/libdoc/minitest/rdoc/Minitest.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_addition() {
        assert_eq!(add(2, 2), 4);
        assert!(42 > 0);
    }
}
```

**Special features:**
- Testing is directly integrated into the language and compiler
- `#[test]` marks test functions, `#[cfg(test)]` marks test modules
- Execution with `cargo test`
- Tests can be placed directly next to production code
- Supports `#[should_panic]` and `#[ignore]`

**Further reading:**
- [Rust Documentation - Testing](https://doc.rust-lang.org/book/ch11-01-writing-tests.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Testing

@Test func addition() {
    #expect(2 + 2 == 4)
    #expect(42 > 0)
}

// XCTest (older approach)
import XCTest
class MathTests: XCTestCase {
    func testAddition() {
        XCTAssertEqual(2 + 2, 4)
    }
}
```

**Special features:**
- Swift Testing is the new official framework since Swift 5.9
- XCTest is the older framework, part of the Xcode SDK
- Swift Testing uses `@Test` macro and `#expect` macro
- Execution with `swift test` (Swift Package Manager) or Xcode

**Further reading:**
- [Apple Documentation - Swift Testing](https://developer.apple.com/documentation/testing)
- [Apple Documentation - XCTest](https://developer.apple.com/documentation/xctest)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Node.js: node:test (seit Node.js 18)
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('Math', () => {
    it('addiert korrekt', () => {
        assert.strictEqual(2 + 2, 4);
        assert.ok(42 > 0);
    });
});
```

**Special features:**
- Identical to JavaScript – uses Node.js `node:test`
- TypeScript files require a build step or `tsx`/`ts-node`
- Deno and Bun have their own built-in test runners
- In practice, Jest or Vitest are often used

**Further reading:**
- [Node.js Documentation - Test Runner](https://nodejs.org/api/test.html)

</TabItem>
<TabItem value="v" label="V">

```v
// File: math_test.v
fn test_addition() {
    assert 2 + 2 == 4
    assert 42 > 0
}
```

**Special features:**
- Testing is directly integrated into the language
- Test files end with `_test.v`, functions begin with `test_`
- Execution with `v test datei_test.v`
- `assert` is the primary testing means, shows values on failure

**Further reading:**
- [V Documentation - Testing](https://github.com/vlang/v/blob/master/doc/docs.md#testing)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' MSTest – part of the .NET SDK
<TestClass>
Public Class MathTests
    <TestMethod>
    Public Sub Addition_ReturnsCorrectResult()
        Assert.AreEqual(4, 2 + 2)
        Assert.IsTrue(42 > 0)
    End Sub
End Class
```

**Special features:**
- Identical to C# – MSTest is included in the .NET SDK
- Uses VB.NET attribute syntax: `<TestClass>`, `<TestMethod>`
- Execution with `dotnet test`
- Alternatives like xUnit and NUnit are also available

**Further reading:**
- [Microsoft Docs - MSTest](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
VerificationTest[2 + 2, 4]
VerificationTest[42 > 0, True]

(* Multiple tests as TestReport *)
TestReport[{
    VerificationTest[2 + 2, 4],
    VerificationTest[42 > 0, True]
}]
```

**Special features:**
- `VerificationTest` and `TestReport` are built-in functions
- `VerificationTest` compares result with expected value
- `TestReport` creates a summary report
- Tests can be saved in `.wlt` files

**Further reading:**
- [Wolfram Documentation - VerificationTest](https://reference.wolfram.com/language/ref/VerificationTest.html)
- [Wolfram Documentation - TestReport](https://reference.wolfram.com/language/ref/TestReport.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn add(a: i32, b: i32) i32 {
    return a + b;
}

test "Addition" {
    const std = @import("std");
    try std.testing.expectEqual(@as(i32, 4), add(2, 2));
    try std.testing.expect(42 > 0);
}
```

**Special features:**
- `test` blocks are directly integrated into the language
- Tests can be placed anywhere in the code – next to the code being tested
- Execution with `zig test datei.zig`
- `std.testing` provides `expectEqual`, `expect`, `expectError` etc.
- Tests are not compiled in release builds

**Further reading:**
- [Zig Documentation - Testing](https://ziglang.org/documentation/master/#Zig-Test)

</TabItem>
</Tabs>

## 18.1.3. Property-Based Testing

Property-Based Testing automatically generates random test data and checks whether defined properties hold for all generated inputs. In contrast to conventional unit tests that test concrete values, general laws are verified.

### Languages

<Tabs availableTabs={['clojure', 'elixir', 'erlang', 'fsharp', 'haskell', 'java', 'javascript', 'kotlin', 'ocaml', 'python', 'purescript', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['csharp', 'cpp', 'dart', 'go', 'groovy', 'julia', 'nim', 'racket', 'ruby', 'vbnet']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Requires: org.clojure/test.check
(require '[clojure.test.check :as tc])
(require '[clojure.test.check.generators :as gen])
(require '[clojure.test.check.properties :as prop])

(def sort-idempotent
  (prop/for-all [v (gen/vector gen/int)]
    (= (sort v) (sort (sort v)))))

(tc/quick-check 100 sort-idempotent)
```

**Special features:**
- `test.check` is an official Clojure Contrib library
- Generators (`gen/int`, `gen/string`, `gen/vector` etc.) are highly composable
- Shrinking automatically reduces failed inputs to minimal counterexamples
- Integration with `clojure.test` via `defspec`

**Further reading:**
- [Clojure test.check](https://github.com/clojure/test.check)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Requires: FsCheck or FsCheck.Xunit NuGet package
[Property]
public bool Sort_Is_Idempotent(int[] items)
{
    var sorted = items.OrderBy(x => x).ToArray();
    var sortedTwice = sorted.OrderBy(x => x).ToArray();
    return sorted.SequenceEqual(sortedTwice);
}
```

**Special features:**
- FsCheck is the most widely used PBT library for .NET
- Originally developed for F#, but fully usable in C#
- Integration with xUnit, NUnit and MSTest via additional packages
- CsCheck is a pure C# alternative

**Further reading:**
- [FsCheck Documentation](https://fscheck.github.io/FsCheck/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Requires: RapidCheck library
#include <rapidcheck.h>
#include <algorithm>
#include <vector>

rc::check("Sort ist idempotent", [](std::vector<int> items) {
    auto sorted = items;
    std::sort(sorted.begin(), sorted.end());
    auto sortedTwice = sorted;
    std::sort(sortedTwice.begin(), sortedTwice.end());
    RC_ASSERT(sorted == sortedTwice);
});
```

**Special features:**
- RapidCheck is the most widely used PBT library for C++
- Uses C++11 features such as lambda expressions
- Automatic shrinking of failed inputs
- Integration with Google Test and Catch2 possible

**Further reading:**
- [RapidCheck GitHub](https://github.com/emil-e/rapidcheck)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Requires: glados package
import 'package:glados/glados.dart';

void main() {
  Glados<List<int>>(any.list(any.int)).test(
    'Sort ist idempotent', (items) {
      final sorted = List.of(items)..sort();
      final sortedTwice = List.of(sorted)..sort();
      expect(sorted, equals(sortedTwice));
    },
  );
}
```

**Special features:**
- `glados` is the best-known PBT library for Dart
- Provides generators for common types
- Automatic shrinking
- Integration with the Dart test framework

**Further reading:**
- [Glados - pub.dev](https://pub.dev/packages/glados)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Requires: stream_data dependency
use ExUnit.Case
use ExUnit.Properties

property "Sort ist idempotent" do
  check all items <- list_of(integer()) do
    sorted = Enum.sort(items)
    assert sorted == Enum.sort(sorted)
  end
end
```

**Special features:**
- `StreamData` is the official PBT library for Elixir
- Integration with ExUnit via `use ExUnit.Properties`
- Generators are composable and stream-based
- Automatic shrinking of failed inputs

**Further reading:**
- [StreamData Documentation](https://hexdocs.pm/stream_data/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
%% Requires: PropEr library
-include_lib("proper/include/proper.hrl").

prop_sort_idempotent() ->
    ?FORALL(Items, list(integer()),
        begin
            Sorted = lists:sort(Items),
            Sorted =:= lists:sort(Sorted)
        end).
```

**Special features:**
- PropEr is the most widely used open-source PBT library for Erlang
- QuickCheck (Quviq) is the commercial alternative and the original for Erlang
- `?FORALL` macro defines properties
- Erlang was one of the first languages with industrial PBT usage

**Further reading:**
- [PropEr Documentation](https://proper-testing.github.io/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Requires: FsCheck NuGet package
open FsCheck

let sortIsIdempotent (items: int list) =
    let sorted = List.sort items
    sorted = List.sort sorted

Check.QuickThrowOnFailure sortIsIdempotent
```

**Special features:**
- FsCheck is a mature PBT library written in F#
- Inspired by Haskell's QuickCheck
- Automatic generator derivation for F# types (including Discriminated Unions)
- Seamless integration with xUnit and NUnit

**Further reading:**
- [FsCheck Documentation](https://fscheck.github.io/FsCheck/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Requires: testing/quick (standard library)
import (
    "sort"
    "testing"
    "testing/quick"
)

func TestSortIdempotent(t *testing.T) {
    f := func(items []int) bool {
        sort.Ints(items)
        sorted := make([]int, len(items))
        copy(sorted, items)
        sort.Ints(items)
        return reflect.DeepEqual(sorted, items)
    }
    if err := quick.Check(f, nil); err != nil {
        t.Error(err)
    }
}
```

**Special features:**
- `testing/quick` is part of the Go standard library, but very limited
- Only generates random values for simple types
- No shrinking of failed inputs
- External alternatives: `gopter`, `rapid` offer more functionality

**Further reading:**
- [Go Documentation - testing/quick](https://pkg.go.dev/testing/quick)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Requires: jqwik (Java PBT framework)
@Property
void sortIsIdempotent(@ForAll List<Integer> items) {
    def sorted = items.sort(false)
    def sortedTwice = sorted.sort(false)
    assert sorted == sortedTwice
}
```

**Special features:**
- Groovy uses Java PBT libraries such as jqwik or QuickTheories
- Groovy's dynamic typing facilitates generator definition
- Spock framework does not provide native PBT support
- Integration via JUnit Platform

**Further reading:**
- [jqwik Documentation](https://jqwik.net/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: QuickCheck package
import Test.QuickCheck
import Data.List (sort)

prop_sortIdempotent :: [Int] -> Bool
prop_sortIdempotent items =
    sort items == sort (sort items)

main :: IO ()
main = quickCheck prop_sortIdempotent
```

**Special features:**
- QuickCheck is the **original form** of Property-Based Testing (published in 2000)
- `Arbitrary` type class enables automatic generator definition for custom types
- Automatic shrinking reduces counterexamples to minimal cases
- Almost all PBT libraries in other languages are inspired by QuickCheck

**Further reading:**
- [Hackage - QuickCheck](https://hackage.haskell.org/package/QuickCheck)

</TabItem>
<TabItem value="java" label="Java">

```java
// Requires: jqwik library
import net.jqwik.api.*;
import java.util.*;

class SortProperties {
    @Property
    boolean sortIsIdempotent(@ForAll List<Integer> items) {
        var sorted = items.stream().sorted().toList();
        var sortedTwice = sorted.stream().sorted().toList();
        return sorted.equals(sortedTwice);
    }
}
```

**Special features:**
- jqwik is the most modern PBT framework for Java
- `@Property` marks properties, `@ForAll` generates random values
- Automatic shrinking and composable generators
- Runs on the JUnit Platform

**Further reading:**
- [jqwik Documentation](https://jqwik.net/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Requires: fast-check library
import fc from 'fast-check';

fc.assert(
    fc.property(fc.array(fc.integer()), (items) => {
        const sorted = [...items].sort((a, b) => a - b);
        const sortedTwice = [...sorted].sort((a, b) => a - b);
        return JSON.stringify(sorted) === JSON.stringify(sortedTwice);
    })
);
```

**Special features:**
- fast-check is the most widely used PBT library for JavaScript
- Extensive built-in generators (Arbitraries)
- Automatic shrinking of failed inputs
- Integration with Jest, Mocha, Vitest and other frameworks

**Further reading:**
- [fast-check Documentation](https://fast-check.dev/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Requires: PropCheck.jl
using PropCheck

@check function sort_idempotent(items::Vector{Int})
    sorted = sort(items)
    sorted == sort(sorted)
end
```

**Special features:**
- `PropCheck.jl` is the best-known PBT library for Julia
- Integration with the `Test` standard module
- Generators for common Julia types
- Automatic shrinking

**Further reading:**
- [PropCheck.jl GitHub](https://github.com/Seelengrab/PropCheck.jl)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Requires: Kotest library
import io.kotest.property.forAll
import io.kotest.property.Arb
import io.kotest.property.arbitrary.list
import io.kotest.property.arbitrary.int

suspend fun main() {
    forAll(Arb.list(Arb.int())) { items ->
        val sorted = items.sorted()
        sorted == sorted.sorted()
    }
}
```

**Special features:**
- Kotest provides built-in PBT support
- Composable generators (`Arb`) for Kotlin types
- Automatic shrinking of failed inputs
- jqwik is also usable via the JUnit Platform

**Further reading:**
- [Kotest Property Testing](https://kotest.io/docs/proptest/property-based-testing.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: rapid library
import rapid

proc sortIdempotent(items: seq[int]): bool =
  let sorted = items.sorted()
  sorted == sorted.sorted()

# Manual approach with randomize
import std/random
randomize()
for i in 0..99:
  var items: seq[int]
  for j in 0..rand(20):
    items.add(rand(1000))
  assert items.sorted() == items.sorted().sorted()
```

**Special features:**
- PBT libraries for Nim exist, but are less widely used
- Manual randomized testing with `std/random` as an alternative
- `rapid` is a PBT library inspired by Go's `rapid`
- Nim community is smaller, therefore less mature PBT tools

**Further reading:**
- [Nim Documentation - random](https://nim-lang.org/docs/random.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Requires: qcheck or qcheck-core opam package *)
open QCheck

let sort_idempotent =
  Test.make ~name:"Sort ist idempotent"
    (list int) (fun items ->
      let sorted = List.sort compare items in
      sorted = List.sort compare sorted)

let () = QCheck_runner.run_tests_main [sort_idempotent]
```

**Special features:**
- QCheck is the most widely used PBT library for OCaml
- Inspired by Haskell's QuickCheck
- Automatic shrinking of failed inputs
- Integration with Alcotest and OUnit possible

**Further reading:**
- [QCheck on opam](https://ocaml.org/p/qcheck/latest)

</TabItem>
<TabItem value="purescript" label="PureScript">

```haskell
-- Requires: purescript-quickcheck
import Test.QuickCheck (quickCheck, (===))
import Data.Array (sort)

main :: Effect Unit
main = quickCheck \items ->
  sort (sort items) === sort (items :: Array Int)
```

**Special features:**
- `purescript-quickcheck` is directly inspired by Haskell's QuickCheck
- `Arbitrary` type class for automatic generator definition
- Automatic shrinking
- Integration with PureScript's effect system

**Further reading:**
- [purescript-quickcheck](https://pursuit.purescript.org/packages/purescript-quickcheck/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Requires: hypothesis library
from hypothesis import given
from hypothesis.strategies import lists, integers

@given(lists(integers()))
def test_sort_idempotent(items):
    sorted_items = sorted(items)
    assert sorted_items == sorted(sorted_items)
```

**Special features:**
- Hypothesis is the most widely used PBT library for Python
- `@given` decorator automatically generates test data
- Extensive strategies (generators) for Python types
- Stores failed examples in a database for reproducibility
- Automatic shrinking to minimal counterexamples

**Further reading:**
- [Hypothesis Documentation](https://hypothesis.readthedocs.io/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Requires: rackcheck package
(require rackcheck rackunit)

(define-property sort-idempotent
  ([items (gen:list gen:natural)])
  (check-equal? (sort items <)
                (sort (sort items <) <)))
```

**Special features:**
- `rackcheck` is the PBT library for Racket
- Integration with rackunit for assertions
- Composable generators (`gen:list`, `gen:natural` etc.)
- Automatic shrinking

**Further reading:**
- [rackcheck Documentation](https://docs.racket-lang.org/rackcheck/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Requires: rantly gem
require 'rantly/minitest_extensions'

class SortTest < Minitest::Test
  def test_sort_idempotent
    property_of {
      array { integer }
    }.check { |items|
      sorted = items.sort
      assert_equal sorted, sorted.sort
    }
  end
end
```

**Special features:**
- `rantly` is the best-known PBT library for Ruby
- Integration with Minitest and RSpec
- Simple generator DSL for Ruby types
- No automatic shrinking (can be implemented manually)

**Further reading:**
- [Rantly GitHub](https://github.com/rantly-rb/rantly)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Requires: proptest crate
use proptest::prelude::*;

proptest! {
    #[test]
    fn sort_idempotent(mut items: Vec<i32>) {
        items.sort();
        let sorted = items.clone();
        items.sort();
        prop_assert_eq!(sorted, items);
    }
}
```

**Special features:**
- `proptest` is the most widely used PBT library for Rust
- Strategy-based generator definition with `any::<T>()`
- Automatic shrinking of failed inputs
- `quickcheck` crate is an alternative, closer to the Haskell original

**Further reading:**
- [proptest Documentation](https://docs.rs/proptest/latest/proptest/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Requires: ScalaCheck library
import org.scalacheck.Properties
import org.scalacheck.Prop.forAll

object SortSpec extends Properties("Sort") {
  property("idempotent") = forAll { (items: List[Int]) =>
    val sorted = items.sorted
    sorted == sorted.sorted
  }
}
```

**Special features:**
- ScalaCheck is the standard library for PBT in Scala
- Inspired by Haskell's QuickCheck
- `Gen` monad for composable generators
- Automatic shrinking and integration with ScalaTest/MUnit

**Further reading:**
- [ScalaCheck Documentation](https://scalacheck.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Requires: swift-testing (since Swift 5.9)
import Testing

@Test(arguments: [
    [3, 1, 2],
    [5, 4, 3, 2, 1],
    [Int]()
])
func sortIdempotent(items: [Int]) {
    let sorted = items.sorted()
    #expect(sorted == sorted.sorted())
}

// Full PBT with SwiftCheck:
// import SwiftCheck
// property("Sort ist idempotent") <- forAll { (items: [Int]) in
//     items.sorted() == items.sorted().sorted()
// }
```

**Special features:**
- Swift Testing provides parameterized tests, but not full PBT
- `SwiftCheck` is a dedicated PBT library (inspired by QuickCheck)
- SwiftCheck provides `Arbitrary` protocol and automatic shrinking
- Swift Testing (`@Test(arguments:)`) is suitable for table-driven tests

**Further reading:**
- [SwiftCheck GitHub](https://github.com/typelift/SwiftCheck)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Requires: fast-check library
import fc from 'fast-check';

fc.assert(
    fc.property(fc.array(fc.integer()), (items) => {
        const sorted = [...items].sort((a, b) => a - b);
        const sortedTwice = [...sorted].sort((a, b) => a - b);
        return JSON.stringify(sorted) === JSON.stringify(sortedTwice);
    })
);
```

**Special features:**
- Identical to JavaScript – fast-check provides full TypeScript typing
- Generators are typed and provide IntelliSense support
- Supports generic types and complex data structures
- Integration with Jest, Vitest and other frameworks

**Further reading:**
- [fast-check Documentation](https://fast-check.dev/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' Requires: FsCheck NuGet package
<Property>
Public Function Sort_Is_Idempotent(items As Integer()) As Boolean
    Dim sorted = items.OrderBy(Function(x) x).ToArray()
    Dim sortedTwice = sorted.OrderBy(Function(x) x).ToArray()
    Return sorted.SequenceEqual(sortedTwice)
End Function
```

**Special features:**
- FsCheck is also usable from VB.NET (same .NET library)
- Less widely used than in C# or F#
- Identical functionality to the C# variant
- Integration via NUnit, xUnit or MSTest

**Further reading:**
- [FsCheck Documentation](https://fscheck.github.io/FsCheck/)

</TabItem>
</Tabs>

## 18.1.4. Test Annotations

Test annotations, attributes, or macros explicitly mark functions as tests and control their execution. They enable the test runner to automatically detect, filter, and annotate test functions with metadata.

### Languages

<Tabs availableTabs={['csharp', 'd', 'dart', 'elixir', 'erlang', 'go', 'groovy', 'java', 'julia', 'kotlin', 'nim', 'odin', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'v', 'vbnet', 'zig']} yellowTabs={['clojure', 'crystal', 'haskell', 'javascript', 'matlab', 'objective-c', 'octave', 'perl', 'prolog', 'racket', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
(ns myapp.core-test
  (:require [clojure.test :refer [deftest is testing]]))

;; deftest defines a named test
(deftest addition-test
  (is (= 4 (+ 2 2))))

;; testing groups assertions with description
(deftest math-test
  (testing "Addition"
    (is (= 4 (+ 2 2))))
  (testing "Subtraktion"
    (is (= 0 (- 2 2)))))
```

**Special features:**
- `deftest` is a macro that defines and registers a test
- No annotation in the classical sense – Clojure uses macros instead of metadata
- `testing` serves to group assertions within a test
- Tests are found via naming convention (namespace ends with `-test`)

**Further reading:**
- [Clojure Documentation - clojure.test](https://clojure.github.io/clojure/clojure.test-api.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
require "spec"

describe "Math" do
  it "addiert korrekt" do
    (2 + 2).should eq(4)
  end

  pending "noch nicht implementiert" do
    # Will be skipped
  end
end
```

**Special features:**
- Crystal uses `describe`/`it` blocks instead of annotations
- `pending` marks tests as skipped
- `before_each` and `after_each` for setup/teardown
- No annotation in the classical sense – BDD-style via macros

**Further reading:**
- [Crystal Documentation - Spec](https://crystal-lang.org/reference/1.11/guides/testing.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// MSTest
[TestClass]
public class MathTests
{
    [TestInitialize]
    public void Setup() { /* Before each test */ }

    [TestMethod]
    public void TestAddition() { Assert.AreEqual(4, 2 + 2); }

    [TestMethod]
    [Ignore("Noch nicht implementiert")]
    public void TestDivision() { }

    [DataTestMethod]
    [DataRow(1, 1, 2)]
    [DataRow(2, 3, 5)]
    public void TestAdd(int a, int b, int expected)
    {
        Assert.AreEqual(expected, a + b);
    }
}
```

**Special features:**
- `[TestMethod]` marks test methods, `[TestClass]` marks test classes
- `[Ignore]` skips tests with optional reason
- `[DataTestMethod]`/`[DataRow]` for parameterized tests
- `[TestInitialize]`/`[TestCleanup]` for setup/teardown
- xUnit uses `[Fact]`, `[Theory]`, `[InlineData]`; NUnit uses `[Test]`, `[TestCase]`

**Further reading:**
- [Microsoft Docs - MSTest Attributes](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

</TabItem>
<TabItem value="d" label="D">

```d
// unittest blocks as language feature
int add(int a, int b) {
    return a + b;
}

unittest {
    assert(add(2, 2) == 4);
    assert(add(0, 0) == 0);
}

// Named unit tests (since DMD 2.077)
@("Addition Test")
unittest {
    assert(add(1, 1) == 2);
}
```

**Special features:**
- `unittest` blocks are a language feature, not an annotation
- Named unit tests with `@("Name")` since DMD 2.077
- Tests are placed directly next to the code being tested
- `@safe`, `@nogc` and other attributes can be applied to `unittest`

**Further reading:**
- [D Documentation - Unit Tests](https://dlang.org/spec/unittest.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'package:test/test.dart';

void main() {
  test('Addition', () {
    expect(2 + 2, equals(4));
  });

  test('Division', skip: 'Noch nicht implementiert', () {
    // Will be skipped
  });

  group('Arithmetik', () {
    setUp(() { /* Before each test */ });
    tearDown(() { /* After each test */ });

    test('Subtraktion', () {
      expect(3 - 1, equals(2));
    });
  });
}
```

**Special features:**
- Dart uses function calls (`test`, `group`) instead of annotations
- `skip` parameter marks tests as skipped
- `setUp`/`tearDown` for setup/teardown per group
- `@isTest` and `@isTestGroup` annotations exist for custom test wrappers

**Further reading:**
- [Dart Documentation - Testing](https://dart.dev/guides/testing)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule MathTest do
  use ExUnit.Case

  setup do
    %{value: 42}
  end

  test "Addition" do
    assert 2 + 2 == 4
  end

  @tag :skip
  test "noch nicht implementiert" do
    # Will be skipped
  end

  @tag :slow
  test "langsamer Test", %{value: value} do
    assert value == 42
  end
end
```

**Special features:**
- `test` macro defines test cases
- `@tag` module attribute annotates tests with metadata
- `@tag :skip` skips tests, custom tags for filtering
- `setup` block provides context data for tests
- `describe` macro groups related tests

**Further reading:**
- [Elixir Documentation - ExUnit](https://hexdocs.pm/ex_unit/ExUnit.Case.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_test).
-include_lib("eunit/include/eunit.hrl").

%% Naming convention: _test() suffix
addition_test() ->
    ?assertEqual(4, 2 + 2).

%% Test generator for setup/teardown
math_test_() ->
    {setup,
     fun() -> ok end,           %% Setup
     fun(_) -> ok end,          %% Teardown
     [fun addition_test/0]}.
```

**Special features:**
- EUnit uses `_test()` suffix as naming convention instead of annotations
- `_test_()` suffix (with underscore at the end) for test generators
- Test generators enable setup/teardown and grouping
- `?_test` macro as alternative to naming convention

**Further reading:**
- [Erlang Documentation - EUnit](https://www.erlang.org/doc/apps/eunit/chapter.html)

</TabItem>
<TabItem value="go" label="Go">

```go
package math

import "testing"

// Naming convention: Test prefix
func TestAddition(t *testing.T) {
    if 2+2 != 4 {
        t.Error("Addition fehlgeschlagen")
    }
}

// Subtest
func TestMath(t *testing.T) {
    t.Run("Addition", func(t *testing.T) {
        if 2+2 != 4 {
            t.Fatal("Fehlgeschlagen")
        }
    })
}

func TestSkipped(t *testing.T) {
    t.Skip("Noch nicht implementiert")
}
```

**Special features:**
- Go uses `Test` prefix as naming convention instead of annotations
- `t.Skip()` skips tests, `t.Run()` defines subtests
- `Benchmark` prefix for benchmarks, `Fuzz` prefix for fuzzing (since Go 1.18)
- `TestMain` for global setup/teardown

**Further reading:**
- [Go Documentation - testing](https://pkg.go.dev/testing)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import org.junit.jupiter.api.*

class MathTests {
    @BeforeEach
    void setup() { /* Before each test */ }

    @Test
    void testAddition() {
        assert 2 + 2 == 4
    }

    @Test
    @Disabled("Noch nicht implementiert")
    void testDivision() { }

    @ParameterizedTest
    @ValueSource(ints = [1, 2, 3])
    void testPositive(int value) {
        assert value > 0
    }
}
```

**Special features:**
- Groovy uses JUnit annotations (JUnit 5 or JUnit 4)
- `@Test` marks test methods, `@Disabled` skips them
- `@BeforeEach`/`@AfterEach` for setup/teardown
- `@ParameterizedTest` with various sources for parameterized tests
- Spock framework uses its own DSL instead of annotations

**Further reading:**
- [Groovy Documentation - Testing](https://groovy-lang.org/testing.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: tasty and tasty-hunit
import Test.Tasty
import Test.Tasty.HUnit

tests :: TestTree
tests = testGroup "Math"
  [ testCase "Addition" $ 2 + 2 @?= 4
  , testCase "Subtraktion" $ 3 - 1 @?= 2
  ]

main :: IO ()
main = defaultMain tests
```

**Special features:**
- Haskell uses no annotations – tests are defined as values
- `testCase`, `testGroup` as constructors for test trees
- `Tasty` is the most widely used test framework with modular architecture
- HSpec provides a BDD-like DSL as an alternative

**Further reading:**
- [Tasty Documentation](https://hackage.haskell.org/package/tasty)

</TabItem>
<TabItem value="java" label="Java">

```java
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.*;
import org.junit.jupiter.params.provider.*;

class MathTests {
    @BeforeEach
    void setup() { /* Before each test */ }

    @Test
    void testAddition() { assertEquals(4, 2 + 2); }

    @Test
    @Disabled("Noch nicht implementiert")
    void testDivision() { }

    @ParameterizedTest
    @CsvSource({"1, 1, 2", "2, 3, 5"})
    void testAdd(int a, int b, int expected) {
        assertEquals(expected, a + b);
    }

    @RepeatedTest(5)
    void testRepeated() { assertTrue(Math.random() >= 0); }
}
```

**Special features:**
- `@Test` (JUnit 5) marks test methods
- `@Disabled` skips tests, `@Tag` groups them for filtering
- `@BeforeEach`/`@AfterEach` for setup/teardown, `@BeforeAll`/`@AfterAll` per class
- `@ParameterizedTest` with various sources (`@ValueSource`, `@CsvSource`, `@MethodSource`)
- `@RepeatedTest` runs a test multiple times
- JUnit 4 uses `@Before`/`@After`/`@Ignore` (older API)

**Further reading:**
- [JUnit 5 Documentation - Annotations](https://junit.org/junit5/docs/current/user-guide/#writing-tests-annotations)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';

describe('Math', () => {
    before(() => { /* One-time setup */ });
    after(() => { /* One-time teardown */ });

    it('addiert korrekt', () => {
        assert.strictEqual(2 + 2, 4);
    });

    it.skip('noch nicht implementiert', () => {
        // Will be skipped
    });

    it.todo('Division implementieren');
});
```

**Special features:**
- JavaScript uses function calls instead of annotations
- `it.skip()` skips tests, `it.todo()` marks pending tests
- `before`/`after`/`beforeEach`/`afterEach` for setup/teardown
- `describe` groups related tests
- Pattern is identical in Jest, Mocha, Vitest etc.

**Further reading:**
- [Node.js Documentation - Test Runner](https://nodejs.org/api/test.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Test

@testset "Math" begin
    @test 2 + 2 == 4
    @test 3 - 1 == 2

    @test_skip 1 / 0  # Test will be skipped

    @test_throws DomainError sqrt(-1)
end
```

**Special features:**
- `@test` marks individual assertions, `@testset` groups them
- `@test_skip` skips tests, `@test_throws` checks exceptions
- `@test_broken` marks known failing tests
- Macros instead of annotations – Julia-idiomatic approach

**Further reading:**
- [Julia Documentation - Test](https://docs.julialang.org/en/v1/stdlib/Test/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import kotlin.test.*

class MathTests {
    @BeforeTest
    fun setup() { /* Before each test */ }

    @Test
    fun testAddition() { assertEquals(4, 2 + 2) }

    @Test
    @Ignore
    fun testDivision() { /* Will be skipped */ }
}

// On JVM also JUnit 5 annotations usable:
// @ParameterizedTest, @ValueSource, @Disabled etc.
```

**Special features:**
- `@Test`, `@BeforeTest`, `@AfterTest` from `kotlin.test` (platform-independent)
- `@Ignore` skips tests
- On the JVM, all JUnit 5 annotations are additionally usable
- `kotlin.test` abstracts over JUnit (JVM), QUnit (JS) and native tests

**Further reading:**
- [Kotlin Documentation - kotlin.test](https://kotlinlang.org/api/latest/kotlin.test/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef MathTests < matlab.unittest.TestCase
    methods (TestMethodSetup)
        function setup(testCase)
            % Before each test
        end
    end

    methods (Test)
        function testAddition(testCase)
            testCase.verifyEqual(2 + 2, 4);
        end
    end

    methods (Test, TestTags = {'slow'})
        function testSlow(testCase)
            testCase.verifyTrue(true);
        end
    end
end
```

**Special features:**
- MATLAB uses `methods (Test)` blocks instead of individual annotations
- `TestTags` enable filtering during execution
- `TestMethodSetup`/`TestMethodTeardown` for setup/teardown
- `TestClassSetup`/`TestClassTeardown` for class-wide setup

**Further reading:**
- [MathWorks Documentation - Test Tags](https://www.mathworks.com/help/matlab/matlab_prog/tag-unit-tests.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
import unittest

suite "Math":
  setup:
    # Before each test
    discard

  teardown:
    # After each test
    discard

  test "Addition":
    check 2 + 2 == 4

  test "Subtraktion":
    skip()  # Test will be skipped
```

**Special features:**
- `suite` and `test` are macros, not annotations
- `setup`/`teardown` within a suite for setup/teardown
- `skip()` skips a test
- `check` and `require` as assert functions in test context

**Further reading:**
- [Nim Documentation - unittest](https://nim-lang.org/docs/unittest.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
@interface MathTests : XCTestCase
@end

@implementation MathTests

- (void)setUp {
    [super setUp];
    // Before each test
}

- (void)testAddition {
    XCTAssertEqual(2 + 2, 4);
}

- (void)testPerformanceExample {
    [self measureBlock:^{
        // Performance measurement
    }];
}

@end
```

**Special features:**
- XCTest uses `test` method prefix as convention instead of annotations
- `setUp`/`tearDown` for setup/teardown
- `measureBlock:` for performance tests
- Xcode automatically detects tests via reflection

**Further reading:**
- [Apple Documentation - XCTest](https://developer.apple.com/documentation/xctest)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
function result = add(a, b)
  result = a + b;
endfunction

%!test
%! assert(add(2, 2), 4);

%!test
%! assert(add(0, 0), 0);

%!xtest
%! % Known failing test
%! assert(1 == 2);
```

**Special features:**
- `%!test` marks test blocks directly in the source file
- `%!xtest` marks known failing tests (expected failure)
- `%!assert` for individual assertions without test block
- No classical annotations – embedded comment directives

**Further reading:**
- [GNU Octave Documentation - Test Functions](https://docs.octave.org/latest/Test-Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math_test

import "core:testing"

@(test)
test_addition :: proc(t: ^testing.T) {
    testing.expect_value(t, 2 + 2, 4)
}

@(test)
test_subtraction :: proc(t: ^testing.T) {
    testing.expect_value(t, 3 - 1, 2)
}
```

**Special features:**
- `@(test)` is a real language attribute for marking tests
- Test functions receive a `^testing.T` parameter
- Execution with `odin test`
- Odin has one of the cleanest attribute-based test systems

**Further reading:**
- [Odin Documentation - Testing](https://odin-lang.org/docs/overview/#testing)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
use Test::More tests => 3;

# No annotation system – tests are sequential calls
ok(2 + 2 == 4, 'Addition');
is(2 + 2, 4, 'Addition mit is');

SKIP: {
    skip "Noch nicht implementiert", 1;
    ok(0, 'Übersprungener Test');
}

done_testing();
```

**Special features:**
- Perl uses no annotations – TAP-based sequential tests
- `SKIP` block skips tests with reason
- `TODO` block marks expected failures
- Test files are found via naming convention (`t/*.t`)

**Further reading:**
- [Perl Documentation - Test::More](https://perldoc.perl.org/Test::More)

</TabItem>
<TabItem value="php" label="PHP">

```php
// PHPUnit
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\Attributes\DataProvider;

class MathTest extends TestCase
{
    protected function setUp(): void { /* Before each test */ }

    #[Test]
    public function addition(): void {
        $this->assertEquals(4, 2 + 2);
    }

    #[Test]
    #[DataProvider('additionProvider')]
    public function addParameterized(int $a, int $b, int $expected): void {
        $this->assertEquals($expected, $a + $b);
    }

    public static function additionProvider(): array {
        return [[1, 1, 2], [2, 3, 5]];
    }
}
```

**Special features:**
- PHPUnit 10+ uses PHP 8 attributes: `#[Test]`, `#[DataProvider]`, `#[Depends]`
- Older versions used `@test`, `@dataProvider` as doc-comment annotations
- `#[Test]` as alternative to `test` method prefix
- `setUp()`/`tearDown()` for setup/teardown
- `markTestSkipped()` and `markTestIncomplete()` control test execution

**Further reading:**
- [PHPUnit Documentation - Attributes](https://docs.phpunit.de/en/11.5/attributes.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
%% Requires: :- use_module(library(plunit)).
:- begin_tests(math).

test(addition) :-
    X is 2 + 2,
    assertion(X == 4).

test(division, [blocked('Noch nicht implementiert')]) :-
    true.

test(exception, [throws(error(type_error(_,_), _))]) :-
    _ is 1 + a.

test(with_setup, [setup(X = 42), cleanup(true)]) :-
    assertion(X > 0).

:- end_tests(math).
```

**Special features:**
- SWI-Prolog's `plunit` uses `test/1` and `test/2` with option list for test marking
- Options instead of annotations: `blocked(Reason)`, `fixme(Reason)`, `condition(Goal)`, `throws(Error)`
- `setup(Goal)` and `cleanup(Goal)` as options for setup/teardown per test
- `:- begin_tests(Name).` / `:- end_tests(Name).` group tests as directives
- No annotation system in the classical sense – Prolog uses terms as metadata

**Further reading:**
- [SWI-Prolog Documentation - PlUnit](https://www.swi-prolog.org/pldoc/doc_for?object=section(%27packages/plunit.html%27))

</TabItem>
<TabItem value="python" label="Python">

```python
import unittest
import pytest

# unittest: naming convention
class MathTest(unittest.TestCase):
    def setUp(self):
        pass  # Before each test

    def test_addition(self):
        self.assertEqual(2 + 2, 4)

    @unittest.skip("Noch nicht implementiert")
    def test_division(self):
        pass

# pytest: decorators
@pytest.mark.skip(reason="Noch nicht implementiert")
def test_skipped():
    pass

@pytest.mark.parametrize("a, b, expected", [(1, 1, 2), (2, 3, 5)])
def test_add(a, b, expected):
    assert a + b == expected
```

**Special features:**
- `unittest`: `@unittest.skip`, `@unittest.skipIf`, `@unittest.expectedFailure`
- `pytest`: `@pytest.mark.skip`, `@pytest.mark.parametrize`, `@pytest.mark.xfail`
- `pytest` uses functions with `test_` prefix and decorators
- `pytest.fixture` for setup/teardown with dependency injection

**Further reading:**
- [Python Documentation - unittest](https://docs.python.org/3/library/unittest.html)
- [pytest Documentation - Markers](https://docs.pytest.org/en/stable/how-to/mark.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(require rackunit)

(test-suite "Math"
  (test-case "Addition"
    (check-equal? (+ 2 2) 4))
  (test-case "Subtraktion"
    (check-equal? (- 3 1) 2)))

;; before/after for setup/teardown
(test-suite "Mit Setup"
  #:before (lambda () (displayln "Setup"))
  #:after (lambda () (displayln "Teardown"))
  (test-case "Test" (check-true #t)))
```

**Special features:**
- `test-case` and `test-suite` as function calls instead of annotations
- `#:before`/`#:after` for setup/teardown at suite level
- `around` for setup/teardown at test level
- Tests are executed with `raco test`

**Further reading:**
- [Racket Documentation - RackUnit](https://docs.racket-lang.org/rackunit/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require "minitest/autorun"

class MathTest < Minitest::Test
  def setup
    # Before each test
  end

  def test_addition
    assert_equal 4, 2 + 2
  end

  def test_skip_example
    skip "Noch nicht implementiert"
  end
end

# Spec-Style
describe "Math" do
  before { } # Before each test

  it "addiert korrekt" do
    _(2 + 2).must_equal 4
  end
end
```

**Special features:**
- Minitest: `test_` prefix as naming convention instead of annotations
- `setup`/`teardown` for setup/teardown
- `skip` within a test to skip it
- Spec-Style with `describe`/`it` as alternative

**Further reading:**
- [Ruby Documentation - Minitest](https://ruby-doc.org/stdlib/libdoc/minitest/rdoc/Minitest.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_addition() {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    #[ignore]
    fn test_slow() {
        // Will only be executed with `cargo test -- --ignored`
    }

    #[test]
    #[should_panic(expected = "Division by zero")]
    fn test_panic() {
        panic!("Division by zero");
    }
}
```

**Special features:**
- `#[test]` marks test functions
- `#[ignore]` skips tests (executable with `--ignored`)
- `#[should_panic]` expects a panic with optional message
- `#[cfg(test)]` marks modules that are only compiled during testing
- No built-in setup/teardown – custom helper functions or fixtures crates

**Further reading:**
- [Rust Documentation - Test Attributes](https://doc.rust-lang.org/reference/attributes/testing.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// MUnit
class MathSuite extends munit.FunSuite {
  override def beforeEach(context: BeforeEach): Unit = {
    // Before each test
  }

  test("Addition") { assertEquals(2 + 2, 4) }

  test("Division".ignore) { /* Will be skipped */ }

  test("Subtraktion".tag(Slow)) { assertEquals(3 - 1, 2) }
}
```

**Special features:**
- MUnit and ScalaTest use DSL methods instead of Java annotations
- `.ignore` skips tests, `.tag()` annotates with metadata
- `override def beforeEach`/`afterEach` for setup/teardown
- JUnit annotations (`@Test`) are also usable on the JVM

**Further reading:**
- [MUnit Documentation](https://scalameta.org/munit/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Testing

// Swift Testing (since Swift 5.9)
@Test func addition() {
    #expect(2 + 2 == 4)
}

@Test(.disabled("Noch nicht implementiert"))
func division() { }

@Test(.tags(.slow))
func slowTest() { #expect(true) }

@Suite struct MathTests {
    @Test(arguments: [1, 2, 3])
    func positive(value: Int) {
        #expect(value > 0)
    }
}
```

**Special features:**
- `@Test` marks test functions, `@Suite` marks test suites (Swift Testing)
- `.disabled()` skips tests, `.tags()` annotates with metadata
- `@Test(arguments:)` for parameterized tests
- XCTest (older API): `test` method prefix, `setUp()`/`tearDown()`

**Further reading:**
- [Apple Documentation - Swift Testing](https://developer.apple.com/documentation/testing)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';

describe('Math', () => {
    before(() => { /* One-time setup */ });
    after(() => { /* One-time teardown */ });

    it('addiert korrekt', () => {
        assert.strictEqual(2 + 2, 4);
    });

    it.skip('noch nicht implementiert', () => {
        // Will be skipped
    });

    it.todo('Division implementieren');
});
```

**Special features:**
- Identical to JavaScript – uses function calls instead of annotations
- `it.skip()` skips tests, `it.todo()` marks pending tests
- In practice: Jest/Vitest provide identical API
- TypeScript-specific: Typed mocks and assertions via external libraries

**Further reading:**
- [Node.js Documentation - Test Runner](https://nodejs.org/api/test.html)

</TabItem>
<TabItem value="v" label="V">

```v
fn test_addition() {
    assert 2 + 2 == 4
}

fn test_subtraction() {
    assert 3 - 1 == 2
}
```

**Special features:**
- V uses `test_` prefix as naming convention instead of annotations
- Test files end with `_test.v`
- No skip/ignore annotation – tests are either present or not
- No built-in setup/teardown system

**Further reading:**
- [V Documentation - Testing](https://github.com/vlang/v/blob/master/doc/docs.md#testing)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' MSTest
<TestClass>
Public Class MathTests
    <TestInitialize>
    Public Sub Setup()
        ' Before each test
    End Sub

    <TestMethod>
    Public Sub TestAddition()
        Assert.AreEqual(4, 2 + 2)
    End Sub

    <TestMethod>
    <Ignore("Noch nicht implementiert")>
    Public Sub TestDivision()
    End Sub

    <DataTestMethod>
    <DataRow(1, 1, 2)>
    <DataRow(2, 3, 5)>
    Public Sub TestAdd(a As Integer, b As Integer, expected As Integer)
        Assert.AreEqual(expected, a + b)
    End Sub
End Class
```

**Special features:**
- Identical to C# – MSTest attributes in VB.NET syntax with `< >`
- `<TestMethod>`, `<Ignore>`, `<DataTestMethod>`, `<DataRow>`
- `<TestInitialize>`/`<TestCleanup>` for setup/teardown
- xUnit and NUnit are also available

**Further reading:**
- [Microsoft Docs - MSTest](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

test "Addition" {
    try std.testing.expectEqual(@as(i32, 4), 2 + 2);
}

test "Subtraktion" {
    try std.testing.expectEqual(@as(i32, 2), 3 - 1);
}

// Tests can be skipped by return error
test "übersprungen" {
    return error.SkipZigTest;
}
```

**Special features:**
- `test` blocks are a language feature, not an annotation
- No skip attribute – skipping via `return error.SkipZigTest`
- Tests can be named with string literal
- No built-in setup/teardown – but `defer` and `errdefer` as alternative

**Further reading:**
- [Zig Documentation - Testing](https://ziglang.org/documentation/master/#Zig-Test)

</TabItem>
</Tabs>

