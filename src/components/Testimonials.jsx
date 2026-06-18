import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import AnimatedSection from './ui/AnimatedSection';
import { testimonials } from '../data/testimonials';
import { useLang } from '../context/LanguageContext';

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-700'} size={12} />
    ))}
  </div>
);

const Testimonials = () => {
  const { t } = useLang();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {testimonials.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col ${
                  active === i ? 'border-yellow-500/40 bg-yellow-500/5' : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActive(i)}
              >
                <FaQuoteLeft className="text-yellow-400/40 text-3xl mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-sm truncate">{item.name}</div>
                    <div className="text-gray-500 text-xs truncate">{item.role} · {item.company}</div>
                  </div>
                  <StarRating rating={item.rating} />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Navigation dots */}
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-white/30 transition-all"
            >
              <FaChevronLeft size={12} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  active === i ? 'w-6 h-2 bg-yellow-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
            <button
              onClick={next}
              className="w-9 h-9 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-white/30 transition-all"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
