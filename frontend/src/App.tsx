import './App.css';
import MatrixRain from './layout/matrix-rain/MatrixRain';
import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import { useTheme } from './context/ThemeContext'; 

function App() {
  const { theme } = useTheme();
  return (
    <div className='main-root'>
      
      {/* Only render Matrix Rain if theme is 'cyber' */}
      {theme === 'cyber' && <MatrixRain />}
      
      <Navbar />
      <Home />
    </div>
  );
}

export default App;