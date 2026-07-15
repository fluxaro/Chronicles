import { PrevNext as PrevNextButtons, Title } from "..";
import Container from "../../Container";
import { FilterFood } from "../../../utils/filters";
import { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";

const Favourites = () => {
  const soups = FilterFood("soups");
  const [{ foodItems }] = useStateValue();
  const items = soups?.length ? soups : foodItems?.slice(0, 8);
  const [scrollOffset, setScrollOffset] = useState(0);

  const scroll = (delta: number) => {
    // Unique values so Container's effect always runs
    setScrollOffset(delta + Math.random() * 0.01);
  };

  return (
    <section className="w-full my-8 md:my-12" id="favourites">
      <div className="w-full flex items-center justify-between gap-4">
        <Title title="Abakaliki favourites" />
        <PrevNextButtons
          onNext={() => scroll(300)}
          onPrev={() => scroll(-300)}
        />
      </div>
      <p className="text-textColor text-sm mt-4 mb-2 max-w-2xl">
        Soups and specials locals ask for first — rotating through our kitchen every day.
      </p>
      <Container className="bg-containerbg" scrollOffset={scrollOffset} items={items} />
    </section>
  );
};

export default Favourites;
