import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function BeerClink({ onComplete }) {
  const [leftBeer, setLeftBeer] = useState({ x: 20, y: 50 });
  const [rightBeer, setRightBeer] = useState({ x: 80, y: 50 });
  const [clinks, setClinks] = useState(0);
  const [isClinking, setIsClinking] = useState(false);
  const TARGET_CLINKS = 3;

  const handleClink = () => {
    if (isClinking) return;
    
    setIsClinking(true);
    const newClinks = clinks + 1;
    setClinks(newClinks);

    if (newClinks >= TARGET_CLINKS) {
      setTimeout(() => onComplete(), 1500);
    } else {
      setTimeout(() => setIsClinking(false), 1000);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-pink-100 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block text-6xl mb-4"
        >
          🍺
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Clink beer glasses!
        </h2>
        <p className="text-gray-600">
          {clinks} / {TARGET_CLINKS} Cheers!
        </p>
      </div>

      {/* Game Area */}
      <div className="relative h-64 md:h-80 mb-8 bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl overflow-hidden">
        {/* Left Beer */}
        <motion.div
          className="absolute text-7xl md:text-8xl cursor-pointer select-none"
          style={{
            left: `${leftBeer.x}%`,
            top: `${leftBeer.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={isClinking ? {
            x: [0, 100, 0],
            rotate: [0, 15, 0]
          } : {}}
          transition={{ duration: 0.8 }}
          drag
          dragConstraints={{ left: -200, right: 200, top: -150, bottom: 150 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🍺
        </motion.div>

        {/* Right Beer */}
        <motion.div
          className="absolute text-7xl md:text-8xl cursor-pointer select-none"
          style={{
            left: `${rightBeer.x}%`,
            top: `${rightBeer.y}%`,
            transform: 'translate(-50%, -50%) scaleX(-1)'
          }}
          animate={isClinking ? {
            x: [0, -100, 0],
            rotate: [0, -15, 0]
          } : {}}
          transition={{ duration: 0.8 }}
          drag
          dragConstraints={{ left: -200, right: 200, top: -150, bottom: 150 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🍺
        </motion.div>

        {/* Splash Effect */}
        {isClinking && (
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-5xl">💥</div>
          </motion.div>
        )}

        {/* Bubbles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-300 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              bottom: 0
            }}
            animate={{
              y: [-20, -300],
              opacity: [0.8, 0],
              scale: [1, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Clink Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleClink}
          disabled={isClinking}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
        >
          {isClinking ? '🍻 Cheers!' : 'Clink glasses!'}
        </Button>
      </div>
    </div>
  );
}