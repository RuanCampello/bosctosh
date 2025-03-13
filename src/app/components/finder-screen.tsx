import FileIcon from '@/components/file-icon';
import FinderHeader from '@/components/finder-header';
import { contents } from '@/lib/contents';

export default function FinderScreen() {
  return (
    <div className='flex flex-col'>
      <FinderHeader title='Finder' />
      <section className='p-2 flex gap-8'>
        {contents.map((file) => (
          <FileIcon
            key={file.title}
            title={file.title}
            type={file.type}
            // left_content={file.left_content}
            // right_content={file.right_content}
            // image={file.image}
            isLocked={file.isLocked}
            correctPassword={file.correctPassword}
          />
        ))}
      </section>
    </div>
  );
}
