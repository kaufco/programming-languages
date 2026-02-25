---
slug: /fehlerbehandlung/design-by-contract
title: 12.4. Design by Contract
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 12.4. Design by Contract

Design by Contract Konzepte.

## 12.4.1. Preconditions

Preconditions sind Bedingungen, die vor der Ausführung einer Funktion erfüllt sein müssen. Sie werden zur Laufzeit überprüft und lösen Fehler aus, wenn sie nicht erfüllt sind.

### Sprachen {#sprachen}

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

// Verwendung
int result = divide(10, 2); // OK
// int result2 = divide(10, 0); // AssertError
```

**Besonderheiten:**
- `in`-Block für Preconditions
- `assert` für Bedingungsprüfung
- Wird zur Laufzeit überprüft
- Kann zur Compile-Zeit deaktiviert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `require`-Klausel für Preconditions
- Bedingungen müssen vor Funktionsausführung erfüllt sein
- Wird zur Laufzeit überprüft
- Kann zur Compile-Zeit deaktiviert werden

**Weiterführende Links:**
- [Eiffel Documentation - Design by Contract](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract_%28tm%29%2C_Assertions%2C_Preconditions%2C_Postconditions%2C_Invariants)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun divide(a: Int, b: Int): Int
{
    require(b != 0) { "Division durch Null" }
    return a / b
}

// Verwendung
val result = divide(10, 2) // OK
val result2 = divide(10, 0) // IllegalArgumentException
```

**Besonderheiten:**
- `require`-Funktion für Preconditions
- Wirft `IllegalArgumentException`, wenn Bedingung nicht erfüllt
- Wird zur Laufzeit überprüft
- Lazy-Evaluation der Fehlermeldung

**Weiterführende Links:**
- [Kotlin Documentation - Contracts](https://kotlinlang.org/docs/whatsnew13.html#contracts)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def divide(a: Int, b: Int): Int =
{
    require(b != 0, "Division durch Null")
    a / b
}

// Verwendung
val result = divide(10, 2) // OK
val result2 = divide(10, 0) // IllegalArgumentException
```

**Besonderheiten:**
- `require`-Funktion für Preconditions
- Wirft `IllegalArgumentException`, wenn Bedingung nicht erfüllt
- Wird zur Laufzeit überprüft
- Teil der Standardbibliothek

**Weiterführende Links:**
- [Scala Documentation - Preconditions](https://www.scala-lang.org/api/current/scala/Predef$.html#require(assertion:Boolean,message:=>Any):Unit)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Benötigt: racket/contract
(define/contract (sqrt-safe x)
  (-> (>=/c 0) number?)
  (sqrt x))

(sqrt-safe 4)    ; 2.0
; (sqrt-safe -1) ; Contract-Verletzung: expected (>=/c 0)
```

**Besonderheiten:**
- Contracts als Preconditions über `define/contract`
- `->` Contract für Funktions-Signaturen
- Preconditions werden zur Laufzeit geprüft

**Weiterführende Links:**
- [Racket Documentation - Contracts](https://docs.racket-lang.org/guide/contracts.html)

</TabItem>
</Tabs>


## 12.4.2. Postconditions

Postconditions sind Bedingungen, die nach der Ausführung einer Funktion erfüllt sein müssen. Sie werden zur Laufzeit überprüft und lösen Fehler aus, wenn sie nicht erfüllt sind.

### Sprachen {#sprachen}

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

// Verwendung
int result = divide(10, 2); // OK, Postcondition wird überprüft
```

**Besonderheiten:**
- `out`-Block für Postconditions
- Zugriff auf Rückgabewert durch Parameter
- `assert` für Bedingungsprüfung
- Wird zur Laufzeit überprüft

**Weiterführende Links:**
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

**Besonderheiten:**
- `ensure`-Klausel für Postconditions
- `Result` für Zugriff auf Rückgabewert
- Bedingungen müssen nach Funktionsausführung erfüllt sein
- Wird zur Laufzeit überprüft

**Weiterführende Links:**
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

// Verwendung
val result = divide(10, 2) // OK, Postcondition wird überprüft
```

**Besonderheiten:**
- `check`-Funktion für Postconditions
- Wirft `IllegalStateException`, wenn Bedingung nicht erfüllt
- Wird zur Laufzeit überprüft
- Lazy-Evaluation der Fehlermeldung

**Weiterführende Links:**
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

// Verwendung
val result = divide(10, 2) // OK, Postcondition wird überprüft
```

**Besonderheiten:**
- `ensuring`-Methode für Postconditions (prüft den Rückgabewert)
- Wirft `AssertionError`, wenn Bedingung nicht erfüllt
- `require` ist für Preconditions, `ensuring` für Postconditions
- Wird zur Laufzeit überprüft
- Teil der Standardbibliothek (`scala.Predef`)

**Weiterführende Links:**
- [Scala API - Ensuring](https://www.scala-lang.org/api/current/scala/Predef$$Ensuring.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Benötigt: racket/contract
(define/contract (positive-add a b)
  (-> number? number? positive?)
  (+ a b))

(positive-add 3 5)    ; 8
; (positive-add -5 2) ; Contract-Verletzung: expected positive?
```

**Besonderheiten:**
- Postconditions über Rückgabewert-Contracts
- `positive?` als Postcondition-Prädikat
- Contracts werden zur Laufzeit geprüft

**Weiterführende Links:**
- [Racket Documentation - Contracts](https://docs.racket-lang.org/guide/contracts.html)

</TabItem>
</Tabs>


## 12.4.3. Invariants

Invariants sind Bedingungen, die für ein Objekt während seiner gesamten Lebensdauer erfüllt sein müssen. Sie werden vor und nach jedem Methodenaufruf überprüft.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `invariant`-Block für Klasseninvarianten
- Wird vor und nach jedem Methodenaufruf überprüft
- `assert` für Bedingungsprüfung
- Wird zur Laufzeit überprüft

**Weiterführende Links:**
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

**Besonderheiten:**
- `invariant`-Klausel für Klasseninvarianten
- Wird vor und nach jedem Methodenaufruf überprüft
- Bedingungen müssen während der gesamten Objektlebensdauer erfüllt sein
- Wird zur Laufzeit überprüft

**Weiterführende Links:**
- [Eiffel Documentation - Design by Contract](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract_%28tm%29%2C_Assertions%2C_Preconditions%2C_Postconditions%2C_Invariants)

</TabItem>
</Tabs>


## 12.4.4. Contract Programming

Contract Programming (Design by Contract) ist ein Programmierparadigma, das Preconditions, Postconditions und Invariants kombiniert, um formale Verträge zwischen Komponenten zu definieren.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Kombiniert Preconditions (`in`), Postconditions (`out`) und Invariants (`invariant`)
- Wird zur Laufzeit überprüft
- Kann zur Compile-Zeit deaktiviert werden (`-release` Flag)
- Formale Verträge zwischen Komponenten

**Weiterführende Links:**
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

**Besonderheiten:**
- Kombiniert Preconditions (`require`), Postconditions (`ensure`) und Invariants (`invariant`)
- `old` für Zugriff auf alte Werte in Postconditions
- Wird zur Laufzeit überprüft
- Kann zur Compile-Zeit deaktiviert werden
- Formale Verträge zwischen Komponenten

**Weiterführende Links:**
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

**Besonderheiten:**
- `require` für Preconditions, `check` für Postconditions
- Manuelle Invarianten-Prüfung in Methoden
- Wird zur Laufzeit überprüft
- Formale Verträge zwischen Komponenten

**Weiterführende Links:**
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

**Besonderheiten:**
- `require` für Preconditions (wirft `IllegalArgumentException`)
- `assert` für Invarianten und Postconditions (wirft `AssertionError`)
- `ensuring` für Rückgabewert-Postconditions (wirft `AssertionError`)
- `assert` kann über Compiler-Flag `-Xdisable-assertions` deaktiviert werden
- Formale Verträge zwischen Komponenten

**Weiterführende Links:**
- [Scala Documentation - Assertions](https://www.scala-lang.org/api/current/scala/Predef$.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Benötigt: racket/contract
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

**Besonderheiten:**
- Eingebautes Contract-System über `racket/contract`
- `provide/contract` für Module-Level-Contracts
- Unterstützt Higher-Order Contracts (Contracts für Funktionen)
- Blame-System für präzise Fehlerzuordnung

**Weiterführende Links:**
- [Racket Documentation - Contracts](https://docs.racket-lang.org/guide/contracts.html)

</TabItem>
</Tabs>

