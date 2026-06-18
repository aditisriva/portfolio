import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const [stats, setStats] = useState({ visitors: 0, today: 0 });

  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Insert a visit record
        await supabase.from('page_visits').insert([{
          page: '/',
          user_agent: navigator.userAgent.slice(0, 200),
          visited_at: new Date().toISOString(),
        }]);

        // Fetch total count
        const { count: total } = await supabase
          .from('page_visits')
          .select('*', { count: 'exact', head: true });

        // Fetch today's count
        const today = new Date().toISOString().split('T')[0];
        const { count: todayCount } = await supabase
          .from('page_visits')
          .select('*', { count: 'exact', head: true })
          .gte('visited_at', `${today}T00:00:00`);

        setStats({ visitors: total || 0, today: todayCount || 0 });
      } catch (e) {
        // Silently fail if table doesn't exist yet
      }
    };
    trackVisit();
  }, []);

  return (
    <AnalyticsContext.Provider value={{ stats }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);
