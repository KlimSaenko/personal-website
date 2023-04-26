import './App.css';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Parallax from './components/Parallax.tsx';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio.tsx';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Parallax children={<Home />} />
      <About />
      <Portfolio />
    </main>
  );
};

export default App;
