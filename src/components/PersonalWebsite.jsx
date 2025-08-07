import AvatarHero from '../sections/AvatarHero';
import SocialStrip from '../sections/SocialStrip';
import ResumeTimeline from '../sections/ResumeTimeline';
import PortfolioGallery from '../sections/PortfolioGallery';
import ContactSection from '../sections/ContactSection';
import GlobalFooter from '../sections/GlobalFooter';
import { portfolioData } from '../data/portfolio';
import { tokens } from '../../design-system/index.js';

const PersonalWebsite = () => {
  return (
    <main 
      className="min-h-screen" 
      style={{ 
        backgroundColor: tokens.colors.background.primary,
        color: tokens.colors.primary.text,
        fontFamily: tokens.typography.fontFamily.primary.join(', ')
      }}
    >
      <AvatarHero />
      
      <SocialStrip 
        socialLinks={portfolioData.social}
      />
      
      <ResumeTimeline 
        timelineData={portfolioData.timeline}
      />
      
      <PortfolioGallery 
        projects={portfolioData.projects}
      />
      
      <ContactSection 
        email={portfolioData.personal.email}
        location={portfolioData.personal.location}
      />
      
      <GlobalFooter />
    </main>
  );
};

export default PersonalWebsite;