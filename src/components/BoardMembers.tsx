import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Users } from 'lucide-react';

// To add more members, simply add them to this array
const boardMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Faculty Advisor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    description: 'Leading research in sustainable chemical processes',
  },
  {
    name: 'Rahul Sharma',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    description: 'Specializing in process optimization',
  },
  {
    name: 'Priya Patel',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    description: 'Research focus on green chemistry',
  },
  {
    name: 'Alex Thompson',
    role: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    description: 'Expert in chemical plant design',
  },
  // Add more members here following the same structure:
  {
    name: 'Maya Rodriguez',
    role: 'Events Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    description: 'Organizing technical workshops and conferences',
  },
  {
    name: 'David Kim',
    role: 'Research Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    description: 'Specializing in polymer engineering',
  },
  {
    name: 'Aisha Patel',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    description: 'Coordinating chapter activities and documentation',
  },
  {
    name: 'James Wilson',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    description: 'Managing chapter finances and budgets',
  },
  {
    name: 'Lisa Chen',
    role: 'Outreach Coordinator',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    description: 'Building industry and academic partnerships',
  },
  {
    name: 'Raj Malhotra',
    role: 'Technical Coordinator',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400',
    description: 'Managing technical projects and workshops',
  },
  {
    name: 'Sophie Anderson',
    role: 'Media Head',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=400',
    description: 'Managing social media and communications',
  },
  {
    name: 'Omar Hassan',
    role: 'Innovation Lead',
    image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&q=80&w=400',
    description: 'Leading innovative research projects',
  },
  {
    name: 'Emma Thompson',
    role: 'Design Head',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    description: 'Leading process design initiatives',
  },
  {
    name: 'John Lee',
    role: 'Workshop Coordinator',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    description: 'Organizing hands-on technical workshops',
  }
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
    <div ref={sectionRef} id="board" className="py-20 bg-gradient-to-b from-secondary to-dark">
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
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;