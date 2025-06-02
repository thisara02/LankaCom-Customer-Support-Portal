import { useState } from "react";
import Sidebar from "../../components/AdminSide";
import Navbar from "../../components/AdminNav";

const AdminProfile = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
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
          
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
