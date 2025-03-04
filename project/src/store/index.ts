import { create } from 'zustand';
import { AudioFile, ArtworkImage, Transcription, User, ArtStyle } from '../types';

interface AppState {
  user: User | null;
  audioFiles: AudioFile[];
  currentAudio: AudioFile | null;
  transcriptions: Transcription[];
  artworks: ArtworkImage[];
  artStyles: ArtStyle[];
  isProcessing: boolean;
  isPlaying: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  addAudioFile: (file: AudioFile) => void;
  updateAudioFile: (id: string, data: Partial<AudioFile>) => void;
  setCurrentAudio: (audio: AudioFile | null) => void;
  addTranscription: (transcription: Transcription) => void;
  addArtwork: (artwork: ArtworkImage) => void;
  setIsProcessing: (isProcessing: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

// Mock art styles
const defaultArtStyles: ArtStyle[] = [
  {
    id: '1',
    name: 'Abstract',
    description: 'Non-representational art that does not attempt to depict reality',
    previewUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    name: 'Surrealism',
    description: 'Dreamlike scenes with unexpected juxtapositions',
    previewUrl: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3',
    name: 'Digital Art',
    description: 'Modern digital illustrations with vibrant colors',
    previewUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '4',
    name: 'Watercolor',
    description: 'Soft, flowing artwork with transparent color washes',
    previewUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '5',
    name: 'Cyberpunk',
    description: 'Futuristic dystopian scenes with neon lights and technology',
    previewUrl: 'https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

export const useAppStore = create<AppState>((set) => ({
  user: null,
  audioFiles: [],
  currentAudio: null,
  transcriptions: [],
  artworks: [],
  artStyles: defaultArtStyles,
  isProcessing: false,
  isPlaying: false,
  
  setUser: (user) => set({ user }),
  addAudioFile: (file) => set((state) => ({ 
    audioFiles: [...state.audioFiles, file],
    currentAudio: state.currentAudio || file
  })),
  updateAudioFile: (id, data) => set((state) => ({
    audioFiles: state.audioFiles.map(file => 
      file.id === id ? { ...file, ...data } : file
    )
  })),
  setCurrentAudio: (audio) => set({ currentAudio: audio }),
  addTranscription: (transcription) => set((state) => ({ 
    transcriptions: [...state.transcriptions, transcription] 
  })),
  addArtwork: (artwork) => set((state) => ({ 
    artworks: [...state.artworks, artwork] 
  })),
  setIsProcessing: (isProcessing) => set({ isProcessing }),
  setIsPlaying: (isPlaying) => set({ isPlaying })
}));