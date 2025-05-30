import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";

type Ticket = {
  id: string;
  subject: string;
  ticketType: "Service Request" | "Faulty Ticket";
  description: string;
  createdDate:string;
  assignedEngineer?: string;
  status: "Closed" | "Pending" | "Ongoing";
};

const History = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const navigate = useNavigate();

  const tickets: Ticket[] = [
    {
      id: "#123456",
      subject: "VPN not working",
      ticketType: "Faulty Ticket",
      description: "Unable to connect to VPN from home.",
      createdDate:"2020/05/29 19:12",
      assignedEngineer: "Engineer A",
      status: "Ongoing",
    },
    {
      id: "#789012",
      subject: "Install antivirus",
      ticketType: "Service Request",
      description: "Request to install McAfee antivirus.",
      createdDate:"2020/05/29 19:12",
      status: "Pending",
    },
    {
      id: "#456789",
      subject: "Replace broken keyboard",
      ticketType: "Faulty Ticket",
      description: "Keyboard keys are not working properly.",
      createdDate:"2020/05/29 19:12",
      assignedEngineer: "Engineer B",
      status: "Closed",
    },
        {
      id: "#123456",
      subject: "VPN not working",
      ticketType: "Faulty Ticket",
      description: "Unable to connect to VPN from home.",
      createdDate:"2020/05/29 19:12",
      assignedEngineer: "Engineer A",
      status: "Ongoing",
    },
    {
      id: "#789012",
      subject: "Install antivirus",
      ticketType: "Service Request",
      description: "Request to install McAfee antivirus.",
      createdDate:"2020/05/29 19:12",
      status: "Pending",
    },
    {
      id: "#456789",
      subject: "Replace broken keyboard",
      ticketType: "Faulty Ticket",
      description: "Keyboard keys are not working properly.",
      createdDate:"2020/05/29 19:12",
      assignedEngineer: "Engineer B",
      status: "Closed",
    },
  ];

  const getBorderColor = (status: string) => {
    switch (status) {
      case "Closed":
        return "border-red-500";
      case "Pending":
        return "border-yellow-500";
      case "Ongoing":
        return "border-purple-500";
      default:
        return "border-gray-300";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Closed":
        return "text-red-600";
      case "Pending":
        return "text-yellow-600";
      case "Ongoing":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-6 flex-1 overflow-auto font-jura">
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md mx-10 mt-5">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4  inline-block pb-2 font-jura mb-10">
              All Tickets
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => navigate("/view-history")}
                  className={`bg-white p-6 rounded-lg shadow border-l-8 ${getBorderColor(
                    ticket.status
                  )} flex justify-between items-start`}
                >
                  {/* Left - Ticket Details */}
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <FaTicketAlt className="h-5 w-5 text-blakc" />
                      Ticket ID: {ticket.id}
                    </p>
                    <p className="text-md font-medium text-gray-700">{ticket.subject}</p>
                    <p className="text-sm text-gray-600 font-semibold">Ticket Type : {ticket.ticketType}</p>
                    <p className="text-sm text-gray-700">Description : {ticket.description}</p>
                    <p className="text-sm text-gray-700">Created date & time : {ticket.createdDate}</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Assigned Engineer:</span>{" "}
                      {ticket.status === "Pending" ? "Not Assigned" : ticket.assignedEngineer}
                    </p>
                  </div>

                  {/* Right - Status */}
                  <div className="text-right">
                    <span
                      className={`text-lg font-semibold px-3 py-1 rounded-full bg-gray-100  ${getStatusColor(
                        ticket.status
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default History;
