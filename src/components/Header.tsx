import React from 'react';
import { Menu, X, Code, Sparkles } from 'lucide-react';
import { USER_NAME } from '../util';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className={`flex-shrink-0 group cursor-pointer transform transition-all duration-700 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none">
                  <Code className="text-white" size={20} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-bounce">
                  <Sparkles className="text-white" size={10} />
                </div>
              </div>
              <div className={`transform transition-all duration-500 delay-200 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {USER_NAME}
                </span>
                <div className="text-xs text-gray-500 font-medium">Full-Stack Developer</div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group transform ${
                  isLoaded 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 100}ms` 
                }}
              >
                <span className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </button>
            ))}
            <div className={`ml-4 pl-4 border-l border-gray-200 transform transition-all duration-500 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden group"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden overflow-hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 animate-slideDown">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;