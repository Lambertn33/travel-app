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

const App = () => {
  return (
    <div className="py-11 relative">
      <Hero />
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
