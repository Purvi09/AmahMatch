import CardP from "./CardP";

export default function Comp2(){
    return <div className="md:m-16 m-8">
        <div className="text-4xl pb-8 font-bold">Benefits of Joining With Us</div>
        <div className="text-textPurple md:text-2xl">Partnering with top product brands takes things a step further. Through these partnerships, we showcase products recommended by professionals. Additionally, these partnerships might lead to exclusive discounts or convenient purchasing.</div>
        <div className="md:flex p-8">
            <CardP title="Reaching Target Audience" icon="./Ellipse18.png" id="1"></CardP>
            <CardP title="Increasing Brand Awareness" icon="./Ellipse19.png" id="1"></CardP>
            <CardP title="Getting Social with Increasing Sales" icon="./Ellipse20.png" id="1"></CardP>
            <CardP title="Increasing Customer Loyalty" icon="./Ellipse21.png" id="1"></CardP> 
        </div>
    </div>
}