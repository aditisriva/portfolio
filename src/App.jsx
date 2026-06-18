import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AnalyticsProvider } from './context/AnalyticsContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import VideoIntro from './components/VideoIntro';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AnalyticsBadge from './components/AnalyticsBadge';
import Search from './components/Search';

const AppContent = () => {
  const { isDark } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.title = 'Aditi Srivastava — Software Developer';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#0A0A0A] text-white' : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* Floating background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-blue-600/[0.06]' : 'bg-blue-400/[0.08]'}`} />
        <div className={`absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] ${isDark ? 'bg-purple-600/[0.06]' : 'bg-purple-400/[0.08]'}`} />
        <div className={`absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-[100px] ${isDark ? 'bg-cyan-500/[0.04]' : 'bg-cyan-400/[0.06]'}`} />
      </div>

      <Navbar onSearchOpen={() => setSearchOpen(true)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Testimonials />
        <VideoIntro />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
      <AnalyticsBadge />

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};

const App = () => (
  <ThemeProvider>
    <LanguageProvider>
      <AnalyticsProvider>
        <AppContent />
      </AnalyticsProvider>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
