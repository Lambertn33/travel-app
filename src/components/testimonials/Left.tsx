import { GoDotFill } from "react-icons/go";

const Left = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-2">
        <span className="poppins text-[18px] font-semibold text-[#5e6282] uppercase">
          Testimonials
        </span>
        <div className="max-w-[511px]">
          <span className="volkhov text-[50px] font-bold text-[#14183e] capitalize">
            What people say about Us.
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <GoDotFill color="#39425D" className="cursor-pointer" />
        <GoDotFill color="#E5E5E5" className="cursor-pointer" />
        <GoDotFill color="#E5E5E5" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Left;
