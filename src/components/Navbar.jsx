import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LanguageContext';

const navKeys = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'];

const Navbar = ({ onSearchOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, toggle: toggleTheme } = useTheme();
  const { lang, setLanguage, t } = useLang();

  const navLinks = navKeys.map((key) => ({
    label: t.nav[key],
    href: `#${key}`,
    id: key,
  }));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (let i = navKeys.length - 1; i >= 0; i--) {
        const el = document.getElementById(navKeys[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(navKeys[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ctrl+K / Cmd+K shortcut for search
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onSearchOpen();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onSearchOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark shadow-2xl shadow-black/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a href="#" className="flex items-center gap-2 group" whileHover={{ scale: 1.03 }}>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FaCode className="text-white text-sm" />
              </div>
              <span className="font-bold text-lg text-white">
                Aditi<span className="gradient-text"> Srivastava</span>
              </span>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={onSearchOpen}
                className="hidden sm:flex items-center gap-2 px-3 py-2 glass border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-white/20 transition-all text-xs"
                title="Search (Ctrl+K)"
              >
                <FaSearch size={11} />
                <span className="hidden lg:inline">Search</span>
                <kbd className="hidden lg:inline text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">⌘K</kbd>
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(lang === 'en' ? 'hi' : 'en')}
                className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all text-xs font-bold"
                title={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
              >
                {lang === 'en' ? 'हि' : 'EN'}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? <FaSun size={13} /> : <FaMoon size={13} />}
              </button>

              {/* Hire Me */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30"
              >
                {t.nav.hire}
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass text-gray-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-dark border-b border-white/10 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
              {/* Mobile Search */}
              <button
                onClick={() => { setMenuOpen(false); onSearchOpen(); }}
                className="text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center gap-2"
              >
                <FaSearch size={12} /> Search
              </button>
              <div className="border-t border-white/10 mt-2 pt-3">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="flex w-full justify-center px-4 py-3 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all"
                >
                  {t.nav.hire}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
