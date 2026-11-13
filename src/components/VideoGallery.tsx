import React, { useState, useEffect } from 'react';
import { Film, Play, Pause, Volume2, VolumeX, RotateCcw, X } from 'lucide-react';
import { VIDEO_MEMORIES, VideoMemory } from '../data/spartaData';

export const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoMemory | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulated video playback progress
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleOpenVideo = (video: VideoMemory) => {
    setActiveVideo(video);
    setIsPlaying(true);
    setProgress(0);
  };

  const handleClose = () => {
    setActiveVideo(null);
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <section id="videos" className="py-16 md:py-20 bg-[#F4F3EE] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-widest">
            <Film className="w-4 h-4 text-red-700" />
            <span>ARQUIVO EM VÍDEO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-cinzel text-stone-900">
            ARQUIVO EM VÍDEO
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Aftermovies, gritos de guerra e as resenhas da Sparta.
          </p>
        </div>

        {/* Video Cards Grid on White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_MEMORIES.map((vid) => (
            <div
              key={vid.id}
              onClick={() => handleOpenVideo(vid)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-red-600/40 shadow-xs hover:shadow-md cursor-pointer transition-all duration-200"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-stone-100">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* REC badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/75 text-[10px] text-white font-mono font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>REC · {vid.year}</span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[11px] text-white font-mono font-semibold">
                  {vid.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-stone-900/10 flex items-center justify-center group-hover:bg-stone-900/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#C8102E] text-white flex items-center justify-center shadow-md group-hover:scale-108 transition-all">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 space-y-1.5 text-left">
                <div className="flex items-center justify-between text-xs text-red-700 font-bold">
                  <span>{vid.category}</span>
                  <span className="text-stone-400 font-mono">{vid.year}</span>
                </div>
                <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-700 transition-colors line-clamp-2">
                  {vid.title}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-2">
                  {vid.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden border border-stone-300 shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 text-left">
              <div>
                <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
                  Arquivo Sparta · {activeVideo.year}
                </span>
                <h3 className="text-lg font-bold font-cinzel text-stone-900">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg cursor-pointer"
                aria-label="Fechar player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Viewport */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className={`w-full h-full object-cover transition-opacity ${isPlaying ? 'opacity-90' : 'opacity-70'}`}
              />

              {/* Chant / Subtitle Banner */}
              {activeVideo.chantLyrics && (
                <div className="absolute bottom-12 left-4 right-4 text-center">
                  <div className="inline-block px-4 py-2 rounded-lg bg-black/80 text-amber-300 font-cinzel text-sm sm:text-base font-bold border border-amber-500/40 shadow-lg">
                    &ldquo;{activeVideo.chantLyrics}&rdquo;
                  </div>
                </div>
              )}

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
              >
                {!isPlaying && (
                  <div className="w-16 h-16 rounded-full bg-[#C8102E] text-white flex items-center justify-center shadow-xl">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                )}
              </button>
            </div>

            {/* Controls Bar */}
            <div className="space-y-2">
              <div
                className="w-full h-2 rounded-full bg-stone-200 cursor-pointer overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  setProgress(Math.round(pos * 100));
                }}
              >
                <div
                  className="h-full bg-red-700 rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-stone-600 pt-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded hover:bg-stone-100 text-stone-800 cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setProgress(0)}
                    className="p-1 rounded hover:bg-stone-100 text-stone-800 cursor-pointer"
                    title="Reiniciar"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 rounded hover:bg-stone-100 text-stone-800 cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-xs text-stone-500">
                    {Math.floor((progress / 100) * 180)}s / 180s
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-left">
              {activeVideo.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
