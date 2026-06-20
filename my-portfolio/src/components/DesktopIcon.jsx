import { motion } from 'framer-motion'

export default function DesktopIcon({
  label,
  children,
  className = '',
  onClick,
  dragConstraints,
}) {
  return (
    <motion.button
      type="button"
      drag
      dragConstraints={dragConstraints}
      dragMomentum={false}
      whileHover={{ scale: 1.08}}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      className={`flex flex-col items-center gap-[2px] bg-transparent border-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 text-white ${className}`}
    >
      {children}

      <span className="text-[8px] leading-none text-zinc-300 select-none">
        {label}
      </span>
    </motion.button>
  )
}

export function IconFolder() {
  return <div className="text-3xl">📁</div>
}

export function IconBriefcase() {
  return <div className="text-3xl">💼</div>
}

export function IconPen() {
  return <div className="text-3xl">✏️</div>
}