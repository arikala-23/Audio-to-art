import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileAudio, AlertCircle } from 'lucide-react';
import { useAppStore } from '../store';
import { uploadAudioFile } from '../services/api';

const AudioUploader: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const addAudioFile = useAppStore(state => state.addAudioFile);
  const updateAudioFile = useAppStore(state => state.updateAudioFile);
  
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    
    if (!file) return;
    
    // Check if file is audio
    if (!file.type.startsWith('audio/')) {
      setError('Please upload an audio file');
      return;
    }
    
    setIsUploading(true);
    setError(null);
    
    try {
      // Upload the file
      const audioFile = await uploadAudioFile(file);
      addAudioFile(audioFile);
      
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        updateAudioFile(audioFile.id, { progress });
        
        if (progress >= 100) {
          clearInterval(interval);
          updateAudioFile(audioFile.id, { status: 'transcribing' });
        }
      }, 300);
    } catch (err) {
      setError('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [addAudioFile, updateAudioFile]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.m4a', '.aac', '.ogg']
    },
    maxFiles: 1,
    disabled: isUploading
  });
  
  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}
          ${isUploading ? 'opacity-50 pointer-events-none' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center justify-center space-y-4">
          {isDragActive ? (
            <>
              <Upload className="w-16 h-16 text-blue-500" />
              <p className="text-xl font-medium text-blue-500">Drop your audio file here</p>
            </>
          ) : (
            <>
              <FileAudio className="w-16 h-16 text-gray-400" />
              <div>
                <p className="text-xl font-medium text-gray-700">
                  {isUploading ? 'Uploading...' : 'Drag & drop your audio file'}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  or click to browse (MP3, WAV, M4A, AAC, OGG)
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default AudioUploader;