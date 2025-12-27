export default function Leadership() {
    return (
        <section>
            <div className="border-b-2 border-indigo-600 pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Leadership & Activities</h2>
                <p className="text-sm text-gray-600 mt-1">Optional</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label htmlFor="lead-org-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Organization
                        </label>
                        <input
                            type="text"
                            id="lead-org-1"
                            name="leadership[0].organization"
                            placeholder="Harvard Computer Society"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="lead-role-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Role
                        </label>
                        <input
                            type="text"
                            id="lead-role-1"
                            name="leadership[0].role"
                            placeholder="President"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div></div>

                    <div>
                        <label htmlFor="lead-start-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Start Date
                        </label>
                        <input
                            type="month"
                            id="lead-start-1"
                            name="leadership[0].startDate"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="lead-end-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            End Date
                        </label>
                        <input
                            type="month"
                            id="lead-end-1"
                            name="leadership[0].endDate"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="lead-desc-1" className="block text-sm font-semibold text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            id="lead-desc-1"
                            name="leadership[0].description"
                            rows={2}
                            placeholder="Led organization of 200+ members, organizing 15+ technical workshops annually"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        ></textarea>
                    </div>
                </div>
            </div>
        </section>
    )
}