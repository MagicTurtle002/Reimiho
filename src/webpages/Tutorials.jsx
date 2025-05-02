import { useState } from "react";
import Footer from "../components/Footer";

const tutorials = [
  {
    id: "hidden-underground-base",
    title: "How to Build a Hidden Underground Base",
    subtitle: "Secret Base Tutorial",
    description:
      "A discreet and secure shelter, perfect for staying hidden from enemies and mobs. Built entirely below the surface with customizable interior for storage, crafting stations, and farms.",
    videoUrl: "https://youtu.be/MTX0X9nXMPs",
    thumbnail: "/Thumbnail2.jpg",
    difficulty: "Medium",
    duration: "15 min",
  },
  {
    id: "bamboo-house",
    title: "How to Build a Bamboo House",
    subtitle: "Survival House Tutorial",
    description:
      "An eco-friendly build perfect for jungle biomes. Features an airy design that blends with surrounding greenery while providing essential shelter and storage.",
    videoUrl: "https://youtu.be/Hvdd9ktyn3I",
    thumbnail: "/Thumbnail3.jpg",
    difficulty: "Easy",
    duration: "10 min",
  },
  {
    id: "starter-house",
    title: "How to Build a Simple Starter House",
    subtitle: "Easy Survival House Tutorial",
    description:
      "A practical build for early-game survival using common materials. Quick to construct with enough space for all essential crafting stations and storage.",
    videoUrl: "https://youtu.be/_qgcsUiMc94",
    thumbnail: "/Thumbnail4.jpg",
    difficulty: "Beginner",
    duration: "8 min",
  },
  {
    id: "japanese-pavilion",
    title: "How to Build a Japanese Pavilion",
    subtitle: "Easy Japanese Build Tutorial",
    description:
      "An elegant open structure with traditional aesthetic. Features a sloped roof with overhanging edges that blends seamlessly with natural surroundings.",
    videoUrl: "https://youtu.be/b2CBkD8iiZ4",
    thumbnail: "/Thumbnail5.jpg",
    difficulty: "Medium",
    duration: "12 min",
  },
  {
    id: "winter-cabin",
    title: "How to Build a Winter Cabin",
    subtitle: "Survival Log House Tutorial",
    description:
      "A cozy and practical build perfect for snowy biomes. Features a sloped roof, chimney, and warm wooden interior that contrasts beautifully with frosty landscapes.",
    videoUrl: "https://youtu.be/nUSFIGzkqGU",
    thumbnail: "/Thumbnail6.jpg",
    difficulty: "Medium",
    duration: "14 min",
  },
  {
    id: "oak-mansion",
    title: "How to Build an Oak Mansion",
    subtitle: "Wooden Survival House Tutorial",
    description:
      "A grand, wooden structure with multiple floors and spacious rooms. Features tall walls, large windows, and a majestic sloping roof for advanced players.",
    videoUrl: "https://youtu.be/k2Yc12rHTAY",
    thumbnail: "/Thumbnail7.jpg",
    difficulty: "Advanced",
    duration: "25 min",
  },
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Tutorials" },
  { id: "beginner", name: "Beginner Friendly" },
  { id: "survival", name: "Survival Builds" },
  { id: "advanced", name: "Advanced Projects" },
];

export default function TutorialPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle video selection
  const handleVideoSelect = (tutorial) => {
    setSelectedVideo(tutorial);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Filter tutorials based on active category and search query
  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "beginner" && tutorial.difficulty === "Beginner") ||
      (activeCategory === "survival" &&
        tutorial.title.toLowerCase().includes("survival")) ||
      (activeCategory === "advanced" && tutorial.difficulty === "Advanced");

    const matchesSearch =
      searchQuery === "" ||
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const scrollToTutorials = () => {
    document.getElementById("tutorials").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white">
      {/* 🔥 Fullscreen Image Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="/Thumbnail1.jpg"
          alt="Featured Tutorial"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 z-10">
          <span className="text-green-400 font-semibold mb-2 tracking-wider">
            FEATURED TUTORIAL
          </span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-5xl">
            Minecraft: How to Build a Simple Starter House
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mb-6">
            A discreet and secure shelter perfect for survival. Nearly invisible
            from above, fully customizable inside for storage, crafting, and
            safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="https://youtu.be/lgtl4N3BX7k"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm3.92 10.388l-5.646 3.471A.651.651 0 017 13.275V6.725c0-.524.576-.852 1.025-.584l5.646 3.47a.651.651 0 010 1.168z" />
              </svg>
              Watch Tutorial
            </a>
            <button
              onClick={scrollToTutorials}
              className="px-6 py-3 bg-white text-gray-800 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Browse More Tutorials
            </button>
          </div>
        </div>

        {/* Skill Level Indicator */}
        <div className="absolute bottom-10 left-10 bg-white/90 px-4 py-2 rounded-lg shadow-lg z-20">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Difficulty:</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Beginner
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-gray-700 font-medium">Duration:</span>
            <span className="text-gray-600">10 min</span>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Tutorials
            </h2>

            {/* Search Bar */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {filteredTutorials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No tutorials match your criteria. Try a different search or
                category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
                  onClick={() => handleVideoSelect(tutorial)}
                >
                  <div className="relative">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-red-600 text-white p-3 rounded-full">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm3.92 10.388l-5.646 3.471A.651.651 0 017 13.275V6.725c0-.524.576-.852 1.025-.584l5.646 3.47a.651.651 0 010 1.168z" />
                        </svg>
                      </div>
                    </div>
                    {/* Difficulty and Duration Badge */}
                    <div className="absolute bottom-3 left-3 flex space-x-2">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          tutorial.difficulty === "Beginner"
                            ? "bg-green-100 text-green-800"
                            : tutorial.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {tutorial.difficulty}
                      </span>
                      <span className="bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded-full">
                        {tutorial.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                    <p className="text-sm text-blue-600 mb-2">
                      {tutorial.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {tutorial.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                {selectedVideo.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={selectedVideo.videoUrl.replace(
                    "youtu.be/",
                    "youtube.com/embed/"
                  )}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96"
                ></iframe>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      selectedVideo.difficulty === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : selectedVideo.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {selectedVideo.difficulty}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {selectedVideo.duration}
                  </span>
                </div>
                <a
                  href={selectedVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Watch on YouTube
                </a>
              </div>
              <p className="text-gray-700">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
