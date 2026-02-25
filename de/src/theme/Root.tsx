import React from 'react';
import { LanguageFilterProvider } from '@site/src/contexts/LanguageFilterContext';
import { DomainFilterProvider } from '@site/src/contexts/DomainFilterContext';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <LanguageFilterProvider>
      <DomainFilterProvider>
        {children}
      </DomainFilterProvider>
    </LanguageFilterProvider>
  );
}
