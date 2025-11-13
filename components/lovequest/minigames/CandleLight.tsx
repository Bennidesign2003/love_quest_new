import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CANDLE_POSITIONS = [
  { x: 20, y: 30 },
  { x: 50, y: 25 },
  { x: 80, y: 35 },
  { x: 30, y: 60 },
  { x: 70, y: 65 },
  { x: 45, y: 75 }
];

export default function CandleLight({ onComplete }) {
  const [litCandles, setLitCandles] = useState([]);

  const handleCandleClick = (index) => {
    if (litCandles.includes(index)) return;

    const newLit = [...litCandles, index];
    setLitCandles(newLit);

    if (newLit.length === CANDLE_POSITIONS.length) {
      setTimeout(() => onComplete(), 1000);
    }
  };

  return (
    <div className="bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 rounded-3xl shadow-2xl p-6 md:p-8 border border-pink-200 max-w-2xl mx-auto min-h-[500px] relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block text-5xl mb-4"
        >
          🕯️
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Light all the candles
        </h2>
        <p className="text-pink-200">
          {litCandles.length} / {CANDLE_POSITIONS.length} angezündet
        </p>
      </div>

      {/* Game Area */}
      <div className="relative h-80 md:h-96">
        {/* Stars in background */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Candles */}
        {CANDLE_POSITIONS.map((pos, index) => {
          const isLit = litCandles.includes(index);
          
          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer select-none"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCandleClick(index)}
            >
              {/* Candle */}
              <div className="relative">
                <div className="text-5xl md:text-6xl">
                  🕯️
                </div>
                
                {/* Flame when lit */}
                {isLit && (
                  <>
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1.2, 1],
                        opacity: 1,
                        y: [0, -3, 0]
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        y: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <div className="text-4xl">🔥</div>
                    </motion.div>

                    {/* Glow effect */}
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-orange-400 rounded-full blur-xl"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Sparkles */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-yellow-300 text-xs"
                        style={{
                          left: '50%',
                          top: '-20px'
                        }}
                        animate={{
                          y: [-10, -40],
                          x: [0, (i - 1) * 15],
                          opacity: [1, 0],
                          scale: [1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      >
                        ✨
                      </motion.div>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="mt-6">
        <div className="flex justify-center gap-2">
          {CANDLE_POSITIONS.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                litCandles.includes(index) ? 'bg-orange-400' : 'bg-gray-600'
              }`}
              animate={litCandles.includes(index) ? {
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 0 0 rgba(251, 146, 60, 0)', '0 0 0 8px rgba(251, 146, 60, 0)']
              } : {}}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}