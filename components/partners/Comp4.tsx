import Link from "next/link";

export default function Comp4(){
    return (
        <div>
        <div className="text-center justify-center pb-10">
          <div className="md:text-6xl text-3xl font-light mt-10 pt-16">Be a Partner With Us</div>
         
          <div className="flex justify-center mt-4">
            <div className="md:w-1/2">
              <div className=" text-center text-black p-4"> Reach a wider audience and elevate your brand image. Partner with the leading platform for home service professionals </div>
        
              </div>
          </div>
          <Link href="/contactUs">
          <button className="bg-textPurple p-2 rounded px-12 m-4 text-white text-lg">CONTACT US</button>
          </Link>
        </div>
        </div>
    );
}