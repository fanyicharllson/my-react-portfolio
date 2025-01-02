import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>,
  options: any = {}
) => {
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(ref.current) as HTMLElement[];

      elements.forEach((element: HTMLElement) => {
        gsap.set(element, {
          y: options.yStart ?? 100,
          opacity: 0,
        });

        // Create animation
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 1,
          ease: options.ease ?? "power2.out",
          scrollTrigger: {
            trigger: element,
            start: options.start ?? "bottom bottom",
            end: options.end ?? "top 80%",
            toggleActions: options.toggleActions ?? "play reverse play reverse",
            once: options.once ?? true,
            markers: options.markers ?? false,
          },
          ...options.animation,
        });
      });
    },
    { scope: ref }
  );
};
