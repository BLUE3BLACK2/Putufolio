import { ProjectData, SkillCategory, ShowcaseItem, EducationInfo, InterestItem, SocialLink } from '@/types';

export const PERSONAL_INFO = {
  name: 'Putu Rubby Aprilia Artana',
  nickname: 'Rubby',
  fullName: 'Putu Rubby Aprilia Artana',
  role: 'Fullstack Developer',
  tagline: 'Building ideas with code, AI & creativity.',
  heroBio: 'I learn, build, and experiment with AI and Web technologies to create meaningful digital experiences.',
  aboutBio: 'I am a 5th-semester Computer Science student at Universitas Pendidikan Ganesha. My current focus is Fullstack Development, while I continue exploring AI, Web Development, IoT, and Game Development.',
  stats: [
    { label: 'Current Status', value: '5th Semester', detail: 'Academic Progress', color: 'from-amber-400 to-yellow-500' },
    { label: 'Major Field', value: 'Computer Science', detail: 'Ilmu Komputer', color: 'from-blue-500 to-indigo-600' },
    { label: 'Institution', value: 'Undiksha', detail: 'Universitas Pendidikan Ganesha', color: 'from-emerald-400 to-teal-600' },
    { label: 'Core Specialty', value: 'Fullstack Focus', detail: 'Web · AI · IoT · Game', color: 'from-rose-500 to-red-500' },
  ],
  interests: ['AI', 'Web Development', 'IoT', 'Game Development'],
  contact: {
    email: 'rbyyoi@gmail.com',
    whatsapp: '082144282783',
    whatsappUrl: 'https://wa.me/6282144282783?text=Hi%20Rubby,%20I%20visited%20your%20portfolio!',
    instagram: 'yoorajinky',
    instagramUrl: 'https://instagram.com/yoorajinky',
    github: 'BLUE3BLACK2',
    githubUrl: 'https://github.com/BLUE3BLACK2',
    linkedin: 'Putu Rubby Aprilia Artana',
    linkedinUrl: 'https://www.linkedin.com/in/putu-rubby-aprilia-artana',
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    username: 'BLUE3BLACK2',
    url: 'https://github.com/BLUE3BLACK2',
    icon: 'Github',
    description: 'Code repositories & open source experiments'
  },
  {
    name: 'LinkedIn',
    username: 'Putu Rubby Aprilia Artana',
    url: 'https://www.linkedin.com/in/putu-rubby-aprilia-artana',
    icon: 'Linkedin',
    description: 'Professional background & connections'
  },
  {
    name: 'Instagram',
    username: '@yoorajinky',
    url: 'https://instagram.com/yoorajinky',
    icon: 'Instagram',
    description: 'Creative journey & updates'
  },
  {
    name: 'WhatsApp',
    username: '082144282783',
    url: 'https://wa.me/6282144282783?text=Hi%20Rubby,%20I%20saw%20your%20portfolio!',
    icon: 'MessageCircle',
    description: 'Direct messaging & quick collaboration'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and dynamic user interfaces with modern web standards.',
    color: '#2563EB',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    skills: [
      { name: 'HTML', description: 'Semantic structure, accessibility standards & SEO optimization.', iconName: 'FileCode2', tag: 'Structure' },
      { name: 'CSS', description: 'Modern responsive layouts, Flexbox, Grid & animations.', iconName: 'Palette', tag: 'Styling' },
      { name: 'JavaScript', description: 'ES6+ modern syntax, asynchronous logic & DOM APIs.', iconName: 'Terminal', tag: 'Core JS' },
      { name: 'React', description: 'Component-driven UI, state hooks, and reusability patterns.', iconName: 'Atom', tag: 'Framework' },
      { name: 'Next.js', description: 'App router architecture, server components & performance.', iconName: 'Zap', tag: 'Fullstack' },
    ]
  },
  {
    title: 'Backend Development',
    description: 'Server-side logic, routing architectures, and scalable API endpoints.',
    color: '#059669',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    skills: [
      { name: 'Node.js', description: 'Event-driven JavaScript runtime for backend services & APIs.', iconName: 'Server', tag: 'Runtime' },
      { name: 'PHP', description: 'Server-side scripting, MVC design patterns & web backends.', iconName: 'Code', tag: 'Backend' },
    ]
  },
  {
    title: 'Database Management',
    description: 'Relational data structures, efficient queries, and data integrity.',
    color: '#D97706',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    skills: [
      { name: 'MySQL', description: 'Relational database schema modeling, queries, indexing & joins.', iconName: 'Database', tag: 'SQL' },
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Human-centered design, interactive wireframes, and intuitive user experiences.',
    color: '#7C3AED',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    skills: [
      { name: 'Figma', description: 'Vector UI design, auto-layout, design tokens & component libraries.', iconName: 'Layout', tag: 'Design' },
      { name: 'Design Thinking', description: 'User-centric empathy mapping, problem framing & iteration.', iconName: 'Lightbulb', tag: 'Methodology' },
      { name: 'Prototyping', description: 'Interactive clickable flows and micro-interaction mockups.', iconName: 'Sparkles', tag: 'Interaction' },
    ]
  },
  {
    title: 'Developer Tools',
    description: 'Workflows, version management, and visual productivity utilities.',
    color: '#DC2626',
    badgeBg: 'bg-red-50 text-red-700 border-red-200',
    skills: [
      { name: 'Git', description: 'Distributed version control, branching workflows & collaboration.', iconName: 'GitBranch', tag: 'VCS' },
      { name: 'Visual Studio Code', description: 'Configured development environment, debugging & extensions.', iconName: 'Code2', tag: 'IDE' },
      { name: 'Canva', description: 'Rapid graphic generation, presentation design & visual assets.', iconName: 'Image', tag: 'Graphics' },
    ]
  }
];

export const FEATURED_PROJECT: ProjectData = {
  title: 'ROCKY',
  label: 'FEATURED PROJECT',
  tagline: 'AI-Guided Creative Waste Transformation Platform',
  description: 'Rocky is a concept that encourages people to transform everyday waste into useful new objects through creative crafting and AI-assisted guidance.',
  problem: 'Waste continues to accumulate around us, while many reusable materials are simply thrown away without awareness of their creative upcycling potential.',
  solution: 'Rocky helps users identify waste through image scanning and provides crafting ideas for transforming the material into something useful and beautiful.',
  technology: 'Image Scanning + AI',
  role: 'Leader',
  thumbnail: '/images/Rocky.png',
  uiPreview: '/images/Rocky-ui.png',
  caseStudy: {
    problem: 'Waste accumulation and low awareness of creative reuse across households and student communities.',
    idea: 'Use AI-powered image scanning to recognize materials and suggest ways to reuse them creatively with accessible tools.',
    role: 'Project Leader — Led conceptualization, product architecture, user journey mapping, and AI prompt engineering.',
    process: [
      {
        number: '01',
        title: 'Scan',
        description: 'User captures or uploads a photo of discarded waste or unused household materials.',
        icon: 'Scan'
      },
      {
        number: '02',
        title: 'Identify',
        description: 'AI vision model analyzes material type, texture, shape, and structural properties.',
        icon: 'Search'
      },
      {
        number: '03',
        title: 'Get Ideas',
        description: 'Intelligent suggestion engine generates ranked upcycling ideas matching skill levels.',
        icon: 'Lightbulb'
      },
      {
        number: '04',
        title: 'Craft',
        description: 'Step-by-step interactive instructions guide users through cutting, folding, or assembly.',
        icon: 'Hammer'
      },
      {
        number: '05',
        title: 'Reuse',
        description: 'Transformed functional items prevent landfill waste and promote circular sustainability.',
        icon: 'Sparkles'
      }
    ]
  },
  githubUrl: '',
  demoUrl: '',
  status: 'In Development'
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'ui-design-showcase',
    title: 'Digital Art & Visual Exploration',
    category: 'Art',
    description: 'A collection of visual studies created through illustration, composition, and creative experimentation.',
    image: '/images/UI-Design.png',
    tags: ['Digital Art', 'Visual Study', 'Composition'],
    accentColor: '#2563EB'
  },
  {
    id: 'poster-future-technology',
    title: 'Technology & Future Possibilities',
    category: 'Poster',
    description: 'An early visual exploration connecting artificial intelligence, renewable energy, transportation, and education.',
    image: '/images/creative/poster-01-future-technology.webp',
    tags: ['Technology', 'AI', 'Digital Collage'],
    accentColor: '#2563EB'
  },
  {
    id: 'illustration-showcase',
    title: 'Digital Illustrations & Creative Assets',
    category: 'Art',
    description: 'Custom vector artwork, character design sketches, and graphic storytelling elements.',
    image: '/images/Illustration-1.png',
    tags: ['Digital Art', 'Vector', 'Concept Art', 'Creative'],
    accentColor: '#EF4444'
  },
  {
    id: 'poster-indonesian-heritage',
    title: 'Ini Indonesia, Ini Rumah Kita',
    category: 'Poster',
    description: 'A cultural poster celebrating the richness of Indonesian traditions, performances, flora, and fauna.',
    image: '/images/creative/poster-02-indonesian-heritage.webp',
    tags: ['Culture', 'Indonesia', 'Digital Illustration'],
    accentColor: '#B91C1C'
  },
  {
    id: 'poster-food-heritage',
    title: 'Warisan Pangan, Bangsa Kuat',
    category: 'Poster',
    description: 'A campaign illustration encouraging people to preserve diverse, nutritious, locally sourced food traditions.',
    image: '/images/creative/poster-03-food-heritage.webp',
    tags: ['Food Heritage', 'Campaign', 'Illustration'],
    accentColor: '#D97706'
  },
  {
    id: 'poster-ocean-guardian',
    title: 'Ocean Guardian',
    category: 'Poster',
    description: 'A concept poster presenting an autonomous bio-acoustic robot for coral reef restoration.',
    image: '/images/creative/poster-04-ocean-guardian.webp',
    tags: ['Ocean', 'Innovation', 'Sustainability'],
    accentColor: '#0369A1'
  },
  {
    id: 'poster-waste-mindset',
    title: 'Ubah Mindset Sampahmu',
    category: 'Poster',
    description: 'An environmental campaign poster about personal responsibility and changing everyday waste habits.',
    image: '/images/creative/poster-05-waste-mindset.webp',
    tags: ['Environment', 'Campaign', 'Waste Awareness'],
    accentColor: '#EA580C'
  }
];

export const EDUCATION_DATA: EducationInfo = {
  institution: 'Universitas Pendidikan Ganesha',
  program: 'Computer Science / Ilmu Komputer',
  startYear: '2024',
  status: '5th Semester',
  degree: 'Bachelor of Computer Science (S.Kom)',
  highlights: [
    'Specializing in Fullstack Web Development & Software Engineering.',
    'Actively exploring Artificial Intelligence, Neural Vision, and Agentic workflows.',
    'Experimenting with Internet of Things (IoT) sensors and Microcontroller architectures.',
    'Designing interactive mechanics and logic for Game Development experiments.'
  ]
};

export const INTERESTS_DATA: InterestItem[] = [
  {
    title: 'Artificial Intelligence',
    description: 'Exploring machine learning models, computer vision for material recognition, and LLM-powered interfaces.',
    icon: 'Brain',
    color: '#2563EB',
    accent: 'from-blue-500/20 to-blue-600/5',
    tags: ['Computer Vision', 'LLMs', 'Prompt Engineering', 'Intelligent Systems']
  },
  {
    title: 'Web Development',
    description: 'Crafting responsive, high-performance web applications with React, Next.js, and modern fullstack architectures.',
    icon: 'Globe',
    color: '#059669',
    accent: 'from-emerald-500/20 to-emerald-600/5',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js']
  },
  {
    title: 'Internet of Things (IoT)',
    description: 'Connecting physical hardware, environmental sensors, and microcontrollers to cloud dashboards and real-time alerts.',
    icon: 'Cpu',
    color: '#D97706',
    accent: 'from-amber-500/20 to-amber-600/5',
    tags: ['ESP32', 'Sensors', 'Hardware Interfacing', 'Automation']
  },
  {
    title: 'Game Development',
    description: 'Creating playful interactive mechanics, 2D physics interactions, level design, and gamified web experiences.',
    icon: 'Gamepad2',
    color: '#7C3AED',
    accent: 'from-purple-500/20 to-purple-600/5',
    tags: ['Game Mechanics', 'Interactive Physics', 'Game Loops', 'Creativity']
  }
];
