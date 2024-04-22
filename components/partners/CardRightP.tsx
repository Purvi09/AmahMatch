import React from 'react';

interface CardRightProps {
  title: string;
  image: string;
  content: string;
  icon:string
}

const CardRightP: React.FC<CardRightProps> = ({ title, image, content,icon }) => {
  return (
    <div className="md:flex w-full md:m-10">
       
       
        <div className='md:w-1/2'>
        <img src={image}></img>
        </div>
        <div className='md:w-1/2 content-center'>
        <img src={icon} className='mt-4 md:mt-0'></img>
            <div className='py-8 md:text-4xl text-2xl'>{title}</div>
            <div className="text-sm md:text-lg pb-4 md:w-3/4 text-textPurple">{content}</div>
        </div>
     
    </div>
  );
};

export default CardRightP;
