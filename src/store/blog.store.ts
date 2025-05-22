import { create } from "zustand";

interface BlogStore {
  isOpen: boolean;
  setDailogClose: () => void;
  setDailogOpen: () => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  isOpen: false,
  setDailogClose: () => set({ isOpen: false }),
  setDailogOpen: () => set({ isOpen: true }),
}));
