import BackButton from "../components/Detail/BackButton";
import CountryInfo from "../components/Detail/CountryInfo";

export default function Detail() {
  return (
    <div className="w-full flex flex-col justify-center px-[20px] items-center xl:px-0">
      <div className="w-full flex flex-col gap-[30px] items-start justify-start max-w-[1110px]">
        <BackButton />
        <CountryInfo />
      </div>
    </div>
  );
}
