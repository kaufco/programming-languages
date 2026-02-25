import React, { useState, useEffect, useRef, useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  useDomainFilter,
  DOMAIN_META,
  ALL_DOMAINS,
  type Domain,
  type DomainFilters,
} from '@site/src/contexts/DomainFilterContext';

/* ================================================================
   DATEN
   ================================================================ */

interface NodeDef { label: string; domain: Domain }

const NODES: Record<string, NodeDef> = {
  // Ursprünge
  Fortran: { label: 'Fortran', domain: 'native' },
  Prolog:  { label: 'Prolog', domain: 'special' },
  C:       { label: 'C', domain: 'native' },
  Scheme:  { label: 'Scheme', domain: 'fp' },
  // 1980er
  Ada:     { label: 'Ada', domain: 'native' },
  CL:      { label: 'Common Lisp', domain: 'fp' },
  ObjC:    { label: 'Objective-C', domain: 'native' },
  MATLAB:  { label: 'MATLAB', domain: 'special' },
  Cpp:     { label: 'C++', domain: 'native' },
  Eiffel:  { label: 'Eiffel', domain: 'native' },
  OPascal: { label: 'Object Pascal', domain: 'native' },
  Erlang:  { label: 'Erlang', domain: 'fp' },
  Perl:    { label: 'Perl', domain: 'oo' },
  WL:      { label: 'Wolfram Lang.', domain: 'special' },
  // 1990er
  Haskell: { label: 'Haskell', domain: 'fp' },
  Python:  { label: 'Python', domain: 'oo' },
  Lua:     { label: 'Lua', domain: 'oo' },
  R:       { label: 'R', domain: 'special' },
  Octave:  { label: 'Octave', domain: 'special' },
  Ruby:    { label: 'Ruby', domain: 'oo' },
  Java:    { label: 'Java', domain: 'oo' },
  JS:      { label: 'JavaScript', domain: 'oo' },
  PHP:     { label: 'PHP', domain: 'oo' },
  Racket:  { label: 'Racket', domain: 'fp' },
  Mercury: { label: 'Mercury', domain: 'special' },
  OCaml:   { label: 'OCaml', domain: 'fp' },
  // 2000er
  Cs:      { label: 'C#', domain: 'oo' },
  D:       { label: 'D', domain: 'native' },
  VB:      { label: 'VB.NET', domain: 'oo' },
  Groovy:  { label: 'Groovy', domain: 'oo' },
  Scala:   { label: 'Scala', domain: 'oo' },
  Haxe:    { label: 'Haxe', domain: 'oo' },
  Fsharp:  { label: 'F#', domain: 'fp' },
  Clojure: { label: 'Clojure', domain: 'fp' },
  Nim:     { label: 'Nim', domain: 'native' },
  Go:      { label: 'Go', domain: 'native' },
  // 2010er
  Rust:    { label: 'Rust', domain: 'native' },
  Dart:    { label: 'Dart', domain: 'oo' },
  Kotlin:  { label: 'Kotlin', domain: 'oo' },
  Idris:   { label: 'Idris', domain: 'fp' },
  Elixir:  { label: 'Elixir', domain: 'fp' },
  TS:      { label: 'TypeScript', domain: 'oo' },
  Julia:   { label: 'Julia', domain: 'special' },
  Elm:     { label: 'Elm', domain: 'fp' },
  Koka:    { label: 'Koka', domain: 'fp' },
  PS:      { label: 'PureScript', domain: 'fp' },
  Crystal: { label: 'Crystal', domain: 'oo' },
  Swift:   { label: 'Swift', domain: 'oo' },
  // 2016+
  Gleam:   { label: 'Gleam', domain: 'fp' },
  Zig:     { label: 'Zig', domain: 'native' },
  Odin:    { label: 'Odin', domain: 'native' },
  V:       { label: 'V', domain: 'native' },
  Roc:     { label: 'Roc', domain: 'fp' },
  Lean:    { label: 'Lean 4', domain: 'fp' },
  Carbon:  { label: 'Carbon', domain: 'native' },
  Mojo:    { label: 'Mojo', domain: 'oo' },
};

interface EdgeDef {
  from: string;
  to: string;
  dashed?: boolean;
  /** Kurzbeschreibung: worin besteht der Einfluss? */
  note?: string;
}

const EDGES: EdgeDef[] = [
  // ── Lisp-Familie ──
  { from: 'Scheme', to: 'Racket', note: 'Direkter Nachfolger; Makrosystem, Continuations, Hygienic Macros' },
  { from: 'Scheme', to: 'Clojure', note: 'Homoikonizität, Makros, funktionale Grundhaltung' },
  { from: 'Scheme', to: 'JS', note: 'First-Class Functions, Closures, dynamisches Typsystem' },
  { from: 'CL', to: 'Clojure', note: 'REPL-Kultur, Condition System, Multimethods' },

  // ── C-Familie ──
  { from: 'C', to: 'Cpp', note: 'Syntax, manuelle Speicherverwaltung, Pointer, Kompiliermodell' },
  { from: 'C', to: 'ObjC', note: 'C-Syntax als Basis, Pointer, manuelle Speicherverwaltung' },
  { from: 'C', to: 'Go', note: 'Syntax-Grundstruktur, Pointer, Structs statt Klassen' },
  { from: 'C', to: 'Zig', note: 'Low-Level-Kontrolle, manuelle Speicherverwaltung, C-ABI-Kompatibilität' },
  { from: 'C', to: 'Odin', note: 'Prozedurale Grundstruktur, explizite Speicherverwaltung' },
  { from: 'C', to: 'V', note: 'C-ähnliche Syntax, native Kompilierung, C-Interop' },
  { from: 'C', to: 'Ada', note: 'Prozedurale Struktur, Low-Level-Zugriff, Systems Programming' },
  { from: 'C', to: 'OPascal', note: 'Prozedurale Grundstruktur, Pointer, kompilierte Sprache' },
  { from: 'Cpp', to: 'D', note: 'Syntax, Templates/Generics, RAII, Operator-Overloading' },
  { from: 'Cpp', to: 'Java', note: 'OOP-Syntax (Klassen, Vererbung), statische Typisierung' },
  { from: 'Cpp', to: 'Cs', note: 'Syntax, statische Typisierung, Operator-Overloading, Generics' },
  { from: 'Cpp', to: 'Rust', note: 'Zero-Cost Abstractions, RAII, Move-Semantik, Templates → Generics' },
  { from: 'Cpp', to: 'Carbon', note: 'Designziel: C++-Nachfolger mit voller Interop' },

  // ── ML / FP-Linie ──
  { from: 'Scheme', to: 'Haskell', note: 'Funktionale Grundkonzepte, Closures, Lambda Calculus' },
  { from: 'OCaml', to: 'Fsharp', note: 'Direkter Nachfolger; Syntax, Pattern Matching, Typinferenz, ADTs' },
  { from: 'OCaml', to: 'Rust', note: 'Pattern Matching, Algebraische Datentypen, Typinferenz' },
  { from: 'OCaml', to: 'Scala', note: 'Pattern Matching, Typinferenz, funktionale Datenstrukturen' },
  { from: 'Haskell', to: 'Elm', note: 'Reine Funktionalität, ADTs, Typklassen, Elm Architecture ≈ Monaden' },
  { from: 'Haskell', to: 'PS', note: 'Typklassen, Monaden, Typinferenz, Reinheit' },
  { from: 'Haskell', to: 'Idris', note: 'Typklassen, Lazy Evaluation, Dependent Types als Erweiterung' },
  { from: 'Haskell', to: 'Rust', note: 'Traits (≈ Typklassen), Pattern Matching, Algebraische Datentypen' },
  { from: 'Haskell', to: 'Koka', note: 'Effektsystem, Typklassen, algebraische Effekte' },
  { from: 'Haskell', to: 'Scala', note: 'Higher-Kinded Types, Monaden, Typklassen (via Implicits)' },
  { from: 'Haskell', to: 'Lean', note: 'Typklassen, Monaden, Dependent Types, Taktik-System' },
  { from: 'Haskell', to: 'Gleam', note: 'Immutability, Pattern Matching, Pipe-Operator' },
  { from: 'Haskell', to: 'Roc', note: 'Reinheit, ADTs, Typinferenz, keine Seiteneffekte im Typsystem' },
  { from: 'Idris', to: 'Lean', note: 'Dependent Types, Taktik-basierte Beweise, totale Programmierung' },
  { from: 'Elm', to: 'Roc', note: 'Elm Architecture, einfache Fehlermeldungen, keine Exceptions' },

  // ── OOP-Linie ──
  { from: 'Eiffel', to: 'Java', note: 'Interfaces, Garbage Collection, Design by Contract (Assertions)' },
  { from: 'Java', to: 'Cs', note: 'VM-Architektur, Typsystem, Syntax, Garbage Collection' },
  { from: 'Java', to: 'Groovy', note: 'JVM-Plattform, Syntax, OOP-Modell, dynamische Erweiterung' },
  { from: 'Java', to: 'Scala', note: 'JVM-Plattform, Typsystem, Interop, OOP-Grundstruktur' },
  { from: 'Java', to: 'Kotlin', note: 'JVM-Plattform, Syntax-Vereinfachung, Null Safety, Interop' },
  { from: 'Java', to: 'Dart', note: 'Klassenbasierte OOP, statische Typisierung, Syntax' },
  { from: 'Java', to: 'Haxe', note: 'Klassenbasierte OOP, statische Typisierung, Generics' },
  { from: 'Cs', to: 'TS', note: 'Statisches Typsystem auf dynamischer Plattform, Generics, Async/Await' },
  { from: 'Cs', to: 'Dart', note: 'Async/Await, Generics, Nullable Types' },
  { from: 'Cs', to: 'Kotlin', note: 'Properties, Extension Functions, Null Safety, Async/Await' },

  // ── Scripting-Linie ──
  { from: 'Perl', to: 'Python', note: 'Regular Expressions, String-Verarbeitung, Scripting-Kultur' },
  { from: 'Perl', to: 'Ruby', note: 'Regex-Integration, Sigils, Scripting-Idiome, „Mehr als ein Weg"' },
  { from: 'Perl', to: 'PHP', note: 'CGI-Scripting, String-Interpolation, Regex, $-Variablen' },
  { from: 'Python', to: 'Ruby', note: 'Lesbare Syntax, Iteratoren, dynamische Typisierung' },
  { from: 'Python', to: 'Nim', note: 'Einrückungsbasierte Syntax, Lesbarkeit, Scripting-Komfort' },
  { from: 'Python', to: 'Mojo', note: 'Designziel: Python-Superset mit nativer Performance' },
  { from: 'Ruby', to: 'Crystal', note: 'Syntax (fast identisch), OOP-Modell, Blöcke/Closures' },
  { from: 'Ruby', to: 'Elixir', note: 'Entwicklerfreundliche Syntax, Blöcke, Metaprogrammierung, DSLs' },

  // ── Erlang-Familie ──
  { from: 'Erlang', to: 'Elixir', note: 'BEAM-VM, Actor-Modell, Fault Tolerance, Hot Code Reloading' },
  { from: 'Erlang', to: 'Gleam', note: 'BEAM-VM, Actor-Modell, Concurrency, Fault Tolerance' },
  { from: 'Erlang', to: 'Roc', note: 'Plattform-Konzept, Prozessmodell, Fehlertoleranz' },

  // ── Prolog-Familie ──
  { from: 'Prolog', to: 'Mercury', note: 'Logische Programmierung, Unifikation, Backtracking, Deklarativität' },
  { from: 'Prolog', to: 'Erlang', note: 'Pattern Matching, deklarativer Stil, Ericssons Prolog-Erbe' },

  // ── JavaScript ──
  { from: 'JS', to: 'TS', note: 'Superset; Laufzeitverhalten, Ökosystem, dynamische Idiome' },

  // ── Swift ──
  { from: 'ObjC', to: 'Swift', note: 'Apple-Ökosystem, Cocoa-Interop, Reference Counting (ARC)' },
  { from: 'Rust', to: 'Swift', note: 'Ownership-Konzepte, Enums mit Daten, Pattern Matching' },

  // ── MATLAB-Linie ──
  { from: 'MATLAB', to: 'Octave', note: 'Kompatibles Reimplementation; Syntax, Matrix-Operationen' },
  { from: 'MATLAB', to: 'Julia', note: 'Numerische Syntax, Matrix-Literale, wissenschaftliches Computing' },
  { from: 'R', to: 'Julia', note: 'Statistik-Idiome, Data Frames, Multiple Dispatch für Datenanalyse' },
  { from: 'Scheme', to: 'Julia', note: 'Homoikonizität, Makrosystem, Metaprogrammierung' },

  // ── Weitere ──
  { from: 'Fsharp', to: 'Haxe', note: 'Pattern Matching, Algebraische Datentypen, Typinferenz' },
  { from: 'Go', to: 'V', note: 'Einfache Syntax, schnelle Kompilierung, Goroutines → Coroutines' },
  { from: 'Go', to: 'Odin', note: 'Einfachheit als Designziel, explizite Fehlerbehandlung' },
  { from: 'Rust', to: 'Carbon', note: 'Ownership-Ideen, Sicherheitsgarantien, Generics' },
  { from: 'Rust', to: 'Zig', note: 'Compile-Time-Berechnung (Comptime), Sicherheitsfokus, kein GC' },

  // ── VB.NET (geteilte Plattform) ──
  { from: 'Cs', to: 'VB', dashed: true, note: 'Geteilte .NET-Plattform, CLR, BCL, gegenseitige Feature-Parität' },
];

// Vor-berechnete Adjacency + Edge-Notes
const ADJ_IN: Record<string, string[]> = {};
const ADJ_OUT: Record<string, string[]> = {};
/** Lookup: "from→to" → note */
const EDGE_NOTES: Record<string, string> = {};
for (const edge of EDGES) {
  (ADJ_OUT[edge.from] ??= []).push(edge.to);
  (ADJ_IN[edge.to] ??= []).push(edge.from);
  if (edge.note) {
    EDGE_NOTES[`${edge.from}→${edge.to}`] = edge.note;
  }
}

/* ================================================================
   MERMAID-DEFINITION BAUEN
   ================================================================ */

function buildDefinition(filters: DomainFilters): string {
  const visibleIds = new Set(
    Object.entries(NODES)
      .filter(([, n]) => filters[n.domain])
      .map(([id]) => id),
  );

  if (visibleIds.size === 0) {
    return 'graph LR\n    empty["Keine Domäne ausgewählt"]';
  }

  const lines: string[] = [];

  lines.push(`%%{init: {'theme': 'default', 'themeVariables': { 'fontSize': '13px' }, 'flowchart': { 'curve': 'basis', 'nodeSpacing': 15, 'rankSpacing': 50 }}}%%`);

  lines.push('graph LR');

  // Knoten
  for (const [id, node] of Object.entries(NODES)) {
    if (visibleIds.has(id)) {
      lines.push(`    ${id}["${node.label}"]`);
    }
  }

  // Kanten
  for (const edge of EDGES) {
    if (visibleIds.has(edge.from) && visibleIds.has(edge.to)) {
      lines.push(`    ${edge.from} ${edge.dashed ? '-.->' : '-->'} ${edge.to}`);
    }
  }

  // classDef
  for (const domain of ALL_DOMAINS) {
    const m = DOMAIN_META[domain];
    lines.push(`    classDef ${domain} fill:${m.fill},stroke:${m.stroke},color:${m.text}`);
  }

  // class-Zuweisung
  for (const domain of ALL_DOMAINS) {
    const ids = Object.entries(NODES)
      .filter(([id, n]) => n.domain === domain && visibleIds.has(id))
      .map(([id]) => id);
    if (ids.length > 0) {
      lines.push(`    class ${ids.join(',')} ${domain}`);
    }
  }

  return lines.join('\n');
}

/* ================================================================
   SVG-INTERAKTIVITÄT
   ================================================================ */

interface EdgeWithNote {
  label: string;
  note?: string;
}

interface SelectedInfo {
  nodeId: string;
  label: string;
  domain: Domain;
  incoming: EdgeWithNote[];
  outgoing: EdgeWithNote[];
}

/**
 * Versucht aus einer Mermaid-Edge-ID die Source/Target-Knoten zu extrahieren.
 * Mermaid v11 format: "L-{src}-{dst}-{idx}" oder "L_{src}_{dst}_{idx}"
 */
function parseEdgeId(id: string, nodeIds: Set<string>): [string, string] | null {
  for (const sep of ['-', '_']) {
    if (!id.startsWith('L' + sep)) continue;
    const parts = id.substring(2).split(sep);
    if (parts.length >= 3) {
      if (nodeIds.has(parts[0]) && nodeIds.has(parts[1])) {
        return [parts[0], parts[1]];
      }
      // Für Node-IDs die Trennzeichen enthalten könnten
      for (let i = 1; i < parts.length - 1; i++) {
        const src = parts.slice(0, i).join(sep);
        const rest = parts.slice(i);
        for (let j = 1; j < rest.length; j++) {
          const dst = rest.slice(0, j).join(sep);
          if (nodeIds.has(src) && nodeIds.has(dst)) {
            return [src, dst];
          }
        }
      }
    }
  }
  return null;
}

/**
 * Findet alle Node-<g>-Elemente im SVG und baut eine Map: SVGElement → NodeId.
 */
function findNodeElements(svg: SVGSVGElement, nodeIds: Set<string>): Map<Element, string> {
  const result = new Map<Element, string>();

  // Strategie 1: class="node ..." und id="flowchart-{id}-{n}"
  svg.querySelectorAll('[class*="node"]').forEach((el) => {
    if (result.has(el)) return;
    const match = el.id.match(/^flowchart-(.+?)-\d+$/);
    if (match && nodeIds.has(match[1])) {
      result.set(el, match[1]);
    }
  });

  // Strategie 2: <g> mit id das direkt einem Node-ID entspricht
  if (result.size === 0) {
    for (const nodeId of nodeIds) {
      const el = svg.getElementById(nodeId);
      if (el && el.tagName.toLowerCase() === 'g') {
        result.set(el, nodeId);
      }
    }
  }

  // Strategie 3: Label-Text matchen
  if (result.size === 0) {
    const labelToId = new Map<string, string>();
    for (const [id, node] of Object.entries(NODES)) {
      if (nodeIds.has(id)) labelToId.set(node.label, id);
    }
    svg.querySelectorAll('g').forEach((g) => {
      const textEl = g.querySelector('.label, text, foreignObject');
      if (!textEl) return;
      const text = textEl.textContent?.trim();
      if (text && labelToId.has(text) && !result.has(g)) {
        let parentAlreadyMapped = false;
        for (const [mapped] of result) {
          if (mapped.contains(g)) { parentAlreadyMapped = true; break; }
        }
        if (!parentAlreadyMapped) {
          result.set(g, labelToId.get(text)!);
        }
      }
    });
  }

  return result;
}

/**
 * Findet alle Edge-Elemente.
 */
function findEdgeElements(svg: SVGSVGElement, nodeIds: Set<string>): { el: Element; src: string; dst: string }[] {
  const result: { el: Element; src: string; dst: string }[] = [];

  // Strategie 1 (Mermaid v11): <path data-edge="true">
  svg.querySelectorAll('path[data-edge], path[data-et="edge"]').forEach((el) => {
    const edgeId = el.getAttribute('data-id') || el.id || '';
    const parsed = parseEdgeId(edgeId, nodeIds);
    if (parsed) {
      result.push({ el, src: parsed[0], dst: parsed[1] });
    }
  });

  // Strategie 2 (Mermaid v10 Fallback): <g class="edgePath">
  if (result.length === 0) {
    svg.querySelectorAll('.edgePath').forEach((el) => {
      const parsed = parseEdgeId(el.id, nodeIds);
      if (parsed) {
        result.push({ el, src: parsed[0], dst: parsed[1] });
      }
    });
  }

  return result;
}

function setupInteractivity(
  container: HTMLDivElement,
  filters: DomainFilters,
  onSelect: (info: SelectedInfo | null) => void,
) {
  const svg = container.querySelector('svg');
  if (!svg) return;

  const allNodeIds = new Set(
    Object.entries(NODES)
      .filter(([, n]) => filters[n.domain])
      .map(([id]) => id),
  );

  // ── Maps aufbauen ──
  const svgToNode = findNodeElements(svg, allNodeIds);
  const edgeInfos = findEdgeElements(svg, allNodeIds);

  // Cursor: Pointer für alle Nodes
  for (const [el] of svgToNode) {
    (el as SVGGElement).style.cursor = 'pointer';
  }

  let currentSelected: string | null = null;

  // ── Highlight anwenden ──
  function doHighlight(nodeId: string) {
    const inSrcs = new Set<string>();
    const outDsts = new Set<string>();
    const inEdgeEls = new Set<Element>();
    const outEdgeEls = new Set<Element>();

    for (const e of edgeInfos) {
      if (e.dst === nodeId) { inSrcs.add(e.src); inEdgeEls.add(e.el); }
      if (e.src === nodeId) { outDsts.add(e.dst); outEdgeEls.add(e.el); }
    }

    const adjacent = new Set([...inSrcs, ...outDsts]);

    // ── Knoten ──
    for (const [el, nId] of svgToNode) {
      const g = el as SVGGElement;
      if (nId === nodeId) {
        g.style.opacity = '1';
        const shape = el.querySelector('rect, polygon, circle, .basic') as SVGElement;
        if (shape) {
          shape.dataset.origStroke = '1';
          shape.style.strokeWidth = '3px';
          shape.style.filter = 'drop-shadow(0 0 4px rgba(0,0,0,0.3))';
        }
      } else if (adjacent.has(nId)) {
        g.style.opacity = '0.75';
      } else {
        g.style.opacity = '0.2';
      }
    }

    // ── Kanten ──
    for (const e of edgeInfos) {
      const el = e.el as SVGElement;
      const paths = el.tagName.toLowerCase() === 'path'
        ? [el as SVGPathElement]
        : Array.from(el.querySelectorAll<SVGPathElement>('path'));

      if (inEdgeEls.has(e.el)) {
        el.style.opacity = '1';
        paths.forEach((p) => {
          p.style.stroke = '#1a7a2e';
          p.style.strokeWidth = '2.5px';
        });
      } else if (outEdgeEls.has(e.el)) {
        el.style.opacity = '1';
        paths.forEach((p) => {
          p.style.stroke = '#b71c1c';
          p.style.strokeWidth = '2.5px';
        });
      } else {
        el.style.opacity = '0.15';
        paths.forEach((p) => {
          p.style.stroke = '#ccc';
          p.style.strokeWidth = '';
        });
      }
    }
  }

  // ── Highlight entfernen ──
  function doClear() {
    for (const [el] of svgToNode) {
      (el as SVGGElement).style.opacity = '';
      const shape = el.querySelector('[data-orig-stroke]') as SVGElement;
      if (shape) {
        shape.style.strokeWidth = '';
        shape.style.filter = '';
        delete shape.dataset.origStroke;
      }
    }
    for (const e of edgeInfos) {
      const el = e.el as SVGElement;
      el.style.opacity = '';
      const paths = el.tagName.toLowerCase() === 'path'
        ? [el as SVGPathElement]
        : Array.from(el.querySelectorAll<SVGPathElement>('path'));
      paths.forEach((p) => {
        p.style.stroke = '';
        p.style.strokeWidth = '';
      });
    }
  }

  // ── Knoten-Click ──
  for (const [el, nodeId] of svgToNode) {
    el.addEventListener('click', (ev) => {
      ev.stopPropagation();

      if (currentSelected === nodeId) {
        currentSelected = null;
        doClear();
        onSelect(null);
      } else {
        if (currentSelected) doClear();
        currentSelected = nodeId;
        doHighlight(nodeId);
        const node = NODES[nodeId];
        const incoming: EdgeWithNote[] = (ADJ_IN[nodeId] || [])
          .filter((src) => filters[NODES[src]?.domain])
          .map((src) => ({
            label: NODES[src].label,
            note: EDGE_NOTES[`${src}→${nodeId}`],
          }));
        const outgoing: EdgeWithNote[] = (ADJ_OUT[nodeId] || [])
          .filter((dst) => filters[NODES[dst]?.domain])
          .map((dst) => ({
            label: NODES[dst].label,
            note: EDGE_NOTES[`${nodeId}→${dst}`],
          }));
        onSelect({ nodeId, label: node.label, domain: node.domain, incoming, outgoing });
      }
    });
  }

  // ── Hintergrund-Click: Deselect ──
  svg.addEventListener('click', () => {
    if (currentSelected) {
      currentSelected = null;
      doClear();
      onSelect(null);
    }
  });
}

/* ================================================================
   REACT-KOMPONENTE
   ================================================================ */

let renderCounter = 0;

function InfluenceGraphInner() {
  const { filters, registerGraph, unregisterGraph } = useDomainFilter();
  const [selected, setSelected] = useState<SelectedInfo | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Registrierung beim Context ──
  useEffect(() => {
    registerGraph();
    return () => unregisterGraph();
  }, [registerGraph, unregisterGraph]);

  // ── Mermaid rendern ──
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const mermaid = (await import('mermaid')).default;

      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
      });

      const definition = buildDefinition(filters);
      const id = `ig-${++renderCounter}`;

      try {
        const { svg } = await mermaid.render(id, definition);
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
        setupInteractivity(containerRef.current, filters, setSelected);
      } catch (e) {
        console.error('Mermaid render error:', e);
      }
    })();

    return () => { cancelled = true; };
  }, [filters]);

  // Filter-Wechsel → Selektion zurücksetzen
  useEffect(() => {
    setSelected(null);
  }, [filters]);

  return (
    <div>
      {/* ── Info-Panel (bei Auswahl) — sticky ── */}
      {selected && (
        <div style={{
          position: 'sticky',
          top: 'calc(var(--ifm-navbar-height, 3.75rem) + 0.5rem)',
          zIndex: 10,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          gap: '0.5rem 1rem',
          marginBottom: '0.75rem',
          padding: '0.6rem 0.75rem',
          borderRadius: '8px',
          border: `2px solid ${DOMAIN_META[selected.domain].stroke}`,
          background: DOMAIN_META[selected.domain].fill,
          fontSize: '0.9rem',
          lineHeight: 1.5,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}>
          <strong style={{ color: DOMAIN_META[selected.domain].text, fontSize: '1rem', width: '100%' }}>
            {selected.label}
          </strong>
          {selected.incoming.length > 0 && (
            <div style={{ width: '100%' }}>
              <span style={{ color: '#1a7a2e', fontWeight: 600 }}>← beeinflusst von: </span>
              {selected.incoming.map((e, i) => (
                <span key={i}>
                  {i > 0 && ', '}
                  {e.label}
                  {e.note && (
                    <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.8rem' }}>
                      {' '}({e.note})
                    </span>
                  )}
                </span>
              ))}
            </div>
          )}
          {selected.outgoing.length > 0 && (
            <div style={{ width: '100%' }}>
              <span style={{ color: '#b71c1c', fontWeight: 600 }}>→ beeinflusst: </span>
              {selected.outgoing.map((e, i) => (
                <span key={i}>
                  {i > 0 && ', '}
                  {e.label}
                  {e.note && (
                    <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.8rem' }}>
                      {' '}({e.note})
                    </span>
                  )}
                </span>
              ))}
            </div>
          )}
          {selected.incoming.length === 0 && selected.outgoing.length === 0 && (
            <span style={{ color: 'var(--ifm-color-emphasis-500)' }}>
              Keine sichtbaren Verbindungen
            </span>
          )}
        </div>
      )}

      {/* ── Graph ── */}
      <div
        ref={containerRef}
        style={{
          overflow: 'auto',
          padding: '0.5rem',
          border: '1px solid var(--ifm-color-emphasis-200)',
          borderRadius: '8px',
          background: 'var(--ifm-card-background-color, #fff)',
          minHeight: '200px',
        }}
      >
        <p style={{ color: 'var(--ifm-color-emphasis-500)', textAlign: 'center', padding: '2rem 0' }}>
          Graph wird geladen…
        </p>
      </div>
    </div>
  );
}

/* ================================================================
   EXPORT MIT BROWSERONLY-WRAPPER
   ================================================================ */

export default function InfluenceGraph(): React.ReactNode {
  return (
    <BrowserOnly fallback={
      <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--ifm-color-emphasis-500)' }}>
        Graph wird geladen…
      </div>
    }>
      {() => <InfluenceGraphInner />}
    </BrowserOnly>
  );
}
