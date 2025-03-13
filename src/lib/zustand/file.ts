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
      storage: {
        getItem: (key) => {
          const item = sessionStorage.getItem(key);
          if (!item) return null;

          const parsed = JSON.parse(item) as Partial<FileStore>;

          return {
            state: {
              ...parsed,
              unlockedFiles: new Set(parsed.unlockedFiles ?? []),
            },
          };
        },
        setItem: (key, value) => {
          const storeValue = value as unknown as FileStore;

          sessionStorage.setItem(
            key,
            JSON.stringify({
              ...storeValue,
              unlockedFiles: Array.from(storeValue.unlockedFiles || []),
            }),
          );
        },
        removeItem: (key) => {
          sessionStorage.removeItem(key);
        },
      },
    },
  ),
);

export default useFile;
