import React from 'react';
import {
  useDomainFilter,
  ALL_DOMAINS,
  DOMAIN_META,
} from '@site/src/contexts/DomainFilterContext';
import styles from './DomainFilter.module.css';

export default function DomainFilter() {
  const { filters, toggleDomain, graphOnPage } = useDomainFilter();

  if (!graphOnPage) {
    return null;
  }

  return (
    <div className={styles.legend}>
      <div className={styles.legendTitle}>Domains</div>
      {ALL_DOMAINS.map((domain) => {
        const meta = DOMAIN_META[domain];
        return (
          <label key={domain} className={styles.legendEntry}>
            <input
              type="checkbox"
              checked={filters[domain]}
              onChange={() => toggleDomain(domain)}
              className={styles.checkbox}
            />
            <span
              className={styles.colorSwatch}
              style={{ backgroundColor: meta.fill, borderColor: meta.stroke }}
            />
            <span className={styles.label}>{meta.label}</span>
          </label>
        );
      })}
    </div>
  );
}
