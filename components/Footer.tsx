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
          <div className="ml-40 px-20 ">
            <div className="text-textPurple font-bold pb-4">Services</div>
            <Link href="services/#house">
            <div className="py-2">Home Cleaning</div>
            </Link>
            <Link href="/services">
            <div className="py-2">Window Cleaning</div>
            </Link>
            <Link href="/services/#toilet">
            <div className="py-2">Toilet Cleaning</div>
            </Link>
            <Link href="/services/#office">
            <div className="py-2">Room Cleaning</div>
            </Link>
          </div>
          <div className="space-y-6">
            <div className="text-textPurple font-bold pb-2">Company</div>
            <Link href="/aboutUs">
            <div className="py-2">About Us</div>
            </Link>
            <Link href="/contactUs">
            <div className="py-2">Contact Us</div>
            </Link>
            <Link href="/works">
            <div className="py-2">How it works</div>
            </Link>

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
          <a href="https://www.instagram.com">
            <img src="./insta.png" className="ml-10" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/amahmatch/">
            <img src="./LinkedIn.png" className="ml-4" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com">
            <img src="./twitter.png" className="ml-4" alt="Twitter" />
          </a>

        </div>
      </div>
    </div>
  );
}
