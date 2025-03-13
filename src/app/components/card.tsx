'use client';

import Card from '@/assets/cards/card.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function PassKeysCard() {
  const [position, setPosition] = useState({
    x: 3000,
    y: 3000,
  });

  useEffect(() => {
    setPosition({
      x: window.innerWidth * 0.98,
      y: window.innerHeight * 0.98,
    });
  }, []);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <article
      ref={cardRef}
      onMouseDown={handleMouseDown}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className='w-60 cursor-grab absolute'
    >
      <Image src={Card} alt='card' className='pointer-events-none' />
      <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-background font-bold'>
        asdadsda
      </p>
    </article>
  );
}
