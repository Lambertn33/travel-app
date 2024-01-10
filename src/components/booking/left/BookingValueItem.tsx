interface BookingValueItemProps {
  value: {
    image: string;
    title: string;
    subtitle: string;
  };
}

const BookingValueItem = ({ value }: BookingValueItemProps) => {
  return (
    <div className="flex gap-5 items-start">
      <img src={value.image} alt="" />
      <div className="flex flex-col gap-1">
        <span className="poppins font-bold text-[#5E6282] text-base leading-5">
          {value.title}
        </span>
        <span className="poppins w-[327px] font-normal text-[#5E6282] text-base leading-5">
          {value.subtitle}
        </span>
      </div>
    </div>
  );
};

export default BookingValueItem;
