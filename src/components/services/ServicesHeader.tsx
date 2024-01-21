import Image from "@/assets/images/services/ServiceRightImage.png";

const ServicesHeader = () => {
  return (
    <div className=" flex flex-col items-center relative">
      <span className="poppins text-[18px] font-semibold text-[#5e6282] uppercase">
        Category
      </span>
      <span className="volkhov text-[50px] font-bold text-[#14183e] capitalize">
        We offer best Services
      </span>
      <div className="absolute top-0 right-0 hidden lg:flex">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default ServicesHeader;
