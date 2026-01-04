import { Outlet } from "react-router";
import Sidebar from "../pages/Dashboard/Sidebar";
import { AiOutlineDoubleLeft } from "react-icons/ai";

const DashboardLayout = () => {
  return (
    <div className="relative w-screen h-screen">
      <Sidebar className="absolute left-0 top-0 bottom-0 w-60 overflow-hidden p-4 shadow-md shadow-blue-400" />
      <AiOutlineDoubleLeft size={24} />
      <div className="absolute left-60 right-0 top-0 bottom-0 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
