import { motion } from 'framer-motion';
import clsx from 'clsx';
import FigmaFooter from './FigmaFooter';
import FigmaCards from './FigmaCards';
import FigmaButtons, { PrimaryButton, SecondaryButton } from './FigmaButtons';

const FigmaInspiredPage = ({ className }) => {
  return (
    <div className={clsx('min-h-screen bg-slate-900', className)}>
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-200 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Built for—and proven by<br />
            —businesses of all sizes
          </motion.h1>
          
          <motion.p 
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Over 10,000 companies, from startups to the Fortune 500, run their business on our platform.
          </motion.p>

          {/* Company Logos Placeholder */}
          <motion.div 
            className="flex justify-center items-center gap-12 mb-12 opacity-60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {['Company A', 'Company B', 'Company C'].map((company, index) => (
              <div key={index} className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-xs text-slate-400">{company}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PrimaryButton className="px-8 py-3 text-base">
              Start for free
            </PrimaryButton>
            <SecondaryButton className="px-8 py-3 text-base">
              Book a demo
            </SecondaryButton>
          </motion.div>
        </div>
      </section>

      {/* Cards Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FigmaCards />
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-light text-slate-200 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join a community of<br />
            thousands of developers<br />
            building apps on Retool
          </motion.h2>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PrimaryButton className="px-8 py-3 text-base">
              Join Community
            </PrimaryButton>
            <SecondaryButton className="px-8 py-3 text-base">
              View Documentation
            </SecondaryButton>
          </motion.div>
        </div>
      </section>

      {/* Button Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FigmaButtons />
        </div>
      </section>

      {/* Footer */}
      <FigmaFooter />
    </div>
  );
};

export default FigmaInspiredPage;