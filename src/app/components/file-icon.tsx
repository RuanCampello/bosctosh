import Article from '@/assets/article.svg';
import Folder from '@/assets/folder.svg';
import File from '@/assets/text.svg';
import Image from 'next/image';

interface FileIconProps {
  title: string;
  type: 'article' | 'file' | 'folder';
}

const icons = {
  article: Article,
  file: File,
  folder: Folder,
};

export default function FileIcon({ title, type }: FileIconProps) {
  return (
    <button className='w-fit flex flex-col cursor-pointer'>
      <Image
        alt={type}
        className='w-20 h-20 scale-120 pointer-events-none'
        src={icons[type]}
      />
      <h3 className='text-base font-chicago select-none'>{title}</h3>
    </button>
  );
}
