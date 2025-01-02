import { NAV_LINKS } from "../constants";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#hero");
      if (heroSection) {
        const heroHeight = heroSection.getBoundingClientRect().height;
        setIsSticky(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`py-4 z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md shadow-sm"
          : "relative"
      }`}
    >
      <div className="screen-max-width flex-between">
        <h1 className="logo">
          <a href="/">Charllson</a>
        </h1>

        {/* Desktop Navbar */}
        <div className="flex-center gap-10 max-lg:gap-5">
          {NAV_LINKS.map((link) =>
            link.label === "Hire Me!" ? (
              <>
                <a
                  href={link.url}
                  key={link.label}
                  className="btn-backgroud py-2 px-4 rounded-lg max-sm:hidden"
                >
                  {link.label}
                </a>
                <ModeToggle />
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2"
                  >
                    {isMenuOpen ? <X size={34} /> : <Menu size={34} />}
                  </button>
                </div>
              </>
            ) : (
              <a
                href={link.url}
                key={link.label}
                className="hidden lg:block hover:text-purple-500 transition-all duration-300 ease-in-out"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden ">
        {isMenuOpen && (
          <div
            className={`fixed inset-0 top-[72px] h-screen bg-background transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full pointer-events-none"
            }`}
          >
            <nav className="flex flex-col items-center gap-8 p-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className={`text-xl hover:text-purple-500 transition-all duration-300 ease-in-out ${
                    link.label === "Hire Me!"
                      ? "btn-backgroud py-2 px-4 rounded-lg"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
