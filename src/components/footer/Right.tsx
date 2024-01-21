import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const storeLinks = [
  {
    icon: <FaGooglePlay color="#fff" size="20" />,
    title: "get it on",
    subtitle: "google play",
  },
  {
    icon: <FaApple color="#fff" size="20" />,
    title: "Available on the",
    subtitle: "Apple store",
  },
];


const socialIcons = [
  { icon: <FaFacebookF /> },
  { icon: <FaInstagram /> },
  { icon: <FaTwitter /> },
];

const Right = () => {
  const iconClasses =
  "shadow bg-white w-11 rounded-full flex items-center justify-center h-11 cursor-pointer";
  
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6">
        {socialIcons.map((socialIcon, index) => (
          <div key={index} className={iconClasses}>
            {socialIcon.icon}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[#5E6282] poppins text-xl font-medium leading-[124.5%] tracking-[0.1px]">
          Discover our app
        </span>
        <div className="flex flex-row lg:flex-col xl:flex-row gap-2">
          {storeLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-around bg-black py-2 px-4 rounded-full gap-2"
            >
              {link.icon}
              <div className="flex flex-col">
                <span className="text-white uppercase text-xs font-extrabold">
                  {link.title}
                </span>
                <span className="text-white uppercase text-sm font-extralight">
                  {link.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Right;
