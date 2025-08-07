// 📝 Input Component - Based on Figma Analysis
// Implements form input patterns consistent with the design system

import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import { tokens } from '../tokens/index.js';

// Input variants using tailwind-variants
const inputVariants = tv({
  base: [
    'w-full transition-all duration-200',
    'focus:outline-none focus:ring-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'placeholder:opacity-60',
  ],
  variants: {
    variant: {
      default: [
        'border border-current',
        'focus:border-transparent',
      ],
      filled: [
        'border-transparent',
        'focus:border-transparent',
      ],
      ghost: [
        'border-transparent bg-transparent',
        'focus:border-current',
      ],
    },
    size: {
      sm: 'px-3 py-2 text-sm h-9',
      md: 'px-4 py-3 text-sm h-12', // Based on Figma measurements
      lg: 'px-5 py-4 text-base h-14',
    },
    shape: {
      rounded: 'rounded-md',
      pill: 'rounded-full',
      square: 'rounded-none',
    },
    state: {
      default: '',
      error: 'ring-red-500/20 border-red-500/50',
      success: 'ring-green-500/20 border-green-500/50',
      warning: 'ring-yellow-500/20 border-yellow-500/50',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    shape: 'rounded',
    state: 'default',
  },
});

const Input = forwardRef(({
  className,
  type = 'text',
  variant = 'default',
  size = 'md',
  shape = 'rounded',
  state = 'default',
  label,
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  animate = true,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  // Dynamic styles based on Figma colors
  const getVariantStyles = () => {
    const baseStyles = {
      backgroundColor: tokens.colors.background.secondary, // #242424
      color: tokens.colors.primary.text, // #E9EBDF
      borderColor: tokens.colors.ui.border, // #433E38
      fontFamily: tokens.typography.styles.body.fontFamily,
      fontSize: tokens.typography.styles.body.fontSize,
      fontWeight: tokens.typography.styles.body.fontWeight,
    };

    switch (variant) {
      case 'filled':
        return {
          ...baseStyles,
          backgroundColor: tokens.colors.background.secondary,
        };
      case 'ghost':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
        };
      default:
        return baseStyles;
    }
  };

  const getFocusStyles = () => ({
    borderColor: tokens.colors.primary.text,
    boxShadow: `0 0 0 2px ${tokens.colors.interactive.focus}`,
  });

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const InputComponent = animate ? motion.input : 'input';
  const motionProps = animate ? {
    whileFocus: { scale: 1.01 },
    transition: { duration: 0.15 },
  } : {};

  // Determine final state (error takes precedence)
  const finalState = errorMessage ? 'error' : state;

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          className="block text-sm font-medium mb-2"
          style={{ 
            color: tokens.colors.primary.text,
            fontFamily: tokens.typography.styles.caption.fontFamily,
            fontSize: tokens.typography.styles.caption.fontSize,
            fontWeight: tokens.typography.styles.caption.fontWeight,
          }}
        >
          {label}
        </label>
      )}

      {/* Input container */}
      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <div
            className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{ color: tokens.colors.primary.textMuted }}
          >
            {leftIcon}
          </div>
        )}

        {/* Input field */}
        <InputComponent
          ref={ref}
          type={type}
          className={inputVariants({ variant, size, shape, state: finalState, className })}
          style={{
            ...getVariantStyles(),
            ...(isFocused ? getFocusStyles() : {}),
            paddingLeft: leftIcon ? '2.75rem' : undefined,
            paddingRight: rightIcon ? '2.75rem' : undefined,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...motionProps}
          {...props}
        />

        {/* Right icon */}
        {rightIcon && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{ color: tokens.colors.primary.textMuted }}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {/* Helper text or error message */}
      {(helperText || errorMessage) && (
        <motion.p
          className={clsx(
            'mt-2 text-xs',
            errorMessage ? 'text-red-400' : 'opacity-70'
          )}
          style={{ 
            color: errorMessage 
              ? tokens.colors.semantic.error 
              : tokens.colors.primary.textMuted,
            fontFamily: tokens.typography.styles.caption.fontFamily,
            fontSize: tokens.typography.styles.caption.fontSize,
          }}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {errorMessage || helperText}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;