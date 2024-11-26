import { NavLink } from "react-router-dom";
import Information from "../components/UI/Information";

const Home = () => {
  return (
    <div className="h-[100rem]">
      <h1>Home</h1>
      <NavLink to="../Menu">Menu</NavLink>
      <Information className="fixed w-full" />

    </div>
  );
};

export default Home;
