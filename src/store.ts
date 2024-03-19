import { create } from "zustand";

type countryStore = {
  darkMode: boolean;
  setDarkMode: (newMode: boolean) => void;
};

export const useCountryStore = create<countryStore>((set) => ({
  darkMode: false,
  setDarkMode: (newMode: boolean) => {
    set({ darkMode: newMode });
  },
}));
