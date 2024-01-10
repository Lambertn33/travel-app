import DestinationItem from "./DestinationItem";
import DestinationDecoreImg from "../../assets/images/destinations/Decore.png";

interface DestinationInterface {
  price: string;
  days: number;
  location: string;
}

const destinations: DestinationInterface[] = [
  {
    location: "Rome, Italy",
    days: 10,
    price: "5,42",
  },
  {
    location: "London, UK",
    days: 12,
    price: "4,2",
  },
  {
    location: "Full Europe",
    days: 28,
    price: "15",
  },
];

const DestinationsList = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-5 sm:gap-20 md:gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination, index) => 
          <DestinationItem destination={destination} key={index} image={++index} />
        )}
      </div>
      <div className="absolute right-10 bottom-[47px] -z-10 hidden lg:flex">
        <img src={DestinationDecoreImg} alt="" />
      </div>
    </div>
  );
};

export default DestinationsList;
