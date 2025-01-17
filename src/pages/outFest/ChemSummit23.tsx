import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "",
    position: "",
    image: "",
  },
];

const ChemSummit23= () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Chem Summit'23</h1>
          <h2 className="text-2xl text-accent mb-8">Bringing Laurels To University</h2>
        </motion.section>

        {/* Team Members Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-accent/10 border-2 border-accent">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-accent">{member.position}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-white/80 hover:text-accent transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">About Our Department</h2>
            <p className="text-gray-300 leading-relaxed">
            𝐼𝑛𝑠𝑝𝑖𝑟𝑖𝑛𝑔 𝐼𝑛𝑛𝑜𝑣𝑎𝑡𝑖𝑜𝑛𝑠. 𝑃𝑎𝑠𝑠𝑖𝑜𝑛𝑎𝑡𝑒 𝑃𝑟𝑒𝑠𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛𝑠. 𝐴𝑛 𝐸𝑙𝑒𝑐𝑡𝑟𝑖𝑐 𝐸𝑛𝑣𝑖𝑟𝑜𝑛𝑚𝑒𝑛𝑡. 𝐴𝑙𝑙 𝑎𝑡 𝐶ℎ𝑒𝑚𝑆𝑢𝑚𝑚𝑖𝑡’23.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-accent/10 p-6 rounded-lg border-2 border-accent"
          >
            <p className="text-gray-300">
            𝐈𝐈𝐂𝐡𝐄-𝐕𝐈𝐓 is excited to present  "𝐂𝐡𝐞𝐦𝐒𝐮𝐦𝐦𝐢𝐭'𝟐𝟑", a two-day national conference where students from reputed institutions form all over India will get the opportunity to present their ideas and put their technical and creative skills on the line. Join us on 27th and 28th October 2023!
            </p>
          </motion.div>
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

export default ChemSummit23;