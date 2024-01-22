import {
  DestinationsHeader,
  DestinationsList,
} from "@/components/destinations";

const Destinations = () => {
  return (
    <div className="mt-8 lg:mt-[123px] flex flex-col gap-[60px] mx-6 md:ml-[174px] md:mr-[165px]">
      <DestinationsHeader />
      <DestinationsList />
    </div>
  );
};

export default Destinations;
