import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaCode, FaBookOpen } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import { blogs } from '../data/blog';

const allItems = [
  ...projects.map((p) => ({ ...p, type: 'project', icon: FaCode, color: '#3B82F6' })),
  ...blogs.map((b) => ({ ...b, type: 'blog', icon: FaBookOpen, color: '#8B5CF6' })),
];

const Search = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    const filtered = allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.excerpt?.toLowerCase().includes(q) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(q))
    );
    setResults(filtered.slice(0, 8));
  }, [query]);

  const handleSelect = (item) => {
    if (item.type === 'project') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl glass-dark rounded-2xl border border-white/15 shadow-2xl overflow-hidden"
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <FaSearch className="text-gray-500 flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, blogs, skills..."
            className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-base"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-gray-600 hover:text-white transition-colors">
              <FaTimes size={14} />
            </button>
          )}
          <kbd className="text-xs text-gray-600 bg-white/5 border border-white/10 px-2 py-1 rounded">ESC</kbd>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={`${item.type}-${item.id}`}
                    onClick={() => handleSelect(item)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-left group"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                      <Icon style={{ color: item.color }} size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-gray-600 text-xs truncate">
                        {item.type === 'project' ? item.description : item.excerpt}
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full border flex-shrink-0"
                      style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}>
                      {item.type}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : query.trim() ? (
            <div className="py-12 text-center text-gray-600">
              <FaSearch className="mx-auto mb-3 text-2xl opacity-30" />
              <p className="text-sm">No results for "<span className="text-gray-400">{query}</span>"</p>
            </div>
          ) : (
            <div className="p-4">
              <p className="text-gray-600 text-xs uppercase tracking-wider px-2 mb-2">Quick Jump</p>
              {['Projects', 'Blog', 'Skills', 'Experience', 'Contact'].map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all text-sm text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-5 py-3 border-t border-white/5 flex items-center gap-4 text-xs text-gray-700">
          <span>↵ to select</span>
          <span>↑↓ to navigate</span>
          <span>ESC to close</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Search;
