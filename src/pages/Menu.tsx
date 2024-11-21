import Cards from "../components/Cards";
import GroupOfButtons from "../components/UI/GroupOfButtons";

const Menu = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Wloskie Menu Pizzy</h1>

      <GroupOfButtons />

      <div className="">
        <Cards />
      </div>
    </div>
  );
};

export default Menu;
