export interface Experiance {
  id: number;
  company: string;
  location: string;
  timeline: string;
  role: string;
  work: string;
  stack?: string[];
}
export interface EducationData {
  id: number;
  from_to_year: string;
  education: string;
  stream: string;
  info: (string)[];
  institution: string;
}

export interface Proyect {
  id: number;
  title: string;
  desc: string;
  livedemo: string;
  githurl: string;
  appstore?: string;
  playstore?: string;
  category: string;
  techs: string[];
  featured?: boolean;
  mediumlink?: string;
  imgUrl?: string;
  gallery?: string[];
  tech?: string;
}

/** Legacy skill shape (progress bar). Kept for backwards compatibility. */
export interface Skill {
  id: number;
  skill: string;
  progress: string;
}

/** A single technology shown in the skills grid. */
export interface TechItem {
  name: string;
  /** devicon or font-awesome css class, e.g. "devicon-angularjs-plain colored". Optional. */
  icon?: string;
  /** inline SVG path data (24x24 viewBox) for brands without a devicon logo. Optional. */
  svg?: string;
}

/** A named group of technologies (Frontend, Mobile, Backend, ...). */
export interface SkillGroup {
  category: string;
  items: TechItem[];
}
