import React from 'react'
import SalesTable from '../../../components/admin/SalesReport/SalesTable'
import SalesTotals from '../../../components/admin/SalesReport/SalesTotals'
import SalesCharts from '../../../components/admin/SalesReport/SalesCharts'
import { Wallet } from 'lucide-react'

function SalesReportPage() {
  return (
    <div className="wrapper-admin relative flex flex-col gap-5">
      {/* Header Section */}
      <div className="flex justify-between items-center p-2">
        <h1 className="title text-2xl md:text-4xl font-bold text-gray-800">
          Sales Report
        </h1>
        <div className="flex items-center gap-2 bg-[#214440] text-white px-4 py-2 rounded-lg shadow-lg">
          <Wallet className="w-5 h-5" />
          <span className="font-semibold">1000 ₼</span>
        </div>
      </div>

      <SalesTotals />

      {/* Charts Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <SalesCharts />
      </div>

      <SalesTable />
    </div>
  )
}

export default SalesReportPage