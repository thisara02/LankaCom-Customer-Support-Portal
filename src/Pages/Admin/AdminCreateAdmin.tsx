import { useState } from "react";
import Sidebar from "../../components/AdminSide";
import Navbar from "../../components/AdminNav";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { UserIcon, DevicePhoneMobileIcon, EnvelopeIcon, KeyIcon, TrashIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface Admin {
  id: number;
  name: string;
  email: string;
  mobile: string;
}

const AdminCreateAdmin = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [admins, setAdmins] = useState<Admin[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email,mobile, password, confirmPassword } = formData;

    if (!name || !email || !mobile || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all required fields.",
        timer: 1000,
        showConfirmButton: false,
      });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password must be at least 8 characters long.",
        timer: 1000,
        showConfirmButton: false,
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Passwords do not match.",
        timer: 1000,
        showConfirmButton: false,
      });
      return;
    }

    // Here you'd typically send the data to your backend to create the engineer.
    // For demonstration, we'll just add it locally.
    const newAdmin: Admin = {
      id: Date.now(), // For demonstration, using timestamp as unique ID.
      name,
      email,
      mobile,
    };

    setAdmins((prev) => [...prev, newAdmin]);

    Swal.fire({
      icon: "success",
      title: "Admin Created Successfully!",
      timer: 1000,
      showConfirmButton: false,
    });

    setFormData({
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    });
  };

const handleDeleteAdmin = (id: number) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This engineer will be permanently deleted! This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Delete!",
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
      setAdmins((prev) => prev.filter((admin) => admin.id !== id));

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Admin has been deleted.",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  });
};



  // (Optional) useEffect to fetch data from API
  // useEffect(() => {
  //   // fetch engineers and setEngineers(...)
  // }, []);

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
          {/* Form Section */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 font-jura mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <UserIcon className="h-8 w-8 text-green-500" />
              New Admin Profile Creation
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              {/* Form fields same as before */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Full Name</label>
                <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Email</label>
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Mobile</label>
                <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type="text"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Password</label>
                <KeyIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-10 right-3 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>

              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Confirm Password</label>
                <KeyIcon className="h-5 w-5 text-gray-400 absolute left-3 top-11 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-10 right-3 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition duration-300"
                >
                  Create Admin Profile
                </button>
              </div>
            </form>
          </div>

          {/* Engineers List Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 font-jura">
            <h3 className="text-xl font-bold mb-4 text-green-600">All Admins</h3>
            {admins.length === 0 ? (
              <p className="text-gray-500">No Admins registered yet.</p>
            ) : (
              <ul className="space-y-4">
                {admins.map((admin) => (
                  <li
                    key={admin.id}
                    className="flex items-center justify-between border-b pb-2 text-gray-700"
                  >
                    <div>
                      <p className="font-semibold">{admin.name}</p>
                      <p className="text-sm">{admin.email} | {admin.mobile}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteAdmin(admin.id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <TrashIcon className="h-5 w-5" />
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateAdmin;
