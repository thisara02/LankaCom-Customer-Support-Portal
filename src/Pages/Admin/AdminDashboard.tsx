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
    "Tharusha KAnishka"
  ];

  const generateDummyData = () => {
    return engineers.map(() => ({
      ongoing: Math.floor(Math.random() * 10),
      closed: Math.floor(Math.random() * 10)
    }));
  };

  const [ticketData,] = useState(generateDummyData());

  // const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedMonth(parseInt(e.target.value));
  //   setTicketData(generateDummyData());
  // };

  // const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedYear(parseInt(e.target.value));
  //   setTicketData(generateDummyData());
  // };

  const chartData = {
  labels: engineers,
  datasets: [
    {
      label: "Ongoing",
      data: ticketData.map((e) => e.ongoing),
      backgroundColor: "rgba(75, 192, 192, 0.7)"  // purple
    },
    {
      label: "Closed",
      data: ticketData.map((e) => e.closed),
      backgroundColor: "rgba(255, 99, 132, 0.7)" // red
    }
  ]
};




  const pendingTickets = {
    service: [
      {
        id: 10001,
        subject: "System Crash - Awaiting response",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "Crash on systems while opening the forti-client",
        link: "/view-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800"
      },
      {
        id: 10002,
        subject: "Email Issue - Awaiting response",
        createdBy: "Tharusha Kanishka",
        type: "Service Request",
        description: "Unable to send or receive emails",
        link: "/view-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800"
      },
      {
        id: 10003,
        subject: "Printer Setup - Awaiting response",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "New printer setup required in HR department",
        link: "/view-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800"
      }
    ],
    faulty: [
      {
        id: 20001,
        subject: "Network Failure - Needs investigation",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Network down in second floor; faulty switch suspected",
        link: "/view-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800"
      },
      {
        id: 20002,
        subject: "Printer Not Working - Needs fixing",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Printer jams frequently in finance department",
        link: "/view-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800"
      },
      {
        id: 20003,
        subject: "Monitor Flickering - Needs checking",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Monitor display flickering at random times",
        link: "/view-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800"
      }
    ]
  };

  const ongoingTickets = {
    service: [
      {
        id: 30001,
        subject: "Firewall Configuration - In progress",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "Add New Firewall Policy for HR group",
        assignedEngineer: "Pasan Malith",
        link: "/create-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800"
      },
      {
        id: 30002,
        subject: "VPN Setup - In progress",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "Setup VPN access for remote staff",
        assignedEngineer: "Pasan Malith",
        link: "/create-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800"
      },
      {
        id: 30003,
        subject: "Database Backup - In progress",
        createdBy: "Shammi Herath",
        type: "Service Request",
        description: "Implement automated database backups",
        assignedEngineer: "Pasan Malith",
        link: "/create-sr",
        borderColor: "border-green-500",
        textColor: "text-green-800"
      }
    ],
    faulty: [
      {
        id: 40001,
        subject: "Router reboot issue - In progress",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Router not responding after restart from dashboard",
        assignedEngineer: "Pasan Malith",
        link: "/create-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800"
      },
      {
        id: 40002,
        subject: "Switch overheating - In progress",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "Switch in server room overheating frequently",
        assignedEngineer: "Pasan Malith",
        link: "/create-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800"
      },
      {
        id: 40003,
        subject: "PC Power Issue - In progress",
        createdBy: "Shammi Herath",
        type: "Faulty Ticket",
        description: "PC power supply unit unstable, needs replacement",
        assignedEngineer: "Pasan Malith",
        link: "/create-ft",
        borderColor: "border-blue-500",
        textColor: "text-blue-800"
      }
    ]
  };

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
          {/* Chart */}
          <div className="p-4 font-jura w-4/5 mx-auto ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 mt-5">
              <h2 className="text-3xl font-bold text-gray-800 text-center w-full">Ticket Overview</h2>
              {/* <div className="flex gap-4">
                <select
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  className="px-3 py-2 border border-gray-300 rounded"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {new Date(0, i).toLocaleString("default", { month: "long" })}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="px-3 py-2 border border-gray-300 rounded"
                >
                  {[2023, 2024, 2025].map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div> */}
            </div>
            <div className="bg-white rounded shadow p-4">
              <Bar data={chartData}/>
            </div>
          </div>

          {/* Dashboard Cards */}
          <div className="p-4 px-20 pt-10 font-jura flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-96">
              {[
                { label: "All Pending Ticket Count", count: 4 },
                { label: "All Ongoing Ticket Count", count: 12 },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                    {item.label}
                  </h2>
                  <p className="text-gray-600 text-5xl text-center">{item.count}</p>
                </div>
              ))}
            </div>
          </div>


          {/* Pending & Ongoing Tickets */}
          <div className="flex flex-col md:flex-row gap-6 px-20 mt-8 pb-10 font-jura">
            <div className="w-full md:w-1/2 justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">All Pending Tickets</h2>
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setPendingTab("service")}
                  className={`px-4 py-2 rounded font-medium ${
                    pendingTab === "service" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  Service Requests
                </button>
                <button
                  onClick={() => setPendingTab("faulty")}
                  className={`px-4 py-2 rounded font-medium ${
                    pendingTab === "faulty" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
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
                        Ticket #{ticket.id}
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

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">All Ongoing Tickets</h2>
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setOngoingTab("service")}
                  className={`px-4 py-2 rounded font-medium ${
                    ongoingTab === "service" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  Service Requests
                </button>
                <button
                  onClick={() => setOngoingTab("faulty")}
                  className={`px-4 py-2 rounded font-medium ${
                    ongoingTab === "faulty" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
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
                        Ticket #{ticket.id}
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
