import Link from "next/link";

export default function Last(){
    return (
        <div>
        <div className="text-center justify-center pb-10">
          <div className="text-6xl font-light mt-10 pt-16">Discover Our Cleaning Services</div>
         
          <div className="flex justify-center mt-4">
            <div className="w-1/2">
              <div className=" text-center text-black p-4"> Experience the versatility of our workers services as we uncover a myriad of cleaning solutions tailored to your unique needs. </div>
        
              </div>
          </div>
          <Link href="/contactUs">
          <button className="bg-textPurple p-2 rounded px-12 m-4 text-white text-lg">CONTACT US</button>
          </Link>
        </div>
        </div>
    );
}