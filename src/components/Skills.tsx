import React from 'react';
import { Code2, Database, Globe, Zap, Link2, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "MVP & Automation Tools",
      icon: <Zap className="text-yellow-500" size={32} />,
      skills: [
        { name: "Lovable.dev", level: 4 },
        { name: "Bolt.new", level: 5 },
        { name: "Cursor", level: 4 },
        { name: "Replit", level: 4 },
        { name: "Make.com", level: 3 }
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="text-blue-500" size={32} />,
      skills: [
        { name: "React", level: 5 },
        { name: "Next.js", level: 5 },
        { name: "Tailwind CSS", level: 5 },
        { name: "Shopify", level: 4 },
        { name: "Vite", level: 3 }
      ],
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Backend & Databases",
      icon: <Database className="text-green-500" size={32} />,
      skills: [
        { name: "Node.js", level: 5 },
        { name: "Express", level: 5 },
        { name: "Supabase", level: 4 },
        { name: "Firebase", level: 4 },
        { name: "MongoDB", level: 5 }
      ],
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="text-purple-500" size={32} />,
      skills: [
        { name: "JavaScript", level: 5 },
        { name: "TypeScript", level: 5 },
        { name: "Liquid", level: 3 },
        { name: "SQL", level: 3 }
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Integrations & APIs",
      icon: <Link2 className="text-red-500" size={32} />,
      skills: [
        { name: "Stripe", level: 4 },
        { name: "OpenAI", level: 5 },
        { name: "REST APIs", level: 5 },
        { name: "GraphQL", level: 3 }
      ],
      color: "from-red-400 to-yellow-500"
    },
    {
      title: "DevOps & Workflows",
      icon: <Settings className="text-gray-500" size={32} />,
      skills: [
        { name: "GitHub Actions", level: 4 },
        { name: "Docker", level: 3 },
        { name: "Vercel", level: 4 },
        { name: "AWS Lambda", level: 3 }
      ],
      color: "from-gray-400 to-slate-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set across modern development platforms and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                  {category.icon}
                </div>
                <h3 className="ml-4 text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < skill.level
                            ? `bg-gradient-to-r ${category.color}`
                            : 'bg-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Me?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Fast</div>
                <p className="text-gray-600">Rapid prototyping and development with modern tools</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Flexible</div>
                <p className="text-gray-600">Adaptable to any platform or technology stack</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Reliable</div>
                <p className="text-gray-600">Consistent delivery of high-quality solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
