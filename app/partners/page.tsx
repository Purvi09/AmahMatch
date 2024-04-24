import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Comp1 from "@/components/partners/Comp1";
import Comp2 from "@/components/partners/Comp2";
import { Comp3 } from "@/components/partners/Comp3";
import Comp4 from "@/components/partners/Comp4";

export default function(){
    return <div>
        <Navbar></Navbar>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Comp3></Comp3>
        <Comp4></Comp4>
        <Footer></Footer>
    </div>
}