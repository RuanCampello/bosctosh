import FinderHeader from '@/components/finder-header';
import FileIcon from './file-icon';

export default function FinderScreen() {
  return (
    <div className='flex flex-col'>
      <FinderHeader title='Finder' />
      <section className='w-full h-full p-2'>
        <FileIcon title='artigos' type='folder' />
      </section>
    </div>
  );
}
