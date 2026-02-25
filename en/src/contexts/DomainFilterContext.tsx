import React, {
  createContext, useContext, useState, useCallback, useRef, ReactNode,
} from 'react';

/* ── Shared Domain types & metadata ─────────────────────────────────────── */

export type Domain = 'native' | 'oo' | 'fp' | 'special';
export type DomainFilters = Record<Domain, boolean>;

export interface DomainMeta {
  label: string;
  stroke: string;
  fill: string;
  text: string;
}

export const DOMAIN_META: Record<Domain, DomainMeta> = {
  native:  { label: 'Native Programming',     stroke: '#1565c0', fill: '#e3f2fd', text: '#0d47a1' },
  oo:      { label: 'OO (Managed Runtime)',       stroke: '#2e7d32', fill: '#e8f5e9', text: '#1b5e20' },
  fp:      { label: 'Functional Programming', stroke: '#e65100', fill: '#fff3e0', text: '#bf360c' },
  special: { label: 'Specialized Languages',            stroke: '#6a1b9a', fill: '#f3e5f5', text: '#4a148c' },
};

export const ALL_DOMAINS: Domain[] = ['native', 'oo', 'fp', 'special'];

const DEFAULT_FILTERS: DomainFilters = {
  native: true, oo: true, fp: true, special: true,
};

/* ── Context ────────────────────────────────────────────────────────────── */

interface DomainFilterContextType {
  filters: DomainFilters;
  toggleDomain: (d: Domain) => void;
  graphOnPage: boolean;
  registerGraph: () => void;
  unregisterGraph: () => void;
}

const DomainFilterContext = createContext<DomainFilterContextType | undefined>(undefined);

/* ── Provider ───────────────────────────────────────────────────────────── */

export function DomainFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<DomainFilters>(DEFAULT_FILTERS);
  const [graphOnPage, setGraphOnPage] = useState(false);
  const graphCountRef = useRef(0);

  const toggleDomain = useCallback((d: Domain) => {
    setFilters((prev) => ({ ...prev, [d]: !prev[d] }));
  }, []);

  const registerGraph = useCallback(() => {
    graphCountRef.current += 1;
    setGraphOnPage(true);
  }, []);

  const unregisterGraph = useCallback(() => {
    graphCountRef.current -= 1;
    if (graphCountRef.current <= 0) {
      graphCountRef.current = 0;
      setGraphOnPage(false);
    }
  }, []);

  return (
    <DomainFilterContext.Provider value={{
      filters, toggleDomain,
      graphOnPage, registerGraph, unregisterGraph,
    }}>
      {children}
    </DomainFilterContext.Provider>
  );
}

/* ── Hook ───────────────────────────────────────────────────────────────── */

export function useDomainFilter() {
  const context = useContext(DomainFilterContext);
  if (context === undefined) {
    throw new Error('useDomainFilter must be used within a DomainFilterProvider');
  }
  return context;
}
