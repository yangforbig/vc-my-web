// 🎨 Design System Tokens - Central Export
// Unified access to all design tokens

import colors, { getColorWithOpacity } from './colors.js';
import typography, { getTypographyStyle, createResponsiveTypography } from './typography.js';
import spacing, { getSpacing, createSpacingClasses } from './spacing.js';

// Export individual tokens
export { colors, getColorWithOpacity };
export { typography, getTypographyStyle, createResponsiveTypography };
export { spacing, getSpacing, createSpacingClasses };

// Combined tokens object for easy access
export const tokens = {
  colors,
  typography,
  spacing,
};

export default tokens;