import { BookingLeft, BookingRight } from "@/components/booking";

const Booking = () => {
  return (
    <div className="mt-[186px] flex min-h-full flex-col lg:flex-row gap-12 md:gap-0 justify-between mx-6 md:ml-[186px] md:mr-[140px]">
      <BookingLeft />
      <div className="hidden lg:flex relative">
        <BookingRight />
      </div>
    </div>
  );
};

export default Booking;
