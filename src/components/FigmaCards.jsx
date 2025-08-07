import { motion } from 'framer-motion';
import clsx from 'clsx';

// Border Style Card Component
const BorderCard = ({ title, subtitle, description, className }) => (
  <motion.div
    className={clsx(
      'relative bg-transparent border border-slate-600 rounded-none overflow-hidden',
      'hover:border-slate-500 transition-colors duration-300',
      className
    )}
    whileHover={{ y: -2 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="p-6 space-y-4">
      {subtitle && (
        <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
          {subtitle}
        </span>
      )}
      <h3 className="text-lg font-light text-slate-200 leading-tight">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  </motion.div>
);

// Fill Style Card Component
const FillCard = ({ title, company, metric, logo, className }) => (
  <motion.div
    className={clsx(
      'relative bg-slate-800 border border-slate-600 rounded-none overflow-hidden',
      'hover:bg-slate-750 transition-colors duration-300',
      className
    )}
    whileHover={{ y: -2 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="p-6 space-y-6">
      <h3 className="text-lg font-light text-slate-200 leading-tight">
        {title}
      </h3>
      
      {/* Company Logo Placeholder */}
      <div className="flex items-center justify-start">
        <div className="px-4 py-2 bg-slate-700 rounded border border-slate-600">
          <div className="flex items-center justify-center h-12">
            {logo ? (
              <img src={logo} alt={company} className="h-full object-contain" />
            ) : (
              <div className="text-slate-400 font-medium text-sm">
                {company}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {metric && (
        <div className="text-xs text-slate-400 uppercase tracking-wider">
          {metric}
        </div>
      )}
    </div>
  </motion.div>
);

// Image Style Card Component
const ImageCard = ({ title, author, image, featured = false, className }) => (
  <motion.div
    className={clsx(
      'relative border border-slate-600 rounded-none overflow-hidden',
      'hover:border-slate-500 transition-colors duration-300',
      className
    )}
    whileHover={{ y: -2 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Image Section */}
    <div className="relative aspect-video bg-slate-700">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-slate-500 text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-slate-600 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
            <p className="text-sm">Article image</p>
          </div>
        </div>
      )}
      {featured && (
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 text-xs font-medium bg-yellow-600 text-yellow-100 rounded uppercase">
            Featured
          </span>
        </div>
      )}
    </div>
    
    {/* Content Section */}
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-light text-slate-200 leading-tight">
        {title}
      </h3>
      {author && (
        <p className="text-xs text-slate-400 uppercase tracking-wider">
          {author}
        </p>
      )}
    </div>
  </motion.div>
);

// Main Cards Container Component
const FigmaCards = ({ className }) => {
  const borderCards = [
    {
      title: 'Learn and expand your skillset',
      subtitle: 'Retool university',
      description: 'Comprehensive courses and tutorials'
    },
    {
      title: 'Engage, respond, and get support',
      subtitle: 'Community forum',
      description: 'Connect with other developers'
    },
    {
      title: 'Meet, discuss, and chat with others',
      subtitle: 'Discord',
      description: 'Real-time community chat'
    },
    {
      title: 'Read, explore, and get API specs',
      subtitle: 'Docs',
      description: 'Complete documentation and guides'
    }
  ];

  const fillCards = [
    {
      title: '$6M and 36,000+ hours saved',
      company: 'DoorDash',
      metric: 'Enterprise customer'
    },
    {
      title: '$8M and 20,000+ hours saved',
      company: 'Ramp',
      metric: 'Fintech leader'
    },
    {
      title: '10x increase in patients treated',
      company: 'UTMB Health',
      metric: 'Healthcare innovation'
    },
    {
      title: '$3M+ profit generated and 80% faster development',
      company: 'Zeus',
      metric: 'PropTech success'
    },
    {
      title: '200+ users on centralized data app',
      company: 'Holland & Barrett',
      metric: 'Retail transformation'
    },
    {
      title: '10x reduction in dev time across 1600 studios',
      company: 'OrangeTheory',
      metric: 'Fitness franchise'
    }
  ];

  const imageCards = [
    {
      title: 'Software developers still matter in the age of AI. Here\'s why.',
      author: 'By Taylor Singletary',
      featured: true
    },
    {
      title: 'Agent architecture: How AI decision-making drives business impact',
      author: 'By Kent Walters'
    },
    {
      title: 'The true cost of AI agents: a case for hourly pricing',
      author: 'By Todd Paoletti'
    }
  ];

  return (
    <div className={clsx('space-y-16', className)}>
      {/* Border Style Cards */}
      <section>
        <motion.h2 
          className="text-2xl font-light text-slate-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Community Resources
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {borderCards.map((card, index) => (
            <BorderCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          ))}
        </div>
      </section>

      {/* Fill Style Cards */}
      <section>
        <motion.h2 
          className="text-2xl font-light text-slate-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Customer Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fillCards.map((card, index) => (
            <FillCard
              key={index}
              title={card.title}
              company={card.company}
              metric={card.metric}
            />
          ))}
        </div>
      </section>

      {/* Image Style Cards */}
      <section>
        <motion.h2 
          className="text-2xl font-light text-slate-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Latest Articles
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ImageCard
            title={imageCards[0].title}
            author={imageCards[0].author}
            featured={imageCards[0].featured}
            className="lg:col-span-2"
          />
          <div className="space-y-6">
            {imageCards.slice(1).map((card, index) => (
              <ImageCard
                key={index + 1}
                title={card.title}
                author={card.author}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { BorderCard, FillCard, ImageCard };
export default FigmaCards;