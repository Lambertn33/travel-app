import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface TestimonialInterface {
  id: number;
  testimonial: string;
  user: string;
  location: string;
  image: string;
}

interface TestimonialRightProps {
  activeTestimonial: TestimonialInterface;
  onActivateTestimonial: (id: number) => void;
  testimonialsCount: number;
  nextTestimonial: TestimonialInterface
}

const Right = ({
  activeTestimonial,
  onActivateTestimonial,
  testimonialsCount,
  nextTestimonial,
}: TestimonialRightProps) => {
  
  const isFirstSlide = activeTestimonial.id == 1;
  const isLastSlide = activeTestimonial.id == testimonialsCount;
  const hasAdditionalSlide = activeTestimonial.id + 1 <= testimonialsCount;

  const activateByDescending = () => {
    if (!isFirstSlide) {
      onActivateTestimonial(activeTestimonial.id - 1);
    }
  };
  const activateByAscending = () => {
    if (!isLastSlide) {
      onActivateTestimonial(activeTestimonial.id + 1);
    }
  };

  return (
    <div className="flex justify-between relative">
      <div className="w-[504px] h-[245px] card-shadow bg-white rounded-lg relative">
        <img
          src={activeTestimonial.image}
          alt=""
          className="rounded-full w-[68px] h-[68px] absolute top-[-34px] left-[-34px] hidden lg:flex"
        />
        <div className="pl-[34px] pr-[68px] pt-[28px] pb-[34px] flex flex-col gap-8">
          <span className="text-[#5E6282] poppins text-base font-medium leading-8">
            {activeTestimonial.testimonial}
          </span>
          <div className="flex flex-col">
            <span className="text-[#5E6282] poppins text-lg font-semibold leading-normal">
              {activeTestimonial.user}
            </span>
            <span className="text-[#5E6282] poppins text-sm font-medium leading-normal">
              {activeTestimonial.location}
            </span>
          </div>
        </div>
      </div>

      {hasAdditionalSlide && (
        <div className="w-[502px] h-[232px] border-2 -z-10 hidden lg:flex left-12 border-[#f7f7f7] rounded-lg absolute top-20">
          <div className="pl-[34px] pr-[68px] pt-7 pb-8 flex flex-col gap-8">
          <span className="text-[#5E6282] poppins text-base font-medium leading-8">
            {nextTestimonial?.testimonial}
          </span>
          <div className="flex flex-col">
            <span className="text-[#5E6282] poppins text-lg font-semibold leading-normal">
              {nextTestimonial?.user}
            </span>
            <span className="text-[#5E6282] poppins text-sm font-medium leading-normal">
              {nextTestimonial?.location}
            </span>
          </div>
        </div>
        </div>
      )}
      <div className="h-[71.5px] flex flex-col justify-between my-auto">
        <IoIosArrowUp
          color={isFirstSlide ? "#bcb7c2" : "#3e2e4d"}
          className={!isFirstSlide ? "cursor-pointer" : ""}
          size="20"
          onClick={activateByDescending}
        />
        <IoIosArrowDown
          color={isLastSlide ? "#bcb7c2" : "#3e2e4d"}
          className={!isLastSlide ? "cursor-pointer" : ""}
          size="20"
          onClick={activateByAscending}
        />
      </div>
    </div>
  );
};

export default Right;
