import Navbar from "@/components/Navbar";
import Heading from "@/components/services/Heading";
import CardLeft from "@/components/services/CardLeft";
import CardRight from "@/components/services/CardRight";
import Last from "@/components/services/Last";
import Footer from "@/components/Footer";

export default function Services() {
    return (
        <div>
            <Navbar></Navbar>
            <Heading></Heading>
            <div className="mt-16">
                <CardLeft title="Utensils Cleaning" content="At Amahmatch, we extend our commitment to cleanliness beyond just your living spaces. Our dedicated team ensures sparkling utensils, providing a hassle-free solution to your kitchen cleaning needs. With our seamless booking process, enjoy the convenience of spotless kitchens without the stress. Trust Amahmatch for reliable and efficient utensil cleaning services, tailored to meet your home's needs." image="./Rectangle1.png"></CardLeft>
            </div>
            <div id="house">
            <CardRight title="House Cleaning" content="Our platform ensures effortless booking, so you can enjoy a clean and comfortable home without the hassle. Trust us to match you with experienced professionals dedicated to exceeding your cleanliness expectations. Experience convenience and reliability with Amahmatch for a pristine living space every time." image="./final1.png"></CardRight>
            </div>
            <div id="office">
            <CardLeft title="Office Cleaning" content="With Amahmatch, you can trust in a sparkling workspace, enhancing productivity and professionalism. Experience the convenience of effortless booking and impeccable cleaning results with Amahmatch for your office space." image="./officecleaning.png"></CardLeft>
            </div>
            <div id="toilet">
            <CardRight title="Washroom Cleaning" content="We specialise in ensuring every corner of your home, including the washroom, is impeccably cleaned. Our dedicated team of professionals employs advanced techniques and eco-friendly products to guarantee a sparkling clean and sanitised environment. Experience the convenience and peace of mind with our hassle-free online booking for top-tier washroom cleaning services." image="./final3.png"></CardRight>
            </div>
            <CardLeft title="Kitchen Cleaning" content="Our dedicated team ensures every nook and cranny is spotless, leaving your kitchen sparkling and hygienic. With our streamlined booking process, you can effortlessly schedule a cleaning at your convenience. Experience the ease and satisfaction of a pristine kitchen with Amahmatch." image="./final4.png"></CardLeft>
            <CardRight title="Bedroom Cleaning" content="We are ensuring every corner is immaculate. From dusting to vacuuming, we meticulously handle every detail, guaranteeing a refreshing and serene space for our clients. With our reliable services, you can trust us to transform your bedroom into a sanctuary of cleanliness and comfort. Experience the ease and convenience of booking with Amahmatch for a stress-free cleaning solution." image="./final5.png"></CardRight>
            <CardLeft title="Wardrobe Cleaning" content="Our expert maid services extend to meticulous wardrobe cleaning, ensuring your clothes are neatly arranged and ready to wear. Trust us to handle your wardrobe with care, leaving you with a clutter-free and effortlessly stylish space. Experience the convenience and reliability of Amahmatch for all your cleaning needs." image="./final6.png"></CardLeft>
            <CardRight title="Laundry Cleaning" content="We extend our commitment to cleanliness with our professional laundry cleaning service. Trust our experienced workers to handle your laundry needs with care and efficiency. From delicate fabrics to tough stains, we ensure your clothes are fresh and pristine. Experience convenience and quality with Amahmatch's seamless laundry solutions." image="./final7.png"></CardRight>
            <Last></Last>
            <Footer></Footer>
        </div>
    );
}