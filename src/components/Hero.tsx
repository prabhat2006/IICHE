import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BeakerIcon } from 'lucide-react';

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

      gsap.to('.hero-icon', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="hero-gradient min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="hero-content mb-8">
          <BeakerIcon className="hero-icon w-24 h-24 mx-auto mb-8" />
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