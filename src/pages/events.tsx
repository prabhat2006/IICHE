import React from 'react';

const EventsPage = () => {
<<<<<<< HEAD
  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Your event cards here */}
=======
  const eventLinks = [
    { label: 'Recent Events', href: '/events/recent' },
    { label: '2023-24 Archive', href: '/events/2023-24' },
    { label: '2022-23 Archive', href: '/events/2022-23' },
    { label: '2021-2022 Archive', href: '/events/2021-22' },
    { label: '2020-2021 Archive', href: '/events/2020-21' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Our Events</h1>
        <div className="grid gap-4">
          {eventLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p-4 bg-dark border-2 border-accent rounded-lg hover:shadow-[4px_4px_0_0_#BFDB38] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <h2 className="text-xl text-white">{link.label}</h2>
            </a>
          ))}
>>>>>>> 286c2185c3d7d63e8becaf935bf9b3cc733dd316
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 