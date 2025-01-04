import { charityImage, jsImage, nextImage, reactImage, typescriptImage, tailwindImage } from "../utils"
import { foodImage } from "../utils"

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

// Skills Section data interface
interface Skill {
  img: string;
  title: string;
  percentage: string;
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
        img: foodImage,
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

// Skills Section
export const SKILLS_DATA: Skill[] = [
    {
        img: jsImage,
        title: "JavaScript",
        percentage: "80%",
    },
    {
       img: reactImage,
       title: "React",
       percentage: "85%",
    },
    {
       img: nextImage,
       title: "Next.js",
       percentage: "65%",
    },
    {
      img: typescriptImage,
      title: "TypeScript",
      percentage: "60%",
    },
    {
      img: tailwindImage,
      title: "Tailwind",
      percentage: "70%",
    },
] 

// Testimonials Section
export const TESTIMONIALS_DATA = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
