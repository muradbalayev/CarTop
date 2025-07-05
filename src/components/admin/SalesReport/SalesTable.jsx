
import React from "react";

const SalesTable = () => {
    const topProducts = [
        {
          id: 1,
          name: "Cappuccino",
          sales: 234,
          revenue: 1170
        },
        {
          id: 2,
          name: "Latte",
          sales: 186,
          revenue: 930
        },
        {
          id: 3,
          name: "Espresso",
          sales: 142,
          revenue: 568
        },
        {
          id: 4,
          name: "Americano",
          sales: 125,
          revenue: 500
        },
        {
          id: 5,
          name: "Mocha",
          sales: 98,
          revenue: 490
        }
      ];
    
      const recentSales = [
        {
          id: 1,
          customer: "John Doe",
          product: "Cappuccino",
          amount: 5.00,
          time: "2 minutes ago"
        },
        {
          id: 2,
          customer: "Alice Smith",
          product: "Latte + Extra Shot",
          amount: 6.50,
          time: "5 minutes ago"
        },
        {
          id: 3,
          customer: "Bob Johnson",
          product: "Espresso Double",
          amount: 4.00,
          time: "12 minutes ago"
        },
        {
          id: 4,
          customer: "Emma Wilson",
          product: "Mocha with Cream",
          amount: 5.50,
          time: "15 minutes ago"
        },
        {
          id: 5,
          customer: "Michael Brown",
          product: "Americano Large",
          amount: 4.50,
          time: "20 minutes ago"
        }
      ];
  return (
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
   {/* Top Products Table */}
   <div className="bg-white rounded-xl shadow-md p-6">
     <h2 className="text-xl font-semibold mb-4">Top Products</h2>
     <div className="overflow-x-auto">
       <table className="w-full">
         <thead className="bg-gray-50">
           <tr>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-gray-200">
           {topProducts.map((product) => (
             <tr key={product.id} className="hover:bg-gray-50">
               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                 {product.name}
               </td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {product.sales} orders
               </td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                 {product.revenue} ₼
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>

   {/* Recent Sales Table */}
   <div className="bg-white rounded-xl shadow-md p-6">
     <h2 className="text-xl font-semibold mb-4">Recent Sales</h2>
     <div className="overflow-x-auto">
       <table className="w-full">
         <thead className="bg-gray-50">
           <tr>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-gray-200">
           {recentSales.map((sale) => (
             <tr key={sale.id} className="hover:bg-gray-50">
               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                 {sale.customer}
               </td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {sale.product}
               </td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                 {sale.amount} ₼
               </td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {sale.time}
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>
 </div>
  )
}

export default SalesTable
