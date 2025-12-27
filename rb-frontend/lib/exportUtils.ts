import { ResumeData } from './resumeTypes';

/**
 * Triggers download of HTML content as DOCX file
 */
export const downloadDOCX = async (elementId: string, fileName: string = 'resume.docx') => {
    try {
        // Dynamically import html-docx-js to avoid SSR issues
        const htmlDocx = await import('html-docx-js/dist/html-docx');

        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error('Resume element not found');
        }

        // Get the HTML content
        const htmlContent = element.innerHTML;

        // Wrap in proper HTML document structure
        const styledHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.5; }
            h1 { font-size: 18pt; text-align: center; margin-bottom: 8pt; }
            h2 { font-size: 12pt; font-weight: bold; border-bottom: 2px solid black; margin-top: 12pt; margin-bottom: 6pt; text-transform: uppercase; }
            h3 { font-size: 11pt; font-weight: bold; margin-bottom: 4pt; }
            p { margin: 4pt 0; }
            ul { margin: 4pt 0 4pt 20pt; }
            li { margin: 2pt 0; }
            .text-center { text-align: center; }
            .font-bold { font-weight: bold; }
            .italic { font-style: italic; }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;

        // Convert HTML to DOCX
        const converted = htmlDocx.asBlob(styledHtml);

        // Create download link
        const url = URL.createObjectURL(converted);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        return true;
    } catch (error) {
        console.error('Error generating DOCX:', error);
        alert('Failed to generate DOCX file. Please try again.');
        return false;
    }
};

/**
 * Prepares resume data from form for export
 */
export const prepareResumeData = (formData: FormData): ResumeData => {
    const data: ResumeData = {
        contact: {
            fullName: formData.get('fullName') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string || undefined,
            location: formData.get('location') as string || undefined,
            linkedin: formData.get('linkedin') as string || undefined,
            github: formData.get('github') as string || undefined,
        },
        education: [
            {
                institution: formData.get('education[0].institution') as string,
                location: formData.get('education[0].location') as string || undefined,
                degree: formData.get('education[0].degree') as string,
                field: formData.get('education[0].field') as string,
                gpa: formData.get('education[0].gpa') as string || undefined,
                graduationDate: formData.get('education[0].graduationDate') as string || undefined,
                coursework: formData.get('education[0].coursework') as string || undefined,
            },
        ],
        skills: {
            languages: formData.get('skills.languages') as string || undefined,
            tools: formData.get('skills.tools') as string || undefined,
            technical: formData.get('skills.technical') as string || undefined,
        },
        experience: [
            {
                organization: formData.get('experience[0].organization') as string,
                location: formData.get('experience[0].location') as string || undefined,
                title: formData.get('experience[0].title') as string,
                startDate: formData.get('experience[0].startDate') as string,
                endDate: formData.get('experience[0].endDate') as string || undefined,
                achievements: [
                    formData.get('experience[0].achievements[0]') as string,
                    formData.get('experience[0].achievements[1]') as string,
                    formData.get('experience[0].achievements[2]') as string,
                    formData.get('experience[0].achievements[3]') as string,
                ].filter(Boolean),
            },
        ],
        projects: [
            {
                name: formData.get('projects[0].name') as string,
                technologies: formData.get('projects[0].technologies') as string || undefined,
                descriptions: [
                    formData.get('projects[0].descriptions[0]') as string,
                    formData.get('projects[0].descriptions[1]') as string,
                    formData.get('projects[0].descriptions[2]') as string,
                ].filter(Boolean),
            },
        ],
        leadership: [
            {
                organization: formData.get('leadership[0].organization') as string || undefined,
                role: formData.get('leadership[0].role') as string || undefined,
                startDate: formData.get('leadership[0].startDate') as string || undefined,
                endDate: formData.get('leadership[0].endDate') as string || undefined,
                description: formData.get('leadership[0].description') as string || undefined,
            },
        ],
        sectionOrder: {
            education: formData.get('sectionOrder.education') as string || '2',
            skills: formData.get('sectionOrder.skills') as string || '3',
            experience: formData.get('sectionOrder.experience') as string || '1',
            projects: formData.get('sectionOrder.projects') as string || '4',
            leadership: formData.get('sectionOrder.leadership') as string || '5',
        },
        includeReferences: formData.get('includeReferences') === 'on',
    };

    return data;
};
