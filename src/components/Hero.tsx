import { ArrowDown, Download, Folder } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Akash Sonawane
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Computer Engineering Student | Full Stack Developer
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Building real-world AI-based and scalable web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Folder size={20} />
              View Projects
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
}
