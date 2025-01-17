import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Users } from 'lucide-react';

// To add more members, simply add them to this array
const boardMembers = [
  {
    name: 'Shambhavi Satish Kumar',
    role: 'Chairperson',
    image: 'images/sambhavi.jpg',
    
  },
  {
    name: 'Ummul Kiraam Pitolwala',
    role: 'Vice-Chairperson',
    image: 'images/ummul.jpg',
    
  },
  {
    name: 'Aditya Chakravarti',
    role: 'Secretary',
    image: 'images/aditya.jpg',
    
  },
  {
    name: 'Aastha Kale',
    role: 'Co-Secretry',
    image: 'images/asstha.jpg',
    
  },
  // Add more members here following the same structure:
  {
    name: 'Prabhat Singh',
    role: 'Technical Head',
    image: 'images/realprabhat.jpg',
    
  },
  {
    name: 'Laasya Kasturi Lahiri',
    role: 'Design Head',
    image: 'images/laasya.jpg',
  },
  {
    name: 'Rebiya Ramchandaran',
    role: 'Creative Head',
    image: 'images/rebiya.jpeg',
    
  },
  {
    name: 'Annmaria Benny',
    role: 'Event/Management Head',
    image: 'images/anmaria.jpg',
    
  },
  {
    name: 'Indrakshi Bhattacharjee',
    role: 'HR/PR Head',
    image: 'images/indrakshi.png',
    
  },
  {
    name: 'Yashu Singh',
    role: 'Editorial Head',
    image: 'images/yashu.jpg',
    
  },
];

const BoardMembers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.board-card', {
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
    <section ref={sectionRef} id="board" className="py-20 bg-gradient-to-b from-secondary to-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-16">
          <Users className="w-12 h-12 text-accent" />
          <h2 className="text-5xl font-bold text-center">Board Members</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="board-card group">
              <div className="relative overflow-hidden rounded-lg neubrutalism bg-white/10 backdrop-blur-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-2">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;