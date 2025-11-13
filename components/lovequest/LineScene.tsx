import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart } from 'lucide-react';
import Image from 'next/image';

// @ts-ignore
export default function LineScene({ scene, onNext }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100 relative z-10">
        {/* Decorative Hearts */}
        <div className="absolute -top-4 -left-4">
          <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
        </div>
        <div className="absolute -bottom-4 -right-4">
          <Heart className="w-6 h-6 text-red-400 fill-red-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 font-medium px-4">
              {scene.text}
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
                {(scene && scene?.image1) && (
                    <Image className={`${scene?.image2 ? "w-[220px]" : "w-full"} mt-4"`} width="320" height="90" src={scene?.image1} alt="level image" />
                )}
                {(scene && scene?.image2) && (
                    <Image className={`${scene?.image2 ? "w-[220px]" : "w-full"} mt-4"`} width="320" height="90" src={scene?.image2} alt="level image" />
                )}
            </div>
          </motion.div>

          {/* Continue Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center"
          >
            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}