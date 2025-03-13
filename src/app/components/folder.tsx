// 'use client';

// import FileIcon from '@/components/file-icon';
// import FinderHeader from '@/components/finder-header';
// import { Dialog, DialogContent } from '@/components/ui/dialog';

// export default function FolderScreen() {
//   // const { isOpen, setFileLock, closeFolder, folderId, folders } = useFolder();
//   const currentFolder = folderId ? folders[folderId] : null;

//   return (
//     <Dialog open={isOpen} onOpenChange={closeFolder}>
//       <DialogContent className='flex flex-col bg-foreground text-background border-4 border-background border-solid p-0 rounded-none sm:max-w-[80vw] sm:max-h-[80vh]'>
//         {currentFolder && <FinderHeader title={currentFolder.name} />}
//         <section className='p-2 flex gap-8'>
//           {currentFolder?.files.map((file) => (
//             <FileIcon
//               key={file.title}
//               title={file.title}
//               type={file.type}
//               isLocked={file.isLocked}
//             />
//           ))}
//         </section>
//       </DialogContent>
//     </Dialog>
//   );
// }
