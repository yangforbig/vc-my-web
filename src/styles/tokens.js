// Design System Tokens (Enhanced with Figma Analysis)
export const tokens = {
  colors: {
    // Original primary colors
    primary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    // Figma-extracted colors
    figma: {
      // Primary text colors from Figma
      text: {
        primary: '#E9EBDF',    // Main text color
        secondary: '#CBCCC4',  // Muted text color
        muted: '#8B867F',      // Border/stroke color
      },
      // Background colors from Figma
      background: {
        primary: '#151515',    // Primary dark background
        secondary: '#242424',  // Secondary dark background
        accent: '#0E352C',     // Dark green accent
      },
      // UI element colors
      ui: {
        border: '#433E38',     // Border color
        divider: 'rgba(233, 235, 223, 0.12)', // Vertical divider
      }
    },
    accent: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      }
    }
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
    // Figma-extracted typography styles
    figma: {
      // Specific font styles from Figma
      heading: {
        fontSize: '33.609375px',
        fontWeight: '300',
        lineHeight: '1.1246861697684216em',
        letterSpacing: '-1.0711297496758412%',
      },
      subheading: {
        fontSize: '23.0625px',
        fontWeight: '300',
        lineHeight: '1.2487804547234926em',
        letterSpacing: '-1.0406503832437157%',
      },
      body: {
        fontSize: '15px',
        fontWeight: '300',
        lineHeight: '1.6em',
        letterSpacing: '1.0666666428248088%',
      },
      caption: {
        fontSize: '11.0625px',
        fontWeight: '400',
        lineHeight: '1.3016948807710982em',
        letterSpacing: '1.0847457384659072%',
        textTransform: 'uppercase',
      }
    }
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  }
};