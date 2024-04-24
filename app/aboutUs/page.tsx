import CardAbout from "@/components/AboutUs/CardAbout";
import Component1 from "@/components/AboutUs/Component1";
import ComponentLast from "@/components/AboutUs/ComponentLast";
import Faq from "@/components/AboutUs/Faq";
import HeadingAbout from "@/components/AboutUs/HeadingAbout";
import { Last } from "@/components/AboutUs/Last";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function aboutUs(){
    
    return(<div>
       
        <Navbar></Navbar>
        <HeadingAbout></HeadingAbout>
        <Component1></Component1>
        <div className="bg-bgPurple rounded-lg md:bg-cover md:bg-no-repeat md:bg-center"style={{ backgroundImage:"url('./background3.png')"}}>
            <div className="md:text-4xl text-2xl flex justify-center pt-16 font-semibold">Why Choose AmahMatch?</div>
        <div className="md:flex p-8 m-6">
        <CardAbout title="Trusted Professionals" content="We carefully vet and screen all maids on our platform to ensure they meet our strict standards for professionalism, reliability, and integrity. You can trust that the workers you book through us are experienced, background-checked, and committed to providing exceptional service."></CardAbout>
        <CardAbout title="Convenient Booking" content="With us, booking workers services is quick and easy. Our user-friendly app allows you to browse available workers, select your preferred services, choose a convenient date and time, and book with just a few taps. Say goodbye to phone calls, emails, and endless scheduling hassles."></CardAbout>
        <CardAbout title="Customisable Services" content="Whether you need regular cleaning, deep cleaning, laundry, cooking, or other household tasks, we offers a wide range of customizable services to suit your needs. You can tailor your booking to include specific tasks and preferences, ensuring you get exactly what you need."></CardAbout>
        <CardAbout title="Flexible Scheduling" content="We understand that every household has different needs and schedules. That's why we offer flexible scheduling options, allowing you to book one-time or recurring appointments based on your availability."></CardAbout>
        </div>
        </div>
        <Last></Last>
        <Faq></Faq>
        <ComponentLast></ComponentLast>
        <Footer></Footer>
    </div>)
}