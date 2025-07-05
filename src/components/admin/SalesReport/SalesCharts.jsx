import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import React from 'react';
const SalesCharts = () => {
  const genderData = [
    { name: 'Male', value: 38.6 },
    { name: 'Female', value: 22.5 },
  ];

  const ageData = [
    { name: '18-25', value: 15.2 },
    { name: '26-35', value: 38.6 },
    { name: '36-45', value: 22.5 },
    { name: '46+', value: 23.7 },
  ];

  const monthlyData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
  ];

  const COLORS_GENDER = ['#214440', '#A8C5DA'];
  const COLORS_AGE = ['#214440', '#A8C5DA', '#4B7BE5', '#6D28D9'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 p-3 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-lg font-bold text-[#214440]">
            {payload[0].value}
            <span className="text-sm text-gray-500 ml-1">
              {payload[0].name === 'sales' ? 'orders' : '%'}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Monthly Sales Chart */}
      <div className="bg-gradient-to-br from-[#214440]/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Monthly Sales Overview</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#214440" stopOpacity={0.8}/>
                  {/* <stop offset="95%" stopColor="#214440" stopOpacity={0.2}/> */}
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="sales" 
                fill="url(#salesGradient)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Demographics Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Gender Distribution */}
        <div className="bg-gradient-to-br from-blue-50/50 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Gender Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS_GENDER[index % COLORS_GENDER.length]}
                      className="hover:opacity-80 transition-opacity"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="middle" 
                  align="right" 
                  layout="vertical"
                  wrapperStyle={{
                    paddingLeft: "20px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Age Distribution */}
        <div className="bg-gradient-to-br from-purple-50/50 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Age Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ageData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS_AGE[index % COLORS_AGE.length]}
                      className="hover:opacity-80 transition-opacity"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="middle" 
                  align="right" 
                  layout="vertical"
                  wrapperStyle={{
                    paddingLeft: "20px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCharts;
