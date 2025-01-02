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

// Services Section data interface
interface ServiceItemProps {
  number: string;
  title: string;
  disc: string;
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
  numbers: ["2", "3+", "10"],
  texts: ["Years of Experience", "Projects Completed", "Happy Clients"],
};

// Services Section
export const SERVICES_DATA: ServiceItemProps[] = [
  {
    number: "01",
    title: "Web Development",
    disc: "Creating modern, fast, and scalable web applications using the latest technologies and best practices.",
  },
  {
    number: "02",
    title: "Responsive Design",
    disc: "Building websites that look and function beautifully across all devices, from mobile to desktop.",
  },
  {
    number: "03",
    title: "Innovative Solutions",
    disc: "Delivering creative and efficient solutions to complex problems through cutting-edge development approaches.",
  },
];
