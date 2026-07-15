import { MdLocationOn, MdAccessTime, MdPhone, MdEmail } from "react-icons/md";
import { restaurantInfo } from "../../../utils/menuData";

const Visit = () => {
  const { address, phone, email, hours, city, state } = restaurantInfo;

  return (
    <section className="w-full my-12 md:my-16" id="visit">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-containerbg rounded-xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-orange-600">
            Visit us
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-headingColor">
            Find Chronicles in {city}
          </h2>
          <p className="text-textColor leading-relaxed">
            Walk in for a plate or call ahead for large orders. We are open
            daily in the heart of {city}, {state}.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-3 text-textColor">
              <MdLocationOn className="text-orange-600 text-xl mt-0.5 shrink-0" />
              <span>{address}</span>
            </div>
            <div className="flex items-start gap-3 text-textColor">
              <MdPhone className="text-orange-600 text-xl mt-0.5 shrink-0" />
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-headingColor">
                {phone}
              </a>
            </div>
            <div className="flex items-start gap-3 text-textColor">
              <MdEmail className="text-orange-600 text-xl mt-0.5 shrink-0" />
              <a href={`mailto:${email}`} className="hover:text-headingColor">
                {email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-headingColor font-semibold">
            <MdAccessTime className="text-orange-600 text-xl" />
            Opening hours
          </div>
          <ul className="flex flex-col gap-3">
            {hours.map((row) => (
              <li
                key={row.day}
                className="flex justify-between gap-4 border-b border-orange-200/60 pb-3 text-sm md:text-base"
              >
                <span className="text-textColor">{row.day}</span>
                <span className="text-headingColor font-medium whitespace-nowrap">
                  {row.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Visit;
