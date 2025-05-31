import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./Pages/Customer/Login";
import Home from "./Pages/Customer/Home";
import About from "./Pages/Customer/About";
import Contact from "./Pages/Customer/Contact";
import Services from "./Pages/Customer/Services";
import Settings from "./Pages/Customer/Settings";
import Notifications from "./Pages/Customer/Notifications";
import Landing from "./Pages/Customer/Landing";
import Pending from "./Pages/Customer/PendingRequests";
import History from "./Pages/Customer/RequestHistory";
import ViewFT from "./Pages/Customer/ViewFT"
import CreateSR from "./Pages/Customer/CreateSR"
import CreateFT from "./Pages/Customer/CreateFT"
import ViewSR from "./Pages/Customer/ViewSR"
import ViewOngoing from "./Pages/Customer/ViewOngoing"
import CusProfile from "./Pages/Customer/Profile"
import ViewTicket from "./Pages/Customer/ViewTicket"
import AdminLogin from "./Pages/Admin/AdminLogin"
import ForgotPassword from "./Pages/Customer/ForgotPassword"
import ResetPass from "./Pages/Customer/ResetPassword"
import AdminDash from "./Pages/Admin/AdminDashboard"


const App: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
    <Routes>
      {/* Default route redirects to /home */}
      <Route path="/" element={<Navigate to="/land" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />    
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/land" element={<Landing />} />
      <Route path="/pending" element={<Pending />} />
      <Route path="/history" element={<History />} />
      <Route path="/view-ft" element={<ViewFT />} />
      <Route path="/view-sr" element={<ViewSR />} />
      <Route path="/create-sr" element={<CreateSR />} />
      <Route path="/create-ft" element={<CreateFT />} />
      <Route path="/viewon" element={<ViewOngoing />} />
      <Route path="/profile" element={<CusProfile />} />
      <Route path="/view-history" element={<ViewTicket />} />
      <Route path="/forgot-pass" element={<ForgotPassword />} />
      <Route path="/reset-pass" element={<ResetPass />} />

      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dash" element={<AdminDash />} />

      
      
    </Routes>
    </AnimatePresence>
  );
};

export default App;
