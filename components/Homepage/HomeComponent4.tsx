import Link from "next/link";

export default function HomeComponent4() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <img src="./img.png" className="md:h-100 h-60 w-20 md:w-60" />
        <div className="text-center justify-center md:p-10 mt-8">
          <div className="md:text-6xl font-bold md:mt-20 md:p-6">
            Why choose Us?
          </div>
          <div className="md:text-sm text-xs md:text-center p-4 md:pb-8 text-textPurple">
            Amahmatch offers a refreshing solution. Unlike traditional methods,
            Amahmatch takes the stress and uncertainty out of finding cleaning
            help. Our user-friendly app connects you with pre-verified,
            experienced professionals in minutes. No more endless searches or
            wondering if you can trust someone in your home.
          </div>
          <div className="md:text-3xl text-xl text-textPurple font-bold md:pb-6">
            Stop cleaning and start living!
          </div>
          <div className="mt-8"> {/* Add top margin to create space */}
            <Link
              href="/aboutUs/#aboutmore"
              className="bg-textPurple text-white md:p-4 p-2 text-sm md:text-lg"
            >
              Read more
            </Link>
          </div>
        </div>
        <img src="./img.png" className="md:h-100 h-60 w-20 md:w-60" />
      </div>
    </div>
  );
}
