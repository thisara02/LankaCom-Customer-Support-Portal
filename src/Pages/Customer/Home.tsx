import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BannerImage from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen min-h-0">
        {/* Navbar */}
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

          {/* Dashboard Cards */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-8 px-20 pt-10 font-jura">
            {[
              { label: "Pending SR Count", count: 3 },
              { label: "Ongoing SR Count", count: 2 },
              { label: "Balance SR Count", count: 5 },
              { label: "Used SR Count", count: 14 }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {item.label}
                </h2>
                <p className="text-gray-600 text-5xl text-center">{item.count}</p>
              </div>
            ))}
          </div>

          {/* Ticket Sections */}
          <div className="flex flex-col md:flex-row gap-6 px-20 mt-8 pb-10 font-jura">
            {/* Pending Tickets */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pending Tickets</h2>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => {
                  const ticketType = i % 2 === 0 ? "Service Request" : "Faulty Ticket";
                  const route = ticketType === "Service Request" ? "/view-sr" : "/view-ft";
                  const borderColor = ticketType === "Service Request" ? "border-green-500" : "border-blue-500";
                  const titleColor = ticketType === "Service Request" ? "text-green-800" : "text-blue-800";
                  const textColor = ticketType === "Service Request" ? "text-green-700" : "text-blue-700";

                  return (
                    <Link to={route} key={i}>
                      <div className={`border-l-4 ${borderColor} p-4 rounded shadow bg-white hover:bg-gray-50 mt-5`}>
                        <h3 className={`flex items-center gap-2 font-semibold ${titleColor}`}>
                          <FaTicketAlt className="h-5 w-5" />
                          Ticket #{10001 + i}
                        </h3>
                        <p className={`text-sm ${textColor}`}>
                          Subject: {ticketType === "Service Request" ? "System Crash - Awaiting response" : "Network Failure - Needs investigation"}
                        </p>
                        <p className={`text-sm ${textColor}`}>
                          Ticket Created By: Shammi Herath
                        </p>
                        <p className={`text-sm ${textColor}`}>
                          Ticket Type: {ticketType}
                        </p>
                        <p className={`text-sm ${textColor}`}>
                          Description: {ticketType === "Service Request"
                            ? "There is a crash on systems while opening the forti-client"
                            : "Network down in second floor; faulty switch suspected"}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Ongoing Tickets */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Tickets</h2>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => {
                  const ticketType = i % 2 === 0 ? "Faulty Ticket" : "Service Request";
                  const route = ticketType === "Service Request" ? "/create-sr" : "/create-ft";
                  const borderColor = ticketType === "Service Request" ? "border-green-500" : "border-blue-500";
                  const titleColor = ticketType === "Service Request" ? "text-green-800" : "text-blue-800";
                  const textColor = ticketType === "Service Request" ? "text-green-700" : "text-blue-700";

                  return (
                    <Link to={route} key={i}>
                      <div className={`border-l-4 ${borderColor} p-4 rounded shadow bg-white hover:bg-gray-50 mt-5`}>
                        <h3 className={`flex items-center gap-2 text-lg font-semibold ${titleColor}`}>
                          <FaTicketAlt className="h-5 w-5" />
                          Ticket #{20001 + i}
                        </h3>
                        <p className={`text-sm ${textColor}`}>
                          Subject: {ticketType === "Service Request"
                            ? "Firewall Configuration - In progress"
                            : "Router reboot issue - In progress"}
                        </p>
                        <p className={`text-sm ${textColor}`}>
                          Ticket Created By: Shammi Herath
                        </p>
                        <p className={`text-sm ${textColor}`}>
                          Ticket Type: {ticketType}
                        </p>
                        <p className={`text-sm ${textColor}`}>
                          Description: {ticketType === "Service Request"
                            ? "Add New Firewall Policy allowing YouTube access to the HR group"
                            : "Router not responding after restart from dashboard"}
                        </p>
                        <p className="text-sm text-red-600">Assigned Engineer: Pasan Malith</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
