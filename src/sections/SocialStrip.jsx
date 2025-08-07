import { motion } from 'framer-motion';
import clsx from 'clsx';
import { 
  SiGithub, 
  SiLinkedin, 
  SiDribbble, 
  SiX 
} from 'react-icons/si';

const iconMap = {
  github: SiGithub,
  linkedin: SiLinkedin,
  dribbble: SiDribbble,
  x: SiX,
};

const SocialStrip = ({ socialLinks, className }) => {
  return (
    <motion.section 
      className={clsx(
        'py-12 px-6',
        'bg-slate-50 border-y border-slate-200',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="max-w-4xl mx-auto">
        <ul className={clsx(
          'social-icons',
          'flex items-center justify-center gap-6 md:gap-8'
        )}>
          {socialLinks.map((social, index) => {
            const IconComponent = iconMap[social.icon];
            
            return (
              <motion.li
                key={social.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'group relative',
                    'flex items-center justify-center',
                    'w-12 h-12 md:w-14 md:h-14',
                    'bg-white rounded-full',
                    'border border-slate-200',
                    'text-slate-600 hover:text-slate-900',
                    'transition-all duration-300',
                    'shadow-sm hover:shadow-md',
                    'hover:scale-110'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                  
                  {/* Tooltip */}
                  <span className={clsx(
                    'absolute -top-10 left-1/2 transform -translate-x-1/2',
                    'px-2 py-1 text-xs font-medium',
                    'bg-slate-900 text-white rounded',
                    'opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-200',
                    'pointer-events-none whitespace-nowrap'
                  )}>
                    {social.platform}
                  </span>
                </motion.a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
};

export default SocialStrip;