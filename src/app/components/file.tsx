'use client';

import FinderHeader from '@/components/finder-header';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import useFile from '@/lib/zustand/file';
import Image from 'next/image';

export default function File() {
  const isOpen = useFile((state) => state.isOpen);
  const fileId = useFile((state) => state.fileId);
  const file = useFile((state) => state.file);
  const closeFile = useFile((state) => state.closeModal);

  if (!file) return;

  return (
    <Dialog open={isOpen} onOpenChange={closeFile}>
      <DialogContent className='z-[10000] border-4 border-background bg-foreground text-background rounded-none border-solid p-0 min-w-[70vw] h-[70vh] flex flex-col gap-0'>
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
