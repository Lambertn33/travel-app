import DestinationItem from "./DestinationItem";
import DestinationDecoreImg from "../../assets/images/destinations/Decore.png";

interface DestinationInterface {
  image: string;
  price: string;
  days: number;
  location: string;
}

const destinations: DestinationInterface[] = [
  {
    location: "Rome, Italy",
    image: "1.png",
    days: 10,
    price: "5,42",
  },
  {
    location: "London, UK",
    image: "2.png",
    days: 12,
    price: "4,2",
  },
  {
    location: "Full Europe",
    image: "1.png",
    days: 28,
    price: "15",
  },
];

const DestinationsList = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationItem destination={destination} key={destination.price} />
        ))}
      </div>
      <div className="absolute right-10 bottom-[47px] -z-10 hidden lg:flex">
        <img src={DestinationDecoreImg} alt="" />
      </div>
    </div>
  );
};

export default DestinationsList;
