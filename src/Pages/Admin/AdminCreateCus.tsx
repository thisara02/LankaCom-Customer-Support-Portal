import { useState } from "react";
import Sidebar from "../../components/AdminSide";
import Navbar from "../../components/AdminNav";
import {
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

const AdminCreateCus = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    mobile: "",
    company: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validations
    if (
      !formData.name ||
      !formData.email ||
      !formData.designation ||
      !formData.mobile ||
      !formData.company ||
      !formData.address ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields.",
      });
      return;
    }

    if (formData.password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 8 characters long.",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match.",
      });
      return;
    }

    // Submit logic here (e.g., API call)
    console.log("Submitted data:", formData);

    // Show success popup
    Swal.fire({
      icon: "success",
      title: "User Created Successfully!",
      showConfirmButton: false,
      timer: 1000, // Auto disappear in 1 second
    });

    // Clear the form
    setFormData({
      name: "",
      email: "",
      designation: "",
      mobile: "",
      company: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
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

        <div className="flex-1 overflow-y-auto bg-gray-100 p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 font-jura">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <UserIcon className="h-8 w-8 text-blue-500" />
              Create Customer Profile
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black bg-white"
            >
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>
                <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Company
                </label>
                <BuildingOfficeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Designation
                </label>
                <BriefcaseIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="text"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Mobile
                </label>
                <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="text"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Address
                </label>
                <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Password
                </label>
                <KeyIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-10 right-3 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Confirm Password
                </label>
                <KeyIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-10 right-3 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
                >
                  Create Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateCus;
