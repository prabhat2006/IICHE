import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import BoardMembers from './components/BoardMembers';
import Alumni from './components/Alumni';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    gsap.to({}, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="bg-dark text-white">
      <Header />
      <Hero />
      <About />
      <Events />
      <BoardMembers />
      <Alumni />
      <Footer />
    </div>
  );
}

export default App;