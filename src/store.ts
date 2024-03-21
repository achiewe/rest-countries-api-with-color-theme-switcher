import { create } from "zustand";
import { CountryType } from "./type";

type countryStore = {
  darkMode: boolean;
  fetchData: CountryType[];
  selectedRegion: string;
  selectedCountry: null | CountryType;
  inputValue: string;
  setInputValue: (newValue: string) => void;
  setFetchData: (newData: CountryType[]) => void;
  setSelectedCountry: (newCountry: null | CountryType) => void;
  setDarkMode: (newMode: boolean) => void;
  setSelectedRegion: (region: string) => void;
};

export const useCountryStore = create<countryStore>((set) => ({
  darkMode: false,
  fetchData: [],
  inputValue: "",
  selectedRegion: "",
  selectedCountry: null,
  setDarkMode: (newMode: boolean) => {
    set({ darkMode: newMode });
  },
  setSelectedCountry: (newCountry: null | CountryType) => {
    set({ selectedCountry: newCountry });
  },
  setInputValue: (newValue: string) => {
    set({ inputValue: newValue });
  },
  setFetchData: (newData: CountryType[]) => {
    set({ fetchData: newData });
  },
  setSelectedRegion: (region: string) => {
    set({ selectedRegion: region });
  },
}));
