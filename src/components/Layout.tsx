import React from 'react';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'
    }`}>
      <Header />
      <main className="pt-24 px-4">
        {children}
      </main>
    </div>
  );
};

export default Layout; 