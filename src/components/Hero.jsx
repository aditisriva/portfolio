import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin,
  FaArrowDown, FaDownload, FaEnvelope
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import aduPhoto from '../assets/adu-photo.jpeg';

const roles = [
  'Software Developer',
  'MERN Stack Developer',
  'React Native Developer',
  'Full Stack Developer',
  'Problem Solver',
];

const TypingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
};

const socialLinks = [
  { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-green-400 font-medium mb-6 border border-green-500/20"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <span className="w-2 h-2 bg-green-400 rounded-full absolute" />
              Available for new opportunities
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-2">
                Hi, I'm{' '}
                <span className="gradient-text text-shadow-glow">
                  {personalInfo.name}
                </span>
              </h1>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 mb-6 h-14 flex items-center justify-center lg:justify-start">
                <TypingText />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 glass border border-white/20 hover:border-purple-400/60 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500/10"
              >
                <FaDownload className="text-purple-400" />
                Download CV
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 glass border border-white/20 hover:border-cyan-400/60 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/10"
              >
                <FaEnvelope className="text-cyan-400" />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400/60 border border-white/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <Icon />
                </a>
              ))}
              <div className="w-px h-6 bg-white/20 mx-1" />
              <span className="text-gray-500 text-sm">Let's connect</span>
            </motion.div>
          </div>

          {/* Right – Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Rotating ring */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-purple-500/20"
              />

              {/* Floating dots */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-blue-500"
                  style={{
                    top: `${50 - 48 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}

              {/* Avatar image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-blue-500/20">
                <img
                  src={aduPhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 75%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/4 glass border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-2xl font-black gradient-text">2</div>
                <div className="text-xs text-gray-400 leading-tight">
                  Internships<br />Done
                </div>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 bottom-1/4 glass border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-2xl font-black gradient-text">5+</div>
                <div className="text-xs text-gray-400 leading-tight">
                  Projects<br />Built
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16 pb-8"
        >
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown className="text-gray-600 text-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
