import { DialogClose } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

export default function FinderHeader({ title }: { title: string }) {
  return (
    <header className='grid grid-cols-[0.5fr_auto_0.5fr_1fr_1fr] items-center border-b-4 border-background gap-2 h-fit'>
      <SeparatorGroup />
      <DialogClose asChild>
        <button>
          <div className='border-2 border-solid border-background w-6 h-6 hover:bg-background/10 transition-all duration-200 cursor-pointer' />
        </button>
      </DialogClose>
      <SeparatorGroup />
      <h1 className='cursor-pointer text-3xl font-chicago text-center select-none'>
        {title}
      </h1>
      <SeparatorGroup />
    </header>
  );
}

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
