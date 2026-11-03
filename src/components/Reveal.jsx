import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion
    ? { opacity: 0 }
    : {
        ...revealVariants.hidden,
        ...(direction === 'left' ? { x: -28, y: 0 } : {}),
        ...(direction === 'right' ? { x: 28, y: 0 } : {}),
        ...(direction === 'down' ? { y: -28 } : {}),
      };

  return (
    <motion.div
      initial={hidden}
      whileInView={revealVariants.visible}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -48px 0px' }}
      transition={
        reduceMotion
          ? { duration: 0.01 }
          : {
              duration: 0.72,
              delay: delay / 1000,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
