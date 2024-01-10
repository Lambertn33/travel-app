import BookingLeft from "../components/booking/left/BookingLeft";
import BookingRight from "../components/booking/right/BookingRight";

const Booking = () => {
  return (
    <div className="mt-[186px] flex min-h-full flex-col lg:flex-row gap-12 md:gap-0 justify-between md:pl-[174px] pr-[24px] md:pr-[140px]">
      <BookingLeft />
      <div className="hidden lg:flex">
        <BookingRight />
      </div>
    </div>
  );
};

export default Booking;
