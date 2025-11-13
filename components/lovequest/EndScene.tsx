import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import SceneBackground from './SceneBackground';

// @ts-ignore
export default function EndScene({ scene, onRestart }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 border border-pink-100 relative overflow-hidden">
        {/* Background */}
        <SceneBackground background={scene.background} />

        {/* Celebration Background */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 + '%',
                y: -20,
                scale: 0,
                rotate: 0
              }}
              animate={{
                y: '120%',
                scale: [0, 1, 1, 0],
                rotate: 360
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          {/* Trophy/Celebration Icon */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <Heart className="w-32 h-32 text-red-500 fill-red-500" />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sparkles className="w-12 h-12 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Completion Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Level abgeschlossen!
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
              {scene.text}
            </p>
          </motion.div>

          {/* Stats/Achievement */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            className="inline-block bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl px-8 py-4 border border-pink-200"
          >
            <p className="text-lg text-gray-700">
              <span className="font-bold text-pink-600">30 Level</span> gemeistert
            </p>
          </motion.div>

          {/* Restart Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-4"
          >
            <Button
              onClick={onRestart}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-10 py-7 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <RotateCcw className="w-6 h-6 mr-3 group-hover:-rotate-180 transition-transform duration-500" />
              Neu starten
            </Button>
          </motion.div>

          {/* Footer Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-gray-500 text-sm mt-8"
          >
            Jede große Liebe ist eine Geschichte wert ✨
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}