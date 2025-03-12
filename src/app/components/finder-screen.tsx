import FileIcon from '@/components/file-icon';
import { DialogClose } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

function SeparatorGroup() {
  return (
    <div className='flex flex-col gap-[5px] w-full'>
      {[...Array(4)].map((_, i) => (
        <Separator
          key={i}
          orientation='horizontal'
          className='bg-background border-1 border-background'
        />
      ))}
    </div>
  );
}

export default function FinderScreen() {
  return (
    <div>
      <header className='grid grid-cols-[0.5fr_auto_0.5fr_1fr_1fr] items-center border-b-4 border-background gap-2'>
        <SeparatorGroup />
        <DialogClose asChild>
          <button className='cursor-pointer'>
            <div className='border-2 border-solid border-background w-6 h-6 hover:bg-background/10 transition-all duration-200' />
          </button>
        </DialogClose>
        <SeparatorGroup />
        <h1 className='text-3xl font-chicago text-center select-none'>
          Finder
        </h1>
        <SeparatorGroup />
      </header>
      <section className='w-full h-full p-2'>
        <FileIcon title='xdd.txt' type='article' />
      </section>
    </div>
  );
}
