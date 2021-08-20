import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useIsScrollReachedId(): boolean {
  const [isScrollReached, setIsScrollReached] = useState(false);

  // var target = document.querySelector(`.${className}`);

  const scrollReachDetector = () => {
    if (window.scrollY >= 100) {
      setIsScrollReached(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollReachDetector);
  }, []);

  return isScrollReached;
}
