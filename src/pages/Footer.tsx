import { Left, Middle, Right } from "@/components/footer";

const Footer = () => {
  return (
    <div className="mt-24 px-12 lg:px-[186px] flex flex-col gap-20">
      <div className="flex items-center gap-6 lg:gap-0 lg:items-start flex-col lg:flex-row justify-between">
        <Left />
        <Middle />
        <Right />
      </div>
      <div className="text-center">
        <span className="text-[#5E6282] text-center poppins text-sm font-medium leading-[124.5%]">
          All rights reserved@jadoo.co
        </span>
      </div>
    </div>
  );
};

export default Footer;
