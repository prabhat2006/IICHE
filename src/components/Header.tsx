import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  dropdownItems?: {
    label: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Committee',
    dropdownItems: [
      { label: 'Vision', href: '/vision' },
      { label: 'IIChE-VIT Board 2024-25', href: '/board-2024-25' },
      { label: 'IIChE-VIT Board 2023-24', href: '/board-2023-24' },
      { label: 'IIChE-VIT Board 2022-23', href: '/board-2022-23' },
      { label: 'IIChE-VIT Board 2021-22', href: '/board-2021-22' },
    ],
  },
  {
    label: 'Departments',
    dropdownItems: [
      { label: 'Events', href: '/departments/events' },
      { label: 'Design', href: '/departments/design' },
      { label: 'Editorial', href: '/departments/editorial' },
      { label: 'Technical', href: '/departments/technical' },
      { label: 'Human Resources', href: '/departments/hr' },
    ],
  },
  {
    label: 'Our Fests',
    dropdownItems: [
      { label: "CHEM-SUMMIT'23", href: '/fests/chem-summit-23' },
      { label: "Gravitas '23", href: '/fests/gravitas-23' },
      { label: "Gravitas '22", href: '/fests/gravitas-22' },
      { label: 'About SaFest', href: '/fests/safest' },
      { label: 'SaFest 1.0', href: '/fests/safest-1' },
      { label: 'SaFest 2.0', href: '/fests/safest-2' },
    ],
  },
  { label: 'Achievements', href: '/achievements' },
  {
    label: 'Blogs',
    dropdownItems: [
      { label: '2023-2024', href: '/blogs/2023-2024' },
      { label: '2022-2023 Archive', href: '/blogs/2022-2023' },
      { label: '2021-2022 Archive', href: '/blogs/2021-2022' },
      { label: '2020-2021 Archive', href: '/blogs/2020-2021' },
      { label: '2019-2020 Archive', href: '/blogs/2019-2020' },
    ],
  },
  {
    label: 'Our Events',
    dropdownItems: [
      { label: 'Recent Events', href: '/events/recent' },
      { label: '2023-24 Archive', href: '/events/2023-24' },
      { label: '2022-23 Archive', href: '/events/2022-23' },
      { label: '2021-2022 Archive', href: '/events/2021-22' },
      { label: '2020-2021 Archive', href: '/events/2020-21' },
    ],
  },
  {
    label: 'More',
    dropdownItems: [
      { label: 'ALUMNI TALKS', href: '/alumni-talks' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => {
      const updated = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as { [key: string]: boolean });

      return {
        ...updated,
        [label]: !prev[label],
      };
    });
  };

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setOpenDropdowns({});
    console.log(`Navigating to: ${href}`);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark border-b-2 border-accent shadow-[0_4px_0_0_#BFDB38] py-2' : 'bg-dark/95 backdrop-blur-md border-b-2 border-accent/50 py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/iiche.png" alt="IIChE VIT" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              IIChE VIT
            </span>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent transition-colors p-2 border-2 border-accent rounded-md hover:shadow-[2px_2px_0_0_#BFDB38]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdownItems ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-accent/10 flex items-center gap-1 transition-all border border-transparent hover:border-accent/50 hover:shadow-[2px_2px_0_0_#BFDB38]"
                  >
                    {item.label}
                    <ChevronDown size={16} className="group-hover:transform group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href!)}
                    className="px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-accent/10 transition-all border border-transparent hover:border-accent/50 hover:shadow-[2px_2px_0_0_#BFDB38]"
                  >
                    {item.label}
                  </button>
                )}
                {item.dropdownItems && (
                  <div className={`absolute left-0 mt-2 w-56 bg-dark border-2 border-accent shadow-[4px_4px_0_0_#BFDB38] rounded-md ${openDropdowns[item.label] ? 'block' : 'hidden'}`}>
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          onClick={() => handleNavigation(dropdownItem.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-accent/10 transition-colors border-l-2 border-transparent hover:border-accent"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[32rem]' : 'max-h-0'}`}>
          <nav className="py-4 bg-dark mt-4 rounded-md border-2 border-accent shadow-[4px_4px_0_0_#BFDB38]">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdownItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full text-left text-gray-300 hover:text-white hover:bg-accent/10 flex items-center justify-between px-4 py-2 transition-colors border-l-2 border-transparent hover:border-accent"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transform transition-transform ${openDropdowns[item.label] ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-200 bg-accent/5 ${openDropdowns[item.label] ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                      {item.dropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          onClick={() => handleNavigation(dropdownItem.href)}
                          className="block w-full text-left px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-accent/10 transition-colors border-l-2 border-transparent hover:border-accent"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href!)}
                    className="w-full text-left text-gray-300 hover:text-white hover:bg-accent/10 px-4 py-2 transition-colors border-l-2 border-transparent hover:border-accent"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
