'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [data-cursor-hover]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div className={cn(
      "pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 md:block hidden mix-blend-difference",
      isVisible ? 'opacity-100' : 'opacity-0'
      )}>
      {/* Cursor Dot */}
      <div
        className={cn(
          'absolute h-2 w-2 rounded-full bg-white transition-transform duration-200 ease-in-out',
          isHovering ? 'scale-0' : 'scale-100'
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Cursor Outline */}
      <div
        className={cn(
          'absolute h-10 w-10 rounded-full border-2 border-white transition-transform duration-200 ease-in-out',
          isHovering ? 'scale-150 opacity-50' : 'scale-100'
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
