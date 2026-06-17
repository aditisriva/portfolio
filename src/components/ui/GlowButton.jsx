import { motion } from 'framer-motion';

const GlowButton = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  icon,
  download,
}) => {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer';

  const variants = {
    primary:
      'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5',
    secondary:
      'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-0.5',
    outline:
      'glass border border-white/20 hover:border-blue-400/60 text-white hover:bg-white/10 hover:-translate-y-0.5',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/10',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={download ? '_self' : '_blank'}
        rel="noopener noreferrer"
        download={download}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} whileTap={{ scale: 0.97 }}>
      {inner}
    </motion.button>
  );
};

export default GlowButton;
