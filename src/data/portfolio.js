// Portfolio Data
export const portfolioData = {
  personal: {
    name: "Noma",
    tagline: "全栈抄袭者 · 用户体验师 · Figma搬运工 · React调教师 · AI好伙伴 · 吹牛逼",
    bio: "专注于创建优雅、高效的数字体验。热爱技术创新和用户体验设计。",
    email: "hello@example.com",
    location: "北京，中国"
  },
  
  social: [
    {
      platform: "GitHub",
      url: "https://github.com",
      icon: "github"
    },
    {
      platform: "X",
      url: "https://x.com",
      icon: "x"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin"
    },
    {
      platform: "Dribbble",
      url: "https://dribbble.com",
      icon: "dribbble"
    }
  ],
  
  timeline: [
    {
      id: 1,
      year: "2024",
      title: "高级前端开发工程师",
      company: "科技创新公司",
      description: "负责大型 React 应用的架构设计和开发，提升用户体验和性能优化。",
      type: "work"
    },
    {
      id: 2,
      year: "2023",
      title: "全栈开发工程师",
      company: "数字化解决方案公司",
      description: "开发和维护多个客户项目，涵盖前端、后端和数据库设计。",
      type: "work"
    },
    {
      id: 3,
      year: "2022",
      title: "计算机科学学士",
      company: "北京理工大学",
      description: "主修软件工程，专注于 Web 开发和用户界面设计。",
      type: "education"
    },
    {
      id: 4,
      year: "2021",
      title: "前端开发实习生",
      company: "互联网创业公司",
      description: "参与多个项目的前端开发，学习现代 Web 开发技术栈。",
      type: "work"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "电商平台重构",
      description: "使用 React 和 Node.js 重构大型电商平台，提升性能 40%",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      image: null, // 占位符
      url: "#",
      featured: true
    },
    {
      id: 2,
      title: "移动端 App 设计系统",
      description: "为金融科技公司设计完整的设计系统和组件库",
      tags: ["Figma", "React Native", "TypeScript"],
      image: null,
      url: "#",
      featured: true
    },
    {
      id: 3,
      title: "AI 驱动的数据分析工具",
      description: "开发智能数据可视化平台，帮助企业做出数据驱动的决策",
      tags: ["Python", "React", "D3.js", "Machine Learning"],
      image: null,
      url: "#",
      featured: false
    },
    {
      id: 4,
      title: "开源组件库",
      description: "维护和贡献开源 React 组件库，被 1000+ 开发者使用",
      tags: ["React", "TypeScript", "Storybook", "npm"],
      image: null,
      url: "#",
      featured: false
    }
  ]
};