import { ChangeEvent } from "react";
import { useCountryStore } from "../../store";
import SortByRegion from "./SortByRegion";

export default function SearchInput() {
  const darkMode = useCountryStore((state) => state.darkMode);
  const inputValue = useCountryStore((state) => state.inputValue);
  const setInputValue = useCountryStore((state) => state.setInputValue);

  return (
    <div className="w-full flex flex-col item-start justify-start gap-[30px] sm:flex-row sm:justify-between max-w-[1250px]">
      <div
        className={`w-full flex flex-row items-center gap-[30px] sm:w-[480px] ${
          darkMode ? "bg-[#2B3844]" : "bg-[#ffffff]"
        } pl-[15px] py-[14px] rounded-[5px] shadow-md`}
      >
        <svg
          fill={darkMode ? "#ffffff" : "#000000"}
          height="20px"
          width="20px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 488.4 488.4"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
              />
            </g>
          </g>
        </svg>
        <input
          type="text"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
          placeholder="Search for a country…"
          className={`outline-none placeholder:text-[#C4C4C4] text-[12px] ${
            darkMode
              ? "bg-[#2B3844] text-[#ffff]"
              : "bg-[#ffffff] text-[#2B3844]"
          }`}
        />
      </div>
      <SortByRegion />
    </div>
  );
}
