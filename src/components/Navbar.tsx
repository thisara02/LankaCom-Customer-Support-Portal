import React from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaCog, FaBell, FaBars, FaTicketAlt } from "react-icons/fa";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-[#fdfffc] shadow-md flex items-center px-4 h-30">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <button
          className="text-black text-xl md:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <img src={Logo} alt="Logo" className="h-10" />
      </div>

      {/* Center: Navigation Links */}
      <nav className="flex-1 flex justify-center space-x-8 items-center ml-4">
        {[
          { to: "/home", label: "Dashboard" },
          { to: "/about", label: "About Us" },
          { to: "/services", label: "Our Services" },
          { to: "/contact", label: "Contact Us" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative font-medium text-black transition duration-300 pb-1
              ${isActive ? "after:w-full after:scale-100" : "after:w-0 after:scale-0"}
              after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-red-500 after:transition-transform after:duration-300 after:origin-left
              hover:after:w-full hover:after:scale-100 font-jura`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Right: Icons */}
      <div className="flex items-center space-x-5 pr-10">
  {/* Settings Link */}
        <NavLink
            to="/settings"
            className={({ isActive }) =>
            `relative text-black hover:text-red-600 group text-xl p-2 transition
            ${isActive ? "after:w-full" : ""}`
            }
        >
            <FaCog />
            <span className="absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full"></span>
        </NavLink>

        {/* Notifications Link */}
        <NavLink
            to="/notifications"
            className={({ isActive }) =>
            `relative text-black hover:text-red-600 group text-xl p-2 transition
            ${isActive ? "after:w-full" : ""}`
            }
        >
            <FaBell />
            <span className="absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full"></span>
        </NavLink>

        <div className="mb-6 flex justify-center pt-7 text-lg font-jura">
          <Link to="/create-ticket">
            <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaTicketAlt className="text-xl" />
              Create a New Service Request
            </button>
          </Link>
        </div>

        </div>
    </header>
  );
};

export default Navbar;
