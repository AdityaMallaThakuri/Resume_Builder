export default function SectionOrder() {
    return (
        <section>
            <div className="border-b-2 border-indigo-600 pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Section Order</h2>
                <p className="text-sm text-gray-600 mt-1">Customize how sections appear on your resume</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { id: 'experience', label: 'Experience', default: '1' },
                    { id: 'education', label: 'Education', default: '2' },
                    { id: 'skills', label: 'Skills', default: '3' },
                    { id: 'projects', label: 'Projects', default: '4' },
                    { id: 'leadership', label: 'Leadership & Activities', default: '5' }
                ].map((section) => (
                    <div key={section.id}>
                        <label htmlFor={`order-${section.id}`} className="block text-sm font-semibold text-gray-700 mb-2">
                            {section.label}
                        </label>
                        <select
                            id={`order-${section.id}`}
                            name={`sectionOrder.${section.id}`}
                            defaultValue={section.default}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                        >
                            <option value="1">1 (First)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Last)</option>
                        </select>
                    </div>
                ))}
            </div>
        </section>
    )
}