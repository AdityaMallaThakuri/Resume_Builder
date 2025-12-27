export default function Skills() {
    return (
        <section>
            <div className="border-b-2 border-indigo-600 pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="programming-languages" className="block text-sm font-semibold text-gray-700 mb-2">
                        Programming Languages
                    </label>
                    <input
                        type="text"
                        id="programming-languages"
                        name="skills.languages"
                        placeholder="Python, JavaScript, Java, C++, SQL"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                    <small className="text-xs text-gray-500 mt-1 block">Comma-separated, most proficient first</small>
                </div>

                <div>
                    <label htmlFor="tools-frameworks" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tools & Frameworks
                    </label>
                    <input
                        type="text"
                        id="tools-frameworks"
                        name="skills.tools"
                        placeholder="React, Node.js, Django, AWS, Docker, Git"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="technical-skills" className="block text-sm font-semibold text-gray-700 mb-2">
                        Other Technical Skills
                    </label>
                    <input
                        type="text"
                        id="technical-skills"
                        name="skills.technical"
                        placeholder="Machine Learning, Data Analysis, RESTful APIs, Agile/Scrum"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>
            </div>
        </section>
    );
}