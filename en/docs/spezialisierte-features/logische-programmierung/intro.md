---
slug: /spezialisierte-features/logische-programmierung
title: 19.4. Logical and Constraint Programming
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 19.4. Logical and Constraint Programming

Unification, backtracking, declarative queries, constraint solving.

## 19.4.1. Unification and Backtracking

Unification matches two terms by binding variables so that both terms become identical. Backtracking enables systematic search for all possible solutions by exploring alternative computation paths when one fails. Together, they form the foundation of logical programming.

### Languages {#sprachen}

<Tabs availableTabs={['mercury', 'prolog']} yellowTabs={['clojure', 'racket', 'scheme']} orangeTabs={['common-lisp', 'haskell', 'julia', 'ocaml', 'python']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Requires: org.clojure/core.logic
(defrel parent x y)
(fact parent :tom :bob)
(fact parent :bob :ann)
(fact parent :bob :pat)

;; Unification: fresh variables are automatically bound
;; Backtracking: run* finds all solutions
(run* [who]
  (fresh [y]
    (parent :tom y)
    (parent y who)))
;; => (:ann :pat)
```

**Special features:**
- core.logic implements miniKanren, an embedded logical programming system
- `fresh` creates logical variables, `==` unifies terms
- `run*` searches all solutions via backtracking, `run n` limits to n solutions
- Seamless integration with Clojure data structures

**Further reading:**
- [core.logic Documentation](https://github.com/clojure/core.logic)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Backtracking via Screamer (nondeterministic programming)
;; Requires: Screamer library
(defparameter *parents*
  '((tom bob) (bob ann) (bob pat)))

(defun grandchild-of (x)
  (let* ((y (screamer:a-member-of '(tom bob ann pat)))
         (z (screamer:a-member-of '(tom bob ann pat))))
    (unless (member (list x y) *parents* :test #'equal)
      (screamer:fail))
    (unless (member (list y z) *parents* :test #'equal)
      (screamer:fail))
    z))

(screamer:all-values (grandchild-of 'tom))
;; => (ANN PAT)
```

**Special features:**
- Screamer extends Common Lisp with nondeterministic computations
- `a-member-of` chooses nondeterministically, `fail` triggers backtracking
- `all-values` collects all solutions
- No true unification, but complete backtracking via choice points

**Further reading:**
- [Screamer Documentation](https://nikodemus.github.io/screamer/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: logict
import Control.Monad.Logic

parents :: [(String, String)]
parents = [("tom", "bob"), ("bob", "ann"), ("bob", "pat")]

grandchildren :: String -> Logic String
grandchildren x = do
  (p, c)   <- msum (map return parents)
  guard (p == x)
  (p', gc) <- msum (map return parents)
  guard (p' == c)
  return gc

-- observeAll (grandchildren "tom") => ["ann", "pat"]
```

**Special features:**
- `logict` package provides the `Logic` monad for backtracking
- `msum` for nondeterministic choice, `guard` for conditions
- `observeAll` collects all solutions, `observe` the first
- For true unification: `unification-fd` package

**Further reading:**
- [logict Documentation](https://hackage.haskell.org/package/logict)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Requires: Julog
using Julog

clauses = @julog [
    parent(tom, bob) <<= true,
    parent(bob, ann) <<= true,
    parent(bob, pat) <<= true,
    grandparent(X, Z) <<= parent(X, Y) & parent(Y, Z)
]

resolve(@julog(grandparent(tom, Who)), clauses)
# => true, [{Who => ann}, {Who => pat}]
```

**Special features:**
- Julog.jl implements a Prolog-like resolution mechanism
- `@julog` macro enables Prolog-like syntax in Julia
- Unification and backtracking analogous to Prolog
- Integration with Julia data types

**Further reading:**
- [Julog.jl Documentation](https://github.com/ztangent/Julog.jl)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- pred parent(string, string).
:- mode parent(out, out) is multi.
parent("tom", "bob").
parent("bob", "ann").
parent("bob", "pat").

:- pred grandparent(string, string).
:- mode grandparent(out, out) is nondet.
grandparent(X, Z) :-
    parent(X, Y),
    parent(Y, Z).

% Collect all solutions
:- pred all_grandchildren(string::in, list(string)::out) is det.
all_grandchildren(X, Results) :-
    solutions(
        (pred(Z::out) is nondet :- grandparent(X, Z)),
        Results
    ).
% all_grandchildren("tom", ["ann", "pat"])
```

**Special features:**
- Unification and backtracking as core mechanisms (like Prolog), but statically typed
- Mode declarations (`in`, `out`) define the data flow direction of each variable
- Determinism declarations (`multi`, `nondet`, `det`) are verified by the compiler
- `solutions/2` collects all solutions — compiler guarantees through `det` determinism that collection always succeeds

**Further reading:**
- [Mercury Language Reference](https://www.mercurylang.org/information/doc-release/mercury_ref/index.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Requires: OCanren *)
let parent x y =
  conde [
    (x === !!"tom") &&& (y === !!"bob");
    (x === !!"bob") &&& (y === !!"ann");
    (x === !!"bob") &&& (y === !!"pat");
  ]

let grandparent x z =
  fresh (fun y -> (parent x y) &&& (parent y z))

(* Stream.take ~n:(-1) @@ run q (grandparent !!"tom" q)
   => ["ann"; "pat"] *)
```

**Special features:**
- OCanren is a type-safe miniKanren implementation for OCaml
- `===` for unification, `conde` for disjunctive goals
- `fresh` for fresh logical variables
- Static type safety in logical programming

**Further reading:**
- [OCanren Documentation](https://github.com/PLTools/OCanren)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
parent(tom, bob).
parent(bob, ann).
parent(bob, pat).

grandparent(X, Z) :- parent(X, Y), parent(Y, Z).

% ?- grandparent(tom, Who).
% Who = ann ;
% Who = pat.

% Collect all solutions
% ?- findall(Who, grandparent(tom, Who), Results).
% Results = [ann, pat].
```

**Special features:**
- Unification and backtracking are the fundamental core mechanisms of Prolog
- Variables (uppercase) are automatically bound through unification
- Semicolon (`;`) in interactive query requests further solutions via backtracking
- Cut (`!`) for explicit control of backtracking
- `findall/3`, `bagof/3`, `setof/3` for collecting all solutions

**Further reading:**
- [SWI-Prolog Documentation - Unification](https://www.swi-prolog.org/pldoc/man?section=unify)

</TabItem>
<TabItem value="python" label="Python">

```python
# Requires: kanren
from kanren import run, var, fact, Relation

parent = Relation()
fact(parent, "tom", "bob")
fact(parent, "bob", "ann")
fact(parent, "bob", "pat")

x, y = var(), var()
result = run(0, y, parent("tom", x), parent(x, y))
# result = ("ann", "pat")
```

**Special features:**
- `kanren` package implements miniKanren for Python
- `var()` creates logical variables, `run` performs unification and backtracking
- `run(0, ...)` searches all solutions, `run(n, ...)` limits to n
- Alternative: `pyDatalog` for Datalog-based logical programming

**Further reading:**
- [kanren Documentation](https://github.com/pythological/kanren)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Requires: racklog
(define %parent
  (%rel ()
    [('tom 'bob)]
    [('bob 'ann)]
    [('bob 'pat)]))

(define %grandparent
  (%rel (x y z)
    [(x z) (%parent x y) (%parent y z)]))

(%find-all (who) (%grandparent 'tom who))
;; => '((who . ann) (who . pat))
```

**Special features:**
- Racklog embeds Prolog-like logical programming in Racket
- `%rel` defines relations, `%find-all` searches all solutions
- Full unification and backtracking
- Seamless integration with Racket expressions

**Further reading:**
- [Racklog Documentation](https://docs.racket-lang.org/racklog/)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; miniKanren (originally developed for Scheme)
(define (parento x y)
  (conde
    [(== x 'tom) (== y 'bob)]
    [(== x 'bob) (== y 'ann)]
    [(== x 'bob) (== y 'pat)]))

(define (grandparento x z)
  (fresh (y)
    (parento x y)
    (parento y z)))

(run* (who) (grandparento 'tom who))
;; => (ann pat)
```

**Special features:**
- miniKanren was originally developed in Scheme (Daniel P. Friedman, William E. Byrd)
- `==` for unification, `conde` for disjunctive goals, `fresh` for new variables
- `run*` searches all solutions via backtracking
- Minimal implementation with powerful expressiveness

**Further reading:**
- [miniKanren.org](http://minikanren.org/)

</TabItem>
</Tabs>


## 19.4.2. Declarative Queries

Declarative formulation of queries to a knowledge base of facts and rules. Instead of describing the solution path, only the desired result is specified — the search strategy is automatically handled by the system.

### Languages {#sprachen}

<Tabs availableTabs={['mercury', 'prolog']} yellowTabs={['clojure', 'racket', 'scheme']} orangeTabs={['haskell', 'julia', 'python']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Requires: org.clojure/core.logic
(defrel can-fly x)
(fact can-fly :eagle)
(fact can-fly :sparrow)

(defrel has-legs x n)
(fact has-legs :eagle 2)
(fact has-legs :dog 4)
(fact has-legs :spider 8)

;; Declarative query: Which animals can fly?
(run* [animal] (can-fly animal))
;; => (:eagle :sparrow)

;; Query with multiple conditions
(run* [animal]
  (fresh [n]
    (has-legs animal n)
    (can-fly animal)))
;; => (:eagle)
```

**Special features:**
- Declare facts and rules via `defrel` and `fact`
- Queries formulate only the "what", not the "how"
- `fresh` for unbound variables in queries
- Results as Clojure sequences

**Further reading:**
- [core.logic Documentation](https://github.com/clojure/core.logic)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: logict
import Control.Monad.Logic

data Animal = Eagle | Sparrow | Dog | Spider deriving (Show, Eq)

canFly :: Logic Animal
canFly = msum [return Eagle, return Sparrow]

hasLegs :: Logic (Animal, Int)
hasLegs = msum [return (Eagle, 2), return (Dog, 4), return (Spider, 8)]

-- Declarative query: Flying animals with legs
flyingWithLegs :: Logic (Animal, Int)
flyingWithLegs = do
  (animal, legs) <- hasLegs
  flyer <- canFly
  guard (animal == flyer)
  return (animal, legs)

-- observeAll flyingWithLegs => [(Eagle, 2)]
```

**Special features:**
- `Logic` monad models knowledge bases as nondeterministic computations
- Queries via monadic composition (`do` notation)
- `guard` filters results declaratively
- Lazy evaluation enables infinite solution sets

**Further reading:**
- [logict Documentation](https://hackage.haskell.org/package/logict)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Requires: Julog
using Julog

clauses = @julog [
    can_fly(eagle) <<= true,
    can_fly(sparrow) <<= true,
    has_legs(eagle, 2) <<= true,
    has_legs(dog, 4) <<= true,
    has_legs(spider, 8) <<= true,
    flying_with_legs(X, N) <<= can_fly(X) & has_legs(X, N)
]

# Declarative query: Which animals can fly?
resolve(@julog(can_fly(Animal)), clauses)
# => [{Animal => eagle}, {Animal => sparrow}]

# Query with multiple conditions
resolve(@julog(flying_with_legs(Animal, N)), clauses)
# => [{Animal => eagle, N => 2}]
```

**Special features:**
- Prolog-like facts and rules via `@julog` macro
- Queries via `resolve` with automatic search strategy
- Variables (uppercase) are recognized as logical variables
- Integration with Julia ecosystem

**Further reading:**
- [Julog.jl Documentation](https://github.com/ztangent/Julog.jl)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- pred can_fly(string).
:- mode can_fly(out) is multi.
can_fly("eagle").
can_fly("sparrow").

:- pred has_legs(string, int).
:- mode has_legs(out, out) is multi.
has_legs("eagle", 2).
has_legs("dog", 4).
has_legs("spider", 8).

% Declarative query: Which animals can fly?
:- pred flying_animals(list(string)::out) is det.
flying_animals(Animals) :-
    solutions(
        (pred(A::out) is nondet :- can_fly(A)),
        Animals
    ).
% flying_animals(["eagle", "sparrow"])

% Query with multiple conditions
:- pred flying_with_legs(list({string, int})::out) is det.
flying_with_legs(Animals) :-
    solutions(
        (pred({A, N}::out) is nondet :-
            can_fly(A), has_legs(A, N)),
        Animals
    ).
% flying_with_legs([{"eagle", 2}])
```

**Special features:**
- Facts and rules form the knowledge base — queries formulate only the "what"
- Mode declarations define the data flow direction (which parameters are inputs or outputs)
- `solutions/2` collects all results deterministically
- Wildcard `_` for irrelevant variables (as in Prolog)
- Compiler checks completeness and determinism of queries

**Further reading:**
- [Mercury Language Reference](https://www.mercurylang.org/information/doc-release/mercury_ref/index.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
can_fly(eagle).
can_fly(sparrow).

has_legs(eagle, 2).
has_legs(dog, 4).
has_legs(spider, 8).

% Declarative query: Which animals can fly?
% ?- can_fly(Animal).
% Animal = eagle ;
% Animal = sparrow.

% Query with multiple conditions
% ?- can_fly(Animal), has_legs(Animal, _).
% Animal = eagle.
```

**Special features:**
- Facts and rules form the knowledge base — queries formulate only the "what"
- Prolog automatically searches all solutions via backtracking
- `findall/3`, `bagof/3`, `setof/3` for collecting all results
- Variables in queries are automatically bound through unification
- Wildcard `_` for irrelevant variables

**Further reading:**
- [SWI-Prolog Documentation - Built-in Predicates](https://www.swi-prolog.org/pldoc/man?section=builtin)

</TabItem>
<TabItem value="python" label="Python">

```python
# Requires: kanren
from kanren import run, var, fact, Relation

can_fly = Relation()
fact(can_fly, "eagle")
fact(can_fly, "sparrow")

has_legs = Relation()
fact(has_legs, "eagle", 2)
fact(has_legs, "dog", 4)
fact(has_legs, "spider", 8)

# Declarative query: Which animals can fly?
animal = var()
run(0, animal, can_fly(animal))
# => ("eagle", "sparrow")

# Query with multiple conditions
n = var()
run(0, animal, can_fly(animal), has_legs(animal, n))
# => ("eagle",)
```

**Special features:**
- Declare facts via `Relation` and `fact`
- Queries formulated only via relations and logical variables
- `run(0, ...)` finds all solutions
- Alternative: `pyDatalog` for SQL-like declarative queries

**Further reading:**
- [kanren Documentation](https://github.com/pythological/kanren)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Requires: racklog
(define %can-fly
  (%rel ()
    [('eagle)]
    [('sparrow)]))

(define %has-legs
  (%rel ()
    [('eagle 2)]
    [('dog 4)]
    [('spider 8)]))

;; Declarative query: Which animals can fly?
(%find-all (animal) (%can-fly animal))
;; => '((animal . eagle) (animal . sparrow))

;; Query with multiple conditions
(%find-all (animal) (%can-fly animal) (%has-legs animal _))
;; => '((animal . eagle))
```

**Special features:**
- `%rel` defines relations as knowledge base
- `%find-all` collects all results of a query
- Wildcard `_` for irrelevant variables
- Seamless integration with Racket expressions

**Further reading:**
- [Racklog Documentation](https://docs.racket-lang.org/racklog/)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; miniKanren
(define (can-flyo x)
  (conde
    [(== x 'eagle)]
    [(== x 'sparrow)]))

(define (has-legso x n)
  (conde
    [(== x 'eagle) (== n 2)]
    [(== x 'dog) (== n 4)]
    [(== x 'spider) (== n 8)]))

;; Declarative query: Which animals can fly?
(run* (animal) (can-flyo animal))
;; => (eagle sparrow)

;; Query with multiple conditions
(run* (animal) (fresh (n) (can-flyo animal) (has-legso animal n)))
;; => (eagle)
```

**Special features:**
- Relations as Scheme functions with logical goals
- `conde` for alternative facts
- Queries formulated only via goals and logical variables
- Result list is automatically generated via backtracking

**Further reading:**
- [miniKanren.org](http://minikanren.org/)

</TabItem>
</Tabs>


## 19.4.3. Constraint Logic Programming

Extension of logical programming with constraints (restrictions) over variable domains. Instead of concrete values, conditions are specified that the solver uses to efficiently restrict and search the solution space.

### Languages {#sprachen}

<Tabs availableTabs={['prolog']} yellowTabs={['clojure', 'racket', 'scheme']} orangeTabs={['haskell', 'python']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Requires: org.clojure/core.logic
;; core.logic.fd for Finite-Domain-Constraints

;; Find x and y with: x + y = 10, x ∈ [1,9], y ∈ [1,9], x < y
(run* [q]
  (fresh [x y]
    (fd/in x (fd/interval 1 9))
    (fd/in y (fd/interval 1 9))
    (fd/+ x y 10)
    (fd/< x y)
    (== q [x y])))
;; => ([1 9] [2 8] [3 7] [4 6])
```

**Special features:**
- `core.logic.fd` extends core.logic with Finite-Domain-Constraints (CLP(FD))
- `fd/in` restricts variables to domains
- `fd/+`, `fd/<`, `fd/!=` etc. as constraint operators
- Automatic constraint propagation to reduce search space

**Further reading:**
- [core.logic Finite Domains](https://github.com/clojure/core.logic/wiki/Features#finite-domains)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: sbv
import Data.SBV

-- Find x and y with: x + y = 10, x ∈ [1,9], y ∈ [1,9], x < y
solve :: IO AllSatResult
solve = allSat $ do
  x <- sInteger "x"
  y <- sInteger "y"
  constrain $ x .>= 1 .&& x .<= 9
  constrain $ y .>= 1 .&& y .<= 9
  constrain $ x + y .== 10
  constrain $ x .< y

-- Solutions: x=1,y=9 | x=2,y=8 | x=3,y=7 | x=4,y=6
```

**Special features:**
- `sbv` package binds SMT solvers (Z3, Boolector etc.)
- Symbolic variables via `sInteger`, `sBool` etc.
- `constrain` for conditions, `allSat` for all solutions
- Also usable for verification and formal methods

**Further reading:**
- [sbv Documentation](https://hackage.haskell.org/package/sbv)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Requires: use_module(library(clpfd)).
% Find X and Y with: X + Y = 10, X ∈ [1,9], Y ∈ [1,9], X < Y
solve(X, Y) :-
    X in 1..9,
    Y in 1..9,
    X + Y #= 10,
    X #< Y.

% ?- solve(X, Y), label([X, Y]).
% X = 1, Y = 9 ;
% X = 2, Y = 8 ;
% X = 3, Y = 7 ;
% X = 4, Y = 6.
```

**Special features:**
- CLP(FD) for Finite-Domain-Constraints (`library(clpfd)` in SWI-Prolog)
- CLP(B) for boolean constraints, CLP(Q/R) for rational/real numbers
- `#=`, `#<`, `#\=` etc. as constraint operators
- Constraint propagation automatically reduces search space
- `label/1` solves constraints via enumeration

**Further reading:**
- [SWI-Prolog Documentation - CLP(FD)](https://www.swi-prolog.org/pldoc/man?section=clpfd)

</TabItem>
<TabItem value="python" label="Python">

```python
# Requires: python-constraint
from constraint import Problem

# Find x and y with: x + y = 10, x in [1,9], y in [1,9], x < y
problem = Problem()
problem.addVariable("x", range(1, 10))
problem.addVariable("y", range(1, 10))
problem.addConstraint(lambda x, y: x + y == 10)
problem.addConstraint(lambda x, y: x < y)

solutions = problem.getSolutions()
# => [{'x': 1, 'y': 9}, {'x': 2, 'y': 8},
#     {'x': 3, 'y': 7}, {'x': 4, 'y': 6}]
```

**Special features:**
- `python-constraint` provides a generic constraint solver
- Variable domains definable via lists or ranges
- Constraints as lambda functions
- Alternative: Google OR-Tools for larger constraint problems

**Further reading:**
- [python-constraint Documentation](https://github.com/python-constraint/python-constraint)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Requires: rosette (Solver-Aided Programming)

;; Find x and y with: x + y = 10, x ∈ [1,9], y ∈ [1,9], x < y
(define-symbolic x y integer?)
(define sol
  (solve
    (assert (and (>= x 1) (<= x 9)))
    (assert (and (>= y 1) (<= y 9)))
    (assert (= (+ x y) 10))
    (assert (< x y))))

(evaluate x sol)  ;; => 1
(evaluate y sol)  ;; => 9
```

**Special features:**
- Rosette embeds solver-aided programming directly in Racket
- `define-symbolic` for symbolic variables
- `solve` finds a solution that satisfies all constraints
- Based on SMT solvers (Z3)
- Also usable for program verification and synthesis

**Further reading:**
- [Rosette Documentation](https://docs.racket-lang.org/rosette-guide/)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; cKanren (Constraint extension of miniKanren)
;; Find x and y with: x + y = 10, x ∈ [1,9], y ∈ [1,9], x < y
(run* (q)
  (fresh (x y)
    (infd x y (range 1 9))
    (plusfd x y 10)
    (lessfd x y)
    (== q (list x y))))
;; => ((1 9) (2 8) (3 7) (4 6))
```

**Special features:**
- cKanren extends miniKanren with constraint domains
- `infd` for domain restriction, `plusfd`/`lessfd` as constraint operators
- Constraint propagation and backtracking combined
- Implements CLP(FD) (Constraint Logic Programming over Finite Domains)

**Further reading:**
- [cKanren Paper](http://scheme2011.ucombinator.org/papers/Alvis2011.pdf)

</TabItem>
</Tabs>


## 19.4.4. Mode and Determinism Analysis

Static analysis of data flow direction (mode: which parameters are inputs, which are outputs) and solution count (determinism: does a computation yield exactly one, at most one, or arbitrarily many results). This analysis enables compiler optimizations and early error detection. In logical programming, it is primarily known from Mercury.

### Languages {#sprachen}

<Tabs availableTabs={['mercury']} yellowTabs={['ada', 'fortran']} orangeTabs={['haskell', 'idris', 'prolog']}>
<TabItem value="ada" label="Ada">

```ada
-- Parameter modes: in (input), out (output), in out (both)
procedure Compute(
    Input  : in     Integer;    -- Only reading allowed
    Output :    out Integer;    -- Must be written
    Both   : in out Integer)    -- Read and write
is
begin
    Output := Input + Both;
    Both   := Both * 2;
end Compute;

-- Compiler enforces: Input may not be assigned
-- Compiler enforces: Output must be assigned before procedure end
```

**Special features:**
- `in`, `out`, `in out` as declarative parameter modes
- Compiler checks compliance with modes at compile time
- `in` is default if no mode is specified
- No determinism system like in Mercury, but strict mode checking

**Further reading:**
- [Ada Reference Manual - Formal Parameter Modes](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-2.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
subroutine compute(input, output, both)
    integer, intent(in)    :: input   ! Only reading allowed
    integer, intent(out)   :: output  ! Must be written
    integer, intent(inout) :: both    ! Read and write

    output = input + both
    both = both * 2
end subroutine

! Compiler checks intent declarations at compile time
! intent(in) parameters may not be modified
```

**Special features:**
- `intent(in)`, `intent(out)`, `intent(inout)` as parameter modes (since Fortran 90)
- Compiler checks compliance with intent declarations
- Optimizations possible: `intent(in)` allows copy elision
- No determinism system, but strict mode checking

**Further reading:**
- [Fortran Wiki - Intent](https://fortranwiki.org/fortran/show/intent)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Determinism encoded via return type

-- det: exactly one result (always successful)
add :: Int -> Int -> Int
add x y = x + y

-- semidet: at most one result (may fail)
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

-- nondet: arbitrarily many results
factors :: Int -> [Int]
factors n = [x | x <- [1..n], n `mod` x == 0]

-- multi: at least one result
-- Requires: Data.List.NonEmpty
positiveFactors :: Int -> NonEmpty Int
positiveFactors n = 1 :| [x | x <- [2..n], n `mod` x == 0]
```

**Special features:**
- Determinism is expressed via return type instead of annotations
- `a` → deterministic, `Maybe a` → semi-deterministic, `[a]` → nondeterministic
- `NonEmpty a` → at least one result (multi)
- Type system enforces correct handling of error cases
- No explicit mode system, but purity guarantees referential transparency

**Further reading:**
- [Haskell Wiki - Maybe](https://wiki.haskell.org/Maybe)

</TabItem>
<TabItem value="idris" label="Idris">

```haskell
-- Totality checking as determinism guarantee

-- 'total' ensures: terminates and is defined for all inputs
total
factorial : Nat -> Nat
factorial Z     = 1
factorial (S n) = (S n) * factorial n

-- Type encodes solution count (like Haskell, but stricter)
total
safeDivide : Nat -> Nat -> Maybe Nat
safeDivide _ Z     = Nothing
safeDivide x y     = Just (divNat x y)

-- Dependent types can encode modes more precisely
-- The type itself describes the relationship between input and output
total
append : Vect n a -> Vect m a -> Vect (n + m) a
append []        ys = ys
append (x :: xs) ys = x :: append xs ys
```

**Special features:**
- `total` annotation enforces termination and completeness
- Dependent types enable precise encoding of input/output relationships
- Type system as static analysis: `Vect (n + m) a` describes output length
- Stricter than Haskell: compiler proves termination and exhaustiveness

**Further reading:**
- [Idris Documentation - Totality Checking](https://idris2.readthedocs.io/en/latest/tutorial/theorems.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Mode declarations: in (input), out (output)
% Determinism: det, semidet, nondet, multi, failure, erroneous

% det: exactly one result (always successful)
:- pred add(int::in, int::in, int::out) is det.
add(X, Y, Result) :- Result = X + Y.

% semidet: at most one result (may fail)
:- pred safe_divide(int::in, int::in, int::out) is semidet.
safe_divide(X, Y, Result) :-
    Y \= 0,
    Result = X // Y.

% Multi-mode predicates: different modes for the same predicate
:- pred append(list(T), list(T), list(T)).
:- mode append(in, in, out) is det.       % Concatenation
:- mode append(out, out, in) is multi.     % Decomposition
append([], Ys, Ys).
append([X | Xs], Ys, [X | Zs]) :-
    append(Xs, Ys, Zs).
```

**Special features:**
- Mercury is _the_ reference language for mode and determinism analysis — these concepts are integral parts of the type system
- Mode declarations (`in`, `out`, `di`, `uo`) define data flow direction statically
- Determinism categories: `det` (exactly 1), `semidet` (0 or 1), `multi` (≥1), `nondet` (≥0), `failure` (0), `erroneous`
- The compiler verifies all mode and determinism declarations at compile time
- Multi-mode predicates: the same predicate can be declared with different modes (e.g., `append` for concatenation and decomposition)
- Enables compiler optimizations (e.g., avoiding choice points for `det` predicates)

**Further reading:**
- [Mercury Language Reference - Modes](https://www.mercurylang.org/information/doc-release/mercury_ref/Modes.html)
- [Mercury Language Reference - Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Mode declarations (PlDoc convention)
% +: input (nonvar), -: output (var), ?: both

%! add(+X:integer, +Y:integer, -Result:integer) is det.
add(X, Y, Result) :-
    Result is X + Y.

%! safe_divide(+X:integer, +Y:integer, -Result:integer) is semidet.
safe_divide(X, Y, Result) :-
    Y =\= 0,
    Result is X // Y.

%! factors(+N:integer, -X:integer) is nondet.
factors(N, X) :-
    between(1, N, X),
    N mod X =:= 0.

% det directive for runtime checking (since SWI-Prolog 8.3.24)
:- det(add/3).
```

**Special features:**
- PlDoc conventions: `+` (input), `-` (output), `?` (both) for mode documentation
- Determinism categories: `det`, `semidet`, `nondet`, `multi` in documentation
- `:- det(Pred/Arity)` directive for runtime determinism checking (since SWI-Prolog 8.3.24)
- No static compile-time analysis like in Mercury — checking occurs at runtime

**Further reading:**
- [SWI-Prolog Documentation - Determinism](https://www.swi-prolog.org/pldoc/man?section=determinism)

</TabItem>
</Tabs>