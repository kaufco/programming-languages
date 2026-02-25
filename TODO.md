# TODO

- [ ] **Add cross-references between features**: Review all 58 feature files and add "See also" references at related sections. Example connections:
  - Generics (3.6) ↔ Polymorphism (8.3)
  - Pattern Matching (6.3) ↔ Switch/When (6.3) ↔ Destructuring (5.3)
  - Closures (7.1) ↔ Lambdas / Anonymous Functions (7.1) ↔ Higher-Order Functions (7.1)
  - Traits/Interfaces (8.4) ↔ Type Classes (14.3)
  - Iterators/Generators (7.3) ↔ Lazy Collections (14.6) ↔ Loops (6.2)
  - Ownership (13.2) ↔ Move Semantics (3.3) ↔ Borrowing (13.2)
  - Algebraic Data Types (14.1) ↔ Enums with Data (3.4)
  - Coroutines (7.3) ↔ Structured Concurrency (11.4)
  Work chapter by chapter, not all at once. Format: brief note at the end of each feature section, e.g., "*See also: [7.1.5. Closures](/funktionen/funktionsdefinition#715-closures)*".

- [ ] **Complete Chapter 17.5. I/O Model**: Currently only a stub. Add content on file I/O, console, streams, and serialization for all 56 languages. Affects `de/docs/ausfuehrungsmodell/io-modell/intro.md` and `en/docs/ausfuehrungsmodell/io-modell/intro.md`.

## Text Quality

- [ ] **Review category description texts**: Each feature category has an `intro.md` (e.g., `docs/typsystem/type-categories---type-kinds/intro.md`) containing an introduction and a brief description text per feature section (`## X.Y.Z.`). Review these texts for clarity, completeness, and consistent style. Update as needed. Affects all 58 category `intro.md` files.

- [ ] **Review topic page card texts**: Each of the 19 chapters has a topic page (`docs/<chapter>/intro.md`) with cards linking to respective categories. Review card titles and descriptions for consistency with category `intro.md` files. Update as needed. Affects the 19 topic page `intro.md` files.

- [ ] **Review main page card texts**: The homepage (`docs/intro.md`) contains 19 cards linking to topic pages. Review card titles and descriptions for consistency with topic pages. Update as needed. Changes flow bottom-up: Category → Topic Page → Main Page.

## Translation

- [ ] **Complete English translation**: Some German sentences still appear in feature descriptions. Find and translate manually:
  - Word list = German dictionary - English dictionary
  - Find lines containing words from the word list

## Technical Debt

- [ ] **Remove build warnings**: Fix non-critical build warnings:
  - "package.json" file not found warning (consider refactoring build commands to use siteDir argument)
  - Webpack "Critical dependency" warning from vscode-languageserver-types