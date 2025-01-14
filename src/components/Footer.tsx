import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BeakerIcon, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          end: 'top 70%',
          scrub: 1,
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="footer-content">
            <div className="flex items-center gap-2 mb-4">
              <BeakerIcon className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">IIChE VIT</span>
            </div>
            <p className="text-gray-300">Building the Future of Chemical Engineering</p>
          </div>
          
          <div className="footer-content flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="footer-content">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">VIT University</p>
            <p className="text-gray-300 mb-4">Vellore, Tamil Nadu</p>
            <p className="text-sm text-gray-400">© 2025 IIChE VIT. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;