import { motion } from 'framer-motion';
import clsx from 'clsx';
import { tokens } from '../styles/tokens';

const DesignSystemPreview = () => {
  const colorPalettes = [
    { name: 'Primary', colors: tokens.colors.primary },
    { name: 'Accent', colors: tokens.colors.accent },
    { name: 'Neutral Gray', colors: tokens.colors.neutral.gray },
    { 
      name: 'Figma Text Colors', 
      colors: {
        primary: tokens.colors.figma.text.primary,
        secondary: tokens.colors.figma.text.secondary,
        muted: tokens.colors.figma.text.muted,
      }
    },
    { 
      name: 'Figma Backgrounds', 
      colors: {
        primary: tokens.colors.figma.background.primary,
        secondary: tokens.colors.figma.background.secondary,
        accent: tokens.colors.figma.background.accent,
      }
    },
  ];

  const typographySamples = [
    { size: '6xl', weight: 'bold', text: '超大标题 6XL' },
    { size: '4xl', weight: 'bold', text: '大标题 4XL' },
    { size: '2xl', weight: 'semibold', text: '中标题 2XL' },
    { size: 'lg', weight: 'medium', text: '正文大 LG' },
    { size: 'base', weight: 'normal', text: '正文基础 Base' },
    { size: 'sm', weight: 'normal', text: '小文字 SM' },
  ];

  const spacingSamples = Object.entries(tokens.spacing);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-slate-50 py-12 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            设计系统预览
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            展示项目中使用的设计令牌、组件和样式规范
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Color Palette */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">色彩系统</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {colorPalettes.map((palette) => (
                <div key={palette.name} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {palette.name}
                  </h3>
                  <div className="grid grid-cols-5 gap-2">
                    {Object.entries(palette.colors).map(([shade, color]) => (
                      <div key={shade} className="text-center">
                        <div 
                          className="w-full aspect-square rounded-lg mb-2 border border-slate-200"
                          style={{ backgroundColor: color }}
                        />
                        <p className="text-xs text-slate-600 font-mono">{shade}</p>
                        <p className="text-xs text-slate-400 font-mono">{color}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Typography */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">字体系统</h2>
            <div className="space-y-8">
              {/* Original Typography */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">基础字体</h3>
                <div className="space-y-6">
                  {typographySamples.map((sample, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0">
                      <div className="flex-1">
                        <p 
                          className={clsx(
                            `text-${sample.size}`,
                            `font-${sample.weight}`,
                            'text-slate-900'
                          )}
                        >
                          {sample.text}
                        </p>
                      </div>
                      <div className="text-right text-sm text-slate-500 font-mono ml-4">
                        <p>size: {sample.size}</p>
                        <p>weight: {sample.weight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Figma Typography */}
              <div className="bg-slate-900 p-8 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-200 mb-6">Figma 设计系统字体</h3>
                <div className="space-y-6">
                  <div className="border-b border-slate-700 pb-4">
                    <p 
                      style={{
                        fontSize: tokens.typography.figma.heading.fontSize,
                        fontWeight: tokens.typography.figma.heading.fontWeight,
                        lineHeight: tokens.typography.figma.heading.lineHeight,
                        letterSpacing: tokens.typography.figma.heading.letterSpacing,
                        color: tokens.colors.figma.text.primary
                      }}
                    >
                      Built for—and proven by—businesses of all sizes
                    </p>
                    <p className="text-xs text-slate-400 mt-2 font-mono">Figma Heading Style</p>
                  </div>
                  
                  <div className="border-b border-slate-700 pb-4">
                    <p 
                      style={{
                        fontSize: tokens.typography.figma.subheading.fontSize,
                        fontWeight: tokens.typography.figma.subheading.fontWeight,
                        lineHeight: tokens.typography.figma.subheading.lineHeight,
                        letterSpacing: tokens.typography.figma.subheading.letterSpacing,
                        color: tokens.colors.figma.text.primary
                      }}
                    >
                      Agent architecture: How AI decision-making drives business impact
                    </p>
                    <p className="text-xs text-slate-400 mt-2 font-mono">Figma Subheading Style</p>
                  </div>
                  
                  <div className="border-b border-slate-700 pb-4">
                    <p 
                      style={{
                        fontSize: tokens.typography.figma.body.fontSize,
                        fontWeight: tokens.typography.figma.body.fontWeight,
                        lineHeight: tokens.typography.figma.body.lineHeight,
                        letterSpacing: tokens.typography.figma.body.letterSpacing,
                        color: tokens.colors.figma.text.secondary
                      }}
                    >
                      Over 10,000 companies, from startups to the Fortune 500, run their business on Retool.
                    </p>
                    <p className="text-xs text-slate-400 mt-2 font-mono">Figma Body Text Style</p>
                  </div>
                  
                  <div>
                    <p 
                      style={{
                        fontSize: tokens.typography.figma.caption.fontSize,
                        fontWeight: tokens.typography.figma.caption.fontWeight,
                        lineHeight: tokens.typography.figma.caption.lineHeight,
                        letterSpacing: tokens.typography.figma.caption.letterSpacing,
                        textTransform: tokens.typography.figma.caption.textTransform,
                        color: tokens.colors.figma.text.secondary
                      }}
                    >
                      PLATFORM
                    </p>
                    <p className="text-xs text-slate-400 mt-2 font-mono">Figma Caption/Label Style</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Spacing */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">间距系统</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {spacingSamples.map(([name, value]) => (
                  <div key={name} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div 
                        className="bg-blue-500 rounded"
                        style={{ width: value, height: value }}
                      />
                      <div>
                        <p className="font-medium text-slate-900">{name}</p>
                        <p className="text-sm text-slate-500 font-mono">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Components Preview */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">组件展示</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Buttons */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">按钮</h3>
                <div className="space-y-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    主要按钮
                  </button>
                  <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    次要按钮
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                    普通按钮
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">卡片</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">基础卡片</h4>
                    <p className="text-sm text-slate-600">这是一个基础卡片样式的示例</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">填充卡片</h4>
                    <p className="text-sm text-slate-600">这是一个带背景色的卡片样式</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Shadows */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">阴影系统</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(tokens.shadows).map(([name, shadow]) => (
                <div key={name} className="text-center">
                  <div 
                    className="w-full aspect-square bg-white rounded-lg mb-3"
                    style={{ boxShadow: shadow }}
                  />
                  <p className="text-sm font-medium text-slate-900">{name}</p>
                  <p className="text-xs text-slate-500 font-mono break-all">{shadow}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignSystemPreview;