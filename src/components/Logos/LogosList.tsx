import Logo1 from "../../assets/images/logos/logo1.png";
import Logo2 from "../../assets/images/logos/logo2.png";
import Logo3 from "../../assets/images/logos/logo3.png";
import Logo4 from "../../assets/images/logos/logo4.png";
import Logo5 from "../../assets/images/logos/logo5.png";

const LogosList = () => {
  const images = [Logo1, Logo2, Logo3, Logo4, Logo5];

  return (
    <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-5 items-center">
      {images.map((image, index) => (
        <div key={index} className="col-span-1">
          <img src={image} alt={`Logo ${index + 1}`} className="w-full lg:w-[94px]" />
        </div>
      ))}
    </div>
  );
};

export default LogosList;
