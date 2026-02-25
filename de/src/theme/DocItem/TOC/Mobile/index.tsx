/**
 * Swizzled DocItemTOCMobile.
 *
 * ColorLegend und DomainFilter werden oberhalb des klappbaren TOC
 * angezeigt, damit beide auch auf Mobilgeräten erreichbar sind
 * (der Desktop-Sidebar ist dort nicht sichtbar).
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TOCCollapsible from '@theme/TOCCollapsible';
import ColorLegend from '@site/src/components/ColorLegend';
import DomainFilter from '@site/src/components/DomainFilter';

import styles from './styles.module.css';

export default function DocItemTOCMobile(): ReactNode {
  const {toc, frontMatter} = useDoc();
  return (
    <div className={clsx(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}>
      <ColorLegend />
      <DomainFilter />
      <TOCCollapsible
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
      />
    </div>
  );
}
