import React, {
  createContext, useContext, useState, useCallback, useRef, useEffect, ReactNode,
} from 'react';
import { useLocation } from '@docusaurus/router';

export interface ColorFilters {
  green: boolean;
  yellow: boolean;
  orange: boolean;
  red: boolean;
}

const ALL_COLORS: (keyof ColorFilters)[] = ['green', 'yellow', 'orange', 'red'];

interface LanguageFilterContextType {
  selectedLanguages: string[];
  setSelectedLanguages: React.Dispatch<React.SetStateAction<string[]>>;
  colorFilters: ColorFilters;
  setColorFilters: (filters: ColorFilters) => void;
  tabsOnPage: boolean;
  filterOnPage: boolean;
  registerTabs: () => void;
  unregisterTabs: () => void;
  registerFilter: () => void;
  unregisterFilter: () => void;
}

const LanguageFilterContext = createContext<LanguageFilterContextType | undefined>(undefined);

const DEFAULT_COLOR_FILTERS: ColorFilters = {
  green: true,
  yellow: true,
  orange: true,
  red: true,
};

// ---------------------------------------------------------------------------
// Hilfsfunktionen: URL ↔ State
// ---------------------------------------------------------------------------

/** Schreibt die aktuellen Filter-Werte als Query-Parameter in die URL. */
function writeFiltersToURL(languages: string[], filters: ColorFilters): void {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams();

  // languages – weglassen wenn leer (= alle)
  if (languages.length > 0) {
    params.set('languages', languages.join(','));
  }

  // tabs – weglassen wenn alle aktiv
  const activeColors = ALL_COLORS.filter(c => filters[c]);
  if (activeColors.length < 4) {
    params.set('tabs', activeColors.join(','));
  }

  const search = params.toString();
  const hash = window.location.hash;
  const newURL = `${window.location.pathname}${search ? '?' + search : ''}${hash}`;
  window.history.replaceState(window.history.state, '', newURL);
}

/** Liest Filter-Werte aus den aktuellen URL-Parametern. */
function readFiltersFromURL(): {
  languages: string[] | null;
  filters: ColorFilters | null;
} {
  if (typeof window === 'undefined') return { languages: null, filters: null };

  const params = new URLSearchParams(window.location.search);

  const langParam = params.get('languages');
  const languages = langParam
    ? langParam.split(',').filter(Boolean).sort()
    : null;

  const tabsParam = params.get('tabs');
  let filters: ColorFilters | null = null;
  if (tabsParam) {
    const active = tabsParam.split(',').filter(Boolean);
    filters = {
      green: active.includes('green'),
      yellow: active.includes('yellow'),
      orange: active.includes('orange'),
      red: active.includes('red'),
    };
  }

  return { languages, filters };
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function LanguageFilterProvider({ children }: { children: ReactNode }) {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [colorFilters, setColorFilters] = useState<ColorFilters>(DEFAULT_COLOR_FILTERS);
  const [tabsOnPage, setTabsOnPage] = useState(false);
  const tabsCountRef = useRef(0);
  const [filterOnPage, setFilterOnPage] = useState(false);
  const filterCountRef = useRef(0);

  // Ref hält immer den aktuellen State – damit writeToURL() stabil bleiben kann.
  const stateRef = useRef({ selectedLanguages, colorFilters });
  stateRef.current = { selectedLanguages, colorFilters };

  // Ob die initiale URL-Lesung abgeschlossen ist (verhindert, dass der erste
  // Render-Zyklus die URL-Parameter überschreibt).
  const initializedRef = useRef(false);

  const location = useLocation();

  // Stabile Schreib-Funktion (liest aktuellen State über Ref)
  const writeToURL = useCallback(() => {
    writeFiltersToURL(stateRef.current.selectedLanguages, stateRef.current.colorFilters);
  }, []);

  // ── 1. URL → State (einmalig beim Mount) ──────────────────────────────
  useEffect(() => {
    const { languages, filters } = readFiltersFromURL();
    if (languages) setSelectedLanguages(languages);
    if (filters) setColorFilters(filters);

    // Erst nach dem nächsten Frame URL-Schreibzugriffe erlauben,
    // damit der initiale Render nicht die URL leert.
    requestAnimationFrame(() => {
      initializedRef.current = true;
    });
  }, []);

  // ── 2. State → URL (bei jeder Filter-Änderung) ────────────────────────
  useEffect(() => {
    if (!initializedRef.current) return;
    writeToURL();
  }, [selectedLanguages, colorFilters, writeToURL]);

  // ── 3. URL nach Navigation / Hash-Klick wiederherstellen ──────────────
  useEffect(() => {
    if (!initializedRef.current) return;
    // Kleiner Delay, damit Docusaurus die URL erst setzen kann.
    const frame = requestAnimationFrame(() => writeToURL());
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, writeToURL]);

  // ── Tabs-Registrierung ─────────────────────────────────────────────────
  const registerTabs = useCallback(() => {
    tabsCountRef.current += 1;
    setTabsOnPage(true);
  }, []);

  const unregisterTabs = useCallback(() => {
    tabsCountRef.current -= 1;
    if (tabsCountRef.current <= 0) {
      tabsCountRef.current = 0;
      setTabsOnPage(false);
    }
  }, []);

  // ── Filter-Registrierung (Sprachfilter ohne Legende) ────────────────────
  const registerFilter = useCallback(() => {
    filterCountRef.current += 1;
    setFilterOnPage(true);
  }, []);

  const unregisterFilter = useCallback(() => {
    filterCountRef.current -= 1;
    if (filterCountRef.current <= 0) {
      filterCountRef.current = 0;
      setFilterOnPage(false);
    }
  }, []);

  return (
    <LanguageFilterContext.Provider value={{
      selectedLanguages, setSelectedLanguages,
      colorFilters, setColorFilters,
      tabsOnPage, filterOnPage,
      registerTabs, unregisterTabs,
      registerFilter, unregisterFilter,
    }}>
      {children}
    </LanguageFilterContext.Provider>
  );
}

export function useLanguageFilter() {
  const context = useContext(LanguageFilterContext);
  if (context === undefined) {
    throw new Error('useLanguageFilter must be used within a LanguageFilterProvider');
  }
  return context;
}
