import { create } from "zustand";
import { CountryType } from "./type";

type countryStore = {
  darkMode: boolean;
  fetchData: CountryType[];
  setFetchData: (newData: CountryType[]) => void;
  setDarkMode: (newMode: boolean) => void;
};

export const useCountryStore = create<countryStore>((set) => ({
  darkMode: false,
  fetchData: [],
  setDarkMode: (newMode: boolean) => {
    set({ darkMode: newMode });
  },
  setFetchData: (newData: CountryType[]) => {
    set({ fetchData: newData });
  },
}));
