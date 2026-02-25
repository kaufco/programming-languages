/**
 * Swizzled BackToTopButton: zeigt den Button ab 300px Scroll-Tiefe,
 * unabhängig von der Scroll-Richtung (Original zeigt ihn nur beim Hochscrollen).
 */
import React, { useState, useEffect, useCallback, type ReactNode } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';

import styles from './styles.module.css';

const SCROLL_THRESHOLD = 300;

export default function BackToTopButton(): ReactNode {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShown(window.scrollY > SCROLL_THRESHOLD);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Einmal initial prüfen (z.B. bei Browser-Refresh mitten auf der Seite)
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      aria-label={translate({
        id: 'theme.BackToTopButton.buttonAriaLabel',
        message: 'Scroll back to top',
        description: 'The ARIA label for the back to top button',
      })}
      className={clsx(
        'clean-btn',
        ThemeClassNames.common.backToTopButton,
        styles.backToTopButton,
        shown && styles.backToTopButtonShow,
      )}
      type="button"
      onClick={scrollToTop}
    />
  );
}
