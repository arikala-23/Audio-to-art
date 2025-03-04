import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store';
import { Download, Heart } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const artworks = useAppStore(state => state.artworks);
  
  // If no artworks, show some mock ones
  const displayArtworks = artworks.length > 0 ? artworks : [
    {
      id: 'mock1',
      audioId: 'mock-audio-1',
      transcriptionId: 'mock-trans-1',
      url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      prompt: 'A serene watercolor landscape with mountains and a calm lake reflecting the sunset',
      style: 'Watercolor',
      createdAt: new Date()
    },
    {
      id: 'mock2',
      audioId: 'mock-audio-2',
      transcriptionId: 'mock-trans-2',
      url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      prompt: 'Abstract digital art with vibrant colors and flowing shapes',
      style: 'Digital Art',
      createdAt: new Date()
    },
    {
      id: 'mock3',
      audioId: 'mock-audio-3',
      transcriptionId: 'mock-trans-3',
      url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      prompt: 'Surreal dreamscape with floating islands and impossible architecture',
      style: 'Surrealism',
      createdAt: new Date()
    },
    {
      id: 'mock4',
      audioId: 'mock-audio-4',
      transcriptionId: 'mock-trans-4',
      url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      prompt: 'Abstract patterns with geometric shapes and bold color contrasts',
      style: 'Abstract',
      createdAt: new Date()
    },
    {
      id: 'mock5',
      audioId: 'mock-audio-5',
      transcriptionId: 'mock-trans-5',
      url: 'https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      prompt: 'Cyberpunk cityscape with neon lights and futuristic technology',
      style: 'Cyberpunk',
      createdAt: new Date()
    },
    {
      id: 'mock6',
      audioId: 'mock-audio-6',
      transcriptionId: 'mock-trans-6',
      url: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      prompt: 'Digital fantasy landscape with magical elements and ethereal lighting',
      style: 'Digital Art',
      createdAt: new Date()
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artwork Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the collection of AI-generated artwork created from audio inputs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={artwork.url}
                  alt={artwork.prompt}
                  className="w-full h-64 object-cover"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-100">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-100">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-gray-500">
                      {new Date(artwork.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  
                  {artwork.style && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {artwork.style}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 text-sm line-clamp-2">{artwork.prompt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;