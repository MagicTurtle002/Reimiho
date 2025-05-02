import { useState, useEffect, useRef } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";

const sections = [
  { name: "Home", path: "/" },
  { name: "Tutorials", path: "/tutorials" },
  { name: "Shorts", path: "/shorts" },
  { name: "Merch", path: "/merch" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const navbarRef = useRef(null);
  const prevPathRef = useRef(currentPath);

  // Handle navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setShowNavbar(false);
      }, 3000);
    };

    // Show navbar on route change
    setShowNavbar(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setShowNavbar(false);
    }, 3000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentPath]); // Re-run when path changes

  // Check if navbar is over a dark background
  useEffect(() => {
    const checkBackgroundColor = () => {
      // First try to find elements with specific dark backgrounds
      const darkElements = document.querySelectorAll('.bg-black, .bg-gray-900, .bg-slate-800, [data-dark-section]');
      let isDark = false;
      
      if (navbarRef.current && darkElements.length > 0) {
        const navbarRect = navbarRef.current.getBoundingClientRect();
        
        // Check if navbar overlaps with any dark element
        for (const element of darkElements) {
          const elementRect = element.getBoundingClientRect();
          
          // Check for overlap
          if (
            navbarRect.bottom > elementRect.top &&
            navbarRect.top < elementRect.bottom &&
            navbarRect.right > elementRect.left &&
            navbarRect.left < elementRect.right
          ) {
            // Overlapping with dark element
            isDark = true;
            break;
          }
        }
      }
      
      // Fallback to hero element check if no dark elements were found overlapping
      if (!isDark) {
        const heroElement = document.getElementById("hero-bg");
        if (heroElement) {
          const heroRect = heroElement.getBoundingClientRect();
          const navbarRect = navbarRef.current.getBoundingClientRect();
          
          // Check if navbar overlaps with hero
          if (
            navbarRect.bottom > heroRect.top &&
            navbarRect.top < heroRect.bottom
          ) {
            isDark = true;
          }
        }
      }
      
      // Update state
      setIsDarkBackground(isDark);
    };
    
    // Check immediately when component mounts or route changes
    // Small delay to ensure DOM is updated after route change
    const timeoutId = setTimeout(checkBackgroundColor, 100);
    
    // Check on scroll
    window.addEventListener("scroll", checkBackgroundColor);
    // Check on resize (in case layout shifts)
    window.addEventListener("resize", checkBackgroundColor);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", checkBackgroundColor);
      window.removeEventListener("resize", checkBackgroundColor);
    };
  }, [currentPath]); // Re-run when path changes

  const linkClass = (path) =>
    `relative text-lg font-semibold transition-colors duration-300 ${
      currentPath === path
        ? `${
            isDarkBackground ? "text-red-300" : "text-red-500"
          } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:${
            isDarkBackground ? "bg-red-300" : "bg-red-500"
          }`
        : `${
            isDarkBackground
              ? "text-white hover:text-red-300"
              : "text-gray-900 hover:text-red-400"
          }`
    }`;

  // Log route changes for debugging
  useEffect(() => {
    if (prevPathRef.current !== currentPath) {
      console.log(`Route changed from ${prevPathRef.current} to ${currentPath}`);
      prevPathRef.current = currentPath;
    }
  }, [currentPath]);

  return (
    <header
      ref={navbarRef}
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${
        isDarkBackground 
          ? "bg-black/30 text-white" 
          : "bg-white/80 text-gray-900"
      } backdrop-blur-md`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5" aria-label="Go to homepage">
            <img className="h-12 w-auto" src="/LogoV1.png" alt="Reimiho Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              isDarkBackground ? "text-white" : "text-gray-700"
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          {sections.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={linkClass(path)}
              onClick={() => setMobileMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel
              className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
                isDarkBackground
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="-m-1.5 p-1.5"
                  aria-label="Go to homepage"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img
                    className="h-8 w-auto"
                    src="/LogoV1.png"
                    alt="Reimiho Logo"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="size-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {sections.map(({ name, path }) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                          currentPath === path
                            ? isDarkBackground
                              ? "bg-red-900/20 text-red-300"
                              : "bg-red-50 text-red-600"
                            : isDarkBackground
                              ? "text-gray-100 hover:bg-gray-800"
                              : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}