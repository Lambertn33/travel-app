import BookingLeftHeader from "./BookingLeftHeader";
import BookingValuesList from "./BookingValuesList";

const BookingLeft = () => {
  return (
    <div className="flex flex-col w-[511px] gap-[31px]">
      <BookingLeftHeader />
      <BookingValuesList />
    </div>
  );
};

export default BookingLeft;
