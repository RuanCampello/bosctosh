import { StaticImageData } from 'next/image';
import { create } from 'zustand';
import { contents } from '../contents';

interface Folder {
  id: string;
  name: string;
  files: {
    title: string;
    left_content: string;
    right_content: string;
    image: StaticImageData;
    type: 'article' | 'file' | 'folder';
    isLocked?: boolean;
  }[];
}

interface FolderStore {
  isOpen: boolean;
  folderId: string | null;
  folders: Record<string, Folder>;
  openFolder: (id: string) => void;
  closeFolder: () => void;
}

const generateFolders = (): Record<string, Folder> => {
  return contents.reduce(
    (acc, content) => {
      const folderId = 'artigos';

      if (!acc[folderId]) {
        acc[folderId] = {
          id: folderId,
          name: 'Artigos',
          files: [],
        };
      }

      acc[folderId].files.push({
        title: content.title,
        left_content: content.left_content,
        right_content: content.right_content,
        image: content.image,
        type: content.type,
        isLocked: content.isLocked ?? false,
      });

      return acc;
    },
    {} as Record<string, Folder>,
  );
};

const useFolder = create<FolderStore>((set) => ({
  isOpen: false,
  folderId: null,
  folders: generateFolders(),
  openFolder: (id) =>
    set(() => ({
      isOpen: true,
      folderId: id,
    })),
  closeFolder: () =>
    set({
      isOpen: false,
      folderId: null,
    }),
}));

export default useFolder;
