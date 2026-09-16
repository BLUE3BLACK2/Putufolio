export interface SocialLink {
  name: string;
  username: string;
  url: string;
  icon: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  description: string;
  iconName: string;
  level?: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
  color: string;
  badgeBg: string;
}

export interface CaseStudyStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectData {
  title: string;
  label: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technology: string;
  role: string;
  thumbnail: string;
  uiPreview: string;
  caseStudy: {
    problem: string;
    idea: string;
    role: string;
    process: CaseStudyStep[];
  };
  githubUrl?: string;
  demoUrl?: string;
  status: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: 'Art' | 'Poster';
  description: string;
  image: string;
  tags: string[];
  accentColor: string;
}

export interface EducationInfo {
  institution: string;
  program: string;
  startYear: string;
  status: string;
  degree: string;
  schools: { level: string; institution: string }[];
}

export interface InterestItem {
  title: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
  tags: string[];
}
