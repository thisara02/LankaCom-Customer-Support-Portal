import { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showOtpSection, setShowOtpSection] = useState(false);

  const handleSendOtp = () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setSuccess("OTP sent! Check your email.");
    setShowOtpSection(true);

    Swal.fire({
      title: "OTP Sent",
      text: "Check your inbox for the password reset OTP and verify it.",
      icon: "info",
      timer: 2000,
      showConfirmButton: false,
      customClass: {
        popup: "swal2-text-black",
        confirmButton: "swal2-confirm-button",
        cancelButton: "swal2-cancel-button",
      },
    });
  };

  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    if (!otp) {
      setError("Please enter the OTP to continue.");
      setSuccess(null);
      return;
    }

    // Simulate OTP verification
    if (otp === "123456") {
      setError(null);
      setSuccess("OTP verified! Proceed to reset your password.");

      setTimeout(() => navigate("/reset-pass"), 2000);

      Swal.fire({
      title: "OTP Verification Sucessfull!",
      text: "OTP Verified Sucessfully",
      icon: "info",
      timer: 1500,
      showConfirmButton: false,
      customClass: {
        popup: "swal2-text-black",
        confirmButton: "swal2-confirm-button",
        cancelButton: "swal2-cancel-button",
      },
    });
      // Here you might want to render the reset password form or redirect
    } else {
      setError("Invalid OTP. Please try again.");
      setSuccess(null);
    }

    
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-tr from-red-600 to-gray-400 font-jura">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Forgot Password
        </h1>
        <p className="text-gray-600 mb-6">
          Enter your email to receive an OTP for password reset.
        </p>

        {/* Email Section */}
        <div className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              readOnly={showOtpSection} // Make readonly after OTP is sent
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${showOtpSection ? "bg-gray-100" : "bg-white"} border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-black`}
            />
          </div>

          {!showOtpSection && (
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              onClick={handleSendOtp}
            >
              Send Verification Code
            </button>
          )}
        </div>

        {/* OTP Section (conditionally shown) */}
        {showOtpSection && (
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Verify OTP</h2>
            <div className="relative">
              <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <button
              type="button"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* Feedback */}
        {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default ForgotPass;
