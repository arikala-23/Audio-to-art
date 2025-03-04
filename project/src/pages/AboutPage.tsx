import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Globe, Users, Code } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Audio2Art
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the fusion of audio and visual art through cutting-edge AI technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Audio2Art, we're on a mission to revolutionize the way people experience and interact with audio content. 
              By harnessing the power of artificial intelligence, we transform sounds into visual masterpieces, 
              creating a new dimension of artistic expression.
            </p>
            <p className="text-gray-700 mb-4">
              Our platform bridges the gap between auditory and visual senses, allowing creators, musicians, 
              podcasters, and audio enthusiasts to visualize their work in ways never before possible.
            </p>
            <p className="text-gray-700">
              We believe that every sound tells a story, and every story deserves to be seen. 
              Through our innovative technology, we're making that possible for everyone.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Audio studio"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced AI Models</h3>
              <p className="text-gray-600">
                Our platform utilizes state-of-the-art AI models for audio transcription and image generation, 
                ensuring high-quality results with every creation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Real-Time Processing</h3>
              <p className="text-gray-600">
                Experience the magic of transformation in real-time with our high-performance cloud infrastructure 
                and optimized processing pipeline.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Privacy-Focused</h3>
              <p className="text-gray-600">
                Your data security is our priority. All audio processing is done with strict privacy controls 
                and data protection measures in place.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Vision</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-medium text-gray-900">Global Creative Platform</h3>
                </div>
                <p className="text-gray-600">
                  Building a worldwide community where audio creators can visualize their work and share it with audiences globally.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-medium text-gray-900">Accessible to Everyone</h3>
                </div>
                <p className="text-gray-600">
                  Making advanced AI technology accessible to creators of all skill levels, from professionals to hobbyists.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-medium text-gray-900">Continuous Innovation</h3>
                </div>
                <p className="text-gray-600">
                  Constantly pushing the boundaries of what's possible with AI-generated art and audio visualization.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Join the Audio2Art Revolution</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Whether you're a musician, podcaster, sound designer, or just someone who appreciates the 
            intersection of audio and visual art, Audio2Art is for you. Join us as we redefine the 
            boundaries of creative expression.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Start Creating Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;