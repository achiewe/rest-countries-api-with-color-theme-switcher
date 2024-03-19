import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { useCountryStore } from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const darkMode = useCountryStore((state) => state.darkMode);
  return (
    <Router>
      <div
        className={`w-full min-h-screen flex flex-col ${
          darkMode ? "bg-[#202C36]" : "bg-[#fafafa]"
        }`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
