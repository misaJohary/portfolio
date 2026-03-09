'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, Heart } from 'lucide-react';
import { skills } from '@/data/skills';

const stats = [
  { label: 'Projects Completed', value: '15+', icon: Sparkles },
  { label: 'Happy Clients', value: '10+', icon: Heart },
  { label: 'Code Commits', value: '1000+', icon: Code2 },
  { label: 'Coffee Cups', value: '∞', icon: Zap },
];

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 bg-tertiary relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-4">
              I'm a full-stack mobile developer specializing in <span className="font-bold text-primary">Flutter</span> for
              front-end and <span className="font-bold text-primary">Python (FastAPI)</span> for back-end.
            </p>
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              I love building efficient, well-architected apps that deliver seamless user experiences with beautiful, intuitive interfaces.
            </p>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-secondary/10 rounded-2xl blur group-hover:blur-xl transition-all"></div>
              <div className="relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-secondary">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid - Icons Only */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.15, y: -10 }}
              className="group relative"
              title={skill.name}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 aspect-square flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <skill.Icon />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
