import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/main-hub/MainHub';

function App() {
  return (
    <div>
      {/* Background Cyberpunk FX */}
      <div className="cyber-grid-bg" />
      <div className="scanlines" />

      {/* Top Cyberpunk Navbar */}
      <Navbar />

      {/* Content wrapper with top padding to clear fixed navbar */}
      <main style={{ paddingTop: '60px' }}>
        <Hero />
      </main>
    </div>
  );
}

export default App;