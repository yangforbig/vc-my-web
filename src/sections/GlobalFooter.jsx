import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Heart } from 'lucide-react';
import { tokens } from '../styles/tokens';

const GlobalFooter = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className={clsx(
        'py-8 px-6',
        'border-t border-slate-800',
        className
      )}
      style={{
        backgroundColor: tokens.colors.figma.background.primary,
        color: tokens.colors.figma.text.primary,
        borderColor: tokens.colors.figma.ui.border,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="footer-meta text-center">
          {/* Copyright */}
          <motion.p 
            className="text-sm mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            © {currentYear} Noma. 保留所有权利.
          </motion.p>
          
          {/* Made with love */}
          <motion.p 
            className="text-xs flex items-center justify-center gap-1"
            style={{ color: tokens.colors.figma.text.secondary }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            用
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f87171', '#ef4444']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-3 h-3 fill-current" />
            </motion.span>
            制作 · 基于 React + Vite + TailwindCSS · 采用 Figma 设计系统
          </motion.p>
          
          {/* ICP备案信息 (示例) */}
          <motion.p 
            className="text-xs mt-2"
            style={{ color: tokens.colors.figma.text.muted }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="#" 
              className="transition-colors duration-200"
              style={{ 
                color: tokens.colors.figma.text.muted,
              }}
              onMouseEnter={(e) => e.target.style.color = tokens.colors.figma.text.secondary}
              onMouseLeave={(e) => e.target.style.color = tokens.colors.figma.text.muted}
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备12345678号-1
            </a>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default GlobalFooter;