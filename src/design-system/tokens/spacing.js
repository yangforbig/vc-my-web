// 📐 Design System Spacing - Based on Figma Analysis
// Extracted from layout and padding specifications

export const spacing = {
  // Base spacing scale (8px grid system)
  scale: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
  },

  // Figma-extracted specific spacing values
  figma: {
    // Container padding values from layout analysis
    containerPadding: {
      small: '16px',
      medium: '24px',
      large: '32px',
    },

    // Gap values from flex layouts
    gaps: {
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },

    // Component spacing from Figma
    component: {
      cardPadding: '24px',        // From layout_FJ3S8C
      buttonPadding: '0px 20px',  // From layout_6YFO8W
      inputPadding: '12px 16px',
      sectionGap: '64px',
    },

    // Border radius values from Figma
    borderRadius: {
      none: '0px',
      sm: '4px',          // From borderRadius: 4px
      md: '8px',
      lg: '12px',
      xl: '16px',
      full: '9999px',     // From borderRadius: 9999px (buttons)
    },

    // Specific measurements from Figma
    measurements: {
      buttonHeight: '40px',       // From dimensions: height: 40
      inputHeight: '48px',        // From dimensions: height: 48
      cardMinHeight: '240px',
      headerHeight: '64px',
      footerPadding: '64px 0px 0px', // From layout_X66XZ3
    },
  },

  // Layout containers
  container: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1360px',    // From Figma canvas width: 1360
    },
    padding: {
      mobile: '16px',
      tablet: '24px',
      desktop: '32px',
    },
  },

  // Grid system
  grid: {
    columns: 12,
    gutter: '24px',
    margin: {
      mobile: '16px',
      tablet: '32px',
      desktop: '64px',
    },
  },
};

// Spacing utilities
export const getSpacing = (value) => {
  if (typeof value === 'number') {
    return spacing.scale[value] || `${value * 4}px`;
  }
  return spacing.scale[value] || value;
};

export const createSpacingClasses = () => {
  const classes = {};
  Object.entries(spacing.scale).forEach(([key, value]) => {
    classes[`p-${key}`] = { padding: value };
    classes[`pt-${key}`] = { paddingTop: value };
    classes[`pr-${key}`] = { paddingRight: value };
    classes[`pb-${key}`] = { paddingBottom: value };
    classes[`pl-${key}`] = { paddingLeft: value };
    classes[`px-${key}`] = { paddingLeft: value, paddingRight: value };
    classes[`py-${key}`] = { paddingTop: value, paddingBottom: value };
    
    classes[`m-${key}`] = { margin: value };
    classes[`mt-${key}`] = { marginTop: value };
    classes[`mr-${key}`] = { marginRight: value };
    classes[`mb-${key}`] = { marginBottom: value };
    classes[`ml-${key}`] = { marginLeft: value };
    classes[`mx-${key}`] = { marginLeft: value, marginRight: value };
    classes[`my-${key}`] = { marginTop: value, marginBottom: value };
  });
  return classes;
};

export default spacing;