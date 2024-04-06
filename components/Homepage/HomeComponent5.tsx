import Link from "next/link";
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
        <div className="flex justify-center p-32 space-x-40">
            <img src="./phone2.png" className="h-96"></img>
            <div className="grid place-content-center">
            <div className="text-6xl font-semibold">Let's take it Forward</div>
            <div className="font-light py-6 w-3/4">This is as easy as it gets! Finding Maid are just a click away. </div>
            <div className="font-bold">Download the App and get started.</div>
            <Link href="/coming">
            <button className="bg-textPurple text-white p-4 mt-8">Download Now</button>
            </Link>
            </div>
        </div>
      </div>
    );
  }
  