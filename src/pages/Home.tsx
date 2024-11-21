import { NavLink } from "react-router-dom";
import Information from "../components/UI/Information";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="../Menu">Menu</NavLink>
      <Information/>

    </div>
  );
};

export default Home;
