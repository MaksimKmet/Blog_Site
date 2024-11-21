import Card from "../components/Card";
import GroupOfButtons from "../components/UI/GroupOfButtons";

const Menu = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Wloskie Menu Pizzy</h1>
    
      <GroupOfButtons/>

      <div className="grid grid-cols-3 w-10/12 m-auto ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
};

export default Menu;
