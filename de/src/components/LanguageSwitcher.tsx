import React from 'react';
import {useLocation, useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './LanguageSwitcher.module.css';

/**
 * Language switcher component that maps URLs between /de/ and / (en) versions.
 * Preserves query parameters when switching languages.
 */
export default function LanguageSwitcher(): JSX.Element {
  const location = useLocation();
  const history = useHistory();
  const {siteConfig} = useDocusaurusContext();
  const currentPath = location.pathname;

  // Determine current language based on baseUrl
  // German version has baseUrl: '/programming-languages/de/'
  // English version has baseUrl: '/programming-languages/'
  const isDe = siteConfig.baseUrl.includes('/de/');

  // Handle click to switch language
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (typeof window === 'undefined') return;
    
    // Get the FULL current URL including query params and hash
    // This is the most reliable way to get all URL components
    const currentFullUrl = window.location.href;
    const urlObj = new URL(currentFullUrl);
    
    // Extract pathname, search, and hash
    const currentPath = urlObj.pathname;
    const currentSearch = urlObj.search; // Includes the '?' if present
    const currentHash = urlObj.hash; // Includes the '#' if present
    
    let newPath: string;
    
    if (isDe) {
      // Currently on /programming-languages/de/..., switch to /programming-languages/...
      newPath = currentPath.replace(/^\/programming-languages\/de\//, '/programming-languages/');
    } else {
      // Currently on /programming-languages/..., switch to /programming-languages/de/...
      if (currentPath.startsWith('/programming-languages/de/')) {
        // Already has /de/, don't add it again
        newPath = currentPath;
      } else if (currentPath === '/programming-languages' || currentPath === '/programming-languages/') {
        // On root/homepage, switch to German homepage
        newPath = '/programming-languages/de/';
      } else {
        // Add /de/ after /programming-languages/
        newPath = currentPath.replace(/^\/programming-languages\//, '/programming-languages/de/');
      }
    }
    
    // Construct the full URL with query params and hash
    const newUrl = newPath + currentSearch + currentHash;
    
    // Debug logging (remove in production)
    console.log('LanguageSwitcher Debug:', {
      currentFullUrl,
      currentPath,
      currentSearch,
      currentHash,
      isDe,
      newPath,
      newUrl
    });
    
    // Navigate to new path with preserved query params and hash
    // Use window.location for full page navigation to switch between different Docusaurus instances
    window.location.href = newUrl;
  };

  // Build href for fallback (if JS is disabled)
  // Get search and hash from window.location for href
  const search = typeof window !== 'undefined' ? window.location.search : '';
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  
  let targetUrl: string;
  if (typeof window !== 'undefined') {
    const fullPath = window.location.pathname;
    if (isDe) {
      targetUrl = fullPath.replace(/^\/programming-languages\/de\//, '/programming-languages/') + search + hash;
    } else {
      if (fullPath.startsWith('/programming-languages/de/')) {
        targetUrl = fullPath + search + hash;
      } else if (fullPath === '/programming-languages' || fullPath === '/programming-languages/') {
        targetUrl = '/programming-languages/de/' + search + hash;
      } else {
        targetUrl = fullPath.replace(/^\/programming-languages\//, '/programming-languages/de/') + search + hash;
      }
    }
  } else {
    targetUrl = `${currentPath}${search}${hash}`;
  }

  return (
    <a
      href={targetUrl}
      onClick={handleClick}
      className={styles.languageSwitcher}
      aria-label={isDe ? 'Switch to English' : 'Zu Deutsch wechseln'}
    >
      {isDe ? 'EN' : 'DE'}
    </a>
  );
}
