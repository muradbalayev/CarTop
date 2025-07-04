
import React from 'react'

import { FaChartLine } from "react-icons/fa6";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";
import { LuUsersRound, LuPackage2 } from "react-icons/lu";

const SalesTotals = () => {
  const totalData = [
    {
      id: 1,
      name: "Total Users",
      sales: "40,689",
      icon: <LuUsersRound size={45} color="#00B69B" />,
      exchange: "",
      arrowicon: <IoTrendingUp color="#00B69B" />,
      percentage: "8.5% Up from yesterday",
    },
    {
      id: 2,
      name: "Total Order",
      sales: "10,293",
      icon: <LuPackage2 size={45} color="orange" />,
      exchange: "",
      arrowicon: <IoTrendingUp color="#00B69B" />,
      percentage: "1.3% Up from past week",
    },
    {
      id: 3,
      name: "Total Sales",
      sales: "80,600₼",
      icon: <FaChartLine size={45} color="green" />,
      exchange: "",
      arrowicon: <IoTrendingDown color="red"/>,
      percentage: "4.3% Down from yesterday",
    },
  ];

  return (
    <div className="totals md:mt-8 mt-14 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {totalData.map((total) => (
        <div
          key={total.id}
          className="total-card cursor-pointer hover:shadow-xl shadow-md min-h-48 p-4 rounded-lg min-w-[150px]">
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-5  ">
                <p className="text-gray-500 lg:text-base text-sm">{total.name}</p>
                <p className="lg:text-2xl text-lg font-bold ">{total.sales}</p>
              </div>
              {total.icon}
            </div>
            <div className="flex items-center gap-2 text-gray lg:text-base text-xs">
              {total.arrowicon}
              {total.percentage}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesTotals;
