// 🎨 Design System Showcase
// Clean showcase of the Figma-based design system

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Heart, Download } from 'lucide-react';
import { Button, Input, Card, tokens, useBreakpoint } from '../design-system/index.js';

const DesignSystemShowcase = () => {
  const [inputValue, setInputValue] = useState('');
  const currentBreakpoint = useBreakpoint();

  return (
    <div
      className="min-h-screen p-6"
      style={{ backgroundColor: tokens.colors.background.primary }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 
            className="text-4xl font-light mb-4"
            style={{ 
              color: tokens.colors.primary.text,
              ...tokens.typography.styles.heading 
            }}
          >
            Figma Design System
          </h1>
          <p 
            className="text-lg opacity-80"
            style={{ 
              color: tokens.colors.primary.textSecondary,
              ...tokens.typography.styles.body 
            }}
          >
            Built from detailed Figma analysis
          </p>
          <div className="mt-4">
            <span style={{ color: tokens.colors.primary.textMuted }}>
              Breakpoint: <strong>{currentBreakpoint}</strong>
            </span>
          </div>
        </header>

        {/* Colors */}
        <section className="mb-12">
          <h2 
            className="text-2xl font-light mb-6"
            style={{ color: tokens.colors.primary.text }}
          >
            Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(tokens.colors.primary).map(([name, color]) => (
              <div key={name} className="text-center">
                <div 
                  className="w-16 h-16 rounded-lg mx-auto mb-2"
                  style={{ backgroundColor: color }}
                />
                <p className="text-sm" style={{ color: tokens.colors.primary.text }}>
                  {name}
                </p>
                <p className="text-xs font-mono" style={{ color: tokens.colors.primary.textMuted }}>
                  {color}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 
            className="text-2xl font-light mb-6"
            style={{ color: tokens.colors.primary.text }}
          >
            Typography
          </h2>
          <div className="space-y-4">
            {Object.entries(tokens.typography.styles).slice(0, 4).map(([name, style]) => (
              <div key={name}>
                <p style={{ ...style, color: tokens.colors.primary.text }}>
                  {name}: The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 
            className="text-2xl font-light mb-6"
            style={{ color: tokens.colors.primary.text }}
          >
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={<Download className="w-4 h-4" />}>
              Download
            </Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="mb-12">
          <h2 
            className="text-2xl font-light mb-6"
            style={{ color: tokens.colors.primary.text }}
          >
            Inputs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              label="Email"
              type="email"
              placeholder="Enter email"
              leftIcon={<Mail className="w-4 h-4" />}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input 
              label="Search"
              placeholder="Search..."
              leftIcon={<Search className="w-4 h-4" />}
              variant="filled"
            />
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 
            className="text-2xl font-light mb-6"
            style={{ color: tokens.colors.primary.text }}
          >
            Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="bordered">
              <h3 className="text-lg mb-2" style={{ color: tokens.colors.primary.text }}>
                Bordered Card
              </h3>
              <p style={{ color: tokens.colors.primary.textSecondary }}>
                This is a bordered card with clean styling.
              </p>
            </Card>

            <Card variant="filled">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-6 h-6" style={{ color: tokens.colors.primary.text }} />
                <h3 className="text-lg" style={{ color: tokens.colors.primary.text }}>
                  Filled Card
                </h3>
              </div>
              <p style={{ color: tokens.colors.primary.textSecondary }}>
                A filled card with background color.
              </p>
            </Card>

            <Card variant="elevated" interactive onClick={() => alert('Clicked!')}>
              <div className="text-center py-4">
                <h3 className="text-lg mb-2" style={{ color: tokens.colors.primary.text }}>
                  Interactive
                </h3>
                <p style={{ color: tokens.colors.primary.textSecondary }}>
                  Click me!
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t" style={{ borderColor: tokens.colors.ui.border }}>
          <p style={{ color: tokens.colors.primary.textMuted }}>
            Design System based on Figma analysis
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DesignSystemShowcase;