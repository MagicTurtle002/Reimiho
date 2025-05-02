import React from "react";
import Footer from "../components/Footer";

const ShortsPage = () => {
  const shorts = [
    { id: 1, title: "Short 1", src: "/shorts/1.mp4" },
    { id: 2, title: "Short 2", src: "/shorts/2.mp4" },
    { id: 3, title: "Short 3", src: "/shorts/3.mp4" },
    { id: 4, title: "Short 4", src: "/shorts/4.mp4" },
  ];

  return (
    <section className="px-4 py-10 mt-24 max-w-7xl mx-auto">
      {/* Featured Vertical Short */}
      <div className="mb-12 flex justify-center">
        <div className="aspect-[9/16] w-[300px] sm:w-[360px] lg:w-[400px] rounded-xl overflow-hidden shadow-lg">
          <video
            src="/shorts/featured.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Other Shorts in Vertical Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shorts.map((short) => (
          <div
            key={short.id}
            className="aspect-[9/16] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <video
              src={short.src}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShortsPage;