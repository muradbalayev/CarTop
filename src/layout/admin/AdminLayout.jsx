import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import React,  { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import "../../styles/Admin/Sidebar.css";
import "../../styles/Admin/Admin.scss";
import 'yet-another-react-lightbox/styles.css';

const AdminLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuButtonRef = useRef(null);

  return (
    <div className="flex relative h-screen overflow-hidden mx-auto">
      <div
        ref={menuButtonRef}
        className="menu-btn-wrapper"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <IoMenu
          className="bg-[#2f2f2f] rounded-xl p-2 z-40 sm:hidden block absolute top-5 right-5 cursor-pointer"
          size={40}
          color="white"
        />
      </div>

      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        menuButtonRef={menuButtonRef}
      />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
