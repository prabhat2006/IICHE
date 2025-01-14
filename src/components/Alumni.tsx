import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GraduationCap, Building2, Award } from 'lucide-react';

// To add more alumni, simply add them to this array
const alumni = [
  {
    name: 'Ahin Bagchi',
    company: 'IICHE-VIT',
    role: 'Ex-Chairperson',
    image: 'images/ahin.png',
  },
  {
    name: 'Disha Talukdar',
    company: 'IICHE-VIT',
    role: 'Ex Vice-Chairperson',
    image: 'images/disha.png',
  },
  {
    name: 'Ratna Mrinalini',
    company: 'IICHE-VIT',
    role: 'Ex Secretary',
    image: 'images/ratna.png',
  },
  // Add more alumni here if needed
];

const Alumni = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible initially
      gsap.set('.alumni-card', { opacity: 1, visibility: 'visible' });

      // Animation for alumni cards
      gsap.from('.alumni-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="alumni" className="py-20 bg-gradient-to-b from-dark to-primary flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-16">
          <GraduationCap className="w-12 h-12 text-accent" />
          <h2 className="text-5xl font-bold text-center">Alumni Network</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum, index) => (
            <div 
              key={index} 
              className="alumni-card group w-72 h-72 flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg p-4 rounded-lg neubrutalism card-hover text-center shadow-lg"
            >
              <div className="relative flex justify-center mb-4">
                <img 
                  src={alum.image} 
                  alt={alum.name}
                  className="w-24 h-24 object-cover rounded-full"
                  loading="lazy" // Lazy load the image
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{alum.name}</h3>
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-2">
                <Building2 className="w-4 h-4" />
                <span>{alum.company}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                <Award className="w-4 h-4" />
                <span>{alum.role}</span>
              </div>
              <button className="bg-accent text-dark py-2 px-4 rounded font-bold neubrutalism">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
