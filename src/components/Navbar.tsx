import { NAV_LINKS } from "../constants";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // setIsMenuOpen(false); // Close mobile menu if open
      // element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

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
      className={`py-4 z-50 transition-all duration-300 shadow-sm ${
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
              <div key={link.label} className="flex items-center gap-10 max-lg:gap-5">
                <a
                  href={link.url}
                  onClick={(e) => handleNavClick(e, link.url.substring(1))}
                  className="btn-backgroud py-2 px-4 rounded-lg max-sm:hidden hover:text-purple-500"
                >
                  {link.label}
                </a>
                <ModeToggle />
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-gray-700 dark:text-white"
                  >
                    {isMenuOpen ? <X size={34} /> : <Menu size={34} />}
                  </button>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.url}
                className="hidden lg:block text-gray-500 dark:text-white transition-all duration-300 ease-in-out hover:text-purple-500 dark:hover:text-purple-500"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
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
                  onClick={(e) => {
                    handleNavClick(e, link.url.substring(1));
                    setIsMenuOpen(false);
                  }}
                  className={`text-xl hover:text-purple-500 dark:text-white text-gray-500 dark:hover:text-purple-500 transition-all duration-300 ease-in-out ${
                    link.label === "Hire Me!"
                      ? "btn-backgroud text-white dark:text-white py-2 px-4 rounded-lg"
                      : ""
                  }`}
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
