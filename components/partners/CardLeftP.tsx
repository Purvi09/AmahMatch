import React from 'react';

interface CardLeftProps {
  title: string;
  image: string;
  content: string;
  icon:string
}

const CardLeftP: React.FC<CardLeftProps> = ({ title, image, content ,icon}) => {
  return (
    <div className="md:flex w-full md:m-10">
      <div className="md:w-1/2 md:order-2">
        <img src={image} alt={title} className="w-full h-auto md:h-full md:w-auto" />
      </div>
      <div className="md:w-1/2 md:order-1 content-center ">
        <img src={icon} className='mt-4 md:mt-0'></img>
        <div className="py-8 md:text-4xl text-2xl">{title}</div>
        <div className="text-sm md:text-lg w-4/5 text-textPurple pb-4">{content}</div>
      </div>
    </div>
  );
};

export default CardLeftP;
