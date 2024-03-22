import CountryList from "../components/Home/CountryList";
import SearchInput from "../components/Home/SearchInput";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-[40px] px-[10px] lg:px-[20px] xl:px-0">
      <SearchInput />
      <CountryList />
    </div>
  );
}
