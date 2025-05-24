import React, { useRef, useEffect } from 'react';
import { ParallaxProps } from '../types';

const Parallax: React.FC<ParallaxProps> = ({ children, speed = 0.5, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollTop = window.pageYOffset;
      const elementTop = ref.current.getBoundingClientRect().top + scrollTop;
      const relativeScroll = scrollTop - elementTop;
      
      // Apply transform based on scroll position and speed
      ref.current.style.transform = `translateY(${relativeScroll * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Parallax;