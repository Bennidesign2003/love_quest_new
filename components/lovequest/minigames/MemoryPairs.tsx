import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Trophy } from 'lucide-react';

const EMOJIS = ['💕', '💖', '💗', '💝', '💘', '💞'];

export default function MemoryPairs({ onComplete }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (matched.length > 0 && matched.length === cards.length) {
      setTimeout(() => onComplete(), 1200);
    }
  }, [matched, cards.length, onComplete]);

  const initGame = () => {
    const gameEmojis = EMOJIS.slice(0, 6);
    const doubled = [...gameEmojis, ...gameEmojis];
    const shuffled = doubled.sort(() => Math.random() - 0.5);
    setCards(shuffled.map((emoji, index) => ({ id: index, emoji })));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setIsChecking(false);
  };

  const handleCardClick = (index) => {
    // Prevent clicks during checking, if already flipped, or if already matched
    if (isChecking || flipped.includes(index) || matched.includes(index)) return;
    
    // Prevent flipping more than 2 cards
    if (flipped.length >= 2) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    // Check for match when 2 cards are flipped
    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves(m => m + 1);
      
      const [first, second] = newFlipped;
      
      if (cards[first].emoji === cards[second].emoji) {
        // Match found
        setTimeout(() => {
          setMatched(prev => [...prev, first, second]);
          setFlipped([]);
          setIsChecking(false);
        }, 600);
      } else {
        // No match - flip back
        setTimeout(() => {
          setFlipped([]);
          setIsChecking(false);
        }, 1200);
      }
    }
  };

  const isCardFlipped = (index) => {
    return flipped.includes(index) || matched.includes(index);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-pink-100 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-block mb-2">
          <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Memory Pair
        </h2>
        <p className="text-gray-600">Moves: {moves}</p>
        {matched.length > 0 && (
          <p className="text-sm text-pink-600 mt-1">
            {matched.length / 2} / {cards.length / 2} pairs found
          </p>
        )}
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-6">
        {cards.map((card, index) => {
          const isFlipped = isCardFlipped(index);
          const isMatched = matched.includes(index);
          
          return (
            <motion.div
  className="aspect-square rounded-2xl relative cursor-pointer"
  style={{ perspective: 1000 }}
  onClick={() => handleCardClick(index)}
>
  <motion.div
    className="w-full h-full relative"
    animate={{ rotateY: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.4 }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {/* Card Back */}
    <motion.div
      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center shadow-lg"
      style={{ backfaceVisibility: 'hidden' }}
      animate={{ opacity: isFlipped ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <Heart className="w-8 h-8 text-white opacity-50" />
    </motion.div>

    {/* Card Front */}
    <motion.div
      className={`absolute inset-0 rounded-2xl flex items-center justify-center text-4xl md:text-5xl shadow-lg border-2 ${
        isMatched ? 'bg-green-100 border-green-400' : 'bg-white border-pink-200'
      }`}
      style={{ backfaceVisibility: 'hidden', rotateY: '180deg' }}
      animate={{ opacity: isFlipped ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {card.emoji}
    </motion.div>
  </motion.div>
</motion.div>
          );
        })}
      </div>

      {/* Reset Button */}
      <div className="flex justify-center">
        <Button
          onClick={initGame}
          variant="outline"
          className="border-pink-300 text-pink-600 hover:bg-pink-50"
        >
          Restart
        </Button>
      </div>
    </div>
  );
}