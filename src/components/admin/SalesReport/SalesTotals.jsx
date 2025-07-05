import React from "react";
import {
  Coffee,
  TrendingUp,
  Users,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight
} from "lucide-react";

const SalesTotals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Total Sales"
        value="2,345"
        change="+12.5%"
        isPositive={true}
        icon={<TrendingUp className="w-6 h-6 text-[#214440]" />}
        subtitle="Total orders this month"
      />
      <StatCard 
        title="Total Customers"
        value="1,234"
        change="+5.2%"
        isPositive={true}
        icon={<Users className="w-6 h-6 text-blue-600" />}
        subtitle="Active customers"
      />
      <StatCard 
        title="Average Order"
        value="45.50 ₼"
        change="-2.4%"
        isPositive={false}
        icon={<Coffee className="w-6 h-6 text-purple-600" />}
        subtitle="Per customer"
      />
      <StatCard 
        title="Total Revenue"
        value="12,345 ₼"
        change="+8.3%"
        isPositive={true}
        icon={<Wallet className="w-6 h-6 text-green-600" />}
        subtitle="Current period"
      />
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, isPositive, icon, subtitle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <div className="bg-gray-50 flex items-center gap-2 rounded-xl p-3 group-hover:scale-105 transition-transform duration-200">
            {icon}
            <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
          </div>
          <div>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-2xl font-bold text-gray-800">{value}</p>
              <span 
                className={`flex items-center text-sm font-medium px-2.5 py-0.5 rounded-full ${
                  isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                }`}
              >
                {isPositive ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                )}
                {change}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          </div>
        </div>
        
        {/* Simple Progress Bar */}
        {/* <div className="w-16 flex flex-col items-center">
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
            <div 
              className={`h-1.5 rounded-full ${
                isPositive ? 'bg-green-500' : 'bg-red-500'
              }`}
              style={{ width: isPositive ? '85%' : '45%' }}
            ></div>
          </div>
        </div> */}
      </div>
      
      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-between text-sm text-gray-500 hover:text-[#214440] transition-colors group">
          <span>Last 7 days</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default SalesTotals;