import React from 'react';

const EventsPage = () => {
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
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 