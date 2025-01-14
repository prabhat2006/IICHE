import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FlaskConical, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure all about-content elements are visible initially
      gsap.set('.about-content', { opacity: 1, visibility: 'visible' });

      // Animation for about-content elements
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="about" className="py-12 bg-gradient-to-b from-dark to-primary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="about-content text-4xl font-bold text-center mb-10">About IIChE VIT</h2>
        
        <div className="about-content prose prose-invert mx-auto mb-10 max-w-3xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            IIChE-VIT aims at providing a platform for all chemical engineering and related undergraduate degree students to understand and grasp unchartered knowledge in the vast ocean of engineering. The chapter constantly strives to inspire the undergrad students to take up initiatives in various fields of academia and research. The chapter maintains and widens contacts with many chemical engineering professionals in India and around the world. Regular exchange of ideas with other national and international professional institutes keeps the chapter updated about recent developments in engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="about-content p-6 bg-white/5 backdrop-blur-lg rounded-lg neubrutalism">
            <FlaskConical className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-300">Fostering innovation and excellence in chemical engineering through practical learning and industry collaboration.</p>
          </div>
          <div className="about-content p-6 bg-white/5 backdrop-blur-lg rounded-lg neubrutalism">
            <Target className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-300">To be the leading student chapter in chemical engineering, driving sustainable solutions for tomorrow.</p>
          </div>
          <div className="about-content p-6 bg-white/5 backdrop-blur-lg rounded-lg neubrutalism">
            <Lightbulb className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <p className="text-gray-300">Innovation, sustainability, collaboration, and continuous learning drive everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
