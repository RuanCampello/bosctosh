import { StaticImageData } from 'next/image';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type File = {
  left_content: string;
  right_content: string;
  image: StaticImageData;
};

interface FileStore {
  fileId: string | null;
  file?: File;
  isOpen: boolean;
  isPasswordOpen: boolean;
  password: string;
  correctPassword: string;
  setPassword: (password: string) => void;
  isLocked: boolean;
  openFile: (id: string, file: File, password?: string) => void;
  setIsLocked: (locked: boolean) => void;
  closeModal: () => void;
  closePasswordModal: () => void;
  clearFile: () => void;
  unlockFile: (id: string) => void;
}

const useFile = create<FileStore>()(
  persist(
    (set, get) => ({
      fileId: null,
      isLocked: false,
      isOpen: false,
      isPasswordOpen: false,
      password: '',
      correctPassword: '',
      setPassword: (password: string) => set({ password }),
      openFile: (id: string, file?: File, password?: string) => {
        if (password) {
          set({
            fileId: id,
            isOpen: false,
            isPasswordOpen: true,
            file,
            correctPassword: password,
            isLocked: true,
          });
        } else {
          set({
            fileId: id,
            isOpen: true,
            isPasswordOpen: false,
            file,
            isLocked: false,
          });
        }
      },
      setIsLocked: (locked: boolean) => set({ isLocked: locked }),
      closeModal: () => set({ isOpen: false }),
      closePasswordModal: () => set({ isPasswordOpen: false }),
      clearFile: () => set({ fileId: null, isOpen: false }),
      unlockFile: () => {
        if (get().isLocked) {
          set({
            isLocked: false,
            isOpen: true,
            isPasswordOpen: false,
          });
        }
      },
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
