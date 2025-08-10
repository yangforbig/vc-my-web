// 📱 useMediaQuery Hook - Responsive Design Utility
// Based on Figma responsive breakpoints and design system needs

import { useState, useEffect } from 'react';

// Breakpoints based on Figma analysis and responsive patterns
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1360, // Based on Figma canvas width
};

// Media query strings
export const mediaQueries = {
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  '2xl': `(min-width: ${breakpoints['2xl']}px)`,
  
  // Max width queries
  'max-sm': `(max-width: ${breakpoints.sm - 1}px)`,
  'max-md': `(max-width: ${breakpoints.md - 1}px)`,
  'max-lg': `(max-width: ${breakpoints.lg - 1}px)`,
  'max-xl': `(max-width: ${breakpoints.xl - 1}px)`,
  
  // Specific ranges
  'sm-only': `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  'md-only': `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  'lg-only': `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`,
  
  // Special queries
  mobile: `(max-width: ${breakpoints.md - 1}px)`,
  tablet: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  desktop: `(min-width: ${breakpoints.lg}px)`,
  
  // Orientation and features
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  'hover-hover': '(hover: hover)',
  'hover-none': '(hover: none)',
  
  // High DPI displays
  retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
};

/**
 * useMediaQuery Hook
 * @param {string} query - Media query string or predefined breakpoint key
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = (query) => {
  // Use predefined query if it exists, otherwise use the query as-is
  const mediaQuery = mediaQueries[query] || query;
  
  const [matches, setMatches] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      return window.matchMedia(mediaQuery).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(mediaQuery);
    const listener = (event) => setMatches(event.matches);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Add listener
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(listener);
    }

    // Cleanup
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        // Fallback for older browsers
        mediaQueryList.removeListener(listener);
      }
    };
  }, [mediaQuery]);

  return matches;
};

/**
 * useBreakpoint Hook
 * Returns the current breakpoint
 * @returns {string} - Current breakpoint key
 */
export const useBreakpoint = () => {
  const is2xl = useMediaQuery('2xl');
  const isXl = useMediaQuery('xl');
  const isLg = useMediaQuery('lg');
  const isMd = useMediaQuery('md');
  const isSm = useMediaQuery('sm');

  if (is2xl) return '2xl';
  if (isXl) return 'xl';
  if (isLg) return 'lg';
  if (isMd) return 'md';
  if (isSm) return 'sm';
  return 'xs';
};

/**
 * useResponsiveValue Hook
 * Returns different values based on breakpoints
 * @param {object} values - Object with breakpoint keys and values
 * @param {any} defaultValue - Default value for smallest screens
 * @returns {any} - Value for current breakpoint
 */
export const useResponsiveValue = (values, defaultValue) => {
  const breakpoint = useBreakpoint();
  
  // Try to find the value for current breakpoint or closest smaller one
  const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const currentIndex = breakpointOrder.indexOf(breakpoint);
  
  for (let i = currentIndex; i >= 0; i--) {
    const bp = breakpointOrder[i];
    if (values[bp] !== undefined) {
      return values[bp];
    }
  }
  
  return defaultValue;
};

/**
 * useViewportSize Hook
 * Returns current viewport dimensions
 * @returns {object} - {width, height}
 */
export const useViewportSize = () => {
  const [size, setSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return { width: 0, height: 0 };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

export default useMediaQuery;