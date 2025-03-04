import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music, Image, Zap } from 'lucide-react';
import { useAppStore } from '../store';
import AudioUploader from '../components/AudioUploader';
import AudioPlayer from '../components/AudioPlayer';
import ProcessingPipeline from '../components/ProcessingPipeline';
import ArtworkDisplay from '../components/ArtworkDisplay';

const HomePage: React.FC = () => {
  const currentAudio = useAppStore(state => state.currentAudio);
  const artworks = useAppStore(state => state.artworks);
  const transcriptions = useAppStore(state => state.transcriptions);
  
  // Find the artwork for the current audio
  const currentArtwork = currentAudio 
    ? artworks.find(art => art.audioId === currentAudio.id)
    : null;
  
  // Find the transcription for the current audio
  const currentTranscription = currentAudio
    ? transcriptions.find(trans => trans.audioId === currentAudio.id && trans.optimizedPrompt)
    : null;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Audio into Art with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your audio and watch as our AI transforms it into stunning visual artwork.
            Experience the magic of sound visualization.
          </p>
        </motion.div>
        
        {!currentAudio && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <AudioUploader />
          </motion.div>
        )}
        
        {currentAudio && !currentArtwork && (
          <div className="space-y-8 mb-16">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Audio</h2>
              <AudioPlayer audioFile={currentAudio} />
            </div>
            
            <ProcessingPipeline />
          </div>
        )}
        
        {currentArtwork && (
          <div className="space-y-8 mb-16">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Audio</h2>
              <AudioPlayer audioFile={currentAudio} />
            </div>
            
            <ArtworkDisplay artwork={currentArtwork} />
          </div>
        )}
        
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">1. Upload Audio</h3>
              <p className="text-gray-600">
                Upload any audio file - music, speech, ambient sounds, or any audio that inspires you.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">2. AI Processing</h3>
              <p className="text-gray-600">
                Our advanced AI transcribes your audio and transforms it into optimized prompts for image generation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <Image className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">3. Generate Artwork</h3>
              <p className="text-gray-600">
                Receive a unique, AI-generated artwork that visually represents your audio in stunning detail.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Upgrade to Audio2Art Pro</h2>
              <p className="max-w-xl">
                Get unlimited generations, priority processing, exclusive art styles, and more with our Pro plan.
              </p>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium flex items-center hover:bg-gray-100 transition-colors">
              <Zap className="w-5 h-5 mr-2" />
              Get Pro Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;