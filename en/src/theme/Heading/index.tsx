/**
 * Swizzled Heading-Komponente.
 *
 * Einzige Änderung gegenüber dem Original:
 * Beim Left-Click auf den #-Link werden die aktuellen Query-Parameter
 * (Sprachfilter / Farbfilter) in die Navigation übernommen.
 * Für Middle-Click und "Link kopieren" nutzt der Browser den nativen
 * href="#id", der relativ zur aktuellen URL aufgelöst wird und die
 * Query-Parameter automatisch beibehält.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useAnchorTargetClassName} from '@docusaurus/theme-common';
import {useHistory} from '@docusaurus/router';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import type {Props} from '@theme/Heading';

export default function Heading({as: As, id, ...props}: Props): ReactNode {
  const brokenLinks = useBrokenLinks();
  const anchorTargetClassName = useAnchorTargetClassName(id);
  const history = useHistory();

  // H1-Überschriften brauchen kein id (erscheinen nicht im TOC).
  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} />;
  }

  brokenLinks.collectAnchor(id);

  const anchorTitle = translate(
    {
      id: 'theme.common.headingLinkTitle',
      message: 'Direct link to {heading}',
      description: 'Title for link to heading',
    },
    {
      heading: typeof props.children === 'string' ? props.children : id,
    },
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Nur normaler Left-Click; Middle-Click / Ctrl-Click / Shift-Click
    // werden vom Browser nativ behandelt (href wird aufgelöst).
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();

    // history.push statt nativer Navigation, damit React Router den
    // Hash-Wechsel korrekt registriert UND die Query-Parameter erhalten bleiben.
    history.push({
      search: typeof window !== 'undefined' ? window.location.search : '',
      hash: `#${id}`,
    });
  };

  return (
    <As
      {...props}
      className={clsx('anchor', anchorTargetClassName, props.className)}
      id={id}>
      {props.children}
      <a
        className="hash-link"
        href={`#${id}`}
        onClick={handleClick}
        aria-label={anchorTitle}
        title={anchorTitle}
        translate="no">
        &#8203;
      </a>
    </As>
  );
}
