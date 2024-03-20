import CountryList from "../components/Home/CountryList";
import SearchInput from "../components/Home/SearchInput";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-[30px] px-[10px]">
      <SearchInput />
      <CountryList />
    </div>
  );
}
