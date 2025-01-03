import { charityImage } from "../utils"
import { jsImage } from "../utils"

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

// Works section
export const WORKS_DATA = [
    {
        img: charityImage,
        title: "Charity Hub",
        disc: "A platform for charitable donations.",
        github: "https://github.com/fanyicharllson/CharityHub",
        technologies: ["React", "Tailwind", "TypeScript", "Next.js", "Hyper UI"],
        link: "https://charityhub-rho.vercel.app/",
    },
    {
        img: jsImage,
        title: "Food Order Website",
        disc: "A website for ordering food.",
        github: "https://github.com/fanyicharllson/food-order-website",
        technologies: ["Sass", "JavaScript", "css", "html", "Bootstrap", "slider"],
        link: "https://food-order-charlse.netlify.app/",
    },
    {
        img: charityImage,
        title: "Charity Hub",
        disc: "A platform for charitable donations.",
        github: "https://github.com/Rho-dev/charity-hub",
        technologies: ["React", "Tailwind", "TypeScript", "Next.js", "Shadcn"],
        link: "https://charityhub-rho.vercel.app/",
    },
];
