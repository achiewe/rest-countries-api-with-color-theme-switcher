import FlagButton from "../components/Detail/FlagButton";
import { useCountryStore } from "../store";

export default function Detail() {
  return (
    <div className="w-full flex flex-col gap-[30px] px-[20px] items-start justify-start">
      <FlagButton />
    </div>
  );
}
