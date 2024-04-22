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
      <div className="w-80 h-72 pb-10 hover:bg-white mx-auto flex flex-col items-center">
        <div className="py-6">
          <img src={icon} alt={title} className="w-12 h-12 text-center" />
        </div>
  
        <div className="text-2xl font-semibold py-6 text-center">{title}</div>
        
        {/* Center the content horizontally */}
        <div className='text-center md:w-3/4'>{content}</div>
      </div>
    </Link>
  );
};

export default Card;
