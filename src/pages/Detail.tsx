import BackButton from "../components/Detail/BackButton";
import CountryInfo from "../components/Detail/CountryInfo";

export default function Detail() {
  return (
    <div className="w-full flex flex-col gap-[30px] px-[20px] items-start justify-start">
      <BackButton />
      <CountryInfo />
    </div>
  );
}
