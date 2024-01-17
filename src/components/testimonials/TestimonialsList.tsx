import { useState } from "react";

import user1Image from "../../assets/images/testimonials/user.png";
import user2Image from "../../assets/images/testimonials/user2.png";

import Left from "./Left";
import Right from "./Right";

interface TestimonialInterface {
  id: number;
  testimonial: string;
  user: string;
  location: string;
  image: string;
}

const testimonials: TestimonialInterface[] = [
  {
    id: 1,
    image: user1Image,
    testimonial:
      "“On the Windows talking painted pasture yet its express parties use Sure last upon he same as knew next. Testimonial 1.”",
    location: "Lahore, Pakistan",
    user: "Mike Taylor",
  },
  {
    id: 2,
    image: user2Image,
    testimonial:
    "“On the Windows talking painted pasture yet its express parties use Sure last upon he same as knew next. Testimonial 2.”",
    location: "CEO of Red Button",
    user: "Chris Thomas",
  },
  {
    id: 3,
    image: user1Image,
    testimonial:
    "“On the Windows talking painted pasture yet its express parties use Sure last upon he same as knew next. Testimonial 3.”",
    location: "Lahore, Pakistan",
    user: "Mike Taylor",
  },
];

const TestimonialsLis = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<TestimonialInterface>(testimonials[0]);

  const activateTestimonialHandler = (id: number) => {
    const selectedTestimonial = testimonials.find(testimonial => testimonial.id === id);
    if (selectedTestimonial) {
      setActiveTestimonial(selectedTestimonial);
    }
  };

  return (
    <>
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
    </>
  );
};

export default TestimonialsLis;
