import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useState } from 'react';
import { tokens } from '../design-system/index.js';
import { portfolioData } from '../data/portfolio';
import avatarImage from '../assets/images/Noma.png';
import Galaxy from '../effects/Galaxy.jsx';

const AvatarHero = ({ className }) => {
  const [clickedSkills, setClickedSkills] = useState(new Set());

  const handleSkillClick = (skill) => {
    if (skill.includes('吹牛逼')) {
      setClickedSkills(prev => {
        const newSet = new Set(prev);
        if (newSet.has(skill)) {
          newSet.delete(skill); // Toggle back to original
        } else {
          newSet.add(skill); // Switch to easter egg
        }
        return newSet;
      });
    }
  };



  const getDisplaySkill = (skill) => {
    if (skill.includes('吹牛逼') && clickedSkills.has(skill)) {
      return skill.replace('吹牛逼', '纯想🐮');
    }
    return skill;
  };

  const getSkillStyle = (skill) => {
    const isClickableSkill = skill.includes('吹牛逼');
    const isClicked = clickedSkills.has(skill);
    
    if (isClickableSkill && !isClicked) {
      // Colorful "吹牛逼" text style
      return {
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3)',
        backgroundSize: '300% 300%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'rainbow 3s ease infinite',
        fontWeight: 'bold',
        backgroundColor: `${tokens.colors.background.secondary}dd`, // Keep original background
        border: `1px solid ${tokens.colors.ui.border}`, // Keep original border
      };
    }
    
    return {
      color: tokens.colors.primary.textSecondary,
      backgroundColor: `${tokens.colors.background.secondary}dd`,
      border: `1px solid ${tokens.colors.ui.border}`,
    };
  };

  return (
    <>
      {/* Add rainbow animation keyframes */}
      <style jsx>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      <motion.section 
        className={clsx(
          'relative h-screen flex flex-col items-center justify-center',
          'overflow-hidden',
          className
        )}
        style={{
          backgroundColor: tokens.colors.background.primary,
          color: tokens.colors.primary.text,
          pointerEvents: 'auto' // Ensure section can receive mouse events
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}

      >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] z-1" />
      
      {/* Galaxy Background - Interactive Version */}
      <div className="absolute inset-0 z-5">
        <Galaxy
          disableAnimation={false}
          mouseInteraction={true}
          speed={0.3}
          starSpeed={0.2}
          rotationSpeed={0.01}
          twinkleIntensity={0.1}
          density={3}
          glowIntensity={0.2}
          saturation={0.0}
          hueShift={220}
          transparent={true}
          mouseRepulsion={true}
          repulsionStrength={2.0}
          focal={[0.5, 0.5]}
        />
      </div>
      
      {/* Avatar Container */}
      <motion.div
        className="relative z-20 text-center"
        style={{ pointerEvents: 'none' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Avatar Container */}
        <div className="relative flex flex-col items-center">
          {/* Solar System Container */}
          <div className="relative w-96 h-96 mb-12">
            {/* Avatar at Center (The Sun) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={clsx(
                'w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80',
                'rounded-full',
                'border-4 shadow-xl',
                'relative overflow-hidden'
              )}
              style={{
                backgroundColor: tokens.colors.background.secondary,
                borderColor: tokens.colors.ui.border
              }}>
                {/* Try to load avatar image, fallback to placeholder */}
                <img 
                  src={avatarImage} 
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // If image fails to load, show placeholder
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                  onLoad={(e) => {
                    // If image loads successfully, hide placeholder
                    e.target.nextElementSibling.style.display = 'none';
                  }}
                />
                
                {/* Placeholder Icon (shown when no image) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center"
                  style={{ backgroundColor: tokens.colors.ui.border, display: 'none' }}
                >
                  <svg 
                    className="w-8 h-8 md:w-10 md:h-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: tokens.colors.primary.textMuted }}
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                
                {/* Subtle Animation Ring */}
                <motion.div
                  className="absolute inset-0 border-2 rounded-full pointer-events-none"
                  style={{ borderColor: tokens.colors.background.accent }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.2, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>

            {/* Orbiting Skills - Safe Orbits */}
            {portfolioData.personal.tagline.split(' · ').map((skill, index) => {
              const totalSkills = portfolioData.personal.tagline.split(' · ').length;
              
              // Elliptical orbit calculations - use full rectangular hero section
              const avatarRadius = 160; // Avatar max radius (lg:w-80 = 320px diameter)
              const safetyBuffer = 80; // Minimum safety buffer
              
              // Elliptical orbits - wider horizontally to use full screen width
              const minRadiusX = avatarRadius + safetyBuffer; // 240px minimum horizontal
              const maxRadiusX = 550; // Use most of screen width (~1200px)
              const minRadiusY = avatarRadius + safetyBuffer; // 240px minimum vertical  
              const maxRadiusY = 350; // Use hero section height efficiently
              
              // Distribute elliptical orbits
              const radiusX = minRadiusX + (index / (totalSkills - 1)) * (maxRadiusX - minRadiusX);
              const radiusY = minRadiusY + (index / (totalSkills - 1)) * (maxRadiusY - minRadiusY);
              
              // Different speeds to prevent clustering
              const speed = 20 + (index * 4); // Varied speeds
              
              // Stagger starting positions to spread them out
              const startAngle = (index / totalSkills) * 360 + (index * 45);
              
              return (
                <motion.div
                  key={skill}
                  className="absolute z-25"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'auto'
                  }}
                  initial={{ 
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                >
                  <motion.div
                    animate={{
                      x: [
                        Math.cos((startAngle) * Math.PI / 180) * radiusX,
                        Math.cos((startAngle + 90) * Math.PI / 180) * radiusX,
                        Math.cos((startAngle + 180) * Math.PI / 180) * radiusX,
                        Math.cos((startAngle + 270) * Math.PI / 180) * radiusX,
                        Math.cos((startAngle + 360) * Math.PI / 180) * radiusX
                      ],
                      y: [
                        Math.sin((startAngle) * Math.PI / 180) * radiusY,
                        Math.sin((startAngle + 90) * Math.PI / 180) * radiusY,
                        Math.sin((startAngle + 180) * Math.PI / 180) * radiusY,
                        Math.sin((startAngle + 270) * Math.PI / 180) * radiusY,
                        Math.sin((startAngle + 360) * Math.PI / 180) * radiusY
                      ]
                    }}
                    transition={{
                      duration: speed,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <motion.button
                      className={clsx(
                        'w-24 h-24 rounded-full text-base font-bold',
                        'border-2 shadow-lg backdrop-blur-sm',
                        'transition-all duration-300',
                        'hover:scale-110 hover:shadow-xl',
                        'focus:outline-none focus:ring-2 focus:ring-offset-2',
                        'flex items-center justify-center'
                      )}
                      style={getSkillStyle(skill)}
                      onClick={() => handleSkillClick(skill)}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        transition: { duration: 0.1 }
                      }}
                    >
                      {getDisplaySkill(skill)}
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Name - Right under the avatar */}
          <motion.h1 
            className="display-name text-center"
            style={{
              ...tokens.typography.styles.heading,
              color: tokens.colors.primary.text,
              fontSize: '3.5rem',
              fontWeight: 300,
              lineHeight: '1.1'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {portfolioData.personal.name}
          </motion.h1>
        </div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full opacity-30"
        style={{ backgroundColor: tokens.colors.background.accent }}
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full opacity-20"
        style={{ backgroundColor: tokens.colors.primary.textMuted }}
        animate={{ 
          y: [0, 15, 0],
          x: [0, -8, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.section>
    </>
  );
};

export default AvatarHero;