import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-xl font-bold text-gray-800">WoodCrafts Co.</h1>
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="text-gray-800 hover:text-gray-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-gray-800 hover:text-gray-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mission"
              className="text-gray-800 hover:text-gray-500"
            >
              Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/who-we-are"
              className="text-gray-800 hover:text-gray-500"
            >
              Who We Are
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
