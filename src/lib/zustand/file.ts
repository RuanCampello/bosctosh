import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FileStore {
  fileId: string | null;
  isOpen: boolean;
  isPasswordOpen: boolean;
  isLocked: boolean;
  openFile: (id: string, locked: boolean) => void;
  closeModal: () => void;
  closePasswordModal: () => void;
  clearFile: () => void;
  unlockFile: () => void;
}

const useFile = create<FileStore>()(
  persist(
    (set) => ({
      fileId: null,
      isLocked: false,
      isOpen: false,
      isPasswordOpen: false,
      openFile: (id: string, locked: boolean) => {
        if (locked) {
          console.log('Locked file opened');
          set({
            fileId: id,
            isLocked: true,
            isPasswordOpen: true,
          });
        } else {
          set({ fileId: id, isOpen: true });
        }
      },
      closeModal: () => set({ isOpen: false }),
      closePasswordModal: () => set({ isPasswordOpen: false }),
      clearFile: () => set({ fileId: null, isOpen: false }),
      unlockFile: () => set({ isLocked: false }),
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
