import React from 'react';
import { Link } from 'react-router-dom';

const CommitteePage = () => {
  const committeeLinks = [
    { label: 'Vision', href: '/committee/vision' },
    { label: 'IIChE-VIT Board 2024-25', href: '/board-2024-25' },
    { label: 'IIChE-VIT Board 2023-24', href: '/board-2023-24' },
    { label: 'IIChE-VIT Board 2022-23', href: '/board-2022-23' },
    { label: 'IIChE-VIT Board 2021-22', href: '/board-2021-22' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Committee</h1>
        <div className="grid gap-4">
          {committeeLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="p-4 bg-dark border-2 border-accent rounded-lg hover:shadow-[4px_4px_0_0_#BFDB38] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <h2 className="text-xl text-white">{link.label}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage; 