export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'free' | 'premium' | 'enterprise';
}

export interface AudioFile {
  id: string;
  name: string;
  duration: number;
  url: string;
  createdAt: Date;
  status: 'uploading' | 'processing' | 'transcribing' | 'generating' | 'completed' | 'failed';
  progress: number;
}

export interface Transcription {
  id: string;
  audioId: string;
  text: string;
  createdAt: Date;
  optimizedPrompt?: string;
}

export interface ArtworkImage {
  id: string;
  audioId: string;
  transcriptionId: string;
  url: string;
  prompt: string;
  style?: string;
  createdAt: Date;
}

export interface ArtStyle {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
}