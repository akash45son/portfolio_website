export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C++', 'Python', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Tools',
      skills: ['Git', 'VS Code', 'Postman'],
      color: 'from-blue-600 to-purple-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20"
            >
              <div className="flex items-center mb-4">
                <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full mr-3`}></div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-750 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
