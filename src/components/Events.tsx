import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, Users, Trophy, Microscope, ExternalLink } from 'lucide-react';

const events = [
  {
    title: "SchemCon'25",
    description: "The flagship technical symposium featuring workshops, competitions, and industry talks. Join us for a transformative experience in chemical engineering excellence.",
    icon: Trophy,
    status: "Coming Soon",
    date: "March 2025",
    link: "https://schemcon25.iichevit.org"
  },
  {
    title: "Industry Connect",
    description: "Monthly sessions with industry experts sharing insights and experiences from the field of chemical engineering.",
    icon: Users,
    status: "Monthly",
    date: "Ongoing"
  },
  {
    title: "Research Symposium",
    description: "A platform for students to present their research work and get feedback from industry experts.",
    icon: Microscope,
    status: "Upcoming",
    date: "December 2024"
  },
  {
    title: "SchemCon Archive",
    description: "Explore the legacy of our previous SchemCon events. View past achievements, highlights, and memorable moments from our flagship symposium.",
    icon: Calendar,
    status: "Archive",
    date: "2020-2024",
    link: "https://archive.iichevit.org/schemcon"
  }
];

const Events = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.event-card', {
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

  const handleRedirect = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div ref={sectionRef} id="events" className="py-12 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="event-card bg-white/10 backdrop-blur-lg p-6 rounded-lg neubrutalism card-hover cursor-pointer"
              onClick={() => handleRedirect(event.link)}
            >
              <div className="flex items-center justify-between mb-4">
                <event.icon className="w-8 h-8 text-accent" />
                <div className="flex gap-2">
                  <span className="bg-accent text-dark px-3 py-1 rounded-full text-sm font-bold">
                    {event.status}
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {event.date}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                {event.title}
                {event.link && <ExternalLink className="w-4 h-4" />}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">{event.description}</p>
              <button className="w-full bg-accent text-dark py-2 rounded font-bold neubrutalism">
                {event.link ? 'Visit Website' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;