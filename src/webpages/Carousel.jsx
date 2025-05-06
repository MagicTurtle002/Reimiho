import { useState, useEffect } from "react";

const posts = [
  {
    title: "Treehouse Survival",
    description:
      "A simple survival treehouse perfect for your Minecraft journey! #minecraft #reimiho #minecraftdesign #mcbuilds #fyp #minecraftbuilds #minecraftbuilding #minecraftsurvival",
    image: "/Post1/1.png",
    link: "#",
    images: [
      { src: "/Post1/1.png", alt: "Treehouse Survival" },
      { src: "/Post1/2.png", alt: "Treehouse Survival" },
      { src: "/Post1/3.png", alt: "Treehouse Survival" },
      { src: "/Post1/4.png", alt: "Treehouse Survival" },
      { src: "/Post1/5.png", alt: "Treehouse Survival" },
    ],
  },
  {
    title: "Quarry House",
    description:
      "Another build for our next video, which is the Mining Area or Quarry build! 😁 #minecraft #reimiho #minecraftdesign #minecraftshorts #fyp #mcbuilds #tips #minecraftbuilding #minecraftbuilds #minecraftsurvival",
    image: "/Post2/1.png",
    link: "#",
    images: [
      { src: "/Post2/1.png", alt: "Quarry House" },
      { src: "/Post2/2.png", alt: "Quarry House" },
      { src: "/Post2/3.png", alt: "Quarry House" },
      { src: "/Post2/4.png", alt: "Quarry House" },
      { src: "/Post2/5.png", alt: "Quarry House" },
    ],
  },
  {
    title: "Mining Crane",
    description:
      "Here’s a simple design of Mine Crane! Perfect for your quarry builds or mining area builds! Tutorial will be posted soon! #minecraft #reimiho #mcbuilds #minecraftdesign #fyp #minecraftbuilding #minecraftsurvival",
    image: "/Post3/1.png",
    link: "#",
    images: [
      { src: "/Post3/1.png", alt: "Mining Crane" },
      { src: "/Post3/2.png", alt: "Mining Crane" },
      { src: "/Post3/3.png", alt: "Mining Crane" },
      { src: "/Post3/4.png", alt: "Mining Crane" },
      { src: "/Post3/5.png", alt: "Mining Crane" },
    ],
  },
  {
    title: "Starter House",
    description:
      "Hello everyone! I hope you liked my recently uploaded video which is another starter house! Tomorrow I’ll be making a poll to ask which video would you like to see next :)Have a great day and thanks for watching! Drink water! 🫶",
    image: "/Post4/1.png",
    link: "#",
    images: [
      { src: "/Post4/1.png", alt: "Starter House" },
      { src: "/Post4/2.png", alt: "Starter House" },
      { src: "/Post4/3.png", alt: "Starter House" },
      { src: "/Post4/4.png", alt: "Starter House" },
      { src: "/Post4/5.png", alt: "Starter House" },
    ],
  },
  {
    title: "Underground Base",
    description:
      "Took me a while to design, record, and edit this build! Just want to know your feedback about this build, and let me know if you have suggestions for the next tutorials! Thank you and have a great day! Noot noot (drink water) 😁",
    image: "/Post5/1.png",
    link: "#",
    images: [
      { src: "/Post5/1.png", alt: "Underground Base" },
      { src: "/Post5/2.png", alt: "Underground Base" },
      { src: "/Post5/3.png", alt: "Underground Base" },
      { src: "/Post5/4.png", alt: "Underground Base" },
      { src: "/Post5/5.png", alt: "Underground Base" },
    ],
  },
];

export default function CarouselSection() {
  const [currentOuterIndex, setCurrentOuterIndex] = useState(0);
  const [innerIndices, setInnerIndices] = useState(Array(posts.length).fill(0));
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate outer carousel
  useEffect(() => {
    if (isHovering) return; // Pause when hovering

    const interval = setInterval(() => {
      setCurrentOuterIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovering]);

  // Auto-rotate inner carousel
  useEffect(() => {
    if (isHovering) return; // Pause when hovering

    const innerInterval = setInterval(() => {
      setInnerIndices((prev) => {
        const newIndices = [...prev];
        const current = posts[currentOuterIndex];
        if (current.images.length > 1) {
          newIndices[currentOuterIndex] =
            (newIndices[currentOuterIndex] + 1) % current.images.length;
        }
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(innerInterval);
  }, [currentOuterIndex, isHovering]);

  const goToOuterSlide = (index) => setCurrentOuterIndex(index);
  const goToInnerSlide = (index) => {
    setInnerIndices((prev) => {
      const newIndices = [...prev];
      newIndices[currentOuterIndex] = index;
      return newIndices;
    });
  };

  const currentOuterItem = posts[currentOuterIndex];
  const currentInnerIndex = innerIndices[currentOuterIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-3"></div>
        </div>

        {/* Main Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Navigation Buttons - Positioned outside the content for better visibility */}
          <button
            onClick={() =>
              setCurrentOuterIndex(
                (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-40 p-4 rounded-full bg-red-500 text-white hover:bg-red-600 shadow-lg transition-all duration-300 flex items-center justify-center"
            aria-label="Previous category"
          >
            <span className="text-xl font-bold">◀</span>
          </button>

          <button
            onClick={() =>
              setCurrentOuterIndex(
                (prevIndex) => (prevIndex + 1) % posts.length
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-40 p-4 rounded-full bg-red-500 text-white hover:bg-red-600 shadow-lg transition-all duration-300 flex items-center justify-center"
            aria-label="Next category"
          >
            <span className="text-xl font-bold">▶</span>
          </button>

          <div
            className="relative bg-white rounded-xl shadow-xl overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Text content - FIRST on mobile, SECOND on desktop */}
              <div className="order-2 md:order-2 flex flex-col justify-center space-y-6">
                <div className="overflow-hidden">
                  {posts.map((post, idx) => (
                    <h2
                      key={idx}
                      className={`text-3xl font-bold text-gray-800 transition-transform duration-500 ease-in-out ${
                        idx === currentOuterIndex
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0 absolute"
                      }`}
                    >
                      {post.title}
                    </h2>
                  ))}
                </div>

                <div className="overflow-hidden h-20">
                  {posts.map((post, idx) => (
                    <p
                      key={idx}
                      className={`text-lg text-gray-600 transition-transform duration-500 delay-100 ease-in-out ${
                        idx === currentOuterIndex
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0 absolute"
                      }`}
                    >
                      {post.description}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image carousel - SECOND on mobile, FIRST on desktop */}
              <div className="order-1 md:order-1 relative aspect-square rounded-lg overflow-hidden shadow-lg">
                {/* Image container with shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>

                {currentOuterItem.images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentInnerIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />

                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 transition-transform">
                        {image.caption}
                      </div>
                    )}
                  </div>
                ))}

                {/* Inner carousel controls - only show if multiple images - Improved positioning and visibility */}
                {currentOuterItem.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setInnerIndices((prev) => {
                          const updated = [...prev];
                          updated[currentOuterIndex] =
                            (updated[currentOuterIndex] -
                              1 +
                              currentOuterItem.images.length) %
                            currentOuterItem.images.length;
                          return updated;
                        })
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white transition-all"
                      aria-label="Previous image"
                    >
                      <span className="text-sm font-bold">◀</span>
                    </button>

                    <button
                      onClick={() =>
                        setInnerIndices((prev) => {
                          const updated = [...prev];
                          updated[currentOuterIndex] =
                            (updated[currentOuterIndex] + 1) %
                            currentOuterItem.images.length;
                          return updated;
                        })
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white transition-all"
                      aria-label="Next image"
                    >
                      <span className="text-sm font-bold">▶</span>
                    </button>

                    {/* Inner indicators - Made more visible */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                      {currentOuterItem.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToInnerSlide(index)}
                          className={`h-3 rounded-full transition-all duration-300 ${
                            index === currentInnerIndex
                              ? "bg-white w-6"
                              : "bg-white/60 w-3 hover:bg-white/90"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Outer indicators - Made more prominent */}
            <div className="flex justify-center space-x-4 py-5">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToOuterSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentOuterIndex
                      ? "bg-red-500 w-4 h-4 rounded-full scale-110"
                      : "bg-gray-300 w-3 h-3 rounded-full hover:bg-gray-400"
                  }`}
                  aria-label={`Go to category ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
