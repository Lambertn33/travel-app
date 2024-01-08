import HeroImage from "../components/hero/HeroImage.tsx";
import Navbar from "../components/navbar/Navbar.tsx";

import TravelImage from '../assets/images/hero/Traveller.png'

const Hero = () => {
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <span>Best destinations around the world</span>
          <h2>Travel, enjoy and live a new and full life</h2>
          <span>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </span>
          <div className="flex gap-2">
            <button>Find out more</button>            
          </div>
        </div>
        <div className="absolute right-0 top-0 -z-10">
          <div className="relative hidden md:flex">
            <HeroImage />
            <div className="">
            <img src={TravelImage} className="absolute top-0 right-[172px] z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
