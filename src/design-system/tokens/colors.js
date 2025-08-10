// 🎨 Design System Colors - Based on Figma Analysis
// Extracted from comprehensive Figma design data

export const colors = {
  // Primary colors from Figma analysis
  primary: {
    text: '#E9EBDF',        // Main text color (fill_17UO6G)
    textSecondary: '#CBCCC4', // Secondary text (fill_RCY79S)
    textMuted: '#8B867F',     // Muted text/borders
  },

  // Background system
  background: {
    primary: '#151515',     // Primary dark background (fill_AEPZKJ)
    secondary: '#242424',   // Secondary background (fill_CR3A45)
    accent: '#0E352C',      // Green accent background (fill_JF5A89)
  },

  // UI elements
  ui: {
    border: '#433E38',      // Border color (stroke_E8AGIQ)
    divider: 'rgba(233, 235, 223, 0.12)', // Dividers (fill_CTFOVY)
    stroke: '#8B867F',      // General strokes (stroke_7W26F5)
  },

  // Interactive states
  interactive: {
    hover: 'rgba(233, 235, 223, 0.08)',
    focus: 'rgba(233, 235, 223, 0.12)',
    active: 'rgba(233, 235, 223, 0.16)',
    disabled: 'rgba(233, 235, 223, 0.32)',
  },

  // Semantic colors
  semantic: {
    success: '#0E352C',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
};

// Color utilities
export const getColorWithOpacity = (color, opacity) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default colors;