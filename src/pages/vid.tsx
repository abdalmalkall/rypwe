import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, Fullscreen, ArrowLeft, Clock, Eye, Sparkles } from "lucide-react";

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: string;
  category: string;
}

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos: Video[] = [
    {
      id: 1,
      title: "Modern Living Room Transformation",
      description: "Watch how we transformed a traditional living room into a modern masterpiece",
      thumbnail: "/living-room-thumb.jpg",
      videoUrl: "/videos/living-room.mp4",
      duration: "2:45",
      views: "1.2K",
      category: "Living Room"
    },
    {
      id: 2,
      title: "Kitchen Design Process",
      description: "From concept to completion - our kitchen design journey",
      thumbnail: "/kitchen-thumb.jpg",
      videoUrl: "/videos/kitchen-design.mp4",
      duration: "3:20",
      views: "2.1K",
      category: "Kitchen"
    },
    {
      id: 3,
      title: "Bedroom Makeover",
      description: "Creating the perfect bedroom sanctuary with modern touches",
      thumbnail: "/bedroom-thumb.jpg",
      videoUrl: "/videos/bedroom-makeover.mp4",
      duration: "4:15",
      views: "1.8K",
      category: "Bedroom"
    },
    {
      id: 4,
      title: "Office Space Design",
      description: "Professional workspace that inspires creativity and productivity",
      thumbnail: "/office-thumb.jpg",
      videoUrl: "/videos/office-design.mp4",
      duration: "3:50",
      views: "1.5K",
      category: "Office"
    },
    {
      id: 5,
      title: "Bathroom Renovation",
      description: "Luxury bathroom transformation with spa-like features",
      thumbnail: "/bathroom-thumb.jpg",
      videoUrl: "/videos/bathroom-renovation.mp4",
      duration: "2:30",
      views: "2.3K",
      category: "Bathroom"
    },
    {
      id: 6,
      title: "Complete Home Makeover",
      description: "Full home transformation from start to finish",
      thumbnail: "/home-thumb.jpg",
      videoUrl: "/videos/home-makeover.mp4",
      duration: "5:45",
      views: "3.2K",
      category: "Full Home"
    }
  ];

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const closeVideo = () => {
    setIsPlaying(false);
    setSelectedVideo(null);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = percent * duration;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-semibold">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-white" />
              <h1 className="text-2xl font-bold text-white">Design Videos</h1>
            </div>
            
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </header>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden">
            {/* Video Player */}
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[70vh]"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                {/* Progress Bar */}
                <div 
                  className="w-full bg-gray-600 h-1 rounded-full mb-4 cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="bg-white h-1 rounded-full transition-all duration-100"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>

                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {selectedVideo.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => videoRef.current?.requestFullscreen()}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Fullscreen className="w-5 h-5" />
                    </button>

                    <button
                      onClick={closeVideo}
                      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {selectedVideo.title}
              </h2>
              <p className="text-gray-300 mb-4">
                {selectedVideo.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedVideo.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedVideo.views} views</span>
                </div>
                <span className="bg-gray-800 px-3 py-1 rounded-full">
                  {selectedVideo.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="text-white w-10 h-10 animate-float" />
            <h2 className="text-5xl font-bold text-white">
              Design Videos
            </h2>
            <Sparkles className="text-white w-10 h-10 animate-float" style={{animationDelay: '0.5s'}} />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our design journey through captivating videos that showcase the transformation of ordinary spaces into extraordinary experiences
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              onClick={() => openVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  {/* Play Button */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-white/20 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                    {video.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-gray-300 transition-colors">
                  {video.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {video.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <button className="text-white text-sm font-medium hover:text-gray-300 transition-colors flex items-center gap-2">
                    Watch Video
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "20+", label: "Design Videos" },
            { number: "15K+", label: "Total Views" },
            { number: "24/7", label: "Available" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gray-900 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-800"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8 text-lg">
            Interested in working together on your project?
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </main>

      {/* Custom CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Videos;