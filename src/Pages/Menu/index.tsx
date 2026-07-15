import { MenuSection } from "../../components";

const Menu = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center gap-4 py-2">
      <div className="w-full max-w-3xl text-center flex flex-col gap-2 px-2">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-600">
          Menu
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-headingColor">
          Abakaliki dishes, cooked fresh
        </h1>
        <p className="text-textColor text-sm md:text-base">
          Soups, swallows, rice, grills, pepper soup, and local drinks — prices in naira.
        </p>
      </div>
      <MenuSection title="Browse by category" />
    </div>
  );
};

export default Menu;
