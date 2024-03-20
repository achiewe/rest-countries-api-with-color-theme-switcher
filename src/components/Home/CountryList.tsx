import Data from "../../../data.json";

export default function CountryList() {
  console.log(Data);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px]">
      <div className="w-[264px] rounded-[5px] flex flex-col shadow-lg pb-[46px] bg-[#ffffff] gap-[20px]">
        <img className="w-full rounded-t-5" src="ragaa" alt="country flag" />
        <div className="w-full flex flex-col items-start justify-start pl-[24px] gap-[20px]">
          <h1 className="font-extrabold text-[18px] leading-[26px]">
            country name
          </h1>
          <div className="w-full flex flex-col items-start justify-start gap-[10px]">
            <h3 className="text-[#111517] text-[14px] font-semibold leading-[16px]">
              Population:
              <span className="text-[#111517] text-[14px] font-light leading-[16px]">
                81,770,900
              </span>
            </h3>
            <h3 className="text-[#111517] text-[14px] font-semibold leading-[16px]">
              Region:
              <span className="text-[#111517] text-[14px] font-light leading-[16px]">
                81,770,900
              </span>
            </h3>
            <h3 className="text-[#111517] text-[14px] font-semibold leading-[16px]">
              Capital:
              <span className="text-[#111517] text-[14px] font-light leading-[16px]">
                81,770,900
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
