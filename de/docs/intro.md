---
slug: /
toc: false
---

# Programmiersprachen — Konzepte und Features

**Ein systematischer Vergleich von 56 Programmiersprachen**

Diese Dokumentation stellt 56 Programmiersprachen anhand ihrer Konzepte und Features gegenüber — von Typsystemen und Kontrollfluss über OOP und Pattern Matching bis hin zu Concurrency, Metaprogrammierung und Speicherverwaltung.

Wie löst Rust Speichersicherheit ohne Garbage Collector? Wie sieht Pattern Matching in 30 verschiedenen Sprachen aus? Was unterscheidet Kotlins Coroutines von Gos Goroutines? Jedes Feature wird pro Sprache als Tab dargestellt — mit Codebeispiel und Erläuterung der Besonderheiten. Die farbliche Markierung der Tabs zeigt den Unterstützungsgrad auf einen Blick: 

- <span style={{color: '#28a745', fontWeight: 600}}>Grün</span>: Natives Sprach-Feature — die Sprache unterstützt dieses Feature direkt und idiomatisch.
- <span style={{color: '#b8860b', fontWeight: 600}}>Gelb</span>: Eingeschränkt oder per API — das Feature ist verfügbar, aber mit Einschränkungen oder nur über Bibliotheken.
- <span style={{color: '#e67e22', fontWeight: 600}}>Orange</span>: Nur als Workaround — das Feature wird nicht direkt unterstützt, kann aber umständlich nachgebildet werden.
- <span style={{color: '#dc3545', fontWeight: 600}}>Rot</span>: Nicht unterstützt — die Sprache bietet dieses Feature nicht an.

Die Dokumentation richtet sich an Sprachdesigner, Lehrende und fortgeschrittene Entwickler, die Sprachen nicht nur *nutzen*, sondern *verstehen* wollen.

## Themenbereiche

<div className="row">
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>1. Programmiersprachen</h3>
      </div>
      <div className="card__body">
        <p>
          Übersicht aller 56 behandelten Sprachen, klassifiziert nach Paradigmen, ihre gegenseitigen Einflüsse und eine Feature-Matrix.
        </p>
        <a className="button button--primary" href="sprachen">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>2. Syntax und Struktur</h3>
      </div>
      <div className="card__body">
        <p>
          Block-Delimiter, Kommentare und Syntax-Eigenschaften — wie Sprachen Code visuell und strukturell organisieren.
        </p>
        <a className="button button--primary" href="syntax-struktur">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>3. Typsystem</h3>
      </div>
      <div className="card__body">
        <p>
          Wie Sprachen Typen definieren und prüfen — statische vs. dynamische Typisierung, Generics, Typinferenz und Null Safety.
        </p>
        <a className="button button--primary" href="typsystem">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>4. Binding und Scoping</h3>
      </div>
      <div className="card__body">
        <p>
          Wie Variablen deklariert, gebunden und in verschiedenen Gültigkeitsbereichen sichtbar gemacht werden.
        </p>
        <a className="button button--primary" href="binding-scoping">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>5. Operatoren</h3>
      </div>
      <div className="card__body">
        <p>
          Arithmetische, logische und spezielle Operatoren — von Standardarithmetik über Operator-Overloading bis zu Pipe- und Range-Operatoren.
        </p>
        <a className="button button--primary" href="operatoren">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>6. Kontrollfluss</h3>
      </div>
      <div className="card__body">
        <p>
          Bedingungen, Schleifen, Pattern Matching und Sprunganweisungen — wie Sprachen den Programmablauf steuern.
        </p>
        <a className="button button--primary" href="kontrollfluss">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>7. Funktionen und Prozeduren</h3>
      </div>
      <div className="card__body">
        <p>
          Funktionsdefinition, Higher-Order Functions, Closures, Currying, Generatoren und spezielle Funktionstypen.
        </p>
        <a className="button button--primary" href="funktionen">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>8. Objektorientierung</h3>
      </div>
      <div className="card__body">
        <p>
          Klassen, Vererbung, Interfaces, Polymorphismus, Encapsulation und spezielle OOP-Konstrukte wie Sealed Classes und Extension Methods.
        </p>
        <a className="button button--primary" href="objektorientierung">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>9. FP Konzepte</h3>
      </div>
      <div className="card__body">
        <p>
          Funktionale Kernkonzepte — Monaden, Effektsysteme, Immutability und formale Methoden.
        </p>
        <a className="button button--primary" href="fp-konzepte">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>10. Collections und Datenstrukturen</h3>
      </div>
      <div className="card__body">
        <p>
          Listen, Maps, Sets, Tupel, Arrays — eingebaute Datenstrukturen und ihre Operationen im Sprachvergleich.
        </p>
        <a className="button button--primary" href="collections">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>11. String-Verarbeitung</h3>
      </div>
      <div className="card__body">
        <p>
          String-Typen, Interpolation, Regex, Multiline-Strings und Unicode-Unterstützung.
        </p>
        <a className="button button--primary" href="string-verarbeitung">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>12. Fehlerbehandlung</h3>
      </div>
      <div className="card__body">
        <p>
          Exceptions, Result-Types, Option-Types und Design by Contract — wie Sprachen Fehlerfälle modellieren und behandeln.
        </p>
        <a className="button button--primary" href="fehlerbehandlung">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>13. Speicherverwaltung</h3>
      </div>
      <div className="card__body">
        <p>
          Garbage Collection, manuelle Allokation, Ownership und RAII — wie Sprachen mit Speicher umgehen.
        </p>
        <a className="button button--primary" href="speicherverwaltung">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>14. Concurrency und Parallelität</h3>
      </div>
      <div className="card__body">
        <p>
          Threads, Async/Await, Actors, Channels und Coroutines — wie Sprachen nebenläufige Programmierung unterstützen.
        </p>
        <a className="button button--primary" href="concurrency">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>15. Module und Namespaces</h3>
      </div>
      <div className="card__body">
        <p>
          Modulsysteme, Package-Management und Dependency-Verwaltung — wie Sprachen Code in logische Einheiten organisieren.
        </p>
        <a className="button button--primary" href="module-namespaces">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>16. Metaprogrammierung</h3>
      </div>
      <div className="card__body">
        <p>
          Makros, Reflection und Code-Generierung — wie Sprachen Code zur Compile- oder Laufzeit erzeugen und transformieren.
        </p>
        <a className="button button--primary" href="metaprogrammierung">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>17. Ausführungsmodell, Laufzeitumgebung und Interoperabilität</h3>
      </div>
      <div className="card__body">
        <p>
          Evaluationsstrategien, Zielplattformen, Interoperabilität und I/O — wie Code ausgeführt wird und mit der Außenwelt interagiert.
        </p>
        <a className="button button--primary" href="ausfuehrungsmodell">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>18. Testing und Assertions</h3>
      </div>
      <div className="card__body">
        <p>
          Eingebaute Test-Frameworks, Assert-Statements, Property-Based Testing und Test-Annotationen.
        </p>
        <a className="button button--primary" href="testing">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>19. Spezialisierte Features</h3>
      </div>
      <div className="card__body">
        <p>
          Domänenspezifische Funktionalitäten — von LINQ und Reactive Programming über numerische Features bis hin zu logischer Programmierung.
        </p>
        <a className="button button--primary" href="spezialisierte-features">
          Zum Kapitel →
        </a>
      </div>
    </div>
  </div>
</div>
