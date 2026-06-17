import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { projects } from '../data/portfolio';

const categories = ['All', 'Full Stack', 'Mobile', 'Frontend'];

const tagColors = {
  React: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'Next.js': 'bg-gray-500/15 text-gray-300 border-gray-500/30',
  'Node.js': 'bg-green-500/15 text-green-400 border-green-500/30',
  TypeScript: 'bg-blue-600/15 text-blue-300 border-blue-600/30',
  Python: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  MongoDB: 'bg-green-600/15 text-green-400 border-green-600/30',
  PostgreSQL: 'bg-blue-700/15 text-blue-300 border-blue-700/30',
  OpenAI: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
  default: 'bg-white/5 text-gray-400 border-white/10',
};

const getTagColor = (tag) => tagColors[tag] || tagColors.default;

const ProjectCard = ({ project, index }) => (
  <AnimatedSection delay={index * 0.1}>
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&h=400&fit=crop`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
            <FaStar className="text-xs" />
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass text-xs font-medium text-gray-300 border border-white/10">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-white text-xl mb-2 group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 glass border border-white/10 hover:border-white/30 text-gray-300 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200"
          >
            <FaGithub className="text-base" />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  </AnimatedSection>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A selection of projects I'm proud of — from SaaS products to AI-powered tools"
        />

        {/* Filter Pills */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <AnimatedSection>
          <div className="text-center mt-14">
            <a
              href="https://github.com/aditisriva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 glass border border-white/10 hover:border-blue-400/40 text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <FaGithub className="text-xl group-hover:text-blue-400 transition-colors" />
              View all projects on GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
