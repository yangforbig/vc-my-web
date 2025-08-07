import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SiLinkedin, SiX, SiDiscord } from 'react-icons/si';

const FigmaFooter = ({ className }) => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Agents', badge: 'New' },
        { name: 'AI primitives', badge: 'New' },
        { name: 'App builder' },
        { name: 'Mobile apps' },
        { name: 'Workflows' },
        { name: 'Database' },
        { name: 'External apps' },
        { name: 'Self-hosting' }
      ]
    },
    {
      title: 'Audience',
      links: [
        { name: 'Enterprise' },
        { name: 'Startups' },
        { name: 'Agencies' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Use cases' },
        { name: 'Integrations' },
        { name: 'Templates' },
        { name: 'Utilities' },
        { name: 'Blog' },
        { name: 'Reads and reports' },
        { name: 'Customer stories' },
        { name: 'Videos' }
      ]
    },
    {
      title: 'Developers',
      links: [
        { name: 'Documentation' },
        { name: 'Retool University' },
        { name: 'Hire a developer' },
        { name: 'Changelog' },
        { name: 'Status' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About' },
    { name: 'Careers' },
    { name: 'Partners' },
    { name: 'Newsroom' }
  ];

  const legalLinks = [
    'Terms of use',
    'Privacy policy',
    'Security',
    'Trust Center',
    'Site map'
  ];

  return (
    <motion.footer 
      className={clsx(
        'bg-slate-900 text-slate-300 py-16 px-6',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Platform, Audience, Resources, Developers Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider opacity-60">
                {section.title}
              </h3>
              <div className="relative">
                <div className="absolute left-0 top-0 w-px h-full bg-slate-700 opacity-20" />
                <ul className="pl-4 space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        <span className="text-sm font-light">
                          {link.name}
                        </span>
                        {link.badge && (
                          <span className="px-1.5 py-0.5 text-xs font-medium bg-green-900 text-slate-300 rounded uppercase">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Company Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-4">
              <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider opacity-60">
                Company
              </h3>
              <div className="relative">
                <div className="absolute left-0 top-0 w-px h-full bg-slate-700 opacity-20" />
                <ul className="pl-4 space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm font-light text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <motion.a
                href="#"
                className="block w-full px-5 py-2.5 bg-slate-200 text-slate-900 text-sm font-medium text-center rounded-full hover:bg-white transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start for free
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-5 py-2.5 bg-slate-700 text-slate-200 text-sm font-medium text-center rounded-full hover:bg-slate-600 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a demo
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-slate-300 transition-colors duration-200"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-300 transition-colors duration-200"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-300 transition-colors duration-200"
              >
                <SiDiscord className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-slate-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-xs text-slate-400 hover:text-slate-300 transition-colors duration-200 uppercase tracking-wider"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-slate-400">
              © Retool 2025
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FigmaFooter;