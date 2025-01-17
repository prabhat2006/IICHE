import React from 'react';

const EventsPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Your event cards here */}
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 