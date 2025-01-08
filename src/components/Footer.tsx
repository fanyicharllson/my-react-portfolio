import { NAV_LINKS } from "@/constants";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-800 w-full flex flex-col">
      <div className="max-screen-width mx-auto  flex-col flex-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="logo pt-10">
            <a href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
              Charllson
            </a>
          </h1>
          <div className="flex gap-4 pt-5 max-md:flex-col">
            {NAV_LINKS.map((link) =>
              link.label === "Hire Me!" ? (
                <div key={link.label} className="hidden"></div>
              ) : (
                <div key={link.label}>
                  <a
                    href={link.url}
                    className="text-gray-300 dark:text-white transition-all duration-300 ease-in-out hover:text-purple-500 dark:hover:text-purple-500"
                  >
                    {link.label}
                  </a>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col items-center justify-center pt-5">
            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} Charllson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={scrollToTop}
          className={`fixed right-4 bottom-4 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
