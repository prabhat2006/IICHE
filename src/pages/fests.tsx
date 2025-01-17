import React from 'react';

const FestsPage = () => {
  const festLinks = [
<<<<<<< HEAD
    { label: "CHEM-SUMMIT'23", href: '/fests/chemsummit23' },
=======
    { label: "CHEM-SUMMIT'23", href: '/fests/chem-summit-23' },
>>>>>>> 286c2185c3d7d63e8becaf935bf9b3cc733dd316
    { label: "Gravitas '23", href: '/fests/gravitas-23' },
    { label: "Gravitas '22", href: '/fests/gravitas-22' },
    { label: 'About SaFest', href: '/fests/safest' },
    { label: 'SaFest 1.0', href: '/fests/safest-1' },
    { label: 'SaFest 2.0', href: '/fests/safest-2' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Our Fests</h1>
        <div className="grid gap-4">
          {festLinks.map((link) => (
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

export default FestsPage; 