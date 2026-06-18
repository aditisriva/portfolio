import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaGithub, FaLinkedin,
  FaMapMarkerAlt, FaPaperPlane, FaCheck, FaExclamationCircle,
} from 'react-icons/fa';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { personalInfo } from '../data/portfolio';
import { supabase } from '../lib/supabase';

const contactLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#3B82F6',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/aditisriva',
    href: personalInfo.social.github,
    color: '#ffffff',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aditi-srivastava-345805257',
    href: personalInfo.social.linkedin,
    color: '#0A66C2',
  },
];

const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required';
  if (!fields.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required';
  if (!fields.message.trim()) errors.message = 'Message is required';
  return errors;
};

const Field = ({ label, name, type = 'text', value, onChange, error, placeholder, rows }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1.5">
      {label} <span className="text-blue-400">*</span>
    </label>
    {rows ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-600 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
          error ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-blue-500/60'
        }`}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-600 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
          error ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-blue-500/60'
        }`}
      />
    )}
    {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setSubmitError('');
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: form.name.trim(),
            email: form.email.trim(),
            subject: form.subject.trim(),
            message: form.message.trim(),
          },
        ]);

      if (error) {
        console.error('Supabase insert error:', error);
        if (error.code === '42P01' || error.message?.includes('schema cache')) {
          setSubmitError(`Database not ready yet. Please email directly: ${personalInfo.email}`);
        } else if (error.code === '42501' || error.message?.includes('row-level security')) {
          setSubmitError(`Permission denied. Please email directly: ${personalInfo.email}`);
        } else {
          setSubmitError(`Error: ${error.message} — or email: ${personalInfo.email}`);
        }
        return;
      }

      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Supabase error:', err);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left – Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection direction="left">
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-500 rounded-full" />
                  Contact Details
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

                  {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                      >
                        <Icon className="text-sm" style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">{label}</div>
                        <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              <div className="glass rounded-2xl p-6 border border-green-500/20 bg-green-500/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold text-sm">Available for hire</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm currently open to freelance work and full-time opportunities.
                  Let's build something amazing together.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right – Form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="right">
              <div className="glass rounded-2xl p-8 border border-white/10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheck className="text-green-400 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="John Doe"
                      />
                      <Field
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="john@example.com"
                      />
                    </div>
                    <Field
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      error={errors.subject}
                      placeholder="Project collaboration / Job opportunity"
                    />
                    <Field
                      label="Message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      error={errors.message}
                      placeholder="Tell me about your project, timeline, and budget..."
                      rows={5}
                    />
                    {submitError && (
                      <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                        <FaExclamationCircle className="flex-shrink-0 mt-0.5" />
                        <span>
                          {submitError}{' '}
                          <a
                            href={`mailto:${personalInfo.email}`}
                            className="underline text-blue-400 hover:text-blue-300"
                          >
                            {personalInfo.email}
                          </a>
                        </span>
                      </div>
                    )}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 text-sm"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
