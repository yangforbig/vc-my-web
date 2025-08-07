import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Briefcase, GraduationCap } from 'lucide-react';
import { tokens } from '../../design-system/index.js';

const ResumeTimeline = ({ timelineData, className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
        backgroundColor: tokens.colors.background.primary,
        color: tokens.colors.primary.text
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              ...tokens.typography.styles.heading,
              color: tokens.colors.primary.text
            }}
          >
            个人履历
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{
              ...tokens.typography.styles.body,
              color: tokens.colors.primary.textSecondary
            }}
          >
            我的职业发展历程和教育背景
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-0.5" 
            style={{ backgroundColor: tokens.colors.ui.border }}
          />

          <ul className="timeline-list space-y-12">
            {timelineData.map((item, index) => (
              <motion.li
                key={item.id}
                className={clsx(
                  'timeline-item relative',
                  'flex flex-col md:flex-row',
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                )}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div 
                  className={clsx(
                    'absolute left-6 md:left-1/2 transform md:-translate-x-1/2',
                    'w-3 h-3 rounded-full shadow-sm z-10'
                  )}
                  style={{
                    backgroundColor: tokens.colors.background.accent,
                    border: `4px solid ${tokens.colors.background.primary}`
                  }}
                />

                {/* Content */}
                <div className={clsx(
                  'flex-1 ml-16 md:ml-0',
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                )}>
                  <motion.div
                    className={clsx(
                      'p-6 rounded-xl shadow-sm',
                      'hover:shadow-md transition-shadow duration-300'
                    )}
                    style={{
                      backgroundColor: tokens.colors.background.secondary,
                      border: `1px solid ${tokens.colors.ui.border}`,
                      color: tokens.colors.primary.text
                    }}
                    whileHover={{ y: -2 }}
                  >
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full"
                        style={{
                          backgroundColor: tokens.colors.background.accent,
                          color: tokens.colors.primary.text
                        }}
                      >
                        {item.year}
                      </span>
                      <div 
                        className="flex items-center"
                        style={{ color: tokens.colors.primary.textMuted }}
                      >
                        {item.type === 'work' ? (
                          <Briefcase className="w-4 h-4" />
                        ) : (
                          <GraduationCap className="w-4 h-4" />
                        )}
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 
                      className="text-xl font-semibold mb-1"
                      style={{
                        ...tokens.typography.styles.subheading,
                        color: tokens.colors.primary.text
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="font-medium mb-3"
                      style={{
                        color: tokens.colors.background.accent
                      }}
                    >
                      {item.company}
                    </p>

                    {/* Description */}
                    <p 
                      className="leading-relaxed"
                      style={{
                        ...tokens.typography.styles.body,
                        color: tokens.colors.primary.textSecondary
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block flex-1" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeTimeline;