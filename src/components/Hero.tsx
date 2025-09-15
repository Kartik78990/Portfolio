import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="gradient-blur top-[20%] left-[15%]"></div>
      <div className="gradient-blur bottom-[20%] right-[15%]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7">
            <motion.h2 
              variants={itemVariants} 
              className="text-lg md:text-xl text-primary mb-4"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Kartik
              <span className="text-primary ml-3 relative inline-block">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 absolute -top-6 -right-6 text-secondary animate-pulse-slow" />
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl"
            >
              I craft elegant, interactive digital experiences that balance form and function. Creative technologist specializing in frontend development and interactive design.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="button button-primary hoverable group">
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-y-1" />
              </a>
              <a href="/KARTIK PUNDIR (1).pdf" className="button button-outline hoverable">
                Download Resume
                <Download className="w-4 h-4 ml-2 inline-block" />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary-300/20 to-accent-300/20 backdrop-blur-sm flex items-center justify-center relative overflow-hidden animate-float">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-8xl md:text-9xl font-bold"
              >
                <img src="/kartik.jpg" alt="K" />
              </motion.div>
              <div className="absolute inset-0 border border-primary/20 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
     
    </section>
  );
};

export default Hero;
