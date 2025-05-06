import React, { useState } from "react";
import Footer from "../components/Footer";

const ShortsPage = () => {
  const [activeShort, setActiveShort] = useState(0);

  // Enhanced shorts data with TikTok-style information
  const shorts = [
    {
      id: 1,
      title: "Simple Pond Tutorial",
      src: "/Shorts/Simple_Pond.mp4",
      username: "@Reimiho",
      description:
        "Easy hidden redstone door for your base! #minecraft #redstone #tutorial",
    },
    {
      id: 2,
      title: "Storage Area Design",
      src: "/Shorts/Storage_Area.mp4",
      username: "@Reimiho",
      description:
        "Coolest underwater base design with amazing lighting effects! Try this in your survival world. #minecraft #underwater #base",
    },
    {
      id: 3,
      title: "Armor Stand Setup",
      src: "/Shorts/Armor_Stand.mp4",
      username: "@Reimiho",
      description:
        "Level 30 enchanting room setup with hidden storage and automatic sorting system! #minecraft #enchanting",
    },
    {
      id: 4,
      title: "Snowy Taiga Base",
      src: "/Shorts/Snowy_Taiga.mp4",
      username: "@SurvivalPro",
      description:
        "How to survive the one block challenge! Watch until the end for the secret trick! #minecraft #challenge #oneblock",
    },
  ];

  // Featured short with expanded details
  const featuredShort = {
    id: 0,
    title: "Ultimate Starter House",
    src: "/Shorts/Simple_Pond.mp4",
    username: "@MinecraftMaster",
    description:
      "Build this amazing starter house in under 10 minutes with basic materials! Perfect for day one survival. Follow for more tutorials and building tips! #minecraft #tutorial #house #survival",
    likes: "1.2M",
    comments: "8,354",
    shares: "225.3K",
    saved: "312.8K",
  };

  // Function to handle clicking on a short
  const handleShortClick = (id) => {
    setActiveShort(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <section className="px-4 py-10 mt-16 max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center">Minecraft Shorts</h1>
          <p className="text-center text-gray-600 mt-2">
            Quick tutorials and awesome builds
          </p>
        </div>

        {/* Featured Vertical Short with Side Text */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
            {/* Video Container */}
            <div className="aspect-[9/16] w-[300px] sm:w-[360px] lg:w-[400px] rounded-xl overflow-hidden shadow-lg">
              <video
                src={
                  activeShort === 0
                    ? featuredShort.src
                    : shorts[activeShort - 1].src
                }
                controls
                className="w-full h-full object-cover"
                autoPlay
              />
            </div>

            {/* TikTok-style Information Panel */}
            <div className="w-full lg:w-1/3 flex flex-col">
              <div className="bg-white rounded-xl shadow-md p-6">
                {/* Creator Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/150?u=${
                        activeShort === 0
                          ? featuredShort.username
                          : shorts[activeShort - 1].username
                      }`}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      {activeShort === 0
                        ? featuredShort.username
                        : shorts[activeShort - 1].username}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {activeShort === 0
                        ? featuredShort.title
                        : shorts[activeShort - 1].title}
                    </p>
                  </div>
                  <button className="ml-auto bg-red-600 hover:bg-red-700 text-white font-medium rounded-full px-4 py-1.5 text-sm">
                    Follow
                  </button>
                </div>

                {/* Description */}
                <p className="text-base mb-6">
                  {activeShort === 0
                    ? featuredShort.description
                    : shorts[activeShort - 1].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Shorts in Vertical Grid */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6">More Shorts</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shorts.map((short) => (
            <div
              key={short.id}
              className={`relative aspect-[9/16] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer ${
                activeShort === short.id ? "ring-4 ring-red-500" : ""
              }`}
              onClick={() => handleShortClick(short.id)}
            >
              <video
                src={short.src}
                className="w-full h-full object-cover"
                muted
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <h3 className="text-white font-semibold truncate">
                  {short.title}
                </h3>
                <p className="text-gray-300 text-sm truncate">
                  {short.username}
                </p>
                <div className="flex items-center mt-1">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-white text-xs">{short.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={() =>
              setActiveShort(
                (prev) => (prev - 1 + shorts.length + 1) % (shorts.length + 1)
              )
            }
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg"
          >
            Previous
          </button>

          {/* Dots or Numbers */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveShort(0)}
              className={`w-3 h-3 rounded-full ${
                activeShort === 0 ? "bg-red-500" : "bg-gray-400"
              }`}
            />
            {shorts.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveShort(index + 1)}
                className={`w-3 h-3 rounded-full ${
                  activeShort === index + 1 ? "bg-red-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setActiveShort((prev) => (prev + 1) % (shorts.length + 1))
            }
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg"
          >
            Next
          </button>
        </div>

        {/* Featured Shorts Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-2">
            Want To See Your Build Featured?
          </h2>
          <p className="mb-4">
            Submit your own Minecraft shorts and get featured on our page!
          </p>
          <button className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-200">
            Submit Your Short
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShortsPage;
