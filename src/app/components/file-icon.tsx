import useFile, { type File } from '@/zustand/file';

import Article from '@/assets/article.svg';
import Folder from '@/assets/folder.svg';
// import Lock from '@/assets/lock.png';
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
  console.log(title, isLocked);
  const file: File = {
    left_content,
    image,
    right_content,
  };

  return (
    <button
      className='w-fit relative flex flex-col cursor-pointer'
      onClick={() => {
        if (isLocked) openFile(title, file, correctPassword);
        else openFile(title, file);
      }}
    >
      <Image
        alt={type}
        className='w-24 h-24 scale-120 pointer-events-none'
        src={icons[type]}
      />
      <h3 className='text-base font-chicago select-none cursor-pointer line-clamp-3 max-w-24'>
        {title}
      </h3>
      {/* {isLocked && (
        <Image src={Lock} alt='locked' className='absolute bottom-6 right-2' />
      )} */}
    </button>
  );
}
