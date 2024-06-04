import { create } from 'zustand';

interface Store {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<Store>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
