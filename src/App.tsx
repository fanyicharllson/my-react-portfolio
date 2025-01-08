import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Services from "./components/Services";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className=" text-white min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Services />
        <Works />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}