import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

interface CardProps {
  id: string; // Add ID prop
  title: string;
  icon: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ id, title, icon, content }) => {
  return (
    <Link href={`services/#${id}`}>
      <div className="w-80 h-72 pl-14 pb-10 pr-2 hover:bg-white">
        <div className="ml-20 py-6">
          <img src={icon} alt={title} className="w-12 h-12 text-center" />
        </div>
  
        <div className="text-2xl font-semibold py-6">{title}</div>
        <div>{content}</div>
      </div>
    </Link>
  );
};

export default Card;
