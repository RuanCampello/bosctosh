'use client';

import Profile from '@/assets/profile.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const dateString = date.toLocaleDateString('en-GB');
  const time = date.toLocaleTimeString('en');

  return (
    <header className='font-chicago flex justify-between items-center border-b-4 text-background border-background py-2.5 px-4 bg-foreground rounded-t-2xl'>
      <div>pear</div>
      <div className='flex items-center gap-4'>
        <Image src={Profile} alt='Logo' className='w-8 h-8' />

        <div className='flex flex-col text-sm'>
          <span suppressHydrationWarning>{time}</span>
          <span suppressHydrationWarning>{dateString}</span>
        </div>
      </div>
    </header>
  );
}
