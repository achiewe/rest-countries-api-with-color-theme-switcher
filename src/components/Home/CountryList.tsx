import { useEffect } from "react";
import Data from "../../../data.json";
import { useCountryStore } from "../../store";
import { CountryType } from "../../type";
import { useNavigate } from "react-router-dom";

export default function CountryList() {
  const darkMode = useCountryStore((state) => state.darkMode);
  const setFetchData = useCountryStore((state) => state.setFetchData);
  const fetchData = useCountryStore((state) => state.fetchData);
  const inputValue = useCountryStore((state) => state.inputValue);
  const selectedRegion = useCountryStore((state) => state.selectedRegion);
  const navigate = useNavigate();
  const setSelectedCountry = useCountryStore(
    (state) => state.setSelectedCountry
  );

  useEffect(() => {
    setFetchData(Data);
  }, []);

  const filteredCountries = fetchData.filter((country: CountryType) => {
    const regionFilter = !selectedRegion || country.region === selectedRegion;
    const nameFilter = country?.name
      ?.toLowerCase()
      .includes(inputValue.toLowerCase());
    return regionFilter && nameFilter;
  });

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px]">
      {filteredCountries.map((country: CountryType) => (
        <div
          key={country.alpha3Code}
          onClick={() => {
            setSelectedCountry(country);
            navigate("/Detail");
          }}
          className={`w-[264px] rounded-[5px] flex flex-col shadow-lg pb-[46px] cursor-pointer ${
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
