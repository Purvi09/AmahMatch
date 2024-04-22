import Link from 'next/link';
import React from 'react';

export default function HeroComponent() {
  return (
    <div className="mt-40 text-center py-8"style={{ backgroundImage: "url('./background.png')" }}>
      <div className="font-bold md:text-6xl py-8 pb-12 text-3xl">Discover Trusted Workers, Hire Today.</div>
      <div className="relative flex justify-center overflow-hidden">

        {/* Marquee Animation */}
        <div className="main-banner-container absolute top-60 left-0 z-0">
          <div className="banner-container">
            <img src="./banner1.png" alt="Banner Image" className="banner-image" />
            <img src="./banner1.png" alt="Banner Image" className="banner-image" />
          </div>
        </div>

        {/* Maid image */}
        <img src="./maid.png" alt="Maid" className="relative z-40 h-96 md:h-full" />

        {/* Gradient overlay */}
        <Link href="/contactUs">
        <button className="text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-textPurple p-4 mb-4 mr-2 rounded-xl z-40 md:text-xl">Connect with us</button>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gradientPurple z-10"></div>
      </div>

      {/* Button */}
      
    </div>
  );
}
