import Data from "../../../data.json";
import { useCountryStore } from "../../store";

export default function CountryList() {
  const darkMode = useCountryStore((state) => state.darkMode);
  const setFetchData = useCountryStore((state) => state.setFetchData);
  const fetchData = useCountryStore((state) => state.fetchData);
  setFetchData(Data);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px]">
      {fetchData.map((country) => (
        <div
          key={country.alpha3Code}
          className={`w-[264px] rounded-[5px] flex flex-col shadow-lg pb-[46px] ${
            darkMode ? "bg-[##2B3844]" : "bg-[#ffffff]"
          }  gap-[20px]`}
        >
          <img
            className="w-full rounded-t-[5px]"
            src={country.flag}
            alt="country flag"
          />
          <div className="w-full flex flex-col items-start justify-start pl-[24px] gap-[20px]">
            <h1
              className={`font-extrabold text-[18px] leading-[26px] ${
                darkMode ? "text-[#ffffff]" : "text-[#111517]"
              }`}
            >
              {country.name}
            </h1>
            <div className="w-full flex flex-col items-start justify-start gap-[10px]">
              <h3
                className={`${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                } text-[14px] font-semibold leading-[16px]`}
              >
                Population:
                <span
                  className={`${
                    darkMode ? "text-[#ffffff]" : "text-[#111517]"
                  } text-[14px] font-light leading-[16px]`}
                >
                  {country.population}
                </span>
              </h3>
              <h3
                className={`${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                } text-[14px] font-semibold leading-[16px]`}
              >
                Region:
                <span
                  className={`${
                    darkMode ? "text-[#ffffff]" : "text-[#111517]"
                  } text-[14px] font-light leading-[16px]`}
                >
                  {country.region}
                </span>
              </h3>
              <h3
                className={`${
                  darkMode ? "text-[#ffffff]" : "text-[#111517]"
                } text-[14px] font-semibold leading-[16px]`}
              >
                Capital:
                <span
                  className={`${
                    darkMode ? "text-[#ffffff]" : "text-[#111517]"
                  } text-[14px] font-light leading-[16px]`}
                >
                  {country.capital}
                </span>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
