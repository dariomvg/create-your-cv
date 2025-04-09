export interface Templates {
  id: number;
  image: string;
  details: string;
  link: string;
}

export interface Advantage {
  id: number;
  title: string;
  details: string;
}

export interface Experience {
  id: number;
  name: string;
  date_start: string;
  date_end: string;
  detail: string;
  company: string;
}

export interface Lenguage {
  id: number;
  name: string;
  level: string;
}

export interface Education {
  id: number;
  name: string;
  date_start: string;
  date_end: string;
}


export interface PropertiesPDF {
  title: string;
  subtitle: string;
  resume: string;
  skills: { id: number; skill: string }[];
  contacts: { id: number; contact: string }[];
  experiences?: Experience[];
  educations: Education[];
  lenguages: Lenguage[];
}


export interface UseContextPDF {
  cv: PropertiesPDF;
  addSkill: (skill: string) => void;
  addContact: (contact: string) => void;
  addLenguage: (value: Lenguage) => void;
  addExperience: (value: Experience) => void;
  addEducation: (value: Education) => void;
  addTitle: (value: string) => void;
  addSubtitle: (value: string) => void;
  addResume: (value: string) => void;
  removeSkill: (id: number) => void;
  removeContact: (id: number) => void;
  removeExperience: (id: number) => void;
  removeEducation: (id: number) => void;
  removeLenguage: (id: number) => void;
}

