import React, { useState } from "react";
import { CircularProgress, Chip } from "@mui/material";
import { FiTrash2, FiEye } from "react-icons/fi";
import { Pagination } from "../../../hooks/Pagination";
import { useGetOrdersQuery } from "../../../redux/services/adminOrderApi";
// import OrderModal from "./OrderModal";

const AdminOrdersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { data, isLoading, isError } = useGetOrdersQuery({
    page: currentPage,
  });

  
  // Handle showing order details in modal
  const handleShowDetails = (order) => {
    setSelectedOrder(order);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const getPaginationRange = () => {
    if (!data?.totalPages) return [];

    const range = [];
    const showPages = 3;
    const totalPages = data.totalPages;
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    if (start > 1) {
      range.push(1);
      if (start > 2) range.push("...");
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) range.push("...");
      range.push(totalPages);
    }

    return range;
  };

  
const formatDateRange = (startDate, endDate) => {
  if (!startDate) return "";
  
  // Parse dates
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  
  // Month names in Azerbaijani
  const months = [
    "yanvar", "fevral", "mart", "aprel", "may", "iyun",
    "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"
  ];
  
  // Format start date
  const startDay = start.getDate();
  const startMonth = months[start.getMonth()];
  
  // If no end date or same as start date
  if (!end || start.toDateString() === end.toDateString()) {
    return `${startDay} ${startMonth} ${start.getFullYear()}`;
  }
  
  // If same month
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${startDay}-${end.getDate()} ${startMonth} ${start.getFullYear()}`;
  }
  
  // Different months
  const endDay = end.getDate();
  const endMonth = months[end.getMonth()];
  return `${startDay} ${startMonth} ${start.getFullYear()} - ${endDay} ${endMonth} ${end.getFullYear()}`;
};

const orders = {
    orders: [
      {
        _id: "1",
        user: {
          firstName: "Murad",
          secondName: "Balayev",
          email: "murad.balayev@example.com",
          phoneNumber: "+994553951010",
          profilePicture: ""
        },
        totalAmount: 3,
        price: 14.5,
        originalPrice: 17,
        createdAt: "2025-07-01T12:30:00.000Z",
        status: "pending"
      },
      {
        _id: "2",
        user: {
          firstName: "Aysel",
          secondName: "Hüseynova",
          email: "aysel.huseynova@example.com",
          phoneNumber: "+994505551122",
          profilePicture: ""
        },
        totalAmount: 2,
        price: 9,
        originalPrice: 9,
        createdAt: "2025-07-02T09:15:00.000Z",
        status: "approved"
      },
      {
        _id: "3",
        user: {
          firstName: "Kamran",
          secondName: "Əliyev",
          email: "kamran.aliyev@example.com",
          phoneNumber: "+994704441122",
          profilePicture: ""
        },
        totalAmount: 1,
        price: 5,
        originalPrice: 6,
        createdAt: "2025-06-30T18:45:00.000Z",
        status: "rejected"
      },
      {
        _id: "4",
        user: {
          firstName: "Nigar",
          secondName: "Məmmədova",
          email: "nigar.mammadova@example.com",
          phoneNumber: "+994505551133",
          profilePicture: ""
        },
        totalAmount: 4,
        price: 18,
        originalPrice: 20,
        createdAt: "2025-07-03T08:05:00.000Z",
        status: "approved"
      },
      {
        _id: "5",
        user: {
          firstName: "Elvin",
          secondName: "Quliyev",
          email: "elvin.quliyev@example.com",
          phoneNumber: "+994555678910",
          profilePicture: ""
        },
        totalAmount: 2,
        price: 10,
        originalPrice: 10,
        createdAt: "2025-06-29T11:00:00.000Z",
        status: "pending"
      },
      {
        _id: "6",
        user: {
          firstName: "Zəhra",
          secondName: "Rzayeva",
          email: "zehra.rzayeva@example.com",
          phoneNumber: "+994505551144",
          profilePicture: ""
        },
        totalAmount: 5,
        price: 22.5,
        originalPrice: 25,
        createdAt: "2025-07-03T14:45:00.000Z",
        status: "rejected"
      }
    ]
  };
  


  if (isLoading)
    return (
      <div className="loader-container w-full flex justify-center items-center min-h-screen gap-3">
        Loading...
      </div>
    );

//   if (isError) return <ErrorMessage />;

  return (
    <div className="wrapper-admin pb-8 ">
      <header className="header flex items-center justify-between pe-10">
        <h1 className="header-title">Sifarişlər</h1>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">
            {data?.total || 0} sifariş tapıldı
          </div>
        </div>
      </header>
      <main className="md:mt-8 mt-12 overflow-auto flex flex-col poppins">
        {/* Products Table */}
        <table className="min-w-[750px]">
          <thead>
            <tr>
              <th>İstifadəçi</th>
              <th>Məhsul sayı</th>
              <th>Ümumi məbləğ</th>
              <th>Tarix</th>
              <th>Status</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
            {orders?.orders?.map((order) => (
              <tr key={order._id}>
                <td>
                  <div className="flex items-center gap-2">
                    {order?.user?.profilePicture ? (
                      <img
                        src={`${import.meta.env.VITE_API_IMAGE_URL}/public/uploads/users/profile_pictures/${order.user.profilePicture}`}
                        alt={order.user.firstName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                        {order?.user?.firstName?.charAt(0) || '?'}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold">
                        {order?.user ? `${order.user.firstName} ${order.user.secondName}` : "Undefined"}
                      </div>
                      <div className="text-xs text-gray-500">
                        {order?.user?.email || order?.user?.phoneNumber || "No contact"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">{order?.totalAmount || 0}</span>
                  </div>
                </td>
                <td>
                  <div className="font-semibold">{order?.price || 0} AZN</div>
                  {order?.originalPrice !== order?.price && (
                    <div className="text-xs text-gray-500 line-through">{order?.originalPrice} AZN</div>
                  )}
                </td>
                <td>
                  <div className="text-sm">
                    {formatDateRange(order?.createdAt)}
                  </div>
                </td>
                <td>
                  <Chip
                    label={
                      order?.status.charAt(0).toUpperCase() +
                      order?.status.slice(1)
                    }
                    size="small"
                    color={order?.status === "pending" ? "warning" : order?.status === "approved" ? "success" : "error"}
                    variant="outlined"
                  />
                </td>
                <td className="space-x-3 min-w-48">
                  <button
                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200 hover:scale-105"
                    onClick={() => handleShowDetails(order)}
                    title="Sifariş detalları"
                  >
                    <FiEye size={18} />
                  </button>
                  {/* <button
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200 hover:scale-105"
                    onClick={() => handleDelete(order._id, "deleteOrder")}
                    title="Sifarişi sil"
                  >
                    {isDeleting ? (
                      <CircularProgress size={18} />
                    ) : (
                      <FiTrash2 size={18} />
                    )}
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      {data?.orders?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          getPaginationRange={getPaginationRange}
          data={data}
          setCurrentPage={setCurrentPage}
          isFetching={isLoading}
        />
      )}
      
      {/* Order Details Modal */}
      {/* {selectedOrder && (
        <OrderModal data={selectedOrder} onClose={handleCloseModal} />
      )} */}
    </div>
  );
};

export default AdminOrdersPage;
