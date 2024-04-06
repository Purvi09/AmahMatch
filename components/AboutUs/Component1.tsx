import Link from "next/link";

export default function Component1(){
    return(<div>
        <div className="flex mr-16">
            <img src="./Photo.png" className="mx-16 my-8"></img>
            <div className="pl-2 pt-6">
                <div className="flex mt-16 ">
                    <img src="./IconLabel.png" className=""></img>
                    <div className="p-2 text-lg font-light">About Us</div>
                </div>
                <div className="text-3xl py-8 font-semibold"> Our Company Overview</div>
                <div className="text-gray-500">Welcome to Amahmatch, the leading platform for booking workers services online. At Amahmatch, we understand the importance of having a clean and comfortable home, but we also know how challenging it can be to find reliable and trustworthy help. That's why we created Amahmatch - to make booking maid services easy, convenient, and stress-free. </div>
                <div className="flex justify-between space-x-2 mt-8">
                    
                    <Link href="/contactUs" className="bg-textPurple p-2 px-14 text-xl rounded text-white mx-2 w-1/2 font-light">Connect with us</Link>
                    <Link href="/services"
                    className="bg-gray-100 p-2 px-14 text-xl rounded w-1/2 font-light">Services</Link>
                </div>
            </div>
        </div>

    </div>

    )
}