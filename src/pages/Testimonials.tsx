import Left from "../components/testimonials/Left";
import Right from "../components/testimonials/Right";

const Testimonials = () => {
  return (
    <div className="pl-[186px] pr-[89px] mt-[209px] grid grid-cols-1 md:grid-cols-2">
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
};

export default Testimonials;
