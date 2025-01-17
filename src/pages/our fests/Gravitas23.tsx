import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    position: string;
    image: string;
    linkedin?: string;
}

const Rocketary = () => {
    // Add your Rocketary content here
    return (
        <section className="text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Rocketary</h2>
            {/* Add more content for Rocketary */}
        </section>
    );
};

const GoldenShift = () => {
    // Add your Golden Shift content here
    return (
        <section className="text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Golden Shift</h2>
            {/* Add more content for Golden Shift */}
        </section>
    );
};

const teamMembers: TeamMember[] = [
    {
        name: "",
        position: "",
        image: "",
    },
    {
        name: "",
        position: "",
        image: "",
    }
];

// ... rest of your code remains the same ...
