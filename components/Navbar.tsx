"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleRouteClick = (destination:string) => {
    router.push(destination);
  };

  return (
    <div className="bg-white left-0 right-0 top-0 z-50">
      <div className="flex justify-between bg-bgPurple p-6 text-textPurple rounded-full mt-8 mx-8">
      <a href="/" className="flex items-center">
          <img src="./logo.png" className="h-12" alt="Logo" />
        </a>
        <div className="flex space-x-6 mt-2 text-lg font-medium">
        <button onClick={() => handleRouteClick("/")}>Home</button>
          <button onClick={() => handleRouteClick("/services")}>Our Services</button>
          <button onClick={() => handleRouteClick("/aboutUs")}>About Us</button>
          <button onClick={() => handleRouteClick("/works")}>How it works</button>
          <button onClick={() => handleRouteClick("/contactUs")}>Contact Us</button>
          {/* Add more buttons with different routes as needed */}
        </div>
      </div>
    </div>
  );
}
