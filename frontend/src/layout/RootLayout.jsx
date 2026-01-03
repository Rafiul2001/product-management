import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="relative h-screen">
      <Navbar className="absolute bg-gray-500 top-0 left-0 right-0 h-20" />
      <main className="absolute w-screen top-20 bottom-20  overflow-auto">
        <Outlet />
      </main>
      <Footer className="absolute bg-gray-400 bottom-0 left-0 right-0 h-20" />
    </div>
  );
};

export default RootLayout;
