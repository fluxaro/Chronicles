import { Cheff } from "../../Assets";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <section className="w-full my-12 md:my-16" id="story">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-orange-600">
            Our story
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-headingColor leading-snug">
            Cooking Abakaliki the way our kitchens remember it
          </h2>
          <p className="text-textColor leading-relaxed">
            THE PROMISE started as a small kitchen on Ogoja Road, serving oha,
            nsala, and jollof to neighbours who missed home cooking. Today we
            still source local produce, season without shortcuts, and plate
            every dish with the same care.
          </p>
          <p className="text-textColor leading-relaxed">
            Whether you stop in after work or order for the table at home, you
            get honest Nigerian meals — bold, familiar, and cooked fresh.
          </p>
          <Link
            to="/about"
            className="inline-flex w-fit text-orange-600 font-medium hover:text-orange-700 transition-colors"
          >
            Read our full story →
          </Link>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={Cheff}
            alt="THE PROMISE"
            className="w-full max-w-md object-contain drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
