'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

import storyData from '../components/lovequest/StoryData';
import LineScene from '../components/lovequest/LineScene';
import PolaroidScene from '../components/lovequest/PolaroidScene';
import ChoiceScene from '../components/lovequest/ChoiceScene';
import MinigameScene from '../components/lovequest/MinigameScene';
import EndScene from '../components/lovequest/EndScene';
import InteractiveObjects from '../components/lovequest/InteractiveObjects';
import SceneBackground from '../components/lovequest/SceneBackground';

export default function LoveQuest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameState, setGameState] = useState({ flags: {} });
  const [isStarted, setIsStarted] = useState(false);
  const [visitedScenes, setVisitedScenes] = useState(new Set());

  const currentScene = storyData[currentIndex];

  const findSceneIndexById = (sceneId) => {
    return storyData.findIndex(scene => scene.id === sceneId);
  };

  const handleNext = () => {
    if (currentScene.id) {
      setVisitedScenes(prev => new Set([...prev, currentScene.id]));
    }

    if (currentIndex < storyData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleChoice = (choice, flagKey, flagValue, nextA, nextB) => {
    if (flagKey && flagValue) {
      setGameState(prev => ({
        ...prev,
        flags: { ...prev.flags, [flagKey]: flagValue }
      }));
    }

    if (currentScene.id) {
      setVisitedScenes(prev => new Set([...prev, currentScene.id]));
    }

    let nextIndex = currentIndex + 1;
    
    if (choice === 'a' && nextA) {
      const targetIndex = findSceneIndexById(nextA);
      if (targetIndex !== -1) {
        nextIndex = targetIndex;
      }
    } else if (choice === 'b' && nextB) {
      const targetIndex = findSceneIndexById(nextB);
      if (targetIndex !== -1) {
        nextIndex = targetIndex;
      }
    }

    setCurrentIndex(nextIndex);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setGameState({ flags: {} });
    setVisitedScenes(new Set());
    setIsStarted(false);
  };

  const renderScene = () => {
    if (!currentScene) return null;

    switch (currentScene.type) {
      case 'line':
        return <LineScene scene={currentScene} onNext={handleNext} />;
      case 'polaroid':
        return <PolaroidScene scene={currentScene} onNext={handleNext} />;
      case 'choice':
        return (
          <ChoiceScene 
            scene={currentScene} 
            onChoice={(choice) => handleChoice(
              choice, 
              choice === 'a' ? currentScene.set_flag_a : currentScene.set_flag_b,
              choice === 'a' ? currentScene.set_value_a : currentScene.set_value_b,
              currentScene.next_a,
              currentScene.next_b
            )} 
          />
        );
      case 'minigame':
        return <MinigameScene scene={currentScene} onComplete={handleNext} />;
      case 'end':
        return <EndScene scene={currentScene} onRestart={handleRestart} />;
      default:
        return <LineScene scene={currentScene} onNext={handleNext} />;
    }
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-md"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8 inline-block"
          >
            <Heart className="w-24 h-24 text-red-400 fill-red-400" />
          </motion.div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
            LoveQuest
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            An interactive journey through the most memorable moments of a love story
          </p>
          
          <Button
            onClick={() => setIsStarted(true)}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Let the story begin
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 relative overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1 bg-pink-200/50">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-red-500"
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / (storyData.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <SceneBackground background={currentScene?.background} />
      </div>

      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 50
            }}
            animate={{
              y: -50,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2
            }}
          >
            <Heart className="w-6 h-6 text-pink-300/30 fill-pink-300/30" />
          </motion.div>
        ))}
      </div>

      {/* Interactive Objects in Background */}
      {currentScene?.objects && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="relative w-full h-full pointer-events-auto">
            <InteractiveObjects objects={currentScene.objects} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl"
          >
            {renderScene()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Restart Button (always visible) */}
      {currentScene?.type !== 'end' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={handleRestart}
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-white/80 backdrop-blur-sm border-pink-200 hover:bg-pink-50 hover:border-pink-300 shadow-lg"
          >
            <RotateCcw className="w-5 h-5 text-pink-600" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}