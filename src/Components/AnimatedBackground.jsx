import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ children, variant = 'gradient' }) => {
  if (variant === 'gradient') {
    return (
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
          animate={{
            background: [
              'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
              'linear-gradient(45deg, #ec4899, #3b82f6, #8b5cf6)',
              'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)',
              'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            opacity: 0.1,
            zIndex: -1,
          }}
        />
        {children}
      </div>
    );
  }

  if (variant === 'particles') {
    // Simple particle effect with moving circles
    return (
      <div className="relative overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
        {children}
      </div>
    );
  }

  return <>{children}</>;
};

export default AnimatedBackground;
