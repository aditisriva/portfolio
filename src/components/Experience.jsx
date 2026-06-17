import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { experience } from '../data/portfolio';

const TimelineItem = ({ job, index, isLast }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-8 mb-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 top-14 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent hidden md:block" />
      )}

      {/* Mobile layout */}
      <AnimatedSection
        delay={index * 0.15}
        direction={isLeft ? 'left' : 'right'}
        className="w-full md:hidden mb-8"
      >
        <TimelineCard job={job} />
      </AnimatedSection>

      {/* Desktop alternating layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 w-full mb-12">
        {isLeft ? (
          <>
            <AnimatedSection delay={index * 0.1} direction="left" className="flex justify-end">
              <TimelineCard job={job} className="max-w-md w-full" />
            </AnimatedSection>
            <div className="flex justify-start items-start pt-4">
              <TimelineDot job={job} />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-end items-start pt-4">
              <TimelineDot job={job} />
            </div>
            <AnimatedSection delay={index * 0.1} direction="right">
              <TimelineCard job={job} className="max-w-md w-full" />
            </AnimatedSection>
          </>
        )}
      </div>
    </div>
  );
};

const TimelineDot = ({ job }) => (
  <div className="relative z-10">
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg border border-white/20"
      style={{ background: `linear-gradient(135deg, ${job.color}, ${job.color}88)` }}
    >
      {job.logo}
    </div>
    <div
      className="absolute -inset-1 rounded-2xl blur-md opacity-40"
      style={{ background: job.color }}
    />
  </div>
);

const TimelineCard = ({ job, className = '' }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className={`glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group ${className}`}
  >
    {/* Header */}
    <div className="flex items-start justify-between gap-4 mb-4">
      <div>
        <h3 className="font-bold text-white text-lg leading-tight group-hover:text-blue-400 transition-colors">
          {job.role}
        </h3>
        <div className="font-semibold mt-0.5" style={{ color: job.color }}>
          {job.company}
        </div>
      </div>
      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 whitespace-nowrap flex-shrink-0">
        {job.type}
      </span>
    </div>

    {/* Meta */}
    <div className="flex flex-wrap gap-3 mb-5 text-xs text-gray-500">
      <span className="flex items-center gap-1.5">
        <FaCalendar className="text-gray-600" />
        {job.duration}
      </span>
      <span className="flex items-center gap-1.5">
        <FaMapMarkerAlt className="text-gray-600" />
        {job.location}
      </span>
    </div>

    {/* Achievements */}
    <ul className="space-y-2">
      {job.achievements.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm">
          <FaCheckCircle
            className="mt-0.5 flex-shrink-0 text-xs"
            style={{ color: job.color }}
          />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Work History"
          title="My Experience"
          subtitle="Roles and achievements that shaped me as an engineer"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent hidden md:block" />

          {experience.map((job, i) => (
            <TimelineItem
              key={job.company}
              job={job}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
