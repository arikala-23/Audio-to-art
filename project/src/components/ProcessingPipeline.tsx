import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, FileText, Image, CheckCircle, AlertTriangle } from 'lucide-react';
import { useAppStore } from '../store';
import { transcribeAudio, optimizePrompt, generateArtwork } from '../services/api';

const ProcessingPipeline: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const currentAudio = useAppStore(state => state.currentAudio);
  const updateAudioFile = useAppStore(state => state.updateAudioFile);
  const addTranscription = useAppStore(state => state.addTranscription);
  const addArtwork = useAppStore(state => state.addArtwork);
  const setIsProcessing = useAppStore(state => state.setIsProcessing);
  const artStyles = useAppStore(state => state.artStyles);
  
  useEffect(() => {
    if (!currentAudio || currentAudio.status !== 'transcribing') return;
    
    const processAudio = async () => {
      setIsProcessing(true);
      setCurrentStep(1);
      
      try {
        // Step 1: Transcribe audio
        updateAudioFile(currentAudio.id, { status: 'transcribing' });
        const transcription = await transcribeAudio(currentAudio.id);
        addTranscription(transcription);
        setCurrentStep(2);
        
        // Step 2: Optimize prompt
        const optimizedTranscription = await optimizePrompt(transcription);
        addTranscription(optimizedTranscription);
        updateAudioFile(currentAudio.id, { status: 'generating' });
        setCurrentStep(3);
        
        // Step 3: Generate artwork
        // Randomly select an art style
        const randomStyle = artStyles[Math.floor(Math.random() * artStyles.length)].name;
        const artwork = await generateArtwork(optimizedTranscription, randomStyle);
        addArtwork(artwork);
        updateAudioFile(currentAudio.id, { status: 'completed' });
        setCurrentStep(4);
      } catch (err) {
        console.error('Processing error:', err);
        setError('An error occurred during processing. Please try again.');
        updateAudioFile(currentAudio.id, { status: 'failed' });
      } finally {
        setIsProcessing(false);
      }
    };
    
    processAudio();
  }, [currentAudio, updateAudioFile, addTranscription, addArtwork, setIsProcessing, artStyles]);
  
  if (!currentAudio || currentAudio.status === 'uploading') {
    return null;
  }
  
  const steps = [
    { icon: <FileText />, label: 'Uploading Audio', description: 'Preparing your audio file' },
    { icon: <FileText />, label: 'Transcribing', description: 'Converting speech to text' },
    { icon: <Wand2 />, label: 'Optimizing', description: 'Enhancing prompt for best results' },
    { icon: <Image />, label: 'Generating Art', description: 'Creating your unique artwork' },
    { icon: <CheckCircle />, label: 'Completed', description: 'Your artwork is ready!' }
  ];
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      {error ? (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center mb-6">
          <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 z-0"></div>
          
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const isPending = index > currentStep;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`
                  relative z-10 flex items-start mb-8 last:mb-0
                  ${isPending ? 'opacity-40' : ''}
                `}
              >
                <div className={`
                  flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center
                  ${isActive ? 'bg-blue-500 text-white' : ''}
                  ${isCompleted ? 'bg-green-500 text-white' : ''}
                  ${isPending ? 'bg-gray-200 text-gray-400' : ''}
                `}>
                  {step.icon}
                </div>
                
                <div className="ml-6">
                  <h3 className="text-lg font-medium">
                    {step.label}
                    {isActive && (
                      <span className="ml-2 inline-block">
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          ...
                        </motion.span>
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-500">{step.description}</p>
                  
                  {isActive && index === 3 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 8 }}
                      className="h-2 bg-blue-500 rounded-full mt-2"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProcessingPipeline;