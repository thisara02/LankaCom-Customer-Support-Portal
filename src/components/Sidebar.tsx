import React from "react";
import { FaTachometerAlt, FaHistory} from "react-icons/fa";
import Profile from "../assets/test-profile.jpg";
import { useNavigate } from "react-router-dom";
import { FaTicket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

// Sample user data — you can replace these with real props or context
const user = {
  name: "Thisara Madusanka",
  email: "thisaram@lankacom.net",
  company:"Lanka Communication Services",
};


interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to logout?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#000000",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, logout",
        cancelButtonText: "Cancel",
        customClass: {
        popup: "swal2-text-black",
        confirmButton: "swal2-confirm-button2",
        cancelButton: "swal2-cancel-button"}

      }).then((result) => {
        if (result.isConfirmed) {
          // Perform logout logic (e.g., clear auth tokens, call API, etc.)
          // Then navigate to the login page
          navigate("/login");
        }
      });
    };
  return (
    <aside
      className={`bg-[#F3F4F6] h-screen border-r-4 border-blackshadow-md transition-all duration-300 ${
        isOpen ? "w-60" : "w-0 md:w-70"
      } overflow-hidden`}
    >
      <div className="h-full flex flex-col p-2">
        {/* User Profile */}
        <div className="flex items-center space-x-4 mb-6 pb-4 border-b pt-10 justify-center">
          <div>
        <img
            src={Profile}
            alt="User"
            className="w-16 h-16 rounded-full object-cover border border-gray-300 mx-auto cursor-pointer mb-2"
            onClick={() => navigate("/profile")}
        />
        
            <p className="font-semibold text-[#000000] text-base font-jura text-center">{user.name}</p>
            {/* <p className="text-gray-500 text-sm">{user.email}</p> */}
            <p className="text-[#000000] text-sm font-jura">{user.company}</p>
            
        </div>
        </div>

        
        {/* Navigation Links */}
        <nav className="space-y-7 pt-5 pl-5">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `relative flex items-center space-x-3 text-[#000000] transition font-jura
              hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300
              ${isActive ? 'after:w-full text-red-600' : 'after:w-0 group-hover:after:w-full'}`
            }
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/pending"
            className={({ isActive }) =>
              `relative flex items-center space-x-3 text-[#000000] transition font-jura
              hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300
              ${isActive ? 'after:w-full text-red-600' : 'after:w-0 group-hover:after:w-full'}`
            }
          >
            <FaTicket />
            <span>Ongoing Requests Update</span>
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `relative flex items-center space-x-3 text-[#000000] transition font-jura
              hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300
              ${isActive ? 'after:w-full text-red-600' : 'after:w-0 group-hover:after:w-full'}`
            }
          >
            <FaHistory />
            <span>Request History</span>
          </NavLink>
        </nav>

        <div className="mt-auto pt-6">
          <button 
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200 font-jura"
          onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
