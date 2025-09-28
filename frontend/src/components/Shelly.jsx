import React, { useState, useEffect } from 'react';
import shellyClosedImg from '../assets/Shelly-closed.png';
import shellyOpenImg from '../assets/Shelly-open.png';

export default function Shelly({ feedback, isVisible, onFeedbackComplete }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [mouthOpen, setMouthOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (feedback && isVisible) {
      startSpeaking();
    }
  }, [feedback, isVisible]);

  const startSpeaking = async () => {
    if (!feedback) {
      return;
    }

    setIsAnimating(true);
    setShowBubble(true);
    setDisplayedText('');

    // Typing animation
    for (let i = 0; i <= feedback.length; i++) {
      setDisplayedText(feedback.slice(0, i));

      // Animate mouth while typing
      if (i < feedback.length) {
        setMouthOpen(prev => !prev);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }

    // Keep mouth moving for a bit after typing finishes
    for (let i = 0; i < 6; i++) {
      setMouthOpen(prev => !prev);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    setMouthOpen(false);

    // Keep the speech bubble visible for a few more seconds
    setTimeout(() => {
      setShowBubble(false);
      setIsAnimating(false);
      if (onFeedbackComplete) {
        onFeedbackComplete();
      }
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-start h-full relative">
      {/* Speech Bubble */}
      {showBubble && (
        <div className="relative mb-4 max-w-xs">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-4 relative">
            <p className="text-sm font-unkempt text-gray-800 leading-relaxed">
              {displayedText}
              {isAnimating && displayedText.length < feedback.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-gray-200 absolute -top-[10px] left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      )}

      {/* Shelly Character */}
      <div className="relative">
        <img
          src={mouthOpen ? shellyOpenImg : shellyClosedImg}
          alt="Shelly the art mentor"
          className={`w-32 h-32 transition-all duration-200 ${
            isAnimating ? 'animate-bounce' : ''
          }`}
        />

        {/* Idle animation when not speaking */}
        {!isAnimating && isVisible && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-75"></div>
          </div>
        )}
      </div>

      {/* Shelly's name tag */}
      <div className="mt-2 text-center">
        <p className="font-unkempt text-lg text-gray-700 font-semibold">Shelly</p>
        <p className="font-unkempt text-xs text-gray-500">Your Art Mentor</p>
      </div>

      {/* Waiting state message */}
      {!showBubble && !isAnimating && isVisible && (
        <div className="mt-4 text-center">
          <p className="font-unkempt text-sm text-gray-400 italic">
            Keep drawing! I'll help when you need it.
          </p>
        </div>
      )}
    </div>
  );
}