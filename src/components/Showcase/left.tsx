import { BikeDelivery } from "../Assets";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
      <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
        <p className="text-sm text-orange-600 font-semibold tracking-wide">
          Abakaliki · Ebonyi
        </p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-md">
          <img
            src={BikeDelivery}
            alt="Delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h1 className="text-[2.25rem] leading-tight lg:text-[3.75rem] font-semibold tracking-tight text-headingColor">
        Chronicles
        <span className="block text-orange-600 text-[1.85rem] lg:text-[3.25rem] font-bold mt-1">
          Home of Abakaliki flavour
        </span>
      </h1>

      <p className="text-base text-textColor md:w-[85%] leading-relaxed">
        From smoky party jollof to rich oha and catfish pepper soup — we cook
        the dishes Ebonyi is proud of, for dine-in, takeaway, and fast delivery
        across Abakaliki.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <Link
          to="/menu"
          className="bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-150"
        >
          Order now
        </Link>
        <a
          href="#visit"
          className="border border-orange-500 text-orange-600 hover:bg-orange-50 text-center px-6 py-3 rounded-lg font-medium transition-colors duration-150"
        >
          Visit us
        </a>
      </div>
    </div>
  );
};

export default Left;
