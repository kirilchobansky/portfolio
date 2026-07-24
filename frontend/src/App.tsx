import './App.css';
import MainHub from './components/main-hub/MainHub';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <MatrixRain />
      
      <Navbar />

      <main style={{ paddingTop: '60px' }}>
        <MainHub />
      </main>
    </div>
  );
}

export default App;