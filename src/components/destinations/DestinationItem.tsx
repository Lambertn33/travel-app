import { FaLocationArrow } from "react-icons/fa6";

import styles from "./DestinationItem.module.css";

interface DestinationItemProps {
  destination: {
    price: string;
    days: number;
    location: string;
    image: string;
  };
}

const DestinationItem = ({ destination }: DestinationItemProps) => {
  // TODO: make image dynamic
  return (
    <div
      className={`flex flex-col w-full lg:w-[314px] h-[457px] rounded-3xl relative overflow-hidden bg-no-repeat bg-cover mb-8 lg:mb-0 bg-[url('assets/images/destinations/1.png')] ${styles.item}`}
    >
      <div className="absolute w-full px-5 pb-[42px] pt-7 bg-white bottom-0">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <span className="poppins font-medium leading-[22px] text-lg text-[#5e6282]">
              {destination.location}
            </span>
            <span className="poppins font-medium leading-[22px] text-lg text-[#5e6282]">
              ${destination.price}k
            </span>
          </div>
          <div className="flex gap-[14px] items-center">
            <FaLocationArrow size={20} />
            <span className="poppins font-medium leading-5 text-base text-[#5e6282]">
              {destination.days} Days Trip
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;
