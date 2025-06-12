import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { USER_EMAIL, USER_NAME, USER_PHONE } from '../util';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {USER_NAME}
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Rapid full-stack developer launching scalable, AI-powered MVPs using modern JavaScript and cutting-edge tools.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={`mailto:${USER_EMAIL}`}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Rapid Prototyping</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Full-Stack Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Automation Workflows</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">API Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Shopify Development</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-400">
              <li><span className="hover:text-white transition-colors duration-200">React & Next.js</span></li>
              <li><span className="hover:text-white transition-colors duration-200">Node.js & Express</span></li>
              <li><span className="hover:text-white transition-colors duration-200">MongoDB & Supabase</span></li>
              <li><span className="hover:text-white transition-colors duration-200">Lovable & Bolt.new</span></li>
              <li><span className="hover:text-white transition-colors duration-200">TypeScript & JavaScript</span></li>
              <li><span className="hover:text-white transition-colors duration-200">Stripe & OpenAI</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>{USER_EMAIL}</p>
              <p>{USER_PHONE}</p>
              <p>Available Worldwide</p>
              <p className="text-sm mt-4 text-green-400">
                🟢 Available for new projects
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} {USER_NAME}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;