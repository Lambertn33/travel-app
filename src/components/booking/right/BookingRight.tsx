import { FaLocationArrow } from "react-icons/fa6";
import { FaRegBuilding, FaRegHeart } from "react-icons/fa";

import BookingImage from "@/assets/images/booking/booking.png";
import RomeImage from "@/assets/images/booking/rome.png";

import styles from "./BookingRight.module.css";

const BookingRight = () => {
  const Icon = ({ count }: { count: number }) => {
    const renderItems = () => {
      const items = [];
      for (let i = 0; i < count; i++) {
        items.push(
          <div
            key={i}
            className="bg-[#f5f5f5] w-9 h-9 rounded-full flex items-center justify-center"
          >
            <FaLocationArrow color="#84829a" />
          </div>
        );
      }
      return items;
    };

    return <div className="flex gap-[18px]">{renderItems()}</div>;
  };

  return (
      <div className="absolute right-16">
        <div className="relative">
          <div className={`${styles.blur}`}></div>
          <div
            className={`${styles.card} rounded-[26px] card-shadow bg-white w-[370px] min-h-full absolute top-[59px] right-11`}
          >
            <div className="flex flex-col gap-6">
              <img src={BookingImage} alt="" />
              <div className="flex flex-col gap-[13px]">
                <span className="text-black poppins text-lg font-medium leading-5 tracking-[0.27px]">
                  Trip to Greece
                </span>
                <span className="text-[#84829a] poppins text-base font-medium leading-5 tracking-[-0.08px]">
                  14-29 June| by Robbin joseph
                </span>
              </div>
            </div>
            <div className="flex gap-[18px] mt-5">
              <Icon count={3} />
            </div>
            <div className="flex justify-between mt-7 relative">
              <div className="flex gap-1 items-center">
                <FaRegBuilding color="#84829a" />
                <span className="text-[#84829a] poppins text-base font-medium leading-5 tracking-[-0.32px]">
                  24 people going
                </span>
              </div>
              <FaRegHeart color="#4152ca" size={20} />
              <div className="absolute -right-[100px] bottom-5">
                <div
                  className={`w-[263px] h-[129px] rounded-[18px] card-shadow bg-white hidden md:flex ${styles.card_small}`}
                >
                  <div className="flex gap-1">
                    <div>
                      <img
                        src={RomeImage}
                        alt=""
                        className="rounded-full w-[74px]"
                      />
                    </div>
                    <div className="flex flex-col justify-start h-full gap-[14px]">
                      <div className="flex flex-col">
                        <span className="text-[#84829a] poppins text-sm font-medium leading-5 tracking-[-0.49px]">
                          On going
                        </span>
                        <span className="text-[#080809] poppins text-lg font-semibold leading-5 tracking-[-0.27px]">
                          Trip to home
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[#080809] poppins text-sm font-medium leading-5 tracking-[-0.77px]">
                          <span className="text-[#8A79DF]">40%</span> Completed
                        </span>
                        <progress value={0.4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BookingRight;
