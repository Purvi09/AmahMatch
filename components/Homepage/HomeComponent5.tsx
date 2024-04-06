"use client"
import Carousel from "./Carousel"

export default function HomeComponent5() {
    return (
      <div>
        <div className="text-center justify-center pb-10">
          <div className="text-6xl font-semibold mt-10 p-4 text-textPurple">Our Brand</div>
          <div className="text-3xl text-center p-4 bg-gradient-to-r from-black to-textPurple text-transparent bg-clip-text">Quick Onboard to domestic Workers & Businesses</div>
          <div className="flex justify-center mt-4">
            <div className="w-1/2">
              <div className="font-light text-center text-black p-4"> Experience seamless efficiency with Quick Onboard, your premier destination for hassle-free online booking of worker services, connecting households and businesses with trusted domestic workers effortlessly. </div>
            </div>
          </div>
        </div>
        <Carousel></Carousel>
        <div className="flex justify-center pt-20 space-x-10 space-y-6">
            <img src="/mobile1.png" className=""></img>
            <div className="px-10 flex flex-col justify-center">
            <div className="text-4xl font-semibold mt-10 text-center">Let's take it Forward</div>
            <div className="text-6xl font-semibold mt-10 w-full text-center">Available now on Play Store</div>
            <div className="font-light text-lg py-8 w-3/4 text-center ml-10">This is as easy as it gets! Finding Maid are just a click away. </div>
            <div className="font-bold text-lg text-center">Download the App and get started.</div>
            
            <button className="bg-textPurple text-white py-2 w-1/2 mt-8 ml-20"
  onClick={() => alert('Coming soon!')}
>
  Download Now
</button>
           
            </div>
            <img src="/mobile2.png" className=""></img>
        </div>
      </div>
    );
  }
  