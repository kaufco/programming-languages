import React, { useState, useRef, useEffect } from 'react';
import styles from './LanguageFilter.module.css';
import { useLanguageFilter } from '@site/src/contexts/LanguageFilterContext';

// Language list from LANGUAGES.md
const ALL_LANGUAGES = [
  'Ada',
  'C',
  'C#',
  'C++',
  'Carbon',
  'Clojure',
  'Common Lisp',
  'Crystal',
  'D',
  'Dart',
  'Eiffel',
  'Elixir',
  'Elm',
  'Erlang',
  'F#',
  'Fortran',
  'Gleam',
  'Go',
  'Groovy',
  'Haskell',
  'Haxe',
  'Idris',
  'Java',
  'JavaScript',
  'Julia',
  'Koka',
  'Kotlin',
  'Lean 4',
  'Lua',
  'MATLAB',
  'Mercury',
  'Mojo',
  'Nim',
  'Objective-C',
  'Object Pascal',
  'OCaml',
  'Octave',
  'Odin',
  'Perl',
  'PHP',
  'Prolog',
  'PureScript',
  'Python',
  'R',
  'Racket',
  'Roc',
  'Ruby',
  'Rust',
  'Scala',
  'Scheme',
  'Swift',
  'TypeScript',
  'VB.NET',
  'V',
  'Wolfram Language',
  'Zig',
].sort();

const LANGUAGES_PER_COLUMN = 10;

export default function LanguageFilter() {
  const { selectedLanguages, setSelectedLanguages, tabsOnPage, filterOnPage } = useLanguageFilter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Spalten berechnen
  const columns: string[][] = [];
  for (let i = 0; i < ALL_LANGUAGES.length; i += LANGUAGES_PER_COLUMN) {
    columns.push(ALL_LANGUAGES.slice(i, i + LANGUAGES_PER_COLUMN));
  }

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    // Escape key handler
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) => {
      if (prev.includes(language)) {
        return prev.filter((lang) => lang !== language).sort();
      } else {
        return [...prev, language].sort();
      }
    });
  };

  const selectAll = () => {
    setSelectedLanguages([...ALL_LANGUAGES].sort());
  };

  const clearSelection = () => {
    setSelectedLanguages([]);
  };

  const removeLanguage = (language: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedLanguages((prev) => prev.filter((lang) => lang !== language).sort());
  };

  const sortedSelected = [...selectedLanguages].sort();

  if (!tabsOnPage && !filterOnPage) {
    return null;
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        className={styles.filterButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={styles.filterIcon}>🔍</span>
        <span className={styles.filterText}>Sprachen filtern</span>
        {sortedSelected.length > 0 && (
          <span className={styles.selectedCount}>({sortedSelected.length})</span>
        )}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className={styles.popover} ref={popoverRef}>
          <div className={styles.popoverHeader}>
            <button className={styles.actionButton} onClick={selectAll}>
              Alle auswählen
            </button>
            <button className={styles.actionButton} onClick={clearSelection}>
              Auswahl löschen
            </button>
          </div>
          <div className={styles.popoverContent}>
            {columns.map((column, colIndex) => (
              <div key={colIndex} className={styles.column}>
                {column.map((language) => (
                  <label key={language} className={styles.languageOption}>
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(language)}
                      onChange={() => toggleLanguage(language)}
                      className={styles.checkbox}
                    />
                    <span className={styles.languageName}>{language}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {sortedSelected.length > 0 && (
        <div className={styles.selectedLanguages}>
          {sortedSelected.map((language) => (
            <span key={language} className={styles.selectedTag}>
              {language}
              <button
                className={styles.removeButton}
                onClick={(e) => removeLanguage(language, e)}
                aria-label={`${language} entfernen`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
