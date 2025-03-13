'use client';

import useReadme from '@/lib/zustand/readme';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import FinderHeader from './finder-header';
import { Dialog, DialogContent } from './ui/dialog';

export default function Readme() {
  const [content, setContent] = useState('');
  const { isReadmeOpen, setReadmeOpen } = useReadme();

  console.log(isReadmeOpen);

  useEffect(() => {
    fetch('/README.md')
      .then((res) => res.text())
      .then(setContent)
      .catch(console.error);
  }, []);

  return (
    <Dialog
      open={isReadmeOpen}
      onOpenChange={(isOpen) => setReadmeOpen(isOpen)}
    >
      <DialogContent className='flex flex-col bg-foreground text-background border-4 border-background border-solid p-0 rounded-none sm:max-w-[60vw] sm:max-h-[80vh]'>
        <FinderHeader title={'Readme.md'} />
        <div className='prose sm:max-w-[60vw] p-10 overflow-y-scroll cursor-grap'>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </DialogContent>
    </Dialog>
  );
}
