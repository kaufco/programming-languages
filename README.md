# Programming Languages — Concepts and Features

A comparative documentation that systematically compares 56 programming languages based on their concepts and features. The languages are analyzed across 19 topic areas — from type systems and control flow to OOP and pattern matching, to concurrency, metaprogramming, and memory management.

The goal is to make visible the fundamental trade-offs and design decisions of modern programming languages: How does Rust achieve memory safety without a garbage collector? What does pattern matching look like in 30 different languages? What distinguishes Kotlin's coroutines from Go's goroutines? Each feature is displayed per language as a tab — with code example and explanation of the specifics.

The documentation is aimed at language designers, educators, and advanced developers who want to not only *use* languages, but *understand* them.

> **Note:** The documentation is available in two languages (German and English). Both versions are standalone Docusaurus installations and can be switched via the language switcher in the navigation bar.

**Live Documentation:**
- [English Version](https://kaufco.github.io/programming-languages/)
- [German Version](https://kaufco.github.io/programming-languages/de/)

## Covered Languages

Ada · C · C# · C++ · Carbon · Clojure · Common Lisp · Crystal · D · Dart · Eiffel · Elixir · Elm · Erlang · F# · Fortran · Gleam · Go · Groovy · Haskell · Haxe · Idris · Java · JavaScript · Julia · Koka · Kotlin · Lean 4 · Lua · MATLAB · Mercury · Mojo · Nim · Objective-C · Object Pascal · OCaml · Octave · Odin · Perl · PHP · Prolog · PureScript · Python · R · Racket · Roc · Ruby · Rust · Scala · Scheme · Swift · TypeScript · V · VB.NET · Wolfram Language · Zig

## Topic Areas

1\. [Programming Languages](https://kaufco.github.io/programming-languages/sprachen) — 2. [Syntax and Structure](https://kaufco.github.io/programming-languages/syntax-struktur) — 3. [Type System](https://kaufco.github.io/programming-languages/typsystem) — 4. [Binding and Scoping](https://kaufco.github.io/programming-languages/binding-scoping) — 5. [Operators](https://kaufco.github.io/programming-languages/operatoren) — 6. [Control Flow](https://kaufco.github.io/programming-languages/kontrollfluss) — 7. [Functions and Procedures](https://kaufco.github.io/programming-languages/funktionen) — 8. [Object-Oriented Programming](https://kaufco.github.io/programming-languages/objektorientierung) — 9. [Functional Programming Concepts](https://kaufco.github.io/programming-languages/fp-konzepte) — 10. [Collections and Data Structures](https://kaufco.github.io/programming-languages/collections) — 11. [String Processing](https://kaufco.github.io/programming-languages/string-verarbeitung) — 12. [Error Handling](https://kaufco.github.io/programming-languages/fehlerbehandlung) — 13. [Memory Management](https://kaufco.github.io/programming-languages/speicherverwaltung) — 14. [Concurrency and Parallelism](https://kaufco.github.io/programming-languages/concurrency) — 15. [Modules and Namespaces](https://kaufco.github.io/programming-languages/module-namespaces) — 16. [Metaprogramming](https://kaufco.github.io/programming-languages/metaprogrammierung) — 17. [Execution Model, Runtime and Interop](https://kaufco.github.io/programming-languages/ausfuehrungsmodell) — 18. [Testing and Assertions](https://kaufco.github.io/programming-languages/testing) — 19. [Specialized Features](https://kaufco.github.io/programming-languages/spezialisierte-features)

## Tab Color System

Each feature displays a color-coded tab per language:

- **Green**: Feature is natively supported.
- **Yellow**: Feature is supported, but with limitations or only through the standard library.
- **Orange**: Feature is not supported, but a workaround using other language features is described.
- **Red**: Feature is not supported, no meaningful workaround available.

The **Color Legend** in the right sidebar allows tabs to be shown/hidden by color. By default, all four colors are active.

---

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20.0
- npm (included with Node.js)

### Installation

```bash
npm install
```

### Starting the Development Server

```bash
npm start
```

Starts both language versions (German and English) with a proxy server. The browser automatically opens `http://localhost:3000/programming-languages/` (English version).

**Available URLs:**
- **English:** `http://localhost:3000/programming-languages/`
- **German:** `http://localhost:3000/programming-languages/de/`

**Additional Start Options:**
- `npm run start:de` - Starts only the German version (Port 3001)
- `npm run start:en` - Starts only the English version (Port 3002)
- `npm run start:both` - Starts both versions without proxy (Ports 3001 and 3002)

> **Note:** In development mode (`npm start`), the **search function is not available**. The search index is only generated during the build. To test the search, the built version must be used (see below).

### Building the Project

```bash
npm run build
```

Generates a complete static website in the `build/` directory. This step also generates the search index.

### Running the Built Version Locally

```bash
npm run serve
```

Starts a local server that serves the built version from `build/` — at `http://localhost:3000`. This matches the behavior of the deployed version, including working search.

### Deployment (GitHub Pages)

The documentation is automatically built and deployed to **GitHub Pages** via **GitHub Actions**. This happens on every push to the `master` branch.

**Live URLs:**
- **English:** `https://kaufco.github.io/programming-languages/` (default)
- **German:** `https://kaufco.github.io/programming-languages/de/`

### Fixing Cache Issues

If changes are not visible after a reload:

1. **Hard Refresh:** `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Clear Docusaurus cache:** `npm run clear` and then restart/build
3. **Clear browser storage:** `F12` → Console → `localStorage.clear(); location.reload();`

---

## Project Structure

The documentation is set up bilingually (German and English) with two separate Docusaurus installations:

```
├── .github/workflows/       # GitHub Actions (automatic build + deploy)
├── de/                      # German version
│   ├── docs/                # Documentation content (MDX/Markdown)
│   ├── src/                 # React components and theme overrides
│   ├── static/              # Static assets
│   ├── docusaurus.config.ts # Docusaurus configuration (baseUrl: /de/)
│   └── sidebars.ts          # Sidebar navigation
├── en/                      # English version
│   ├── docs/                # Documentation content (MDX/Markdown)
│   ├── src/                 # React components and theme overrides
│   ├── static/              # Static assets
│   ├── docusaurus.config.ts # Docusaurus configuration (baseUrl: /)
│   └── sidebars.ts          # Sidebar navigation
├── build/                   # Generated output (after npm run build)
│   ├── de/                  # German version
│   └── (en in root)         # English version
├── dev-proxy.js             # Development proxy for both versions
├── LICENSE                  # CC BY-NC-SA 4.0 license
├── README.md                # This file
├── start-dev.sh             # Deployment script
└── TODO.md                  # Open tasks and planned improvements
```

## Technology Stack

- **[Docusaurus 3](https://docusaurus.io/)** — Static site generator for documentation
- **React 19** — UI components (FilteredTabs, language filter)
- **TypeScript** — Type-safe configuration and components
- **MDX** — Markdown with embedded React components
- **[docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)** — Offline search function (only in build)
- **Prism** — Syntax highlighting for 50+ languages
