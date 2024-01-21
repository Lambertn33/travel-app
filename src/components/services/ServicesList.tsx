import ServiceItem from "./ServiceItem";

import service1Image from '@/assets/images/services/service1.png'
import service2Image from '@/assets/images/services/service2.png'
import service3Image from '@/assets/images/services/service3.png'
import service4Image from '@/assets/images/services/service4.png'

interface ServiceInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  isActive: boolean;
}

const services: ServiceInterface[] = [
  {
    id: 1,
    image: service1Image,
    title: "Calculated weather",
    description: "Built Wicket longer admire do barton vanity itself do on it",
    isActive: false,
  },
  {
    id: 2,
    image: service2Image,
    title: "Calculated weather",
    description: "Built Wicket longer admire do barton vanity itself do on it",
    isActive: true,
  },
  {
    id: 3,
    image: service3Image,
    title: "Calculated weather",
    description: "Built Wicket longer admire do barton vanity itself do on it",
    isActive: false,
  },
  {
    id: 4,
    image: service4Image,
    title: "Calculated weather",
    description: "Built Wicket longer admire do barton vanity itself do on it",
    isActive: false,
  },
];

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service) => (
        <div>
          <ServiceItem service={service} key={service.title} />
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
