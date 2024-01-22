const BookingLeftHeader = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <span className="poppins font-semibold text-[#5E6282]">
        Easy and Fast
      </span>
      <div className="flex flex-col gap-4">
        <span className="font-bold capitalize text-4xl lg:text-[50px] volkhov">
          Book your next trip
        </span>
        <span className="font-bold capitalize text-4xl lg:text-[50px] volkhov">
          in 3 easy steps
        </span>
      </div>
    </div>
  );
};

export default BookingLeftHeader;
