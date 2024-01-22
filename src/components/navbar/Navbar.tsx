import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import Logo from "@/assets/images/navbar/Logo.png";

interface Link {
  label: string;
  link: string;
  isBordered: boolean;
}

interface Language {
  label: string;
  value: string;
}

const links: Link[] = [
  {
    label: "Destinations",
    link: "#",
    isBordered: false,
  },
  {
    label: "Hotels",
    link: "#",
    isBordered: false,
  },
  {
    label: "Flights",
    link: "#",
    isBordered: false,
  },
  {
    label: "Bookings",
    link: "#",
    isBordered: false,
  },
  {
    label: "Login",
    link: "#",
    isBordered: false,
  },
  {
    label: "Signup",
    link: "#",
    isBordered: true,
  },
];

const languages: Language[] = [
  { label: "EN", value: "en" },
  { label: "FR", value: "fr" },
  // Add more languages as needed
];

const renderLinkClass = (link?: Link) => {
  const classes = "text-[#212832] text-base sans font-normal leading-normal";
  return link?.isBordered
    ? `${classes} border rounded-md border-[#212832] py-2 px-5`
    : classes;
};

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () =>
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

  return (
    <nav className="flex items-center justify-between">
      <img src={Logo} />
      <ul className="flex gap-[55px] items-center">
        {links.map((link) => (
          <li className={renderLinkClass(link)}>
            <a href={link.link}>{link.label}</a>
          </li>
        ))}

        <div className="relative cursor-pointer">
          <div className="flex items-center gap-0.5">
            <span
              className={renderLinkClass()}
              onClick={toggleLanguageDropdown}
            >
              {selectedLanguage.label}
            </span>
            <IoIosArrowDown onClick={toggleLanguageDropdown} />
          </div>
          
          {/* Language Dropdown */}
          {isLanguageDropdownOpen && (
            <div className="absolute mt-0.5 p-2 bg-white rounded-md shadow-lg">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleLanguageChange(language)}
                >
                  {language.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
