import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaTag, FaTimes, FaArrowLeft } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import AnimatedSection from './ui/AnimatedSection';
import { blogs } from '../data/blog';
import { useLang } from '../context/LanguageContext';

const BlogModal = ({ post, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-4"
    onClick={onClose}
  >
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-3xl glass-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
    >
      {/* Cover */}
      <div className="relative h-56 overflow-hidden">
        <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <FaTimes />
        </button>
        <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/30 text-blue-300 border border-blue-500/30">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
          <span>{post.date}</span>
          <span className="flex items-center gap-1"><FaClock size={10} />{post.readTime} min read</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-6">{post.title}</h2>
        <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed space-y-4">
          {post.content.split('\n\n').map((para, i) => {
            if (para.startsWith('## ')) {
              return <h3 key={i} className="text-lg font-bold text-white mt-6 mb-2">{para.replace('## ', '')}</h3>;
            }
            if (para.startsWith('**') || para.includes('**')) {
              return <p key={i} dangerouslySetInnerHTML={{
                __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                            .replace(/`(.*?)`/g, '<code class="bg-white/10 px-1.5 py-0.5 rounded text-blue-300 text-xs">$1</code>')
              }} />;
            }
            if (para.startsWith('- ')) {
              const items = para.split('\n').filter(l => l.startsWith('- '));
              return <ul key={i} className="list-disc list-inside space-y-1 text-gray-400">{items.map((item, j) => <li key={j}>{item.replace('- ', '')}</li>)}</ul>;
            }
            return <p key={i}>{para}</p>;
          })}
        </div>
      </div>
    </motion.article>
  </motion.div>
);

const BlogCard = ({ post, onClick, index }) => {
  const { t } = useLang();
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -5 }}
        onClick={onClick}
        className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-blue-500/10 flex flex-col h-full"
      >
        <div className="relative overflow-hidden aspect-video">
          <img src={post.cover} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-blue-500/30 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-gray-600 text-xs mb-3">
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><FaClock size={10} />{post.readTime} {t.blog.minRead}</span>
          </div>
          <h3 className="font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors">{post.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-500 border border-white/10 flex items-center gap-1">
                <FaTag size={8} />{tag}
              </span>
            ))}
          </div>
          <button className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors text-left">
            {t.blog.readMore} →
          </button>
        </div>
      </motion.article>
    </AnimatedSection>
  );
};

const Blog = () => {
  const { t } = useLang();
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="blog" className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow={t.blog.eyebrow}
            title={t.blog.title}
            subtitle={t.blog.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} onClick={() => setSelected(post)} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <BlogModal post={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
};

export default Blog;
