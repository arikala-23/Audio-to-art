import React from 'react';
import { motion } from 'framer-motion';
import { Music, Sparkles, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white"
              >
                <Music className="w-6 h-6" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-gray-900">Audio2Art</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-4">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/gallery" className="px-3 py-2 text-gray-700 hover:text-blue-600">Gallery</Link>
              <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
            </nav>
            
            <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Upgrade to Pro</span>
            </button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button 
              className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Upgrade to Pro</span>
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;