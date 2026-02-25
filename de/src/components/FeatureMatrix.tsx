import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLanguageFilter } from '@site/src/contexts/LanguageFilterContext';
import matrixData from '@site/src/data/feature-matrix-data.json';
import styles from './FeatureMatrix.module.css';

/* ================================================================
   TYPEN
   ================================================================ */

interface MatrixEntry {
  level: 1 | 2 | 3;
  title: string;
  link: string;
  languages: Record<string, number | null>;
}

const data: MatrixEntry[] = matrixData as MatrixEntry[];

/* ================================================================
   FARB-MAPPING
   ================================================================ */

const COLOR_CLASSES: Record<number, string> = {
  3: styles.cellGreen,
  2: styles.cellYellow,
  1: styles.cellOrange,
  0: styles.cellRed,
};

const COLOR_LABELS: Record<number, string> = {
  3: 'Nativ unterstützt',
  2: 'Eingeschränkt / per API',
  1: 'Nur Workaround',
  0: 'Nicht unterstützt',
};

/* ================================================================
   ALLE SPRACHEN AUS DEN DATEN EXTRAHIEREN
   ================================================================ */

const ALL_DATA_LANGUAGES: string[] = (() => {
  const langs = new Set<string>();
  for (const entry of data) {
    for (const key of Object.keys(entry.languages)) {
      langs.add(key);
    }
  }
  return Array.from(langs).sort();
})();

/* ================================================================
   KOMPONENTE
   ================================================================ */

function FeatureMatrixInner() {
  const { selectedLanguages, registerFilter, unregisterFilter } = useLanguageFilter();

  useEffect(() => {
    registerFilter();
    return () => unregisterFilter();
  }, [registerFilter, unregisterFilter]);

  // Alle expandierbaren Indizes vorab berechnen (für Startzustand)
  const expandableIndices = useMemo(() => {
    const set = new Set<number>();
    data.forEach((entry, i) => {
      if (entry.level < 3) set.add(i);
    });
    return set;
  }, []);

  const [expanded, setExpanded] = useState<Set<number>>(() => new Set(expandableIndices));

  /* ── Spalten-Hover per DOM-Manipulation (kein React-Rerender) ── */
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const hoveredColRef = useRef<string | null>(null);

  useEffect(() => {
    const tbody = tbodyRef.current;
    if (!tbody) return;

    const highlight = (lang: string | null) => {
      const prev = hoveredColRef.current;
      if (prev === lang) return;

      if (prev) {
        tbody.querySelectorAll(`td[data-lang="${CSS.escape(prev)}"]`).forEach((el) => {
          el.classList.remove(styles.colHover);
        });
      }
      hoveredColRef.current = lang;
      if (lang) {
        tbody.querySelectorAll(`td[data-lang="${CSS.escape(lang)}"]`).forEach((el) => {
          el.classList.add(styles.colHover);
        });
      }
    };

    const onOver = (e: MouseEvent) => {
      const td = (e.target as HTMLElement).closest('td[data-lang]') as HTMLElement | null;
      highlight(td?.dataset.lang ?? null);
    };

    const onLeave = () => highlight(null);

    tbody.addEventListener('mouseover', onOver);
    tbody.addEventListener('mouseleave', onLeave);
    return () => {
      tbody.removeEventListener('mouseover', onOver);
      tbody.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const isAllExpanded = useMemo(
    () => expandableIndices.size > 0 && [...expandableIndices].every((i) => expanded.has(i)),
    [expanded, expandableIndices],
  );

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpanded(new Set());
    } else {
      setExpanded(new Set(expandableIndices));
    }
  };

  const visibleRows = useMemo(() => {
    const rows: { index: number; entry: MatrixEntry }[] = [];
    let currentL1 = -1;
    let currentL2 = -1;

    for (let i = 0; i < data.length; i++) {
      const entry = data[i];
      if (entry.level === 1) {
        currentL1 = i;
        currentL2 = -1;
        rows.push({ index: i, entry });
      } else if (entry.level === 2) {
        currentL2 = i;
        if (expanded.has(currentL1)) {
          rows.push({ index: i, entry });
        }
      } else if (entry.level === 3) {
        if (expanded.has(currentL1) && expanded.has(currentL2)) {
          rows.push({ index: i, entry });
        }
      }
    }

    return rows;
  }, [expanded]);

  // Keine Auswahl = alle Sprachen aus den Daten anzeigen
  const displayLanguages = useMemo(
    () => selectedLanguages.length > 0
      ? [...selectedLanguages].sort()
      : ALL_DATA_LANGUAGES,
    [selectedLanguages],
  );

  return (
    <div className={styles.scrollArea}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.featureHeader}>
              <div className={styles.featureHeaderInner}>
                <span>Feature</span>
                <button
                  type="button"
                  className={`${styles.headerToggle} ${isAllExpanded ? styles.headerToggleExpanded : ''}`}
                  onClick={toggleAll}
                  title={isAllExpanded ? 'Alle zuklappen' : 'Alle aufklappen'}
                  aria-label={isAllExpanded ? 'Alle zuklappen' : 'Alle aufklappen'}
                >
                  <span className={styles.headerToggleIcon} />
                </button>
              </div>
            </th>
            {displayLanguages.map((lang) => (
              <th key={lang} className={styles.langHeader} title={lang}>
                {lang}
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={tbodyRef}>
          {visibleRows.map(({ index, entry }) => {
            const isExpandable = entry.level < 3;
            const isExpanded = expanded.has(index);

            const levelClass =
              entry.level === 1
                ? styles.level1
                : entry.level === 2
                  ? styles.level2
                  : styles.level3;

            return (
              <tr key={index} className={levelClass}>
                <td className={styles.featureCell} title={entry.title}>
                  {isExpandable ? (
                    <button
                      type="button"
                      className={`${styles.toggle} ${isExpanded ? styles.toggleExpanded : ''}`}
                      onClick={() => toggleExpanded(index)}
                      aria-label={isExpanded ? 'Zuklappen' : 'Aufklappen'}
                    >
                      <span className={styles.toggleIcon} />
                    </button>
                  ) : (
                    <span className={styles.toggleSpacer} />
                  )}
                  <Link className={styles.featureLink} to={entry.link}>
                    {entry.title}
                  </Link>
                </td>

                {displayLanguages.map((lang) => {
                  // Level 1 + 2: no colors
                  if (entry.level < 3) {
                    return <td key={lang} className={styles.colorCell} data-lang={lang} />;
                  }

                  // Level 2 + 3: read directly from JSON (aggregation is pre-computed)
                  const value = entry.languages[lang] ?? null;

                  const cellClass =
                    value != null
                      ? COLOR_CLASSES[value] ?? styles.cellNull
                      : styles.cellNull;

                  const title =
                    value != null
                      ? COLOR_LABELS[value] ?? ''
                      : 'Noch nicht dokumentiert';

                  return (
                    <td
                      key={lang}
                      className={`${styles.colorCell} ${cellClass}`}
                      title={`${lang}: ${title}`}
                      data-lang={lang}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ================================================================
   EXPORT MIT BROWSERONLY-WRAPPER
   ================================================================ */

export default function FeatureMatrix(): React.ReactNode {
  return (
    <BrowserOnly fallback={
      <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--ifm-color-emphasis-500)' }}>
        Matrix wird geladen…
      </div>
    }>
      {() => <FeatureMatrixInner />}
    </BrowserOnly>
  );
}
