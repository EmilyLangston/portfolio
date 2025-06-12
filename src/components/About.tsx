import React from 'react';
import { Award, Heart, Target, Users, Camera, Upload, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rapid full-stack developer launching scalable, AI-powered MVPs using modern JavaScript and cutting-edge tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Photo placeholder with upload area */}
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border-4 border-white shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-2">
                <img
                  src="./me.png"
                  alt="Personal photo"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
                />
              </div>

              {/* Decorative elements around photo */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse transition-all duration-500 group-hover:scale-125 group-hover:opacity-80 group-hover:-translate-y-1 group-hover:-translate-x-1"></div>
              <div className="absolute -top-2 -right-8 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse delay-500 transition-all duration-500 group-hover:scale-125 group-hover:opacity-80 group-hover:-translate-y-1 group-hover:translate-x-1"></div>
              <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 animate-pulse delay-1000 transition-all duration-500 group-hover:scale-125 group-hover:opacity-80 group-hover:translate-y-1 group-hover:-translate-x-1"></div>
              <div className="absolute -bottom-4 -right-6 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-60 animate-pulse delay-700 transition-all duration-500 group-hover:scale-125 group-hover:opacity-80 group-hover:translate-y-1 group-hover:translate-x-1"></div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl -z-10 animate-pulse transition-all duration-500 group-hover:blur-2xl group-hover:from-blue-400/30 group-hover:to-purple-400/30"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a versatile full-stack developer passionate about transforming ideas into fast, scalable, and AI-powered digital solutions.
                I specialize in modern tools like
                <span className="font-semibold text-pink-500"> Lovable.dev</span>,
                <span className="font-semibold text-yellow-500"> Bolt.new</span>,
                <span className="font-semibold text-indigo-500"> Cursor</span>,
                <span className="font-semibold text-emerald-500"> Replit</span>, and
                <span className="font-semibold text-red-500"> Make.com</span>,
                combined with robust technologies such as the
                <span className="font-semibold text-cyan-600"> MERN stack</span>,
                <span className="font-semibold text-lime-600"> Supabase</span>, and
                <span className="font-semibold text-fuchsia-600"> Next.js</span>.
              </p>
              <p className="text-lg leading-relaxed">
                What makes me stand out is my ability to rapidly launch MVPs—often within 24 to 72 hours—enabling you to validate your product quickly and move to market faster than traditional development cycles. I focus on writing clean, well-structured TypeScript code and building automation-powered apps designed to grow seamlessly.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you’re looking for a full-stack web app, a custom Shopify integration, AI-enhanced features, or optimized workflows with tools like Replit and Make.com, I bring the skills and tools to deliver solutions that are fast, reliable, and built for scale.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {/* 1. Passionate — warm, heartfelt purple */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Passionate</h3>
                <p className="text-gray-600 text-sm">Love for clean code and beautiful user experiences</p>
              </div>

              {/* 2. Goal-Oriented — strong, focused blue */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Goal-Oriented</h3>
                <p className="text-gray-600 text-sm">Focused on delivering results that exceed expectations</p>
              </div>

              {/* 3. Fast-Launching — energetic, vibrant green */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-green-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Rocket className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fast-Launching</h3>
                <p className="text-gray-600 text-sm">Launch MVPs fast and validate ideas quickly.</p>
              </div>

              {/* 4. Excellence — prestigious, confident orange */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">Committed to delivering high-quality solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;