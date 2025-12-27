export default function Education() {
    return (
        <section>
            <div className="border-b-2 border-indigo-600 pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label htmlFor="edu-institution-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Institution Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="edu-institution-1"
                            name="education[0].institution"
                            placeholder="Nepal Engineering College"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="edu-degree-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Degree <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="edu-degree-1"
                            name="education[0].degree"
                            placeholder="Bachelor of Engineering"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="edu-field-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Field of Study <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="edu-field-1"
                            name="education[0].field"
                            placeholder="Electrical Engineering"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="edu-location-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Location
                        </label>
                        <input
                            type="text"
                            id="edu-location-1"
                            name="education[0].location"
                            placeholder="Kathmandu, Nepal"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="edu-grad-date-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Graduation Date
                        </label>
                        <input
                            type="month"
                            id="edu-grad-date-1"
                            name="education[0].graduationDate"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="edu-gpa-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            GPA
                        </label>
                        <input
                            type="text"
                            id="edu-gpa-1"
                            name="education[0].gpa"
                            placeholder="3.8/4.0"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                        <small className="text-xs text-gray-500 mt-1 block">Include only if 3.5 or higher</small>
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="edu-coursework-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Relevant Coursework
                        </label>
                        <textarea
                            id="edu-coursework-1"
                            name="education[0].coursework"
                            rows={3}
                            placeholder="Data Structures, Algorithms, Machine Learning, Database Systems"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        ></textarea>
                        <small className="text-xs text-gray-500 mt-1 block">List 4-6 most relevant courses, comma-separated</small>
                    </div>
                </div>
            </div>
        </section>
    )
}