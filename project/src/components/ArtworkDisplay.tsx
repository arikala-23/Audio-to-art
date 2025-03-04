import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Heart, Sparkles } from 'lucide-react';
import { useAppStore } from '../store';
import { ArtworkImage } from '../types';

interface ArtworkDisplayProps {
  artwork: ArtworkImage;
}

const ArtworkDisplay: React.FC<ArtworkDisplayProps> = ({ artwork }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const handleDownload = () => {
    // In a real app, this would trigger a download
    window.open(artwork.url, '_blank');
  };
  
  const handleShare = () => {
    // In a real app, this would open a share dialog
    alert('Sharing functionality would be implemented here');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative">
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-pulse flex flex-col items-center">
              <Sparkles className="w-12 h-12 text-blue-500 mb-2" />
              <p className="text-gray-500">Generating masterpiece...</p>
            </div>
          </div>
        )}
        
        <img
          src={artwork.url}
          alt="AI-generated artwork"
          className="w-full h-auto object-cover"
          style={{ minHeight: '300px' }}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          AI-Generated
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Audio Visualization</h2>
            <p className="text-gray-500 text-sm mt-1">
              {new Date(artwork.createdAt).toLocaleDateString()}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full ${isLiked ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'} hover:bg-gray-200 transition-colors`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500 mb-2">PROMPT</h3>
          <p className="text-gray-700">{artwork.prompt}</p>
        </div>
        
        {artwork.style && (
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Style: {artwork.style}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ArtworkDisplay;