import { useEffect, useState } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
    words: string;
    className?: string;
    filter?: boolean;
    delay?: number;
    continuous?: boolean;
    smoothScroll?: boolean;
  } 

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
    words,
    className = "",
    filter = true,
    delay = 0.05,
    continuous = true,
    smoothScroll = true,
  }) => {
    const [displayedText, setDisplayedText] = useState("");
    
    useEffect(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= words.length) {
          setDisplayedText(words.slice(0, currentIndex));
          currentIndex++;
        } else if (continuous) {
          currentIndex = 0; // Reset for continuous animation
        } else {
          clearInterval(intervalId);
        }
      }, delay * 1000);
  
      return () => clearInterval(intervalId);
    }, [words, delay, continuous]);
  
    return (
      <div className={`${className} ${smoothScroll ? 'transition-all duration-300' : ''}`}>
        {displayedText}
        <span className="animate-pulse text-purple-500">|</span>
      </div>
    );
  };