import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ExternalLink, Star } from 'lucide-react';
import { Card, Button, tokens } from '../design-system/index.js';

const PortfolioGallery = ({ projects, className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className={clsx(
        'py-20 px-6',
        className
      )}
      style={{
        backgroundColor: tokens.colors.background.secondary,
        color: tokens.colors.primary.text
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h2 
            className="mb-4"
            style={{
              ...tokens.typography.styles.heading,
              color: tokens.colors.primary.text
            }}
          >
            作品集
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{
              ...tokens.typography.styles.body,
              color: tokens.colors.primary.textSecondary,
              fontSize: tokens.typography.styles.subheading.fontSize
            }}
          >
            精选项目展示我的技术能力和创意思维
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className={clsx(
          'grid portfolio-grid',
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        )}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={clsx(
                'portfolio-card group rounded-xl overflow-hidden',
                'hover:shadow-lg transition-all duration-300',
                'cursor-pointer',
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              )}
              style={{
                backgroundColor: tokens.colors.background.secondary,
                border: `1px solid ${tokens.colors.ui.border}`,
                boxShadow: `0 1px 3px 0 ${tokens.colors.background.primary}40`
              }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              {/* Project Image Placeholder */}
              <div 
                className="relative aspect-video flex items-center justify-center transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${tokens.colors.background.primary}, ${tokens.colors.ui.border})`,
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span 
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full"
                      style={{
                        backgroundColor: tokens.colors.background.accent,
                        color: tokens.colors.primary.text
                      }}
                    >
                      <Star className="w-3 h-3" />
                      精选
                    </span>
                  </div>
                )}

                {/* Placeholder Content */}
                <div 
                  className="text-center"
                  style={{ color: tokens.colors.primary.textMuted }}
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: tokens.colors.ui.border }}
                  >
                    <svg 
                      className="w-8 h-8" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      style={{ color: tokens.colors.primary.textMuted }}
                    >
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                  <p className="text-sm">项目预览图</p>
                </div>

                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                  style={{ backgroundColor: `${tokens.colors.background.accent}CC` }}
                >
                  <ExternalLink 
                    className="w-8 h-8" 
                    style={{ color: tokens.colors.primary.text }}
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold mb-2 transition-colors"
                  style={{
                    ...tokens.typography.styles.subheading,
                    color: tokens.colors.primary.text
                  }}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="mb-4 line-clamp-2 leading-relaxed"
                  style={{
                    ...tokens.typography.styles.body,
                    color: tokens.colors.primary.textSecondary
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded hover:brightness-110 transition-all"
                      style={{
                        backgroundColor: tokens.colors.ui.border,
                        color: tokens.colors.primary.textSecondary
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          variants={cardVariants}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
            style={{
              color: tokens.colors.background.accent,
              border: `2px solid ${tokens.colors.background.accent}`,
              backgroundColor: 'transparent'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: tokens.colors.background.accent,
              color: tokens.colors.primary.text
            }}
            whileTap={{ scale: 0.95 }}
          >
            查看更多项目
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioGallery;