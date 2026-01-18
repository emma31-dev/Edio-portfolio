import { useEffect, useRef, useCallback } from 'react';

interface ScrollSyncOptions {
  enabled?: boolean;
  throttleMs?: number;
}

export const useScrollSync = (options: ScrollSyncOptions = {}) => {
  const { enabled = true, throttleMs = 16 } = options;
  const elementsRef = useRef<HTMLElement[]>([]);
  const isScrollingRef = useRef<boolean>(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const addElement = useCallback((element: HTMLElement | null) => {
    if (!element || !enabled) return;
    
    // Remove element if it already exists
    elementsRef.current = elementsRef.current.filter(el => el !== element);
    
    // Add the new element
    elementsRef.current.push(element);
  }, [enabled]);

  const removeElement = useCallback((element: HTMLElement) => {
    elementsRef.current = elementsRef.current.filter(el => el !== element);
  }, []);

  const syncScroll = useCallback((sourceElement: HTMLElement, scrollLeft: number) => {
    if (!enabled || isScrollingRef.current) return;
    
    isScrollingRef.current = true;
    
    elementsRef.current.forEach(element => {
      if (element !== sourceElement) {
        element.scrollLeft = scrollLeft;
      }
    });
    
    // Clear the scrolling flag after a short delay
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      isScrollingRef.current = false;
    }, throttleMs);
  }, [enabled, throttleMs]);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      if (elementsRef.current.includes(target)) {
        syncScroll(target, target.scrollLeft);
      }
    };

    // Add scroll listeners to all elements
    elementsRef.current.forEach(element => {
      element.addEventListener('scroll', handleScroll, { passive: true });
    });

    return () => {
      // Cleanup scroll listeners
      elementsRef.current.forEach(element => {
        element.removeEventListener('scroll', handleScroll);
      });
      
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [enabled, syncScroll]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    addElement,
    removeElement
  };
};