import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

interface CardPProps {
  id: string; // Add ID prop
  title: string;
  icon: string;
}

const CardP: React.FC<CardPProps> = ({ id, title, icon}) => {
  return (
    
      <div className="grid place-content-center">
         <div className="flex items-center justify-center">
        <div className="">
          <img src={icon} alt={title} className="" />
        </div>
        </div>
        <div className="flex items-center justify-center">
        <div className="text-2xl font-semibold py-6 w-3/4 text-center text-textPurple">{title}</div>
        </div>
       
       
      </div>
   
  );
};

export default CardP;
