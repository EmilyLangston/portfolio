import React from 'react';
import { ExternalLink, Github, Zap, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with Next.js, Supabase, and Stripe integration. Features real-time inventory, user authentication, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Task Manager",
      description: "Intelligent task management app with AI suggestions built in Lovable. Features smart categorization, deadline predictions, and team collaboration.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Lovable", "OpenAI API", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat platform built with MERN stack and Socket.io. Supports group chats, file sharing, and real-time notifications.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Analytics Dashboard",
      description: "Interactive analytics dashboard for tracking portfolio performance. Built with React and Chart.js with real-time data updates.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Chart.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Rapid Prototype Gallery",
      description: "Collection of rapid prototypes built in Bolt.new and Replit. Showcasing quick iteration and development capabilities.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Bolt.new", "Replit", "Cursor", "Various"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "SaaS Landing Page Builder",
      description: "Drag-and-drop landing page builder for SaaS companies. Built with Next.js and features component library and export functionality.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const getIcon = (tech: string) => {
    if (tech.includes('Supabase') || tech.includes('MongoDB') || tech.includes('PostgreSQL')) {
      return <Database size={16} className="text-green-500" />;
    }
    if (tech.includes('Lovable') || tech.includes('Bolt.new') || tech.includes('Cursor')) {
      return <Zap size={16} className="text-yellow-500" />;
    }
    return <Globe size={16} className="text-blue-500" />;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of applications built across different platforms and technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Featured Work</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {getIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {getIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in seeing more of my work?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;