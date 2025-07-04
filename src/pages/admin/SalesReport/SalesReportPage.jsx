import React from 'react'
import SalesTable from '../../../components/admin/SalesReport/SalesTable'
import SalesTotals from '../../../components/admin/SalesReport/SalesTotals'
import SalesCharts from '../../../components/admin/SalesReport/SalesCharts'

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