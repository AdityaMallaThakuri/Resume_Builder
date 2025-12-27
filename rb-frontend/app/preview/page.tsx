"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ResumeTemplate } from '@/components/ResumeTemplate';
import { ResumeData } from '@/lib/resumeTypes';
import { downloadDOCX } from '@/lib/exportUtils';
import { useReactToPrint } from 'react-to-print';
import { ArrowLeft, FileText, Download } from 'lucide-react';

export default function PreviewPage() {
    const router = useRouter();
    const [resumeData, setResumeData] = useState<ResumeData | null>(null);
    const resumeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Get resume data from localStorage
        const storedData = localStorage.getItem('resumeData');
        if (storedData) {
            setResumeData(JSON.parse(storedData));
        } else {
            // Redirect back to form if no data
            router.push('/');
        }
    }, [router]);

    const handlePrint = useReactToPrint({
        contentRef: resumeRef,
        documentTitle: `${resumeData?.contact.fullName.replace(/\s+/g, '_')}_Resume` || 'Resume',
    });

    const handleDownloadDOCX = async () => {
        if (resumeRef.current) {
            await downloadDOCX('resume-content', `${resumeData?.contact.fullName.replace(/\s+/g, '_')}_Resume.docx` || 'Resume.docx');
        }
    };

    const handleBackToEdit = () => {
        router.push('/');
    };

    if (!resumeData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your resume...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Action Bar */}
                <div className="mb-8 bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <button
                            onClick={handleBackToEdit}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Edit
                        </button>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handlePrint}
                                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <FileText className="w-5 h-5" />
                                Download PDF
                            </button>

                            <button
                                onClick={handleDownloadDOCX}
                                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <Download className="w-5 h-5" />
                                Download DOCX
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>Preview your resume below.</strong> Click &quot;Download PDF&quot; for a PDF version or &quot;Download DOCX&quot; for an editable Microsoft Word document. Use &quot;Back to Edit&quot; to make changes.
                        </p>
                    </div>
                </div>

                {/* Resume Preview */}
                <div className="bg-gray-100 rounded-xl shadow-xl p-8">
                    <div id="resume-content" className="bg-white">
                        <ResumeTemplate ref={resumeRef} data={resumeData} />
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={handleBackToEdit}
                        className="px-8 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium shadow-md border-2 border-gray-300"
                    >
                        Make Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
