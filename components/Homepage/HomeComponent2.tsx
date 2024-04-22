export default function HomeComponent2(){
    // return <div className="md:flex md:justify-between md:text-5xl text-3xl font-semibold p-20">
    // <div className="w-1/3 pt-12 leading-16">Get Maids in Real Time</div>
    // <img src="./Vector.png" className="hidden md:h-60 p-8" ></img>
    // <div className="w-1/3 pt-12 leading-16">Helping Almost 4.9M Workers</div>
    // <img src="./Vector.png" className="hidden md:h-60 p-8" ></img>
    // <div className="w-1/3 pt-12 leading-16">On Demand Availability</div>
    // </div>
     return <div className="flex justify-between md:text-5xl text-sm font-semibold md:p-20 pl-2">
     <div className="md:w-1/3 pt-12 md:leading-16">Get Maids in Real Time</div>
     <img src="./Vector.png" className="md:h-60 md:p-8 h-28 p-2 mt-4" ></img>
     <div className="md:w-1/3 pt-12 md:leading-16">Helping Almost 4.9M Workers</div>
     <img src="./Vector.png" className="md:h-60 h-28 md:p-8 p-2 mt-4" ></img>
     <div className="md:w-1/3 pt-12 md:leading-16">On Demand Availability</div>
     </div>
}