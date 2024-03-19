import Header from "./components/Header";
import { useCountryStore } from "./store";

function App() {
  const darkMode = useCountryStore((state) => state.darkMode);
  return (
    <div
      className={`w-full min-h-screen flex flex-col ${
        darkMode ? "bg-[#202C36]" : "bg-[#fafafa]"
      }`}
    >
      <Header />
    </div>
  );
}

export default App;
