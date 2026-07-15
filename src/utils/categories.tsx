import { GiChickenOven, GiBowlOfRice, GiCookingPot, GiMeal, GiFlame } from "react-icons/gi";
import { MdOutlineLocalDrink } from "react-icons/md";
import { FaFish } from "react-icons/fa";

export const Categories = [
  {
    id: 1,
    name: "Soups",
    urlParam: "soups",
    icon: <GiCookingPot />,
  },
  {
    id: 2,
    name: "Swallows",
    urlParam: "swallows",
    icon: <GiMeal />,
  },
  {
    id: 3,
    name: "Rice",
    urlParam: "rice",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    name: "Grills",
    urlParam: "grills",
    icon: <GiChickenOven />,
  },
  {
    id: 5,
    name: "Pepper Soup",
    urlParam: "pepper-soup",
    icon: <GiFlame />,
  },
  {
    id: 6,
    name: "Fish",
    urlParam: "fish",
    icon: <FaFish />,
  },
  {
    id: 7,
    name: "Drinks",
    urlParam: "drinks",
    icon: <MdOutlineLocalDrink />,
  },
];
