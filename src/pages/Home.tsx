import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-[100rem]">
      <h1>Home</h1>
      <NavLink to="../Menu">Menu</NavLink>
      <Footer/>
    </div>
  );
};

export default Home;
