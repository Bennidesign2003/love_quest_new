import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

// @ts-ignore
export default function PolaroidScene({ scene, onNext }) {
    const isUrl = (path: string) => {
  // Prüft externe URLs
  if (/^https?:\/\//.test(path)) return true;
  // Prüft lokale Bilder im /images-Ordner
  if (path.startsWith('/images/')) return true;
  return false;
};

  return (
    <motion.div
      initial={{ scale: 0.9, rotate: -5, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center"
    >
      {/* Polaroid Frame */}
      <motion.div
        whileHover={{ scale: 1.02, rotate: 2 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-4 pb-16 rounded-lg shadow-2xl max-w-md w-full relative z-10"
      >
        {/* Photo Area */}
        <div className="bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 aspect-square rounded flex items-center justify-center relative overflow-hidden">
          {/* Emoji Display */}
          <motion.div
            initial={{ scale: 0 }}
             animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.8, 0.6]
            }}
             transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-8xl md:text-9xl relative z-10"
          >
            {(scene && isUrl(scene.emoji)) ? (
                <Image className={`"w-[620px] mt-4"`} width="320" height="90" src={scene?.emoji} alt="level image" />
            ) : '💕'}
          </motion.div>
          {/* Decorative Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-red-300/20 rounded"
          />
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 font-handwriting italic">
            {scene.caption}
          </p>
        </motion.div>
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-8"
      >
        <Button
          onClick={onNext}
          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          Weiter
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </motion.div>
  );
}