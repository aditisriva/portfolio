import { motion } from 'framer-motion';
import {
  FaAws, FaGoogle, FaDocker, FaReact, FaExternalLinkAlt,
  FaShieldAlt, FaCode,
} from 'react-icons/fa';
import { SiMongodb, SiSpringboot } from 'react-icons/si';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { certifications } from '../data/portfolio';

const iconMap = {
  FaAws: FaAws,
  FaGoogle: FaGoogle,
  FaDocker: FaDocker,
  FaReact: FaReact,
  SiMongodb: SiMongodb,
  FaMeta: FaShieldAlt,
  FaJava: FaCode,
  SiSpringboot: SiSpringboot,
};

const CertCard = ({ cert, index }) => {
  const Icon = iconMap[cert.icon] || FaShieldAlt;

  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:shadow-xl flex flex-col h-full"
        style={{
          '--cert-color': cert.color,
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${cert.color}20`,
              border: `1px solid ${cert.color}40`,
            }}
          >
            <Icon className="text-2xl" style={{ color: cert.color }} />
          </div>
          <span className="text-xs text-gray-500 font-medium mt-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
            {cert.date}
          </span>
        </div>

        {/* Info */}
        <h3 className="font-bold text-white mb-1.5 leading-snug group-hover:text-blue-300 transition-colors duration-200">
          {cert.title}
        </h3>
        <p className="text-sm font-medium mb-4" style={{ color: cert.color }}>
          {cert.issuer}
        </p>

        {/* Credential ID */}
        <div className="flex items-center gap-2 mb-5 flex-1">
          <span className="text-xs text-gray-600 font-mono bg-white/3 px-2.5 py-1.5 rounded-lg border border-white/5 w-full truncate">
            ID: {cert.credentialId}
          </span>
        </div>

        {/* Verify button */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border"
          style={{
            background: `${cert.color}15`,
            borderColor: `${cert.color}40`,
            color: cert.color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${cert.color}30`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${cert.color}15`;
          }}
        >
          <FaExternalLinkAlt className="text-xs" />
          Verify Certificate
        </a>
      </motion.article>
    </AnimatedSection>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Industry-recognized certifications validating my expertise across cloud, development, and engineering"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
