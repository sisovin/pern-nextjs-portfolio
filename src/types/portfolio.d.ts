export interface Project {
  title: string;
  description: string;
  image: string;
}

export interface Skill {
  name: string;
}

export interface PortfolioData {
  projects: Project[];
  skills: Skill[];
}
