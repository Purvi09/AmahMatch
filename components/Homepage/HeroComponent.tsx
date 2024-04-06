import Link from 'next/link';
import React from 'react';

export default function HeroComponent() {
  return (
    <div className="relative text-center py-8">
      <div className="font-bold text-6xl py-8 pb-12">Discover Trusted Workers, Hire Today.</div>
      <div className="relative flex justify-center overflow-hidden">

        {/* Marquee Animation */}
        <div className="main-banner-container absolute top-60 left-0 z-0">
          <div className="banner-container">
            <img src="./banner1.png" alt="Banner Image" className="banner-image" />
            <img src="./banner1.png" alt="Banner Image" className="banner-image" />
          </div>
        </div>

        {/* Maid image */}
        <img src="./maid.png" alt="Maid" height={430} width={430} className="relative z-40" />

        {/* Gradient overlay */}
        <Link href="/contactUs">
        <button className="text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-textPurple p-4 mb-4 mr-2 rounded-xl z-50 text-xl">Connect with us</button>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gradientPurple z-10"></div>
      </div>

      {/* Button */}
      
    </div>
  );
}
