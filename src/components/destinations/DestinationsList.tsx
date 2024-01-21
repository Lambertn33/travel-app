import DestinationItem from "./DestinationItem";
import DestinationDecoreImg from "@/assets/images/destinations/Decore.png";

interface DestinationInterface {
  price: string;
  days: number;
  location: string;
  image: string;
}

const destinations: DestinationInterface[] = [
  {
    image: "1",
    location: "Rome, Italy",
    days: 10,
    price: "5,42",
  },
  {
    image: "2",
    location: "London, UK",
    days: 12,
    price: "4,2",
  },
  {
    image: "3",
    location: "Full Europe",
    days: 28,
    price: "15",
  },
];

const DestinationsList = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-5 sm:gap-20 md:gap-0 lg:grid-cols-3">
        {destinations.map((destination, index) => 
          <DestinationItem destination={destination} key={index} />
        )}
      </div>
      <div className="absolute right-10 bottom-12 -z-10 hidden lg:flex">
        <img src={DestinationDecoreImg} alt="" />
      </div>
    </div>
  );
};

export default DestinationsList;
