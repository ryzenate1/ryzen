'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: i * 0.15 },
  }),
};

const letterVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', damping: 10, stiffness: 100 },
  },
};

const AnimatedText = () => {
  const targetText = "Hello, I'm Riyaz";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < targetText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(targetText.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeoutId);
    }
    // Return void for consistency
    return;
  }, [currentIndex, targetText]);

  const titleH1Class =
    'font-extrabold tracking-tight uppercase leading-tight text-white';

  return (
    <div className="flex flex-col items-center justify-center text-center transform translate-y-0.5">
      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-3xl sm:text-5xl md:text-6xl font-mono text-[#39FF14] mb-6 sm:mb-8 md:mb-10 whitespace-nowrap leading-tight"
        style={{
          textShadow: '0 0 8px rgba(57, 255, 20, 0.6)',
          fontFamily: 'JetBrains Mono, monospace'
        }}
      >
        <div className="inline-flex items-center">
          {displayText}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatType: 'loop' }}
            className="ml-1 inline-block align-middle w-[10px] h-[1.2em] ml-[2px]"
            style={{
              backgroundColor: '#79c0ff',
              color: '#79c0ff'
            }}
          >
            &nbsp;
          </motion.span>
        </div>
      </motion.div>

      {/* FULL-STACK */}
      <div className="relative self-center mt-2">
        <motion.h1
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className={`${titleH1Class} text-5xl sm:text-7xl md:text-7xl lg:text-8xl text-center mb-2 whitespace-nowrap`}
          style={{
            textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          {Array.from('FULL-STACK').map((letter, index) => (
            <motion.span key={index} variants={letterVariant} className="inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* DEVELOPER & */}
      <div className="relative self-center mt-2">
        <motion.h1
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          custom={1}
          className={`${titleH1Class} text-5xl sm:text-7xl md:text-7xl lg:text-8xl text-center mb-2`}
          style={{
            textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          <div className="inline">
            {Array.from('DEVELOPER').map((letter, index) => (
              <motion.span key={`developer-${index}`} variants={letterVariant} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          <span className="text-[#39FF14] ml-4" style={{ textShadow: '0 0 8px rgba(57, 255, 20, 0.6)' }}>
            &amp;
          </span>
        </motion.h1>
      </div>

      {/* KINESIOLOGY ENTHUSIAST */}
      <div className="relative self-center mt-2">
        <motion.h1
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          custom={2}
          className={`${titleH1Class} text-4xl sm:text-6xl md:text-6xl lg:text-7xl text-center`}
          style={{
            textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          <div className="block sm:inline">
            {Array.from('KINESIOLOGY').map((letter, index) => (
              <motion.span key={`kinesiology-${index}`} variants={letterVariant} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          <div className="block sm:inline sm:ml-6 mt-1 sm:mt-0">
            {Array.from('ENTHUSIAST').map((letter, index) => (
              <motion.span key={`enthusiast-${index}`} variants={letterVariant} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
        </motion.h1>
      </div>
    </div>
  );
};

export { AnimatedText };
