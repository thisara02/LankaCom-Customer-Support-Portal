import React, { useRef } from "react";
import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBell, FaBars} from "react-icons/fa";
// import { FaCog} from "react-icons/fa"; 

interface NavbarProps {
  toggleSidebar: () => void;
}

const AdminNav: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  return (
    <header className="w-full bg-gray-100 shadow-md flex items-center px-4 h-20 relative z-50">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <button
          className="text-black text-xl md:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <img src={Logo} alt="Logo" className="h-10" onClick={() => navigate("/admin-dash")}/>
      </div>

      {/* Center: Navigation Links */}
    <nav className="flex-1 flex justify-center space-x-8 items-center ml-4">
    {[
        { to: "/admin-dash", label: "Dashboard" },
        { to: "", label: "About Us" },
        { to: "", label: "Our Services" },
        { to: "", label: "Contact Us" },
    ].map(({ to, label }) => (
        <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
            `relative font-medium text-black transition duration-300 pb-1
            ${isActive ? "after:w-full after:scale-100" : "after:w-0 after:scale-0"}
            after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-blue-500 after:transition-transform after:duration-300 after:origin-left
            hover:after:w-full hover:after:scale-100 font-jura
            hover:text-blue-500`
        }
        >
        {label}
        </NavLink>
    ))}
    </nav>
      {/* Right: Icons + Dropdown Button */}
      <div className="flex items-center space-x-5 pr-6 relative" ref={dropdownRef}>
        {/* Settings Link */}
        {/* <NavLink
          to="/settings"
          className={({ isActive }) =>
            `relative text-black hover:text-red-600 group text-xl p-2 transition
            ${isActive ? "after:w-full" : ""}`
          }
        >
          <FaCog />
          <span className="absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full"></span>
        </NavLink> */}

        {/* Notifications Link */}
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `relative text-black hover:text-blue-600 group text-xl p-2 transition
            ${isActive ? "after:w-full" : ""}`
          }
        >
          <FaBell />
          <span className="absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"></span>
        </NavLink>
      </div>
    </header>
  );
};

export default AdminNav;
