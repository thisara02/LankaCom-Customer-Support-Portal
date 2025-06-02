import { useState } from "react";
import Sidebar from "../../components/AdminSide";
import Navbar from "../../components/AdminNav";
import { Link } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDash = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [pendingTab, setPendingTab] = useState<"service" | "faulty">("service");
  const [ongoingTab, setOngoingTab] = useState<"service" | "faulty">("service");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const engineers = [
    "Sam Chandrasekara",
    "Pasindu Prabashwara",
    "Pasan Malith",
    "Chamal Jinendra",
    "Madura Jayasundara",
    "Thisara Madusanka",
    "Shammi Dilshan",
    "Tharusha Kanishka"
  ];

  // Current month/year
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const isCurrentMonth = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  };

  const pendingTickets = {
    service: [
      {
        id: 10001,
        subject: "System Crash - Awaiting response",
        CustomerName: "Design Studio",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "Crash on systems while opening the forti-client",
        link: "/view-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800",
        createdAt: "2025-05-01"
      },
      {
        id: 10002,
        subject: "Email Issue - Awaiting response",
        CustomerName: "Wavenet",
        createdBy: "Tharusha Kanishka",
        type: "Service Request",
        description: "Unable to send or receive emails",
        link: "/view-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800",
        createdAt: "2025-05-05"
      },
      {
        id: 10003,
        subject: "Printer Setup - Awaiting response",
        CustomerName: "ACBT",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "New printer setup required in HR department",
        link: "/view-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800",
        createdAt: "2025-05-07"
      }
    ],
    faulty: [
      {
        id: 20001,
        subject: "Network Failure - Needs investigation",
        CustomerName: "Design Studio",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Network down in second floor; faulty switch suspected",
        link: "/view-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800",
        createdAt: "2025-05-10"
      },
      {
        id: 20002,
        subject: "Printer Not Working - Needs fixing",
        CustomerName: "Design Studio",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Printer jams frequently in finance department",
        link: "/view-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800",
        createdAt: "2025-05-12"
      },
      {
        id: 20003,
        subject: "Monitor Flickering - Needs checking",
        CustomerName: "Design Studio",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Monitor display flickering at random times",
        link: "/view-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800",
        createdAt: "2025-05-15"
      }
    ]
  };

  const ongoingTickets = {
    service: [
      {
        id: 30001,
        CustomerName: "Design Studio",
        subject: "Firewall Configuration - In progress",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "Add New Firewall Policy for HR group",
        assignedEngineer: "Thisara Madusanka",
        link: "/create-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800",
        createdAt: "2025-06-10"
      },
      {
        id: 30002,
        CustomerName: "Design Studio",
        subject: "VPN Setup - In progress",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "Setup VPN access for remote staff",
        assignedEngineer: "Tharusha Kanishka",
        link: "/create-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800",
        createdAt: "2025-06-12"
      },
      {
        id: 30003,
        CustomerName: "Design Studio",
        subject: "Database Backup - In progress",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "Implement automated database backups",
        assignedEngineer: "Pasan Malith",
        link: "/create-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800",
        createdAt: "2025-06-18"
      }
    ],
    faulty: [
      {
        id: 40001,
        CustomerName: "Design Studio",
        subject: "Router reboot issue - In progress",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Router not responding after restart from dashboard",
        assignedEngineer: "Pasan Malith",
        link: "/create-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800",
        createdAt: "2025-06-20"
      },
      {
        id: 40002,
        CustomerName: "Design Studio",
        subject: "Switch overheating - In progress",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Switch in server room overheating frequently",
        assignedEngineer: "Tharusha Kanishka",
        link: "/create-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800",
        createdAt: "2025-06-22"
      },
      {
        id: 40003,
        CustomerName: "Design Studio",
        subject: "PC Power Issue - In progress",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "PC power supply unit unstable, needs replacement",
        assignedEngineer: "Pasan Malith",
        link: "/create-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800",
        createdAt: "2025-06-25"
      }
    ]
  };

  // Compute chart data
  const engineerStats = engineers.map((engineer) => {
    const ongoingCount = ongoingTickets.service
      .concat(ongoingTickets.faulty)
      .filter(
        (ticket) =>
          ticket.assignedEngineer === engineer && isCurrentMonth(ticket.createdAt)
      ).length;

    // Example: no real closed data yet
    const closedCount = 0;

    return {
      engineer,
      ongoing: ongoingCount,
      closed: closedCount
    };
  });

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <div className="flex-shrink-0">
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      <div className="flex-1 flex flex-col h-screen min-h-0">
        <div className="flex-shrink-0">
          <Navbar toggleSidebar={toggleSidebar} />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100">
          {/* Chart Section - Split */}
          <div className="p-4 font-jura w-8/9 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4 mt-5">
              <h2 className="text-3xl font-bold text-gray-800 text-center w-full">Engineer Ticket Overview </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* Ongoing Tickets Chart */}
              <div className="flex-1 bg-white rounded shadow p-4">
                <h3 className="text-lg font-semibold text-center mb-2 text-gray-700">Ongoing Tickets</h3>
                <Bar
                  data={{
                    labels: engineers,
                    datasets: [
                      {
                        label: "Ongoing Tickets",
                        data: engineerStats.map((e) => e.ongoing),
                        backgroundColor: "rgba(75, 192, 192, 0.7)"
                      }
                    ]
                  }}
                />
              </div>

              {/* Closed Tickets Chart */}
              <div className="flex-1 bg-white rounded shadow p-4">
                <h3 className="text-lg font-semibold text-center mb-2 text-gray-700">Closed Tickets(This Month)</h3>
                <Bar
                  data={{
                    labels: engineers,
                    datasets: [
                      {
                        label: "Closed Tickets",
                        data: engineerStats.map((e) => e.closed),
                        backgroundColor: "rgba(255, 99, 132, 0.7)"
                      }
                    ]
                  }}
                />
              </div>
            </div>
          </div>

          {/* Dashboard Cards */}
          <div className="p-4 px-20 pt-10 font-jura flex flex-col sm:flex-row justify-center gap-10">
            <div className="bg-white rounded-xl shadow-md p-10 w-full sm:w-1/2" style={{ backgroundColor: "#FBDB93" }}>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                All Pending Ticket Count
              </h2>
              <p className="text-gray-600 text-5xl text-center">4</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-10 w-full sm:w-1/2" style={{ backgroundColor: "#7AE2CF" }}>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                All Ongoing Ticket Count
              </h2>
              <p className="text-gray-600 text-5xl text-center">12</p>
            </div>
          </div>

          {/* Pending & Ongoing Tickets */}
          <div className="flex flex-col md:flex-row gap-6 px-20 mt-8 pb-10 font-jura">
            {/* Pending */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">All Pending Tickets</h2>
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setPendingTab("service")}
                  className={`px-4 py-2 rounded font-medium ${pendingTab === "service" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                  Service Requests
                </button>
                <button
                  onClick={() => setPendingTab("faulty")}
                  className={`px-4 py-2 rounded font-medium ${pendingTab === "faulty" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                  Faulty Tickets
                </button>
              </div>

              <div className="space-y-4">
                {pendingTickets[pendingTab].map((ticket) => (
                  <Link to={ticket.link} key={ticket.id}>
                    <div className={`border-l-4 ${ticket.borderColor} p-4 rounded shadow bg-white hover:bg-gray-50 mt-5`}>
                      <h3 className={`flex items-center gap-2 font-semibold ${ticket.textColor}`}>
                        <FaTicketAlt className="h-5 w-5" />
                        Ticket #{ticket.id} - {ticket.CustomerName}
                      </h3>
                      <p className="text-xl text-black">Subject: {ticket.subject}</p>
                      <p className="text-sm text-black">Ticket Created By: {ticket.createdBy}</p>
                      <p className="text-sm text-black">Ticket Type: {ticket.type}</p>
                      <p className="text-sm text-black">Description: {ticket.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ongoing */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">All Ongoing Tickets</h2>
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setOngoingTab("service")}
                  className={`px-4 py-2 rounded font-medium ${ongoingTab === "service" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                  Service Requests
                </button>
                <button
                  onClick={() => setOngoingTab("faulty")}
                  className={`px-4 py-2 rounded font-medium ${ongoingTab === "faulty" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                  Faulty Tickets
                </button>
              </div>
              <div className="space-y-4">
                {ongoingTickets[ongoingTab].map((ticket) => (
                  <Link to={ticket.link} key={ticket.id}>
                    <div className={`border-l-4 ${ticket.borderColor} p-4 rounded shadow bg-white hover:bg-gray-50 mt-5`}>
                      <h3 className={`flex items-center gap-2 font-semibold ${ticket.textColor}`}>
                        <FaTicketAlt className="h-5 w-5" />
                        Ticket #{ticket.id} - {ticket.CustomerName}
                      </h3>
                      <p className="text-xl text-black">Subject: {ticket.subject}</p>
                      <p className="text-sm text-black">Ticket Created By: {ticket.createdBy}</p>
                      <p className="text-sm text-black">Ticket Type: {ticket.type}</p>
                      <p className="text-sm text-black">Description: {ticket.description}</p>
                      <p className="text-sm text-red-600">Assigned Engineer: {ticket.assignedEngineer}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
