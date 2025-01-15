import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface MemberCardProps {
  name: string;
  position: string;
  image: string;
  linkedin: string;
  email: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  position,
  image,
  linkedin,
  email,
}) => {
  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-lg border-2 border-accent dark:border-accent/50 shadow-[4px_4px_0_0_#BFDB38] dark:shadow-[4px_4px_0_0_#BFDB38/50] transition-all duration-300 group-hover:shadow-[8px_8px_0_0_#BFDB38] dark:group-hover:shadow-[8px_8px_0_0_#BFDB38/50]">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-300">{position}</p>
          <div className="flex gap-2 mt-2">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition-colors"
            >
              <Linkedin size={16} className="text-white" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition-colors"
            >
              <Mail size={16} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard; 