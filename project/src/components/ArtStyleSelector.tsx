import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store';

const ArtStyleSelector: React.FC = () => {
  const artStyles = useAppStore(state => state.artStyles);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Choose an Art Style</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {artStyles.map((style) => (
          <motion.div
            key={style.id}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={style.previewUrl}
                alt={style.name}
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-800">{style.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{style.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArtStyleSelector;