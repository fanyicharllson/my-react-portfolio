import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Services from "./components/Services";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className=" text-white min-h-screen flex flex-col ">
        <Navbar />
        <Hero />
        <Services />
      </main>
    </ThemeProvider>
  )
}