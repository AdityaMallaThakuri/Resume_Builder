export default function ExportOptions() {
    return (
        <section>
            <div className="border-b-2 border-indigo-600 pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Generate Resume</h2>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 space-y-4">
                <p className="text-gray-700">
                    Your resume will be generated in Harvard-style format, optimized for ATS systems.
                </p>

                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        id="include-references"
                        name="includeReferences"
                        className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    <label htmlFor="include-references" className="text-sm font-medium text-gray-700">
                        Include "References available upon request"
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                    Generate Resume (PDF & DOCX)
                </button>
            </div>
        </section>
    )
}