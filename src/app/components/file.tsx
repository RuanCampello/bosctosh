'use client';

import FinderHeader from '@/components/finder-header';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import useFile from '@/lib/zustand/file';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function File() {
  const [isOpen, setIsOpen] = useState(false);
  const fileId = useFile((state) => state.fileId);
  const file = useFile((state) => state.file);
  const openFile = useFile((state) => state.openFile);
  const isOpenStored = useFile((state) => state.isOpen);
  const closeFile = useFile((state) => state.closeModal);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (fileId && file && isOpenStored) {
        setIsOpen(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [fileId, file, openFile, isOpenStored]);

  if (!file) {
    console.log('No file', file, fileId);
    return null;
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
        closeFile();
      }}
    >
      <DialogContent className='z-[1000] border-4 border-background bg-foreground text-background rounded-none border-solid p-0 min-w-[70vw] h-[70vh] flex flex-col gap-0'>
        <FinderHeader title={fileId!} />
        <article className='p-8 grid grid-cols-3 h-full gap-3 relative'>
          <p className='font-garamond select-none lg:text-[26px] md:text-xl'>
            {file.left_content}
          </p>
          <Image
            src={file.image}
            alt={fileId!}
            className='h-full w-[20vw] object-cover border-4 border-solid border-background'
          />
          <p className='font-garamond select-none lg:text-[26px] md:text-xl'>
            {file.right_content}
          </p>
        </article>
      </DialogContent>
    </Dialog>
  );
}
