"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function isActiveClasses(pathname: string, currentRoute: string) {
  if ((pathname.includes(currentRoute) && currentRoute.length > 1) || pathname === currentRoute) {
    return "font-bold md:text-xl text-xs";
  }else{
    return "hover:font-bold text-xs md:text-xl";
  }
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleRouteClick = (destination:string) => {
    router.push(destination);
  };

  return (
    <div className="bg-white left-0 right-0 top-0 z-50 fixed w-full">
      <div className="flex justify-between bg-bgPurple md:p-6 p-4 text-textPurple md:rounded-full rounded-lg mt-8 md:mx-8">
        <a href="/" className="flex items-center">
          <img src="./logo.png" className="md:h-12 h-8 pr-2" alt="Logo" />
        </a>
        <div className="flex md:space-x-6 mt-2 md:text-lg md:font-medium">
          <button onClick={() => handleRouteClick("/")} className={isActiveClasses(pathname, "/")}>Home</button>
          <button onClick={() => handleRouteClick("/aboutUs")} className={isActiveClasses(pathname, "/aboutUs")}>About Us</button>
          <button onClick={() => handleRouteClick("/services")} className={isActiveClasses(pathname, "/services")}>Our Services</button>
          <button onClick={() => handleRouteClick("/works")} className={isActiveClasses(pathname, "/works")}>How it works</button>
          <button onClick={() => handleRouteClick("/partners")} className={isActiveClasses(pathname, "/partners")}>Partners</button>
          <button onClick={() => handleRouteClick("/contactUs")} className={isActiveClasses(pathname, "/contactUs")}>Contact Us</button>
          {/* Add more buttons with different routes as needed */}
        </div>
      </div>
    </div>
  );
}

