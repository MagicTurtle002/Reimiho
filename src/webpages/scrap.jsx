// HeroSection.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";

const sections = ["#home", "#tutorials", "#shorts", "#merch", "#contact"];

const posts = [
  "/hqdefault-2.jpg",
  "/hqdefault-3.jpg",
  "/hqdefault-4.jpg",
  "/hqdefault-5.jpg",
  "/hqdefault-2.jpg",
];

export default function HeroSection() {
  const [currentSection, setCurrentSection] = useState("#home");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
    );
  };

  const handleSlideTo = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
      <div>
        {/* Full Page Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navbar */}
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      {/* Carousel */}
      <div
        id="default-carousel"
        className="relative w-full h-screen bg-black/80"
        data-carousel="slide"
      >
        {/* Carousel Wrapper */}
        <div className="relative h-full overflow-hidden rounded-lg">
          {posts.map((imageUrl, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === currentIndex ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <img
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                className="absolute block w-[80%] mx-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {posts.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSlideTo(index)}
              aria-label={`Slide ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <ControlIcon direction="left" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <ControlIcon direction="right" />
        </button>
      </div>
    </div>
  );
}

// Extracted Control Icon into a separate reusable component
function ControlIcon({ direction }) {
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg
        className={`w-4 h-4 text-white dark:text-gray-800 ${
          direction === "left" ? "rtl:rotate-180" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          d={direction === "left" ? "M5 1 1 5l4 4" : "m1 9 4-4-4-4"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <span className="sr-only">
        {direction === "left" ? "Previous" : "Next"}
      </span>
    </span>
  );
}
