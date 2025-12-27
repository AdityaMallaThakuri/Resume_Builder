export default function Experience() {
    return (
        <section>
            <div className="border-b-2 border-indigo-600 pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label htmlFor="exp-organization-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Organization <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="exp-organization-1"
                            name="experience[0].organization"
                            placeholder="Google"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="exp-title-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Position Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="exp-title-1"
                            name="experience[0].title"
                            placeholder="Software Engineering Intern"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="exp-location-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Location
                        </label>
                        <input
                            type="text"
                            id="exp-location-1"
                            name="experience[0].location"
                            placeholder="Mountain View, CA"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="exp-start-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Start Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="month"
                            id="exp-start-1"
                            name="experience[0].startDate"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="exp-end-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            End Date
                        </label>
                        <input
                            type="month"
                            id="exp-end-1"
                            name="experience[0].endDate"
                            placeholder="Current"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                        <small className="text-xs text-gray-500 mt-1 block">Leave empty for current position</small>
                    </div>
                </div>

                <div className="pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Key Achievements</p>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num}>
                                <label htmlFor={`exp-achievement-1-${num}`} className="block text-sm font-medium text-gray-700 mb-2">
                                    Achievement {num} {num <= 3 && <span className="text-red-500">*</span>}
                                </label>
                                <textarea
                                    id={`exp-achievement-1-${num}`}
                                    name={`experience[0].achievements[${num - 1}]`}
                                    rows={2}
                                    placeholder={num === 1 ? "Developed machine learning model that improved search accuracy by 23%, reducing user query time by 1.5 seconds" : ""}
                                    required={num <= 3}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                                ></textarea>
                            </div>
                        ))}
                        <small className="text-xs text-gray-600 block">Start with strong action verbs, include quantified impact</small>
                    </div>
                </div>
            </div>
        </section>
    )
}