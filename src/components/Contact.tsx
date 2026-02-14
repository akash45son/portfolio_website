import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these platforms.
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/akash45son"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-all group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-gray-400 text-sm">Check out my repositories</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/akash-sonawane-8b4381223/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-all group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-gray-400 text-sm">Let's connect professionally</p>
                </div>
              </a>

              <a
                href="mailto:2004soanwaneakash@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-all group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400 text-sm">2004soanwaneakash@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; 2026 Akash Sonawane. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
