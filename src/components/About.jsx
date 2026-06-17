import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { personalInfo, stats, education } from '../data/portfolio';

const StatCard = ({ label, value, index }) => (
  <AnimatedSection delay={index * 0.1}>
    <div className="glass gradient-border rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1 group">
      <div className="text-4xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
        {value}
      </div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </div>
  </AnimatedSection>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="About Me"
        title="My Background"
        subtitle="A passionate developer dedicated to crafting exceptional digital experiences"
      />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left – Text Content */}
        <div className="space-y-8">
          <AnimatedSection direction="left">
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-500 rounded-full block" />
                Professional Summary
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a full-stack developer who loves building products people
                actually want to use. From architecting back-end APIs to crafting
                pixel-perfect UIs, I bring ideas to life through clean,
                maintainable code.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, I contribute to open source, write
                technical articles, and explore emerging technologies in the
                AI/ML space. I'm always looking for challenging problems to
                solve.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-purple-500 rounded-full block" />
                Quick Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-blue-400 text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Location</div>
                    <div className="text-white font-medium">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-purple-400 text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Email</div>
                    <div className="text-white font-medium">{personalInfo.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right – Education + Stats */}
        <div className="space-y-8">
          <AnimatedSection direction="right">
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-cyan-500 rounded-full block" />
                Education
              </h3>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{edu.degree}</div>
                      <div className="text-gray-400 text-sm">{edu.school}</div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-600">{edu.year}</span>
                        {edu.gpa && (
                          <span className="text-xs text-green-400 font-medium">
                            GPA: {edu.gpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
