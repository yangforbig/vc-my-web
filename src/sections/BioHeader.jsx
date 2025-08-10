import { motion } from 'framer-motion';
import clsx from 'clsx';
import { tokens } from '../design-system/index.js';

const BioHeader = ({ name, tagline, className }) => {
  return (
    <motion.section 
      className={clsx(
        'py-16 px-6 text-center',
        className
      )}
      style={{
        backgroundColor: tokens.colors.background.primary,
        color: tokens.colors.primary.text
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Display Name */}
        <motion.h1 
          className="display-name mb-6"
          style={{
            ...tokens.typography.styles.heading,
            color: tokens.colors.primary.text
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {name}
        </motion.h1>
        
        {/* Tagline */}
        <motion.p 
          className="tagline max-w-2xl mx-auto"
          style={{
            ...tokens.typography.styles.body,
            color: tokens.colors.primary.textSecondary,
            fontSize: tokens.typography.styles.subheading.fontSize,
            lineHeight: tokens.typography.styles.subheading.lineHeight
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {tagline}
        </motion.p>
        
        {/* Decorative Line */}
        <motion.div
          className="w-20 h-1 mx-auto mt-8 rounded-full"
          style={{ backgroundColor: tokens.colors.background.accent }}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </div>
    </motion.section>
  );
};

export default BioHeader;