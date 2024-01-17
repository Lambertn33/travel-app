import { useState } from "react";

import Left from "../components/testimonials/Left";
import Right from "../components/testimonials/Right";

interface TestimonialInterface {
  id: number;
  testimonial: string;
  user: string;
  location: string;
}

const testimonials: TestimonialInterface[] = [
  {
    id: 1,
    testimonial:
      "“On the Windows talking painted pasture yet its express parties use Sure last upon he same as knew next. Testimonial 1.”",
    location: "Lahore, Pakistan",
    user: "Mike Taylor",
  },
  {
    id: 2,
    testimonial:
    "“On the Windows talking painted pasture yet its express parties use Sure last upon he same as knew next. Testimonial 2.”",
    location: "CEO of Red Button",
    user: "Chris Thomas",
  },
  {
    id: 3,
    testimonial:
    "“On the Windows talking painted pasture yet its express parties use Sure last upon he same as knew next. Testimonial 3.”",
    location: "Lahore, Pakistan",
    user: "Mike Taylor",
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<TestimonialInterface>(testimonials[0]);

  const activateTestimonialHandler = (id: number) => {
    const selectedTestimonial = testimonials.find(testimonial => testimonial.id === id);
    if (selectedTestimonial) {
      setActiveTestimonial(selectedTestimonial);
    }
  };

  return (
    <div className="pl-[186px] pr-[89px] mt-[209px] grid grid-cols-1 md:grid-cols-2">
      <div>
        <Left
          onActivateTestimonial={activateTestimonialHandler}
          activeTestimonial={activeTestimonial.id}
          testimonialsCount={testimonials.length}
        />
      </div>
      <div>
        <Right
         onActivateTestimonial={activateTestimonialHandler}
         activeTestimonial={activeTestimonial}
         testimonialsCount={testimonials.length}
         nextTestimonial={testimonials[activeTestimonial.id]}
        />
      </div>
    </div>
  );
};

export default Testimonials;
