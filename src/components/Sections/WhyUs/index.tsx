import { MdDeliveryDining, MdRestaurant, MdGroups } from "react-icons/md";

const reasons = [
  {
    icon: <MdRestaurant className="text-2xl" />,
    title: "Local recipes",
    text: "Oha, egusi, nsala, and jollof seasoned the Abakaliki way — no shortcuts.",
  },
  {
    icon: <MdDeliveryDining className="text-2xl" />,
    title: "Fast city delivery",
    text: "Hot meals across Abakaliki, packed carefully so they arrive tasting right.",
  },
  {
    icon: <MdGroups className="text-2xl" />,
    title: "For every table",
    text: "Solo lunch, family trays, and weekend gatherings — we cook for the moment.",
  },
];

const WhyUs = () => {
  return (
    <section className="w-full my-12 md:my-16" id="why-us">
      <div className="flex flex-col items-center gap-3 mb-10 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-600">
          Why THE PROMISE
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-headingColor">
          Food that feels like home
        </h2>
        <p className="text-textColor max-w-xl">
          We keep the focus on flavour, hospitality, and meals worth coming back for.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <div className="w-11 h-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-headingColor">{item.title}</h3>
            <p className="text-textColor text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
