import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Startseite',
    },
    {
      type: 'category',
      label: '1. Programmiersprachen',
      link: {
        type: 'doc',
        id: 'sprachen/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'sprachen/uebersicht',
          label: '1.1. Übersicht',
        },
        {
          type: 'doc',
          id: 'sprachen/einfluesse',
          label: '1.2. Einflüsse',
        },
        {
          type: 'doc',
          id: 'sprachen/feature-matrix',
          label: '1.3. Feature-Matrix',
        },
      ],
    },
    {
      type: 'category',
      label: '2. Syntax und Struktur',
      link: {
        type: 'doc',
        id: 'syntax-struktur/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'syntax-struktur/kommentare/intro',
          label: '2.1. Kommentare',
        },
        {
          type: 'doc',
          id: 'syntax-struktur/block-delimiter-syntax/intro',
          label: '2.2. Block-Delimiter-Syntax',
        },
        {
          type: 'doc',
          id: 'syntax-struktur/syntax-eigenschaften/intro',
          label: '2.3. Syntax-Eigenschaften',
        },
      ],
    },
    {
      type: 'category',
      label: '3. Typsystem',
      link: {
        type: 'doc',
        id: 'typsystem/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'typsystem/type-identity-and-equivalence/intro',
          label: '3.1. Type Identity and Equivalence',
        },
        {
          type: 'doc',
          id: 'typsystem/type-categories---type-kinds/intro',
          label: '3.2. Type Categories / Type Kinds',
        },
        {
          type: 'doc',
          id: 'typsystem/value-categories-und-identity/intro',
          label: '3.3. Value Categories und Identity',
        },
        {
          type: 'doc',
          id: 'typsystem/statische-typisierung/intro',
          label: '3.4. Statische Typisierung',
        },
        {
          type: 'doc',
          id: 'typsystem/dynamische-typisierung/intro',
          label: '3.5. Dynamische Typisierung',
        },
        {
          type: 'doc',
          id: 'typsystem/null-safety/intro',
          label: '3.6. Null Safety',
        },
        {
          type: 'doc',
          id: 'typsystem/generics-und-polymorphismus/intro',
          label: '3.7. Generics und Polymorphismus',
        },
        {
          type: 'doc',
          id: 'typsystem/advanced-types/intro',
          label: '3.8. Advanced Types',
        },
        {
          type: 'doc',
          id: 'typsystem/type-system-features/intro',
          label: '3.9. Type System Features',
        },
        {
          type: 'doc',
          id: 'typsystem/low-level-types/intro',
          label: '3.10. Low-Level Types',
        },
      ],
    },
    {
      type: 'category',
      label: '4. Binding und Scoping',
      link: {
        type: 'doc',
        id: 'binding-scoping/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'binding-scoping/variablenbindung/intro',
          label: '4.1. Variablenbindung',
        },
        {
          type: 'doc',
          id: 'binding-scoping/scoping/intro',
          label: '4.2. Scoping',
        },
      ],
    },
    {
      type: 'category',
      label: '5. Operatoren',
      link: {
        type: 'doc',
        id: 'operatoren/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'operatoren/standard-operatoren/intro',
          label: '5.1. Standard-Operatoren',
        },
        {
          type: 'doc',
          id: 'operatoren/operator-overloading/intro',
          label: '5.2. Operator Overloading',
        },
        {
          type: 'doc',
          id: 'operatoren/spezielle-operatoren/intro',
          label: '5.3. Spezielle Operatoren',
        },
      ],
    },
    {
      type: 'category',
      label: '6. Kontrollfluss',
      link: {
        type: 'doc',
        id: 'kontrollfluss/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'kontrollfluss/bedingungen/intro',
          label: '6.1. Bedingungen',
        },
        {
          type: 'doc',
          id: 'kontrollfluss/schleifen/intro',
          label: '6.2. Schleifen und Iteration',
        },
        {
          type: 'doc',
          id: 'kontrollfluss/switch-und-pattern-matching/intro',
          label: '6.3. Switch und Pattern Matching',
        },
        {
          type: 'doc',
          id: 'kontrollfluss/sprunganweisungen/intro',
          label: '6.4. Sprunganweisungen',
        },
      ],
    },
    {
      type: 'category',
      label: '7. Funktionen und Prozeduren',
      link: {
        type: 'doc',
        id: 'funktionen/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'funktionen/funktionsdefinition/intro',
          label: '7.1. Funktionsdefinition',
        },
        {
          type: 'doc',
          id: 'funktionen/funktionsfeatures/intro',
          label: '7.2. Funktionsfeatures',
        },
        {
          type: 'doc',
          id: 'funktionen/spezielle-funktionstypen/intro',
          label: '7.3. Spezielle Funktionstypen',
        },
      ],
    },
    {
      type: 'category',
      label: '8. Objektorientierung',
      link: {
        type: 'doc',
        id: 'objektorientierung/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'objektorientierung/klassen-und-objekte/intro',
          label: '8.1. Klassen und Objekte',
        },
        {
          type: 'doc',
          id: 'objektorientierung/encapsulation/intro',
          label: '8.2. Encapsulation',
        },
        {
          type: 'doc',
          id: 'objektorientierung/vererbung/intro',
          label: '8.3. Vererbung',
        },
        {
          type: 'doc',
          id: 'objektorientierung/polymorphismus/intro',
          label: '8.4. Polymorphismus',
        },
        {
          type: 'doc',
          id: 'objektorientierung/interfaces-und-abstraktionen/intro',
          label: '8.5. Interfaces und Abstraktionen',
        },
        {
          type: 'doc',
          id: 'objektorientierung/erweiterungen/intro',
          label: '8.6. Erweiterungen',
        },
        {
          type: 'doc',
          id: 'objektorientierung/spezielle-konstrukte/intro',
          label: '8.7. Spezielle Konstrukte',
        },
      ],
    },
    {
      type: 'category',
      label: '9. FP Konzepte',
      link: {
        type: 'doc',
        id: 'fp-konzepte/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'fp-konzepte/kernkonzepte/intro',
          label: '9.1. Kernkonzepte',
        },
        {
          type: 'doc',
          id: 'fp-konzepte/effektsysteme/intro',
          label: '9.2. Effektsysteme',
        },
        {
          type: 'doc',
          id: 'fp-konzepte/formale-methoden/intro',
          label: '9.3. Formale Methoden',
        },
      ],
    },
    {
      type: 'category',
      label: '10. Collections und Datenstrukturen',
      link: {
        type: 'doc',
        id: 'collections/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'collections/collections/intro',
          label: '10.1. Collections',
        },
        {
          type: 'doc',
          id: 'collections/collection-operations/intro',
          label: '10.2. Collection Operations',
        },
        {
          type: 'doc',
          id: 'collections/collection-features/intro',
          label: '10.3. Collection Features',
        },
      ],
    },
    {
      type: 'category',
      label: '11. String-Verarbeitung',
      link: {
        type: 'doc',
        id: 'string-verarbeitung/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'string-verarbeitung/string-features/intro',
          label: '11.1. String-Features',
        },
      ],
    },
    {
      type: 'category',
      label: '12. Fehlerbehandlung',
      link: {
        type: 'doc',
        id: 'fehlerbehandlung/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'fehlerbehandlung/exception-handling/intro',
          label: '12.1. Exception Handling',
        },
        {
          type: 'doc',
          id: 'fehlerbehandlung/alternative-error-handling/intro',
          label: '12.2. Alternative Error Handling',
        },
        {
          type: 'doc',
          id: 'fehlerbehandlung/error-recovery-and-finalization/intro',
          label: '12.3. Error Recovery and Finalization',
        },
        {
          type: 'doc',
          id: 'fehlerbehandlung/design-by-contract/intro',
          label: '12.4. Design by Contract',
        },
      ],
    },
    {
      type: 'category',
      label: '13. Speicherverwaltung',
      link: {
        type: 'doc',
        id: 'speicherverwaltung/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'speicherverwaltung/memory-management-modelle/intro',
          label: '13.1. Memory Management Modelle',
        },
        {
          type: 'doc',
          id: 'speicherverwaltung/speicher-features/intro',
          label: '13.2. Speicher-Features',
        },
      ],
    },
    {
      type: 'category',
      label: '14. Concurrency und Parallelität',
      link: {
        type: 'doc',
        id: 'concurrency/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'concurrency/threading/intro',
          label: '14.1. Threading',
        },
        {
          type: 'doc',
          id: 'concurrency/async-await/intro',
          label: '14.2. Async/Await',
        },
        {
          type: 'doc',
          id: 'concurrency/concurrency-models/intro',
          label: '14.3. Concurrency Models',
        },
        {
          type: 'doc',
          id: 'concurrency/parallel-computing/intro',
          label: '14.4. Parallel Computing',
        },
      ],
    },
    {
      type: 'category',
      label: '15. Module und Namespaces',
      link: {
        type: 'doc',
        id: 'module-namespaces/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'module-namespaces/module-systeme/intro',
          label: '15.1. Module-Systeme',
        },
        {
          type: 'doc',
          id: 'module-namespaces/dependency-management/intro',
          label: '15.2. Dependency Management',
        },
      ],
    },
    {
      type: 'category',
      label: '16. Metaprogrammierung',
      link: {
        type: 'doc',
        id: 'metaprogrammierung/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'metaprogrammierung/reflection/intro',
          label: '16.1. Reflection',
        },
        {
          type: 'doc',
          id: 'metaprogrammierung/makros/intro',
          label: '16.2. Makros',
        },
        {
          type: 'doc',
          id: 'metaprogrammierung/code-generation/intro',
          label: '16.3. Code Generation',
        },
      ],
    },
    {
      type: 'category',
      label: '17. Ausführungsmodell, Laufzeit und Interop',
      link: {
        type: 'doc',
        id: 'ausfuehrungsmodell/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'ausfuehrungsmodell/evaluation-strategy/intro',
          label: '17.1. Evaluation Strategy',
        },
        {
          type: 'doc',
          id: 'ausfuehrungsmodell/order-of-evaluation/intro',
          label: '17.2. Order of Evaluation',
        },
        {
          type: 'doc',
          id: 'ausfuehrungsmodell/execution-targets/intro',
          label: '17.3. Execution Targets',
        },
        {
          type: 'doc',
          id: 'ausfuehrungsmodell/interoperabilitaet/intro',
          label: '17.4. Interoperabilität',
        },
        {
          type: 'doc',
          id: 'ausfuehrungsmodell/io-modell/intro',
          label: '17.5. I/O-Modell',
        },
      ],
    },
    {
      type: 'category',
      label: '18. Testing und Assertions',
      link: {
        type: 'doc',
        id: 'testing/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'testing/testing-features/intro',
          label: '18.1. Testing und Assertions',
        },
      ],
    },
    {
      type: 'category',
      label: '19. Spezialisierte Features',
      link: {
        type: 'doc',
        id: 'spezialisierte-features/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'spezialisierte-features/domain-specific-features/intro',
          label: '19.1. Domain-Specific Features',
        },
        {
          type: 'doc',
          id: 'spezialisierte-features/wissenschaftliches-computing/intro',
          label: '19.2. Wissenschaftliches Computing',
        },
        {
          type: 'doc',
          id: 'spezialisierte-features/dsl-support/intro',
          label: '19.3. DSL Support',
        },
        {
          type: 'doc',
          id: 'spezialisierte-features/logische-programmierung/intro',
          label: '19.4. Logische und Constraint-Programmierung',
        },
      ],
    },
  ],
};

export default sidebars;
