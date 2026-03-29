"use client";

import { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
  text: string;
  triggerReset?: boolean;
  delay?: number;
}

export default function TextScramble({ text, triggerReset, delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef(0);
  const requestRef = useRef<number>();
  const queueRef = useRef<Array<any>>([]);

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const scramble = () => {
    const length = text.length;
    queueRef.current = [];

    for (let i = 0; i < length; i++) {
      const to = text[i];
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queueRef.current.push({ to, start, end, char: "" });
    }

    frameRef.current = 0;
    update();
  };

  const update = () => {
    let output = "";
    let complete = 0;

    for (let i = 0; i < queueRef.current.length; i++) {
      const item = queueRef.current[i];
      if (frameRef.current >= item.end) {
        complete++;
        output += item.to;
      } else if (frameRef.current >= item.start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = chars[Math.floor(Math.random() * chars.length)];
        }
        output += item.char;
      } else {
        output += item.to;
      }
    }

    setDisplayText(output);

    if (complete === queueRef.current.length) {
      // Animation complete, keep showing the final text
      return;
    } else {
      frameRef.current++;
      requestRef.current = requestAnimationFrame(update);
    }
  };

  useEffect(() => {
    if (triggerReset) {
      scramble();
    }
  }, [triggerReset]);

  useEffect(() => {
    // Start the scramble cycle after the initial delay
    const initialTimer = setTimeout(() => {
      scramble();
    }, delay);

    // Then repeat scrambling every 5-7 seconds
    const cycleTimer = setInterval(() => {
      scramble();
    }, 5000 + Math.random() * 2000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleTimer);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [text, delay]);

  return (
    <span 
      className="text-scramble cursor-pointer transition-all duration-300 hover:drop-shadow-lg inline-block"
    >
      {displayText}
    </span>
  );
}
