// import Hero from "./pages/Hero"
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";
// import Logos from "./pages/Logos";
import Testimonials from "./pages/Testimonials";
import Logos from "./pages/Logos";
import Subscribe from "./pages/Subscribe";

const App = () => {
  return (
    <div className="py-[44px] relative">
      {/* <Hero /> */}
      <Services />
      <Destinations />
      <Booking />
      <Testimonials />
      <Logos />
      <Subscribe />
    </div>
  );
};

export default App;
