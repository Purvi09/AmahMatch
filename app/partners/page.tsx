import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Comp1 from "@/components/partners/Comp1";
import Comp2 from "@/components/partners/Comp2";
import { Comp3 } from "@/components/partners/Comp3";

export default function(){
    return <div>
        <Navbar></Navbar>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Comp3></Comp3>
        <Footer></Footer>
    </div>
}