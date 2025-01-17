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
    name: "ADITYA CHAKRAVARTHI",
    position: "Secretary",
    image: "/images/aditya.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-chakravarthi-2003ac"
  },
  {
    name: "AASTHA KALE",
    position: "Co-Secretary",
    image: "/images/asstha.jpg",
    linkedin: "https://www.linkedin.com/in/aastha-kale-8b8b97222"
  },
  {
    name: "ANNMARIA BENNY",
    position: "Management Head",
    image: "/images/anmaria.jpg",
    linkedin: "https://www.linkedin.com/in/annmaria-benny-6b4b97222"
  }
];

const EventsDepartment = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
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
          <h1 className="text-4xl font-bold text-white mb-4">EVENTS</h1>
          <h2 className="text-2xl text-accent mb-8">Achieving Management Milestones</h2>
        </motion.section>

        {/* Team Members Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-accent/10 border-2 border-accent">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
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
              The events department brainstorms for innovative ideas that could be appealing to students and can help spark their interest in multiple fields and further their grasp over the concept involved.
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
              The domain excels in preparing detailed presentations about event proceedings, keeping in mind its feasibility and ensuring a check on the safety norms. Understanding and mapping the various aspects related to an event from a proper schedule to the venue, judging criteria and prizes, are some of the responsibilities of this domain to make every event a success.
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
            Copyright © 2023 IIChE VIT - All Rights Reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default EventsDepartment; 