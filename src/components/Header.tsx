import lightMoon from "../../public/lightMoon.png";

export default function Header() {
  return (
    <div className="w-full flex flex-row items-center justify-between bg-[#ffffff] px-[16px] py-[30px] shadow-sm">
      <h1 className="font-extrabold text-[14px] leading-[20px]">
        Where in the world?
      </h1>
      <div className="flex flex-row items-center gap-[10px]">
        <img src={lightMoon} alt="light moon" className="w-[16px] h-[16px]" />
        <h2 className="font-semibold text-[12px] leading-[16.37px]">
          Dark Mode
        </h2>
      </div>
    </div>
  );
}
