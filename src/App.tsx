import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Settings from "./Pages/Settings";
import Notifications from "./Pages/Notifications";
import Landing from "./Pages/Landing";
import Pending from "./Pages/PendingRequests";
import History from "./Pages/RequestHistory";
import ViewFT from "./Pages/ViewFT"
import CreateSR from "./Pages/CreateSR"
import CreateFT from "./Pages/CreateFT"
import ViewSR from "./Pages/ViewSR"
import ViewOngoing from "./Pages/ViewOngoing"
import CusProfile from "./Pages/Profile"
import ViewTicket from "./Pages/ViewTicket"


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
      
    </Routes>
    </AnimatePresence>
  );
};

export default App;
