// ScrollAnimation.jsx

import { useRef, ReactNode } from 'react';
import { useScrollAnimation } from "../../hooks/scrollAnimates";

interface ScrollAnimationProps {
  children: ReactNode;
  yStart?: number;
  duration?: number;
  ease?: string;
  start?: string;
  end?: string;
  toggleActions?: string;
  markers?: boolean;
  once?: boolean;
  animation?: object;
  className?: string;
}

const ScrollAnimation = ({ 
  children,
  yStart = 100,
  duration = 2,
  ease = 'power2.out',
  start = 'bottom bottom',
  end = 'top 80%',
  toggleActions = 'play none none reverse',
  markers = false,
  once = true,
  animation = {},
  className = ''
}: ScrollAnimationProps) => {
  const elementRef = useRef(null);

  useScrollAnimation(elementRef, {
    yStart,
    duration,
    ease,
    start,
    end,
    toggleActions,
    once,
    markers,
    animation
  });

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;