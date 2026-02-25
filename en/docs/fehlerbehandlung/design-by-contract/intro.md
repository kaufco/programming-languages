---
slug: /fehlerbehandlung/design-by-contract
title: 12.4. Design by Contract
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 12.4. Design by Contract

Design by Contract concepts.

## 12.4.1. Preconditions

Preconditions are conditions that must be fulfilled before a function is executed. They are checked at runtime and trigger errors if they are not fulfilled.

### Languages {#sprachen}

<Tabs availableTabs={['d', 'eiffel', 'kotlin', 'racket', 'scala']}>
<TabItem value="d" label="D">

```d
int divide(int a, int b)
in
{
    assert(b != 0, "Division durch Null");
}
do
{
    return a / b;
}

// Usage
int result = divide(10, 2); // OK
// int result2 = divide(10, 0); // AssertError
```

**Special features:**
- `in` block for preconditions
- `assert` for condition checking
- Checked at runtime
- Can be disabled at compile time

**Further reading:**
- [D Documentation - Contract Programming](https://dlang.org/spec/contracts.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
divide (a, b: INTEGER): INTEGER
    require
        b /= 0
    do
        Result := a // b
    end
```

**Special features:**
- `require` clause for preconditions
- Conditions must be fulfilled before function execution
- Checked at runtime
- Can be disabled at compile time

**Further reading:**
- [Eiffel Documentation - Design by Contract](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract_%28tm%29%2C_Assertions%2C_Preconditions%2C_Postconditions%2C_Invariants)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun divide(a: Int, b: Int): Int
{
    require(b != 0) { "Division durch Null" }
    return a / b
}

// Usage
val result = divide(10, 2) // OK
val result2 = divide(10, 0) // IllegalArgumentException
```

**Special features:**
- `require` function for preconditions
- Throws `IllegalArgumentException` if condition is not fulfilled
- Checked at runtime
- Lazy evaluation of error message

**Further reading:**
- [Kotlin Documentation - Contracts](https://kotlinlang.org/docs/whatsnew13.html#contracts)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def divide(a: Int, b: Int): Int =
{
    require(b != 0, "Division durch Null")
    a / b
}

// Usage
val result = divide(10, 2) // OK
val result2 = divide(10, 0) // IllegalArgumentException
```

**Special features:**
- `require` function for preconditions
- Throws `IllegalArgumentException` if condition is not fulfilled
- Checked at runtime
- Part of the standard library

**Further reading:**
- [Scala Documentation - Preconditions](https://www.scala-lang.org/api/current/scala/Predef$.html#require(assertion:Boolean,message:=>Any):Unit)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Requires: racket/contract
(define/contract (sqrt-safe x)
  (-> (>=/c 0) number?)
  (sqrt x))

(sqrt-safe 4)    ; 2.0
; (sqrt-safe -1) ; Contract-Verletzung: expected (>=/c 0)
```

**Special features:**
- Contracts as preconditions via `define/contract`
- `->` contract for function signatures
- Preconditions are checked at runtime

**Further reading:**
- [Racket Documentation - Contracts](https://docs.racket-lang.org/guide/contracts.html)

</TabItem>
</Tabs>


## 12.4.2. Postconditions

Postconditions are conditions that must be fulfilled after a function is executed. They are checked at runtime and trigger errors if they are not fulfilled.

### Languages {#sprachen}

<Tabs availableTabs={['d', 'eiffel', 'kotlin', 'racket', 'scala']}>
<TabItem value="d" label="D">

```d
int divide(int a, int b)
in
{
    assert(b != 0, "Division durch Null");
}
out (result)
{
    assert(result * b == a, "Postcondition verletzt");
}
do
{
    return a / b;
}

// Usage
int result = divide(10, 2); // OK, postcondition is checked
```

**Special features:**
- `out` block for postconditions
- Access to return value via parameter
- `assert` for condition checking
- Checked at runtime

**Further reading:**
- [D Documentation - Contract Programming](https://dlang.org/spec/contracts.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
divide (a, b: INTEGER): INTEGER
    require
        b /= 0
    ensure
        Result * b = a
    do
        Result := a // b
    end
```

**Special features:**
- `ensure` clause for postconditions
- `Result` for access to return value
- Conditions must be fulfilled after function execution
- Checked at runtime

**Further reading:**
- [Eiffel Documentation - Design by Contract](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract_%28tm%29%2C_Assertions%2C_Preconditions%2C_Postconditions%2C_Invariants)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun divide(a: Int, b: Int): Int
{
    require(b != 0) { "Division durch Null" }
    val result = a / b
    check(result * b == a) { "Postcondition verletzt" }
    return result
}

// Usage
val result = divide(10, 2) // OK, postcondition is checked
```

**Special features:**
- `check` function for postconditions
- Throws `IllegalStateException` if condition is not fulfilled
- Checked at runtime
- Lazy evaluation of error message

**Further reading:**
- [Kotlin Documentation - Contracts](https://kotlinlang.org/docs/whatsnew13.html#contracts)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def divide(a: Int, b: Int): Int =
{
    require(b != 0, "Division durch Null") // Precondition
    val result = a / b
    result.ensuring(_ * b == a, "Postcondition verletzt")
}

// Usage
val result = divide(10, 2) // OK, postcondition is checked
```

**Special features:**
- `ensuring` method for postconditions (checks the return value)
- Throws `AssertionError` if condition is not fulfilled
- `require` is for preconditions, `ensuring` for postconditions
- Checked at runtime
- Part of the standard library (`scala.Predef`)

**Further reading:**
- [Scala API - Ensuring](https://www.scala-lang.org/api/current/scala/Predef$$Ensuring.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Requires: racket/contract
(define/contract (positive-add a b)
  (-> number? number? positive?)
  (+ a b))

(positive-add 3 5)    ; 8
; (positive-add -5 2) ; Contract-Verletzung: expected positive?
```

**Special features:**
- Postconditions via return value contracts
- `positive?` as postcondition predicate
- Contracts are checked at runtime

**Further reading:**
- [Racket Documentation - Contracts](https://docs.racket-lang.org/guide/contracts.html)

</TabItem>
</Tabs>


## 12.4.3. Invariants

Invariants are conditions that must be fulfilled for an object throughout its entire lifetime. They are checked before and after each method call.

### Languages {#sprachen}

<Tabs availableTabs={['d', 'eiffel']}>
<TabItem value="d" label="D">

```d
class BankAccount
{
    private int balance;

    invariant()
    {
        assert(balance >= 0, "Kontostand darf nicht negativ sein");
    }

    void withdraw(int amount)
    in
    {
        assert(amount > 0, "Betrag muss positiv sein");
        assert(amount <= balance, "Nicht genug Guthaben");
    }
    out
    {
        assert(balance >= 0, "Invariante verletzt");
    }
    do
    {
        balance -= amount;
    }
}
```

**Special features:**
- `invariant` block for class invariants
- Checked before and after each method call
- `assert` for condition checking
- Checked at runtime

**Further reading:**
- [D Documentation - Contract Programming](https://dlang.org/spec/contracts.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class BANK_ACCOUNT
    feature
        balance: INTEGER
        
    invariant
        balance >= 0
        
    withdraw (amount: INTEGER)
        require
            amount > 0
            amount <= balance
        do
            balance := balance - amount
        ensure
            balance >= 0
        end
end
```

**Special features:**
- `invariant` clause for class invariants
- Checked before and after each method call
- Conditions must be fulfilled throughout the entire object lifetime
- Checked at runtime

**Further reading:**
- [Eiffel Documentation - Design by Contract](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract_%28tm%29%2C_Assertions%2C_Preconditions%2C_Postconditions%2C_Invariants)

</TabItem>
</Tabs>


## 12.4.4. Contract Programming

Contract Programming (Design by Contract) is a programming paradigm that combines preconditions, postconditions, and invariants to define formal contracts between components.

### Languages {#sprachen}

<Tabs availableTabs={['d', 'eiffel', 'kotlin', 'racket', 'scala']}>
<TabItem value="d" label="D">

```d
class BankAccount
{
    private int balance;

    invariant()
    {
        assert(balance >= 0, "Kontostand darf nicht negativ sein");
    }

    this() {
        balance = 0;
    }

    void deposit(int amount)
    in
    {
        assert(amount > 0, "Betrag muss positiv sein");
    }
    out
    {
        assert(balance >= 0, "Postcondition verletzt");
    }
    do
    {
        balance += amount;
    }

    void withdraw(int amount)
    in
    {
        assert(amount > 0, "Betrag muss positiv sein");
        assert(amount <= balance, "Nicht genug Guthaben");
    }
    out
    {
        assert(balance >= 0, "Invariante verletzt");
    }
    do
    {
        balance -= amount;
    }
}
```

**Special features:**
- Combines preconditions (`in`), postconditions (`out`), and invariants (`invariant`)
- Checked at runtime
- Can be disabled at compile time (`-release` flag)
- Formal contracts between components

**Further reading:**
- [D Documentation - Contract Programming](https://dlang.org/spec/contracts.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class BANK_ACCOUNT
    feature
        balance: INTEGER
        
    invariant
        balance >= 0
        
    deposit (amount: INTEGER)
        require
            amount > 0
        ensure
            balance = old balance + amount
        do
            balance := balance + amount
        end
        
    withdraw (amount: INTEGER)
        require
            amount > 0
            amount <= balance
        ensure
            balance = old balance - amount
        do
            balance := balance - amount
        end
end
```

**Special features:**
- Combines preconditions (`require`), postconditions (`ensure`), and invariants (`invariant`)
- `old` for access to old values in postconditions
- Checked at runtime
- Can be disabled at compile time
- Formal contracts between components

**Further reading:**
- [Eiffel Documentation - Design by Contract](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract_%28tm%29%2C_Assertions%2C_Preconditions%2C_Postconditions%2C_Invariants)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class BankAccount(private var balance: Int)
{
    init
    {
        require(balance >= 0) { "Kontostand darf nicht negativ sein" }
    }
    
    fun deposit(amount: Int)
    {
        require(amount > 0) { "Betrag muss positiv sein" }
        val oldBalance = balance
        balance += amount
        check(balance == oldBalance + amount) { "Postcondition verletzt" }
    }
    
    fun withdraw(amount: Int)
    {
        require(amount > 0) { "Betrag muss positiv sein" }
        require(amount <= balance) { "Nicht genug Guthaben" }
        val oldBalance = balance
        balance -= amount
        check(balance >= 0) { "Invariante verletzt" }
    }
}
```

**Special features:**
- `require` for preconditions, `check` for postconditions
- Manual invariant checking in methods
- Checked at runtime
- Formal contracts between components

**Further reading:**
- [Kotlin Documentation - Contracts](https://kotlinlang.org/docs/whatsnew13.html#contracts)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class BankAccount(private var _balance: Int)
{
    require(_balance >= 0, "Kontostand darf nicht negativ sein") // Precondition

    def deposit(amount: Int): Unit =
    {
        require(amount > 0, "Betrag muss positiv sein") // Precondition
        val oldBalance = _balance
        _balance += amount
        assert(_balance == oldBalance + amount, "Postcondition verletzt") // Postcondition
    }

    def withdraw(amount: Int): Unit =
    {
        require(amount > 0, "Betrag muss positiv sein") // Precondition
        require(amount <= _balance, "Nicht genug Guthaben") // Precondition
        val oldBalance = _balance
        _balance -= amount
        assert(_balance >= 0, "Invariante verletzt") // Invariante
    }

    def balance: Int = _balance.ensuring(_ >= 0, "Kontostand darf nicht negativ sein")
}
```

**Special features:**
- `require` for preconditions (throws `IllegalArgumentException`)
- `assert` for invariants and postconditions (throws `AssertionError`)
- `ensuring` for return value postconditions (throws `AssertionError`)
- `assert` can be disabled via compiler flag `-Xdisable-assertions`
- Formal contracts between components

**Further reading:**
- [Scala Documentation - Assertions](https://www.scala-lang.org/api/current/scala/Predef$.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Requires: racket/contract
(provide/contract
  [deposit (-> account? positive? account?)]
  [withdraw (-> account? positive? account?)])

(define/contract (create-account balance)
  (-> (>=/c 0) account?)
  (hash 'balance balance))

(define/contract (deposit acc amount)
  (-> account? positive? account?)
  (hash-set acc 'balance (+ (hash-ref acc 'balance) amount)))
```

**Special features:**
- Built-in contract system via `racket/contract`
- `provide/contract` for module-level contracts
- Supports higher-order contracts (contracts for functions)
- Blame system for precise error attribution

**Further reading:**
- [Racket Documentation - Contracts](https://docs.racket-lang.org/guide/contracts.html)

</TabItem>
</Tabs>

