import { create } from 'zustand';

interface PopoverState {
  isFinderOpen: boolean;
  setFinderOpen: (isOpen: boolean) => void;
}

const useFinder = create<PopoverState>((set) => ({
  isFinderOpen: false,
  setFinderOpen: (isOpen) => set({ isFinderOpen: isOpen }),
}));

export default useFinder;
