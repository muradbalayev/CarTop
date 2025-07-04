import React from 'react'
import SalesCharts from '../../../components/Admin/SalesReport/SalesCharts'
import SalesTable from '../../../components/Admin/SalesReport/SalesTable'
import SalesTotals from '../../../components/Admin/SalesReport/SalesTotals'

function SalesReportPage() {
  return (
    <div className="wrapper-admin">
      <header className="header">
        <h1 className="header-title">
          Sales Report
        </h1>
      </header>
      <SalesTotals />
      <SalesCharts />
      <SalesTable />
    </div>
  )
}

export default SalesReportPage