import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Component1Works from "@/components/Works/Component1Works";

export default function MyComponent() {
    return (
        <div>
            <Navbar />
            <Component1Works />
            <div className="relative flex justify-center">
                <img src="./Works.png" className="mb-8"></img>
                <img src="./tick.gif" className="hidden md:block md:absolute bottom-36 left-60 h-80 w-80"></img>
            </div>
            <Footer />
        </div>
    );
}
