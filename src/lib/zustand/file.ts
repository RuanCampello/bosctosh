import { StaticImageData } from 'next/image';
import { useEffect } from 'react';
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
  unlockedFiles: Set<string>;
  setPassword: (password: string) => void;
  openFile: (id: string, file: File, password?: string) => void;
  closeModal: () => void;
  closePasswordModal: () => void;
  unlockFile: (id: string) => void;
}

const useFile = create<FileStore>()(
  persist(
    (set, get) => ({
      fileId: null,
      isOpen: false,
      isPasswordOpen: false,
      password: '',
      correctPassword: '',
      unlockedFiles: new Set<string>(),
      setPassword: (password: string) => set({ password }),
      openFile: (id: string, file: File, password?: string) => {
        const { unlockedFiles } = get();

        if (!(unlockedFiles instanceof Set)) {
          set({ unlockedFiles: new Set(unlockedFiles) });
        }

        if (unlockedFiles.has(id)) {
          set({
            fileId: id,
            isOpen: true,
            isPasswordOpen: false,
            file,
          });
          return;
        }

        if (password) {
          set({
            fileId: id,
            isOpen: false,
            isPasswordOpen: true,
            correctPassword: password,
            file,
          });
        } else {
          set({
            fileId: id,
            isOpen: true,
            isPasswordOpen: false,
            file,
          });
        }
      },
      closeModal: () => set({ isOpen: false }),
      closePasswordModal: () => set({ isPasswordOpen: false }),
      unlockFile: (id: string) => {
        const { password, correctPassword, unlockedFiles } = get();

        if (password === correctPassword) {
          set({
            isOpen: true,
            isPasswordOpen: false,
            unlockedFiles: new Set([...unlockedFiles, id]),
          });

          sessionStorage.setItem(
            'unlockedFiles',
            JSON.stringify([...unlockedFiles, id]),
          );
        } else {
          alert('Incorrect password');
        }
      },
    }),
    {
      name: 'file-modal-store',
      partialize: (state) => ({
        fileId: state.fileId,
        isOpen: state.isOpen,
        file: state.file,
        closeModal: state.closeModal,
      }),
    },
  ),
);

export const useFileState = () => {
  useEffect(() => {
    const storedUnlockedFiles = sessionStorage.getItem('unlockedFiles');
    if (storedUnlockedFiles) {
      const files = JSON.parse(storedUnlockedFiles);
      if (Array.isArray(files)) {
        const newUnlockedFiles = new Set(files);
        useFile.setState({ unlockedFiles: newUnlockedFiles });
      }
    }
  }, []);
};

export default useFile;
