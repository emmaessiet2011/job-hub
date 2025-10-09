import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Custom hook that tracks the intersection of a DOM element with the viewport.
 * @param elementRef - A React ref to the DOM element to observe.
 * @param {IntersectionObserverOptions} [options] - Configuration for the IntersectionObserver.
 * @returns {boolean} - True if the element is intersecting, false otherwise.
 */
const useIntersectionObserver = (
    elementRef: RefObject<Element>,
    {
        threshold = 0.1,
        root = null,
        rootMargin = '0%',
        triggerOnce = true,
    }: IntersectionObserverOptions = {}
): boolean => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const node = elementRef?.current;
        // Ensure the browser supports IntersectionObserver
        if (!node || typeof window.IntersectionObserver === 'undefined') {
            // Fallback for older browsers or server-side rendering
            if (!isIntersecting) setIsIntersecting(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (triggerOnce && node) {
                        observer.unobserve(node);
                    }
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [elementRef, threshold, root, rootMargin, triggerOnce, isIntersecting]);

    return isIntersecting;
};

export default useIntersectionObserver;
