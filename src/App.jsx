import './App.scss';
import Navbar from './components/Navbar.tsx';
import ParallaxHome from './components/ParallaxHome.tsx';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio.tsx';
import SmoothScroll from 'smoothscroll-for-websites';
import { ParallaxProvider } from "react-scroll-parallax";

SmoothScroll({ stepSize: 30 });

function App() {
  return (
    <main className="App">
      <ParallaxProvider>

        <Navbar />
        <ParallaxHome />
        
        <div className="sections-content">
          <div className="padding-center">
            <About />
            <Portfolio />
          </div>
        </div>

      </ParallaxProvider>
    </main>
  );
};

export default App;
