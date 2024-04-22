import Link from "next/link";

export default function Component1(){
    return(<div>
        <div className="md:flex md:mr-16">
            <img src="./Photo.png" className="md:mx-16 md:my-8"></img>
            <div className="pl-2 pt-6">
                <div className="flex mt-16 ">
                    <img src="./IconLabel.png" className=""></img>
                    <div className="p-2 text-lg font-light">About Us</div>
                </div>
                <div className="md:text-3xl text-xl py-8 font-semibold"> Our Company Overview</div>
                <div className="text-gray-500">Welcome to Amahmatch, the leading platform for booking workers services online. At Amahmatch, we understand the importance of having a clean and comfortable home, but we also know how challenging it can be to find reliable and trustworthy help. That's why we created Amahmatch - to make booking maid services easy, convenient, and stress-free. </div>
                <div className="flex justify-between md:space-x-2 mt-8 pb-4">
                    
                    <Link href="/contactUs" className="bg-textPurple md:p-2 px-14 md:text-xl text-sm rounded text-white md:mx-2 w-1/2 font-light text-center">Connect with us</Link>
                    <Link href="/services"
                    className="bg-gray-100 p-2 px-14 md:text-xl text-sm rounded w-1/2 font-light text-center">Services</Link>
                </div>
            </div>
        </div>

    </div>

    )
}