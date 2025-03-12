import useFile from '@/zustand/file';

import Article from '@/assets/article.svg';
import Folder from '@/assets/folder.svg';
import Lock from '@/assets/lock.png';
import File from '@/assets/text.svg';
import useFolder from '@/lib/zustand/folder';
import Image from 'next/image';

interface FileIconProps {
  title: string;
  type: 'article' | 'file' | 'folder';
  isLocked?: boolean;
  correctPassword?: string;
}

const icons = {
  article: Article,
  file: File,
  folder: Folder,
};

export default function FileIcon({
  title,
  type,
  isLocked = false,
  correctPassword,
}: FileIconProps) {
  const openFile = useFile((state) => state.openFile);
  const setIsLocked = useFile((state) => state.setIsLocked);
  const isFileLocked = useFile((state) => state.isLocked);

  const { openFolder } = useFolder();

  if (type === 'file') {
    const isAlreadyLocked =
      sessionStorage.getItem(`file-locked-${title}`) === 'true';

    if (isLocked && !isAlreadyLocked) {
      setIsLocked(true);
      sessionStorage.setItem(`file-locked-${title}`, 'true');
    }
  }

  return (
    <button
      className='w-fit relative flex flex-col cursor-pointer'
      onClick={() => {
        if (type == 'file') {
          if (isLocked) openFile(title, correctPassword);
          else openFile(title);
        } else if (type == 'folder') {
          openFolder(title);
        }
      }}
    >
      <Image
        alt={type}
        className='w-20 h-20 scale-120 pointer-events-none'
        src={icons[type]}
      />
      <h3 className='text-base font-chicago select-none cursor-pointer'>
        {title}
      </h3>
      {isFileLocked && (
        <Image src={Lock} alt='locked' className='absolute bottom-6 right-2' />
      )}
    </button>
  );
}
