import React, { useState, useRef } from "react";
import AddNotificationModal from "./components/AddNotificationModal";
import EditNotificationModal from "./components/EditNotificationModal";
import { MdEdit } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import { FiTrash2 } from "react-icons/fi";

import {
  useGetNotificationsQuery,
  useDeleteNotificationMutation,
} from "../../../redux/services/adminNotificationsApi";
import ErrorMessage from "../../../hooks/ErrorMessage";
import Swal from "sweetalert2";





const AdminNotificationsPage = () => {
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, refetch } = useGetNotificationsQuery({
    page: currentPage,
    name: filterText,
  });
  const [deleteNotification, { isLoading: isDeleting }] = useDeleteNotificationMutation();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingNotification, setEditingNotification] = useState(null);



  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Silmək istədiyinizə əminsiniz?',
      text: "Bu addım geri qaytarıla bilməz!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Davam et'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNotification(id);
        refetch();
      }
    });
  };

  const handleEdit = (notification) => {
    setEditingNotification(notification);
    setShowEditModal(true);
  };

  // const fakeNotifications = [
  //   {
  //     _id: "1",
  //     title: "Yeni kurs əlavə olundu",
  //     message: "Frontend təlimləri üçün yeni kurs aktiv edildi.",
  //     createdAt: new Date("2024-07-01T10:00:00Z"),
  //   },
  //   {
  //     _id: "2",
  //     title: "Sistemdə yenilənmə",
  //     message: "Panel interfeysi yeniləndi və performans artırıldı.",
  //     createdAt: new Date("2024-07-02T12:30:00Z"),
  //   },
  //   {
  //     _id: "3",
  //     title: "Qeydiyyat uğurla tamamlandı",
  //     message: "Yeni istifadəçi qeydiyyatı uğurla başa çatdı.",
  //     createdAt: new Date("2024-07-03T09:15:00Z"),
  //   },
  //   {
  //     _id: "4",
  //     title: "Ödəniş qəbul edildi",
  //     message: "Premium üzvlük üçün ödəniş təsdiqləndi.",
  //     createdAt: new Date("2024-07-03T14:45:00Z"),
  //   },
  //   {
  //     _id: "5",
  //     title: "Bildiriş sistemi aktivdir",
  //     message: "Yeni bildirişləri indi real vaxtda görə bilərsiniz.",
  //     createdAt: new Date("2024-07-04T08:20:00Z"),
  //   },
  // ];

  if (isLoading)
    return (
      <div className="loader-container w-full flex justify-center items-center min-h-screen gap-3">
        <CircularProgress />
      </div>
    );

//   if (isError) return <ErrorMessage />;

  return (
    <div className="wrapper-admin wallet pb-8">
      {showAddModal && (
        <AddNotificationModal setShowAddModal={setShowAddModal} onSuccess={refetch} />
      )}
      {showEditModal && editingNotification && (
        <EditNotificationModal
          setShowEditModal={setShowEditModal}
          notification={editingNotification}
          onSuccess={refetch}
        />
      )}
      <header className="header flex items-center justify-between pe-10">
        <h1 className="header-title">Bildirişlər</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-[#1A1A1A] text-white rounded-md hover:bg-blue-700 transition"
          >
            Əlavə et +
          </button>
        </div>
      </header>
      <main className="md:mt-8 mt-12 overflow-auto flex flex-col poppins">
        <table className="min-w-[750px]">
          <thead>
            <tr>
              <th>Başlıq</th>
              <th>Mesaj</th>
              <th>Yaradılma Tarixi</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((notification) => (
              <tr key={notification._id}>
                <td>{notification.title}</td>
                <td>{notification.message}</td>
                <td>
                  {notification.createdAt
                    ? new Date(notification.createdAt).toLocaleString("az-AZ")
                    : ""}
                </td>
                <td className="space-x-3">
                  <button
                    onClick={() => handleEdit(notification)}
                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-200 hover:scale-105"
                  >
                    <MdEdit size={18} />
                  </button>
                  <button
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200 hover:scale-105"
                    onClick={() => handleDelete(notification._id)}
                  >
                    {isDeleting ? (
                      <CircularProgress size={18} />
                    ) : (
                      <FiTrash2 size={18} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminNotificationsPage;
