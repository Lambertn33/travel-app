import DestinationsHeader from "../components/destinations/DestinationsHeader";
import DestinationsList from "../components/destinations/DestinationsList";

const Destinations = () => {
  return (
    <div className="mt-[123px] flex flex-col gap-[60px] pl-[24px] md:pl-[174px] pr-[24px] md:pr-[165px]">
      <DestinationsHeader />
      <DestinationsList />
    </div>
  );
};

export default Destinations;
