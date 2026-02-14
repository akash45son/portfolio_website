import { Code2, Brain, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Computer Engineering student with a strong focus on full-stack web development and artificial intelligence. I thrive on building innovative solutions that solve real-world problems and create meaningful impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise lies in developing scalable web applications using modern technologies like React, Node.js, and MongoDB. I'm particularly interested in integrating AI capabilities to create intelligent, user-centric applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a commitment to continuous learning and excellence, I'm actively seeking opportunities to apply my skills in challenging projects and contribute to cutting-edge technological innovations.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <Code2 className="mx-auto mb-2 text-blue-400" size={32} />
                <p className="text-gray-300 text-sm font-semibold">Clean Code</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <Brain className="mx-auto mb-2 text-purple-400" size={32} />
                <p className="text-gray-300 text-sm font-semibold">AI Solutions</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <Rocket className="mx-auto mb-2 text-blue-400" size={32} />
                <p className="text-gray-300 text-sm font-semibold">Innovation</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20 absolute -inset-4 blur-2xl"></div>
              <div className="relative w-80 h-80 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <Code2 size={80} className="mx-auto mb-4 text-blue-400" />
                  <p className="text-2xl font-bold text-white">Akash Sonawane</p>
                  <p className="text-gray-400 mt-2">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
