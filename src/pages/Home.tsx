import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="../Menu">Menu</NavLink>
    </div>
  );
};

export default Home;
