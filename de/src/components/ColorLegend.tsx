import React from 'react';
import { useLanguageFilter, type ColorFilters } from '@site/src/contexts/LanguageFilterContext';
import styles from './ColorLegend.module.css';

const LEGEND_ENTRIES: { key: keyof ColorFilters; swatchClass: string; label: string }[] = [
  { key: 'green', swatchClass: styles.swatchGreen, label: 'Natives Sprach-Feature' },
  { key: 'yellow', swatchClass: styles.swatchYellow, label: 'Nur eingeschränkt / per API' },
  { key: 'orange', swatchClass: styles.swatchOrange, label: 'Nur Workaround' },
  { key: 'red', swatchClass: styles.swatchRed, label: 'Nicht unterstützt' },
];

export default function ColorLegend() {
  const { colorFilters, setColorFilters, tabsOnPage } = useLanguageFilter();

  const toggleColor = (color: keyof ColorFilters) => {
    setColorFilters({ ...colorFilters, [color]: !colorFilters[color] });
  };

  if (!tabsOnPage) {
    return null;
  }

  return (
    <div className={styles.legend}>
      <div className={styles.legendTitle}>Tab-Filter</div>
      {LEGEND_ENTRIES.map(({ key, swatchClass, label }) => (
        <label key={key} className={styles.legendEntry}>
          <input
            type="checkbox"
            checked={colorFilters[key]}
            onChange={() => toggleColor(key)}
            className={styles.checkbox}
          />
          <span className={`${styles.colorSwatch} ${swatchClass}`} />
          <span className={styles.label}>{label}</span>
        </label>
      ))}
    </div>
  );
}
