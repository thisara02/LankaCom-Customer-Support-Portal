import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";


type Ticket = {
  id: string;
  ticketType: "Service Request" | "Faulty Ticket";
  ticketCreatedBy: string;
  assignedEngineer: string;
  inquiryType: string;
  description: string;
  createdAt: string;
  status: string;
};

const Pending = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  // Sample tickets data (replace with your actual data source)
  const tickets: Ticket[] = [
    {
      id: "#784562",
      ticketType: "Faulty Ticket",
      ticketCreatedBy: "Alice Johnson",
      assignedEngineer: "Engineer A",
      inquiryType: "Network Issue",
      description: "User cannot access VPN.",
      createdAt: "2025-05-28T10:00:00Z",
      status: "Open",
    },
    {
      id: "#125896",
      ticketType: "Service Request",
      ticketCreatedBy: "Bob Smith",
      assignedEngineer: "Engineer B",
      inquiryType: "Software Installation",
      description: "Need to install new version of antivirus.",
      createdAt: "2025-05-27T15:30:00Z",
      status: "Open",
    },
    {
      id: "#458965",
      ticketType: "Faulty Ticket",
      ticketCreatedBy: "Charlie Davis",
      assignedEngineer: "Engineer C",
      inquiryType: "Firewall down or unreachable",
      description: "Firewall is not reachable since last night.",
      createdAt: "2025-05-27T11:00:00Z",
      status: "Open",
    },
    {
      id: "#785236",
      ticketType: "Faulty Ticket",
      ticketCreatedBy: "Diana Evans",
      assignedEngineer: "Engineer D",
      inquiryType: "VPN connection failure",
      description: "Users unable to connect to VPN intermittently.",
      createdAt: "2025-05-26T09:45:00Z",
      status: "Open",
    },
  ];

  // Function to get border color based on ticketType
  const getBorderColorClass = (ticketType: string) => {
    switch (ticketType) {
      case "Service Request":
        return "border-green-500";
      case "Faulty Ticket":
        return "border-blue-500";
      default:
        return "border-gray-200";
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-auto">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Tickets Grid */}
        <main className="p-6 flex-1 overflow-auto font-jura">
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md mx-10 mt-5">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4 inline-block pb-2 font-jura mb-10">
              Ongoing Tickets 
            </h1>
          

          {tickets.length === 0 ? (
            <p>No ongoing tickets found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <div
                  onClick={() => navigate("/viewon")} // Navigate on click
                  key={ticket.id}
                  className={`bg-white text-black shadow-md rounded-lg p-6 border-l-8 ${getBorderColorClass(
                    ticket.ticketType
                  )}`}
                >
                    
                  <h2 className="text-xl font-bold mb-1 flex items-center justify-between">
                  <span>{ticket.id} - {ticket.inquiryType}</span>
                  <FaTicketAlt className="text-2xl" />
                </h2>
                  <p className="text-l font-bold text-gray-600 mb-3">{ticket.ticketType}</p>
                  <p className="text-gray-700 mb-3">{ticket.description}</p>

                  <div className="text-sm text-gray-500 mb-1">
                    <span className="font-semibold">Created By:</span> {ticket.ticketCreatedBy}
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    <span className="font-semibold">Created At:</span>{" "}
                    {new Date(ticket.createdAt).toLocaleString()}
                  </div>
                  <div className="text-sm mb-3">
                    <span className="font-semibold text-red-600">Assigned Engineer:</span>{" "}
                    <span className="text-red-600">{ticket.assignedEngineer}</span>
                  </div>

                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      ticket.status === "Open"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {ticket.status}
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pending;
