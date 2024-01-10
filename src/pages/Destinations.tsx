import DestinationsHeader from "../components/destinations/DestinationsHeader";
import DestinationsList from "../components/destinations/DestinationsList";

const Destinations = () => {
  return (
    <div className="mt-[123px] flex flex-col gap-[60px]">
      <DestinationsHeader />
      <DestinationsList />
    </div>
  );
};

export default Destinations;
