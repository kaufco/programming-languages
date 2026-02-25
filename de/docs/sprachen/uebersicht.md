---
slug: /sprachen/uebersicht
title: 1.1. Übersicht
---

# 1.1. Übersicht

Übersicht aller 56 behandelten Sprachen, klassifiziert nach Paradigmen — von System- über OOP- bis zu funktionalen und spezialisierten Sprachen.

## 1.1.1. Native Programmierung

Diese Sprachen kompilieren zu nativen Binaries und laufen ohne verwaltete Laufzeitumgebung. Sie umfassen das Spektrum von klassischen prozeduralen Sprachen über systemnahe OO-Sprachen bis hin zu modernen Sprachen mit Fokus auf Memory Safety. Gemeinsam ist ihnen direkter Zugriff auf Systemressourcen und hohe Performance.

### Klassische Systemsprachen (1950er–1970er)

Diese Sprachen entstanden in den 1950er bis 1970er Jahren und legten die Grundlagen für die moderne Systemprogrammierung. Sie sind prozedural/imperativ, verwenden manuelle Speicherverwaltung und kompilieren zu nativen Binaries. Sie werden noch heute aktiv verwendet und haben viele moderne Sprachen beeinflusst.

- **Fortran** (1957)
  - Wissenschaftliches Computing, numerische Berechnungen, noch aktiv entwickelt.
  - __Kernmerkmale:__ Array-orientierte Berechnungen, implizite Parallelisierung (`do concurrent`), 60+ Jahre Rückwärtskompatibilität
- **C** (1972)
  - Die klassische Systemprogrammiersprache, Basis für viele moderne Sprachen, direkter Speicherzugriff, manuelle Speicherverwaltung. Standardsprache für OS-Kernel, Embedded-Systeme und Sprachimplementierungen.
  - __Kernmerkmale:__ Pointer-Arithmetik, Minimalismus, direkter Hardware-Zugriff, Standardsprache für OS-Kernel und Embedded

### Systemnahe OO-Sprachen (1980er–heute)

Diese Sprachen erweitern die Systemprogrammierung um objektorientierte Konzepte — bei weiterhin nativer Kompilierung und ohne verwaltete Laufzeitumgebung. Beginnend in den 1980er Jahren kombinieren sie OO-Abstraktionen mit Low-Level-Kontrolle und eignen sich für Embedded- und Performance-kritische Domänen.

- **Ada** (1980)
  - Sicherheitskritische Systeme, stark typisiert, Contract Programming.
  - __Kernmerkmale:__ SPARK-Subset für formale Verifikation, Tasking-Modell für Concurrency, Range- und Subtype-Constraints
- **Objective-C** (1984)
  - Kombiniert C mit Smalltalk-Messaging, jahrzehntelang für macOS und iOS.
  - __Kernmerkmale:__ Smalltalk-ähnliches Messaging-System, dynamische Laufzeit, Legacy Apple-Entwicklung
- **C++** (1985)
  - Erweiterung von C mit OOP, Templates, RAII, moderne Features (C++11/14/17/20/23).
  - __Kernmerkmale:__ Zero-Cost Abstractions, Template-Metaprogrammierung, Multi-Paradigma
- **Eiffel** (1985)
  - Objektorientierte Sprache mit Fokus auf Software-Korrektheit durch Design by Contract.
  - __Kernmerkmale:__ Design by Contract, Multiple Inheritance, Void Safety
- **Object Pascal** (1986)
  - Moderne Pascal-Variante mit Objektorientierung, bekannt durch Delphi und Free Pascal/Lazarus. Kompiliert zu nativen Binaries.
  - __Kernmerkmale:__ Native Kompilierung, starke Typisierung, RAD-Tools (Delphi/Lazarus)
- **D** (2001)
  - Systemsprache, die C-ähnliche Effizienz mit modernen OO-Konzepten verbindet. Volles OO mit Klassen, Vererbung und Interfaces, dazu Metaprogrammierung und optionaler Garbage Collector.
  - __Kernmerkmale:__ Klassen und Interfaces, Template-Metaprogrammierung, optionaler GC bei nativer Kompilierung
- **Carbon** (2022)
  - Experimentelle C++-Nachfolger-Sprache von Google. Hauptziel ist nahtlose Interoperabilität mit bestehendem C++-Code bei modernerer Syntax und geplantem Memory-Safety-Pfad.
  - __Kernmerkmale:__ Bidirektionale C++-Interoperabilität, Generics, geplante Memory-Safety-Garantien

### Moderne Systemsprachen (2000er–heute)

Diese Sprachen entstanden ab den 2000er Jahren und bringen frische Ansätze in die Systemprogrammierung. Sie kompilieren zu nativen Binaries und bieten moderne Features wie eingebaute Concurrency, Metaprogrammierung oder fortgeschrittene Speicherverwaltung. Viele betonen Memory Safety — durch Ownership-Systeme, statische Analyse oder explizite Speicherverwaltung ohne versteckte Allokationen.

- **Nim** (2008)
  - Systemsprache mit Python-ähnlicher Syntax, Metaprogrammierung und Cross-Compilation. Bietet eingeschränktes OO (Objects, einfache Vererbung).
  - __Kernmerkmale:__ Python-ähnliche Syntax mit C-ähnlicher Performance, Metaprogrammierung, konfigurierbarer Speichermodus (GC, ARC, manuell)
- **Go** (2009)
  - Systemsprache von Google mit Goroutines für Concurrency, einfacher Syntax und schneller Kompilierung. Lehnt klassisches OOP explizit ab — nutzt stattdessen Structs mit Methoden und implizite Interfaces.
  - __Kernmerkmale:__ Goroutines für einfache Concurrency, implizite Interfaces, schnelle Kompilierung, einfache Syntax
- **Rust** (2010)
  - Systemsprache mit Ownership-System, garantiert Memory Safety ohne Garbage Collector, Zero-Cost Abstractions.
  - __Kernmerkmale:__ Ownership-System für Memory Safety ohne GC, Trait-basiertes Typsystem, Pattern Matching, Fearless Concurrency
- **Zig** (2016)
  - Moderne Systemsprache mit expliziter Speicherverwaltung, Compile-Time Execution, Cross-Platform-Fokus.
  - __Kernmerkmale:__ Compile-Time Code Execution, explizite Speicherverwaltung ohne Hidden Allocations
- **Odin** (2016)
  - Systemsprache inspiriert von C mit moderner Syntax und expliziter Speicherverwaltung. Bietet eingebaute SOA-Datenstrukturen und ein Context-System für implizite Parameter.
  - __Kernmerkmale:__ SOA-Datenstrukturen (Struct-of-Arrays), Context-System, multiple Rückgabewerte, explizite Speicherverwaltung
- **V** (2019)
  - Sehr junge Systemsprache mit extrem schneller Kompilierung, einfacher Syntax und automatischer Speicherfreigabe (Autofree). Kein Undefined Behavior by Design.
  - __Kernmerkmale:__ Extrem schnelle Kompilierung, Autofree-Speicherverwaltung, kein Undefined Behavior

## 1.1.2. Objektorientierte Sprachen mit Managed Runtime

Diese Sprachen verwenden objektorientierte Konzepte als primäres Abstraktionsmodell. Die meisten laufen in virtuellen Laufzeitumgebungen mit automatischer Speicherverwaltung; einige neuere Vertreter kompilieren jedoch nativ (siehe „Moderne OO-Sprachen" unten). Sie sind nach Generationen und Feature-Schwerpunkten gruppiert.

### Klassische OO-Sprachen (1980er–2000er)

Diese Sprachen fokussieren auf Entwicklerproduktivität durch ein abstrahiertes Speichermodell ohne Pointer oder explizite Speicherverwaltung. Sie laufen in virtuellen Laufzeitumgebungen mit automatischer Speicherverwaltung (Garbage Collection) und bieten dadurch Plattformunabhängigkeit und Sicherheitsgarantien zur Laufzeit.

- **Perl** (1987)
  - Textverarbeitung, reguläre Ausdrücke, "There's more than one way to do it".
  - __Kernmerkmale:__ Reguläre Ausdrücke, Textverarbeitung, CPAN
- **Python** (1991)
  - Dynamisch typisiert, Multi-Paradigma, umfangreiche Standardbibliothek, sehr populär.
  - __Kernmerkmale:__ Duck Typing, List Comprehensions, Generators, riesige Standardbibliothek und Ecosystem
- **Lua** (1993)
  - Leichte Skriptsprache, eingebettet in viele Anwendungen (Spiele-Engines, Nginx, Redis), Coroutines.
  - __Kernmerkmale:__ Metatables (OO, Operator Overloading, Extensibility), Coroutines, minimale Runtime (~250 KB), einfache Embedding-API
- **Java** (1995)
  - Plattformunabhängige OOP-Sprache, JVM, stark typisiert, Enterprise-Fokus.
  - __Kernmerkmale:__ "Write once, run anywhere" (JVM), Records, Sealed Classes, Virtual Threads (Java 21)
- **Ruby** (1995)
  - Dynamisch typisiert, „Everything is an object", Metaprogrammierung, offene Klassen.
  - __Kernmerkmale:__ Blocks/Procs/Lambdas, offene Klassen, Metaprogrammierung, „Everything is an object"
- **JavaScript** (1995)
  - Die Web-Sprache, dynamisch typisiert, Prototype-basiert, Event-driven.
  - __Kernmerkmale:__ Prototype-basierte Vererbung, Closures, async/await, einzige native Browser-Sprache
- **PHP** (1995)
  - Web-Entwicklung, dynamisch typisiert, riesiges Ecosystem. Seit PHP 8 mit JIT-Compiler, Attribute, Enums und Fibers substantiell modernisiert.
  - __Kernmerkmale:__ JIT-Compiler (PHP 8), Attribute und Enums, Fibers für Async, riesiges Ecosystem (Composer/Packagist)
- **C#** (2000)
  - Microsofts OOP-Sprache, .NET Framework, LINQ, moderne Features (Records, Pattern Matching).
  - __Kernmerkmale:__ LINQ für deklarative Datenabfragen, async/await, Pattern Matching, Records
- **VB.NET** (2002, von Visual Basic)
  - Legacy, aber noch relevant für Enterprise.
  - __Kernmerkmale:__ Feature-äquivalent zu C# auf derselben .NET-Runtime, alternative Syntax
- **Groovy** (2003)
  - Dynamische JVM-Sprache, Scripting, Metaprogrammierung.
  - __Kernmerkmale:__ Optionale Typisierung, Closures, nahtlose Java-Integration, Gradle Build-System

### Moderne OO-Sprachen mit Safety- und FP-Fokus (2000er–heute)

Diese Sprachen kombinieren objektorientiertes Design mit funktionalen Programmierung-Features und betonen Safety durch statische Typisierung, Type Inference, Null Safety und andere Abstraktionen. Viele verwenden ein verwaltetes Speichermodell mit Garbage Collection; einige kompilieren jedoch nativ (Crystal via LLVM, Swift via ARC, Mojo via MLIR). Mehrere unterstützen Multi-Target-Kompilierung zu verschiedenen Backends (JS, JVM, native, WASM), was flexible Deployment-Optionen ermöglicht.

- **Scala** (2004)
  - JVM-Sprache, funktional und objektorientiert, Higher-Kinded Types, Pattern Matching.
  - __Kernmerkmale:__ Higher-Kinded Types, Implicits/Given, Pattern Matching, for-Comprehensions
- **Haxe** (2005)
  - High-Level-Sprache, die zu vielen Targets transpiliert (JavaScript, C++, etc.).
  - __Kernmerkmale:__ Cross-Platform-Transpilation zu vielen Targets, einheitliche Codebasis für verschiedene Plattformen
- **Dart** (2011)
  - Google-Sprache mit Sound Null Safety, modernen OOP-Features und Isolates für Concurrency. Bekannt durch Flutter, aber auch eigenständig als Server- und CLI-Sprache einsetzbar.
  - __Kernmerkmale:__ Sound Null Safety, Isolates für Concurrency, async/await, AOT- und JIT-Kompilierung
- **Kotlin** (2011)
  - JVM-Sprache, Null Safety, Coroutines, Interoperabilität mit Java.
  - __Kernmerkmale:__ Null Safety im Typsystem, Coroutines, Extension Functions, nahtlose Java-Interoperabilität
- **TypeScript** (2012)
  - JavaScript mit statischer Typisierung, moderne OOP-Features, große JavaScript-Ecosystem-Integration.
  - __Kernmerkmale:__ Structural Typing, Union/Intersection Types, graduelle Adoption bestehender JS-Codebases
- **Crystal** (2014)
  - Ruby-ähnliche Syntax mit statischer Typisierung und nativer Kompilierung via LLVM. Bietet Channels für Concurrency und Compile-Time-Makros.
  - __Kernmerkmale:__ Type Inference, Channels für Concurrency, Compile-Time-Makros, native Kompilierung via LLVM
- **Swift** (2014)
  - Apple-Sprache mit Protocol-Oriented Programming, Optionals für Null Safety und ARC statt Garbage Collection. Betont Value Types (Structs) neben Klassen.
  - __Kernmerkmale:__ Protocol-Oriented Programming, Optionals für Null Safety, Value Types (Structs), ARC ohne GC-Overhead
- **Mojo** (2023)
  - Python-Superset mit Fokus auf Performance für AI/ML. Nutzt MLIR-basierte Kompilierung und bietet ein Ownership-Modell für Speicherkontrolle bei gleichzeitiger Python-Kompatibilität.
  - __Kernmerkmale:__ MLIR-basierte Kompilierung, Ownership-Modell, SIMD-Support, Python-kompatible Syntax

## 1.1.3. Funktionale Programmierung

Diese Sprachen fokussieren auf Pure Functions, Immutability und expressive Type Systems, oft mit fortgeschrittener Type Inference. Sie sind für Korrektheit und Concurrency designed, verwenden Algebraic Data Types und Pattern Matching. Einige sind statisch typisiert für Safety und Inference, andere dynamisch typisiert und fokussieren auf Concurrency und Fault-Tolerance.

### Multi-Paradigma mit starkem funktionalem Fokus (1970er–2000er)

Diese Lisp-Dialekte kombinieren funktionale Programmierung mit anderen Paradigmen und betonen mächtige Makrosysteme, Code as Data und Language-Oriented Programming. Sie sind dynamisch typisiert (einige mit optionaler statischer Typisierung, z.B. Typed Racket, Clojure `core.typed`) und bieten REPL-basierte Entwicklung.

- **Scheme** (1975)
  - Minimalistischer Lisp-Dialekt, funktional, Scheme Macros.
  - __Kernmerkmale:__ Minimalismus, Hygienic Macros, Continuations
- **Common Lisp** (1984)
  - Lisp-Dialekt mit Code as Data, mächtigem Makrosystem und eigenem OO-System (CLOS). Einzigartiges Error-Handling durch Conditions und Restarts.
  - __Kernmerkmale:__ Code as Data, mächtiges Makrosystem, CLOS (Multiple Dispatch), Conditions/Restarts
- **Racket** (1995)
  - Lisp-Dialekt, Multi-Paradigma, Language-Oriented Programming. Ermöglicht über `#lang` die Definition komplett eigener Sprachen innerhalb von Racket.
  - __Kernmerkmale:__ `#lang` für DSL-Entwicklung, Contract-System, Language-Oriented Programming
- **Clojure** (2007)
  - Lisp-Dialekt auf JVM, funktional, Immutability, Software Transactional Memory.
  - __Kernmerkmale:__ Immutability by default, Software Transactional Memory, Lisp-Makros

### Funktionale Sprachen mit praktischem Fokus (1980er–heute)

Diese Sprachen kombinieren funktionale Programmierung mit praktischen Anforderungen wie OOP-Features, Interoperabilität mit anderen Sprachen, oder spezialisierten Anwendungsdomänen (z.B. verteilte Systeme, .NET-Integration). Sie betonen praktische Anwendbarkeit neben funktionalen Prinzipien.

- **Erlang** (1986)
  - Funktionale Sprache für verteilte, fehlertolerante Systeme, Actor Model, Hot Code Reloading.
  - __Kernmerkmale:__ Actor Model für verteilte Systeme, Fault-Tolerance ("Let it crash"), Hot Code Reloading
- **OCaml** (1996)
  - Funktionale Sprache mit OOP-Features, Pattern Matching, starkes Typsystem.
  - __Kernmerkmale:__ Hindley-Milner Type Inference, Algebraic Data Types, Pattern Matching, Module System mit Functors
- **F#** (2005)
  - .NET funktionale Sprache, Type Inference, Pattern Matching, Interoperabilität mit C#.
  - __Kernmerkmale:__ Computation Expressions, Type Providers, Units of Measure, .NET-Interoperabilität
- **Elixir** (2011, von Erlang)
  - Erlang-VM, moderne Syntax, Metaprogrammierung, funktional.
  - __Kernmerkmale:__ Moderne Syntax auf Erlang-VM, Metaprogrammierung, Actor Model
- **Gleam** (2016)
  - Funktionale Sprache für die Erlang-VM mit starker Typisierung. Im Gegensatz zu Elixir keine Makros und kein dynamisches Typing — Fokus auf Einfachheit und Compiler-garantierte Korrektheit.
  - __Kernmerkmale:__ Starke Typisierung auf Erlang-VM, keine Makros, Fokus auf Einfachheit und Compiler-Garantien
- **Roc** (2021)
  - Funktionale Sprache, Performance-Fokus, noch experimentell.
  - __Kernmerkmale:__ Plattform-basierte Architektur, keine Runtime Exceptions, rein funktional mit Performance-Fokus

### Reine funktionale Sprachen (1990er–2010er)

Diese Sprachen betonen reine Funktionen, Immutability und mathematische Eleganz. Sie verwenden starke Typsysteme mit Type Classes oder Algebraic Data Types und sind für Korrektheit designed. Einige fokussieren auf spezifische Domänen wie Frontend-Entwicklung.

- **Haskell** (1990)
  - Reine funktionale Sprache, Lazy Evaluation, starkes Typsystem, Type Classes.
  - __Kernmerkmale:__ Lazy Evaluation, Monaden für Seiteneffekt-Kontrolle, Type Classes, Hindley-Milner Type Inference
- **Elm** (2012)
  - Funktionale Sprache für Frontend, garantiert keine Runtime-Errors, The Elm Architecture (TEA).
  - __Kernmerkmale:__ Garantiert keine Runtime-Errors, The Elm Architecture (TEA), unidirektionaler Datenfluss
- **PureScript** (2013)
  - Stark typisierte funktionale Sprache, die zu JavaScript kompiliert. Inspiriert von Haskell, aber für Web-Entwicklung.
  - __Kernmerkmale:__ Starkes Typsystem für Web-Entwicklung, Row Polymorphism, Algebraic Data Types

### Typ- und Effektforschung (2010er–heute)

Diese Sprachen erweitern funktionale Programmierung um fortgeschrittene Typsystem-Features wie Dependent Types oder algebraische Effekte. Sie stammen aus der Sprachforschung, sind aber zunehmend für praktische Programmierung nutzbar. Ihr gemeinsames Ziel: Programmverhalten bereits im Typsystem präziser ausdrücken als in klassischen funktionalen Sprachen.

- **Idris** (2011)
  - Forschungs-Sprache mit Dependent Types, ermöglicht Beweise über Programmverhalten.
  - __Kernmerkmale:__ Dependent Types für High-Assurance-Software, Theorem Proving, formale Verifikation
- **Koka** (2012)
  - Forschungs-Sprache von Microsoft Research mit algebraischen Effekten als zentralem Konzept. Effekte werden im Typsystem getrackt und sind komponierbar.
  - __Kernmerkmale:__ Algebraische Effekte im Typsystem, Effect Handlers, Evidenz-basierte Compilation
- **Lean 4** (2021)
  - Beweisassistent und Programmiersprache mit Dependent Types. Vereint formale Verifikation mit praktischer Programmierung und wird aktiv für mathematische Formalisierung eingesetzt.
  - __Kernmerkmale:__ Dependent Types als Kernfeature, interaktives Theorem Proving, performante Kompilierung zu C

## 1.1.4. Spezialsprachen

Diese Sprachen sind für spezifische Domänen optimiert — numerische Berechnung, statistische Analyse oder logische Schlussfolgerung. Im Gegensatz zu den Allzweck-Sprachen in 1.1.1–1.1.3 priorisieren sie Ausdruckskraft in ihrer Domäne über universelle Einsetzbarkeit.

### Numerische und statistische Sprachen (1980er–2010er)

Diese Sprachen fokussieren auf numerische Berechnung, Matrix-Operationen, Datenanalyse und statistische Modellierung. Sie bieten vektorisierte Operationen, umfangreiche mathematische Bibliotheken und oft spezialisierte Visualisierungs-Tools. Typischerweise dynamisch typisiert, mit Array-basierter Semantik und interaktiven Entwicklungsumgebungen.

- **MATLAB** (1984)
  - Proprietäre Plattform für numerisches Computing und Visualisierung.
  - __Kernmerkmale:__ Matrix-Operationen, umfangreiche Toolboxen, wissenschaftliches Computing
- **Wolfram Language** (1988)
  - Sprache hinter Mathematica, spezialisiert auf symbolische und numerische Berechnung.
  - __Kernmerkmale:__ Über 6000 eingebaute Funktionen, symbolische Berechnung, Notebook-Interface
- **R** (1993)
  - Statistik und Data Science, vektorisiert, funktionaler Stil.
  - __Kernmerkmale:__ Vektorisierte Operationen, Formula Objects (`y ~ x`), riesige Statistik-Bibliotheken (CRAN)
- **Octave** (1993)
  - Open-Source-Sprache, größtenteils kompatibel mit MATLAB.
  - __Kernmerkmale:__ MATLAB-Kompatibilität, Open-Source-Alternative für numerisches Computing
- **Julia** (2012)
  - Hochleistungssprache für wissenschaftliches Computing, Multiple Dispatch, dynamisch typisiert.
  - __Kernmerkmale:__ Multiple Dispatch, JIT-Kompilierung via LLVM, Performance nahe an C bei dynamischer Typisierung

### Logische und logisch-funktionale Sprachen (1970er–heute)

Diese Sprachen basieren auf formaler Logik und deklarativer Programmierung. Programme bestehen aus Fakten und Regeln; die Ausführung erfolgt durch logische Schlussfolgerung (Inferenz), nicht durch imperative Anweisungen. Sie eignen sich besonders für Wissensrepräsentation, Constraint-Solving und symbolische KI.

- **Prolog** (1972)
  - Die klassische logische Programmiersprache. Programme sind Mengen von Fakten und Regeln; Ausführung erfolgt durch Unifikation und Backtracking.
  - __Kernmerkmale:__ Unifikation und Backtracking, deklarative Abfragen, Constraint Logic Programming
- **Mercury** (1995)
  - Logisch-funktionale Sprache mit statischer Typisierung und Determinismus-Deklarationen. Verbindet Prologs deklarativen Stil mit Compiler-garantierter Korrektheit.
  - __Kernmerkmale:__ Statisch typisiertes Prolog, Modus- und Determinismus-Analyse, funktionale Features
