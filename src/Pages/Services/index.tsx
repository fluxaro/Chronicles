import {
  MdDeliveryDining,
  MdRestaurantMenu,
  MdCelebration,
  MdTakeoutDining,
} from "react-icons/md";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <MdRestaurantMenu className="text-2xl" />,
    title: "Dine-in",
    text: "Sit down for soups, rice, and grills in a warm Abakaliki dining room.",
  },
  {
    icon: <MdTakeoutDining className="text-2xl" />,
    title: "Takeaway",
    text: "Pack your favourites for the road — sealed and ready to go.",
  },
  {
    icon: <MdDeliveryDining className="text-2xl" />,
    title: "City delivery",
    text: "Order online and we deliver hot meals across Abakaliki.",
  },
  {
    icon: <MdCelebration className="text-2xl" />,
    title: "Events & trays",
    text: "Party jollof trays, soup pots, and grill platters for celebrations.",
  },
];

const Services = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-10 py-4 md:py-8">
      <header className="flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-600">
          Services
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-headingColor">
          How we serve Abakaliki
        </h1>
        <p className="text-textColor max-w-2xl leading-relaxed">
          From a quick solo lunch to weekend family trays, Chronicles fits how
          you eat — in the restaurant, at the counter, or at your door.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((item) => (
          <div key={item.title} className="flex flex-col gap-3 border-b border-orange-100 pb-6">
            <div className="w-11 h-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              {item.icon}
            </div>
            <h2 className="text-lg font-semibold text-headingColor">{item.title}</h2>
            <p className="text-textColor text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-containerbg px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-headingColor">
            Ready to order?
          </h3>
          <p className="text-textColor text-sm mt-1">
            Browse the full Nigerian menu and checkout when you are ready.
          </p>
        </div>
        <Link
          to="/menu"
          className="inline-flex justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shrink-0"
        >
          Open menu
        </Link>
      </div>
    </div>
  );
};

export default Services;
