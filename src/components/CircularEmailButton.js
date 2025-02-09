import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

const CircularEmailButton = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const characters = text.textContent.split('');
    text.textContent = '';

    characters.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transform = `rotate(${i * (360 / characters.length)}deg)`;
      text.appendChild(span);
    });
  }, []);

  return (
    
<div className="fixed left-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0 
    overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-20">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        
        <div className="absolute w-full h-full flex items-center justify-center">
        <p ref={textRef} className="fill-dark dark:fill-light animate-spin-slow duration-200">
          Software Developer 
        </p>
      </div>
        
      </div>
    </div>

  );
};

export default CircularEmailButton;