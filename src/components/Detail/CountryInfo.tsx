import { useCountryStore } from "../../store";

export default function CountryInfo() {
  const darkMode = useCountryStore((state) => state.darkMode);
  return (
    <div className="w-full flex flex-col gap-[20px] items-start justify-start">
      <img src="aaasd" alt="country flag" />
      <div className="w-full flex flex-col gap-[30px] items-start justify-start">
        <div className="flex flex-col gap-[30px] items-start justify-start">
          <div className="flex flex-col gap-[20px] items-start justify-start">
            <h1
              className={`font-extrabold text-[22px] leading-[30.01px] ${
                darkMode ? "text-[#ffffff]" : "text-[#111517]"
              } `}
            >
              belgium
            </h1>
            <div className="flex flex-col gap-[5px] items-start justify-start">
              <h3
                className={`text-[14px] font-semibold leading-[32px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                }`}
              >
                Native Name:
                <span
                  className={`text-[14px] font-normal leading-[32px] ${
                    darkMode ? "text-[#ffffff]" : "text-[#111517]"
                  }`}
                >
                  België
                </span>
              </h3>
              <h3
                className={`text-[14px] font-semibold leading-[32px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                } `}
              >
                Population:
                <span
                  className={`text-[14px] font-normal leading-[32px] ${
                    darkMode ? "text-[#ffffff]" : "text-[#111517]"
                  }`}
                >
                  1212122
                </span>
              </h3>
              <h3
                className={`text-[14px] font-semibold leading-[32px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                }`}
              >
                Region:
                <span
                  className={`text-[14px] font-normal leading-[32px] ${
                    darkMode ? "text-[#ffffff]" : "text-[#111517]"
                  }`}
                >
                  Europe
                </span>
              </h3>
              <h3
                className={`text-[14px] font-semibold leading-[32px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                }`}
              >
                Sub Region:
                <span
                  className={`text-[14px] font-normal leading-[32px] ${
                    darkMode ? "text-[#ffffff]" : "text-[#111517]"
                  }`}
                >
                  België
                </span>
              </h3>
              <h3
                className={`text-[14px] font-semibold leading-[32px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                }`}
              >
                Capital:
                <span
                  className={`text-[14px] font-normal leading-[32px] ${
                    darkMode ? "text-[#ffffff]" : "text-[#111517]"
                  }`}
                >
                  België
                </span>
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] items-start justify-start">
            <h3
              className={`text-[14px] font-semibold leading-[32px] ${
                darkMode ? "text-[#ffffff]" : "text-[#111517]"
              }`}
            >
              Top Level Domain:
              <span
                className={`text-[14px] font-normal leading-[32px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                }`}
              >
                België
              </span>
            </h3>
            <h3
              className={`text-[14px] font-semibold leading-[32px] ${
                darkMode ? "text-[#ffffff]" : "text-[#111517]"
              }`}
            >
              Currencies:
              <span
                className={`text-[14px] font-normal leading-[32px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                }`}
              >
                1212122
              </span>
            </h3>
            <h3
              className={`text-[14px] font-semibold leading-[32px] ${
                darkMode ? "text-[#ffffff]" : "text-[#111517]"
              }`}
            >
              Languages:
              <span
                className={`text-[14px] font-normal leading-[32px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                }`}
              >
                Europe
              </span>
            </h3>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[15px] items-start justify-start">
          <h3
            className={`text-[16px] font-semibold leading-[24px] ${
              darkMode ? "text-[#ffffff]" : "text-[#111517]"
            }`}
          >
            Border Countries:
          </h3>
          <div className="w-full flex flex-row items-center justify-start gap-[5px]">
            <div className="w-[96px] h-[28px] flex items-center justify-center shadow border border-gray-400 border-opacity-20">
              <span
                className={`text-[12px] font-light leading-[16.37px] ${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                }`}
              >
                country
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
