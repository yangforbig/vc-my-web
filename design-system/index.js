// ✨ Design System - Main Export
// Unified access to the entire design system

// Export all tokens
export * from './tokens/index.js';
export { default as tokens } from './tokens/index.js';

// Export all components
export * from './components/index.js';

// Export all hooks
export { 
  useMediaQuery, 
  useBreakpoint, 
  useResponsiveValue, 
  useViewportSize,
  breakpoints,
  mediaQueries,
} from './hooks/useMediaQuery.js';

// Design system metadata
export const designSystem = {
  name: 'Figma Design System',
  version: '1.0.0',
  description: 'A comprehensive design system based on detailed Figma analysis',
  
  // Theme configuration
  theme: {
    mode: 'dark', // Based on Figma's dark theme
    primaryColor: '#E9EBDF',
    backgroundColor: '#151515',
    accentColor: '#0E352C',
  },
  
  // Configuration
  config: {
    animations: true,
    transitions: true,
    responsiveBreakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1360,
    },
  },
};

export default designSystem;