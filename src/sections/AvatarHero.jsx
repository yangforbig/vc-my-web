import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useState } from 'react';
import { tokens } from '../../design-system/index.js';
import { portfolioData } from '../data/portfolio';
import avatarImage from '../assets/images/Noma.png';

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
          'relative min-h-[60vh] flex flex-col items-center justify-center',
          'overflow-hidden',
          className
        )}
        style={{
          backgroundColor: tokens.colors.background.primary,
          color: tokens.colors.primary.text
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      {/* Avatar Container */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Avatar Container */}
        <div className="relative flex flex-col items-center">
          {/* Solar System Container */}
          <div className="relative w-96 h-96 mb-8">
            {/* Avatar at Center (The Sun) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={clsx(
                'w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64',
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

            {/* Orbiting Skills (The Planets) - With Bounce Physics */}
            {portfolioData.personal.tagline.split(' · ').map((skill, index) => {
              const totalSkills = portfolioData.personal.tagline.split(' · ').length;
              const avatarRadius = 120; // Avatar collision radius
              const baseRadius = 150 + (index * 35); // Base orbital radius
              const speed = 20 + (index * 1.5); // Animation speed
              const startAngle = (360 / totalSkills) * index + (index * 30);
              
              // Create bounce effect by modifying the orbital path when close to avatar
              const createBounceKeyframes = () => {
                const keyframes = [];
                const steps = 8; // More steps for smoother animation
                
                for (let i = 0; i <= steps; i++) {
                  const angle = startAngle + (i * 360 / steps);
                  const radians = (angle * Math.PI) / 180;
                  
                  let x = Math.cos(radians) * baseRadius;
                  let y = Math.sin(radians) * (baseRadius * 0.7); // Oval shape
                  
                  // Check distance from center (avatar)
                  const distanceFromCenter = Math.sqrt(x * x + y * y);
                  
                  // If too close to avatar, bounce away
                  if (distanceFromCenter < avatarRadius + 40) {
                    const bounceMultiplier = 1.8; // How much to bounce
                    const normalizedX = x / distanceFromCenter;
                    const normalizedY = y / distanceFromCenter;
                    
                    x = normalizedX * (avatarRadius + 40) * bounceMultiplier;
                    y = normalizedY * (avatarRadius + 40) * bounceMultiplier;
                  }
                  
                  keyframes.push({ x, y });
                }
                
                return keyframes;
              };
              
              const bounceKeyframes = createBounceKeyframes();
              
              return (
                <motion.div
                  key={index}
                  className={clsx(
                    "absolute",
                    skill.includes('吹牛逼') ? "pointer-events-auto" : "pointer-events-none"
                  )}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 5
                  }}
                  animate={{
                    x: bounceKeyframes.map(kf => kf.x),
                    y: bounceKeyframes.map(kf => kf.y),
                  }}
                  transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.span
                    className={clsx(
                      "text-lg font-medium px-4 py-3 rounded-full whitespace-nowrap inline-block",
                      skill.includes('吹牛逼') && "cursor-pointer transition-all duration-300"
                    )}
                    style={{
                      ...getSkillStyle(skill),
                      fontSize: '1.125rem',
                      backdropFilter: 'blur(4px)',
                      boxShadow: `0 2px 8px ${tokens.colors.background.primary}66`
                    }}
                    // Add a subtle bounce animation to the tagline itself when it bounces
                    animate={{
                      scale: skill.includes('吹牛逼') && clickedSkills.has(skill) 
                        ? [1, 1.2, 1, 1.2, 1, 1, 1, 1, 1] // Bigger bounce for clicked easter egg
                        : [1, 1.05, 1, 1.05, 1, 1, 1, 1, 1], // Normal bounce
                    }}
                    transition={{
                      duration: speed,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    onClick={() => handleSkillClick(skill)}
                    whileHover={skill.includes('吹牛逼') ? { 
                      scale: 1.1,
                      rotate: [0, -2, 2, -2, 0], // Wiggle effect
                    } : {}}
                    whileTap={skill.includes('吹牛逼') ? { 
                      scale: 0.8, // Contract animation on click
                      rotate: 180, // Spin when clicked
                    } : {}}
                    initial={{ scale: 1 }}
                  >
                    {getDisplaySkill(skill.trim())}
                  </motion.span>
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