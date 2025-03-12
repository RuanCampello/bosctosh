import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface PopoverState {
  isFinderOpen: boolean;
  setFinderOpen: (isOpen: boolean) => void;
}

const useFinder = create<PopoverState>()(
  persist(
    (set) => ({
      isFinderOpen: false,
      setFinderOpen: (isOpen) => set({ isFinderOpen: isOpen }),
    }),
    {
      name: 'finder-popover-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useFinder;
