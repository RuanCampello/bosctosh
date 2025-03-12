import FileIcon from '@/components/file-icon';
import FinderHeader from '@/components/finder-header';

export default function FinderScreen() {
  return (
    <div className='flex flex-col'>
      <FinderHeader title='Finder' />
      <section className='w-full h-full p-2'>
        <FileIcon title='xdd.txt' type='article' isLocked />
      </section>
    </div>
  );
}
