'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { projects } from '@/data/projects';
import { Smartphone, Check, ExternalLink, Github } from 'lucide-react';

// Clean Screenshot Card - Just like the reference image
function PhoneMockup({ screenshot, className = '', delay = 0 }: { screenshot: string; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 80 }}
      className={`relative group ${className}`}
    >
      {/* Soft Shadow */}
      <div className="absolute -inset-4 bg-gradient-to-b from-gray-400/20 via-gray-500/30 to-gray-600/40 dark:from-gray-800/30 dark:via-gray-900/40 dark:to-black/50 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-[3rem]"></div>
      
      {/* Screenshot Container - Clean & Minimal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] group-hover:shadow-[0_25px_70px_-10px_rgba(0,0,0,0.4)] transition-all duration-500 aspect-[9/19.5]">
        {/* Image */}
        <img
          src={screenshot}
          alt="App screenshot"
          className="w-full h-full object-cover"
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}

// Simple Two-Phone Layout - Like reference image
function SimpleLayout({ screenshots }: { screenshots: string[] }) {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-12 px-4">
      <PhoneMockup 
        screenshot={screenshots[0]} 
        className="w-48 md:w-56 lg:w-64 transform hover:scale-105 transition-transform duration-300"
        delay={0}
      />
      <PhoneMockup 
        screenshot={screenshots[1]} 
        className="w-48 md:w-56 lg:w-64 transform hover:scale-105 transition-transform duration-300"
        delay={0.15}
      />
    </div>
  );
}


export default function Projects() {
  const { theme } = useTheme();

  const renderLayout = (screenshots: string[]) => {
    // Always use simple 2-phone layout like the reference image
    return <SimpleLayout screenshots={screenshots.slice(0, 2)} />;
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-3">
              <Smartphone className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-5xl md:text-6xl font-bold font-poppins bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
          </motion.div>
          <p className="text-xl font-inter text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full-stack mobile applications showcasing modern design, powerful functionality, and seamless user experiences
          </p>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="space-y-40">
        {projects.map((project, projectIndex) => {
          const screenshots = theme === 'light' ? project.screenshotsLight : project.screenshotsDark;
          const isEven = projectIndex % 2 === 0;

          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Background Gradient Orb */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`absolute ${isEven ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r ${project.gradient} opacity-10 dark:opacity-5 blur-3xl rounded-full`}
                />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Screenshots - Simple & Clean */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} flex items-center justify-center py-8`}>
                    {renderLayout(screenshots)}
                  </div>

                  {/* Project Details */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  >
                    {/* Category Badge */}
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`}></div>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 tracking-wide">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Project Name */}
                    <h3 className={`text-5xl md:text-6xl font-bold font-poppins bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent leading-tight`}>
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-inter leading-relaxed">
                      {project.detailedDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <div className={`h-0.5 w-8 bg-gradient-to-r ${project.gradient}`}></div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-5 py-2.5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-md hover:shadow-lg transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <div className={`h-0.5 w-8 bg-gradient-to-r ${project.gradient}`}></div>
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.08 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className={`mt-0.5 p-1.5 rounded-lg bg-gradient-to-r ${project.gradient} group-hover:scale-110 transition-transform`}>
                              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-base text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6">
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 md:flex-none px-8 py-4 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-lg`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-bold rounded-2xl hover:border-gray-400 dark:hover:border-gray-500 transition-all flex items-center justify-center gap-3 shadow-lg text-lg"
                      >
                        <Github className="w-5 h-5" />
                        Code
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
