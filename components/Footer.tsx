import Link from "next/link";

export default function Footer() {
    return (
      <div>
        <div className="bg-bgPurple p-10 text-xl font-light rounded-t-3xl">
          <div className="flex px-12 py-8">
            <div className="w-1/2">
                <img src="./logo.png" className=""></img>
                <div className="py-12">
                Amahmatch, the leading platform for booking worker services online. We have made easy to make booking maid services easy, convenient, and stress-free. 
                </div>
                <div>
                Contact Us- info@amahmatch.com
                </div>
            </div>
            <div className="ml-40 px-20 space-y-6">
              <div className="text-textPurple font-bold">Services</div>
              <div>Home Cleaning</div>
              <div>Window Cleaning</div>
              <div>Toilet Cleaning</div>
              <div>Room Cleaning</div>
            </div>
            <div className="space-y-6">
            <div className="text-textPurple font-bold">Company</div>
              <div>About Us</div>
              <div>Contact Us</div>
              <div>How it works</div>
              
            </div>
          </div>
          <img src="./Line.png" className="max-w-screen p-10"></img>
          <div className="flex px-12 text-gray-500">
            <div>Copyright © 2023 AmahMatch | All Rights Reserved </div>
            <Link href="/privacy">
            <div className="ml-40 ">Privacy Policy</div>
            </Link>
            <Link href="/t&c">
            <div className="ml-10">Terms and Conditions</div>
            </Link>
            <img src="./insta.png" className="h-8 w-8 ml-10"></img>
            <img src="./LinkedIn.png" className="h-10 w-10 ml-2"></img>
            <img src="./twitter.png" className="h-8 w-8 ml-2"></img>
          </div>
        </div>
      </div>
    );
  }
  