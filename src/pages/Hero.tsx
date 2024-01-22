import { IoIosPlay } from "react-icons/io";

import VectorImage from "@/assets/images/hero/Vector.png";
import TravelImage from "@/assets/images/hero/Traveller.png";

import Navbar from "@/components/navbar/Navbar.tsx";

const Hero = () => {
  return (
    <div className="mx-[154px]">
      <Navbar />
      <section className="flex justify-between items-center mt-16 md:z-[9999]">
        <div className="pt-32 md:pt-4">
          <p className="text-[1.128rem] font-[700] text-[#DF6951] uppercase mb-4">
            Best Destinations around the world
          </p>
          <div className="flex flex-col">
            <div className="volkhov font-[700] text-[3rem] md:text-[4.73756rem] leading-large inline-flex text-[#181E4B]">
              Travel,
              <div className="flex  flex-col">
                <span className="ml-8 z-10">enjoy</span>
                <img
                  src={VectorImage}
                  alt="stylish underline"
                  className="-mt-4 z-0 hidden md:block"
                />
              </div>
            </div>

            <p className="volkhov font-bold text-[3rem] md:text-[4.73756rem] leading-large inline-flex text-[#181E4B]">
              and live a new and full life
            </p>
          </div>

          <p className="my-[1.6rem] poppins leading-[1.692rem] text-[#5E6282] text-[1rem]">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="flex gap-6 items-center ">
            <div className="bg-[#F1A501] flex items-center justify-center text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary  w-[9.58788rem] h-[3rem]">
              <span className="text-sm text-white poppins font-medium leading-normal">
                Find out more
              </span>
            </div>
            <div className="flex items-center hover:cursor-pointer gap-5">
              <div className="bg-[#DF6951] w-[52px] h-[52px] rounded-full flex items-center justify-center">
                <IoIosPlay color="#fff" size={20} />
              </div>
              <p className="text-lg poppins text-[#686D77] font-medium leading-normal">
                Play Demo
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={TravelImage}
            alt="girl with phone with aircrafts on the background"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
