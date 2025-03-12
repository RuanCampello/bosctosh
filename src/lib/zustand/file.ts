import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FileStore {
  fileId: string | null;
  isOpen: boolean;
  openFile: (id: string) => void;
  closeModal: () => void;
  clearFile: () => void;
}

const useFile = create<FileStore>()(
  persist(
    (set) => ({
      fileId: null,
      isOpen: false,
      openFile: (id: string) => set({ fileId: id, isOpen: true }),
      closeModal: () => set({ isOpen: false }),
      clearFile: () => set({ fileId: null, isOpen: false }),
    }),
    {
      name: 'file-modal-store',
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

export default useFile;
