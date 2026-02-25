import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import type {Props} from '@theme/DocItem/Layout';
import {useDomainFilter} from '@site/src/contexts/DomainFilterContext';
import {useLanguageFilter} from '@site/src/contexts/LanguageFilterContext';

import styles from './styles.module.css';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports.
 *
 * Erweitert: Sidebar wird auch angezeigt, wenn der Einfluss-Graph oder
 * FilteredTabs auf der Seite sind (für DomainFilter / ColorLegend).
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const {graphOnPage} = useDomainFilter();
  const {tabsOnPage} = useLanguageFilter();

  const hidden = frontMatter.hide_table_of_contents;
  const hasSidebarContent = toc.length > 0 || graphOnPage || tabsOnPage;
  const canRender = !hidden && hasSidebarContent;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({children}: Props): ReactNode {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
