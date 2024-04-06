import React from 'react';

interface CardAboutProps {
  title: string;
  content: string;
}

const CardAbout: React.FC<CardAboutProps> = ({ title, content }) => {
  return (
    <div className=" p-8 gap-y-6 border-2 border-gray-500 rounded-lg m-4 w-1/4">
      <div className="text-center text-2xl text-center font-semibold w-3/4 h-16 mb-4 ml-6">{title}</div>
      <div className="text-lg font-light text-center mt-10">{content}</div>
    </div>
  );
};

export default CardAbout;
