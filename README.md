# Programming Languages — Concepts and Features

A comparative documentation that systematically compares 56 programming languages based on their concepts and features. The languages are analyzed across 22 topic areas — from type systems and control flow to OOP and pattern matching, to concurrency, metaprogramming, and memory management.

The goal is to make visible the fundamental trade-offs and design decisions of modern programming languages: How does Rust achieve memory safety without a garbage collector? What does pattern matching look like in 30 different languages? What distinguishes Kotlin's coroutines from Go's goroutines? Each feature is displayed per language as a tab — with code example and explanation of the specifics.

The documentation is aimed at language designers, educators, and advanced developers who want to not only *use* languages, but *understand* them.

> **Note:** The documentation is available in two languages (German and English). Both versions are standalone Docusaurus installations and can be switched via the language switcher in the navigation bar.

## Covered Languages

Ada · C · C# · C++ · Carbon · Clojure · Common Lisp · Crystal · D · Dart · Eiffel · Elixir · Elm · Erlang · F# · Fortran · Gleam · Go · Groovy · Haskell · Haxe · Idris · Java · JavaScript · Julia · Koka · Kotlin · Lean 4 · Lua · MATLAB · Mercury · Mojo · Nim · Objective-C · Object Pascal · OCaml · Octave · Odin · Perl · PHP · Prolog · PureScript · Python · R · Racket · Roc · Ruby · Rust · Scala · Scheme · Swift · TypeScript · V · VB.NET · Wolfram Language · Zig

## Topic Areas

1. Programming Languages — 2. Type System — 3. Binding & Scoping — 4. Operators — 5. Control Flow — 6. Pattern Matching — 7. Functions — 8. Object Orientation — 9. Collections — 10. Syntax & Structure — 11. Modules & Namespaces — 12. Memory Management — 13. Error Handling — 14. Concurrency — 15. Evaluation & Execution — 16. Metaprogramming — 17. Runtime & Execution — 18. Interoperability — 19. String Processing — 20. Scientific Computing — 21. DSL Support — 22. Specialized Features

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

**Setup (one-time):**

1. In the GitHub repository → **Settings** → **Pages**
2. Under **Source**: select "**GitHub Actions**" (not "Deploy from a branch")
3. Done — on the next push to `master`, it will automatically build and deploy.

The workflow can also be triggered manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

**Alternative Hosting:**

The built version (`build/`) is a static website and can also be deployed on other platforms:
- **Vercel / Netlify / Cloudflare Pages:** Build command `npm run build`, output directory `build/`
- **Own web server (Nginx, Apache):** Configure `build/` directory as document root

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
├── LANGUAGES.md             # List of all covered languages
├── COLORS.md                # Tab color classifications
├── TODO.md                  # Open tasks and planned improvements
└── package.json
```

## Technology Stack

- **[Docusaurus 3](https://docusaurus.io/)** — Static site generator for documentation
- **React 19** — UI components (FilteredTabs, language filter)
- **TypeScript** — Type-safe configuration and components
- **MDX** — Markdown with embedded React components
- **[docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)** — Offline search function (only in build)
- **Prism** — Syntax highlighting for 50+ languages
