'use client';

import Profile from '@/assets/profile.png';
import Finder from '@/components/finder';
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
    <header className='font-chicago flex justify-between items-center border-b-4 text-background border-background px-8 shrink-0 grow-0 bg-foreground w-full overflow-hidden'>
      <div className='flex items-center gap-4 shrink-0 grow-0 max-h-fit'>
        <Finder />
        <Item content='File' />
      </div>
      <div className='flex items-center gap-2'>
        <Image src={Profile} alt='Logo' className='w-6 h-6' />
        <div className='flex text-sm gap-1'>
          <span suppressHydrationWarning>{time}</span>
          <div>|</div>
          <span suppressHydrationWarning>{dateString}</span>
        </div>
      </div>
    </header>
  );
}

function Item({ content }: { content: string }) {
  return (
    <h2 className='font-chicago text-lg'>
      <span>{content}</span>
    </h2>
  );
}
