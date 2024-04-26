"use client"
import Carousel from "./Carousel"

export default function HomeComponent5() {
    return (
      <div>
        <div className="text-center justify-center pb-10">
          <div className="md:text-6xl text-3xl font-semibold mt-10 p-4 text-textPurple">Our Brand</div>
          <div className="md:text-3xl text-center p-4 bg-gradient-to-r from-black to-textPurple text-transparent bg-clip-text">Quick Onboard to domestic Workers & Businesses</div>
          <div className="flex justify-center mt-4">
            <div className="md:w-1/2">
              <div className="font-light text-center text-black p-4 text-sm"> Experience seamless efficiency with Quick Onboard, your premier destination for hassle-free online booking of worker services, connecting households and businesses with trusted domestic workers effortlessly. </div>
            </div>
          </div>
        </div>
        <div className="mt-10 z-10">
        <Carousel></Carousel>
        </div>
        <div className="flex justify-center md:pt-20 md:space-x-10 md:space-y-6 z-50">
            <img src="/mobile1.png" className="h-full max-lg:hidden"></img>
            <div className="md:px-10 flex flex-col justify-center items-center gap-5">
              <div className="md:text-4xl text-2xl font-semibold text-center">Let's take it Forward</div>
              <div className="md:text-6xl font-semiboldw-full text-center">Available now on Play Store</div>
              <div className="font-light text-lg md:w-3/4 text-center">This is as easy as it gets! Finding Maid are just a click away. </div>
              <div className="font-bold text-lg text-center">Download the App and get started.</div>
              <button className="bg-textPurple text-white p-4"
                onClick={() => alert('Coming soon!')}
              >
                Download Now
              </button>
            </div>
            <img src="/mobile2.png" className="h-full max-lg:hidden"></img>
        </div>
      </div>
    );
  }
  