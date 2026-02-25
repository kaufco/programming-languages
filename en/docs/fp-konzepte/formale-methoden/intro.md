---
slug: /fp-konzepte/formale-methoden
title: 9.3. Formal Methods
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 9.3. Formal Methods

Theorem Proving and formal verification.

## 9.3.1. Theorem Proving / Formal Verification

Theorem Proving and formal verification enable mathematical proofs about program properties. Dependent type systems allow proofs to be expressed directly as programs (Curry-Howard correspondence), while verification tools check annotations against formal specifications.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'idris', 'lean4']} yellowTabs={['eiffel', 'haskell', 'scala']} orangeTabs={['c', 'java', 'mercury', 'prolog', 'rust']}>
<TabItem value="ada" label="Ada">

```ada
-- SPARK subset for formal verification
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

**Special features:**
- SPARK is a formally verifiable subset of Ada
- Pre- and postconditions (`Pre`, `Post`) are statically verified by the GNATprove tool
- `'Old` attribute references the value before execution
- Industry standard for safety-critical systems (aviation, defense, medicine)

**Further reading:**
- [SPARK User's Guide](https://docs.adacore.com/spark2014-docs/html/ug/)
- [AdaCore – SPARK](https://www.adacore.com/about-spark)

</TabItem>
<TabItem value="c" label="C">

```c
// Requires: Frama-C with ACSL annotations

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

**Special features:**
- Frama-C with ACSL (ANSI/ISO C Specification Language) enables formal verification of C code
- Annotations are written as special comments (`/*@ ... */`)
- Loop invariants (`loop invariant`) and variants (`loop variant`) for termination proofs
- WP plugin (Weakest Precondition) generates proof obligations for SMT solvers

**Further reading:**
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

**Special features:**
- Design by Contract is a native language feature (pre-/postconditions, class invariants)
- AutoProof (ETH Zurich) statically verifies Eiffel contracts with SMT solvers
- `old` keyword references the state before execution
- Contracts are checked at runtime by default, but can be statically verified

**Further reading:**
- [Eiffel Documentation – Design by Contract](https://www.eiffel.org/doc/solutions/Design_by_Contract_and_Assertions)
- [AutoProof – ETH Zurich](https://se.inf.ethz.ch/research/autoproof/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: GADTs, DataKinds, TypeFamilies

-- Natural numbers at the type level
data Nat = Z | S Nat

type family Plus (n :: Nat) (m :: Nat) :: Nat where
    Plus Z     m = m
    Plus (S n) m = S (Plus n m)

-- Length-indexed vector
data Vec :: Nat -> * -> * where
    VNil  :: Vec Z a
    VCons :: a -> Vec n a -> Vec (S n) a

-- Type-safe access: only for non-empty vectors
vhead :: Vec (S n) a -> a
vhead (VCons x _) = x

-- Append: length is calculated at the type level
vappend :: Vec n a -> Vec m a -> Vec (Plus n m) a
vappend VNil         ys = ys
vappend (VCons x xs) ys = VCons x (vappend xs ys)
```

**Special features:**
- Limited proofs possible via GADTs, DataKinds, and TypeFamilies
- No complete theorem proving: no dependent types, no termination checking
- LiquidHaskell extends Haskell with refinement types for stronger verification
- Singletons library bridges the gap between value and type level

**Further reading:**
- [GHC User's Guide – GADTs](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/gadts.html)
- [LiquidHaskell](https://ucsd-progsys.github.io/liquidhaskell/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Proof: addition is commutative
plusCommutative : (n : Nat) -> (m : Nat) -> plus n m = plus m n
plusCommutative Z     m = sym (plusZeroRightNeutral m)
plusCommutative (S k) m =
    rewrite plusCommutative k m in
    rewrite plusSuccRightSucc m k in
    Refl

-- Length-indexed vector
data Vect : Nat -> Type -> Type where
    Nil  : Vect Z a
    (::) : a -> Vect n a -> Vect (S n) a

-- Type-safe access: compiler proves non-emptiness
head : Vect (S n) a -> a
head (x :: _) = x

-- Append with length proof
append : Vect n a -> Vect m a -> Vect (n + m) a
append Nil       ys = ys
append (x :: xs) ys = x :: append xs ys
```

**Special features:**
- Complete theorem proving through dependent types (Curry-Howard correspondence)
- Proofs are programs: `plusCommutative` is both proof and function
- Totality Checker ensures that proofs terminate and are complete
- `Refl` proves equality, `rewrite` transforms the proof context

**Further reading:**
- [Idris 2 Documentation – Theorem Proving](https://idris2.readthedocs.io/en/latest/tutorial/theorems.html)
- [Idris 2 Documentation](https://www.idris-lang.org/docs/idris2/current/)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Proof: addition is commutative
theorem Nat.add_comm (n m : Nat) : n + m = m + n := by
  induction n with
  | zero => simp
  | succ k ih => simp [Nat.succ_add, ih]

-- Length-indexed vector
inductive Vect : Nat → Type → Type where
  | nil  : Vect 0 α
  | cons : α → Vect n α → Vect (n + 1) α

-- Type-safe access: only for non-empty vectors
def Vect.head : Vect (n + 1) α → α
  | .cons x _ => x

-- Append with length proof
def Vect.append : Vect n α → Vect m α → Vect (n + m) α
  | .nil, ys => ys
  | .cons x xs, ys => .cons x (xs.append ys)
```

**Special features:**
- Lean 4 is a full-featured interactive theorem prover (successor to Lean 3, basis for Mathlib)
- Dependent types enable proofs as programs (Curry-Howard correspondence)
- Tactic mode (`by`) with powerful tactics: `simp`, `omega`, `ring`, `induction`, `cases`
- Totality Checker ensures that proofs terminate and are complete

**Further reading:**
- [Lean 4 – Theorem Proving in Lean 4](https://lean-lang.org/theorem_proving_in_lean4/)
- [Mathlib Documentation](https://leanprover-community.github.io/mathlib4_docs/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Mercury's type, mode, and determinism system as verification tools

% Type-safe natural numbers as an algebraic data type
:- type nat ---> zero ; succ(nat).

:- func plus(nat, nat) = nat.
plus(zero, Y) = Y.
plus(succ(X), Y) = succ(plus(X, Y)).

% Sorted list: mode system checks data flow
:- pred sorted(list(int)::in) is semidet.
sorted([]).
sorted([_]).
sorted([X, Y | T]) :- X =< Y, sorted([Y | T]).

% Determinism declaration: compiler verifies completeness
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

**Special features:**
- Mercury combines logic programming with a strong type, mode, and determinism system
- The compiler statically verifies: determinism (`det` = exactly one solution), mode correctness, and type correctness
- No dependent types or external verification tools – verification is performed by the type system
- The mode system (`in`/`out` modes) statically checks data flow and prevents uninitialized variables

**Further reading:**
- [Mercury Language Reference – Type System](https://www.mercurylang.org/information/doc-release/mercury_ref/Types.html)
- [Mercury Language Reference – Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Requires: JML (Java Modeling Language) + OpenJML/KeY

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

**Special features:**
- JML (Java Modeling Language) adds formal specifications as special comments
- OpenJML and KeY statically verify JML annotations
- `\old()` references the value before method execution
- `\result` references the return value of the method

**Further reading:**
- [OpenJML](https://www.openjml.org/)
- [KeY Project](https://www.key-project.org/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prolog's execution IS proof search (SLD-Resolution)

% Axioms: natural numbers and addition
nat(0).
nat(s(X)) :- nat(X).

plus(0, Y, Y).
plus(s(X), Y, s(Z)) :- plus(X, Y, Z).

% Specification: sorted list
sorted([]).
sorted([_]).
sorted([X, Y | T]) :- X =< Y, sorted([Y | T]).

% Sorted insertion with verification
insert(X, [], [X]).
insert(X, [H | T], [X, H | T]) :- X =< H.
insert(X, [H | T], [H | R]) :- X > H, insert(X, T, R).

% Verification via query:
% ?- insert(3, [1, 2, 4, 5], R), sorted(R).
% R = [1, 2, 3, 4, 5].

% ?- plus(s(s(0)), s(s(s(0))), R).
% R = s(s(s(s(s(0))))).  (2 + 3 = 5)
```

**Special features:**
- Prolog's execution model is SLD-Resolution – a form of automatic theorem proving
- Logical properties are formulated as predicates and verified through query execution
- No formal verification system with pre-/postconditions or dependent types
- Constraint Logic Programming (CLP) extends proof capabilities with finite domains, equations, etc.

**Further reading:**
- [SWI-Prolog Manual](https://www.swi-prolog.org/pldoc/man?section=intro)
- [SWI-Prolog – CLP(FD)](https://www.swi-prolog.org/man/clpfd.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Requires: Prusti Verifier
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

**Special features:**
- Prusti and Creusot are verification tools specifically for Rust
- Specifications are annotated as attributes (`#[requires]`, `#[ensures]`)
- Rust's ownership system simplifies verification (no aliasing problems)
- `old()` references the value before function execution

**Further reading:**
- [Prusti – GitHub](https://github.com/viperproject/prusti-dev)
- [Creusot – GitHub](https://github.com/creusot-rs/creusot)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Requires: Stainless Verifier

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

**Special features:**
- Stainless (formerly Leon) statically verifies a subset of Scala
- `require` for preconditions, `ensuring` for postconditions
- Verification uses SMT solvers (Z3) for automatic proof generation
- Functional style (immutable data) simplifies verification

**Further reading:**
- [Stainless Documentation](https://epfl-lara.github.io/stainless/)
- [Stainless – GitHub](https://github.com/epfl-lara/stainless)

</TabItem>
</Tabs>

