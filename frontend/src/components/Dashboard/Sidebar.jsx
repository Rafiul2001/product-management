import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ className }) => {
  const menuItems = [
    { path: "/admin", label: "Dashboard", icon: "📊" },
    { path: "/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className={className ?? ""}>
      <div className="mb-8 flex items-center gap-2">
        <MdDashboard size={24} />
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center w-full space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Optional: User profile section at bottom */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold">U</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">User Name</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
