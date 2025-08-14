'use client';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface AnimatedDivProps extends HTMLAttributes<HTMLDivElement> {
  delay?: string;
}

export function AnimatedDiv({
  className,
  children,
  delay = '0s',
  ...props
}: AnimatedDivProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transform-gpu transition-all duration-700 ease-out',
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0',
        className
      )}
      style={{ transitionDelay: delay }}
      {...props}
    >
      {children}
    </div>
  );
}
