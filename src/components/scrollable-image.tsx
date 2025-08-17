'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ScrollableImage({ src, alt, className }: ScrollableImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to grayscale value:
  // Starts at grayscale(100%)
  // Becomes grayscale(0%) when the image is centered in the viewport
  // Goes back to grayscale(100%) as it exits
  const filter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['grayscale(100%)', 'grayscale(0%)', 'grayscale(100%)']
  );

  return (
    <div ref={ref} className="h-full">
      <motion.img
        src={src}
        alt={alt}
        className={className}
        style={{ filter }}
      />
    </div>
  );
}
