import {
  Booking,
  Destinations,
  Footer,
  Hero,
  Logos,
  Services,
  Subscribe,
  Testimonials,
} from "@/pages";

import HeroImg from "./assets/images/hero/Hero.png";

const App = () => {
  return (
    <div className="py-11 relative">
      <Hero />
      <div className="absolute top-0 right-0 -z-10 hidden lg:flex">
        <img src={HeroImg} alt="" />
      </div>
      <Services />
      <Destinations />
      <Booking />
      <Testimonials />
      <Logos />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
