// 📝 Design System Typography - Based on Figma Analysis
// Extracted from detailed text style analysis

export const typography = {
  // Font families
  fontFamily: {
    primary: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Figma-extracted typography styles with exact specifications
  styles: {
    // Main heading - style_TD0OYS
    heading: {
      fontFamily: 'Inter',
      fontWeight: 300,
      fontSize: '33.609375px',
      lineHeight: '1.1246861697684216em',
      letterSpacing: '-1.0711297496758412%',
      textAlign: 'left',
    },

    // Subheading - style_WS2WLQ
    subheading: {
      fontFamily: 'Inter',
      fontWeight: 300,
      fontSize: '23.0625px',
      lineHeight: '1.2487804547234926em',
      letterSpacing: '-1.0406503832437157%',
      textAlign: 'left',
    },

    // Large text - style_C3XRDQ
    large: {
      fontFamily: 'Inter',
      fontWeight: 300,
      fontSize: '23.25px',
      lineHeight: '1.2387096446047547em',
      letterSpacing: '-1.0322580414433633%',
      textAlign: 'left',
    },

    // Medium text - style_U9N59J
    medium: {
      fontFamily: 'Inter',
      fontWeight: 300,
      fontSize: '22.5px',
      lineHeight: '1.27999996609158em',
      letterSpacing: '-1.0666666428248088%',
      textAlign: 'left',
    },

    // Body text - style_510NY0
    body: {
      fontFamily: 'Inter',
      fontWeight: 300,
      fontSize: '15px',
      lineHeight: '1.6em',
      letterSpacing: '1.0666666428248088%',
      textAlign: 'left',
    },

    // Small text - style_4TSSYN
    small: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '13.34375px',
      lineHeight: '1.0491803278688525em',
      textAlign: 'center',
    },

    // Caption/Label - style_0RF3HN
    caption: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '11.0625px',
      lineHeight: '1.3016948807710982em',
      letterSpacing: '1.0847457384659072%',
      textTransform: 'uppercase',
      textAlign: 'left',
    },

    // Link text - style_YEC9JC
    link: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '13.78125px',
      lineHeight: '1.0158730158730158em',
      textAlign: 'center',
    },
  },

  // Responsive font sizes
  responsive: {
    heading: {
      mobile: '24px',
      tablet: '28px',
      desktop: '33.609375px',
    },
    subheading: {
      mobile: '18px',
      tablet: '20px',
      desktop: '23.0625px',
    },
    body: {
      mobile: '14px',
      tablet: '15px',
      desktop: '15px',
    },
  },
};

// Typography utilities
export const getTypographyStyle = (styleName) => {
  return typography.styles[styleName] || typography.styles.body;
};

export const createResponsiveTypography = (baseSize, scale = 1.2) => {
  const base = parseFloat(baseSize);
  return {
    mobile: `${base / scale}px`,
    tablet: `${base / (scale * 0.8)}px`,
    desktop: `${base}px`,
  };
};

export default typography;