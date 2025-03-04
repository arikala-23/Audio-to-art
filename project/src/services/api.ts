import axios from 'axios';
import { AudioFile, Transcription, ArtworkImage } from '../types';

// In a real application, this would be an actual API endpoint
// For this demo, we'll simulate API calls with delays and mock data
const API_DELAY = 2000;

// Simulate file upload
export const uploadAudioFile = async (file: File): Promise<AudioFile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const audioFile: AudioFile = {
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        duration: Math.floor(Math.random() * 180) + 30, // Random duration between 30-210 seconds
        url: URL.createObjectURL(file),
        createdAt: new Date(),
        status: 'processing',
        progress: 0
      };
      resolve(audioFile);
    }, API_DELAY / 2);
  });
};

// Simulate audio transcription
export const transcribeAudio = async (audioId: string): Promise<Transcription> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const transcriptions = [
        "The sunset painted the sky with hues of orange and purple, a masterpiece that no artist could replicate.",
        "Waves crashed against the shore, a rhythmic lullaby that had been playing since the beginning of time.",
        "The forest was alive with the sounds of creatures, a symphony of nature that played day and night.",
        "Stars twinkled in the night sky, diamonds scattered across a canvas of infinite darkness.",
        "The city lights sparkled like fireflies, a man-made constellation that rivaled the stars above."
      ];
      
      const transcription: Transcription = {
        id: Math.random().toString(36).substring(2, 9),
        audioId,
        text: transcriptions[Math.floor(Math.random() * transcriptions.length)],
        createdAt: new Date(),
        optimizedPrompt: undefined // Will be set in the next step
      };
      resolve(transcription);
    }, API_DELAY);
  });
};

// Simulate prompt optimization
export const optimizePrompt = async (transcription: Transcription): Promise<Transcription> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const optimizers = [
        (text: string) => `Create a vibrant, dreamlike visualization of: ${text}`,
        (text: string) => `Imagine a surreal landscape where: ${text}`,
        (text: string) => `Design an abstract representation inspired by: ${text}`,
        (text: string) => `Visualize an emotional journey through: ${text}`,
        (text: string) => `Transform into a cosmic scene where: ${text}`
      ];
      
      const updatedTranscription = {
        ...transcription,
        optimizedPrompt: optimizers[Math.floor(Math.random() * optimizers.length)](transcription.text)
      };
      
      resolve(updatedTranscription);
    }, API_DELAY / 2);
  });
};

// Simulate image generation
export const generateArtwork = async (
  transcription: Transcription, 
  style?: string
): Promise<ArtworkImage> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Unsplash collections for different art styles
      const artCollections: Record<string, string[]> = {
        'Abstract': [
          'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
          'https://images.unsplash.com/photo-1507908708918-778587c9e563',
          'https://images.unsplash.com/photo-1525909002-1b05e0c869d8'
        ],
        'Surrealism': [
          'https://images.unsplash.com/photo-1547891654-e66ed7ebb968',
          'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9',
          'https://images.unsplash.com/photo-1577083552761-fc7c0d7a5463'
        ],
        'Digital Art': [
          'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d',
          'https://images.unsplash.com/photo-1563089145-599997674d42',
          'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73'
        ],
        'Watercolor': [
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
          'https://images.unsplash.com/photo-1580136579312-94651dfd596d',
          'https://images.unsplash.com/photo-1574285013029-29296a71930e'
        ],
        'Cyberpunk': [
          'https://images.unsplash.com/photo-1515630278258-407f66498911',
          'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d'
        ]
      };
      
      // Default to Abstract if style not specified or not found
      const styleImages = artCollections[style || ''] || artCollections['Abstract'];
      const randomImage = styleImages[Math.floor(Math.random() * styleImages.length)];
      
      const artwork: ArtworkImage = {
        id: Math.random().toString(36).substring(2, 9),
        audioId: transcription.audioId,
        transcriptionId: transcription.id,
        url: `${randomImage}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`,
        prompt: transcription.optimizedPrompt || transcription.text,
        style: style,
        createdAt: new Date()
      };
      
      resolve(artwork);
    }, API_DELAY * 1.5);
  });
};