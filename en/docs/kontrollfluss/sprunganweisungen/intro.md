---
slug: /kontrollfluss/sprunganweisungen
title: 6.4. Jump Statements
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 6.4. Jump Statements

Control flow through jumps and exceptions.

## 6.4.1. Return Statements

Statements that terminate the execution of a function and optionally return a value. Allow functions to be terminated early and return results to the caller.

### Languages {#languages}

<Tabs availableTabs={['ada', 'c', 'carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fortran', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Return Statement
function add(a, b: Integer) return Integer is
begin
    return a + b;
end add;
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type

**Further reading:**
- [Ada Reference Manual - Return Statement](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Return Statement
int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- `return;` for void functions

**Further reading:**
- [C Standard - Return statement](https://en.cppreference.com/w/c/language/return)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Return Statement
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Return Statement
int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- `return;` for void functions

**Further reading:**
- [cppreference.com - Return statement](https://en.cppreference.com/w/cpp/language/return)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Return Statement
def add(a : Int32, b : Int32) : Int32
  return a + b
end
```

**Special features:**
- `return` terminates the function
- Last expression is implicit return (optional)

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Return Statement
int Add(int a, int b) {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- `return;` for void functions

**Further reading:**
- [Microsoft C# Documentation - return statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-return-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Return Statement
int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- `return;` for void functions

**Further reading:**
- [D Language Specification - Return Statement](https://dlang.org/spec/statement.html#return_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Return Statement
int add(int a, int b) {
  return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- `return;` for void functions

**Further reading:**
- [Dart Language Tour - Return values](https://dart.dev/guides/language/language-tour#return-values)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Return Statement
add(a, b: INTEGER): INTEGER is
    do
        Result := a + b
    end
```

**Special features:**
- Uses `Result` for the return value
- No explicit `return` statement

**Further reading:**
- [Eiffel Documentation - Functions](https://www.eiffel.org/doc/eiffel/Functions)

</TabItem>
<TabItem value="go" label="Go">

```go
// Return Statement
func add(a, b int) int {
    return a + b
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- Supports named returns

**Further reading:**
- [Go Documentation - Return statements](https://go.dev/ref/spec#Return_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Return Statement
def add(a, b) {
    return a + b
}
```

**Special features:**
- `return` terminates the function
- Last expression is implicit return (optional)

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/syntax.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Return Statement
function add(a: Int, b: Int): Int {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Return Statement
int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- `return;` for void methods

**Further reading:**
- [Oracle Java Documentation - return Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Return Statement
function add(a, b) {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Optional: If no value is returned, the return value is `undefined`

**Further reading:**
- [MDN Web Docs - return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Return Statement
function add(a, b)
    return a + b
end
```

**Special features:**
- `return` terminates the function
- Last expression is implicit return (optional)

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Return Statement (implizit)
fun add(a: int, b: int): int
  a + b  // Last expression is the return value

// Explicit return is rarely needed
fun max-value(a: int, b: int): int
  if a > b then a else b
```

**Special features:**
- The last expression of a function is the implicit return value
- No explicit `return` needed (expression-based)
- `if`/`then`/`else` directly returns a value

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Return Statement
fun add(a: Int, b: Int): Int {
    return a + b
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- Last expression is implicit return with expression bodies

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Return Statement (implicit – last expression)
def add (a b : Nat) : Nat :=
  a + b

-- Return Statement in do-notation
def greetAndAdd (a b : Nat) : IO Nat := do
  IO.println "Calculating..."
  return a + b
```

**Special features:**
- Pure functions use the last expression as implicit return value
- `return` is only available in `do` blocks (monadic context)
- `:=` defines the function body as an expression
- No explicit `return` keyword needed in pure functions

**Further reading:**
- [Lean 4 Documentation - Defining Functions](https://lean-lang.org/lean4/doc/functions.html)
- [Lean 4 Documentation - do-notation](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Return Statement
function add(a, b)
    return a + b
end
```

**Special features:**
- `return` terminates the function
- Can return multiple values: `return a, b`

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Return Statement
function result = add(a, b)
    result = a + b;
end
```

**Special features:**
- Return value is set by assignment to the output variable
- `return` keyword exists for explicitly leaving the function (Early Return)
- Function automatically returns at the end

**Further reading:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Return Statement (implicit – last expression)
:- func add(int, int) = int.
add(A, B) = A + B.

% Predicate style with output parameters
:- pred add(int::in, int::in, int::out) is det.
add(A, B, A + B).
```

**Special features:**
- Mercury has no explicit `return` keyword
- Functions return the value of the expression on the right side
- Predicates use output parameters instead of return values
- The compiler ensures through the determinism system that a value is produced

**Further reading:**
- [Mercury Language Reference - Functions](https://www.mercurylang.org/information/doc-release/mercury_ref/Functions.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Return Statement
def add(a: Int, b: Int) -> Int:
    return a + b
```

**Special features:**
- Python-like syntax
- `return` terminates the function

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Return Statement
proc add(a, b: int): int =
    return a + b
```

**Special features:**
- `return` terminates the function
- Last expression is implicit return (optional)

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Return Statement
- (int)add:(int)a andB:(int)b {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type
- `return;` for void methods

**Further reading:**
- [Apple Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Return Statement
function add(a, b: Integer): Integer;
begin
    Result := a + b;
end;
```

**Special features:**
- Uses `Result` for the return value
- No explicit `return` statement

**Further reading:**
- [Free Pascal Documentation - Functions](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Return Statement *)
let add a b = a + b
```

**Special features:**
- OCaml has no explicit `return` statement
- Last expression is implicit return

**Further reading:**
- [OCaml Documentation - Functions](https://v2.ocaml.org/manual/expr.html#s:function-definitions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Return Statement
function result = add(a, b)
    result = a + b;
endfunction
```

**Special features:**
- Uses assignment to function name for return value
- No explicit `return` statement

**Further reading:**
- [GNU Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Return Statement
add :: proc(a, b: i32) -> i32 {
    return a + b
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Return Statement
sub add {
    my ($a, $b) = @_;
    return $a + $b;
}
```

**Special features:**
- `return` terminates the function
- Optional: If no value is returned, the return value is the last expression

**Further reading:**
- [Perl Documentation - Subroutines](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Return Statement
function add($a, $b) {
    return $a + $b;
}
```

**Special features:**
- `return` terminates the function
- Optional: If no value is returned, the return value is `null`

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Return Statement
def add(a, b):
    return a + b
```

**Special features:**
- `return` terminates the function
- Optional: If no value is returned, the return value is `None`
- Can return multiple values: `return a, b`

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
# Return Statement
add <- function(a, b) {
    return(a + b)
}
```

**Special features:**
- `return()` terminates the function
- Last expression is implicit return (optional)

**Further reading:**
- [R Documentation - Functions](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/function)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Return Statement
def add(a, b)
    return a + b
end
```

**Special features:**
- `return` terminates the function
- Last expression is implicit return (optional)

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/3.2/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Return Statement
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Last expression is implicit return (optional, without semicolon)

**Further reading:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Return Statement
def add(a: Int, b: Int): Int = {
    return a + b
}
```

**Special features:**
- `return` terminates the function
- Last expression is implicit return (optional)

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Return Statement
func add(a: Int, b: Int) -> Int {
    return a + b
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Return Statement
function add(a: number, b: number): number {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Optional: If no value is returned, the return value is `undefined`

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Return Statement
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function
```

**Special features:**
- `Return` terminates the function
- Must return a value if the function has a return type

**Further reading:**
- [Microsoft VB.NET Documentation - Return Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/return-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Return Statement
fn add(a int, b int) int {
    return a + b
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Return Statement
fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

**Special features:**
- `return` terminates the function
- Must return a value if the function has a return type

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Return-from (from named block / function)
(defun find-first-even (numbers)
  (dolist (n numbers)
    (when (evenp n)
      (return-from find-first-even n)))
  nil)

;; Return (from nil block, e.g. loop/dolist)
(dolist (n '(1 3 5 4 7))
  (when (evenp n)
    (return n)))  ; Returns 4
```

**Special features:**
- `return-from` returns from a named block (each `defun` creates a block with the function name)
- `return` is shorthand for `(return-from nil ...)` - returns from the next `nil` block
- Without explicit `return`, the value of the last expression is returned

**Further reading:**
- [Common Lisp HyperSpec - return-from](http://www.lispworks.com/documentation/HyperSpec/Body/s_ret_fr.htm)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! RETURN Statement
subroutine greet(name)
    character(len=*), intent(in) :: name
    print *, "Hello, ", name
    return
end subroutine

function double(x) result(res)
    integer, intent(in) :: x
    integer :: res
    res = x * 2
    return
end function
```

**Special features:**
- `RETURN` terminates the execution of a subroutine/function
- In functions, the value is returned via the result variable
- `RETURN` is optional at the end of a procedure

**Further reading:**
- [Fortran Standard - RETURN Statement](https://gcc.gnu.org/onlinedocs/gfortran/RETURN.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Add(a, b: Integer): Integer;
begin
  Result := a + b;  // Set return value
end;

function FindPositive(a, b: Integer): Integer;
begin
  if a > 0 then
    Exit(a);     // Immediate return with value
  if b > 0 then
    Exit(b);
  Result := -1;
end;
```

**Special features:**
- `Result` is an implicit variable for the return value
- `Exit` terminates the function immediately
- `Exit(value)` sets the return value and terminates the function

**Further reading:**
- [Free Pascal Documentation - Exit](https://www.freepascal.org/docs-html/ref/refsu57.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
f[x_] := Module[{},
    If[x < 0, Return["Negative"]];
    x^2
]

f[-1]  (* "Negative" *)
f[5]   (* 25 *)
```

**Special features:**
- `Return[expr]` returns a value from a function
- In practice, Return is rarely used, as the last expression is automatically returned

**Further reading:**
- [Wolfram Language Documentation - Return](https://reference.wolfram.com/language/ref/Return.html)

</TabItem>
</Tabs>


## 6.4.2. Early Return

Programming pattern where return statements are used early in a function to handle error cases or edge conditions. Reduces nesting and improves readability through early handling of edge cases.

### Languages {#languages}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fortran', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Early Return
function process_value(value: Integer) return String is
begin
    if value < 0 then
        return "Invalid";
    end if;
    
    if value = 0 then
        return "Zero";
    end if;
    
    return "Valid";
end process_value;
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Ada Reference Manual - Return Statement](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Early Return
const char* process_value(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [C Standard - Return statement](https://en.cppreference.com/w/c/language/return)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Early Return
fn process_value(value: i32) -> String {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Experimental language, syntax may still change
- Early returns are implemented with `return`

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Early Return
std::string process_value(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [cppreference.com - Return statement](https://en.cppreference.com/w/cpp/language/return)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Early Return
def process_value(value : Int32) : String
        return "Invalid" if value < 0
        return "Zero" if value == 0
  
  "Valid"
end
```

**Special features:**
- Early returns are implemented with `return`
- Also supports postfix-if syntax: `return "Invalid" if value < 0`

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Early Return
string ProcessValue(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Microsoft C# Documentation - return statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-return-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Early Return
string processValue(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [D Language Specification - Return Statement](https://dlang.org/spec/statement.html#return_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Early Return
String processValue(int value) {
  if (value < 0) {
    return "Invalid";
  }
  
  if (value == 0) {
    return "Zero";
  }
  
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Dart Language Tour - Return values](https://dart.dev/guides/language/language-tour#return-values)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Early Return
process_value(value: INTEGER): STRING is
    do
        if value < 0 then
            Result := "Invalid"
            return
        end
        
        if value = 0 then
            Result := "Zero"
            return
        end
        
        Result := "Valid"
    end
```

**Special features:**
- Early returns are implemented with `return`
- Uses `Result` for the return value

**Further reading:**
- [Eiffel Documentation - Functions](https://www.eiffel.org/doc/eiffel/Functions)

</TabItem>
<TabItem value="go" label="Go">

```go
// Early Return
func processValue(value int) string {
    if value < 0 {
        return "Invalid"
    }
    
    if value == 0 {
        return "Zero"
    }
    
    return "Valid"
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability
- Very commonly used in Go code

**Further reading:**
- [Go Documentation - Return statements](https://go.dev/ref/spec#Return_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Early Return
def processValue(value) {
    if (value < 0) {
        return "Invalid"
    }
    
    if (value == 0) {
        return "Zero"
    }
    
    return "Valid"
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/syntax.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Early Return
function processValue(value: Int): String {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Early Return
String processValue(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Oracle Java Documentation - return Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Early Return
function processValue(value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [MDN Web Docs - return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Early Return
function process_value(value)
    if value < 0
        return "Invalid"
    end
    
    if value == 0
        return "Zero"
    end
    
    return "Valid"
end
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Early Return (Expression-based)
fun process-value(value: int): string
  if value < 0 then return "Invalid"
  if value == 0 then return "Zero"
  "Valid"  // Implicit return
```

**Special features:**
- `return` can be used for early returns
- Koka is expression-based, so `return` is rarely needed
- Pattern matching with `match` is often the more idiomatic alternative

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Early Return
fun processValue(value: Int): String {
    if (value < 0) {
        return "Invalid"
    }
    
    if (value == 0) {
        return "Zero"
    }
    
    return "Valid"
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Early Return (Expression-based)
def processValue (value : Int) : String :=
  if value < 0 then
    "Invalid"
  else if value == 0 then
    "Zero"
  else
    "Valid"

-- Early Return with do-notation
def processValueIO (value : Int) : IO String := do
  if value < 0 then
    return "Invalid"
  if value == 0 then
    return "Zero"
    return "Valid"
```

**Special features:**
- Pure functions use nested `if` expressions (no explicit `return`)
- In `do` blocks, `return` can be used for early returns
- Early return in `do` notation terminates the current `do` block
- Expression-based style is more idiomatic in Lean 4

**Further reading:**
- [Lean 4 Documentation - If-then-else](https://lean-lang.org/lean4/doc/control.html#if-then-else)
- [Lean 4 Documentation - do-notation](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Early Return
function process_value(value)
    if value < 0 then
        return "Invalid"
    end
    
    if value == 0 then
        return "Zero"
    end
    
    return "Valid"
end
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Early Return
function result = process_value(value)
    if value < 0
        result = "Invalid";
        return
    end
    
    if value == 0
        result = "Zero";
        return
    end
    
    result = "Valid";
end
```

**Special features:**
- Early returns are implemented with `return`
- Uses assignment to function name for return value

**Further reading:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Early Return
def process_value(value: Int) -> String:
    if value < 0:
        return "Invalid"
    
    if value == 0:
        return "Zero"
    
    return "Valid"
```

**Special features:**
- Python-like syntax
- Early returns are implemented with `return`

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Early Return
proc processValue(value: int): string =
    if value < 0:
        return "Invalid"
    
    if value == 0:
        return "Zero"
    
    return "Valid"
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Early Return
- (NSString *)processValue:(int)value {
    if (value < 0) {
        return @"Invalid";
    }
    
    if (value == 0) {
        return @"Zero";
    }
    
    return @"Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Apple Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Early Return
function processValue(value: Integer): String;
begin
    if value < 0 then
        Exit("Invalid");
    
    if value = 0 then
        Exit("Zero");
    
    Result := "Valid";
end;
```

**Special features:**
- Early returns are implemented with `Exit`
- Uses `Exit` for early returns with value

**Further reading:**
- [Free Pascal Documentation - Functions](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Early Return *)
let process_value value =
    if value < 0 then
        "Invalid"
    else if value = 0 then
        "Zero"
    else
        "Valid"
```

**Special features:**
- OCaml uses if-expressions, so early returns are implemented as early if branches
- Functional style without explicit returns

**Further reading:**
- [OCaml Documentation - Functions](https://v2.ocaml.org/manual/expr.html#s:function-definitions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Early Return
function result = process_value(value)
    if value < 0
        result = "Invalid";
        return
    endif
    
    if value == 0
        result = "Zero";
        return
    endif
    
    result = "Valid";
endfunction
```

**Special features:**
- Early returns are implemented with `return`
- Uses assignment to function name for return value

**Further reading:**
- [GNU Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Early Return
process_value :: proc(value: i32) -> string {
    if value < 0 {
        return "Invalid"
    }
    
    if value == 0 {
        return "Zero"
    }
    
    return "Valid"
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Early Return
sub process_value {
    my ($value) = @_;
    
    return "Invalid" if $value < 0;
    return "Zero" if $value == 0;
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Also supports postfix-if syntax: `return "Invalid" if $value < 0`

**Further reading:**
- [Perl Documentation - Subroutines](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Early Return
function processValue($value) {
    if ($value < 0) {
        return "Invalid";
    }
    
    if ($value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Early Return
def process_value(value):
    if value < 0:
        return "Invalid"
    
    if value == 0:
        return "Zero"
    
    return "Valid"
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
# Early Return
process_value <- function(value) {
    if (value < 0) {
        return("Invalid")
    }
    
    if (value == 0) {
        return("Zero")
    }
    
    return("Valid")
}
```

**Special features:**
- Early returns are implemented with `return()`
- Reduces nesting and improves readability

**Further reading:**
- [R Documentation - Functions](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/function)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Early Return
def process_value(value)
        return "Invalid" if value < 0
        return "Zero" if value == 0
    
    "Valid"
end
```

**Special features:**
- Early returns are implemented with `return`
- Also supports postfix-if syntax: `return "Invalid" if value < 0`

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/3.2/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Early Return
fn process_value(value: i32) -> &'static str {
    if value < 0 {
        return "Invalid";
    }
    
    if value == 0 {
        return "Zero";
    }
    
    "Valid"
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability
- Last expression is implicit return

**Further reading:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Early Return
def processValue(value: Int): String = {
    if (value < 0) {
        return "Invalid"
    }
    
    if (value == 0) {
        return "Zero"
    }
    
    "Valid"
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Early Return
func processValue(value: Int) -> String {
    if value < 0 {
        return "Invalid"
    }
    
    if value == 0 {
        return "Zero"
    }
    
    return "Valid"
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Early Return
function processValue(value: number): string {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value === 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Early Return
Function ProcessValue(value As Integer) As String
    If value < 0 Then
        Return "Invalid"
    End If
    
    If value = 0 Then
        Return "Zero"
    End If
    
    Return "Valid"
End Function
```

**Special features:**
- Early returns are implemented with `Return`
- Reduces nesting and improves readability

**Further reading:**
- [Microsoft VB.NET Documentation - Return Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/return-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Early Return
fn process_value(value int) string {
    if value < 0 {
        return "Invalid"
    }
    
    if value == 0 {
        return "Zero"
    }
    
    return "Valid"
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Early Return
fn processValue(value: i32) []const u8 {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Early returns are implemented with `return`
- Reduces nesting and improves readability

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Early Return
function safe_divide(a, b) result(res)
    real, intent(in) :: a, b
    real :: res

    if (b == 0.0) then
        res = 0.0
        return  ! Early Return
    end if

    res = a / b
end function
```

**Special features:**
- `RETURN` can be used at any point
- Enables early termination of a procedure
- Result variable must be set before `RETURN`

**Further reading:**
- [Fortran Standard - RETURN Statement](https://gcc.gnu.org/onlinedocs/gfortran/RETURN.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Divide(a, b: Double): Double;
begin
  if b = 0 then
    Exit(0);  // Early Return for division by zero
  Result := a / b;
end;

procedure ProcessList(count: Integer);
begin
  if count <= 0 then
    Exit;  // Early Return for procedures (without value)
  // Processing...
end;
```

**Special features:**
- `Exit` for immediate return from functions/procedures
- `Exit(value)` for functions with return value
- `Exit` without parameter for procedures

**Further reading:**
- [Free Pascal Documentation - Exit](https://www.freepascal.org/docs-html/ref/refsu57.html)

</TabItem>
</Tabs>


## 6.4.3. Goto Statements

Unconditional jump statements that allow program execution to jump to a labeled location in the code. Enable direct control flow manipulation but are often avoided in modern languages.

### Languages {#languages}

<Tabs availableTabs={['ada', 'c', 'common-lisp', 'cpp', 'csharp', 'd', 'fortran', 'go', 'lua', 'objective-c', 'object-pascal', 'perl', 'php']} orangeTabs={['python']}>
<TabItem value="ada" label="Ada">

```ada
-- Goto Statement
declare
    i : Integer := 0;
begin
    loop
        i := i + 1;
        if i > 5 then
            goto end_loop;
        end if;
        Put_Line(Integer'Image(i));
    end loop;
    <<end_loop>>
end;
```

**Special features:**
- Uses `goto label;` for jumps
- Labels are defined with `<<label>>`
- Restricted use (only within the same subroutine)

**Further reading:**
- [Ada Reference Manual - Goto Statement](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5) {
        goto loop_end;
    }
    printf("%d\n", i);
    goto loop_start;
loop_end:
```

**Special features:**
- Uses `goto label;` for jumps
- Labels are defined with `label:`
- Can lead to spaghetti code

**Further reading:**
- [C Standard - goto statement](https://en.cppreference.com/w/c/language/goto)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5) {
        goto loop_end;
    }
    std::cout << i << std::endl;
    goto loop_start;
loop_end:
```

**Special features:**
- Uses `goto label;` for jumps
- Labels are defined with `label:`
- Can lead to spaghetti code
- Avoided in modern C++ code

**Further reading:**
- [cppreference.com - goto statement](https://en.cppreference.com/w/cpp/language/goto)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5)
    {
        goto loop_end;
    }
    Console.WriteLine(i);
    goto loop_start;
loop_end:

// Goto in Switch
switch (value)
{
    case 1:
        Console.WriteLine("Eins");
        goto case 2;  // Jumps to case 2
    case 2:
        Console.WriteLine("Zwei");
        goto default;  // Jumps to default
    default:
        Console.WriteLine("Default");
        break;
}
```

**Special features:**
- Uses `goto label;` for jumps to labels
- `goto case value;` and `goto default;` in switch statements
- Labels are defined with `label:`

**Further reading:**
- [Microsoft C# Documentation - goto statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-goto-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5) {
        goto loop_end;
    }
    writeln(i);
    goto loop_start;
loop_end:
```

**Special features:**
- Uses `goto label;` for jumps
- Labels are defined with `label:`
- Can lead to spaghetti code

**Further reading:**
- [D Language Specification - Goto Statement](https://dlang.org/spec/statement.html#goto_statement)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Goto Statement
integer :: i
i = 0
10 continue
    i = i + 1
    if (i > 5) goto 20
    print *, i
    goto 10
20 continue
```

**Special features:**
- Uses `goto label` for jumps
- Labels are numeric (e.g., `10`, `20`)
- Very common in older Fortran code

**Further reading:**
- [Fortran Standard - GOTO Statement](https://gcc.gnu.org/onlinedocs/gfortran/GOTO-statement.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Goto Statement
i := 0
loopStart:
    i++
    if i > 5 {
        goto loopEnd
    }
    fmt.Println(i)
    goto loopStart
loopEnd:
```

**Special features:**
- Uses `goto label` for jumps
- Labels are defined with `label:`
- Restricted use (only within the same function)

**Further reading:**
- [Go Documentation - Goto statements](https://go.dev/ref/spec#Goto_statements)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Goto Statement (since Lua 5.2)
local i = 0
::loop_start::
    i = i + 1
    if i > 5 then
        goto loop_end
    end
    print(i)
    goto loop_start
::loop_end::
```

**Special features:**
- Introduced in Lua 5.2
- Uses `goto label` for jumps
- Labels are defined with `::label::`

**Further reading:**
- [Lua Documentation - Goto](https://www.lua.org/manual/5.4/manual.html#3.3.4)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5) {
        goto loop_end;
    }
    NSLog(@"%d", i);
    goto loop_start;
loop_end:
```

**Special features:**
- Uses `goto label;` for jumps
- Labels are defined with `label:`
- Can lead to spaghetti code

**Further reading:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Goto Statement
var i: Integer;
label loop_start, loop_end;
begin
    i := 0;
    loop_start:
        Inc(i);
        if i > 5 then
            goto loop_end;
        WriteLn(i);
        goto loop_start;
    loop_end:
end;
```

**Special features:**
- Uses `goto label;` for jumps
- Labels must be declared with `label`
- Labels are defined with `label:`

**Further reading:**
- [Free Pascal Documentation - Goto Statement](https://www.freepascal.org/docs-html/ref/refse24.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Goto Statement
my $i = 0;
LOOP_START:
    $i++;
    if ($i > 5) {
        goto LOOP_END;
    }
    print "$i\n";
    goto LOOP_START;
LOOP_END:
```

**Special features:**
- Uses `goto LABEL;` for jumps
- Labels are defined with `LABEL:`
- Also supports `goto &subroutine` for subroutine calls

**Further reading:**
- [Perl Documentation - Goto](https://perldoc.perl.org/functions/goto)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Goto Statement (since PHP 5.3)
$i = 0;
loop_start:
    $i++;
    if ($i > 5) {
        goto loop_end;
    }
    echo $i . "\n";
    goto loop_start;
loop_end:
```

**Special features:**
- Introduced in PHP 5.3
- Uses `goto label;` for jumps
- Labels are defined with `label:`

**Further reading:**
- [PHP Documentation - goto](https://www.php.net/manual/en/control-structures.goto.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Goto Statement (not directly supported)
# Python does not support goto
# Emulated with exceptions or other patterns
```

**Special features:**
- Python does not support `goto` statement
- Typically emulated with other patterns

**Further reading:**
- [Python Documentation - Control Flow](https://docs.python.org/3/tutorial/controlflow.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Goto with tagbody/go
(tagbody
  (setq i 0)
 start
  (when (>= i 5) (go end))
  (format t "~a~%" i)
  (incf i)
  (go start)
 end)
```

**Special features:**
- `tagbody` creates a block with named tags
- `go` jumps to a tag within the surrounding `tagbody`
- Only forward and backward jumps within the same `tagbody` are allowed
- Rarely used directly - `loop` and `do` use `tagbody` internally

**Further reading:**
- [Common Lisp HyperSpec - tagbody](http://www.lispworks.com/documentation/HyperSpec/Body/s_tagbod.htm)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
label done;
var
  i: Integer;
begin
  for i := 0 to 100 do
  begin
    if i = 5 then
      goto done;
    WriteLn(i);
  end;
  done:
    WriteLn('Fertig');
end;
```

**Special features:**
- `label` declaration required
- `goto label` jumps to the label
- Use is generally not recommended

**Further reading:**
- [Free Pascal Documentation - Goto](https://www.freepascal.org/docs-html/ref/refsu56.html)

</TabItem>
</Tabs>


## 6.4.4. Continuations

Mechanisms for explicit control of future program flow. Continuations represent the "rest of the program" from a certain point and allow control flow to be controlled in a non-local way.

### Languages {#languages}

<Tabs availableTabs={['racket', 'scheme']} yellowTabs={['common-lisp']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Limited continuations via catch/throw
(catch 'exit
  (format t "Before throw~%")
  (throw 'exit "Ergebnis")
  (format t "After throw~%"))  ; Never reached
;; Returns "Ergebnis"

;; Non-local exit via block/return-from
(block escape
  (mapcar (lambda (x)
            (when (= x 3)
              (return-from escape "Gefunden!")))
          '(1 2 3 4 5)))
;; Returns "Gefunden!"
```

**Special features:**
- Common Lisp has NO true first-class continuations like Scheme (`call/cc`)
- `catch`/`throw` for dynamic non-local exits (tag-based)
- `block`/`return-from` for lexical non-local exits
- Some implementations provide continuations via libraries (e.g., cl-cont)

**Further reading:**
- [Common Lisp HyperSpec - catch](http://www.lispworks.com/documentation/HyperSpec/Body/s_catch.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Continuations (call/cc)
(define result
  (call/cc
    (lambda (exit)
      (exit "Wert")
      "Normal")))
```

**Special features:**
- Uses `call/cc` (call-with-current-continuation)
- Enables non-local control flow
- Very powerful feature for control flow manipulation

**Further reading:**
- [Racket Documentation - Continuations](https://docs.racket-lang.org/reference/cont.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Continuations (call/cc)
(define result
  (call/cc
    (lambda (exit)
      (exit "Wert")
      "Normal")))
```

**Special features:**
- Uses `call/cc` (call-with-current-continuation)
- Enables non-local control flow
- Very powerful feature for control flow manipulation

**Further reading:**
- [Scheme Documentation - Continuations](https://www.scheme.com/tspl4/control.html#./control:h1)

</TabItem>
</Tabs>


