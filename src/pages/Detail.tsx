import { useCountryStore } from "../store";

export default function Detail() {
  const darkMode = useCountryStore((state) => state.darkMode);
  return (
    <div className="w-full flex flex-col gap-[30px] px-[20px] items-start justify-start">
      <button className="w-[104px] flex flex-row justify-center items-center py-[5px] shadow-md rounded-[2px] bg-[#ffffff]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z"
            fill={darkMode ? "#ffffff" : "#111517"}
          />
        </svg>
      </button>
    </div>
  );
}
