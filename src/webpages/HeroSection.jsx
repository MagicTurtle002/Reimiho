import { forwardRef, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const HeroSection = forwardRef((props, ref) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      ref={ref}
      className="relative isolate h-screen w-full overflow-hidden bg-white text-black"
      aria-label="Hero Section"
    >
      {/* Video Background */}
      <div id="hero-bg" className="absolute inset-0 z-[-2]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/Reimiho_Landing_Video.mp4" type="video/mp4" />
          <source src="/fallback-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Audio Toggle Button */}
      <button
        onClick={toggleAudio}
        className="absolute bottom-6 right-6 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>
    </section>
  );
});

export default HeroSection;