import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BannerImage from "../assets/banner.jpg";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar (fixed size) */}
      <div className="flex-shrink-0">
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col h-screen min-h-0">
        {/* Navbar (fixed height) */}
        <div className="flex-shrink-0">
          <Navbar toggleSidebar={toggleSidebar} />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          {/* Banner */}
          <div
            className="w-full h-80 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${BannerImage})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex pt-20 justify-left pl-8">
              <h1 className="text-white text-4xl font-bold text-left font-jura">
                Welcome to<br />Lankacom Cyber Security <br />Support Portal
              </h1>
            </div>
          </div>

          {/* Cards */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-8 px-20 pt-10 font-jura">
            <div className="bg-white rounded-xl shadow-md p-10 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Pending SR Count</h2>
              <p className="text-gray-600 text-5xl text-center">3</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-10 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Ongoing SR Count</h2>
              <p className="text-gray-600 text-5xl text-center">2</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-10 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Balance SR Count</h2>
              <p className="text-gray-600 text-5xl text-center">5</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-10 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Used SR Count</h2>
              <p className="text-gray-600 text-5xl text-center">14</p>
            </div>
          </div>

          {/* Pending & Ongoing Tickets */}
          <div className="flex flex-col md:flex-row gap-6 px-20 mt-8 pb-10">
            {/* Left: Pending */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pending Tickets</h2>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border-l-4 border-yellow-500 p-4 rounded shadow">
                    <h3 className="text-lg font-semibold text-yellow-800">Ticket #{i + 10001}</h3>
                    <p className="text-sm text-yellow-700">Subject: System Crash - Awaiting response</p>
                    <p className="text-sm text-yellow-700">SR Created By: Shammi Herath</p>
                    <p className="text-sm text-yellow-700">Description : There is a crash on systems while opening the forti-client</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Ongoing */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Tickets</h2>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-l-4 border-blue-500 p-4 rounded shadow">
                    <h3 className="text-lg font-semibold text-blue-800">Ticket #{i + 20001}</h3>
                    <p className="text-sm text-blue-700">Subject: Firewall Configuration - In progress</p>
                    <p className="text-sm text-blue-700">SR Created By: Shammi Herath</p>
                    <p className="text-sm text-blue-700">Description: Add New Firewall Policiy allowing youtube access to the HR group</p>
                    <p className="text-sm text-red-600">Assigned Engineer : Pasan Malith</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
