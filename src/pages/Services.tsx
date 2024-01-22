import { ServicesList, ServicesHeader } from "@/components/services";

const Services = () => {
  return (
    <div className="ml-8 md:ml-[154px] mt-[105px] mr-6 md:mr-[58px]">
      <ServicesHeader />
      <ServicesList />
    </div>
  );
};

export default Services;
