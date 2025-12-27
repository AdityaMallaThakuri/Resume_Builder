"use client";


// Next.js import
import { useRouter } from 'next/navigation';

// Utils import
import { prepareResumeData } from '@/lib/exportUtils';



// Components import
import ContactInfo from '@/components/resume/contact_info';
import Education from '@/components/resume/education';
import Skills from '@/components/resume/skills';
import Experience from '@/components/resume/experience';
import Projects from '@/components/resume/projects';
import Leadership from '@/components/resume/leadership';
import SectionOrder from '@/components/resume/section_order';
import ExportOptions from '@/components/resume/export_options';





export default function Home() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const resumeData = prepareResumeData(formData);

    // Store data in localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    // Navigate to preview page
    router.push('/preview');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Resume Builder
            </h1>
            <p className="text-lg text-gray-600">
              Create an ATS-friendly professional resume
            </p>
          </div>
          {/* Header */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Contact Information */}
            <ContactInfo />

            {/* Education */}
            <Education />

            {/* Skills */}
            <Skills />

            {/* Experience */}
            <Experience />

            {/* Projects */}
            <Projects />

            {/* Leadership */}
            <Leadership />

            {/* Section Order */}
            <SectionOrder />

            {/* Export Options */}
            <ExportOptions />
          </form>
        </div>
      </div>
    </main>
  );
}
