import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function PickleballRally({ onComplete }) {
  const [ballPos, setBallPos] = useState({ x: 50, y: 50 });
  const [ballVelocity, setBallVelocity] = useState({ x: 2, y: 2 });
  const [leftPaddle, setLeftPaddle] = useState(40);
  const [rightPaddle, setRightPaddle] = useState(40);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const TARGET_SCORE = 5;

  const gameLoopRef = useRef(null);
  const ballPosRef = useRef(ballPos);
  const ballVelocityRef = useRef(ballVelocity);
  const leftPaddleRef = useRef(leftPaddle);
  const rightPaddleRef = useRef(rightPaddle);
  const scoreRef = useRef(score);

  // Sync refs with state
  useEffect(() => { ballPosRef.current = ballPos; }, [ballPos]);
  useEffect(() => { ballVelocityRef.current = ballVelocity; }, [ballVelocity]);
  useEffect(() => { leftPaddleRef.current = leftPaddle; }, [leftPaddle]);
  useEffect(() => { rightPaddleRef.current = rightPaddle; }, [rightPaddle]);
  useEffect(() => { scoreRef.current = score; }, [score]);

  useEffect(() => {
    if (!isPlaying) return;

    gameLoopRef.current = setInterval(() => {
      let { x, y } = ballPosRef.current;
      let { x: vx, y: vy } = ballVelocityRef.current;
      const leftP = leftPaddleRef.current;
      const rightP = rightPaddleRef.current;

      // Ball bewegen
      let newX = x + vx;
      let newY = y + vy;

      // Obere/untere Kante
      if (newY <= 5 || newY >= 95) {
        vy = -vy;
        newY = newY <= 5 ? 5 : 95;
      }

      // Linker Paddle
      if (newX <= 8 && newY >= leftP - 5 && newY <= leftP + 15) {
        vx = Math.abs(vx) * 1.05; // kleinerer Multiplikator
        newX = 8;
        setScore(s => s + 1);
      }

      // Rechter Paddle (AI)
      if (newX >= 92 && newY >= rightP - 5 && newY <= rightP + 15) {
        vx = -Math.abs(vx) * 1.05; // kleinerer Multiplikator
        newX = 92;
      }

      // Ausserhalb
      if (newX < 0 || newX > 100) {
        setIsPlaying(false);
        if (scoreRef.current >= TARGET_SCORE) {
          setTimeout(() => onComplete(), 500);
        }
        return;
      }

      setBallPos({ x: newX, y: newY });
      setBallVelocity({ x: vx, y: vy });

      // AI Paddle bewegen
      setRightPaddle(prev => {
        const diff = newY - prev;
        return prev + Math.sign(diff) * Math.min(Math.abs(diff), 2);
      });
    }, 16); // ~60fps

    return () => clearInterval(gameLoopRef.current);
  }, [isPlaying, onComplete]);

  const handleMouseMove = (e) => {
    if (!isPlaying) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLeftPaddle(Math.max(10, Math.min(90, y)));
  };

  const handleTouchMove = (e) => {
    if (!isPlaying) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const y = ((e.touches[0].clientY - rect.top) / rect.height) * 100;
    setLeftPaddle(Math.max(10, Math.min(90, y)));
  };

  const startGame = () => {
    setBallPos({ x: 50, y: 50 });
    setBallVelocity({ x: 1.2, y: 1.2 }); // langsamer starten
    setScore(0);
    setIsPlaying(true);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-pink-100 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">🏓</div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Pickleball Rally</h2>
        <p className="text-gray-600">Score: {score} / {TARGET_SCORE}</p>
      </div>

      <div
        className="relative h-96 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl overflow-hidden border-4 border-green-300"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-2 border-dashed border-green-400" />

        <motion.div className="absolute left-2 w-3 h-20 bg-pink-500 rounded-full shadow-lg"
          style={{ top: `${leftPaddle}%` }} animate={{ y: '-50%' }} />

        <motion.div className="absolute right-2 w-3 h-20 bg-red-500 rounded-full shadow-lg"
          style={{ top: `${rightPaddle}%` }} animate={{ y: '-50%' }} />

        {isPlaying && (
          <motion.div className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-lg"
            style={{ left: `${ballPos.x}%`, top: `${ballPos.y}%` }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.2, repeat: Infinity }} />
        )}

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="text-center bg-white rounded-2xl p-6 shadow-xl">
              {score >= TARGET_SCORE ? (
                <>
                  <div className="text-5xl mb-3">🏆</div>
                  <p className="text-xl font-bold text-green-600 mb-4">You win!</p>
                </>
              ) : score > 0 ? (
                <>
                  <div className="text-5xl mb-3">😅</div>
                  <p className="text-xl font-bold text-gray-700 mb-4">Try again!</p>
                </>
              ) : (
                <>
                  <div className="text-5xl mb-3">🏓</div>
                  <p className="text-lg text-gray-700 mb-4">Move the paddle with your mouse or finger</p>
                </>
              )}
              <Button onClick={startGame} className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">
                {score > 0 ? 'Try again' : 'Start'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}