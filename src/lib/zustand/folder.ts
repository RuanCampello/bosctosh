import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FolderStore {
  folderId: string | null;
  isOpen: boolean;
  openFolder: (id: string) => void;
  closeFolder: () => void;
  clearFolder: () => void;
}

const useFolder = create<FolderStore>()(
  persist(
    (set) => ({
      folderId: null,
      isOpen: false,
      openFolder: (id: string) => {
        set({ folderId: id, isOpen: true });
        console.log('opened', id);
      },
      closeFolder: () => set({ isOpen: false }),
      clearFolder: () => set({ folderId: null, isOpen: false }),
    }),
    {
      name: 'folder-modal-store',
      storage: {
        getItem: (key) => {
          const item = sessionStorage.getItem(key);
          return item ? JSON.parse(item) : null;
        },
        setItem: (key, value) =>
          sessionStorage.setItem(key, JSON.stringify(value)),
        removeItem: (key) => sessionStorage.removeItem(key),
      },
    },
  ),
);

export default useFolder;
