---
slug: /sprachen/uebersicht
title: 1.1. Overview
---

# 1.1. Overview

Overview of all 56 languages covered, classified by paradigms — from systems languages through OOP to functional and specialized languages.

## 1.1.1. Native Programming

These languages compile to native binaries and run without a managed runtime environment. They span the spectrum from classic procedural languages through systems-oriented OO languages to modern languages with a focus on memory safety. They share direct access to system resources and high performance.

### Classic Systems Languages (1950s–1970s)

These languages emerged in the 1950s to 1970s and laid the foundations for modern systems programming. They are procedural/imperative, use manual memory management, and compile to native binaries. They are still actively used today and have influenced many modern languages.

- **Fortran** (1957)
  - Scientific computing, numerical calculations, still actively developed.
  - __Key features:__ Array-oriented calculations, implicit parallelization (`do concurrent`), 60+ years of backward compatibility
- **C** (1972)
  - The classic systems programming language, basis for many modern languages, direct memory access, manual memory management. Standard language for OS kernels, embedded systems, and language implementations.
  - __Key features:__ Pointer arithmetic, minimalism, direct hardware access, standard language for OS kernels and embedded

### Systems-Oriented OO Languages (1980s–today)

These languages extend systems programming with object-oriented concepts — while still compiling natively and without a managed runtime environment. Starting in the 1980s, they combine OO abstractions with low-level control and are suited for embedded and performance-critical domains.

- **Ada** (1980)
  - Safety-critical systems, strongly typed, contract programming.
  - __Key features:__ SPARK subset for formal verification, tasking model for concurrency, range and subtype constraints
- **Objective-C** (1984)
  - Combines C with Smalltalk messaging, used for decades for macOS and iOS.
  - __Key features:__ Smalltalk-like messaging system, dynamic runtime, legacy Apple development
- **C++** (1985)
  - Extension of C with OOP, templates, RAII, modern features (C++11/14/17/20/23).
  - __Key features:__ Zero-cost abstractions, template metaprogramming, multi-paradigm
- **Eiffel** (1985)
  - Object-oriented language with focus on software correctness through design by contract.
  - __Key features:__ Design by contract, multiple inheritance, void safety
- **Object Pascal** (1986)
  - Modern Pascal variant with object orientation, known through Delphi and Free Pascal/Lazarus. Compiles to native binaries.
  - __Key features:__ Native compilation, strong typing, RAD tools (Delphi/Lazarus)
- **D** (2001)
  - Systems language that combines C-like efficiency with modern OO concepts. Full OO with classes, inheritance, and interfaces, plus metaprogramming and optional garbage collector.
  - __Key features:__ Classes and interfaces, template metaprogramming, optional GC with native compilation
- **Carbon** (2022)
  - Experimental C++ successor language from Google. Main goal is seamless interoperability with existing C++ code with more modern syntax and planned memory-safety path.
  - __Key features:__ Bidirectional C++ interoperability, generics, planned memory-safety guarantees

### Modern Systems Languages (2000s–today)

These languages emerged from the 2000s onward and bring fresh approaches to systems programming. They compile to native binaries and offer modern features such as built-in concurrency, metaprogramming, or advanced memory management. Many emphasize memory safety — through ownership systems, static analysis, or explicit memory management without hidden allocations.

- **Nim** (2008)
  - Systems language with Python-like syntax, metaprogramming, and cross-compilation. Offers limited OO (objects, simple inheritance).
  - __Key features:__ Python-like syntax with C-like performance, metaprogramming, configurable memory mode (GC, ARC, manual)
- **Go** (2009)
  - Systems language from Google with goroutines for concurrency, simple syntax, and fast compilation. Explicitly rejects classic OOP — uses structs with methods and implicit interfaces instead.
  - __Key features:__ Goroutines for simple concurrency, implicit interfaces, fast compilation, simple syntax
- **Rust** (2010)
  - Systems language with ownership system, guarantees memory safety without garbage collector, zero-cost abstractions.
  - __Key features:__ Ownership system for memory safety without GC, trait-based type system, pattern matching, fearless concurrency
- **Zig** (2016)
  - Modern systems language with explicit memory management, compile-time execution, cross-platform focus.
  - __Key features:__ Compile-time code execution, explicit memory management without hidden allocations
- **Odin** (2016)
  - Systems language inspired by C with modern syntax and explicit memory management. Offers built-in SOA data structures and a context system for implicit parameters.
  - __Key features:__ SOA data structures (struct-of-arrays), context system, multiple return values, explicit memory management
- **V** (2019)
  - Very young systems language with extremely fast compilation, simple syntax, and automatic memory deallocation (autofree). No undefined behavior by design.
  - __Key features:__ Extremely fast compilation, autofree memory management, no undefined behavior

## 1.1.2. Object-Oriented Languages with Managed Runtime

These languages use object-oriented concepts as the primary abstraction model. Most run in virtual runtime environments with automatic memory management; however, some newer representatives compile natively (see "Modern OO Languages" below). They are grouped by generations and feature focus.

### Classic OO Languages (1980s–2000s)

These languages focus on developer productivity through an abstracted memory model without pointers or explicit memory management. They run in virtual runtime environments with automatic memory management (garbage collection) and thus offer platform independence and runtime safety guarantees.

- **Perl** (1987)
  - Text processing, regular expressions, "There's more than one way to do it".
  - __Key features:__ Regular expressions, text processing, CPAN
- **Python** (1991)
  - Dynamically typed, multi-paradigm, extensive standard library, very popular.
  - __Key features:__ Duck typing, list comprehensions, generators, huge standard library and ecosystem
- **Lua** (1993)
  - Lightweight scripting language, embedded in many applications (game engines, Nginx, Redis), coroutines.
  - __Key features:__ Metatables (OO, operator overloading, extensibility), coroutines, minimal runtime (~250 KB), simple embedding API
- **Java** (1995)
  - Platform-independent OOP language, JVM, strongly typed, enterprise focus.
  - __Key features:__ "Write once, run anywhere" (JVM), records, sealed classes, virtual threads (Java 21)
- **Ruby** (1995)
  - Dynamically typed, "Everything is an object", metaprogramming, open classes.
  - __Key features:__ Blocks/procs/lambdas, open classes, metaprogramming, "Everything is an object"
- **JavaScript** (1995)
  - The web language, dynamically typed, prototype-based, event-driven.
  - __Key features:__ Prototype-based inheritance, closures, async/await, only native browser language
- **PHP** (1995)
  - Web development, dynamically typed, huge ecosystem. Substantially modernized since PHP 8 with JIT compiler, attributes, enums, and fibers.
  - __Key features:__ JIT compiler (PHP 8), attributes and enums, fibers for async, huge ecosystem (Composer/Packagist)
- **C#** (2000)
  - Microsoft's OOP language, .NET Framework, LINQ, modern features (records, pattern matching).
  - __Key features:__ LINQ for declarative data queries, async/await, pattern matching, records
- **VB.NET** (2002, from Visual Basic)
  - Legacy, but still relevant for enterprise.
  - __Key features:__ Feature-equivalent to C# on the same .NET runtime, alternative syntax
- **Groovy** (2003)
  - Dynamic JVM language, scripting, metaprogramming.
  - __Key features:__ Optional typing, closures, seamless Java integration, Gradle build system

### Modern OO Languages with Safety and FP Focus (2000s–today)

These languages combine object-oriented design with functional programming features and emphasize safety through static typing, type inference, null safety, and other abstractions. Many use a managed memory model with garbage collection; however, some compile natively (Crystal via LLVM, Swift via ARC, Mojo via MLIR). Several support multi-target compilation to different backends (JS, JVM, native, WASM), enabling flexible deployment options.

- **Scala** (2004)
  - JVM language, functional and object-oriented, higher-kinded types, pattern matching.
  - __Key features:__ Higher-kinded types, implicits/given, pattern matching, for-comprehensions
- **Haxe** (2005)
  - High-level language that transpiles to many targets (JavaScript, C++, etc.).
  - __Key features:__ Cross-platform transpilation to many targets, unified codebase for different platforms
- **Dart** (2011)
  - Google language with sound null safety, modern OOP features, and isolates for concurrency. Known through Flutter, but also usable standalone as a server and CLI language.
  - __Key features:__ Sound null safety, isolates for concurrency, async/await, AOT and JIT compilation
- **Kotlin** (2011)
  - JVM language, null safety, coroutines, interoperability with Java.
  - __Key features:__ Null safety in type system, coroutines, extension functions, seamless Java interoperability
- **TypeScript** (2012)
  - JavaScript with static typing, modern OOP features, large JavaScript ecosystem integration.
  - __Key features:__ Structural typing, union/intersection types, gradual adoption of existing JS codebases
- **Crystal** (2014)
  - Ruby-like syntax with static typing and native compilation via LLVM. Offers channels for concurrency and compile-time macros.
  - __Key features:__ Type inference, channels for concurrency, compile-time macros, native compilation via LLVM
- **Swift** (2014)
  - Apple language with protocol-oriented programming, optionals for null safety, and ARC instead of garbage collection. Emphasizes value types (structs) alongside classes.
  - __Key features:__ Protocol-oriented programming, optionals for null safety, value types (structs), ARC without GC overhead
- **Mojo** (2023)
  - Python superset with focus on performance for AI/ML. Uses MLIR-based compilation and offers an ownership model for memory control while maintaining Python compatibility.
  - __Key features:__ MLIR-based compilation, ownership model, SIMD support, Python-compatible syntax

## 1.1.3. Functional Programming

These languages focus on pure functions, immutability, and expressive type systems, often with advanced type inference. They are designed for correctness and concurrency, use algebraic data types and pattern matching. Some are statically typed for safety and inference, others are dynamically typed and focus on concurrency and fault tolerance.

### Multi-Paradigm with Strong Functional Focus (1970s–2000s)

These Lisp dialects combine functional programming with other paradigms and emphasize powerful macro systems, code as data, and language-oriented programming. They are dynamically typed (some with optional static typing, e.g., Typed Racket, Clojure `core.typed`) and offer REPL-based development.

- **Scheme** (1975)
  - Minimalist Lisp dialect, functional, Scheme macros.
  - __Key features:__ Minimalism, hygienic macros, continuations
- **Common Lisp** (1984)
  - Lisp dialect with code as data, powerful macro system, and own OO system (CLOS). Unique error handling through conditions and restarts.
  - __Key features:__ Code as data, powerful macro system, CLOS (multiple dispatch), conditions/restarts
- **Racket** (1995)
  - Lisp dialect, multi-paradigm, language-oriented programming. Enables definition of completely custom languages within Racket via `#lang`.
  - __Key features:__ `#lang` for DSL development, contract system, language-oriented programming
- **Clojure** (2007)
  - Lisp dialect on JVM, functional, immutability, software transactional memory.
  - __Key features:__ Immutability by default, software transactional memory, Lisp macros

### Functional Languages with Practical Focus (1980s–today)

These languages combine functional programming with practical requirements such as OOP features, interoperability with other languages, or specialized application domains (e.g., distributed systems, .NET integration). They emphasize practical applicability alongside functional principles.

- **Erlang** (1986)
  - Functional language for distributed, fault-tolerant systems, actor model, hot code reloading.
  - __Key features:__ Actor model for distributed systems, fault tolerance ("Let it crash"), hot code reloading
- **OCaml** (1996)
  - Functional language with OOP features, pattern matching, strong type system.
  - __Key features:__ Hindley-Milner type inference, algebraic data types, pattern matching, module system with functors
- **F#** (2005)
  - .NET functional language, type inference, pattern matching, interoperability with C#.
  - __Key features:__ Computation expressions, type providers, units of measure, .NET interoperability
- **Elixir** (2011, from Erlang)
  - Erlang VM, modern syntax, metaprogramming, functional.
  - __Key features:__ Modern syntax on Erlang VM, metaprogramming, actor model
- **Gleam** (2016)
  - Functional language for the Erlang VM with strong typing. Unlike Elixir, no macros and no dynamic typing — focus on simplicity and compiler-guaranteed correctness.
  - __Key features:__ Strong typing on Erlang VM, no macros, focus on simplicity and compiler guarantees
- **Roc** (2021)
  - Functional language, performance focus, still experimental.
  - __Key features:__ Platform-based architecture, no runtime exceptions, purely functional with performance focus

### Pure Functional Languages (1990s–2010s)

These languages emphasize pure functions, immutability, and mathematical elegance. They use strong type systems with type classes or algebraic data types and are designed for correctness. Some focus on specific domains such as frontend development.

- **Haskell** (1990)
  - Pure functional language, lazy evaluation, strong type system, type classes.
  - __Key features:__ Lazy evaluation, monads for side-effect control, type classes, Hindley-Milner type inference
- **Elm** (2012)
  - Functional language for frontend, guarantees no runtime errors, The Elm Architecture (TEA).
  - __Key features:__ Guarantees no runtime errors, The Elm Architecture (TEA), unidirectional data flow
- **PureScript** (2013)
  - Strongly typed functional language that compiles to JavaScript. Inspired by Haskell, but for web development.
  - __Key features:__ Strong type system for web development, row polymorphism, algebraic data types

### Type and Effect Research (2010s–today)

These languages extend functional programming with advanced type system features such as dependent types or algebraic effects. They originate from language research but are increasingly usable for practical programming. Their common goal: express program behavior more precisely in the type system than in classic functional languages.

- **Idris** (2011)
  - Research language with dependent types, enables proofs about program behavior.
  - __Key features:__ Dependent types for high-assurance software, theorem proving, formal verification
- **Koka** (2012)
  - Research language from Microsoft Research with algebraic effects as central concept. Effects are tracked in the type system and are composable.
  - __Key features:__ Algebraic effects in type system, effect handlers, evidence-based compilation
- **Lean 4** (2021)
  - Proof assistant and programming language with dependent types. Unites formal verification with practical programming and is actively used for mathematical formalization.
  - __Key features:__ Dependent types as core feature, interactive theorem proving, performant compilation to C

## 1.1.4. Specialized Languages

These languages are optimized for specific domains — numerical computation, statistical analysis, or logical inference. In contrast to the general-purpose languages in 1.1.1–1.1.3, they prioritize expressiveness in their domain over universal applicability.

### Numerical and Statistical Languages (1980s–2010s)

These languages focus on numerical computation, matrix operations, data analysis, and statistical modeling. They offer vectorized operations, extensive mathematical libraries, and often specialized visualization tools. Typically dynamically typed, with array-based semantics and interactive development environments.

- **MATLAB** (1984)
  - Proprietary platform for numerical computing and visualization.
  - __Key features:__ Matrix operations, extensive toolboxes, scientific computing
- **Wolfram Language** (1988)
  - Language behind Mathematica, specialized in symbolic and numerical computation.
  - __Key features:__ Over 6000 built-in functions, symbolic computation, notebook interface
- **R** (1993)
  - Statistics and data science, vectorized, functional style.
  - __Key features:__ Vectorized operations, formula objects (`y ~ x`), huge statistics libraries (CRAN)
- **Octave** (1993)
  - Open-source language, largely compatible with MATLAB.
  - __Key features:__ MATLAB compatibility, open-source alternative for numerical computing
- **Julia** (2012)
  - High-performance language for scientific computing, multiple dispatch, dynamically typed.
  - __Key features:__ Multiple dispatch, JIT compilation via LLVM, performance close to C with dynamic typing

### Logic and Logic-Functional Languages (1970s–today)

These languages are based on formal logic and declarative programming. Programs consist of facts and rules; execution occurs through logical inference, not through imperative statements. They are particularly suited for knowledge representation, constraint solving, and symbolic AI.

- **Prolog** (1972)
  - The classic logic programming language. Programs are sets of facts and rules; execution occurs through unification and backtracking.
  - __Key features:__ Unification and backtracking, declarative queries, constraint logic programming
- **Mercury** (1995)
  - Logic-functional language with static typing and determinism declarations. Combines Prolog's declarative style with compiler-guaranteed correctness.
  - __Key features:__ Statically typed Prolog, mode and determinism analysis, functional features
