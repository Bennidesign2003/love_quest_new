import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function InteractiveObjects({ objects = [] }) {
  const [clickedObjects, setClickedObjects] = useState({});
  const [particles, setParticles] = useState([]);

  const handleObjectClick = (objectId, x, y) => {
    // Mark object as clicked
    setClickedObjects(prev => ({ ...prev, [objectId]: true }));

    // Create particles at click position
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: `${objectId}-${Date.now()}-${i}`,
      x,
      y,
      angle: (Math.PI * 2 * i) / 8
    }));
    setParticles(prev => [...prev, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !p.id.startsWith(`${objectId}-`)));
    }, 1000);

    // Reset clicked state after animation
    setTimeout(() => {
      setClickedObjects(prev => ({ ...prev, [objectId]: false }));
    }, 600);
  };

  const getAnimationVariants = (animation) => {
    switch (animation) {
      case 'bounce':
        return {
          animate: {
            y: [0, -15, 0],
            transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }
        };
      case 'pulse':
        return {
          animate: {
            scale: [1, 1.15, 1],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }
        };
      case 'spin':
        return {
          animate: {
            rotate: [0, 360],
            transition: { duration: 3, repeat: Infinity, ease: "linear" }
          }
        };
      case 'shake':
        return {
          animate: {
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 }
          }
        };
      case 'float':
        return {
          animate: {
            y: [0, -10, 0],
            x: [0, 5, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
        };
      default:
        return {};
    }
  };

  return (
    <>
      {objects.map((obj) => (
        // @ts-ignore
        <motion.div
          key={obj.id}
          className="absolute cursor-pointer select-none"
          style={{
            left: `${obj.x}%`,
            top: `${obj.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          {...getAnimationVariants(obj.animation)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            handleObjectClick(obj.id, rect.left + rect.width / 2, rect.top + rect.height / 2);
          }}
        >
          <motion.div
            animate={clickedObjects[obj.id] ? {
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl filter drop-shadow-lg"
          >
            {obj.emoji}
          </motion.div>
        </motion.div>
      ))}

      {/* Particle Effects */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-50"
            style={{
              left: particle.x,
              top: particle.y
            }}
            initial={{
              scale: 0,
              x: 0,
              y: 0,
              opacity: 1
            }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos(particle.angle) * 60,
              y: Math.sin(particle.angle) * 60,
              opacity: [1, 1, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}