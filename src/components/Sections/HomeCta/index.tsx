import { Link } from "react-router-dom";

const HomeCta = () => {
  return (
    <section className="w-full my-12 md:my-16">
      <div className="w-full rounded-xl bg-orange-500 px-6 py-12 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Hungry for Abakaliki tonight?
          </h2>
          <p className="text-orange-50 max-w-lg">
            Browse the menu, add your favourites, and we’ll get the pot ready.
          </p>
        </div>
        <Link
          to="/menu"
          className="inline-flex justify-center bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shrink-0"
        >
          View full menu
        </Link>
      </div>
    </section>
  );
};

export default HomeCta;
