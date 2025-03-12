import Article from '@/assets/article.svg';
import Folder from '@/assets/folder.svg';
import Lock from '@/assets/lock.png';
import File from '@/assets/text.svg';
import useFile from '@/lib/zustand/file';
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
  const openFolder = useFolder((state) => state.openFolder);

  return (
    <button
      className='w-fit relative flex flex-col cursor-pointer'
      onClick={() => {
        if (type === 'file' || type === 'article') {
          if (
            isLocked &&
            sessionStorage.getItem(`file-locked-${title}`) !== 'false'
          ) {
            sessionStorage.setItem(`file-locked-${title}`, 'false');
            setIsLocked(false);
          }

          openFile(title, correctPassword);
        } else if (type === 'folder') {
          openFolder(title);
        }
      }}
    >
      <Image
        alt={type}
        className='w-20 h-20 scale-120 pointer-events-none'
        src={icons[type]}
      />
      <h3
        title={title}
        className='text-base font-chicago select-none cursor-pointer max-w-20 leading-normal line-clamp-2'
      >
        {title}
      </h3>
      {isFileLocked && (
        <Image src={Lock} alt='locked' className='absolute bottom-6 right-2' />
      )}
    </button>
  );
}
