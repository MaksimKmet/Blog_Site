import { useState } from "react";
import GroupOfButtons from "../components/GroupOfButtons";
import AppetizersCard from "../components/Menu/AppetizersCard";
import DrinksCard from "../components/Menu/DrinksCard";
import DesertCard from "../components/Menu/DesertCard";
import PizzaCard from "../components/Menu/PizzaCard";

const Menu = () => {
  const [changeMenu, setChangeMenu] = useState("pizza");

  
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Wloskie Menu Pizzy</h1>

      <GroupOfButtons state={setChangeMenu} />

      <div className="">
        {changeMenu === "pizza" ? (
          <PizzaCard />
        ) : changeMenu === "appetizer" ? (
          <AppetizersCard />
        ) : changeMenu === "drinks" ? (
          <DrinksCard />
        ) : changeMenu === "desert" ? (
          <DesertCard />
        ) : null // Provide a fallback case
        }
      </div>
    </div>
  );
};

export default Menu;
