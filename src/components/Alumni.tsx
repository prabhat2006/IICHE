import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GraduationCap, Building2, Award } from 'lucide-react';

const alumni = [
  {
    name: 'Dr. Arun Kumar',
    graduation: '2018',
    company: 'Shell Research',
    role: 'Senior Process Engineer',
    achievement: 'Patent holder in catalytic conversion',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Emily Zhang',
    graduation: '2019',
    company: 'Green Chemistry Labs',
    role: 'Research Lead',
    achievement: 'Published in Nature Chemistry',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Michael Carter',
    graduation: '2020',
    company: 'Dow Chemical',
    role: 'Process Development Engineer',
    achievement: 'Innovator of the Year 2023',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  }
];

const Alumni = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <div ref={sectionRef} id="alumni" className="py-20 bg-gradient-to-b from-dark to-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-16">
          <GraduationCap className="w-12 h-12 text-accent" />
          <h2 className="text-5xl font-bold text-center">Alumni Network</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum, index) => (
            <div key={index} className="alumni-card group">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg neubrutalism card-hover">
                <div className="relative mb-6">
                  <img 
                    src={alum.image} 
                    alt={alum.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <span className="absolute top-4 right-4 bg-accent text-dark px-3 py-1 rounded-full text-sm font-bold">
                    Class of {alum.graduation}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{alum.name}</h3>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>{alum.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <Award className="w-4 h-4" />
                  <span>{alum.achievement}</span>
                </div>
                <button className="w-full bg-accent text-dark py-2 rounded font-bold neubrutalism">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;