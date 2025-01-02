import { NAV_LINKS } from "../constants";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
        document.body.style.overflow = 'unset';
      };
  }, [isMenuOpen]);



  return (
    <header className="py-4 sticky top-0 z-50">
      <div className="screen-max-width flex-between">
        <h1 className="logo">Charllson</h1>

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
              <a href={link.url} key={link.label} className="hidden lg:block">
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden ">
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-background transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center gap-8 p-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className={`text-xl ${
                    link.label === "Hire Me!"
                      ? "btn-backgroud py-2 px-4 rounded-lg"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <ModeToggle />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
