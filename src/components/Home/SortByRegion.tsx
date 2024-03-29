import { useState } from "react";
import { useCountryStore } from "../../store";

export default function SortByRegion() {
  const darkMode = useCountryStore((state) => state.darkMode);
  const setSelectedRegion = useCountryStore((state) => state.setSelectedRegion);
  const selectedRegion = useCountryStore((state) => state.selectedRegion);

  const [openFrame, setOpenFrame] = useState<boolean>(false);
  const [arrowRotation, setArrowRotation] = useState<number>(0);

  const toggleFrameVisibility = () => {
    setOpenFrame(!openFrame);
    setArrowRotation(openFrame ? 0 : 180);
  };

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    toggleFrameVisibility();
  };

  return (
    <div
      onClick={toggleFrameVisibility} // Toggle visibility and arrow rotation
      className={`${
        darkMode ? "bg-[#2B3844]" : "bg-[#ffffff]"
      }  flex justify-between items-center px-[14px] py-[19px] rounded-[5px] shadow-md relative w-[200px] cursor-pointer`}
    >
      <h3
        className={`font-normal text-[12px] leading-[20px] lg:text-[16px] ${
          darkMode ? "text-[#ffffff]" : "text-[#000000]"
        }`}
      >
        {selectedRegion === "" ? "No Region Selected" : selectedRegion}
      </h3>

      <svg
        width="20px"
        height="12px"
        viewBox="0 0 24 24"
        fill={darkMode ? "#ffffff" : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${arrowRotation}deg)` }}
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
        </g>
      </svg>

      <div
        className={`${
          openFrame ? "flex" : "hidden"
        } flex-col items-start justify-start px-[14px] gap-[8px] py-[16px] h-[160px] w-[200px] lg:gap-[15px] lg:h-[200px] ${
          darkMode ? "bg-[#2B3844]" : "bg-[#ffffff]"
        } absolute bottom-0 left-0 right-0 top-[62px] rounded-[5px]`}
      >
        <h2
          onClick={() => handleRegionClick("")}
          className={`text-[12px] leading-[16px] font-normal cursor-pointer lg:text-[15px] hover:text-[#e2e2e2] ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          No Region Selected
        </h2>
        <h2
          onClick={() => handleRegionClick("Africa")}
          className={`text-[12px] leading-[16px] font-normal cursor-pointer lg:text-[15px] hover:text-[#e2e2e2] ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Africa
        </h2>
        <h2
          onClick={() => handleRegionClick("Americas")}
          className={`text-[12px] leading-[16px] font-normal cursor-pointer lg:text-[15px] hover:text-[#e2e2e2]  ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Americas
        </h2>
        <h2
          onClick={() => handleRegionClick("Asia")}
          className={`text-[12px] leading-[16px] font-normal cursor-pointer lg:text-[15px] hover:text-[#e2e2e2]  ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Asia
        </h2>
        <h2
          onClick={() => handleRegionClick("Europe")}
          className={`text-[12px] leading-[16px] font-normal cursor-pointer lg:text-[15px] hover:text-[#e2e2e2] ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Europe
        </h2>
        <h2
          onClick={() => handleRegionClick("Oceania")}
          className={`text-[12px] leading-[16px] font-normal cursor-pointer lg:text-[15px] hover:text-[#e2e2e2]  ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Oceania
        </h2>
      </div>
    </div>
  );
}
