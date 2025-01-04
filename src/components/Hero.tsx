import { HERO_DATA } from "@/constants";
import { heroImage } from "@/utils";
import {
  FaFacebookF,
  FaDownload,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import ScrollAnimation from "@/components/animations/scrollAnimation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Crafting innovative digital solutions through clean, efficient
                  code. Specialized in building scalable web applications that
                  combine cutting-edge frontend design with robust backend
                  architecture.`;

export default function Hero() {
  return (
    <section
      className="pt-10 w-full dark:bg-gradient-to-tl dark:from-black dark:from-60% dark:to-purple-600 bg-gradient-to-tl from-white from-60% to-purple-400"
      id="hero"
    >
      <div className="screen-max-width pb-16">
        <div className="flex min-h-[calc(100vh-80px)] flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left max-w-[600px]">
            <ScrollAnimation>
              <h1 className="font-bold">
                <div className="text-2xl sm:text-3xl font-bold text-gray-500 dark:text-white">
                  I am Charllson
                </div>
                <div className="pt-4 sm:pt-8">
                  <span className="text-5xl sm:text-7xl font-bold">
                    <span className="text-purple-500 inline-block">
                      Web Developer
                    </span>
                  </span>
                </div>
                <p className="text-gray-500 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <TextGenerateEffect
                    words={words}
                    className="inline-block"
                    filter={true}
                    delay={0.03}
                    continuous={false}
                    smoothScroll={true}
                  />
                </p>
              </h1>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
              <ScrollAnimation>
                <button className="hero-btn-style inline-flex items-center gap-2">
                  Download CV
                  <FaDownload className="w-4 h-4" />
                </button>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/fanyicharllson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-icon-style"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fanyi-charllson-ab19492b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-icon-style"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100095106464913"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-icon-style"
                  >
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex-center">
            <ScrollAnimation>
              <div className="relative w-full max-w-[400px] lg:max-w-[450px] aspect-square">
                <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-3xl transform "></div>
                <img src={heroImage} alt="Hero" className="hero-image-style" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation>
          <div className="flex flex-col max-md:gap-y-10 md:flex-row justify-around pt-10">
            {HERO_DATA.numbers.map((number, index) => (
              <div className="flex-center flex-col" key={index}>
                <p className="hero-number-style">{number}</p>
                <p className="hero-text-style">{HERO_DATA.texts[index]}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
