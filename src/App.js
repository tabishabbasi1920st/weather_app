import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "dark-bg" : "light-bg"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
