import { create } from 'zustand';

interface Folder {
  id: string;
  name: string;
  files: {
    title: string;
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

const useFolder = create<FolderStore>((set) => ({
  isOpen: false,
  folderId: null,
  folders: {
    artigos: {
      id: 'artigos',
      name: 'Artigos',
      files: [
        { title: 'notes.txt', type: 'article', isLocked: false },
        { title: 'confidential.txt', type: 'article', isLocked: true },
      ],
    },
  },
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
