'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/background.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Simple Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white/90">
                Full-Stack Mobile Developer
              </span>
            </div>
          </motion.div>

          {/* Main Heading - Clean & Simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
              Hi, I'm Misa
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            I build elegant mobile applications with{' '}
            <span className="text-white font-semibold">Flutter</span> and{' '}
            <span className="text-white font-semibold">FastAPI</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            {[
              { value: '10+', label: 'Projects' },
              { value: '4+', label: 'Years' },
              { value: '7+', label: 'Clients' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm md:text-base text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToProjects}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
