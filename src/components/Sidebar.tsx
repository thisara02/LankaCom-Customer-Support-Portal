import React from "react";
import { FaTachometerAlt, FaHistory} from "react-icons/fa";
import Profile from "../assets/test-profile.jpg";
import { useNavigate } from "react-router-dom";
import { FaTicket } from "react-icons/fa6";

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
    // Optional: Clear auth tokens or local storage here
    // localStorage.removeItem('authToken');

    navigate("/land");
  };
  return (
    <aside
      className={`bg-white h-screen border-r shadow-md transition-all duration-300 ${
        isOpen ? "w-70" : "w-0 md:w-70"
      } overflow-hidden`}
    >
      <div className="h-full flex flex-col p-4">
        {/* User Profile */}
        <div className="flex items-center space-x-4 mb-6 pb-4 border-b pt-10 pb-10">
        <img
            src={Profile}
            alt="User"
            className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div>
            <p className="font-semibold text-gray-800 text-base">{user.name}</p>
            {/* <p className="text-gray-500 text-sm">{user.email}</p> */}
            <p className="text-gray-500 text-sm">{user.company}</p>
            
        </div>
        </div>

        
        {/* Navigation Links */}
        <nav className="space-y-7 pt-5">
          <a
            href="/home"
            className="flex items-center space-x-3 text-gray-800 hover:text-red-600 transition font-jura"
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </a>
          <a
            href="/pending"
            className="flex items-center space-x-3 text-gray-800 hover:text-red-600 transition font-jura"
          >
            <FaTicket />
            <span>Pending Requests</span>
          </a>
          <a
            href="/history"
            className="flex items-center space-x-3 text-gray-800 hover:text-red-600 transition font-jura"
          >
            <FaHistory />
            <span>Request History</span>
          </a>
        </nav>

        <div className="mt-auto pt-6">
          <button 
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
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
