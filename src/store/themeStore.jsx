import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: true,
      toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
      setTheme: (dark) => set({ darkMode: dark }),
    }),
    {
      name: "codeneacademy-theme",
      getStorage: () => (typeof window !== "undefined" ? window.localStorage : undefined),
      partialize: (state) => ({ darkMode: state.darkMode }),
    },
  ),
);
