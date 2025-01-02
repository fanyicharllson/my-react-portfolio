// Navbar links interface
interface NavLinkProps {
  label: string;
  url: string;
}

// Hero Section data interface
interface HERO_DATAProps {
    numbers: string[];
    texts: string[];
}

// Navbar links
export const NAV_LINKS: NavLinkProps[] = [
  { label: "Services", url: "#services" },
  { label: "Works", url: "#works" },
  { label: "Resume", url: "#resume" },
  { label: "Skills", url: "#skills" },
  { label: "Testimonials", url: "#testimonials" },
  { label: "Contact", url: "#contact" },
  { label: "Hire Me!", url: "#hire-me" },
];

// Hero Section
export const HERO_DATA: HERO_DATAProps = {
  numbers: ['2', '3+', '10'],
  texts: ["Years of Experience", "Projects Completed", "Happy Clients"],
};
