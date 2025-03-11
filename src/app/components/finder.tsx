'use client';

import FinderScreen from '@/components/finder-screen';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useFinder from '@/zustand/finder';
import { useState } from 'react';

export default function Finder() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const finderOpen = useFinder((state) => state.isFinderOpen);
  const setFinderOpen = useFinder((state) => state.setFinderOpen);

  return (
    <>
      <DropdownMenu
        open={dropdownOpen}
        onOpenChange={setDropdownOpen}
        modal={false}
      >
        <DropdownMenuTrigger asChild>
          <button>pear</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side='bottom'
          sideOffset={12}
          align='end'
          alignOffset={12}
          className='rounded-none bg-foreground text-background'
        >
          <DropdownMenuItem onClick={() => setFinderOpen(!finderOpen)}>
            Finder
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={finderOpen} onOpenChange={setFinderOpen}>
        <DialogContent className='w-[90vw] min-w-[90vw] h-[80vh] rounded-none border-4 border-background bg-foreground text-background p-0'>
          <FinderScreen />
        </DialogContent>
      </Dialog>
    </>
  );
}
