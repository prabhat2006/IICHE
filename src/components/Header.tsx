import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Committee', href: '/committee' },
  { label: 'Departments', href: '/departments' },
  { label: 'Our Fests', href: '/fests' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Our Events', href: '/events' },
  { label: 'More', href: '/more' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark border-b-2 border-accent shadow-[0_4px_0_0_#BFDB38] py-2' : 'bg-dark/95 backdrop-blur-md border-b-2 border-accent/50 py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/iiche.png" alt="IIChE VIT" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              IIChE VIT
            </span>
          </Link>
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
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-accent/10 transition-all border border-transparent hover:border-accent/50 hover:shadow-[2px_2px_0_0_#BFDB38]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[32rem]' : 'max-h-0'}`}>
          <nav className="py-4 bg-dark mt-4 rounded-md border-2 border-accent shadow-[4px_4px_0_0_#BFDB38]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block w-full text-left text-gray-300 hover:text-white hover:bg-accent/10 px-4 py-2 transition-colors border-l-2 border-transparent hover:border-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
