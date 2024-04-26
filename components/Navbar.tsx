"use client";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function isActiveClasses(pathname: string, currentRoute: string) {
  if ((pathname.includes(currentRoute) && currentRoute.length > 1) || pathname === currentRoute) {
    return "font-bold md:text-xl text-[10px]";
  }else{
    return "hover:font-bold text-[10px] md:text-xl";
  }
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleRouteClick = (destination:string) => {
    router.push(destination);
  };

  return (
    <div className="bg-white w-full fixed top-0 z-50">
      <div className="flex justify-between bg-bgPurple p-6 text-textPurple md:rounded-full rounded-lg mt-8 md:mx-8">
        <a href="/" className="flex items-center">
          <img src="./logo.png" className="md:h-12 h-8 pr-2" alt="Logo" />
        </a>
        <div className="block flex md:space-x-6 mt-2 md:text-lg md:font-medium text-xs">
          <button onClick={() => handleRouteClick("/")} className={isActiveClasses(pathname, "/")}>Home</button>
          <button onClick={() => handleRouteClick("/aboutUs")} className={isActiveClasses(pathname, "/aboutUs")}>About Us</button>
          <button onClick={() => handleRouteClick("/services")} className={isActiveClasses(pathname, "/services")}>Our Services</button>
          <button onClick={() => handleRouteClick("/works")} className={isActiveClasses(pathname, "/works")}>How it works</button>
          <button onClick={() => handleRouteClick("/partners")} className={isActiveClasses(pathname, "/partners")}>Partners</button>
          <button onClick={() => handleRouteClick("/contactUs")} className={isActiveClasses(pathname, "/contactUs")}>Contact Us</button>
          {/* Add more buttons with different routes as needed */}
        </div>
        <button className="hidden text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border">
          <Menu />
        </button>
      </div>
      {/* <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>How it works</li>
          <li>Partners</li>
          <li>Contact Us</li>
        </ul>
      </div> */}
    </div>
  );
}

