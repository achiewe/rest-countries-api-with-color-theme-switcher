import { create } from "zustand";
import { CountryType } from "./type";

type countryStore = {
  darkMode: boolean;
  fetchData: CountryType[];
  inputValue: string;
  setInputValue: (newValue: string) => void;
  setFetchData: (newData: CountryType[]) => void;
  setDarkMode: (newMode: boolean) => void;
};

export const useCountryStore = create<countryStore>((set) => ({
  darkMode: false,
  fetchData: [],
  inputValue: "",
  setDarkMode: (newMode: boolean) => {
    set({ darkMode: newMode });
  },
  setInputValue: (newValue: string) => {
    set({ inputValue: newValue });
  },
  setFetchData: (newData: CountryType[]) => {
    set({ fetchData: newData });
  },
}));
