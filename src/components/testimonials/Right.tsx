import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import userImage from "../../assets/images/testimonials/user.png";

const Right = () => {
  return (
    <div className="flex justify-between relative">
      <div className="w-[504px] h-[245px] card-shadow bg-white rounded-lg relative">
        <img
          src={userImage}
          alt=""
          className="rounded-full w-[68px] h-[68px] absolute top-[-34px] left-[-34px]"
        />
        <div className="pl-[34px] pr-[68px] pt-[28px] pb-[34px] flex flex-col gap-8">
          <span className="text-[#5E6282] poppins text-base font-medium leading-8">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </span>
          <div className="flex flex-col">
            <span className="text-[#5E6282] poppins text-lg font-semibold leading-normal">
              Mike Taylor
            </span>
            <span className="text-[#5E6282] poppins text-sm font-medium leading-normal">
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>
      <div className="w-[502px] h-[232px] border-2 -z-10 left-12 border-[#f7f7f7] rounded-lg absolute top-20">
        <div className="pl-[34px] pr-[68px] pt-[28px] pb-[34px] flex flex-col gap-8">
          <span className="text-[#5E6282] poppins text-base font-medium leading-8">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </span>
          <div className="flex flex-col">
            <span className="text-[#5E6282] poppins text-lg font-semibold leading-normal">
              Chris Thomas
            </span>
            <span className="text-[#5E6282] poppins text-sm font-medium leading-normal">
              CEO of Red Button
            </span>
          </div>
        </div>
      </div>
      <div className="h-[71.5px] flex flex-col justify-between my-auto">
        <IoIosArrowUp color="#bcb7c2"  size="20" />
        <IoIosArrowDown color="#3e2e4d" size="20" />
      </div>
    </div>
  );
};

export default Right;
