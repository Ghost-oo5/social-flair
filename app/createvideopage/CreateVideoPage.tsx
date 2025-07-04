"use client";
import { useState } from "react";
import {
  Play,
  Download,
  ImageIcon,
  FileText,
  Search,
  Sparkles,
  Clock,
  Calendar,
} from "lucide-react";
import Image from "next/image";

const CreateVideoPage = () => {
  const [prompt, setPrompt] = useState("");
  const [videoType, setVideoType] = useState<"text" | "image">("text");
  const [search, setSearch] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generatedVideos = [
    {
      id: 1,
      title: "Summer Sale Promo",
      type: "text",
      thumbnail:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "0:45",
      createdAt: "2 hours ago",
      url: "#",
    },
    {
      id: 2,
      title: "New Product Teaser",
      type: "image",
      thumbnail:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "1:10",
      createdAt: "1 day ago",
      url: "#",
    },
    {
      id: 3,
      title: "Fashion Brand Ad",
      type: "text",
      thumbnail:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "0:30",
      createdAt: "3 days ago",
      url: "#",
    },
    {
      id: 4,
      title: "Tech Demo Video",
      type: "image",
      thumbnail:
        "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "2:15",
      createdAt: "1 week ago",
      url: "#",
    },
    {
      id: 5,
      title: "Brand Story",
      type: "text",
      thumbnail:
        "https://images.pexels.com/photos/5704846/pexels-photo-5704846.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "1:30",
      createdAt: "2 weeks ago",
      url: "#",
    },
    {
      id: 6,
      title: "Product Launch",
      type: "image",
      thumbnail:
        "https://images.pexels.com/photos/2582936/pexels-photo-2582936.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "0:55",
      createdAt: "3 weeks ago",
      url: "#",
    },
  ];

  const filteredTextVideos = generatedVideos.filter(
    (video) =>
      video.type === "text" &&
      video.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredImageVideos = generatedVideos.filter(
    (video) =>
      video.type === "image" &&
      video.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-medium">
                AI-Powered Video Generation
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Create Stunning Videos
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                In Minutes
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into professional videos using AI. Generate
              from text prompts or images with just a few clicks.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        {/* Generator */}
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 mb-16 border border-white/20">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Generate Your Video
              </h2>
              <p className="text-gray-600">
                Enter a prompt and select your preferred generation method
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Describe the video you want to create..."
                  className="w-full h-14 px-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <select
                  value={videoType}
                  onChange={(e) =>
                    setVideoType(e.target.value as "text" | "image")
                  }
                  className="h-14 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm min-w-[160px]"
                >
                  <option value="text">Text to Video</option>
                  <option value="image">Image to Video</option>
                </select>
                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="h-14 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center min-w-[180px]"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      {videoType === "text" ? (
                        <FileText className="w-5 h-5 mr-2" />
                      ) : (
                        <ImageIcon className="w-5 h-5 mr-2" />
                      )}
                      Generate Video
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Your Generated Videos
              </h2>
              <p className="text-gray-600">
                Browse and manage your AI-generated video collection
              </p>
            </div>
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Text to Video */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Text to Video
          </h3>
          {filteredTextVideos.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTextVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No Text to Video items found.</p>
          )}
        </div>

        {/* Image to Video */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Image to Video
          </h3>
          {filteredImageVideos.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImageVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No Image to Video items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function VideoCard({ video }: { video: any }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl">
              <Play className="w-6 h-6 text-violet-600 ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center bg-black/75 text-white px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
            <Clock className="w-3 h-3 mr-1" />
            {video.duration}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              video.type === "text"
                ? "bg-violet-100/90 text-violet-800"
                : "bg-purple-100/90 text-purple-800"
            }`}
          >
            {video.type === "text" ? (
              <FileText className="w-3 h-3 mr-1" />
            ) : (
              <ImageIcon className="w-3 h-3 mr-1" />
            )}
            {video.type === "text" ? "Text to Video" : "Image to Video"}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          {video.createdAt}
        </div>
        <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
          <Download className="w-4 h-4 mr-2" />
          Download Video
        </button>
      </div>
    </div>
  );
}

export default CreateVideoPage;
