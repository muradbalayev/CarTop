import { NavLink, Link } from "react-router-dom";
import { FaAddressCard, FaChartLine, FaMoneyBills, FaPhone, FaUser } from "react-icons/fa6";
import React, { useCallback, useEffect, useRef } from "react";
import { BiLink, BiLogOut, BiSolidArchive } from "react-icons/bi";
import {
  FaBlog,
  FaCog,
  FaCommentAlt,
  FaFolderOpen,
  FaImage,
  FaInstagram,
  FaShoppingBasket,
  FaStore,
  FaBell, // added for notifications
  FaPercent // added for discounts
} from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useLogout from "../../hooks/useLogout";
import { LuAirplay } from "react-icons/lu";
import { RiCoupon3Line } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";

const Sidebar = ({ isMobileOpen, setIsMobileOpen, menuButtonRef }) => {
  const mobileSidebarRef = useRef(null);

  const logout = useLogout();

  const handleClickOutside = useCallback(
    (event) => {
      if (
        mobileSidebarRef.current &&
        !mobileSidebarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    },
    [setIsMobileOpen, menuButtonRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const SIDEBARITEMS = [
    {
      id: 1,
      title: "Sales Report",
      icon: <FaChartLine size={20} />,
      path: "/admin/dashboard",
    },
    {
      id:2,
      title:  "İstifadəçilər",
      icon: <FaUser size={20} />,
      path: "/admin/dashboard/users",
    },
    // {
    //   id: 3,
    //   title: "Məhsullar",
    //   icon: <FaShoppingBasket size={20} />,
    //   path: "/admin/dashboard/products",
    // },
    {
      id: 4,
      title: "Sifarişlər",
      icon: <FaShoppingBasket size={20} />,
      path: "/admin/dashboard/orders",
    },
  ];

  return (
    <>
      <div className="sidebar md:min-w-52 sm:min-w-40 sm:flex hidden relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center py-6"
        >
          <Link to="/" className="absolute top-3 left-3">
            <IoHome size={22} color="gray" />
          </Link>
          <div className="p-3 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl mb-3">
            <FaUser className="text-white text-2xl" />
          </div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Admin Panel
          </h3>
        </motion.div>
        <nav className="links flex flex-col z-0 overflow-auto mb-4">
          {SIDEBARITEMS.map((item) => (
            <NavLink
              key={item.id}
              className={({ isActive }) => `
              flex items-center link transition-all
              text-sm font-medium
              ${isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }
            `}
              to={item.path}
              end
            >
              {item.icon}
              <p> {item.title}</p>
            </NavLink>
          ))}
        </nav>
        {/* <motion.div
          className="px-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="http://89.116.39.5:8080/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center p-3 rounded-xl
            bg-green-50 hover:bg-green-100 text-green-600 transition-colors"
          >
            <FaFolderOpen className="mr-2 text-lg" />
            <span className="text-sm font-medium">File Browser</span>
          </a>
        </motion.div> */}
        <motion.div
          className="px-3 pb-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={logout}
            className="w-full flex items-center justify-center p-3 rounded-xl
          bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
          >
            <BiLogOut className="mr-2 text-lg" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </motion.div>
      </div>

      <div
        ref={mobileSidebarRef}
        className={`mobile-sidebar text-white w-[80%] z-10 opacity-100 sm:hidden items-center justify-start fixed ${isMobileOpen ? "left-0" : "-left-full"
          }`}
      >
        <div className="w-full flex flex-col gap-3 items-center justify-start mt-6">
          <div className="profile-img flex bg-gray-100 rounded-full transition duration-300 sm:p-5 p-3">
            <FaUser color="gray" size={50} />
          </div>
          <h3 className="poppins text-sm text-center">Coffee Shop Name</h3>
        </div>
        <nav className="links w-full mt-10 overflow-auto mb-4">
          {SIDEBARITEMS.map((item) => (
            <NavLink
              className={({ isActive }) => `
            flex items-center link transition-all
            text-sm font-medium
            ${isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }
          `}
              key={item.id}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              end
            >
              {item.icon}
              <p>{item.title}</p>
            </NavLink>
          ))}
        </nav>
        {/* <motion.div
          className="px-3 mb-2 w-1/2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="http://89.116.39.5:8080/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center p-3 rounded-xl
            bg-green-50 hover:bg-green-100 text-green-600 transition-colors"
          >
            <FaFolderOpen className="mr-2 text-lg" />
            <span className="text-sm font-medium">File Browser</span>
          </a>
        </motion.div> */}

        <motion.div className="px-3 py-4 w-1/2">
          {/* ... existing mobile logout button ... */}
        </motion.div>
        <motion.div
          className="px-3 py-4 w-1/2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={logout}
            className="w-full flex items-center justify-center p-3 pr-5 rounded-xl
          bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
          >
            <BiLogOut className="mr-2 text-lg" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
