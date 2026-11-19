import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Direction = 'up' | 'left' | 'right' | 'scale';

const EASE = [0.22, 1, 0.36, 1] as const;

function offsetsFor(direction: Direction) {
  switch (direction) {
    case 'left':
      return { x: -48, y: 0, scale: 1 };
    case 'right':
      return { x: 48, y: 0, scale: 1 };
    case 'scale':
      return { x: 0, y: 0, scale: 0.9 };
    default:
      return { x: 0, y: 36, scale: 1 };
  }
}

const StaggerContext = createContext(false);

/**
 * Revela o elemento quando ele entra na área visível (Intersection Observer).
 * Respeita a preferência do usuário por "reduced motion".
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.75,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const inStagger = useContext(StaggerContext);

  if (reduce) return <div className={className}>{children}</div>;

  const dir = direction;

  if (inStagger) {
    return (
      <motion.div
        className={className}
        variants={{
          hidden: { opacity: 0, ...offsetsFor(dir) },
          show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration, delay, ease: EASE } },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsetsFor(dir) }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Revela os filhos em sequência (stagger) quando o grupo entra na tela. */
export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <StaggerContext.Provider value>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}
