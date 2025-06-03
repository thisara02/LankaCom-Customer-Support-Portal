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
  TrashIcon,
} from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

interface Customer {
  id: string;
  name: string;
  email: string;
  designation: string;
  mobile: string;
  company: string;
  address: string;
}

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

  // Dummy data for customers
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      designation: "Manager",
      mobile: "1234567890",
      company: "Company A",
      address: "123 Main St",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      designation: "Engineer",
      mobile: "9876543210",
      company: "Company A",
      address: "456 Oak St",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      designation: "Analyst",
      mobile: "5555555555",
      company: "Company B",
      address: "789 Pine St",
    },
  ]);

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

    // Add new customer to the list (replace with API call in real-world)
    const newCustomer: Customer = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      designation: formData.designation,
      mobile: formData.mobile,
      company: formData.company,
      address: formData.address,
    };

    setCustomers((prev) => [...prev, newCustomer]);

    Swal.fire({
      icon: "success",
      title: "User Created Successfully!",
      showConfirmButton: false,
      timer: 1000,
    });

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
const handleDeleteCustomer = (id: string) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This user will be permenantly deleted.This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      const cancelButton = Swal.getCancelButton();

      // Inline styles for confirm button
      if (confirmButton) {
        confirmButton.style.backgroundColor = "#dc2626"; // Tailwind red-600
        confirmButton.style.color = "#ffffff";
        confirmButton.style.border = "none";
        confirmButton.style.padding = "8px 16px";
        confirmButton.style.borderRadius = "4px";
        confirmButton.style.cursor = "pointer";
      }

      // Inline styles for cancel button
      if (cancelButton) {
        cancelButton.style.backgroundColor = "#6b7280"; // Tailwind gray-500
        cancelButton.style.color = "#ffffff";
        cancelButton.style.border = "none";
        cancelButton.style.padding = "8px 16px";
        cancelButton.style.borderRadius = "4px";
        cancelButton.style.cursor = "pointer";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // Remove customer (replace with API call)
      setCustomers((prev) => prev.filter((c) => c.id !== id));

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Customer has been deleted.",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  });
};


  // Group customers by company
  const groupedCustomers = customers.reduce((acc, customer) => {
    if (!acc[customer.company]) {
      acc[customer.company] = [];
    }
    acc[customer.company].push(customer);
    return acc;
  }, {} as Record<string, Customer[]>);

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
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 font-jura mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <UserIcon className="h-8 w-8 text-blue-500" />
              Create Customer Profile
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
            >
              {/* Form Fields */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>
                <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  value={formData.company}
                  onChange={handleChange}
                  required
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
                  value={formData.designation}
                  onChange={handleChange}
                  required
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
                  value={formData.mobile}
                  onChange={handleChange}
                  required
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
                  value={formData.address}
                  onChange={handleChange}
                  required
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
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
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
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

          {/* Customers Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 font-jura">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Current Customers
            </h2>
            {Object.entries(groupedCustomers).map(([company, companyCustomers]) => (
              <div key={company} className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-2 ">
                  {company}
                </h3>
                <div className="space-y-2">
                  {companyCustomers.map((customer) => (
                    <div
                      key={customer.id}
                      className="flex justify-between items-center p-4 border rounded bg-gray-50"
                    >
                      <div>
                        <p className="font-medium text-black">{customer.name}</p>
                        <p className="text-sm text-gray-600">{customer.email}</p>
                        <p className="text-sm text-gray-600">
                          {customer.designation}, {customer.mobile}
                        </p>
                        <p className="text-sm text-gray-600">
                          {customer.address}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteCustomer(customer.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateCus;
