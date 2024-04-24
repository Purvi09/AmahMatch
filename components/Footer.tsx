import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="bg-bgPurple md:p-10 p-6 text-xl font-light rounded-t-3xl">
        <div className="md:flex md:px-12 py-8">
          <div className="md:w-1/2 w-full text-sm md:text-lg">
            <img src="./logo.png" className="h-10 md:h-20"></img>
            <div className="md:py-12 py-6">
              Amahmatch, the leading platform for booking worker services online. We have made easy to make booking maid services easy, convenient, and stress-free.
            </div>
            <div>
              Contact Us- info@amahmatch.com
            </div>
          </div>
          <div className="flex justify-between pt-4">
          <div className="md:ml-40 md:px-20 ">
            <div className="text-textPurple font-bold pb-2 text-sm md:text-lg">Services</div>
            <Link href="services/#house">
            <div className="md:py-2 text-sm md:text-lg">Home Cleaning</div>
            </Link>
            <Link href="/services">
            <div className="md:py-2 text-sm md:text-lg">Window Cleaning</div>
            </Link>
            <Link href="/services/#toilet">
            <div className="md:py-2 text-sm md:text-lg">Toilet Cleaning</div>
            </Link>
            <Link href="/services/#office">
            <div className="md:py-2 text-sm md:text-lg">Room Cleaning</div>
            </Link>
          </div>
          <div className="space-y-6">
            <div className="text-textPurple font-bold pb-2 text-sm md:text-lg">Company</div>
            <Link href="/aboutUs">
            <div className="md:py-2 text-sm md:text-lg">About Us</div>
            </Link>
            <Link href="/contactUs">
            <div className="md:py-2 text-sm md:text-lg">Contact Us</div>
            </Link>
            <Link href="/works">
            <div className="md:py-2 text-sm md:text-lg">How it works</div>
            </Link>
            <Link href="/partners">
            <div className="md:py-2 text-sm md:text-lg">Partners</div>
            </Link>

          </div>
          </div>
        </div>
        <img src="./Line.png" className="max-w-screen p-10"></img>
        <div className="flex md:px-12 text-gray-500 text-xs md:text-lg">
          <div>Copyright © 2023 AmahMatch | All Rights Reserved </div>
          <Link href="/privacy">
            <div className="md:ml-40 ">Privacy Policy</div>
          </Link>
          <Link href="/t&c">
            <div className="md:ml-10 ml-4">Terms and Conditions</div>
          </Link>
          <a href="https://www.instagram.com">
            <img src="./insta1.png" className="md:ml-10 ml-4 md:h-6 md:w-6 h-3 w-3" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/amahmatch/">
            <img src="./LinkedIn1.png" className="ml-4 md:h-6 md:w-6 h-3 w-3" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com">
            <img src="./twitter1.png" className="ml-4 md:h-6 md:w-6 h-3 w-3" alt="Twitter" />
          </a>

        </div>
      </div>
    </div>
  );
}
