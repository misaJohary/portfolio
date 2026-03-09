'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Smartphone, Check, Code } from 'lucide-react';

// Clean Screenshot Card
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
      <div className="absolute -inset-4 bg-gradient-to-b from-gray-300/20 via-gray-400/30 to-gray-500/40 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-[3rem]"></div>
      
      {/* Screenshot Container - Clean & Minimal */}
      <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] group-hover:shadow-[0_25px_70px_-10px_rgba(0,0,0,0.4)] transition-all duration-500 aspect-[9/19.5]">
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

// Simple Two-Phone Layout - Responsive
function SimpleLayout({ screenshots }: { screenshots: string[] }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4">
      <PhoneMockup 
        screenshot={screenshots[0]} 
        className="w-40 sm:w-48 md:w-56 lg:w-64 transform hover:scale-105 transition-transform duration-300"
        delay={0}
      />
      <PhoneMockup 
        screenshot={screenshots[1]} 
        className="w-40 sm:w-48 md:w-56 lg:w-64 transform hover:scale-105 transition-transform duration-300"
        delay={0.15}
      />
    </div>
  );
}

export default function Projects() {
  const renderLayout = (screenshots: string[]) => {
    return <SimpleLayout screenshots={screenshots.slice(0, 2)} />;
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white overflow-hidden"
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
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Featured Projects
              </h2>
            </div>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto px-4">
            Full-stack mobile applications showcasing modern design, powerful functionality, and seamless user experiences
          </p>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="space-y-24 sm:space-y-32 lg:space-y-40">
        {projects.map((project, projectIndex) => {
          const screenshots = project.screenshotsLight; // Always use light screenshots
          const isEven = projectIndex % 2 === 0;

          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Background Gradient Orb */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`absolute ${isEven ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r ${project.gradient} opacity-5 blur-3xl rounded-full`}
                />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Screenshots - Simple & Clean */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} flex items-center justify-center py-4 sm:py-8`}>
                    {renderLayout(screenshots)}
                  </div>

                  {/* Project Details */}
                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className={`space-y-4 sm:space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  >
                    {/* Category Badge */}
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-tertiary backdrop-blur-md rounded-full border border-gray-200 shadow-lg"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`}></div>
                      <span className="text-sm font-bold text-secondary tracking-wide">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Project Name */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary leading-relaxed">
                      {project.detailedDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-secondary uppercase tracking-widest">
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
                            className="px-5 py-2.5 bg-tertiary rounded-xl border border-gray-200 text-sm font-semibold text-primary shadow-md hover:shadow-lg transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-secondary uppercase tracking-widest">
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
                            <div className="mt-0.5 p-1.5 rounded-lg bg-primary group-hover:scale-110 transition-transform">
                              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-base text-secondary leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Source Code Request Button */}
                    {project.requestSourceCode && (
                      <div className="pt-4 sm:pt-6">
                        <motion.a
                          href={`mailto:razafimahatratramisa@gmail.com?subject=Source Code Request – ${project.name}&body=Hi,%0A%0AI'm interested in the source code for ${project.name}.%0A%0APlease let me know how we can proceed.%0A%0AThanks!`}
                          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-primary font-bold rounded-xl sm:rounded-2xl hover:border-gray-400 transition-all shadow-lg text-base sm:text-lg"
                        >
                          <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span>Ask for Source Code</span>
                        </motion.a>
                      </div>
                    )}

                    {/* Store Buttons */}
                    {project.storeLinks && (
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                        {project.storeLinks.android && (
                          <motion.a
                            href={project.storeLinks.android}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
                          >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3.18 23.76c.33.18.7.19 1.05.03l11.12-6.42-2.38-2.38-9.79 8.77zm-1.7-20.1C1.17 3.99 1 4.44 1 4.96v14.08c0 .52.17.97.48 1.3l.07.07 7.89-7.89v-.19L1.48 3.59l-.07.07zM19.37 10.3l-2.2-1.27-2.66 2.66 2.66 2.66 2.21-1.28c.63-.36.63-.95 0-1.32l-.01.05zM4.23.21L15.35 6.63l-2.38 2.38-8.74-8.8z"/>
                            </svg>
                            <span>Google Play</span>
                          </motion.a>
                        )}
                        {project.storeLinks.ios && (
                          <motion.a
                            href={project.storeLinks.ios}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-primary font-bold rounded-xl sm:rounded-2xl hover:border-gray-400 transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg text-base sm:text-lg"
                          >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <span>App Store</span>
                          </motion.a>
                        )}
                      </div>
                    )}
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
