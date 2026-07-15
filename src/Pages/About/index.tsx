import { Cheff1 } from "../../components/Assets";
import { Link } from "react-router-dom";
import { restaurantInfo } from "../../utils/menuData";

const About = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-12 py-4 md:py-8">
      <header className="flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-600">
          About Chronicles
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-headingColor leading-tight">
          A kitchen rooted in Abakaliki
        </h1>
        <p className="text-textColor text-base md:text-lg leading-relaxed max-w-3xl">
          Chronicles is a Nigerian restaurant in the heart of{" "}
          {restaurantInfo.city}, built around the soups, rice dishes, and grills
          that define Ebonyi cooking — served warm, generously, and without
          fuss.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src={Cheff1}
          alt="Chronicles chef"
          className="w-full max-w-sm mx-auto object-contain"
        />
        <div className="flex flex-col gap-4 text-textColor leading-relaxed">
          <h2 className="text-xl font-semibold text-headingColor">
            From our family pot to your table
          </h2>
          <p>
            We opened to give people a place for proper local meals — oha that
            tastes like Sunday at home, party jollof with real smoke, and pepper
            soup that clears the day.
          </p>
          <p>
            Our cooks shop local markets, prep fresh each morning, and plate for
            both walk-in guests and delivery across the city. No import-kitchen
            shortcuts; just careful seasoning and time on the fire.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-orange-100 pt-10">
        {[
          { label: "Focus", value: "Ebonyi & Eastern Nigerian cuisine" },
          { label: "Service", value: "Dine-in, takeaway & delivery" },
          { label: "Home", value: restaurantInfo.address },
        ].map((row) => (
          <div key={row.label} className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-wider text-orange-600 font-medium">
              {row.label}
            </p>
            <p className="text-headingColor font-medium">{row.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/menu"
          className="bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Explore the menu
        </Link>
        <Link
          to="/services"
          className="border border-orange-500 text-orange-600 hover:bg-orange-50 text-center px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Our services
        </Link>
      </div>
    </div>
  );
};

export default About;
