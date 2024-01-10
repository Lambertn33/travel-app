// import Hero from "./pages/Hero"
import Services from "./pages/Services"
import Destinations from "./pages/Destinations"
import Booking from "./pages/Booking"

const App = () => {
  return (
    <div className="px-[40px] lg:px-[140px] py-[44px] relative">
      {/* <Hero /> */}
      <Services />
      <Destinations />
      <Booking />
    </div>
  )
}

export default App