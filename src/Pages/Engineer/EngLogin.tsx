import { FaEnvelope, FaLock } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import SecurityImage from "../../assets/eng-logo.jpg";
import BgImage from "../../assets/engback.jpg"; 
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";// Update to your background image path

const EngLogin = () => {
    const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
      className="flex h-screen w-screen"
    >
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Fullscreen Card */}
      <div className="flex w-full h-full lg:h-[75%] lg:w-[90%] xl:w-[60%] 2xl:w-[60%] bg-white  rounded-lg shadow-lg overflow-hidden">
        {/* Left Panel - Login */}
        <div className="w-full lg:w-3/5 flex items-center justify-center p-4 bg-white">
          <div className="w-full max-w-md">
            <div className="flex justify-center mt-4 pb-2">
              <img src={Logo} alt="LankaCom" className="h-14" />
            </div>

            <p className="text-center text-xl text-green-500 font-semibold pt-4 pb-4 font-jura">
              Cyber Security Operations Portal
            </p>
            <h2 className="text-center text-3xl font-jura font-bold text-gray-800 pb-4">
               Engineer Login Portal
            </h2>
            <p className="text-left text-sm text-gray-500 mb-6 font-jura">
              Please sign in to continue
            </p>

            {/* Form */}
            <form className="space-y-4 ">
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 font-jura"
                />
              </div>

              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 font-jura"
                />
              </div>

              <button
                type="button"
                onClick={() => navigate("/eng-dash")}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition font-jura"
                >
                Login
                </button>
            </form>

            <div className="text-center mt-4">
              <a href="/eng-forgot" className="text-green-900 text-sm hover:underline font-jura">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={SecurityImage}
            alt="Security"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default EngLogin;
