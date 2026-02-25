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
  // ── Lisp Family ──
  { from: 'Scheme', to: 'Racket', note: 'Direct successor; macro system, continuations, hygienic macros' },
  { from: 'Scheme', to: 'Clojure', note: 'Homoiconicity, macros, functional foundation' },
  { from: 'Scheme', to: 'JS', note: 'First-class functions, closures, dynamic type system' },
  { from: 'CL', to: 'Clojure', note: 'REPL culture, condition system, multimethods' },

  // ── C Family ──
  { from: 'C', to: 'Cpp', note: 'Syntax, manual memory management, pointers, compilation model' },
  { from: 'C', to: 'ObjC', note: 'C syntax as basis, pointers, manual memory management' },
  { from: 'C', to: 'Go', note: 'Basic syntax structure, pointers, structs instead of classes' },
  { from: 'C', to: 'Zig', note: 'Low-level control, manual memory management, C ABI compatibility' },
  { from: 'C', to: 'Odin', note: 'Procedural foundation, explicit memory management' },
  { from: 'C', to: 'V', note: 'C-like syntax, native compilation, C interop' },
  { from: 'C', to: 'Ada', note: 'Procedural structure, low-level access, systems programming' },
  { from: 'C', to: 'OPascal', note: 'Procedural foundation, pointers, compiled language' },
  { from: 'Cpp', to: 'D', note: 'Syntax, templates/generics, RAII, operator overloading' },
  { from: 'Cpp', to: 'Java', note: 'OOP syntax (classes, inheritance), static typing' },
  { from: 'Cpp', to: 'Cs', note: 'Syntax, static typing, operator overloading, generics' },
  { from: 'Cpp', to: 'Rust', note: 'Zero-cost abstractions, RAII, move semantics, templates → generics' },
  { from: 'Cpp', to: 'Carbon', note: 'Design goal: C++ successor with full interop' },

  // ── ML / FP Line ──
  { from: 'Scheme', to: 'Haskell', note: 'Functional core concepts, closures, lambda calculus' },
  { from: 'OCaml', to: 'Fsharp', note: 'Direct successor; syntax, pattern matching, type inference, ADTs' },
  { from: 'OCaml', to: 'Rust', note: 'Pattern matching, algebraic data types, type inference' },
  { from: 'OCaml', to: 'Scala', note: 'Pattern matching, type inference, functional data structures' },
  { from: 'Haskell', to: 'Elm', note: 'Pure functionality, ADTs, type classes, Elm Architecture ≈ monads' },
  { from: 'Haskell', to: 'PS', note: 'Type classes, monads, type inference, purity' },
  { from: 'Haskell', to: 'Idris', note: 'Type classes, lazy evaluation, dependent types as extension' },
  { from: 'Haskell', to: 'Rust', note: 'Traits (≈ type classes), pattern matching, algebraic data types' },
  { from: 'Haskell', to: 'Koka', note: 'Effect system, type classes, algebraic effects' },
  { from: 'Haskell', to: 'Scala', note: 'Higher-kinded types, monads, type classes (via implicits)' },
  { from: 'Haskell', to: 'Lean', note: 'Type classes, monads, dependent types, tactic system' },
  { from: 'Haskell', to: 'Gleam', note: 'Immutability, pattern matching, pipe operator' },
  { from: 'Haskell', to: 'Roc', note: 'Purity, ADTs, type inference, no side effects in type system' },
  { from: 'Idris', to: 'Lean', note: 'Dependent types, tactic-based proofs, total programming' },
  { from: 'Elm', to: 'Roc', note: 'Elm Architecture, simple error messages, no exceptions' },

  // ── OOP Line ──
  { from: 'Eiffel', to: 'Java', note: 'Interfaces, garbage collection, design by contract (assertions)' },
  { from: 'Java', to: 'Cs', note: 'VM architecture, type system, syntax, garbage collection' },
  { from: 'Java', to: 'Groovy', note: 'JVM platform, syntax, OOP model, dynamic extension' },
  { from: 'Java', to: 'Scala', note: 'JVM platform, type system, interop, OOP foundation' },
  { from: 'Java', to: 'Kotlin', note: 'JVM platform, syntax simplification, null safety, interop' },
  { from: 'Java', to: 'Dart', note: 'Class-based OOP, static typing, syntax' },
  { from: 'Java', to: 'Haxe', note: 'Class-based OOP, static typing, generics' },
  { from: 'Cs', to: 'TS', note: 'Static type system on dynamic platform, generics, async/await' },
  { from: 'Cs', to: 'Dart', note: 'Async/await, generics, nullable types' },
  { from: 'Cs', to: 'Kotlin', note: 'Properties, extension functions, null safety, async/await' },

  // ── Scripting Line ──
  { from: 'Perl', to: 'Python', note: 'Regular expressions, string processing, scripting culture' },
  { from: 'Perl', to: 'Ruby', note: 'Regex integration, sigils, scripting idioms, "more than one way"' },
  { from: 'Perl', to: 'PHP', note: 'CGI scripting, string interpolation, regex, $-variables' },
  { from: 'Python', to: 'Ruby', note: 'Readable syntax, iterators, dynamic typing' },
  { from: 'Python', to: 'Nim', note: 'Indentation-based syntax, readability, scripting comfort' },
  { from: 'Python', to: 'Mojo', note: 'Design goal: Python superset with native performance' },
  { from: 'Ruby', to: 'Crystal', note: 'Syntax (almost identical), OOP model, blocks/closures' },
  { from: 'Ruby', to: 'Elixir', note: 'Developer-friendly syntax, blocks, metaprogramming, DSLs' },

  // ── Erlang Family ──
  { from: 'Erlang', to: 'Elixir', note: 'BEAM VM, actor model, fault tolerance, hot code reloading' },
  { from: 'Erlang', to: 'Gleam', note: 'BEAM VM, actor model, concurrency, fault tolerance' },
  { from: 'Erlang', to: 'Roc', note: 'Platform concept, process model, fault tolerance' },

  // ── Prolog Family ──
  { from: 'Prolog', to: 'Mercury', note: 'Logic programming, unification, backtracking, declarativity' },
  { from: 'Prolog', to: 'Erlang', note: 'Pattern matching, declarative style, Ericsson\'s Prolog heritage' },

  // ── JavaScript ──
  { from: 'JS', to: 'TS', note: 'Superset; runtime behavior, ecosystem, dynamic idioms' },

  // ── Swift ──
  { from: 'ObjC', to: 'Swift', note: 'Apple ecosystem, Cocoa interop, reference counting (ARC)' },
  { from: 'Rust', to: 'Swift', note: 'Ownership concepts, enums with data, pattern matching' },

  // ── MATLAB Line ──
  { from: 'MATLAB', to: 'Octave', note: 'Compatible reimplementation; syntax, matrix operations' },
  { from: 'MATLAB', to: 'Julia', note: 'Numerical syntax, matrix literals, scientific computing' },
  { from: 'R', to: 'Julia', note: 'Statistics idioms, data frames, multiple dispatch for data analysis' },
  { from: 'Scheme', to: 'Julia', note: 'Homoiconicity, macro system, metaprogramming' },

  // ── Others ──
  { from: 'Fsharp', to: 'Haxe', note: 'Pattern matching, algebraic data types, type inference' },
  { from: 'Go', to: 'V', note: 'Simple syntax, fast compilation, goroutines → coroutines' },
  { from: 'Go', to: 'Odin', note: 'Simplicity as design goal, explicit error handling' },
  { from: 'Rust', to: 'Carbon', note: 'Ownership ideas, safety guarantees, generics' },
  { from: 'Rust', to: 'Zig', note: 'Compile-time computation (comptime), safety focus, no GC' },

  // ── VB.NET (shared platform) ──
  { from: 'Cs', to: 'VB', dashed: true, note: 'Shared .NET platform, CLR, BCL, mutual feature parity' },
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
    return 'graph LR\n    empty["No domain selected"]';
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
              <span style={{ color: '#1a7a2e', fontWeight: 600 }}>← influenced by: </span>
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
              <span style={{ color: '#b71c1c', fontWeight: 600 }}>→ influences: </span>
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
              No visible connections
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
          Loading graph…
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
