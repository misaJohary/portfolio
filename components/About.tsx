'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, Heart } from 'lucide-react';

const skills = [
  { name: 'Flutter', icon: '📱', color: 'from-blue-500 to-cyan-500' },
  { name: 'Dart', icon: '🎯', color: 'from-cyan-500 to-teal-500' },
  { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-orange-500' },
  { name: 'FastAPI', icon: '⚡', color: 'from-green-500 to-emerald-500' },
  { name: 'GraphQL', icon: '🔷', color: 'from-pink-500 to-rose-500' },
  { name: 'REST API', icon: '🌐', color: 'from-purple-500 to-indigo-500' },
  { name: 'Firebase', icon: '🔥', color: 'from-orange-500 to-red-500' },
  { name: 'SQLModel', icon: '💾', color: 'from-indigo-500 to-purple-500' },
];

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
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-inter text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a full-stack mobile developer specializing in <span className="font-bold text-indigo-600 dark:text-indigo-400">Flutter</span> for
              front-end and <span className="font-bold text-purple-600 dark:text-purple-400">Python (FastAPI)</span> for back-end.
            </p>
            <p className="text-base md:text-lg font-inter text-gray-600 dark:text-gray-400 leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-2xl blur group-hover:blur-xl transition-all"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-indigo-600 dark:text-indigo-400" />
                <div className="text-3xl font-bold font-poppins bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-inter text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-3xl mb-1">{skill.icon}</div>
                  <span className="font-inter font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {skill.name}
                  </span>
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

