import "./App.css";
import MatrixRain from "./layout/matrix-rain/MatrixRain";
import Navbar from "./layout/navbar/Navbar";
import Home from "./pages/home/Home";
import { useTheme } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { theme } = useTheme();
  return (
    <div className="main-root">
      {theme === "cyber" && <MatrixRain />}

      <Navbar />
      <Home />
      <Analytics />
    </div>
  );
}

export default App;
