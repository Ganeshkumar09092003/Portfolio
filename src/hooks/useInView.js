import { useState, useEffect, useRef } from "react";

/**
 * Custom hook that uses Intersection Observer to detect when an element enters the viewport
 * @param {Object} options - Intersection Observer options
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
export const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // Once visible, stop observing (animation plays once)
                    observer.unobserve(element);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || "0px",
                ...options,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options.threshold, options.rootMargin]);

    return [ref, isInView];
};

export default useInView;
