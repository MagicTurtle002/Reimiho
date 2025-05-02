import React, { useRef, useEffect, videoRef } from "react";
import { Typography } from "@material-tailwind/react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

export function ContactSection14() {
  const videoRef = useRef(null);

  // Optional: Auto-play the video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
        // Some browsers require user interaction before videos can autoplay
      });
    }
  }, []);

  return (
    <>
      <section className="px-8 py-8 pt-24 lg:py-16 mt-[80px]">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            {/* Replace the image with a video */}
            <div className="w-full h-[300px] lg:h-[510px] overflow-hidden rounded-lg mt-20">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              >
                <source src="/Skin-Animation-White.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                Your browser does not support the video tag. 
                <img src="/image/map.svg" alt="map" className="w-full h-full" />
              </video>
            </div>
            
            <div className="mt-30">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-4 !text-base lg:!text-2xl text-red-400"
              >
                Get in Touch
              </Typography>
              <Typography
                variant="h1"
                color="blue-gray"
                className="mb-4 !text-3xl lg:!text-4xl"
              >
                We&apos;d Love to Hear from You
              </Typography>
              <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                If you have any questions or inquiries, feel free to reach out
                via email or connect with us on our social media.
              </Typography>

              <div className="flex justify-center items-center space-x-6 mb-6">
                {/* Social Media Links */}
                <a
                  href="https://www.facebook.com/reimihox"
                  className="text-gray-500 hover:text-red-400 dark:hover:text-white"
                >
                  <FaFacebookF className="w-8 h-8" />
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="https://x.com/reimiho_x"
                  className="text-gray-500 hover:text-red-400 dark:hover:text-white ms-5"
                >
                  <FaTwitter className="w-8 h-8" />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="https://www.instagram.com/reimiho_x/"
                  className="text-gray-500 hover:text-red-400 dark:hover:text-white ms-5"
                >
                  <BiLogoInstagramAlt className="w-8 h-8" />
                  <span className="sr-only">Instagram page</span>
                </a>
                <a
                  href="https://www.reddit.com/user/Reimiho/"
                  className="text-gray-500 hover:text-red-400 dark:hover:text-white ms-5"
                >
                  <FaReddit className="w-8 h-8" />
                  <span className="sr-only">Reddit page</span>
                </a>
                <a
                  href="https://www.twitch.tv/reimiho"
                  className="text-gray-500 hover:text-red-400 dark:hover:text-white ms-5"
                >
                  <FaTwitch className="w-8 h-8" />
                  <span className="sr-only">Twitch page</span>
                </a>
              </div>

              <div className="flex justify-center items-center mt-[98px]">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Email Us At:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="blue-gray"
                    className="text-red-400"
                  >
                    <a href="mailto:reimihocontact@gmail.com">
                      reimihocontact@gmail.com
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection14;