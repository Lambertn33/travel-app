interface FooterLink {
  title: string;
  links: string[];
}

const footerLinks: FooterLink[] = [
  {
    title: "Company",
    links: ["About", "Careers", "Mobile"],
  },
  {
    title: "Contact",
    links: ["Help/FAQ", "Press", "Affilates"],
  },
  {
    title: "More",
    links: ["Airlinefees", "Airline", "Low fare tips"],
  },
];

const Middle = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 flex-col md:flex-row justify-around lg:justify-between gap-[72px]">
      {footerLinks.map((section) => (
        <div key={section.title} className="flex flex-col gap-8">
          <span className="text-[#080809] poppins text-xl font-bold leading-[124.5%]">
            {section.title}
          </span>
          <div className="flex flex-col gap-3">
            {section.links.map((link) => (
              <span
                key={link}
                className="text-[#5E6282] poppins text-lg font-medium leading-[124.5%]"
              >
                <a href="#">{link}</a>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Middle;
