import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const Right = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6">
        <div className="shadow bg-white w-11 rounded-full flex items-center justify-center h-11">
          <FaFacebookF />
        </div>
        <div className="shadow bg-white w-11 rounded-full flex items-center justify-center h-11">
          <FaInstagram />
        </div>
        <div className="shadow bg-white w-11 rounded-full flex items-center justify-center h-11">
          <FaTwitter />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[#5E6282] poppins text-xl font-medium leading-[124.5%] tracking-[0.1px]">
          Discover our app
        </span>
        <div className="flex flex-row lg:flex-col xl:flex-row gap-2">
          {/* button 1 */}
          <div className="">
            <div className="flex items-center justify-around bg-black py-2 px-4 rounded-full gap-2">
              <FaGooglePlay color="#fff" size="20" />
              <div className="flex flex-col">
                <span className="text-white uppercase text-xs font-extrabold">
                  get it on
                </span>
                <span className="text-white uppercase text-sm font-extralight">
                  google play
                </span>
              </div>
            </div>
          </div>
            {/* button 1 */}
          <div className="">
            <div className="flex items-center justify-around bg-black py-2 px-4 rounded-full gap-2">
              <FaApple color="#fff" size="20" />
              <div className="flex flex-col">
                <span className="text-white text-xs font-extrabold">
                  Available on the 
                </span>
                <span className="text-white text-sm font-extralight">
                  Apple store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
