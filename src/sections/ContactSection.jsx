import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';
import { Mail, Send, MapPin } from 'lucide-react';
import { Button, Input, tokens } from '../design-system/index.js';

const ContactSection = ({ email, location, className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.section 
      className={clsx(
        'py-20 px-6 relative',
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
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at center, ${tokens.colors.background.accent}, transparent 70%)`
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              ...tokens.typography.styles.heading,
              color: tokens.colors.primary.text,
              fontSize: '3rem',
              textShadow: `0 0 20px ${tokens.colors.background.accent}40`
            }}
          >
            联系我
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{
              ...tokens.typography.styles.body,
              color: tokens.colors.primary.textSecondary,
              fontSize: '1.25rem',
              lineHeight: '1.6'
            }}
          >
            有项目合作或工作机会？欢迎与我取得联系
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 
              className="text-xl font-semibold mb-6"
              style={{
                ...tokens.typography.styles.subheading,
                color: tokens.colors.primary.text
              }}
            >
              获取联系
            </h3>
            
            <div className="space-y-4">
              {/* Email */}
              <motion.a
                href={`mailto:${email}`}
                className={clsx(
                  'flex items-center gap-4 p-4',
                  'bg-slate-50 rounded-lg',
                  'hover:bg-slate-100 transition-colors duration-200',
                  'group cursor-pointer'
                )}
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">邮箱</p>
                  <p className="font-medium text-slate-900">{email}</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">位置</p>
                  <p className="font-medium text-slate-900">{location}</p>
                </div>
              </motion.div>
            </div>

            {/* Quick Email Button */}
            <motion.div className="mt-8">
              <Button
                as="a"
                href={`mailto:${email}?subject=项目合作咨询&body=您好，我想与您讨论一个项目合作机会...`}
                variant="accent"
                leftIcon={<Mail className="w-4 h-4" />}
              >
                快速发送邮件
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 
              className="text-xl font-semibold mb-6"
              style={{ 
                color: tokens.colors.primary.text,
                ...tokens.typography.styles.large
              }}
            >
              发送消息
            </h3>

            <form className="contact-form space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <Input
                label="姓名"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="请输入您的姓名"
                required
              />

              {/* Email Field */}
              <Input
                label="邮箱"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="请输入您的邮箱"
                leftIcon={<Mail className="w-4 h-4" />}
                required
              />

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  style={{ 
                    color: tokens.colors.primary.text,
                    fontFamily: tokens.typography.styles.caption.fontFamily,
                    fontSize: tokens.typography.styles.caption.fontSize,
                    fontWeight: tokens.typography.styles.caption.fontWeight,
                  }}
                >
                  消息内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-200 resize-vertical"
                  style={{
                    backgroundColor: tokens.colors.background.secondary,
                    color: tokens.colors.primary.text,
                    borderColor: tokens.colors.ui.border,
                    border: '1px solid',
                    fontFamily: tokens.typography.styles.body.fontFamily,
                    fontSize: tokens.typography.styles.body.fontSize,
                  }}
                  placeholder="请告诉我您的项目需求或合作想法..."
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                width="full"
                leftIcon={<Send className="w-4 h-4" />}
              >
                发送消息
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;