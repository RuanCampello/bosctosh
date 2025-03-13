import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ReadmeState {
  isReadmeOpen: boolean;
  setReadmeOpen: (isOpen: boolean) => void;
}

const useReadme = create<ReadmeState>()(
  persist(
    (set) => ({
      isReadmeOpen: false,
      setReadmeOpen: (isOpen) => set({ isReadmeOpen: isOpen }),
    }),
    {
      name: 'readme-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useReadme;
