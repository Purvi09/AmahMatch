import React from 'react';

interface CardLeftProps {
  title: string;
  image: string;
  content: string;
}

const CardLeft: React.FC<CardLeftProps> = ({ title, image, content }) => {
  return (
    <div className="flex w-full">
       
        <div className='w-1/2 content-center border-2'>
            <div className='px-14 py-8 text-4xl'>{title}</div>
            <div className="px-14">{content}</div>
        </div>
        <div className='w-1/2 border-2'>
        <img src={image}></img>
        </div>
     
    </div>
  );
};

export default CardLeft;
