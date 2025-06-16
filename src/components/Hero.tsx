import React from 'react';
import { ArrowRight, Code, Zap, Star, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { USER_EMAIL, USER_NAME } from '../util';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = ['React', 'Next.js', 'Node.js', 'MongoDB', 'Supabase', 'TypeScript'];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm border border-blue-200/50">
                  <Sparkles size={16} className="animate-pulse" />
                  <span>Available for Projects</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Building</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Digital Magic
                </span>
                <span className="block text-4xl lg:text-5xl mt-2 text-gray-700">with Code</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Rapid full-stack developer specializing in
                <span className="font-semibold text-blue-600"> Lovable</span>,
                <span className="font-semibold text-purple-600"> Cursor</span>,
                <span className="font-semibold text-green-600"> Replit</span>,
                <span className="font-semibold text-orange-600"> Bolt.new</span>,
                <span className="font-semibold text-rose-600"> Supabase</span>,
                <span className="font-semibold text-teal-600"> Shopify</span>, and the
                <span className="font-semibold text-indigo-600"> MERN stack</span>.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:text-gray-900 hover:bg-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                View Portfolio
              </button>
            </div>

            <div className="flex items-center justify-between pt-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-gray-600 text-sm font-medium">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5+</div>
                  <div className="text-gray-600 text-sm font-medium">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-gray-600 text-sm font-medium">Satisfaction</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${USER_EMAIL}`}
                  className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative z-10">
              {/* Main code editor mockup */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Code className="text-blue-600" size={24} />
                    <span className="font-semibold text-gray-900">{USER_NAME}.tsx</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm space-y-2 shadow-inner">
                  <div className="text-green-400">// Building exceptional digital experiences</div>
                  <div className="text-blue-400">const <span className="text-yellow-400">developer</span> = {`{`}</div>
                  <div className="ml-4 text-gray-300">name: <span className="text-green-300">'{USER_NAME}'</span>,</div>
                  <div className="ml-4 text-gray-300">expertise: [</div>
                  <div className="ml-8 text-orange-400">'Lovable', 'Cursor', 'Replit',</div>
                  <div className="ml-8 text-orange-400">'Bolt.new', 'MERN', 'Supabase'</div>
                  <div className="ml-4 text-gray-300">],</div>
                  <div className="ml-4 text-gray-300">passion: <span className="text-green-300">'Creating Solutions'</span>,</div>
                  <div className="ml-4 text-gray-300">status: <span className="text-purple-400">'Available'</span></div>
                  <div className="text-blue-400">{`};`}</div>
                  <div className="text-gray-500 mt-4">// Ready to build your next project! 🚀</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg animate-bounce">
                Available Now!
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg animate-pulse">
                Fast Delivery
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;