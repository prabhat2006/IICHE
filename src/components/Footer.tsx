import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Linkedin, Instagram, Github } from 'lucide-react';

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
    <footer ref={footerRef} className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-12 text-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Mission Section */}
          <div className="footer-content">
            <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
              <img 
                src="images/iiche.png" 
                alt="IIChE VIT Logo" 
                className="w-16 h-16 object-contain"  // Larger size and high quality
              />
              <span className="text-2xl font-bold text-white">IIChE VIT</span>
            </div>
            <p className="text-gray-400">
              Empowering the future of Chemical Engineering with innovation and excellence.
            </p>
          </div>

          {/* Social Media Links Section */}
          <div className="footer-content">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="text-gray-400 mb-4">
              Stay connected and follow us on our social media platforms.
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://www.linkedin.com/company/iiche-vit/" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/iichevit" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://github.com/IICHE-VIT" aria-label="Github" className="hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-content">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">VIT University</p>
            <p className="text-gray-400 mb-4">Vellore, Tamil Nadu</p>
            <p className="text-sm text-gray-500">© 2025 IIChE VIT. All rights reserved.</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          Designed with ❤️ by IIChE VIT Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
