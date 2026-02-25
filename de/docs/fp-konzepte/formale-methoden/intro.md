---
slug: /fp-konzepte/formale-methoden
title: 9.3. Formale Methoden
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 9.3. Formale Methoden

Theorem Proving und formale Verifikation.

## 9.3.1. Theorem Proving / Formale Verifikation

Theorem Proving und formale Verifikation ermöglichen mathematische Beweise über Programmeigenschaften. Abhängige Typsysteme erlauben es, Beweise direkt als Programme auszudrücken (Curry-Howard-Korrespondenz), während Verifikationswerkzeuge Annotationen gegen formale Spezifikationen prüfen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'idris', 'lean4']} yellowTabs={['eiffel', 'haskell', 'scala']} orangeTabs={['c', 'java', 'mercury', 'prolog', 'rust']}>
<TabItem value="ada" label="Ada">

```ada
-- SPARK-Subset für formale Verifikation
package Stack
  with SPARK_Mode => On
is
  Max_Size : constant := 100;
  type Stack is private;

  function Is_Empty (S : Stack) return Boolean;
  function Is_Full (S : Stack) return Boolean;
  function Size (S : Stack) return Natural;

  procedure Push (S : in out Stack; Value : Integer)
    with Pre  => not Is_Full (S),
         Post => not Is_Empty (S)
                 and Size (S) = Size (S)'Old + 1;

  procedure Pop (S : in out Stack; Value : out Integer)
    with Pre  => not Is_Empty (S),
         Post => not Is_Full (S)
                 and Size (S) = Size (S)'Old - 1;

private
  type Element_Array is array (1 .. Max_Size) of Integer;
  type Stack is record
    Data : Element_Array;
    Top  : Natural := 0;
  end record;
end Stack;
```

**Besonderheiten:**
- SPARK ist ein formal verifizierbares Subset von Ada
- Vor- und Nachbedingungen (`Pre`, `Post`) werden vom GNATprove-Tool statisch verifiziert
- `'Old`-Attribut referenziert den Wert vor der Ausführung
- Industriestandard für sicherheitskritische Systeme (Luftfahrt, Verteidigung, Medizin)

**Weiterführende Links:**
- [SPARK User's Guide](https://docs.adacore.com/spark2014-docs/html/ug/)
- [AdaCore – SPARK](https://www.adacore.com/about-spark)

</TabItem>
<TabItem value="c" label="C">

```c
// Benötigt: Frama-C mit ACSL-Annotationen

/*@ requires \valid(a + (0..n-1));
    requires n > 0;
    assigns \nothing;
    ensures \forall integer i; 0 <= i < n ==> a[i] <= \result;
    ensures \exists integer i; 0 <= i < n && a[i] == \result;
*/
int find_max(const int* a, int n) {
    int max = a[0];
    /*@ loop invariant 1 <= i <= n;
        loop invariant \forall integer j;
            0 <= j < i ==> a[j] <= max;
        loop invariant \exists integer j;
            0 <= j < i && a[j] == max;
        loop assigns i, max;
        loop variant n - i;
    */
    for (int i = 1; i < n; i++) {
        if (a[i] > max) max = a[i];
    }
    return max;
}
```

**Besonderheiten:**
- Frama-C mit ACSL (ANSI/ISO C Specification Language) ermöglicht formale Verifikation von C-Code
- Annotationen werden als spezielle Kommentare (`/*@ ... */`) geschrieben
- Schleifeneinvarianten (`loop invariant`) und Varianten (`loop variant`) für Terminierungsbeweise
- WP-Plugin (Weakest Precondition) generiert Beweisverpflichtungen für SMT-Solver

**Weiterführende Links:**
- [Frama-C Documentation](https://frama-c.com/html/documentation.html)
- [ACSL Specification Language](https://frama-c.com/html/acsl.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class VERIFIED_STACK [G]

feature
    push (value: G)
        require
            not_full: not is_full
        do
            count := count + 1
            data.put (value, count)
        ensure
            not_empty: not is_empty
            count_incremented: count = old count + 1
            top_is_value: item = value
        end

    pop: G
        require
            not_empty: not is_empty
        do
            Result := data.item (count)
            count := count - 1
        ensure
            not_full: not is_full
            count_decremented: count = old count - 1
        end

invariant
    count_non_negative: count >= 0
    count_bounded: count <= max_size

end
```

**Besonderheiten:**
- Design by Contract ist ein natives Sprachfeature (Vor-/Nachbedingungen, Klasseninvarianten)
- AutoProof (ETH Zürich) verifiziert Eiffel-Contracts statisch mit SMT-Solvern
- `old`-Keyword referenziert den Zustand vor der Ausführung
- Contracts werden standardmäßig zur Laufzeit geprüft, können aber statisch verifiziert werden

**Weiterführende Links:**
- [Eiffel Documentation – Design by Contract](https://www.eiffel.org/doc/solutions/Design_by_Contract_and_Assertions)
- [AutoProof – ETH Zurich](https://se.inf.ethz.ch/research/autoproof/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: GADTs, DataKinds, TypeFamilies

-- Natürliche Zahlen auf Typ-Ebene
data Nat = Z | S Nat

type family Plus (n :: Nat) (m :: Nat) :: Nat where
    Plus Z     m = m
    Plus (S n) m = S (Plus n m)

-- Längen-indizierter Vektor
data Vec :: Nat -> * -> * where
    VNil  :: Vec Z a
    VCons :: a -> Vec n a -> Vec (S n) a

-- Typsicherer Zugriff: nur für nicht-leere Vektoren
vhead :: Vec (S n) a -> a
vhead (VCons x _) = x

-- Append: Länge wird auf Typebene berechnet
vappend :: Vec n a -> Vec m a -> Vec (Plus n m) a
vappend VNil         ys = ys
vappend (VCons x xs) ys = VCons x (vappend xs ys)
```

**Besonderheiten:**
- Eingeschränkte Beweise über GADTs, DataKinds und TypeFamilies möglich
- Kein vollständiges Theorem Proving: keine abhängigen Typen, keine Terminierungsprüfung
- LiquidHaskell erweitert Haskell um Refinement Types für stärkere Verifikation
- Singletons-Bibliothek überbrückt die Lücke zwischen Wert- und Typebene

**Weiterführende Links:**
- [GHC User's Guide – GADTs](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/gadts.html)
- [LiquidHaskell](https://ucsd-progsys.github.io/liquidhaskell/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Beweis: Addition ist kommutativ
plusCommutative : (n : Nat) -> (m : Nat) -> plus n m = plus m n
plusCommutative Z     m = sym (plusZeroRightNeutral m)
plusCommutative (S k) m =
    rewrite plusCommutative k m in
    rewrite plusSuccRightSucc m k in
    Refl

-- Längen-indizierter Vektor
data Vect : Nat -> Type -> Type where
    Nil  : Vect Z a
    (::) : a -> Vect n a -> Vect (S n) a

-- Typsicherer Zugriff: Compiler beweist Nicht-Leerheit
head : Vect (S n) a -> a
head (x :: _) = x

-- Append mit Längenbeweis
append : Vect n a -> Vect m a -> Vect (n + m) a
append Nil       ys = ys
append (x :: xs) ys = x :: append xs ys
```

**Besonderheiten:**
- Vollständiges Theorem Proving durch abhängige Typen (Curry-Howard-Korrespondenz)
- Beweise sind Programme: `plusCommutative` ist zugleich Beweis und Funktion
- Totality Checker stellt sicher, dass Beweise terminieren und vollständig sind
- `Refl` beweist Gleichheit, `rewrite` transformiert den Beweiskontext

**Weiterführende Links:**
- [Idris 2 Documentation – Theorem Proving](https://idris2.readthedocs.io/en/latest/tutorial/theorems.html)
- [Idris 2 Documentation](https://www.idris-lang.org/docs/idris2/current/)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Beweis: Addition ist kommutativ
theorem Nat.add_comm (n m : Nat) : n + m = m + n := by
  induction n with
  | zero => simp
  | succ k ih => simp [Nat.succ_add, ih]

-- Längen-indizierter Vektor
inductive Vect : Nat → Type → Type where
  | nil  : Vect 0 α
  | cons : α → Vect n α → Vect (n + 1) α

-- Typsicherer Zugriff: nur für nicht-leere Vektoren
def Vect.head : Vect (n + 1) α → α
  | .cons x _ => x

-- Append mit Längenbeweis
def Vect.append : Vect n α → Vect m α → Vect (n + m) α
  | .nil, ys => ys
  | .cons x xs, ys => .cons x (xs.append ys)
```

**Besonderheiten:**
- Lean 4 ist ein vollwertiger interaktiver Theorem-Prover (Nachfolger von Lean 3, Basis für Mathlib)
- Abhängige Typen ermöglichen Beweise als Programme (Curry-Howard-Korrespondenz)
- Taktik-Modus (`by`) mit mächtigen Taktiken: `simp`, `omega`, `ring`, `induction`, `cases`
- Totality Checker stellt sicher, dass Beweise terminieren und vollständig sind

**Weiterführende Links:**
- [Lean 4 – Theorem Proving in Lean 4](https://lean-lang.org/theorem_proving_in_lean4/)
- [Mathlib Documentation](https://leanprover-community.github.io/mathlib4_docs/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Mercurys Typ-, Modus- und Determinismus-System als Verifikationswerkzeuge

% Typsichere natürliche Zahlen als algebraischer Datentyp
:- type nat ---> zero ; succ(nat).

:- func plus(nat, nat) = nat.
plus(zero, Y) = Y.
plus(succ(X), Y) = succ(plus(X, Y)).

% Sortierte Liste: Modus-System prüft Datenfluss
:- pred sorted(list(int)::in) is semidet.
sorted([]).
sorted([_]).
sorted([X, Y | T]) :- X =< Y, sorted([Y | T]).

% Determinismus-Deklaration: Compiler verifiziert Vollständigkeit
:- pred insert(int::in, list(int)::in, list(int)::out) is det.
insert(X, [], [X]).
insert(X, [H | T], Result) :-
    ( X =< H ->
        Result = [X, H | T]
    ;
        insert(X, T, R),
        Result = [H | R]
    ).
```

**Besonderheiten:**
- Mercury kombiniert logische Programmierung mit einem starken Typ-, Modus- und Determinismus-System
- Der Compiler verifiziert statisch: Determinismus (`det` = genau eine Lösung), Moduskorrektheit und Typkorrektheit
- Keine abhängigen Typen oder externen Verifikationswerkzeuge – Verifikation erfolgt durch das Typsystem
- Das Modus-System (`in`/`out`-Modi) prüft den Datenfluss statisch und verhindert uninitialisierte Variablen

**Weiterführende Links:**
- [Mercury Language Reference – Type System](https://www.mercurylang.org/information/doc-release/mercury_ref/Types.html)
- [Mercury Language Reference – Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Benötigt: JML (Java Modeling Language) + OpenJML/KeY

public class VerifiedStack<T> {
    private Object[] elements;
    private int size;

    //@ invariant size >= 0 && size <= elements.length;

    //@ requires !isFull();
    //@ ensures size == \old(size) + 1;
    //@ ensures elements[\old(size)] == value;
    public void push(T value) {
        elements[size++] = value;
    }

    //@ requires !isEmpty();
    //@ ensures size == \old(size) - 1;
    //@ ensures \result == \old(elements[size - 1]);
    @SuppressWarnings("unchecked")
    public T pop() {
        return (T) elements[--size];
    }
}
```

**Besonderheiten:**
- JML (Java Modeling Language) fügt formale Spezifikationen als spezielle Kommentare hinzu
- OpenJML und KeY verifizieren JML-Annotationen statisch
- `\old()` referenziert den Wert vor der Methodenausführung
- `\result` referenziert den Rückgabewert der Methode

**Weiterführende Links:**
- [OpenJML](https://www.openjml.org/)
- [KeY Project](https://www.key-project.org/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prologs Ausführung IST Beweissuche (SLD-Resolution)

% Axiome: Natürliche Zahlen und Addition
nat(0).
nat(s(X)) :- nat(X).

plus(0, Y, Y).
plus(s(X), Y, s(Z)) :- plus(X, Y, Z).

% Spezifikation: sortierte Liste
sorted([]).
sorted([_]).
sorted([X, Y | T]) :- X =< Y, sorted([Y | T]).

% Sortiertes Einfügen mit Verifikation
insert(X, [], [X]).
insert(X, [H | T], [X, H | T]) :- X =< H.
insert(X, [H | T], [H | R]) :- X > H, insert(X, T, R).

% Verifikation durch Query:
% ?- insert(3, [1, 2, 4, 5], R), sorted(R).
% R = [1, 2, 3, 4, 5].

% ?- plus(s(s(0)), s(s(s(0))), R).
% R = s(s(s(s(s(0))))).  (2 + 3 = 5)
```

**Besonderheiten:**
- Prologs Ausführungsmodell ist SLD-Resolution – eine Form des automatischen Theorem Provings
- Logische Eigenschaften werden als Prädikate formuliert und durch Query-Ausführung verifiziert
- Kein formales Verifikationssystem mit Vor-/Nachbedingungen oder abhängigen Typen
- Constraint Logic Programming (CLP) erweitert die Beweisfähigkeit um endliche Domänen, Gleichungen etc.

**Weiterführende Links:**
- [SWI-Prolog Manual](https://www.swi-prolog.org/pldoc/man?section=intro)
- [SWI-Prolog – CLP(FD)](https://www.swi-prolog.org/man/clpfd.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: Prusti Verifier
use prusti_contracts::*;

#[requires(index < slice.len())]
#[ensures(result == old(slice[index]))]
fn safe_get(slice: &[i32], index: usize) -> i32 {
    slice[index]
}

#[requires(!stack.is_empty())]
#[ensures(stack.len() == old(stack.len()) - 1)]
fn pop(stack: &mut Vec<i32>) -> i32 {
    stack.pop().unwrap()
}

#[ensures(stack.len() == old(stack.len()) + 1)]
fn push(stack: &mut Vec<i32>, value: i32) {
    stack.push(value);
}
```

**Besonderheiten:**
- Prusti und Creusot sind Verifikationswerkzeuge speziell für Rust
- Spezifikationen werden als Attribute (`#[requires]`, `#[ensures]`) annotiert
- Rusts Ownership-System vereinfacht die Verifikation (keine Aliasing-Probleme)
- `old()` referenziert den Wert vor der Funktionsausführung

**Weiterführende Links:**
- [Prusti – GitHub](https://github.com/viperproject/prusti-dev)
- [Creusot – GitHub](https://github.com/creusot-rs/creusot)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: Stainless Verifier

case class Stack(data: List[BigInt], maxSize: BigInt) {
    require(maxSize > 0 && data.length <= maxSize)

    def isEmpty: Boolean = data.isEmpty
    def isFull: Boolean = data.length == maxSize

    def push(value: BigInt): Stack = {
        require(!isFull)
        Stack(value :: data, maxSize)
    } ensuring { res =>
        !res.isEmpty &&
        res.data.length == this.data.length + 1
    }

    def pop: (BigInt, Stack) = {
        require(!isEmpty)
        (data.head, Stack(data.tail, maxSize))
    } ensuring { case (_, res) =>
        res.data.length == this.data.length - 1
    }
}
```

**Besonderheiten:**
- Stainless (ehemals Leon) verifiziert ein Subset von Scala statisch
- `require` für Vorbedingungen, `ensuring` für Nachbedingungen
- Verifikation nutzt SMT-Solver (Z3) für automatische Beweisführung
- Funktionaler Stil (immutable Daten) vereinfacht die Verifikation

**Weiterführende Links:**
- [Stainless Documentation](https://epfl-lara.github.io/stainless/)
- [Stainless – GitHub](https://github.com/epfl-lara/stainless)

</TabItem>
</Tabs>

