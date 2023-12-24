import { useState, useEffect } from 'react';

const useScroll = (whiteBackground: boolean) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (whiteBackground) return;

    const scrollHandler = () => {
      window.pageYOffset > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [whiteBackground]);

  return isScrolled;
};

export default useScroll;