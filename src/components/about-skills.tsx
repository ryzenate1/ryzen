'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

// Icon Imports
import { SiUbuntu } from "react-icons/si";
import { FaReact, FaCloud } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

// Skill Type
type Skill = {
  name: string;
  Icon: React.ComponentType<any>;
  color: string;
  textLines: string[];
};

// Skills Array
const skills: Skill[] = [
  {
    name: "Linux",
    Icon: SiUbuntu,
    color: "text-[#E95420]",
    textLines: ["Server Provisioning", "Shell Scripting & Automation", "Service Monitoring & Uptime"],
  },
  {
    name: "React.js",
    Icon: FaReact,
    color: "text-[#61DAFB]",
    textLines: ["Component Architecture", "State Management Patterns", "Performance Optimization"],
  },
  {
    name: "Cloud",
    Icon: FaCloud,
    color: "text-[#4285F4]",
    textLines: ["Scalable Cloud Solutions", "Infrastructure as Code (IaC)", "Serverless Computing"],
  },
  {
    name: "Networking",
    Icon: IoShareSocialOutline,
    color: "text-[#34A853]",
    textLines: ["Network Configuration", "Troubleshooting Protocols", "Security Best Practices"],
  },
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AboutSkills = () => {
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  const terminalContent = 
`riyaz@portfolio/root:~$ bash /.riyaz

Processing... 
Compiling sources...
Installing necessary packages...
Fetching profile...

Initializing Riyaz Portfolio...

Hey there! I'm a 17-year-old passionate coder who's absolutely obsessed with exploring new things and questioning everything around me. Why? Because that's how you truly learn!

"Jack of all trades, master of none" - that's my motto and I wear it proudly. I dive deep into Android development, web development, cloud architecture, system administration, networking, nutrition, server management, PC building, content creation, teaching, inventing new stuff, kinesiology, and biomechanics. 

I'm a free learner - I learn what I want to learn, do what I love, and I'm genuinely good at what I do. Haven't mastered everything yet, but that's the beauty of the journey, right?

Currently rocking as a Full-Stack Web Developer, and when I'm not coding, you'll find me chatting with ChatGPT (yes, I love ragebaiting LLMs - it's an art form), hitting the gym as a fitness hobbyist, or diving into the latest tech that caught my curiosity.

I'm passionate about everything I touch, always questioning "why" and "how can this be better?" Ready to build something amazing together?

riyaz@portfolio/root:~$ _
`;

  const typingSpeed = 25;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !startTyping) {
          setStartTyping(true);
        }
      },
      { threshold: 0.3 }
    );
    if (terminalBodyRef.current) observer.observe(terminalBodyRef.current);

    return () => {
      if (terminalBodyRef.current) observer.unobserve(terminalBodyRef.current);
    };
  }, [startTyping]);

  useEffect(() => {
    if (!startTyping || displayedText.length >= terminalContent.length) return;

    const timeoutId = setTimeout(() => {
      const nextChar = terminalContent.charAt(displayedText.length);
      setDisplayedText(prev => prev + nextChar);
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [startTyping, displayedText, terminalContent, typingSpeed]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [displayedText]);

  return (
    <div className="relative py-16 md:py-24 px-4 md:px-8">
      
      {/* Skills Icons */}
      <motion.div
        className="max-w-screen-lg mx-auto grid grid-cols-2 justify-items-center gap-x-8 gap-y-12 sm:gap-x-12 md:flex md:flex-wrap md:justify-center md:gap-x-20 md:gap-y-12 lg:gap-x-28 mb-16 sm:mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => {
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center w-28 sm:w-32 md:w-36 text-center"
              title={skill.name}
              aria-label={`Skill: ${skill.name}`}
            >
              <skill.Icon size={35} className={`${skill.color}`} aria-label={skill.name} />
              <span className="mt-2 text-sm font-semibold text-center text-neutrals-300 font-sans">
                {skill.name}
              </span>
              <div className="skill-popup-text w-full h-[4.5em] text-center text-xs sm:text-sm font-jetbrains text-[#39FF14] flex items-center justify-center">
                <Typewriter
                  words={skill.textLines}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={40}
                  deleteSpeed={20}
                  delaySpeed={2500}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Terminal */}
      <motion.div
        className="mac-terminal max-w-4xl w-full mx-auto mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-2 p-2 bg-neutrals-800 rounded-t-lg">
          <span className="h-3 w-3 bg-red-500 rounded-full"></span>
          <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
        </div>
        <div
          ref={terminalBodyRef}
          className="p-4 text-[#39FF14] font-jetbrains text-xs sm:text-sm md:text-base h-[300px] sm:h-[400px] md:h-[450px] overflow-y-auto whitespace-pre-wrap leading-relaxed scrollbar-hide bg-neutrals-900 rounded-b-lg border border-neutrals-700"
        >
          <pre className="whitespace-pre-wrap">{displayedText}</pre>
        </div>
      </motion.div>
    </div>
  );
};

export { AboutSkills };
