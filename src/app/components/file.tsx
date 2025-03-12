'use client';

import FinderHeader from '@/components/finder-header';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import useFile from '@/lib/zustand/file';

export default function File() {
  const isOpen = useFile((state) => state.isOpen);
  const fileId = useFile((state) => state.fileId);
  const closeFile = useFile((state) => state.closeModal);

  return (
    <Dialog open={isOpen} onOpenChange={closeFile}>
      <DialogContent className='z-[1000] border-4 border-background bg-foreground text-background rounded-none border-solid p-0 min-w-[70vw] h-[70vh] flex flex-col gap-0'>
        <FinderHeader title={fileId!} />
        <article className='p-4'></article>
      </DialogContent>
    </Dialog>
  );
}
