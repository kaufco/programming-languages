import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {PluginConfig} from '@docusaurus/types';
import {version} from '../package.json';

const config: Config = {
  title: 'Programmiersprachen — Konzepte und Features',
  tagline: 'Ein vergleichendes Framework für Programmiersprachen',
  favicon: 'img/favicon.ico',

  // GitHub Pages URL: https://kaufco.github.io/programming-languages/de/
  url: 'https://kaufco.github.io',
  baseUrl: '/programming-languages/de/',

  // GitHub Pages deployment config
  organizationName: 'kaufco',
  projectName: 'programming-languages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        language: ['de', 'en'],
        hashed: true,
        docsRouteBasePath: '/',
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 20,
        searchResultContextMaxLength: 50,
      },
    ],
  ] satisfies PluginConfig[],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'Programmiersprachen, Sprachvergleich, Typsysteme, Programmierparadigmen, Sprachfeatures, Rust, Go, Python, JavaScript, TypeScript, Kotlin, Swift, Sprachdesign'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Programmiersprachen — Konzepte und Features'},
      {property: 'og:description', content: 'Eine umfassende Gegenüberstellung von 56 Programmiersprachen in 22 Themenbereichen. Vergleiche Typsysteme, Kontrollfluss, OOP, Pattern Matching, Concurrency und mehr.'},
      {property: 'og:url', content: 'https://kaufco.github.io/programming-languages/de/'},
      {property: 'og:site_name', content: 'Programmiersprachen — Konzepte und Features'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Programmiersprachen — Konzepte und Features'},
      {name: 'twitter:description', content: 'Eine umfassende Gegenüberstellung von 56 Programmiersprachen in 22 Themenbereichen.'},
    ],
    navbar: {
      title: 'Programmiersprachen — Konzepte und Features',
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} kaufco · v${version} · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        // Bereits vorhanden: java, csharp, python, javascript, typescript
        // WICHTIG: Abhängigkeiten müssen VOR den Sprachen geladen werden, die sie benötigen
        // Reihenfolge: Basis-Sprachen zuerst, dann abhängige Sprachen
        
        // Basis-Sprachen (keine Abhängigkeiten)
        // Hinweis: javascript, python, typescript sind bereits standardmäßig geladen
        'clike', // Basis für C, C++, Java, C#, JavaScript, TypeScript, etc.
        'csharp', // C# (muss explizit geladen werden)
        'java', // Basis für Scala (muss explizit geladen werden)
        'ruby', // Basis für Crystal
        'haskell', // Basis für PureScript, Idris
        'scheme', // Basis für Racket
        'c', // Basis für C++, Objective-C
        
        // Abhängige Sprachen (nach ihren Abhängigkeiten)
        'cpp', // benötigt: c
        'objectivec', // benötigt: c
        'crystal', // benötigt: ruby
        'scala', // benötigt: java
        'typescript', // benötigt: javascript (bereits vorhanden)
        'purescript', // benötigt: haskell
        'idris', // benötigt: haskell
        'racket', // benötigt: scheme
        
        // Unabhängige Sprachen (alphabetisch)
        'ada',
        'clojure',
        'd',
        'dart',
        'eiffel',
        'elixir',
        'elm',
        'erlang',
        'fsharp',
        'fortran',
        'go',
        'groovy',
        'haxe',
        'julia',
        'kotlin',
        'lisp', // Generisches Lisp (für Common Lisp)
        'lua',
        'matlab',
        'nim',
        'ocaml',
        'odin',
        'pascal', // Object Pascal, Delphi, Free Pascal
        'perl',
        'php',
        'r',
        'rust',
        'swift',
        'v',
        'wolfram',
        'zig',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
