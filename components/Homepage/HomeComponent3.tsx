"use client"
import Card from "../Card";

export default function HomeComponent3() {
    return (
      <div className="bg-bgPurple" style={{ backgroundImage: "url('./background2.png')" }}>
        <div className="md:flex md:p-12 pt-12 md:mx-16 mx-8">
          <div className="md:w-1/2 w-full md:leading-16 md:text-6xl text-3xl font-semibold mt-10">Always Provide The Best Service</div>
          <div className="md:w-1/2 md:ml-14">
            <div className="md:text-3xl mt-10 font-medium ">Our Services</div>
            <div className="mt-4 font-light">
            Discover the unparalleled ease of booking worker services online with our industry-leading platform, where efficiency meets reliability for a spotless home every time
            </div>
          </div>
        </div>
        <div className="md:flex py-20 md:px-20">
        <div className="">
        <Card title="House Cleaning" icon="./Home.png" content="Transforming homes with unparalleled cleanliness and convenience."id="house"></Card>
        </div>
        <Card title="Office Cleaning" icon="./office.png" content="Experience unparalleled convenience and cleanliness with our premier office cleaning services."id="office"></Card>
        <Card title="Toilet Cleaning" icon="./toilet.png" content="Refresh your space with our top-tier washroom cleaning services."id="toilet"></Card>
        <Card title="Commercial Cleaning" icon="./house.png" content="Experience pristine cleanliness at your fingertips with our top-rated commercial cleaning."id="/"></Card>
      </div>
      </div>
    );
  }
  