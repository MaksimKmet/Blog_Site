import { useState } from "react";
import GroupOfButtons from "../components/GroupOfButtons";
import PizzaCardBeta from "../components/Menu/PizzaCardBeta";
import AppetizersCard from "../components/Menu/AppetizersCard";
import DrinksCard from "../components/Menu/DrinksCard";
import PizzaCard from "../components/Menu/PizzaCard";
import DesertCard from "../components/Menu/DesertCard";

const Menu = () => {
  const [changeMenu, setChangeMenu] = useState("pizza");

  
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Wloskie Menu Pizzy</h1>

      <GroupOfButtons state={setChangeMenu} />

      <div className="">
        {changeMenu === "pizzaBeta" ? (
          <PizzaCardBeta />
        ) : changeMenu === "appetizer" ? (
          <AppetizersCard />
        ) : changeMenu === "drinks" ? (
          <DrinksCard />
        ) : changeMenu === "pizza" ? (
          <PizzaCard />
        ) : changeMenu === "desert" ? (
          <DesertCard />
        ) : null // Provide a fallback case
        }
      </div>
    </div>
  );
};

export default Menu;
