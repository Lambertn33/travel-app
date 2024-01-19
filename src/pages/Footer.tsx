import Left from "../components/footer/Left";
import Middle from "../components/footer/Middle";
import Right from "../components/footer/Right";

const Footer = () => {
  return (
    <div className="mt-[96px] px-12 lg:px-[186px] flex flex-col gap-20">
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        <Left />
        <Middle />
        <Right />
      </div>
      <div className="text-center">
      <span className="text-[#5E6282] text-center poppins text-sm font-medium leading-[124.5%]">All rights reserved@jadoo.co</span>
      </div>
    </div>
  );
};

export default Footer;
