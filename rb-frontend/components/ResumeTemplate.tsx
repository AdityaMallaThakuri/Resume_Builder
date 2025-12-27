import React from 'react';
import { ResumeData } from '@/lib/resumeTypes';

interface ResumeTemplateProps {
    data: ResumeData;
}

export const ResumeTemplate = React.forwardRef<HTMLDivElement, ResumeTemplateProps>(
    ({ data }, ref) => {
        const { contact, education, skills, experience, projects, leadership, sectionOrder, includeReferences } = data;

        // Sort sections based on order
        const sections = [
            { id: 'experience', order: parseInt(sectionOrder.experience), component: renderExperience },
            { id: 'education', order: parseInt(sectionOrder.education), component: renderEducation },
            { id: 'skills', order: parseInt(sectionOrder.skills), component: renderSkills },
            { id: 'projects', order: parseInt(sectionOrder.projects), component: renderProjects },
            { id: 'leadership', order: parseInt(sectionOrder.leadership), component: renderLeadership },
        ].sort((a, b) => a.order - b.order);

        function renderExperience() {
            if (!experience || experience.length === 0) return null;

            return (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-900 mb-3 uppercase">
                        Experience
                    </h2>
                    {experience.map((exp, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="flex justify-between items-baseline mb-1">
                                <div>
                                    <h3 className="font-bold text-gray-900">{exp.organization}</h3>
                                    <p className="italic text-gray-800">{exp.title}</p>
                                </div>
                                <div className="text-right text-sm">
                                    {exp.location && <p className="text-gray-700">{exp.location}</p>}
                                    <p className="text-gray-700">
                                        {exp.startDate} - {exp.endDate || 'Present'}
                                    </p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside ml-2 space-y-1">
                                {exp.achievements.filter(a => a.trim()).map((achievement, i) => (
                                    <li key={i} className="text-sm text-gray-800 leading-relaxed">
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            );
        }

        function renderEducation() {
            if (!education || education.length === 0) return null;

            return (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-900 mb-3 uppercase">
                        Education
                    </h2>
                    {education.map((edu, idx) => (
                        <div key={idx} className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <div>
                                    <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                                    <p className="text-gray-800">
                                        {edu.degree} in {edu.field}
                                        {edu.gpa && `, GPA: ${edu.gpa}`}
                                    </p>
                                    {edu.coursework && (
                                        <p className="text-sm text-gray-700 mt-1">
                                            <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                                        </p>
                                    )}
                                </div>
                                <div className="text-right text-sm">
                                    {edu.location && <p className="text-gray-700">{edu.location}</p>}
                                    {edu.graduationDate && <p className="text-gray-700">{edu.graduationDate}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            );
        }

        function renderSkills() {
            if (!skills || (!skills.languages && !skills.tools && !skills.technical)) return null;

            return (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-900 mb-3 uppercase">
                        Skills
                    </h2>
                    <div className="space-y-1 text-sm">
                        {skills.languages && (
                            <p>
                                <span className="font-semibold">Programming Languages:</span> {skills.languages}
                            </p>
                        )}
                        {skills.tools && (
                            <p>
                                <span className="font-semibold">Tools & Frameworks:</span> {skills.tools}
                            </p>
                        )}
                        {skills.technical && (
                            <p>
                                <span className="font-semibold">Technical Skills:</span> {skills.technical}
                            </p>
                        )}
                    </div>
                </section>
            );
        }

        function renderProjects() {
            if (!projects || projects.length === 0) return null;

            return (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-900 mb-3 uppercase">
                        Projects
                    </h2>
                    {projects.map((project, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="mb-1">
                                <h3 className="font-bold text-gray-900">{project.name}</h3>
                                {project.technologies && (
                                    <p className="text-sm italic text-gray-700">{project.technologies}</p>
                                )}
                            </div>
                            <ul className="list-disc list-inside ml-2 space-y-1">
                                {project.descriptions.filter(d => d.trim()).map((desc, i) => (
                                    <li key={i} className="text-sm text-gray-800 leading-relaxed">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            );
        }

        function renderLeadership() {
            if (!leadership || leadership.length === 0 || !leadership[0].organization) return null;

            return (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-900 mb-3 uppercase">
                        Leadership & Activities
                    </h2>
                    {leadership.map((lead, idx) => {
                        if (!lead.organization) return null;
                        return (
                            <div key={idx} className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <h3 className="font-bold text-gray-900">{lead.organization}</h3>
                                        {lead.role && <p className="italic text-gray-800">{lead.role}</p>}
                                        {lead.description && (
                                            <p className="text-sm text-gray-800 mt-1">{lead.description}</p>
                                        )}
                                    </div>
                                    {(lead.startDate || lead.endDate) && (
                                        <div className="text-right text-sm text-gray-700">
                                            {lead.startDate} - {lead.endDate || 'Present'}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </section>
            );
        }

        return (
            <div ref={ref} className="bg-white p-12 max-w-[8.5in] mx-auto shadow-lg">
                {/* Header */}
                <header className="mb-6 text-center border-b-2 border-gray-900 pb-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{contact.fullName}</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-700">
                        {contact.email && <span>{contact.email}</span>}
                        {contact.phone && <span>•</span>}
                        {contact.phone && <span>{contact.phone}</span>}
                        {contact.location && <span>•</span>}
                        {contact.location && <span>{contact.location}</span>}
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-700 mt-1">
                        {contact.linkedin && <span>{contact.linkedin}</span>}
                        {contact.linkedin && contact.github && <span>•</span>}
                        {contact.github && <span>{contact.github}</span>}
                    </div>
                </header>

                {/* Dynamic Sections */}
                {sections.map((section) => (
                    <React.Fragment key={section.id}>{section.component()}</React.Fragment>
                ))}

                {/* References */}
                {includeReferences && (
                    <section className="mt-6 text-center text-sm text-gray-700">
                        <p className="italic">References available upon request</p>
                    </section>
                )}
            </div>
        );
    }
);

ResumeTemplate.displayName = 'ResumeTemplate';
