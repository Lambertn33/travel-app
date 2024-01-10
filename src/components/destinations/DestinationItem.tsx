import { FaLocationArrow } from "react-icons/fa6";

import styles from "./DestinationItem.module.css";

interface DestinationItemProps {
  destination: {
    image: string;
    price: string;
    days: number;
    location: string;
  };
}

const DestinationItem = ({ destination }: DestinationItemProps) => {
  return (
    <div
      className={`flex flex-col w-full md:w-[314px] h-[457px] rounded-[24px] relative overflow-hidden bg-no-repeat bg-cover mb-[32px] md:mb-0 bg-[url('assets/images/destinations/${destination.image}')] ${styles.item}`}
    >
      <div className="absolute w-full px-[20px] pb-[42px] pt-[28px] bg-white bottom-0">
        <div className="flex flex-col gap-[19px]">
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
            <span className="poppins font-medium leading-[22px] text-base text-[#5e6282]">
             {destination.days} Days Trip
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;
