import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="hero-gradient min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="hero-content mb-8">
          <img
            src="/images/iiche.png" // Use your custom image here
            alt="IIChE Logo"
            className="hero-icon max-w-xs md:max-w-sm mx-auto mb-8"
          />
          <h1 className="text-6xl md:text-8xl font-bold mb-6">IIChE VIT</h1>
          <p className="text-2xl md:text-3xl mb-8">Innovate, Engineer, Excel</p>
        </div>
        <div className="hero-content">
          <button 
            onClick={() => {
              gsap.to(window, {
                duration: 1,
                scrollTo: '#events',
                ease: 'power2.inOut',
              });
            }}
            className="neubrutalism bg-accent text-dark px-8 py-4 text-xl font-bold rounded-lg"
          >
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
