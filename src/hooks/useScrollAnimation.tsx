import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer API
 * @param threshold - Percentage of element visibility to trigger animation (default: 0.15)
 * @param triggerOnce - If true, animation only triggers once (default: true)
 * @param rootMargin - Margin around root for early/late triggering (default: "0px")
 */
export const useScrollAnimation = ({
  threshold = 0.15,
  triggerOnce = true,
  rootMargin = "0px"
}: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class when element enters viewport
            entry.target.classList.add("visible");
            
            // Disconnect observer if animation should only trigger once
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            // Remove visible class if animation should repeat
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    // Start observing the element
    observer.observe(element);

    // Cleanup: disconnect observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return elementRef;
};
