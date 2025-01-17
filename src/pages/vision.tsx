import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Vision = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollToBoardMembers: true } });
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Our Vision</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our vision is to equip and empower the future of chemical engineering and the engineers in technical and other precincts. 
            We aspire to constantly keep ourselves updated and work towards becoming an exemplary chapter.
          </p>
        </motion.section>

        {/* Faculty Coordinator Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Faculty Coordinator</h2>
            <h3 className="text-2xl font-semibold text-accent">Dr. Sivagami K</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Dr. Sivagami K is a proficient professor in the field of Chemical Engineering. She has completed her Bachelor's degree in Chemical Engineering from the University of Madras and followed it with a Master's degree in Environmental Management from Anna University.
              </p>
              <p>
                She holds a Doctorate from IIT Madras, with her research area revolving around specialized applications of pyrolysis. She has published works detailing the microwave pyrolysis of sludge, catalytic pyrolysis of waste plastics, weathering and remediation of oil spills, solar degradation of pesticides, and many other innovative avenues of environmental protection and waste management.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-accent/10 p-6 rounded-lg border-2 border-accent"
          >
            <p className="text-gray-300 mb-4">
              She has published several research papers and book chapters and filed patents in her areas of expertise. Over and above, She has been part of five sponsored projects in just the last five years, dealing with cutting-edge research into some of the aforementioned fields.
            </p>
            <p className="text-gray-300">
              She has also been honored by numerous awards, grants, and prizes due to her active participation in the field of Chemical Engineering. These include sponsored visits to Germany and Japan, the "Best Ph.D. Thesis Award" for her Doctorate, and several competition victories and illustrious research grants.
            </p>
          </motion.div>
        </motion.section>

        {/* Board Members Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">The Board Members</h2>
          <p className="text-gray-300">
            The board and managerial team are a tightly packed column of heads who lead the core team and the chapter towards the path of success. They ensure that every domain works to its fullest. Besides techno management skills, they make certain that every member boosts their auxiliary skills such as design, oratory and writing proficiency through various activities.
          </p>
          <p className="text-gray-300">
            Each board and managerial tenure lasts for a year, and through extreme scrutiny, observation, and analysis, the positions are handed over to the next batch.
          </p>
          <motion.button
            onClick={handleKnowMoreClick}
            className="inline-block px-6 py-3 bg-accent text-dark font-semibold rounded-md hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More about our team
          </motion.button>
        </motion.section>

        {/* Core Committee Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">The Core Committee</h2>
          <p className="text-gray-300">
            The core team constitutes of the chapter's budding gems. They comprise the various domains and work to strengthen the chapter. Throughout their journey, they find themselves at crossroads and challenging situations, empowering them to become strong and committed chemical engineers.
          </p>
          <p className="text-gray-300">
            Members refine their skills and learn to appreciate team spirit, healthy competition and adaptation. They are provided with beaming opportunities to make use of and explore their talents. With a positive attitude and open mind, they learn to be the best.
          </p>
        </motion.section>

        {/* Footer Section */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-accent/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">IIChE-VIT</h3>
          <a href="mailto:vitiiche@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
            vitiiche@gmail.com
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Designed with ❤️ by IIChE VIT Team.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Vision; 