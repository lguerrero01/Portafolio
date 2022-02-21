export interface Experiance {
  id: number;
  company: string;
  location: string;
  timeline: string;
  role: string;
  work: string;
}
export interface EducationData {
  id: number;
  from_to_year: string;
  education: string;
  stream: string;
  info: string;
  institution: string;
}
export interface Proyect {
  id: number;
  title: string;
  desc: string;
  livedemo: string;
  githurl: string;
  mediumlink: string;
  imgUrl: string;
  tech: string;
}
export interface Skill {
  id: number;
  skill: string;
  progress: string;
}
