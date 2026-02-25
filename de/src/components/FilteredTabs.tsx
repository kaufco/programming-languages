import React, { useState, useEffect, useMemo, ReactNode, isValidElement } from 'react';
import { useLanguageFilter } from '@site/src/contexts/LanguageFilterContext';
import TabsComponent from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './FilteredTabs.module.css';

// Mapping von Tab-Werten zu Sprachnamen
const TAB_TO_LANGUAGE: Record<string, string> = {
  'ada': 'Ada',
  'c': 'C',
  'csharp': 'C#',
  'cpp': 'C++',
  'carbon': 'Carbon',
  'clojure': 'Clojure',
  'common-lisp': 'Common Lisp',
  'crystal': 'Crystal',
  'd': 'D',
  'dart': 'Dart',
  'eiffel': 'Eiffel',
  'elixir': 'Elixir',
  'elm': 'Elm',
  'erlang': 'Erlang',
  'fsharp': 'F#',
  'fortran': 'Fortran',
  'gleam': 'Gleam',
  'go': 'Go',
  'groovy': 'Groovy',
  'haskell': 'Haskell',
  'haxe': 'Haxe',
  'idris': 'Idris',
  'java': 'Java',
  'javascript': 'JavaScript',
  'julia': 'Julia',
  'koka': 'Koka',
  'kotlin': 'Kotlin',
  'lean4': 'Lean 4',
  'lua': 'Lua',
  'matlab': 'MATLAB',
  'mercury': 'Mercury',
  'mojo': 'Mojo',
  'nim': 'Nim',
  'objective-c': 'Objective-C',
  'object-pascal': 'Object Pascal',
  'ocaml': 'OCaml',
  'octave': 'Octave',
  'odin': 'Odin',
  'perl': 'Perl',
  'php': 'PHP',
  'prolog': 'Prolog',
  'purescript': 'PureScript',
  'python': 'Python',
  'r': 'R',
  'racket': 'Racket',
  'roc': 'Roc',
  'ruby': 'Ruby',
  'rust': 'Rust',
  'scala': 'Scala',
  'scheme': 'Scheme',
  'swift': 'Swift',
  'typescript': 'TypeScript',
  'vbnet': 'VB.NET',
  'v': 'V',
  'wolfram-language': 'Wolfram Language',
  'zig': 'Zig',
};

// Reverse mapping: Sprachname zu Tab-Wert
const LANGUAGE_TO_TAB: Record<string, string> = {};
Object.entries(TAB_TO_LANGUAGE).forEach(([tab, lang]) => {
  if (!LANGUAGE_TO_TAB[lang]) {
    LANGUAGE_TO_TAB[lang] = tab;
  }
});

// Alle Sprachen (für "keine ausgewählt = alle" Verhalten)
const ALL_LANGUAGES = Array.from(new Set(Object.values(TAB_TO_LANGUAGE))).sort();

// Tab-Farb-Status
type TabColorStatus = 'green' | 'yellow' | 'orange' | 'red';

interface FilteredTabsProps {
  children: ReactNode;
  availableTabs?: string[];  // Grüne Tabs: voll unterstützt
  yellowTabs?: string[];     // Gelbe Tabs: eingeschränkt unterstützt
  orangeTabs?: string[];     // Orange Tabs: Workaround
}

function FilteredTabs({ children, availableTabs, yellowTabs, orangeTabs }: FilteredTabsProps) {
  const { selectedLanguages, colorFilters, registerTabs, unregisterTabs } = useLanguageFilter();

  // Registriere diese Tabs-Instanz beim Context
  useEffect(() => {
    registerTabs();
    return () => unregisterTabs();
  }, [registerTabs, unregisterTabs]);

  const greenTabs = useMemo(() => availableTabs || [], [availableTabs]);
  const yellowTabsList = useMemo(() => yellowTabs || [], [yellowTabs]);
  const orangeTabsList = useMemo(() => orangeTabs || [], [orangeTabs]);

  // Bestimme, welche Sprachen angezeigt werden sollen
  const languagesToShow = useMemo(() => {
    if (selectedLanguages.length === 0) {
      return ALL_LANGUAGES;
    }
    return selectedLanguages.sort();
  }, [selectedLanguages]);

  // Hilfsfunktion: Prüfe ob Tab in einer Liste ist
  const isTabInList = (tab: string, list: string[]): boolean => {
    return list.includes(tab);
  };

  // Bestimme Farb-Status für jeden Tab
  const tabStatus = useMemo(() => {
    const status: Record<string, TabColorStatus> = {};
    const uniqueLanguages = Array.from(new Set(languagesToShow));
    uniqueLanguages.forEach(lang => {
      const tab = LANGUAGE_TO_TAB[lang] || lang.toLowerCase().replace(/\s+/g, '-');
      if (isTabInList(tab, greenTabs)) {
        status[tab] = 'green';
      } else if (isTabInList(tab, yellowTabsList)) {
        status[tab] = 'yellow';
      } else if (isTabInList(tab, orangeTabsList)) {
        status[tab] = 'orange';
      } else {
        status[tab] = 'red';
      }
    });
    return status;
  }, [languagesToShow, greenTabs, yellowTabsList, orangeTabsList]);

  // Alle Tabs, gefiltert nach aktiven Farbfiltern
  const allTabs = useMemo(() => {
    const uniqueLanguages = Array.from(new Set(languagesToShow));
    const sortedLanguages = [...uniqueLanguages].sort();
    let tabs = sortedLanguages
      .map(lang => LANGUAGE_TO_TAB[lang] || lang.toLowerCase().replace(/\s+/g, '-'));
    tabs = Array.from(new Set(tabs));

    // Nur Tabs anzeigen, deren Farbe im Filter aktiviert ist
    tabs = tabs.filter(tab => {
      const status = tabStatus[tab];
      return status ? colorFilters[status] : false;
    });

    return tabs;
  }, [languagesToShow, colorFilters, tabStatus]);

  // Klickbare Tabs (alles außer rot)
  const clickableTabsList = useMemo(() => {
    return allTabs.filter(tab => {
      const status = tabStatus[tab];
      return status === 'green' || status === 'yellow' || status === 'orange';
    });
  }, [allTabs, tabStatus]);

  // State für aktiven Tab
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Setze aktiven Tab beim ersten Render oder wenn sich die Tabs ändern
  useEffect(() => {
    if (clickableTabsList.length > 0) {
      if (!activeTab || !clickableTabsList.includes(activeTab)) {
        setActiveTab(clickableTabsList[0]);
      }
    } else {
      setActiveTab(null);
    }
  }, [clickableTabsList, activeTab]);

  // Finde TabItem-Inhalt für aktiven Tab
  const activeTabContent = useMemo(() => {
    if (!activeTab) return null;

    const childrenArray = React.Children.toArray(children);
    for (const child of childrenArray) {
      if (isValidElement(child) && child.props?.value === activeTab) {
        return child;
      }
    }
    return null;
  }, [activeTab, children]);

  if (allTabs.length === 0) {
    return null;
  }

  // CSS-Klasse basierend auf Tab-Farb-Status
  const getTabColorClass = (status: TabColorStatus): string => {
    switch (status) {
      case 'green': return styles.tabGreen;
      case 'yellow': return styles.tabYellow;
      case 'orange': return styles.tabOrange;
      case 'red': return styles.tabRed;
    }
  };

  // Active-CSS-Klasse basierend auf Tab-Farb-Status
  const getTabActiveClass = (status: TabColorStatus): string => {
    switch (status) {
      case 'green': return styles.tabActiveGreen;
      case 'yellow': return styles.tabActiveYellow;
      case 'orange': return styles.tabActiveOrange;
      default: return '';
    }
  };

  // Wenn nur rote Tabs sichtbar sind, zeige alle als disabled
  if (clickableTabsList.length === 0) {
    return (
      <div className={styles.filteredTabs}>
        <div className={styles.tabList}>
          {allTabs.map(tab => {
            const lang = TAB_TO_LANGUAGE[tab] || tab;
            return (
              <button
                key={tab}
                className={`${styles.tab} ${styles.tabRed}`}
                disabled
              >
                {lang}
              </button>
            );
          })}
        </div>
        <div className={styles.noContentMessage}>
          Keine ausgewählten Sprachen verfügbar für dieses Feature.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.filteredTabs}>
      <div className={styles.tabList}>
        {allTabs.map(tab => {
          const lang = TAB_TO_LANGUAGE[tab] || tab;
          const status = tabStatus[tab] || 'red';
          const isClickable = status !== 'red';
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              className={`${styles.tab} ${getTabColorClass(status)} ${isActive ? `${styles.tabActive} ${getTabActiveClass(status)}` : ''}`}
              onClick={() => isClickable && setActiveTab(tab)}
              disabled={!isClickable}
              aria-selected={isActive}
            >
              {lang}
            </button>
          );
        })}
      </div>
      {activeTabContent && clickableTabsList.length > 0 && (
        <div className={styles.tabContent}>
          {isValidElement(activeTabContent) ? activeTabContent.props.children : null}
        </div>
      )}
    </div>
  );
}

export default FilteredTabs;
export { FilteredTabs };
export const Tabs = FilteredTabs;
