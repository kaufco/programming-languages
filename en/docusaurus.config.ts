import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {PluginConfig} from '@docusaurus/types';
import {version} from '../package.json';

const config: Config = {
  title: 'Programming Languages — Concepts and Features',
  tagline: 'A comparative framework for programming languages',
  favicon: 'img/favicon.ico',

  // GitHub Pages URL: https://kaufco.github.io/programming-languages/
  url: 'https://kaufco.github.io',
  baseUrl: '/programming-languages/',

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
    defaultLocale: 'en',
    locales: ['en'],
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
      {name: 'keywords', content: 'programming languages, language comparison, type systems, programming paradigms, language features, Rust, Go, Python, JavaScript, TypeScript, Kotlin, Swift, language design'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Programming Languages — Concepts and Features'},
      {property: 'og:description', content: 'A comprehensive comparison of 56 programming languages across 22 topic areas. Compare type systems, control flow, OOP, pattern matching, concurrency, and more.'},
      {property: 'og:url', content: 'https://kaufco.github.io/programming-languages/'},
      {property: 'og:site_name', content: 'Programming Languages — Concepts and Features'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Programming Languages — Concepts and Features'},
      {name: 'twitter:description', content: 'A comprehensive comparison of 56 programming languages across 22 topic areas.'},
    ],
    navbar: {
      title: 'Programming Languages — Concepts and Features',
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} kaufco · v${version} · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        // Already available: java, csharp, python, javascript, typescript
        // IMPORTANT: Dependencies must be loaded BEFORE the languages that need them
        // Order: Base languages first, then dependent languages
        
        // Base languages (no dependencies)
        // Note: javascript, python, typescript are already loaded by default
        'clike', // Base for C, C++, Java, C#, JavaScript, TypeScript, etc.
        'csharp', // C# (must be explicitly loaded)
        'java', // Base for Scala (must be explicitly loaded)
        'ruby', // Base for Crystal
        'haskell', // Base for PureScript, Idris
        'scheme', // Base for Racket
        'c', // Base for C++, Objective-C
        
        // Dependent languages (after their dependencies)
        'cpp', // requires: c
        'objectivec', // requires: c
        'crystal', // requires: ruby
        'scala', // requires: java
        'typescript', // requires: javascript (already available)
        'purescript', // requires: haskell
        'idris', // requires: haskell
        'racket', // requires: scheme
        
        // Independent languages (alphabetically)
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
        'lisp', // Generic Lisp (for Common Lisp)
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
