import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, ExternalLink } from 'lucide-react';

const events = [
  {
    title: "SchemCon'25",
    description: "The flagship technical symposium featuring workshops, competitions, and industry talks. Join us for a transformative experience in chemical engineering excellence.",
    status: "Coming Soon",
    date: "September 2025",
    link: "https://schemcon2025.com",
    image: "images/schemcon.png", // Add image for event
  },
  {
    title: "Yantra'25",
    description: "Yantra Central Hack is an event where participants from diverse fields collaborate to solve real-world challenges. It fosters teamwork, creative problem-solving, and technical skill development.",
    status: "Upcoming",
    date: "4 February 2025",
    image: "images/yantra.png", // Add image for event
  },
  {
    title: "SchemCon Archive",
    description: "Explore the legacy of our previous SchemCon events. View past achievements, highlights, and memorable moments from our flagship symposium.",
    icon: Calendar,
    status: "Archive",
    date: "2020-2024",
    link: "https://archive.iichevit.org/schemcon",
    image: "images/schemconarchive.jpg", // Add image for event
  },
];

const Events = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.event-card', { opacity: 1, visibility: 'visible' });

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
    <div ref={sectionRef} id="events" className="h-screen py-12 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center h-full">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card bg-white/10 backdrop-blur-lg p-6 rounded-lg neubrutalism card-hover cursor-pointer"
              onClick={() => handleRedirect(event.link)}
            >
              <div className="flex items-center justify-between mb-4">
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
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
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
