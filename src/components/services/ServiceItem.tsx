
import serviceActiveImage from "../../assets/images/services/serviceActive.png";

import styles from "./serviceItem.module.css";

interface ServiceItemProps {
  service: {
    image: string;
    title: string;
    description: string;
    isActive: boolean;
  };
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  const additionalStyles = service.isActive ? styles.active : '';
  return (
    <div
      className={`pt-[45px] pb-[45px] pl-[42px] pr-[44px] ${additionalStyles} relative`}
    >
      <div className="flex items-center flex-col gap-[29px]">
        <img src={service.image} alt="" />
        <div className="flex flex-col gap-[15px]">
          <span className="text-center leading-normal sans text-xl font-semibold text-[#1E1D4C]">
            {service.title}
          </span>
          <span className="text-[#5E6282] text-center poppins text-base font-medium leading-[26px]">
            {service.description}
          </span>
        </div>
      </div>
      {service.isActive && (
        <div className="absolute bottom-[-35px] left-[-35px] -z-10">
          <img src={serviceActiveImage} />
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
