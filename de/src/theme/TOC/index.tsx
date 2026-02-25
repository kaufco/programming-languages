import React from 'react';
import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import type { WrapperProps } from '@docusaurus/types';
import ColorLegend from '@site/src/components/ColorLegend';
import DomainFilter from '@site/src/components/DomainFilter';
import styles from './styles.module.css';

type Props = WrapperProps<typeof TOCType>;

export default function TOCWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.tocWithLegend}>
      <ColorLegend />
      <DomainFilter />
      <TOC {...props} />
    </div>
  );
}
