// 🔘 Button Component - Based on Figma Analysis
// Implements button patterns from Figma design (buttons section)

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import { tokens } from '../tokens/index.js';

// Button variants using tailwind-variants
const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center',
    'font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'select-none whitespace-nowrap',
  ],
  variants: {
    variant: {
      // Primary button - filled with brand color (Figma "Start for free")
      primary: [
        'text-black shadow-sm',
        'hover:opacity-90',
        'focus:ring-white/20',
      ],
      
      // Secondary button - outlined (Figma "Book a demo")
      secondary: [
        'border border-current',
        'hover:bg-white/5',
        'focus:ring-white/20',
      ],
      
      // Ghost button - minimal (Figma "Sign in")
      ghost: [
        'hover:bg-white/5',
        'focus:ring-white/20',
      ],
      
      // Accent button - with green background
      accent: [
        'shadow-sm',
        'hover:opacity-90',
        'focus:ring-green-500/20',
      ],
    },
    size: {
      sm: 'px-3 py-1.5 text-sm h-8',
      md: 'px-5 py-2.5 text-sm h-10', // Figma button height: 40px
      lg: 'px-6 py-3 text-base h-12',
      xl: 'px-8 py-4 text-lg h-14',
    },
    shape: {
      rounded: 'rounded-md',
      pill: 'rounded-full', // Figma borderRadius: 9999px
      square: 'rounded-none',
    },
    width: {
      auto: 'w-auto',
      full: 'w-full',
      fit: 'w-fit',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    shape: 'pill',
    width: 'auto',
  },
});

const Button = forwardRef(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  width = 'auto',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  animate = true,
  onClick,
  ...props
}, ref) => {
  // Dynamic styles based on variant and Figma colors
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: tokens.colors.primary.text, // #E9EBDF
          color: tokens.colors.background.primary, // #151515
        };
      case 'secondary':
        return {
          color: tokens.colors.primary.text, // #E9EBDF
          borderColor: tokens.colors.ui.stroke, // #8B867F
        };
      case 'ghost':
        return {
          color: tokens.colors.primary.text, // #E9EBDF
        };
      case 'accent':
        return {
          backgroundColor: tokens.colors.background.accent, // #0E352C
          color: tokens.colors.primary.text, // #E9EBDF
        };
      default:
        return {};
    }
  };

  const ButtonComponent = animate ? motion.button : 'button';
  
  const motionProps = animate ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  } : {};

  return (
    <ButtonComponent
      ref={ref}
      className={buttonVariants({ variant, size, shape, width, className })}
      style={{
        ...getVariantStyles(),
        // Apply Figma typography styles
        fontFamily: tokens.typography.styles.small.fontFamily,
        fontSize: tokens.typography.styles.small.fontSize,
        fontWeight: tokens.typography.styles.small.fontWeight,
        lineHeight: tokens.typography.styles.small.lineHeight,
      }}
      disabled={disabled || loading}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {/* Left icon */}
      {leftIcon && !loading && (
        <span className="mr-2 flex-shrink-0">
          {leftIcon}
        </span>
      )}
      
      {/* Loading spinner */}
      {loading && (
        <span className="mr-2 flex-shrink-0">
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </span>
      )}
      
      {/* Button text */}
      <span className={clsx(loading && 'opacity-70')}>
        {children}
      </span>
      
      {/* Right icon */}
      {rightIcon && !loading && (
        <span className="ml-2 flex-shrink-0">
          {rightIcon}
        </span>
      )}
    </ButtonComponent>
  );
});

Button.displayName = 'Button';

export default Button;