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
          <button
            className='data-[active=true]:bg-background data-[active=true]:text-foreground h-8 px-3 flex items-center justify-center hover:bg-opacity-90 transition-colors'
            data-active={dropdownOpen}
          >
            pear
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={12}
          side='bottom'
          align='end'
          className='rounded-none bg-foreground text-background p-0 m-0 border-0 ms-2 '
        >
          <DropdownMenuItem
            onClick={() => setFinderOpen(!finderOpen)}
            className='font-chicago border-4 border-background p-1 bg-foreground hover:brightness-90 transition-all duration-300 cursor-pointer'
          >
            Finder
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={finderOpen} onOpenChange={setFinderOpen}>
        <DialogContent className='w-[80vw] min-w-[80vw] h-[80vh] rounded-none border-4 border-background bg-foreground text-background p-0'>
          <FinderScreen />
        </DialogContent>
      </Dialog>
    </>
  );
}
