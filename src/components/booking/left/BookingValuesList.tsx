import BookingValue1Image from "../../../assets/images/booking/value1.png";
import BookingValue2Image from "../../../assets/images/booking/value2.png";
import BookingValue3Image from "../../../assets/images/booking/value3.png";
import BookingValueItem from "./BookingValueItem";

interface BookingValue {
  image: string;
  title: string;
  subtitle: string;
}

const values: BookingValue[] = [
  {
    image: BookingValue1Image,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    title: "Choose Destination",
  },
  {
    image: BookingValue2Image,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    title: "Make Payment",
  },
  {
    image: BookingValue3Image,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    title: "Reach airport on Selected Date",
  },
];

const BookingValuesList = () => {
  return (
    <div className="flex flex-col gap-y-12">
      {values.map((value) => (
        <BookingValueItem value={value} />
      ))}
    </div>
  );
};

export default BookingValuesList;
