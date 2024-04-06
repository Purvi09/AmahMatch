import Link from "next/link";

export default function HomeComponent4(){
    return <div>
        <div className="flex justify-between">
            <img src="./img.png" className="h-100"></img>
            <div className="text-center justify-center p-10 mt-8">
                <div className="text-6xl font-bold mt-20 p-6">Why choose Us?</div>
                <div className="text-sm text-center p-4 pb-16">Choose Amahmatch for peace of mind and impeccable service, ensuring your home is not just clean, but cared for by trusted professionals dedicated to your satisfaction.</div>
                <Link href="/aboutUs" className="bg-textPurple text-white p-4 mt-20"> Read more</Link>
            </div>
            <img src="./img.png" className="h-100"></img>

        </div>
    </div>
}