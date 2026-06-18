import { motion } from 'framer-motion';
import { FaEye, FaCalendarDay } from 'react-icons/fa';
import { useAnalytics } from '../context/AnalyticsContext';

const AnalyticsBadge = () => {
  const { stats } = useAnalytics();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-6 left-6 z-40 glass-dark border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden md:flex items-center gap-4"
    >
      <div className="flex items-center gap-2 text-xs">
        <div className="w-6 h-6 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
          <FaEye className="text-blue-400" size={10} />
        </div>
        <div>
          <div className="text-white font-semibold">{stats.visitors.toLocaleString()}</div>
          <div className="text-gray-600" style={{ fontSize: '10px' }}>Total Visits</div>
        </div>
      </div>
      <div className="w-px h-8 bg-white/10" />
      <div className="flex items-center gap-2 text-xs">
        <div className="w-6 h-6 rounded-lg bg-green-500/15 border border-green-500/30 flex items-center justify-center">
          <FaCalendarDay className="text-green-400" size={10} />
        </div>
        <div>
          <div className="text-white font-semibold">{stats.today.toLocaleString()}</div>
          <div className="text-gray-600" style={{ fontSize: '10px' }}>Today</div>
        </div>
      </div>
      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse ml-1" />
    </motion.div>
  );
};

export default AnalyticsBadge;
