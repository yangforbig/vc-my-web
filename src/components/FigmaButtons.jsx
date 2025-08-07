import { motion } from 'framer-motion';
import clsx from 'clsx';

// Primary Button (filled)
const PrimaryButton = ({ children, className, ...props }) => (
  <motion.button
    className={clsx(
      'px-5 py-2.5 bg-slate-200 text-slate-900 text-sm font-medium rounded-full',
      'hover:bg-white transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-900',
      className
    )}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

// Secondary Button (outlined)
const SecondaryButton = ({ children, className, ...props }) => (
  <motion.button
    className={clsx(
      'px-5 py-2.5 bg-transparent text-slate-200 text-sm font-medium rounded-full',
      'border border-slate-500 hover:border-slate-400 hover:bg-slate-800',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900',
      className
    )}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

// Ghost Button (minimal)
const GhostButton = ({ children, className, ...props }) => (
  <motion.button
    className={clsx(
      'px-3 py-2 bg-transparent text-slate-300 text-sm font-light rounded-full',
      'hover:text-white hover:bg-slate-800 transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900',
      className
    )}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

// Dark Button (filled dark)
const DarkButton = ({ children, className, ...props }) => (
  <motion.button
    className={clsx(
      'px-5 py-2.5 bg-slate-700 text-slate-200 text-sm font-medium rounded-full',
      'hover:bg-slate-600 transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900',
      className
    )}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

// Link Button (text-only)
const LinkButton = ({ children, className, ...props }) => (
  <motion.button
    className={clsx(
      'text-sm font-light text-slate-300 hover:text-white transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded',
      className
    )}
    whileHover={{ x: 2 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

// Badge Component (from the design)
const Badge = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-slate-700 text-slate-300',
    new: 'bg-green-900 text-slate-300',
    featured: 'bg-yellow-600 text-yellow-100'
  };

  return (
    <span className={clsx(
      'inline-flex items-center px-1.5 py-0.5 text-xs font-medium rounded uppercase tracking-wide',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

// Button Group Component
const ButtonGroup = ({ children, className }) => (
  <div className={clsx('flex items-center gap-2', className)}>
    {children}
  </div>
);

// Demo Component showing all button styles
const FigmaButtons = ({ className }) => {
  return (
    <div className={clsx('space-y-8', className)}>
      <motion.h2 
        className="text-2xl font-light text-slate-200 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Button Components
      </motion.h2>

      {/* Primary Actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-light text-slate-300">Primary Actions</h3>
        <ButtonGroup>
          <PrimaryButton>Start for free</PrimaryButton>
          <DarkButton>Book a demo</DarkButton>
        </ButtonGroup>
      </div>

      {/* Secondary Actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-light text-slate-300">Secondary Actions</h3>
        <ButtonGroup>
          <SecondaryButton>Book a demo</SecondaryButton>
          <GhostButton>Sign in</GhostButton>
        </ButtonGroup>
      </div>

      {/* Text Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-light text-slate-300">Navigation Links</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton>Documentation</LinkButton>
          <LinkButton>API Reference</LinkButton>
          <LinkButton>Community</LinkButton>
          <LinkButton>Support</LinkButton>
        </div>
      </div>

      {/* Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-light text-slate-300">Badges & Labels</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="new">New</Badge>
          <Badge variant="featured">Featured</Badge>
          <Badge variant="default">Beta</Badge>
        </div>
      </div>

      {/* Combined Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-light text-slate-300">Navigation with Badges</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <LinkButton>Agents</LinkButton>
            <Badge variant="new">New</Badge>
          </div>
          <div className="flex items-center gap-2">
            <LinkButton>AI primitives</LinkButton>
            <Badge variant="new">New</Badge>
          </div>
          <LinkButton>App builder</LinkButton>
          <LinkButton>Mobile apps</LinkButton>
        </div>
      </div>
    </div>
  );
};

export { 
  PrimaryButton, 
  SecondaryButton, 
  GhostButton, 
  DarkButton, 
  LinkButton, 
  Badge, 
  ButtonGroup 
};
export default FigmaButtons;