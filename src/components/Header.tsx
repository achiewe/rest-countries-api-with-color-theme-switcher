import lightMoon from "../../public/assets/lightMoon.png";
import darkMoon from "../../public/assets/darkMoon.png";
import { useCountryStore } from "../store";

export default function Header() {
  const setDarkMode = useCountryStore((state) => state.setDarkMode);
  const darkMode = useCountryStore((state) => state.darkMode);
  return (
    <div
      className={`w-full flex flex-row items-center justify-between ${
        darkMode ? "bg-[#2B3844]" : "bg-[#ffffff]"
      } px-[16px] py-[30px] shadow-sm mb-[30px] md:px-[80px] md:py-[24px] md:mb-[40px]`}
    >
      <h1
        className={`font-extrabold text-[14px] leading-[20px] md:text-[20px] lg:text-[24px] ${
          darkMode ? "text-[#ffffff]" : "text-[##111517]"
        }`}
      >
        Where in the world?
      </h1>
      <div
        className="flex flex-row items-center gap-[10px] cursor-pointer"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <img
          src={darkMode ? darkMoon : lightMoon}
          alt="light moon"
          className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
        />
        <h2
          className={`font-semibold text-[12px] leading-[16.37px] md:text-[16px]  ${
            darkMode ? "text-[#ffffff]" : "text-[##111517]"
          }`}
        >
          Dark Mode
        </h2>
      </div>
    </div>
  );
}
