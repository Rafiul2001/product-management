import { useEffect, useState } from "react";
import {
  FaBox,
  FaShoppingCart,
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaExclamationTriangle,
  FaUserCircle,
  FaChartBar,
  FaClipboardList,
  FaUserEdit,
} from "react-icons/fa";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeProducts: 0,
    outOfStock: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
  });

  const [recentProducts, setRecentProducts] = useState([]);
  const [adminInfo, setAdminInfo] = useState({
    name: "Admin User",
    email: "admin@example.com",
    lastLogin: "2024-01-15 14:30",
    role: "Administrator",
  });

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        totalProducts: 156,
        activeProducts: 142,
        outOfStock: 14,
        totalOrders: 342,
        totalRevenue: 45230,
        totalCustomers: 189,
      });

      setRecentProducts([
        {
          id: 1,
          name: "Wireless Headphones",
          category: "Electronics",
          price: 129.99,
          stock: 45,
        },
        {
          id: 2,
          name: "Organic Coffee",
          category: "Food & Beverage",
          price: 24.99,
          stock: 12,
        },
        {
          id: 3,
          name: "Yoga Mat",
          category: "Fitness",
          price: 39.99,
          stock: 23,
        },
        {
          id: 4,
          name: "Desk Lamp",
          category: "Home & Office",
          price: 49.99,
          stock: 8,
        },
        {
          id: 5,
          name: "Smart Watch",
          category: "Electronics",
          price: 299.99,
          stock: 15,
        },
      ]);
    }, 500);
  }, []);

  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: <FaBox className="w-6 h-6" />,
      color: "bg-blue-500",
      textColor: "text-blue-600",
      trend: "+12%",
      description: "From last month",
    },
    {
      title: "Active Orders",
      value: stats.totalOrders,
      icon: <FaShoppingCart className="w-6 h-6" />,
      color: "bg-green-500",
      textColor: "text-green-600",
      trend: "+8%",
      description: "From last week",
    },
    {
      title: "Total Revenue",
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: <FaDollarSign className="w-6 h-6" />,
      color: "bg-purple-500",
      textColor: "text-purple-600",
      trend: "+23%",
      description: "From last month",
    },
    {
      title: "Total Customers",
      value: stats.totalCustomers,
      icon: <FaUsers className="w-6 h-6" />,
      color: "bg-orange-500",
      textColor: "text-orange-600",
      trend: "+5%",
      description: "From last month",
    },
    {
      title: "Active Products",
      value: stats.activeProducts,
      icon: <FaChartLine className="w-6 h-6" />,
      color: "bg-teal-500",
      textColor: "text-teal-600",
      trend: "+15%",
      description: "From last quarter",
    },
    {
      title: "Out of Stock",
      value: stats.outOfStock,
      icon: <FaExclamationTriangle className="w-6 h-6" />,
      color: "bg-red-500",
      textColor: "text-red-600",
      trend: "-3%",
      description: "From last week",
      warning: true,
    },
  ];

  const quickActions = [
    {
      label: "Add New Product",
      icon: <FaBox className="w-5 h-5" />,
      color: "bg-blue-50",
      textColor: "text-blue-700",
      hoverColor: "hover:bg-blue-100",
    },
    {
      label: "View Analytics",
      icon: <FaChartBar className="w-5 h-5" />,
      color: "bg-green-50",
      textColor: "text-green-700",
      hoverColor: "hover:bg-green-100",
    },
    {
      label: "Manage Orders",
      icon: <FaClipboardList className="w-5 h-5" />,
      color: "bg-purple-50",
      textColor: "text-purple-700",
      hoverColor: "hover:bg-purple-100",
    },
    {
      label: "Update Profile",
      icon: <FaUserEdit className="w-5 h-5" />,
      color: "bg-orange-50",
      textColor: "text-orange-700",
      hoverColor: "hover:bg-orange-100",
    },
  ];

  return (
    <div className="w-full bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with your products today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stats Cards */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statCards.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                    <div className={stat.textColor}>{stat.icon}</div>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      stat.warning ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium mb-2">{stat.title}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Recent Products Table */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Recent Products
              </h2>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                View All <span className="ml-1">→</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">
                      Product Name
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">
                      Category
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">
                      Price
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">
                      Stock
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">{product.name}</td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {product.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                            <div
                              className={`h-2 rounded-full ${
                                product.stock > 20
                                  ? "bg-green-500"
                                  : product.stock > 10
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{
                                width: `${Math.min(product.stock, 100)}%`,
                              }}
                            ></div>
                          </div>
                          <span>{product.stock}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            product.stock > 20
                              ? "bg-green-100 text-green-800"
                              : product.stock > 10
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.stock > 20
                            ? "In Stock"
                            : product.stock > 10
                            ? "Low Stock"
                            : "Critical"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Admin Info & Quick Stats */}
        <div className="space-y-6">
          {/* Admin Profile Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <FaUserCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {adminInfo.name}
              </h3>
              <p className="text-gray-600">{adminInfo.email}</p>
              <span className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {adminInfo.role}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Last Login</span>
                <span className="font-medium">{adminInfo.lastLogin}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Account Status</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Notifications</span>
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                  3
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center justify-between p-4 ${action.color} ${action.textColor} ${action.hoverColor} rounded-lg transition-colors`}
                >
                  <span className="font-medium">{action.label}</span>
                  {action.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Stock Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Stock Overview
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">In Stock</span>
                  <span className="font-medium">{stats.activeProducts}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${
                        (stats.activeProducts / stats.totalProducts) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Low Stock</span>
                  <span className="font-medium">
                    {Math.floor(
                      (stats.totalProducts -
                        stats.activeProducts -
                        stats.outOfStock) /
                        2
                    )}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${30}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Out of Stock</span>
                  <span className="font-medium">{stats.outOfStock}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{
                      width: `${
                        (stats.outOfStock / stats.totalProducts) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
