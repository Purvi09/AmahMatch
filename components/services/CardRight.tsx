import React from 'react';

interface CardRightProps {
  title: string;
  image: string;
  content: string;
}

const CardRight: React.FC<CardRightProps> = ({ title, image, content }) => {
  return (
    <div className="flex w-full">
       
       
        <div className='w-1/2 border-2'>
        <img src={image}></img>
        </div>
        <div className='w-1/2 content-center border-2'>
            <div className='px-14 py-8 text-4xl'>{title}</div>
            <div className="px-14">{content}</div>
        </div>
     
    </div>
  );
};

export default CardRight;
