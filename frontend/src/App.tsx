import './App.css';
import MatrixRain from './layout/matrix-rain/MatrixRain';
import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';


function App() {
  return (
    <div className='main-root'>
      <MatrixRain />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;