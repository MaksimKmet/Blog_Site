import { Link, NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <>

    <nav className="flex justify-between h-min py-2 bg-gray-100">
        <h1 className="px-2 text-2xl text-blue-900 hover:text-red-500"><Link to={"/"}>Home</Link></h1>
        <ul className="flex items-center ">
            <li className="px-2 hover:text-red-500"><NavLink to="/Menu">Menu</NavLink></li>
            <li className="px-2 hover:text-red-500"><NavLink to="/Services">Services</NavLink></li>
            <li className="px-2 hover:text-red-500"><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
