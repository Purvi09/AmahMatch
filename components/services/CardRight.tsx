import React from 'react';

interface CardRightProps {
  title: string;
  image: string;
  content: string;
}

const CardRight: React.FC<CardRightProps> = ({ title, image, content }) => {
  return (
    <div className="md:flex w-full">
       
       
        <div className='md:w-1/2 border-2'>
        <img src={image}></img>
        </div>
        <div className='md:w-1/2 content-center border-2'>
            <div className='md:px-14 px-8 py-8 md:text-4xl text-2xl'>{title}</div>
            <div className="md:px-14 px-8 text-sm md:text-lg pb-4">{content}</div>
        </div>
     
    </div>
  );
};

export default CardRight;
