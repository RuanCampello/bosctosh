'use client';

import FileIcon from '@/components/file-icon';
import FinderHeader from '@/components/finder-header';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import useFolder from '@/lib/zustand/folder';

interface FolderProps {
  folderName: string;
}

export default function FolderScreen({ folderName }: FolderProps) {
  const { isOpen, closeFolder } = useFolder();

  return (
    <Dialog open={isOpen} onOpenChange={closeFolder}>
      <DialogContent className='flex flex-col'>
        <FinderHeader title={folderName} />
        <section className='w-full h-full p-2'>
          <FileIcon
            title='xdd.txt'
            type='article'
            isLocked
            correctPassword={'abcd'}
          />
        </section>
      </DialogContent>
    </Dialog>
  );
}
