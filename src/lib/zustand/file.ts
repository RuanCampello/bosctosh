import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFile = create(
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
