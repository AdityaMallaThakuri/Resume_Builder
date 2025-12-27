// Resume data type definitions

export interface ContactInfo {
    fullName: string;
    email: string;
    phone?: string;
    location?: string;
    linkedin?: string;
    github?: string;
}

export interface Education {
    institution: string;
    location?: string;
    degree: string;
    field: string;
    gpa?: string;
    graduationDate?: string;
    coursework?: string;
}

export interface Skills {
    languages?: string;
    tools?: string;
    technical?: string;
}

export interface Experience {
    organization: string;
    location?: string;
    title: string;
    startDate: string;
    endDate?: string;
    achievements: string[];
}

export interface Project {
    name: string;
    technologies?: string;
    descriptions: string[];
}

export interface Leadership {
    organization?: string;
    role?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}

export interface SectionOrder {
    education: string;
    skills: string;
    experience: string;
    projects: string;
    leadership: string;
}

export interface ResumeData {
    contact: ContactInfo;
    education: Education[];
    skills: Skills;
    experience: Experience[];
    projects: Project[];
    leadership: Leadership[];
    sectionOrder: SectionOrder;
    includeReferences?: boolean;
}
