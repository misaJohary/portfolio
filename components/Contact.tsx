'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:razafimahatratramisa@gmail.com',
    handle: 'razafimahatratramisa@gmail.com',
    color: 'from-secondary to-primary',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/johary-misa-razafimahatratra-b79420211/',
    handle: 'johary-misa-razafimahatratra',
    color: 'from-secondary to-primary',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/misaJohary',
    handle: '@misaJohary',
    color: 'from-secondary to-primary',
  },
];

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-tertiary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Send className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Let's Connect
            </h2>
          </motion.div>
          <p className="text-lg md:text-xl text-secondary mb-4 max-w-2xl mx-auto leading-relaxed">
            I'm open to new projects, collaborations, or freelance opportunities.
          </p>
          <p className="text-base text-secondary max-w-xl mx-auto">
            Let's build something great together. Reach out through any of these platforms:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={item}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ y: -5 }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300`}></div>
              
              {/* Card */}
              <div className="relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`p-3 bg-gradient-to-r ${link.color} rounded-xl`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">
                      {link.name}
                    </h3>
                    <p className="text-sm text-secondary">
                      {link.handle}
                    </p>
                  </div>
                  <div className="mt-2 text-xs font-semibold text-primary group-hover:scale-110 transition-transform">
                    Connect →
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-gray-200 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
              Ready to start a project?
            </h3>
            <p className="text-secondary mb-6 max-w-xl mx-auto">
              Whether you need a complete mobile app or want to discuss your next big idea, I'm here to help bring your vision to life.
            </p>
            <motion.a
              href="mailto:razafimahatratramisa@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-opacity-90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
