'use client';

import FinderHeader from '@/components/finder-header';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import useFile from '@/lib/zustand/file';
import useFolder from '@/lib/zustand/folder';
import { type File } from '@/zustand/folder';
import Image from 'next/image';

export default function File() {
  const isOpen = useFile((state) => state.isOpen);
  const fileId = useFile((state) => state.fileId);
  const closeFile = useFile((state) => state.closeModal);

  const folders = useFolder((state) => state.folders);

  let file: File | null = null;
  for (const folder of Object.values(folders)) {
    const foundFile = folder.files.find((file) => file.title === fileId);
    if (foundFile) {
      file = foundFile;
      break;
    }
  }

  if (!file) return null;

  return (
    <Dialog open={isOpen} onOpenChange={closeFile}>
      <DialogContent className='z-[1000] border-4 border-background bg-foreground text-background rounded-none border-solid p-0 min-w-[70vw] h-[70vh] flex flex-col gap-0'>
        <FinderHeader title={fileId!} />
        <article className='p-4 grid grid-cols-3'>
          <p className='font-garamond text-3xl'>{file.left_content}</p>
          <Image
            src={file.image}
            alt={file.title}
            className='h-full w-[90%] object-cover border-4 border-solid border-background'
          />
          <p className='font-garamond text-3xl'>{file.right_content}</p>
        </article>
      </DialogContent>
    </Dialog>
  );
}
