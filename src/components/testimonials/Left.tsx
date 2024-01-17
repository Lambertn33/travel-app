import { GoDotFill } from "react-icons/go";

interface TestimonialLeftProps {
  activeTestimonial: number;
  onActivateTestimonial: (id: number) => void;
  testimonialsCount: number;
}

const Left = ({
  onActivateTestimonial,
  activeTestimonial,
  testimonialsCount,
}: TestimonialLeftProps) => {
  
  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= testimonialsCount; i++) {
      const isActive = i === activeTestimonial;
      dots.push(
        <GoDotFill
          key={i}
          color={isActive ? "#39425D" : "#E5E5E5"}
          className="cursor-pointer"
          onClick={() => onActivateTestimonial(i)}
        />
      );
    }
    return dots;
  };

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
      <div className="flex gap-2">{renderDots()}</div>
    </div>
  );
};

export default Left;
