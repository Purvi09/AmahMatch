import Footer from "@/components/Footer";
import HeroComponent from "@/components/Homepage/HeroComponent";
import HomeComponent2 from "@/components/Homepage/HomeComponent2";
import HomeComponent3 from "@/components/Homepage/HomeComponent3";
import HomeComponent4 from "@/components/Homepage/HomeComponent4";
import HomeComponent5 from "@/components/Homepage/HomeComponent5";
import Navbar from "@/components/Navbar";
import { register } from 'swiper/element/bundle';

export default function Home() {
  register();
  
  return (
    <div>
      <Navbar></Navbar>
      <HeroComponent></HeroComponent>
      <HomeComponent2></HomeComponent2>
      <HomeComponent3></HomeComponent3>
      <HomeComponent4></HomeComponent4>
      <HomeComponent5></HomeComponent5>
      
      <Footer></Footer>
    </div>
  );
}