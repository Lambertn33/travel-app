import { FaEnvelope } from "react-icons/fa";

import starsImage from "@/assets/images/subscribe/stars.png";
import curveLeftImage from "@/assets/images/subscribe/curveleft.png";
import curveRightImage from "@/assets/images/subscribe/curveright.png";
import iconImage from "@/assets/images/subscribe/icon.png";

const SubscribeForm = () => {
  const btnStyles = {
    background:
      "var(--gradient, linear-gradient(180deg, #FF946D 0%, #FF7D68 100%))",
  };

  return (
    <div className="relative p-0 lg:pr-[100px] lg:p-[60px]">
      <div className="relative bg-[#DFD7F9] w-full rounded-tl-[20px] lg:rounded-tl-[129px] rounded-[20px] p-[12px] px-[144px] py-[80px] z-10">
        <div className="absolute right-[-25px] top-[-25px] hidden lg:flex">
          <img src={iconImage} alt="" className="rounded-full w-[70px]" />
        </div>
        <div className="flex flex-col gap-[74px] items-center relative z-10">
          <span className="text-[#5E6282] text-left lg:text-center poppins text-[33px] font-semibold leading-[54px]">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </span>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="relative">
              <input
                type="text"
                className="h-[68px] rounded-[10px] w-[420px] pl-12"
                placeholder="Your email"
              />
              <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
                <FaEnvelope className="text-[#5E6282]" />
              </div>
            </div>
            <button
              className={`h-[68px] rounded-[10px] w-full lg:w-[180px] flex justify-center items-center`}
              style={btnStyles}
            >
              <span className="text-white text-center font-sans text-[17px] font-semibold leading-normal">
                Subscribe
              </span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-4 opacity-15 z-0">
          <img src={curveLeftImage} alt="" />
        </div>
        <div className="absolute top-0 right-0 opacity-15 z-0">
          <img src={curveRightImage} alt="" />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 z-0">
        <img src={starsImage} alt="" />
      </div>
    </div>
  );
};

export default SubscribeForm;
