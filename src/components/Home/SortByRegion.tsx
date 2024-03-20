import { useState } from "react";
import { useCountryStore } from "../../store";

export default function SortByRegion() {
  const darkMode = useCountryStore((state) => state.darkMode);

  const [openFrame, setOpenFrame] = useState<boolean>(false);
  const [arrowRotation, setArrowRotation] = useState<number>(0);

  const toggleFrameVisibility = () => {
    setOpenFrame(!openFrame);
    setArrowRotation(openFrame ? 0 : 180);
  };

  return (
    <div
      onClick={toggleFrameVisibility} // Toggle visibility and arrow rotation
      className={`w-[200px] ${
        darkMode ? "bg-[#2B3844]" : "bg-[#ffffff]"
      }  flex flex-grow justify-between items-center px-[14px] py-[19px] rounded-[5px] shadow-md relative`}
    >
      <h3
        className={`font-normal text-[12px] leading-[20px] ${
          darkMode ? "text-[#ffffff]" : "text-[#000000]"
        }`}
      >
        Filter by Region
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
        className={`w-[200px] ${
          openFrame ? "flex" : "hidden"
        } flex-col items-start justify-start px-[14px] gap-[8px] py-[16px] h-[144px] ${
          darkMode ? "bg-[#2B3844]" : "bg-[#ffffff]"
        } absolute bottom-0 left-0 right-0 top-[62px] rounded-[5px]`}
      >
        <h2
          className={`text-[12px] leading-[16px] font-normal cursor-pointer ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Africa
        </h2>
        <h2
          className={`text-[12px] leading-[16px] font-normal cursor-pointer ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          America
        </h2>
        <h2
          className={`text-[12px] leading-[16px] font-normal cursor-pointer ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Asia
        </h2>
        <h2
          className={`text-[12px] leading-[16px] font-normal cursor-pointer ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Europe
        </h2>
        <h2
          className={`text-[12px] leading-[16px] font-normal cursor-pointer ${
            darkMode ? "text-[#FFFFFF]" : "text-[#111517]"
          }`}
        >
          Oceania
        </h2>
      </div>
    </div>
  );
}
