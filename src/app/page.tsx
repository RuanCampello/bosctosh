'use client';

import PassKeysCard from '@/components/card';
import Header from '@/components/header';
import { DndContext } from '@dnd-kit/core';

export default function Home() {
  return (
    <main
      className="bg-secondary relative h-full bg-[url('/assets/background.svg')] bg-cover bg-center"
      style={{ backgroundSize: '200vh 70vw' }}
    >
      <Header />
      <DndContext>
        <PassKeysCard />
      </DndContext>
    </main>
  );
}
