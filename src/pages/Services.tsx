import { ServicesList, ServicesHeader } from "@/components/services";

const Services = () => {
  return (
    <div className="ml-[32px] md:ml-[154px] mr-[24px] md:mr-[58px]">
      <ServicesHeader />
      <ServicesList />
    </div>
  );
};

export default Services;
