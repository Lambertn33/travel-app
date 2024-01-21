import {
  DestinationsHeader,
  DestinationsList,
} from "@/components/destinations";

const Destinations = () => {
  return (
    <div className="mt-[123px] flex flex-col gap-[60px] ml-[24px] md:ml-[174px] mr-[24px] md:mr-[165px]">
      <DestinationsHeader />
      <DestinationsList />
    </div>
  );
};

export default Destinations;
