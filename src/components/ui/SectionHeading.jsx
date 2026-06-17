import AnimatedSection from './AnimatedSection';

const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <AnimatedSection>
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
          {eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </AnimatedSection>
    </div>
  );
};

export default SectionHeading;
