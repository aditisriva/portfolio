import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDatabase, FaCloud,
} from 'react-icons/fa';
import { BiBrain } from 'react-icons/bi';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { skills } from '../data/portfolio';

const iconMap = {
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaDatabase: FaDatabase,
  FaCloud: FaCloud,
  FaBrain: BiBrain,
};

const SkillBar = ({ name, level, color, delay }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
      />
    </div>
  </div>
);

const SkillCard = ({ skill, isActive, onClick, index }) => {
  const Icon = iconMap[skill.icon] || FaReact;

  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.button
        onClick={onClick}
        whileHover={{ y: -4 }}
        className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
          isActive
            ? 'bg-white/10 border-blue-500/50 shadow-lg shadow-blue-500/10'
            : 'glass border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${skill.color}20`, border: `1px solid ${skill.color}40` }}
          >
            <Icon style={{ color: skill.color }} className="text-lg" />
          </div>
          <div>
            <div className="font-semibold text-white text-sm">{skill.category}</div>
            <div className="text-xs text-gray-500">{skill.items.length} skills</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {skill.items.slice(0, 3).map((item) => (
            <span
              key={item.name}
              className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/10"
            >
              {item.name}
            </span>
          ))}
          {skill.items.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-500">
              +{skill.items.length - 3}
            </span>
          )}
        </div>
      </motion.button>
    </AnimatedSection>
  );
};

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = skills[activeIdx];
  const Icon = iconMap[active.icon] || FaReact;

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Technical Skills"
          title="What I Work With"
          subtitle="A curated stack of technologies I use to build modern, scalable applications"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Category Cards – left 3 columns */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <SkillCard
                key={skill.category}
                skill={skill}
                index={i}
                isActive={i === activeIdx}
                onClick={() => setActiveIdx(i)}
              />
            ))}
          </div>

          {/* Detail Panel – right 2 columns */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="right">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-2xl p-8 border border-white/10 h-full"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${active.color}20`,
                      border: `1px solid ${active.color}40`,
                    }}
                  >
                    <Icon style={{ color: active.color }} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{active.category}</h3>
                    <p className="text-gray-500 text-sm">Proficiency levels</p>
                  </div>
                </div>

                {active.items.map((item, i) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    color={active.color}
                    delay={i * 0.1}
                  />
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
