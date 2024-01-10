import ServicesList from "../components/services/ServicesList";
import ServicesHeader from "../components/services/ServicesHeader";

const Services = () => {
  return (
    <div className="pl-[32px] md:pl-[154px] pr-[24px] md:pr-[58px]">
      <ServicesHeader />
      <ServicesList />
    </div>
  );
};

export default Services;
