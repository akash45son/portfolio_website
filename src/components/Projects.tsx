import { Github, ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart Farmer AI Assistant',
      description: 'AI-based crop guidance platform to assist farmers with intelligent recommendations. The system analyzes soil conditions, weather patterns, and crop requirements to provide personalized farming advice.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      github: '#',
      demo: '#',
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/30"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <Code size={64} className="text-white opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-semibold">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-900 text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-950 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-semibold">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gray-800 rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center p-12 hover:border-gray-600 transition-colors">
            <div className="text-center">
              <Code size={48} className="mx-auto mb-4 text-gray-600" />
              <p className="text-gray-500 font-semibold">More Projects Coming Soon</p>
              <p className="text-gray-600 text-sm mt-2">Stay tuned for updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
