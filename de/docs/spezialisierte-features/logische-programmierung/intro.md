---
slug: /spezialisierte-features/logische-programmierung
title: 19.4. Logische und Constraint-Programmierung
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 19.4. Logische und Constraint-Programmierung

Unifikation, Backtracking, deklarative Abfragen, Constraint Solving.

## 19.4.1. Unifikation und Backtracking

Unifikation gleicht zwei Terme ab, indem Variablen so gebunden werden, dass beide Terme identisch werden. Backtracking ermöglicht die systematische Suche nach allen möglichen Lösungen, indem bei einem Fehlschlag alternative Berechnungspfade erkundet werden. Zusammen bilden sie das Fundament der logischen Programmierung.

### Sprachen {#sprachen}

<Tabs availableTabs={['mercury', 'prolog']} yellowTabs={['clojure', 'racket', 'scheme']} orangeTabs={['common-lisp', 'haskell', 'julia', 'ocaml', 'python']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Benötigt: org.clojure/core.logic
(defrel parent x y)
(fact parent :tom :bob)
(fact parent :bob :ann)
(fact parent :bob :pat)

;; Unifikation: fresh-Variablen werden automatisch gebunden
;; Backtracking: run* findet alle Lösungen
(run* [who]
  (fresh [y]
    (parent :tom y)
    (parent y who)))
;; => (:ann :pat)
```

**Besonderheiten:**
- core.logic implementiert miniKanren, ein eingebettetes logisches Programmiersystem
- `fresh` erzeugt logische Variablen, `==` unifiziert Terme
- `run*` sucht alle Lösungen über Backtracking, `run n` begrenzt auf n Lösungen
- Nahtlose Integration mit Clojure-Datenstrukturen

**Weiterführende Links:**
- [core.logic Documentation](https://github.com/clojure/core.logic)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Backtracking über Screamer (nondeterministische Programmierung)
;; Benötigt: Screamer-Bibliothek
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

**Besonderheiten:**
- Screamer erweitert Common Lisp um nondeterministische Berechnungen
- `a-member-of` wählt nondeterministisch, `fail` löst Backtracking aus
- `all-values` sammelt alle Lösungen
- Keine echte Unifikation, aber vollständiges Backtracking über Choice-Points

**Weiterführende Links:**
- [Screamer Documentation](https://nikodemus.github.io/screamer/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: logict
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

**Besonderheiten:**
- `logict`-Paket stellt die `Logic`-Monade für Backtracking bereit
- `msum` für nondeterministische Auswahl, `guard` für Bedingungen
- `observeAll` sammelt alle Lösungen, `observe` die erste
- Für echte Unifikation: `unification-fd`-Paket

**Weiterführende Links:**
- [logict Documentation](https://hackage.haskell.org/package/logict)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Benötigt: Julog
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

**Besonderheiten:**
- Julog.jl implementiert einen Prolog-ähnlichen Resolutionsmechanismus
- `@julog`-Makro ermöglicht Prolog-ähnliche Syntax in Julia
- Unifikation und Backtracking analog zu Prolog
- Integration mit Julia-Datentypen

**Weiterführende Links:**
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

% Alle Lösungen sammeln
:- pred all_grandchildren(string::in, list(string)::out) is det.
all_grandchildren(X, Results) :-
    solutions(
        (pred(Z::out) is nondet :- grandparent(X, Z)),
        Results
    ).
% all_grandchildren("tom", ["ann", "pat"])
```

**Besonderheiten:**
- Unifikation und Backtracking als Kernmechanismen (wie Prolog), aber statisch typisiert
- Mode-Deklarationen (`in`, `out`) definieren die Datenflussrichtung jeder Variable
- Determinismus-Deklarationen (`multi`, `nondet`, `det`) werden vom Compiler verifiziert
- `solutions/2` sammelt alle Lösungen — Compiler garantiert durch `det`-Determinismus, dass das Sammeln immer gelingt

**Weiterführende Links:**
- [Mercury Language Reference](https://www.mercurylang.org/information/doc-release/mercury_ref/index.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Benötigt: OCanren *)
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

**Besonderheiten:**
- OCanren ist eine typsichere miniKanren-Implementierung für OCaml
- `===` für Unifikation, `conde` für disjunktive Ziele
- `fresh` für frische logische Variablen
- Statische Typsicherheit bei logischer Programmierung

**Weiterführende Links:**
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

% Alle Lösungen sammeln
% ?- findall(Who, grandparent(tom, Who), Results).
% Results = [ann, pat].
```

**Besonderheiten:**
- Unifikation und Backtracking sind die fundamentalen Kernmechanismen von Prolog
- Variablen (Großbuchstaben) werden durch Unifikation automatisch gebunden
- Semikolon (`;`) in der interaktiven Abfrage fordert weitere Lösungen via Backtracking
- Cut (`!`) zur expliziten Steuerung des Backtrackings
- `findall/3`, `bagof/3`, `setof/3` zum Sammeln aller Lösungen

**Weiterführende Links:**
- [SWI-Prolog Documentation - Unification](https://www.swi-prolog.org/pldoc/man?section=unify)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: kanren
from kanren import run, var, fact, Relation

parent = Relation()
fact(parent, "tom", "bob")
fact(parent, "bob", "ann")
fact(parent, "bob", "pat")

x, y = var(), var()
result = run(0, y, parent("tom", x), parent(x, y))
# result = ("ann", "pat")
```

**Besonderheiten:**
- `kanren`-Paket implementiert miniKanren für Python
- `var()` erzeugt logische Variablen, `run` führt Unifikation und Backtracking durch
- `run(0, ...)` sucht alle Lösungen, `run(n, ...)` begrenzt auf n
- Alternative: `pyDatalog` für Datalog-basierte logische Programmierung

**Weiterführende Links:**
- [kanren Documentation](https://github.com/pythological/kanren)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Benötigt: racklog
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

**Besonderheiten:**
- Racklog bettet Prolog-ähnliche logische Programmierung in Racket ein
- `%rel` definiert Relationen, `%find-all` sucht alle Lösungen
- Volle Unifikation und Backtracking
- Nahtlose Integration mit Racket-Ausdrücken

**Weiterführende Links:**
- [Racklog Documentation](https://docs.racket-lang.org/racklog/)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; miniKanren (ursprünglich für Scheme entwickelt)
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

**Besonderheiten:**
- miniKanren wurde ursprünglich in Scheme entwickelt (Daniel P. Friedman, William E. Byrd)
- `==` für Unifikation, `conde` für disjunktive Ziele, `fresh` für neue Variablen
- `run*` sucht alle Lösungen über Backtracking
- Minimale Implementierung mit mächtigem Ausdrucksvermögen

**Weiterführende Links:**
- [miniKanren.org](http://minikanren.org/)

</TabItem>
</Tabs>


## 19.4.2. Deklarative Abfragen

Deklarative Formulierung von Anfragen an eine Wissensbasis aus Fakten und Regeln. Anstatt den Lösungsweg zu beschreiben, wird nur das gewünschte Ergebnis spezifiziert — die Suchstrategie wird automatisch vom System übernommen.

### Sprachen {#sprachen}

<Tabs availableTabs={['mercury', 'prolog']} yellowTabs={['clojure', 'racket', 'scheme']} orangeTabs={['haskell', 'julia', 'python']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Benötigt: org.clojure/core.logic
(defrel can-fly x)
(fact can-fly :eagle)
(fact can-fly :sparrow)

(defrel has-legs x n)
(fact has-legs :eagle 2)
(fact has-legs :dog 4)
(fact has-legs :spider 8)

;; Deklarative Abfrage: Welche Tiere können fliegen?
(run* [animal] (can-fly animal))
;; => (:eagle :sparrow)

;; Abfrage mit mehreren Bedingungen
(run* [animal]
  (fresh [n]
    (has-legs animal n)
    (can-fly animal)))
;; => (:eagle)
```

**Besonderheiten:**
- Fakten und Regeln über `defrel` und `fact` deklarieren
- Abfragen formulieren nur das „Was", nicht das „Wie"
- `fresh` für ungebundene Variablen in Abfragen
- Ergebnisse als Clojure-Sequenzen

**Weiterführende Links:**
- [core.logic Documentation](https://github.com/clojure/core.logic)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: logict
import Control.Monad.Logic

data Animal = Eagle | Sparrow | Dog | Spider deriving (Show, Eq)

canFly :: Logic Animal
canFly = msum [return Eagle, return Sparrow]

hasLegs :: Logic (Animal, Int)
hasLegs = msum [return (Eagle, 2), return (Dog, 4), return (Spider, 8)]

-- Deklarative Abfrage: Fliegende Tiere mit Beinen
flyingWithLegs :: Logic (Animal, Int)
flyingWithLegs = do
  (animal, legs) <- hasLegs
  flyer <- canFly
  guard (animal == flyer)
  return (animal, legs)

-- observeAll flyingWithLegs => [(Eagle, 2)]
```

**Besonderheiten:**
- `Logic`-Monade bildet Wissensbasen als nondeterministische Berechnungen ab
- Abfragen über monadische Komposition (`do`-Notation)
- `guard` filtert Ergebnisse deklarativ
- Lazy Evaluation ermöglicht unendliche Lösungsmengen

**Weiterführende Links:**
- [logict Documentation](https://hackage.haskell.org/package/logict)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Benötigt: Julog
using Julog

clauses = @julog [
    can_fly(eagle) <<= true,
    can_fly(sparrow) <<= true,
    has_legs(eagle, 2) <<= true,
    has_legs(dog, 4) <<= true,
    has_legs(spider, 8) <<= true,
    flying_with_legs(X, N) <<= can_fly(X) & has_legs(X, N)
]

# Deklarative Abfrage: Welche Tiere können fliegen?
resolve(@julog(can_fly(Animal)), clauses)
# => [{Animal => eagle}, {Animal => sparrow}]

# Abfrage mit mehreren Bedingungen
resolve(@julog(flying_with_legs(Animal, N)), clauses)
# => [{Animal => eagle, N => 2}]
```

**Besonderheiten:**
- Prolog-ähnliche Fakten und Regeln über `@julog`-Makro
- Abfragen durch `resolve` mit automatischer Suchstrategie
- Variablen (Großbuchstaben) werden als logische Variablen erkannt
- Integration mit Julia-Ökosystem

**Weiterführende Links:**
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

% Deklarative Abfrage: Welche Tiere können fliegen?
:- pred flying_animals(list(string)::out) is det.
flying_animals(Animals) :-
    solutions(
        (pred(A::out) is nondet :- can_fly(A)),
        Animals
    ).
% flying_animals(["eagle", "sparrow"])

% Abfrage mit mehreren Bedingungen
:- pred flying_with_legs(list({string, int})::out) is det.
flying_with_legs(Animals) :-
    solutions(
        (pred({A, N}::out) is nondet :-
            can_fly(A), has_legs(A, N)),
        Animals
    ).
% flying_with_legs([{"eagle", 2}])
```

**Besonderheiten:**
- Fakten und Regeln bilden die Wissensbasis — Abfragen formulieren nur das „Was"
- Mode-Deklarationen definieren die Datenflussrichtung (welche Parameter Ein- bzw. Ausgaben sind)
- `solutions/2` sammelt alle Ergebnisse deterministisch
- Wildcard `_` für irrelevante Variablen (wie in Prolog)
- Compiler prüft Vollständigkeit und Determinismus der Abfragen

**Weiterführende Links:**
- [Mercury Language Reference](https://www.mercurylang.org/information/doc-release/mercury_ref/index.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
can_fly(eagle).
can_fly(sparrow).

has_legs(eagle, 2).
has_legs(dog, 4).
has_legs(spider, 8).

% Deklarative Abfrage: Welche Tiere können fliegen?
% ?- can_fly(Animal).
% Animal = eagle ;
% Animal = sparrow.

% Abfrage mit mehreren Bedingungen
% ?- can_fly(Animal), has_legs(Animal, _).
% Animal = eagle.
```

**Besonderheiten:**
- Fakten und Regeln bilden die Wissensbasis — Abfragen formulieren nur das „Was"
- Prolog sucht automatisch alle Lösungen über Backtracking
- `findall/3`, `bagof/3`, `setof/3` zum Sammeln aller Ergebnisse
- Variablen in Abfragen werden automatisch durch Unifikation gebunden
- Wildcard `_` für irrelevante Variablen

**Weiterführende Links:**
- [SWI-Prolog Documentation - Built-in Predicates](https://www.swi-prolog.org/pldoc/man?section=builtin)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: kanren
from kanren import run, var, fact, Relation

can_fly = Relation()
fact(can_fly, "eagle")
fact(can_fly, "sparrow")

has_legs = Relation()
fact(has_legs, "eagle", 2)
fact(has_legs, "dog", 4)
fact(has_legs, "spider", 8)

# Deklarative Abfrage: Welche Tiere können fliegen?
animal = var()
run(0, animal, can_fly(animal))
# => ("eagle", "sparrow")

# Abfrage mit mehreren Bedingungen
n = var()
run(0, animal, can_fly(animal), has_legs(animal, n))
# => ("eagle",)
```

**Besonderheiten:**
- Fakten über `Relation` und `fact` deklarieren
- Abfragen nur über Relationen und logische Variablen formuliert
- `run(0, ...)` findet alle Lösungen
- Alternative: `pyDatalog` für SQL-ähnliche deklarative Abfragen

**Weiterführende Links:**
- [kanren Documentation](https://github.com/pythological/kanren)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Benötigt: racklog
(define %can-fly
  (%rel ()
    [('eagle)]
    [('sparrow)]))

(define %has-legs
  (%rel ()
    [('eagle 2)]
    [('dog 4)]
    [('spider 8)]))

;; Deklarative Abfrage: Welche Tiere können fliegen?
(%find-all (animal) (%can-fly animal))
;; => '((animal . eagle) (animal . sparrow))

;; Abfrage mit mehreren Bedingungen
(%find-all (animal) (%can-fly animal) (%has-legs animal _))
;; => '((animal . eagle))
```

**Besonderheiten:**
- `%rel` definiert Relationen als Wissensbasis
- `%find-all` sammelt alle Ergebnisse einer Abfrage
- Wildcard `_` für irrelevante Variablen
- Nahtlose Integration mit Racket-Ausdrücken

**Weiterführende Links:**
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

;; Deklarative Abfrage: Welche Tiere können fliegen?
(run* (animal) (can-flyo animal))
;; => (eagle sparrow)

;; Abfrage mit mehreren Bedingungen
(run* (animal) (fresh (n) (can-flyo animal) (has-legso animal n)))
;; => (eagle)
```

**Besonderheiten:**
- Relationen als Scheme-Funktionen mit logischen Zielen
- `conde` für alternative Fakten
- Abfragen nur über Ziele und logische Variablen formuliert
- Ergebnisliste wird automatisch durch Backtracking generiert

**Weiterführende Links:**
- [miniKanren.org](http://minikanren.org/)

</TabItem>
</Tabs>


## 19.4.3. Constraint Logic Programming

Erweiterung der logischen Programmierung um Constraints (Einschränkungen) über Variablen-Domänen. Statt konkreter Werte werden Bedingungen spezifiziert, die der Solver verwendet, um den Lösungsraum effizient einzuschränken und zu durchsuchen.

### Sprachen {#sprachen}

<Tabs availableTabs={['prolog']} yellowTabs={['clojure', 'racket', 'scheme']} orangeTabs={['haskell', 'python']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Benötigt: org.clojure/core.logic
;; core.logic.fd für Finite-Domain-Constraints

;; Finde x und y mit: x + y = 10, x ∈ [1,9], y ∈ [1,9], x < y
(run* [q]
  (fresh [x y]
    (fd/in x (fd/interval 1 9))
    (fd/in y (fd/interval 1 9))
    (fd/+ x y 10)
    (fd/< x y)
    (== q [x y])))
;; => ([1 9] [2 8] [3 7] [4 6])
```

**Besonderheiten:**
- `core.logic.fd` erweitert core.logic um Finite-Domain-Constraints (CLP(FD))
- `fd/in` schränkt Variablen auf Domänen ein
- `fd/+`, `fd/<`, `fd/!=` etc. als Constraint-Operatoren
- Automatische Constraint-Propagation zur Reduzierung des Suchraums

**Weiterführende Links:**
- [core.logic Finite Domains](https://github.com/clojure/core.logic/wiki/Features#finite-domains)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: sbv
import Data.SBV

-- Finde x und y mit: x + y = 10, x ∈ [1,9], y ∈ [1,9], x < y
solve :: IO AllSatResult
solve = allSat $ do
  x <- sInteger "x"
  y <- sInteger "y"
  constrain $ x .>= 1 .&& x .<= 9
  constrain $ y .>= 1 .&& y .<= 9
  constrain $ x + y .== 10
  constrain $ x .< y

-- Lösungen: x=1,y=9 | x=2,y=8 | x=3,y=7 | x=4,y=6
```

**Besonderheiten:**
- `sbv`-Paket bindet SMT-Solver (Z3, Boolector etc.)
- Symbolische Variablen über `sInteger`, `sBool` etc.
- `constrain` für Bedingungen, `allSat` für alle Lösungen
- Auch für Verifikation und formale Methoden einsetzbar

**Weiterführende Links:**
- [sbv Documentation](https://hackage.haskell.org/package/sbv)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Benötigt: use_module(library(clpfd)).
% Finde X und Y mit: X + Y = 10, X ∈ [1,9], Y ∈ [1,9], X < Y
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

**Besonderheiten:**
- CLP(FD) für Finite-Domain-Constraints (`library(clpfd)` in SWI-Prolog)
- CLP(B) für boolesche Constraints, CLP(Q/R) für rationale/reelle Zahlen
- `#=`, `#<`, `#\=` etc. als Constraint-Operatoren
- Constraint-Propagation reduziert den Suchraum automatisch
- `label/1` löst die Constraints durch Enumeration

**Weiterführende Links:**
- [SWI-Prolog Documentation - CLP(FD)](https://www.swi-prolog.org/pldoc/man?section=clpfd)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: python-constraint
from constraint import Problem

# Finde x und y mit: x + y = 10, x in [1,9], y in [1,9], x < y
problem = Problem()
problem.addVariable("x", range(1, 10))
problem.addVariable("y", range(1, 10))
problem.addConstraint(lambda x, y: x + y == 10)
problem.addConstraint(lambda x, y: x < y)

solutions = problem.getSolutions()
# => [{'x': 1, 'y': 9}, {'x': 2, 'y': 8},
#     {'x': 3, 'y': 7}, {'x': 4, 'y': 6}]
```

**Besonderheiten:**
- `python-constraint` bietet einen generischen Constraint-Solver
- Variablen-Domänen über Listen oder Ranges definierbar
- Constraints als Lambda-Funktionen
- Alternative: Google OR-Tools für größere Constraint-Probleme

**Weiterführende Links:**
- [python-constraint Documentation](https://github.com/python-constraint/python-constraint)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Benötigt: rosette (Solver-Aided Programming)

;; Finde x und y mit: x + y = 10, x ∈ [1,9], y ∈ [1,9], x < y
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

**Besonderheiten:**
- Rosette bettet Solver-gestützte Programmierung direkt in Racket ein
- `define-symbolic` für symbolische Variablen
- `solve` findet eine Lösung, die alle Constraints erfüllt
- Basiert auf SMT-Solvern (Z3)
- Auch für Programmverifikation und -synthese einsetzbar

**Weiterführende Links:**
- [Rosette Documentation](https://docs.racket-lang.org/rosette-guide/)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; cKanren (Constraint-Erweiterung von miniKanren)
;; Finde x und y mit: x + y = 10, x ∈ [1,9], y ∈ [1,9], x < y
(run* (q)
  (fresh (x y)
    (infd x y (range 1 9))
    (plusfd x y 10)
    (lessfd x y)
    (== q (list x y))))
;; => ((1 9) (2 8) (3 7) (4 6))
```

**Besonderheiten:**
- cKanren erweitert miniKanren um Constraint-Domänen
- `infd` für Domänen-Einschränkung, `plusfd`/`lessfd` als Constraint-Operatoren
- Constraint-Propagation und Backtracking kombiniert
- Implementiert CLP(FD) (Constraint Logic Programming over Finite Domains)

**Weiterführende Links:**
- [cKanren Paper](http://scheme2011.ucombinator.org/papers/Alvis2011.pdf)

</TabItem>
</Tabs>


## 19.4.4. Modus- und Determinismus-Analyse

Statische Analyse der Datenflussrichtung (Modus: welche Parameter sind Eingaben, welche Ausgaben) und der Lösungsanzahl (Determinismus: liefert eine Berechnung genau ein, höchstens ein oder beliebig viele Ergebnisse). Diese Analyse ermöglicht Compiler-Optimierungen und frühzeitige Fehlererkennung. In der logischen Programmierung ist sie vor allem aus Mercury bekannt.

### Sprachen {#sprachen}

<Tabs availableTabs={['mercury']} yellowTabs={['ada', 'fortran']} orangeTabs={['haskell', 'idris', 'prolog']}>
<TabItem value="ada" label="Ada">

```ada
-- Parameter-Modi: in (Eingabe), out (Ausgabe), in out (beides)
procedure Compute(
    Input  : in     Integer;    -- Nur lesen erlaubt
    Output :    out Integer;    -- Muss geschrieben werden
    Both   : in out Integer)    -- Lesen und Schreiben
is
begin
    Output := Input + Both;
    Both   := Both * 2;
end Compute;

-- Compiler erzwingt: Input darf nicht zugewiesen werden
-- Compiler erzwingt: Output muss vor Prozedur-Ende zugewiesen werden
```

**Besonderheiten:**
- `in`, `out`, `in out` als deklarative Parameter-Modi
- Compiler prüft Einhaltung der Modi zur Compile-Zeit
- `in` ist Standard, wenn kein Modus angegeben
- Kein Determinismus-System wie in Mercury, aber strikte Modus-Prüfung

**Weiterführende Links:**
- [Ada Reference Manual - Formal Parameter Modes](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-2.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
subroutine compute(input, output, both)
    integer, intent(in)    :: input   ! Nur lesen erlaubt
    integer, intent(out)   :: output  ! Muss geschrieben werden
    integer, intent(inout) :: both    ! Lesen und Schreiben

    output = input + both
    both = both * 2
end subroutine

! Compiler prüft Intent-Deklarationen zur Compile-Zeit
! intent(in)-Parameter dürfen nicht verändert werden
```

**Besonderheiten:**
- `intent(in)`, `intent(out)`, `intent(inout)` als Parameter-Modi (seit Fortran 90)
- Compiler prüft Einhaltung der Intent-Deklarationen
- Optimierungen möglich: `intent(in)` erlaubt Copy-Elision
- Kein Determinismus-System, aber strikte Modus-Prüfung

**Weiterführende Links:**
- [Fortran Wiki - Intent](https://fortranwiki.org/fortran/show/intent)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Determinismus über Rückgabetyp kodiert

-- det: genau ein Ergebnis (immer erfolgreich)
add :: Int -> Int -> Int
add x y = x + y

-- semidet: höchstens ein Ergebnis (kann fehlschlagen)
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

-- nondet: beliebig viele Ergebnisse
factors :: Int -> [Int]
factors n = [x | x <- [1..n], n `mod` x == 0]

-- multi: mindestens ein Ergebnis
-- Benötigt: Data.List.NonEmpty
positiveFactors :: Int -> NonEmpty Int
positiveFactors n = 1 :| [x | x <- [2..n], n `mod` x == 0]
```

**Besonderheiten:**
- Determinismus wird über den Rückgabetyp ausgedrückt statt über Annotationen
- `a` → deterministisch, `Maybe a` → semi-deterministisch, `[a]` → nondeterministisch
- `NonEmpty a` → mindestens ein Ergebnis (multi)
- Typsystem erzwingt korrekten Umgang mit Fehlerfällen
- Kein explizites Modus-System, aber Reinheit garantiert referenzielle Transparenz

**Weiterführende Links:**
- [Haskell Wiki - Maybe](https://wiki.haskell.org/Maybe)

</TabItem>
<TabItem value="idris" label="Idris">

```haskell
-- Totality-Checking als Determinismus-Garantie

-- 'total' stellt sicher: terminiert und ist für alle Eingaben definiert
total
factorial : Nat -> Nat
factorial Z     = 1
factorial (S n) = (S n) * factorial n

-- Typ kodiert Lösungsanzahl (wie Haskell, aber strenger)
total
safeDivide : Nat -> Nat -> Maybe Nat
safeDivide _ Z     = Nothing
safeDivide x y     = Just (divNat x y)

-- Dependent Types können Modi präziser kodieren
-- Der Typ selbst beschreibt die Beziehung zwischen Ein- und Ausgabe
total
append : Vect n a -> Vect m a -> Vect (n + m) a
append []        ys = ys
append (x :: xs) ys = x :: append xs ys
```

**Besonderheiten:**
- `total`-Annotation erzwingt Terminierung und Vollständigkeit
- Dependent Types ermöglichen präzise Kodierung von Ein-/Ausgabe-Beziehungen
- Typsystem als statische Analyse: `Vect (n + m) a` beschreibt die Ausgabelänge
- Strikter als Haskell: Compiler beweist Terminierung und Exhaustivität

**Weiterführende Links:**
- [Idris Documentation - Totality Checking](https://idris2.readthedocs.io/en/latest/tutorial/theorems.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Mode-Deklarationen: in (Eingabe), out (Ausgabe)
% Determinismus: det, semidet, nondet, multi, failure, erroneous

% det: genau ein Ergebnis (immer erfolgreich)
:- pred add(int::in, int::in, int::out) is det.
add(X, Y, Result) :- Result = X + Y.

% semidet: höchstens ein Ergebnis (kann fehlschlagen)
:- pred safe_divide(int::in, int::in, int::out) is semidet.
safe_divide(X, Y, Result) :-
    Y \= 0,
    Result = X // Y.

% Multi-Mode-Prädikate: verschiedene Modi für dasselbe Prädikat
:- pred append(list(T), list(T), list(T)).
:- mode append(in, in, out) is det.       % Konkatenation
:- mode append(out, out, in) is multi.     % Zerlegung
append([], Ys, Ys).
append([X | Xs], Ys, [X | Zs]) :-
    append(Xs, Ys, Zs).
```

**Besonderheiten:**
- Mercury ist _die_ Referenzsprache für Modus- und Determinismus-Analyse — diese Konzepte sind integraler Bestandteil des Typsystems
- Mode-Deklarationen (`in`, `out`, `di`, `uo`) definieren die Datenflussrichtung statisch
- Determinismus-Kategorien: `det` (genau 1), `semidet` (0 oder 1), `multi` (≥1), `nondet` (≥0), `failure` (0), `erroneous`
- Der Compiler verifiziert alle Mode- und Determinismus-Deklarationen zur Compile-Zeit
- Multi-Mode-Prädikate: dasselbe Prädikat kann mit verschiedenen Modi deklariert werden (z.B. `append` für Konkatenation und Zerlegung)
- Ermöglicht Compiler-Optimierungen (z.B. Vermeidung von Choice-Points bei `det`-Prädikaten)

**Weiterführende Links:**
- [Mercury Language Reference - Modes](https://www.mercurylang.org/information/doc-release/mercury_ref/Modes.html)
- [Mercury Language Reference - Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Mode-Deklarationen (PlDoc-Konvention)
% +: Eingabe (nonvar), -: Ausgabe (var), ?: beides

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

% det-Direktive für Laufzeitprüfung (seit SWI-Prolog 8.3.24)
:- det(add/3).
```

**Besonderheiten:**
- PlDoc-Konventionen: `+` (Eingabe), `-` (Ausgabe), `?` (beides) für Mode-Dokumentation
- Determinismus-Kategorien: `det`, `semidet`, `nondet`, `multi` in der Dokumentation
- `:- det(Pred/Arity)` Direktive für Runtime-Determinismus-Prüfung (seit SWI-Prolog 8.3.24)
- Keine statische Compile-Zeit-Analyse wie in Mercury — Prüfung erfolgt zur Laufzeit

**Weiterführende Links:**
- [SWI-Prolog Documentation - Determinism](https://www.swi-prolog.org/pldoc/man?section=determinism)

</TabItem>
</Tabs>