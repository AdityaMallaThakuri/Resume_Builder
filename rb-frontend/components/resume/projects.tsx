export default function Projects() {
    return (
        <section>
            <div className="border-b-2 border-indigo-600 pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="proj-name-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Project Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="proj-name-1"
                            name="projects[0].name"
                            placeholder="Real-Time Collaborative Code Editor"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="proj-tech-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Technologies Used
                        </label>
                        <input
                            type="text"
                            id="proj-tech-1"
                            name="projects[0].technologies"
                            placeholder="React, WebSockets, Node.js, MongoDB, Docker"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                        <small className="text-xs text-gray-500 mt-1 block">Comma-separated list of key technologies</small>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm font-semibold text-gray-700">Project Details</p>
                        {[1, 2, 3].map((num) => (
                            <div key={num}>
                                <label htmlFor={`proj-desc-1-${num}`} className="block text-sm font-medium text-gray-700 mb-2">
                                    Impact/Description {num} {num <= 2 && <span className="text-red-500">*</span>}
                                </label>
                                <textarea
                                    id={`proj-desc-1-${num}`}
                                    name={`projects[0].descriptions[${num - 1}]`}
                                    rows={2}
                                    placeholder={num === 1 ? "Built real-time code editor supporting 50+ concurrent users with sub-100ms latency" : ""}
                                    required={num <= 2}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                                ></textarea>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}