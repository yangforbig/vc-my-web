// 🃏 Card Component - Based on Figma Analysis
// Implements card patterns from Figma (border style card, fill style card)

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import { tokens } from '../tokens/index.js';

// Card variants using tailwind-variants
const cardVariants = tv({
  base: [
    'relative overflow-hidden transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
  ],
  variants: {
    variant: {
      // Border style card (from Figma "border style - card")
      bordered: [
        'border',
        'hover:border-opacity-60',
      ],
      
      // Fill style card (from Figma "fill style card")
      filled: [
        'shadow-sm',
        'hover:shadow-md',
      ],
      
      // Elevated card with shadow
      elevated: [
        'shadow-lg',
        'hover:shadow-xl',
      ],
      
      // Ghost card - minimal styling
      ghost: [
        'hover:bg-opacity-5',
      ],
    },
    size: {
      sm: 'p-4',
      md: 'p-6', // Based on Figma 24px padding
      lg: 'p-8',
      xl: 'p-10',
    },
    shape: {
      rounded: 'rounded-lg',
      pill: 'rounded-2xl',
      square: 'rounded-none',
    },
    interactive: {
      true: 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'bordered',
    size: 'md',
    shape: 'rounded',
    interactive: false,
  },
});

const Card = forwardRef(({
  children,
  className,
  variant = 'bordered',
  size = 'md',
  shape = 'rounded',
  interactive = false,
  animate = true,
  onClick,
  header,
  footer,
  image,
  ...props
}, ref) => {
  // Dynamic styles based on variant and Figma colors
  const getVariantStyles = () => {
    switch (variant) {
      case 'bordered':
        return {
          backgroundColor: 'transparent',
          borderColor: tokens.colors.ui.border, // #433E38
          color: tokens.colors.primary.text, // #E9EBDF
        };
      case 'filled':
        return {
          backgroundColor: tokens.colors.background.secondary, // #242424
          color: tokens.colors.primary.text, // #E9EBDF
        };
      case 'elevated':
        return {
          backgroundColor: tokens.colors.background.secondary, // #242424
          color: tokens.colors.primary.text, // #E9EBDF
          boxShadow: `0 10px 25px -5px ${tokens.colors.background.primary}80`,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: tokens.colors.primary.text, // #E9EBDF
        };
      default:
        return {};
    }
  };

  const CardComponent = animate ? motion.div : 'div';
  const motionProps = animate ? {
    whileHover: interactive ? { scale: 1.02 } : {},
    whileTap: interactive ? { scale: 0.98 } : {},
    transition: { duration: 0.15 },
  } : {};

  const isClickable = interactive || onClick;

  return (
    <CardComponent
      ref={ref}
      className={cardVariants({ 
        variant, 
        size: header || footer ? 'sm' : size,
        shape, 
        interactive: isClickable,
        className 
      })}
      style={{
        ...getVariantStyles(),
        // Apply Figma typography for card content
        fontFamily: tokens.typography.styles.body.fontFamily,
      }}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      {...motionProps}
      {...props}
    >
      {/* Image section */}
      {image && (
        <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden">
          {typeof image === 'string' ? (
            <img
              src={image}
              alt=""
              className="w-full h-48 object-cover"
              style={{ backgroundColor: tokens.colors.ui.border }}
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-200">
              {image}
            </div>
          )}
        </div>
      )}

      {/* Header section */}
      {header && (
        <div className="mb-4 pb-4 border-b" style={{ borderColor: tokens.colors.ui.border }}>
          {typeof header === 'string' ? (
            <h3 
              className="text-lg font-medium"
              style={{ 
                color: tokens.colors.primary.text,
                fontFamily: tokens.typography.styles.medium.fontFamily,
                fontSize: tokens.typography.styles.medium.fontSize,
                fontWeight: tokens.typography.styles.medium.fontWeight,
              }}
            >
              {header}
            </h3>
          ) : (
            header
          )}
        </div>
      )}

      {/* Main content */}
      <div className={clsx(
        header || footer ? 'flex-1' : '',
        'flex flex-col'
      )}>
        {children}
      </div>

      {/* Footer section */}
      {footer && (
        <div className="mt-4 pt-4 border-t" style={{ borderColor: tokens.colors.ui.border }}>
          {footer}
        </div>
      )}

      {/* Interactive overlay for bordered cards */}
      {isClickable && variant === 'bordered' && (
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-5 transition-opacity duration-200"
          style={{ backgroundColor: tokens.colors.primary.text }}
        />
      )}
    </CardComponent>
  );
});

Card.displayName = 'Card';

// Card sub-components for better composition
Card.Header = ({ children, className, ...props }) => (
  <div className={clsx('mb-4', className)} {...props}>
    {children}
  </div>
);

Card.Body = ({ children, className, ...props }) => (
  <div className={clsx('flex-1', className)} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className, ...props }) => (
  <div className={clsx('mt-4', className)} {...props}>
    {children}
  </div>
);

export default Card;