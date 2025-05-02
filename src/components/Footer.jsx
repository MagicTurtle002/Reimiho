import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://www.youtube.com/@Reimiho" className="flex items-center">
              <img src="/LogoV1.png" className="h-8 me-3" alt="Reimiho Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Reimiho
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2020{" "}
            <a href="https://www.youtube.com/@Reimiho" className="hover:underline">
              Reimiho
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/reimihox"
              className="text-gray-500 hover:text-red-400 dark:hover:text-white"
            >
              <FaFacebookF className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/reimiho_x/"
              className="text-gray-500 hover:text-red-400 dark:hover:text-white ms-5"
            >
              <BiLogoInstagramAlt className="w-4 h-4" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://x.com/reimiho_x"
              className="text-gray-500 hover:text-red-400 dark:hover:text-white ms-5"
            >
              <FaTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://www.reddit.com/user/Reimiho/"
              className="text-gray-500 hover:text-red-400 dark:hover:text-white ms-5"
            >
              <FaReddit className="w-4 h-4" />
              <span className="sr-only">Reddit page</span>
            </a>
            <a
              href="https://www.twitch.tv/reimiho"
              className="text-gray-500 hover:text-red-400 dark:hover:text-white ms-5"
            >
              <FaTwitch className="w-4 h-4" />
              <span className="sr-only">Twitch page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
