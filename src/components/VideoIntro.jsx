import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes, FaVideo } from 'react-icons/fa';
import AnimatedSection from './ui/AnimatedSection';

// Replace VIDEO_URL with your actual YouTube/Loom/Drive video URL
const VIDEO_URL = 'https://www.youtube.com/embed/?autoplay=1';
const THUMBNAIL = 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=800&h=450&fit=crop';

const VideoIntro = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="video" className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/3 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Video Introduction
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Meet Aditi
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              A quick video walkthrough of who I am, what I build, and what drives me as a developer.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
              {/* Thumbnail */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                <img
                  src={THUMBNAIL}
                  alt="Video Introduction"
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-2xl group-hover:bg-blue-600/40 group-hover:border-blue-400/60 transition-all duration-300"
                  >
                    <FaPlay className="text-white text-2xl ml-1" />
                  </motion.div>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 glass px-3 py-1.5 rounded-full border border-white/10">
                  <FaVideo className="text-blue-400 text-xs" />
                  <span className="text-white text-xs font-medium">Watch Introduction</span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-gray-600 text-sm mt-6">
              💡 <span className="text-gray-500">Add your video link in</span>{' '}
              <code className="text-blue-400 bg-white/5 px-2 py-0.5 rounded text-xs">src/components/VideoIntro.jsx</code>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
              >
                <FaTimes />
              </button>
              <div className="rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10">
                <iframe
                  src={VIDEO_URL}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Aditi Srivastava Introduction"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoIntro;
