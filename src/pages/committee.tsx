import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const CommitteePage = () => {
  const committeeLinks = [
    { label: 'Vision', href: '/committee/vision' },
=======

const CommitteePage = () => {
  const committeeLinks = [
    { label: 'Vision', href: '/vision' },
>>>>>>> 286c2185c3d7d63e8becaf935bf9b3cc733dd316
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
<<<<<<< HEAD
            <Link
              key={link.href}
              to={link.href}
              className="p-4 bg-dark border-2 border-accent rounded-lg hover:shadow-[4px_4px_0_0_#BFDB38] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <h2 className="text-xl text-white">{link.label}</h2>
            </Link>
=======
            <a
              key={link.href}
              href={link.href}
              className="p-4 bg-dark border-2 border-accent rounded-lg hover:shadow-[4px_4px_0_0_#BFDB38] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <h2 className="text-xl text-white">{link.label}</h2>
            </a>
>>>>>>> 286c2185c3d7d63e8becaf935bf9b3cc733dd316
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage; 