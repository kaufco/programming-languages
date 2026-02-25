---
slug: /
toc: false
---

# Programming Languages — Concepts and Features

**A systematic comparison of 56 programming languages**

This documentation compares 56 programming languages based on their concepts and features — from type systems and control flow through OOP and pattern matching to concurrency, metaprogramming, and memory management.

How does Rust achieve memory safety without a garbage collector? What does pattern matching look like in 30 different languages? What distinguishes Kotlin's coroutines from Go's goroutines? Each feature is presented per language as a tab — with code example and explanation of the specifics. The color coding of the tabs shows the support level at a glance:

- <span style={{color: '#28a745', fontWeight: 600}}>Green</span>: Native language feature — the language supports this feature directly and idiomatically.
- <span style={{color: '#b8860b', fontWeight: 600}}>Yellow</span>: Limited or via API — the feature is available, but with limitations or only through libraries.
- <span style={{color: '#e67e22', fontWeight: 600}}>Orange</span>: Workaround only — the feature is not directly supported, but can be emulated in a cumbersome way.
- <span style={{color: '#dc3545', fontWeight: 600}}>Red</span>: Not supported — the language does not offer this feature.

This documentation is aimed at language designers, educators, and advanced developers who want to not only *use* languages, but *understand* them.

## Topic Areas

<div className="row">
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>1. Programming Languages</h3>
      </div>
      <div className="card__body">
        <p>
          Overview of all 56 languages covered, classified by paradigms, their mutual influences, and a feature matrix.
        </p>
        <a className="button button--primary" href="sprachen">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>2. Syntax and Structure</h3>
      </div>
      <div className="card__body">
        <p>
          Block delimiters, comments, and syntax properties — how languages organize code visually and structurally.
        </p>
        <a className="button button--primary" href="syntax-struktur">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>3. Type System</h3>
      </div>
      <div className="card__body">
        <p>
          How languages define and check types — static vs. dynamic typing, generics, type inference, and null safety.
        </p>
        <a className="button button--primary" href="typsystem">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>4. Binding and Scoping</h3>
      </div>
      <div className="card__body">
        <p>
          How variables are declared, bound, and made visible in different scopes.
        </p>
        <a className="button button--primary" href="binding-scoping">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>5. Operators</h3>
      </div>
      <div className="card__body">
        <p>
          Arithmetic, logical, and special operators — from standard arithmetic through operator overloading to pipe and range operators.
        </p>
        <a className="button button--primary" href="operatoren">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>6. Control Flow</h3>
      </div>
      <div className="card__body">
        <p>
          Conditionals, loops, pattern matching, and jump statements — how languages control program flow.
        </p>
        <a className="button button--primary" href="kontrollfluss">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>7. Functions and Procedures</h3>
      </div>
      <div className="card__body">
        <p>
          Function definition, higher-order functions, closures, currying, generators, and special function types.
        </p>
        <a className="button button--primary" href="funktionen">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>8. Object-Oriented Programming</h3>
      </div>
      <div className="card__body">
        <p>
          Classes, inheritance, interfaces, polymorphism, encapsulation, and special OOP constructs such as sealed classes and extension methods.
        </p>
        <a className="button button--primary" href="objektorientierung">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>9. Functional Programming Concepts</h3>
      </div>
      <div className="card__body">
        <p>
          Functional core concepts — monads, effect systems, immutability, and formal methods.
        </p>
        <a className="button button--primary" href="fp-konzepte">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>10. Collections and Data Structures</h3>
      </div>
      <div className="card__body">
        <p>
          Lists, maps, sets, tuples, arrays — built-in data structures and their operations in language comparison.
        </p>
        <a className="button button--primary" href="collections">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>11. String Processing</h3>
      </div>
      <div className="card__body">
        <p>
          String types, interpolation, regex, multiline strings, and Unicode support.
        </p>
        <a className="button button--primary" href="string-verarbeitung">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>12. Error Handling</h3>
      </div>
      <div className="card__body">
        <p>
          Exceptions, result types, option types, and design by contract — how languages model and handle error cases.
        </p>
        <a className="button button--primary" href="fehlerbehandlung">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>13. Memory Management</h3>
      </div>
      <div className="card__body">
        <p>
          Garbage collection, manual allocation, ownership, and RAII — how languages handle memory.
        </p>
        <a className="button button--primary" href="speicherverwaltung">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>14. Concurrency and Parallelism</h3>
      </div>
      <div className="card__body">
        <p>
          Threads, async/await, actors, channels, and coroutines — how languages support concurrent programming.
        </p>
        <a className="button button--primary" href="concurrency">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>15. Modules and Namespaces</h3>
      </div>
      <div className="card__body">
        <p>
          Module systems, package management, and dependency management — how languages organize code into logical units.
        </p>
        <a className="button button--primary" href="module-namespaces">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>16. Metaprogramming</h3>
      </div>
      <div className="card__body">
        <p>
          Macros, reflection, and code generation — how languages generate and transform code at compile or runtime.
        </p>
        <a className="button button--primary" href="metaprogrammierung">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>17. Execution Model, Runtime Environment and Interoperability</h3>
      </div>
      <div className="card__body">
        <p>
          Evaluation strategies, target platforms, interoperability, and I/O — how code is executed and interacts with the outside world.
        </p>
        <a className="button button--primary" href="ausfuehrungsmodell">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>18. Testing and Assertions</h3>
      </div>
      <div className="card__body">
        <p>
          Built-in test frameworks, assert statements, property-based testing, and test annotations.
        </p>
        <a className="button button--primary" href="testing">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>19. Specialized Features</h3>
      </div>
      <div className="card__body">
        <p>
          Domain-specific functionalities — from LINQ and reactive programming through numerical features to logic programming.
        </p>
        <a className="button button--primary" href="spezialisierte-features">
          To Chapter →
        </a>
      </div>
    </div>
  </div>
</div>
