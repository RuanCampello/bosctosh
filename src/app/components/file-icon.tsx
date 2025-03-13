'use client';

import useFile, { type File } from '@/zustand/file';

import Article from '@/assets/article.svg';
import Folder from '@/assets/folder.svg';
import Lock from '@/assets/lock.png';
import Image, { StaticImageData } from 'next/image';

interface FileIconProps {
  title: string;
  type: 'article' | 'file' | 'folder';
  isLocked?: boolean;
  correctPassword?: string;
  left_content: string;
  right_content: string;
  image: StaticImageData;
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
  image,
  left_content,
  right_content,
}: FileIconProps) {
  const openFile = useFile((state) => state.openFile);
  const unlockedFiles = useFile((state) => state.unlockedFiles);
  const file: File = {
    left_content,
    image,
    right_content,
  };

  const handleClick = () => {
    openFile(title, file, isLocked ? correctPassword : undefined);
  };

  const isUnlocked = unlockedFiles.has(title);

  return (
    <button
      className='w-fit relative flex flex-col cursor-pointer'
      onClick={handleClick}
    >
      <Image
        alt={type}
        className='w-24 h-24 scale-120 pointer-events-none'
        src={icons[type]}
      />
      {!isUnlocked && isLocked && (
        <Image src={Lock} alt='locked' className='absolute top-16 right-2' />
      )}
      <h3 className='text-base font-chicago select-none cursor-pointer line-clamp-3 max-w-24'>
        {title}
      </h3>
    </button>
  );
}
